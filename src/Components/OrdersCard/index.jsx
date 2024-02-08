import { ChevronRightIcon } from "@heroicons/react/24/solid"
import { ShoppingBagIcon } from "@heroicons/react/24/solid"
import { CalendarDaysIcon } from "@heroicons/react/24/solid"



const OrdersCard = props => {
  const { totalPrice, totalProducts } = props
  
  return (
    <div className='flex justify-between w-80 items-center rounded-lg mt-5 mb-4 border border-black p-4 '>
      <div className='flex justify-between w-full '>
        <p className="flex flex-col">
        <CalendarDaysIcon className=' w-5 h-5 text-black cursor-pointer'/> 
        <span>07.02.24</span>
        <ShoppingBagIcon className=' w-5 h-5 text-black cursor-pointer'/> 
        <span className='font-sm' >{totalProducts} articles</span> 
        </p>
        <p className="flex gap-2 items-center">
          <span className='font-medium text-2xl'>${totalPrice}</span>
          <ChevronRightIcon className=' w-5 h-5 text-black cursor-pointer'/>
        </p>
      
      </div>
    </div>
  )
}

export default OrdersCard