import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

// components
import Home from './components/pages/Home';
import RootLayout from './components/layout/RootLayout';
import Products, { productsLoader } from './components/pages/Products';
import NotFound from './components/pages/NotFound';
import ProductDetail, { productDetailLoader } from './components/pages/ProductDetail';
import ProductError from './components/pages/ProductError';
import ProductsLayout from './components/layout/ProductsLayout';

// creating routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout /> }>
      <Route index element={<Home />} />

      <Route path='products' element={<ProductsLayout />} errorElement={<ProductError />} >
        <Route index loader={productsLoader} element={<Products />} />
        <Route path=':id' loader={productDetailLoader} element={<ProductDetail />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
