import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
} from './header.styles';

import { ReactComponent as Logo } from '../../assets/4.3 crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { auth } from '../../firebase/firebase.utils';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo" />
        </LogoContainer>

        <OptionsContainer>
            <OptionLink to="/shop">Shop</OptionLink>

            <OptionLink to="/contact">Contact</OptionLink>
            {currentUser ? (
                <OptionLink
                    to="/"
                    as="div"
                    onClick={() => {
                        auth.signOut();
                    }}
                >
                    Sign Out
                </OptionLink>
            ) : (
                <OptionLink to="/signin">Sign In</OptionLink>
            )}
            <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
