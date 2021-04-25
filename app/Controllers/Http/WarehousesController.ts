
import Rabbit from '@ioc:Adonis/Addons/Rabbit';
import {addWare} from '../Database/Warehouse';

export default class WarehousesController {
    public async index ({request}: HttpContextContract) {
        await Rabbit.assertExchange('orderExchange', 'fanout');
        await Rabbit.bindQueue('orderQueue', 'orderExchange', '');
        await Rabbit.consumeFrom('orderQueue', (message) => {
            let oid = message.content;
            console.log('ware');
            console.log(oid);
            message.ack();
            addWare(oid);
        });
        return {
            errno: 0
        }
    }
}
