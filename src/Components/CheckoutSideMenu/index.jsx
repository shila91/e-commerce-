import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from "@heroicons/react/24/solid"
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../Utils'
import './styles.css'



const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete =(id) => {
      const filteredProducts = context.cartProducts.filter(product => product.id !== id)
      context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
      const orderToAdd = {
        date: ' 2022-10-20',
        products: context.cartProducts,
        totalProducts: context.cartProducts.length,
        totalPrice: totalPrice(context.cartProducts)
      }
    
    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.setSearchByTitle(null)
    }
    
  

    return (
        <aside 
        className={`${context.isCheckoutSideMenuOpen ? 'flex' :'hidden' } checkout-side-menu  flex flex-col fixed  right-1 w-[325px] h-[430px] border-2 max-md:hidden
                border-black bg-white rounded-md`}>
            <div className='flex  justify-between items-center p-7'>
            <h2 className='font-medium text-2xl'>My order</h2>
            <div>
                <button 
                onClick={() => context.closeCheckoutSideMenu ()}>
                <XMarkIcon className="w-4 h-4 text-black"></XMarkIcon></button>
            </div>
            </div>
            <div className=' px-3 overflow-y-scroll flex-1'>
            {
                context.cartProducts.map(product => (
                  <OrderCard
                    key={product.id} 
                    id={product.id}
                    title={product.title}
                    imageUrl={product.images}
                    price={product.price}
                    handleDelete={handleDelete}
                />
              ))
            }
            </div>
            <div className='w-full px-3 pb-5 mb-5 rounded-sm'>
              <p className='flex  justify-between mt-4 mb-3'>
                <span className='font-sm'>Total:</span>
                <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
              </p>
              <Link to ='/my-orders/last'>
                <button 
                  className='bg-black text-white p-3 w-full rounded-lg'
                  onClick={() => handleCheckout ()}>Checkout</button>
              </Link>
              
            </div>
        </aside>
)
        
}

export default CheckoutSideMenu