import Orders from '../../Models/Order';
import {OrderDefine} from '../interface/define';
import {queryGoods, updateGoods} from './Goods';

export async function addOrders(obj: OrderDefine[]) {
    for (const ele of obj) {
        const result = await queryGoods(ele.gid, ele.amount);
        if (!result) {
            return false;
        }
    }
    const data = {
        goods: JSON.stringify(obj)
    };
    const result = await Orders.create(data);
    for (const ele of obj) {
        await updateGoods(ele.gid, ele.amount);
    }
    return result.oid;
}
