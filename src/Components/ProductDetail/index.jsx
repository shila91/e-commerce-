import './styles.css'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    console.log('PRODUCT TO SHOW:', context.productToShow)

    return (
        <aside 
        className={`${context.isProductDetailOpen ? 'flex' :'hidden' } product-detail flex flex-col fixed right-1 w-72 border max-md:hidden
                border-grey rounded-md `}>
            <div className='flex justify-between items-center p-2'>
            <h2 className='font-medium text-2xl'>Detail</h2>
            <div>
                <button 
                onClick={() => context.closeProductDetail ()}>
                <svg width="34px" height="44px" viewBox="-7 -7 34.00 34.00" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" transform="rotate(45)"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)"><rect x="-7" y="-7" width="34.00" height="34.00" rx="17" fill="#ffffff" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#555" d="M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,5.47455848 C9.62344222,5.47455848 9.31818182,5.77981887 9.31818182,6.15637666 L9.31818182,6.15637666 L9.318,9.279 L6.19496649,9.27959198 C5.85264123,9.27959198 5.56923944,9.5318733 5.52054097,9.86065607 L5.51314831,9.96141017 C5.51314831,10.3379679 5.81840871,10.6432283 6.19496649,10.6432283 L6.19496649,10.6432283 L9.318,10.643 L9.31818182,13.7664437 C9.31818182,14.1087689 9.57046314,14.3921707 9.89924591,14.4408692 L10,14.4482619 C10.3765578,14.4482619 10.6818182,14.1430015 10.6818182,13.7664437 L10.6818182,13.7664437 L10.681,10.643 L13.8050335,10.6432283 C14.1473588,10.6432283 14.4307606,10.390947 14.479459,10.0621643 L14.4868517,9.96141017 C14.4868517,9.58485238 14.1815913,9.27959198 13.8050335,9.27959198 L13.8050335,9.27959198 L10.681,9.279 L10.6818182,6.15637666 C10.6818182,5.8140514 10.4295369,5.5306496 10.1007541,5.48195113 Z"></path> </g></svg></button>
            </div></div>
            <figure className=' pt-1 p-8' >
                <img 
                    className='w-48  rounded-md shadow-lg '
                    src={context.productToShow.images} 
                    alt={context.productToShow.title} />
            
            <p className='flex flex-col text-sm  '>
                <span className=' pt-2 font-bold text-lg'>€{context.productToShow.price}</span>
                <span className=' font-extrabold text-md text-gray-600'>{context.productToShow.title}</span>
                <span className=' pt-2 text-xs font-mono '> {context.productToShow.description}</span>
            </p>
            </figure>
            
        </aside>
)
}

export default ProductDetail