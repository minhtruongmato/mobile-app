import { combineReducers } from 'redux';
import login from './login'
import products from './products'
import cart from './cart'
import order from './order'

export default combineReducers({
  login,
  products,
  cart,
  order
})