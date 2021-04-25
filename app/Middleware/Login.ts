import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Login {
  public async handle ({request, session, response}: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    const uss = request.cookie('uss');
    if (!session.get(uss)) {
      response.unauthorized('Not Login.')
    }
    await next()
  }
}
