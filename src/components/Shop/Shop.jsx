// import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import AddButton from "../UI/AddButton";




const Shop = (props) => {
    const transformData = (items) => {
        return items.map(item=>{
            return (
                <li key={item._id} className="list-unstyled d-flex align-items-center justify-content-between mb-2 ">
                    <span>{item.name}</span>
                    <span>{item.desciption}</span>
                    <span>Rs. {item.price}</span>
                    <AddButton size='L' quantity={item.lqty} data={item} />
                    <AddButton size='M' quantity={item.mqty} data={item} />
                    <AddButton size='S' quantity={item.sqty} data={item} />
                </li>
            )
        })
    }

    // const {fdata} = props;
    // useEffect(()=>{
    //     (async()=>{
    //         const items = await fetchFromBackend();
    //         setProducts(transformData(items));
    //     })();
    // },[]);

    const products = transformData(props.data);

    return (
        <Container className="bg-light rounded-5 pt-5 pb-5">
            <ul>
                {products}
            </ul>
        </Container>
    );
}

export default Shop;