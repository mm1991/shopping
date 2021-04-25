/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'


Route.post('cartSubmit', 'CartsController.submit').middleware('login')

Route.get('getGoods', 'IndicesController.getGoods').middleware('login')

Route.post('addGoods', 'AdminGoodsController.index').middleware('login')

Route.post('delGoods', 'AdminGoodsController.delete').middleware('login')

Route.post('login', 'LoginController.index')

Route.get('ware', 'WarehousesController.index')

Route.get('logistics', 'LogisticsController.index')

