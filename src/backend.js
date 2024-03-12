
const saveProductsBackend = async(product) => {
    try{
        const res = await fetch('https://crudcrud.com/api/c688a7cf232b4e99b6f310a17b9f7401/shop',{
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'Application/json',
            }
        });
        if(!res.ok){
            throw new Error('Something went wrong');
        }
        const resData = await res.json();
        // console.log(resData);
        return resData;
    }
    catch(err){
        alert(err.message);
    }
}


const fetchProductsBackend = async() =>{
    try{
        const res = await fetch('https://crudcrud.com/api/c688a7cf232b4e99b6f310a17b9f7401/shop');
        if(!res.ok){
            throw new Error('Something went wrong');
        }
        const resData = await res.json();
        console.log(resData);
        return resData;
    }
    catch(err){
        throw err;
    }
}

const fetchCartBackend = async() =>{
    try{
        const res = await fetch('https://crudcrud.com/api/c688a7cf232b4e99b6f310a17b9f7401/cart');
        if(!res.ok){
            throw new Error('Something went wrong');
        }
        const resData = await res.json();
        console.log(resData);
        return resData;
    }
    catch(err){
        throw err;
    }
}

const saveCartBackend = async(product) =>{
    try{
        const res = await fetch('https://crudcrud.com/api/c688a7cf232b4e99b6f310a17b9f7401/cart',{
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'Application/json',
            }
        });
        if(!res.ok){
            throw new Error('Something went wrong');
        }
        const resData = await res.json();
        // console.log(resData);
        return resData;
    }
    catch(err){
        alert(err.message);
    }
}

module.exports = {
    fetchProductsBackend,
    fetchCartBackend,
    saveProductsBackend,
    saveCartBackend,
}