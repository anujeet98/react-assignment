import { useState } from "react"
import { Button } from "react-bootstrap";
import { saveCartBackend } from "../../backend";



const AddButton = (props) => {
    const [qty, setQty] = useState(props.quantity);

    const addToCartHandler = () => {
        if(qty<=0)
            return alert('Selected size is sold out');
        setQty(qty => qty-1);
        saveCartBackend({name: props.data.name, id:props.data._id, price: props.data.price, size: props.size});
    }

    const text = props.size==='L' ? 'BUY LARGE' : props.size==='M' ? 'BUY MEDIUM' : 'BUY SMALL';
    return (
        <Button onClick={addToCartHandler} >{text} ({qty})</Button>
    )
}
export default AddButton;