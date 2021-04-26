import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Logger from '@ioc:Adonis/Core/Logger';
import {verify, setuss} from '../../../utils/login';

export default class LoginController {
    public async index ({request, response, session}: HttpContextContract) {
        const body = request.post();
        let {username, password} = body;
        let result = await verify(username, password);
        Logger.info('/login %j', {
            url: request.url(),
            cookie: request.cookie('uss'),
            user: username,
            data: result
        });
        if (result) {
            response.cookie('uss', setuss(username, session))
            return {
                errno: 0,
                errmsg: 'success'
            }
        } else {
            return {
                errno: -1,
                errmsg: '用户名密码错误'
            }
        }
    }
}

