import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";

export const productsLoader = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    if(!res.ok){throw new Error("Something wrong!")};

    const products = await res.json();
    return products;
}

const Products = () => {
    const products = useLoaderData();
    const navigation = useNavigation();
    const navigate = useNavigate();

    if(navigation.state === 'loading') {
        return <p>Loading...</p>
    }
    
    return (
        <div>            
            {
                products.map((product, index) => {
                    return (
                        <div key={index}>
                            ID: {product.id} 
                            <br />
                            Title: {product.title} 
                            <br />
                            Description: {product.body}
                            <br />
                            <button onClick={() => navigate(`${product.id}`)}>Detail</button>
                            <br />
                            <br />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products;