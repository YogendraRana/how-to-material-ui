import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ProductError = () => {
    const error = useRouteError();

    return (
        <div>
            Error Message: {error.message}
            <br />
            Return: <Link to="/">Home</Link>
        </div>
    )
}

export default ProductError