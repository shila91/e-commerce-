import { useRoutes,BrowserRouter } from 'react-router-dom' 
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Signin from '../Signin'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes ([
    { path:"/", element : <Home />},
    { path:"/clothes", element : <Home />},
    { path:"/all", element : <Home />},
    { path:"/electronics", element : <Home />},
    { path:"/furniture", element : <Home />},
    { path:"/shoes", element : <Home />},
    { path:"/other", element : <Home />},
    { path:"my-order", element : <MyOrder />},
    { path:"my-orders", element : <MyOrders />},
    { path:"my-orders/last", element : <MyOrder />},
    { path:"my-orders/:id", element : <MyOrder />},
    { path:"/*", element : <NotFound />},
    { path:"/sign-in", element : <Signin />},
  ])


  return routes
}
const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
