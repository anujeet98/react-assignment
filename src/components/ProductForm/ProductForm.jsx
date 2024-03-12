import { Container, Form, Button} from "react-bootstrap";
import './ProductForm.css'
import { useRef } from "react";
import { saveProductsBackend } from "../../backend";




const ProductForm = (props) => {
    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const priceRef = useRef('');
    const largeRef = useRef('');
    const mediumRef = useRef('');
    const smallRef = useRef('');

    const formCleaner = () => {
        nameRef.current.value=''
        descriptionRef.current.value=''
        priceRef.current.value=''
        largeRef.current.value=''
        mediumRef.current.value=''
        smallRef.current.value=''
    }



    const submitHandler = async(e) => {
        e.preventDefault();
        const prodObj = {
            name: nameRef.current.value,
            desciption: descriptionRef.current.value,
            price: priceRef.current.value,
            lqty: largeRef.current.value,
            mqty: mediumRef.current.value,
            sqty: smallRef.current.value,
        }

        const result = await saveProductsBackend(prodObj);
        props.onSubmit(result);
        formCleaner();
    }

    return (
        <Container className="bg-light-subtle  shadow bg-transparent p-5 rounded-5">
            <Form onSubmit={(e)=>submitHandler(e)}>
                <div className="d-flex gap-4 align-items-center  justify-content-around mb-4">
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" ref={nameRef} placeholder="Enter Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" ref={descriptionRef} placeholder="Enter Description" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" ref={priceRef} placeholder="Enter Price" required />
                     </Form.Group>

                     <div className="d-flex flex-column align-items-center  justify-content-around">
                     <div className="d-flex justify-content-center ">Available Quantity</div>
                     <div className="d-flex gap-4">
                         <Form.Group className="" controlId="formBasicLarge">
                             <Form.Label>Large</Form.Label>
                             <Form.Control type="number" ref={largeRef} className="qty" required />
                         </Form.Group>
                         <Form.Group className="" controlId="formBasicMedium">
                             <Form.Label>Medium</Form.Label>
                             <Form.Control type="number" ref={mediumRef} className="qty" required />
                         </Form.Group>
                         <Form.Group className="m-0" controlId="formBasicSmall">
                             <Form.Label>Small</Form.Label>
                             <Form.Control type="number" ref={smallRef} className="qty" required />
                         </Form.Group>
                     </div>
                 </div> 
                </div>

                <Button variant="primary" type="submit">Add Product</Button>
            </Form>
        </Container>
    )
}

export default ProductForm