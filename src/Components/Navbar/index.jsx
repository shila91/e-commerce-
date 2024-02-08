import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingBagIcon } from "@heroicons/react/24/solid"
import {ShoppingCartContext} from '../../Context'


const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-8 decoration-2 decoration-white font-semibold text-md shadow-sm uppercase'
    
    
    return (
        <nav className='flex justify-between items-center text-white  fixed z-10 top-0 w-full h-14 py-5 px-8 text-sm  bg-stone-800 '>
            <h6 className='font-semibold text-3xl ml-10 font-mono'>
                    Shopi 
            </h6>
            <ul className='flex items-center gap-3 absolute left-[40vw]  '>
                <li className='hidden md:block'>
                    <NavLink 
                    to='/all'
                    onClick={() => context.setSearchByCategory('')}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined}
                    >
                        All 
                    </NavLink>
                </li>
                <li className='hidden md:block'>
                    <NavLink 
                    to='/clothes'
                    onClick={() => context.setSearchByCategory('clothes')}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined}>
                        Clothes 
                    </NavLink>
                </li>
                <li className='hidden md:block'>
                    <NavLink 
                    to='/electronics'
                    onClick={() => context.setSearchByCategory('electronics')}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined}>
                        Electronics 
                    </NavLink>
                </li>
                <li className='hidden md:block'>
                    <NavLink 
                    to='/furniture'
                    onClick={() => context.setSearchByCategory('furniture')}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined}>
                        Furniture
                    </NavLink>
                </li>
                <li className='hidden md:block'>
                    <NavLink 
                    to='/shoes'
                    onClick={() => context.setSearchByCategory('shoes')}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined}>
                        Shoes 
                    </NavLink>
                </li>
                <li className='hidden md:block'>
                    <NavLink 
                    to='/others'
                    onClick={() => context.setSearchByCategory('others')}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined}>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3 '>
                <li className='text-sm font-semibold text-gray-300/60 hidden md:block'>
                    sheila@platzi.com
                </li>
                <li>
                    <NavLink 
                    to='/my-orders'
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined}>
                        My Orders 
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined}>
                        Sign In 
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined}>
                    <ShoppingBagIcon   className='w-6 h-6 cursor-pointer'>
                    </ShoppingBagIcon> 
                    </NavLink>
                </li>
                    <div>{ context.cartProducts.length}</div>
                
                    <NavLink>
                    
              
                
                </NavLink>

                
            </ul>
        </nav>
    )
}

export default Navbar