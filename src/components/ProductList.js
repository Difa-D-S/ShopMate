import React, { useEffect, useState } from 'react'
import { useFetch } from '../Hooks/useFetch';

const ProductList = () => {

  const [counter, setCounter] = useState(0);
  // const [product, setProduct] = useState([])
  const [url, setUrl] = useState('http://localhost:8000/product')

  // console.log(product)

  const {data : product, loading, error} = useFetch(url)

  useEffect( () => {
      console.log(counter)
  }, [counter])

  return (
    <>
      <h1>ProductList</h1>

      <button onClick={() => setCounter(counter + 1)}> {counter} </button>

      <span> <button onClick={ () => {setUrl("http://localhost:8000/product")}}>All</button> </span>
      <span> <button onClick={ () => {setUrl("http://localhost:8000/product?in_stock=1")}}>InStock</button> </span>
    <section>
      <div>
        {loading && <p>Loading Products...</p>}

        {error && <p> Failed to Fetch</p>}

      {product && product.map((product) => (
        <div key={product.id}>
            <p>{product.id}</p>
            <p>{product.name}</p>
            <p>
              <span className='me-5'>${product.price}</span> 
              <span>{product.in_stock ? "InStock" : "Unavailable"}</span>
            </p>
        </div>
      ))}
      </div>
      </section>
    
    </>
  )
}

export default ProductList