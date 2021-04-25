import Goods from '../../Models/Good';

export async function getAllGoods() {
    const result = await Goods.query()
        .where('amount', '>', 0);
    return result;
}


export async function addGoods(obj: { name: string, amount: number, price: number }) {
    const result = await Goods.create(obj);
    return result;
}


export async function delGoods(gid: number) {
    const result = await Goods.query()
        .where('gid', gid)
        .delete();
    return result;
}

export async function queryGoods(gid: number, amount: number) {
    const result = await Goods.query()
        .where('gid', gid)
        .where('amount', '>=', amount)
        .first();
    return result;
}

export async function updateGoods(gid: number, amount: number) {
    const result = await queryGoods(gid, amount);
    const updateResult = await Goods.query()
        .where('gid', gid)
        .update({amount: (result && result.amount - amount) || 0});
    return updateResult;
}
