import React, { useEffect } from 'react';
import classes from './Cart.module.css'
import Modal from '../Modal/Modal';
import CartItem from './CartItem';
// import CartContext from '../../contexts/store/cart-context';
// import CartItem from './CartItem';


const Cart = (props) => {    
    // const cartCtx = useContext(CartContext);
    const cartItems = []; 
    const m = new Map();
    props.data.forEach(item => {
        if(m.has(item.id)){
            const obj = m.get(item.id);
            obj.total += obj.price;
            if(item.size==='L')
                obj.lqty++;
            else if(item.size==='M')
                obj.mqty++;
            else    
                obj.sqty++;
            m.set(item.id, obj);
            // m.set(item.id, {...m.get(item.id) , total: +item.total+item.price, lqty: item.size==='L'?+item.lqty+1:+item.lqty,sqty: item.size==='S'?+item.sqty+1:+item.sqty, mqty: item.size==='M'?+item.mqty+1:+item.mqty})
        }
        else{
            m.set(item.id, {name: item.name, id: item.id, price: +item.price, total: +item.price, lqty: item.size==='L'?1:0, mqty: item.size==='M'?1:0, sqty: item.size==='S'?1:0})
        }
    })
    let cartTotal = 0;
    m.forEach((item,key) => {
        cartTotal+=item.total;
        cartItems.push(<CartItem key={item.id} data={item}/>);
    });

    return (
        <Modal onHideCart={props.onHideCart}>
            <ul className={classes.ul}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>Rs. {cartTotal}</span>
            </div>
            <div className={classes.btnGrp}>
                <button className={classes['button--cancel']} onClick={props.onHideCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;