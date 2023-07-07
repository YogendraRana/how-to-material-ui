import React from 'react'
import { Outlet } from 'react-router-dom'

const ProductsLayout = () => {
  return (
    <div>
        <p variant='h4'>All products</p>

        <Outlet />
    </div>
  )
}

export default ProductsLayout