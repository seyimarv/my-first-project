import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/User-reducer';
import cartReducer from './cart/Cart.reducer';
import directoryReducer from './directory/Directory.reducer'
import shopReducer from './shop/Shop.reducer'

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart']
}

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer
})


export default persistReducer(persistConfig, rootReducer);