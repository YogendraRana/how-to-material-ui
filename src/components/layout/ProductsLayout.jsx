import { Typography } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

const ProductsLayout = () => {
  return (
    <div>
        <Typography variant='h4'>All products</Typography>

        <Outlet />
    </div>
  )
}

export default ProductsLayout