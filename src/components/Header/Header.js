import React from 'react';

import { selectCurrentUser } from '../../redux/user/User.selector.js'
import { selectCartHidden } from '../../redux/cart/Cart.selectors.js'
import { createStructuredSelector } from 'reselect'

import { connect } from 'react-redux';
import CartIcon from '../cart-icon/Cart-icon'
import CartDropdown from '../cart-dropdown/Cart-dropdown'


import { signOutStart } from '../../redux/user/User.actions'
import { auth } from '../../firebase/Firebase'
import { ReactComponent as Logo } from '../Assests.js/crown.svg';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './Header.styles';



const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/shop'>CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapDispatchToProps = dispatch => ({
	signOutStart: () => dispatch(signOutStart())
})

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);