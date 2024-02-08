import Layout from '../../Components/Layout'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'



function MyOrder() {
    const context = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    if (index === 'last') index = context.order?.length - 1
    
   
    return (
        
      <Layout>
        <div className='flex justify-center items-center relative w-72 mb-5'>
          <Link to='/my-orders' className='absolute left-0'>
            <ChevronLeftIcon className=' w-5 h-5 text-black cursor-pointer'/>
          </Link> 
          <h1>My Order</h1>
        </div>
        <div className=' px-3 overflow-y-scroll flex-1'>
            {
                context.order?.[index]?.products.map(product => (
                  <OrderCard
                    key={product.id} 
                    id={product.id}
                    title={product.title}
                    imageUrl={product.images}
                    price={product.price}
                />
              ))
            }
            </div>
        </Layout>
    )
    }
    
export default MyOrder
    