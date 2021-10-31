import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;
    const numCartItems = 
        items.reduce((currentNumber, item) => {
            return currentNumber + item.amount;
        }, 0);
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        const timer = setTimeout(() => {
            setBtnIsHighlighted(true)   
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items]);

    return <button className = {btnClasses} onClick={props.onClick}>
        <span className = {classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className = {classes.badge}>{numCartItems}</span>
    </button>
};

export default HeaderCartButton;