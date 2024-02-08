import { useContext } from 'react'
import {PlusIcon, CheckIcon} from "@heroicons/react/24/solid"
import {ShoppingCartContext} from '../../Context'



const Card = (data) => { 
    const context = useContext(ShoppingCartContext)

    const showProduct = (ProductDetail) => {
        context.openProductDetail()
        context.setProductToShow(ProductDetail)
        context.closeCheckoutSideMenu()
    }
    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCartProducts([...context.cartProducts, productData])
        context.setCount(context.count + 1)
        context.openCheckoutSideMenu()
        context.closeProductDetail()
        
    }

    const rederIcon = (id) => {

        const isInCart = context.cartProducts.filter(product => product.id === data.data.id).length > 0
        
        if (isInCart){
        return (
        <div
            className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 ">
            <CheckIcon className=" h-4 rounded-lg bg-black text-white"></CheckIcon>
        </div>
        )
                

      } else {
				return (
          <div
            className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 "
            onClick={(event) => addProductsToCart(event, data.data)}>
            <PlusIcon className="w-4 h-4"></PlusIcon>
					</div>
        )
        
      }
        
    } 


    return (
        <div 
        className='bg-white cursor-pointer w-44 h-60 rounded-lg'
            onClick = {() => showProduct(data.data)}>

            <figure className='relative mb-2 h-5/5 '>
                <span className='absolute bottom-0 lef-2 bg-white/60 rounded-lg text-black text-xs m-1 px-3 py-0.5'>{data.data.category.name}</span>
                <img className='w-full h-full object-contain rounded-lg' src={data.data.images} alt={data.data.title} />
                {rederIcon (data.data.id)}
            </figure>
            <p className="flex justify-between">
                <span className="text-sm  font-light">{data.data.title}</span> 
                <span className="text-md font-medium">${data.data.price}</span>
            </p>
        </div>
        
    ) 
}

export default Card