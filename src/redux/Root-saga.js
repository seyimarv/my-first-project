import { all, call } from 'redux-saga/effects';


import {shopSagas} from './shop/Shop.saga'

import { userSagas } from './user/User.saga'

import { cartSagas } from './cart/Cart.saga'

export default function* rootSaga() {
	yield all([
      call(shopSagas),
      call(userSagas),
      call(cartSagas)

  ])
}