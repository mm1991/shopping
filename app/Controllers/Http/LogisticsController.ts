
import Rabbit from '@ioc:Adonis/Addons/Rabbit';
import {addLogistics} from '../Database/AddLogistics';

export default class LogisticsController {
    public async index ({request}: HttpContextContract) {
        await Rabbit.assertExchange('orderExchange', 'fanout');
        await Rabbit.bindQueue('oidQueue', 'orderExchange', '');
        await Rabbit.consumeFrom('oidQueue', (message) => {
            let oid = message.content;
            console.log('logistics');
            console.log(oid);
            message.ack();
            addLogistics(oid);
        });
        return {
            errno: 0
        }
    }
}