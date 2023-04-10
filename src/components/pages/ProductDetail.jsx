import React from 'react'
import { useLoaderData } from 'react-router-dom'

export const productDetailLoader = async ({params}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    if(!res.ok){
        throw new Error("Product not found!");
    }

    const product = await res.json();
    return product;
}

const ProductDetail = () => {
    const product = useLoaderData();

    return (
        <div>
            Product ID: {product.id}
            <br />
            Title: {product.title}
            <br />
            Description: {product.body}
            <br />
        </div>
    )
}

export default ProductDetail