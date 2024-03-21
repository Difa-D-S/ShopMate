import React, { useCallback, useEffect, useState } from 'react'

const ProductList = () => {
    
    // const [counter, setCounter] = useState(0);
    const [product, setProduct] = useState([]);
    const [url, setUrl] = useState("");

    // console.log(product);

    const FetchData = useCallback(
        async () => {
                const response = await fetch(url);
                const data = await response.json();
                setProduct(data)
    }, [url])                           // const FetchData = async () => {
                                        //     const response = await fetch(url);
                                        //     const data = await response.json();
                                        //     setProduct(data)
                                        // }

    useEffect( () => {
        FetchData();                  // --- --- //
        // console.log(FetchData);          // fetch("")
                                            // .then(response => response.json)
                                            // .then(data => setProduct(data))
                                            // console.log("hello")
    }, [url])

    // useEffect( () => {
    //     console.log(counter);
    // }, [counter])

  return (
    <section>
        {/* <p>{counter}</p> */}/
        <div className='filter'>
            {/* <button onClick={ () => {setCounter(counter + 1)}}>{counter}</button> */}
            <button onClick={ () => {setUrl("")}}> All</button>
            <button onClick={ () => {setUrl("")}}>Instock</button>
        </div>

        {product.map( (product) => (
            <div className='card' key={product.id}>
                <p className='id'>{product.id}</p>
                <p className='name'>{product.name}</p>
                <p className='info'> <span> {product.price} </span> 
                    <span  className={product.in_stock ? "instock" : "unavailable"}> {product.in_stock ? "In stock" : "UnAvailable"} </span></p>
            </div>
        ))}
        
    </section>
  )
}

export default ProductList