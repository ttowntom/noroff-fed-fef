import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import RootLayout from './pages/Root';
import Home from './pages/home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: 'products', element: <Home /> },
      { path: 'products/:productId', element: <ProductDetails /> },
      { path: 'cart', element: <Cart /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
