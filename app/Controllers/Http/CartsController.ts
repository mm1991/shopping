import {addOrders} from '../Database/Orders';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Rabbit from '@ioc:Adonis/Addons/Rabbit';
import Logger from '@ioc:Adonis/Core/Logger';

export default class CartsController {
    public async submit ({request}: HttpContextContract) {
        const body = request.post();
        const added = JSON.parse(body.added);
        let result = await addOrders(added);
        await Rabbit.assertExchange('orderExchange', 'fanout');
        await Rabbit.sendToExchange('orderExchange', '', result + '');
        Logger.info('/Cartsubmit %j', {
            url: request.url(),
            cookie: request.cookie('uss'),
            data: result
        });
        if (result) {
            return {
                errno: 0,
                errmsg: 'success'
            }
        } else {
            return {
                errno: -1,
                errmsg: '下单失败，请刷新后重试'
            }
        }   
    }
}
