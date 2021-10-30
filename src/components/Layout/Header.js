import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton.js'
import mealsImage from '../../assests/meals.jpg';
import classes from './Header.module.css';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Food Meals</h1>
            <HeaderCartButton/>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='A table full of food'/>
        </div>
    </Fragment>
};

export default Header;