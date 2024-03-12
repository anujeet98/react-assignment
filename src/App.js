	import './App.css';
	import { Button, Container } from 'react-bootstrap';
	import ProductForm from './components/ProductForm/ProductForm';
	import Shop from './components/Shop/Shop';
	import { Fragment, useEffect, useState } from 'react';
	import { fetchCartBackend, fetchProductsBackend } from './backend';
	import Cart from './components/Cart/Cart';

	function App() {
		const [productData, setProductData] = useState([]);
		const [cart, setCart] = useState([]);
		const [cartIsShown, setCartIsShown] = useState(false);

		const productUpdateHandler = async() => {
			try{
				const data = await fetchProductsBackend();
				setProductData(data);
			}
			catch(err){
				console.error(err);
			}
		}

		const cartQtyUpdateHandler = async() => {
			try{
				const data = await fetchCartBackend();
				setCart(data);
			}
			catch(err){
				console.error(err);
			}
		}

		useEffect(()=>{
			productUpdateHandler();
			cartQtyUpdateHandler();
		},[cartIsShown]);

		const showCartHandler = () => {
		  setCartIsShown(true);
		};
	  
		const hideCartHandler = () => {
		  setCartIsShown(false);
		};

		return (
			<Fragment>
				{cartIsShown ? <Cart data={cart} onHideCart={hideCartHandler} /> : ""}
				<Container fluid className='bg-dark vh-100 d-flex flex-column gap-5 overflow-y-scroll '>
				<div className='pt-3 pb-3 pe-3 ms-auto'><Button className='ps-3 pe-3 pt-2 pb-2 btn btn-warning shadow ' onClick={showCartHandler}>Cart <span className='bg-light p-1 rounded-3 '>{cart.length}</span></Button></div>
				<ProductForm onSubmit={()=>productUpdateHandler()}/>
				<Shop data={productData} />
			</Container>
			</Fragment>
		);
	}

	export default App;
