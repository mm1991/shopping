import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { getAllGoods } from '../Database/Goods';
import Logger from '@ioc:Adonis/Core/Logger';

export default class IndicesController {
    public async getGoods ({request}: HttpContextContract) {
        const allGoods = await getAllGoods();
        Logger.info('/getGoods %j', {
            url: request.url(),
            cookie: request.cookie('uss')
        });
        return {
            errno: 0,
            errmsg: 'success',
            data: allGoods
        }
    }
}
