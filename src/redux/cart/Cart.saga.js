import {all, call, takeLatest, put } from 'redux-saga/effects';
import UserActionTypes from '../user/User.types';
import { clearCart  } from './Cart.actions';

export function* clearCartonSignOut() {
	yield put(clearCart());
}

export function* onSignOutSuccess() {
	yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartonSignOut )
}




export function* cartSagas() {
	yield(all([call(onSignOutSuccess)]))
}
