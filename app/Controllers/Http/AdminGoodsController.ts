import Logger from '@ioc:Adonis/Core/Logger';
import { addGoods, delGoods } from '../Database/Goods';
import {Goods, GoodsGid} from '../interface/define';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AdminGoodsController {
    public async index ({request}: HttpContextContract) {
        let data:Goods = request.post();
        
        Logger.info('/adminGoodsIndex %j', {
            url: request.url(),
            cookie: request.cookie('uss')
        });
        const result = await addGoods(data);
        if (result) {
            return {
                errno: 0,
                errmsg: '添加成功',
                data: result
            }
        } else {
            return {
                errno: -1,
                errmsg: '添加失败'
            }
        }
    }

    public async delete ({request}: HttpContextContract) {
        let data:GoodsGid = request.post();
        Logger.info('/adminGoodsDelete %j', {
            url: request.url(),
            cookie: request.cookie('uss')
        });

        const result = await delGoods(data.gid);
        if (result) {
            return {
                errno: 0,
                errmsg: '删除成功'
            }
        } else {
            return {
                errno: -1,
                errmsg: '删除失败'
            }
        }
    }
}
