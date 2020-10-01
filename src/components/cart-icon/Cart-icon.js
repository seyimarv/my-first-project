import React from 'react';
import { ReactComponent as ShoppingIcon } from '../Assests.js/Shopping.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/Cart.actions';
import { selectCartItemsCount } from '../../redux/cart/Cart.selectors'





import './cart-icon.scss';


const CartIcon = ({ toggleCartHidden, itemCount }) => (
 <div className='cart-icon' onClick={toggleCartHidden}> 
  <ShoppingIcon className='shopping-icon' />
  <span className='item-count'>{itemCount}</span>
 
 </div>                 


);

const mapStateToProps = state => ({
	itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);