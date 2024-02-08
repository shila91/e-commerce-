import { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import { ShoppingCartContext } from '../../Context'
import ProductDetail from '../../Components/ProductDetail'
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"



function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => { 
      if (context.filteredItems?.length > 0) {
        return (
        context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      ) 

    } else {
        return (
          <h1 className='font-medium text-2xl'>No Products Found 🤔</h1>
        )
      }
    
  }
  
return (
    <Layout>
        <div className='flex justify-center items-center relative w-72 mb-3'>
        <h1 className='font-medium text-2xl'>Exclusive Products</h1>
      </div>
      
      <input 
        type="text" 
        placeholder='Search a product'
        className='w-80 mb-5 p-3 border border-black rounded-md focus:outline-none' 
        onChange={(event)  => context.setSearchByTitle(event.target.value)} />
        <MagnifyingGlassIcon className="w- h-4 text-gray-400 absolute right-[40vw] top-36"></MagnifyingGlassIcon>
      
      <div className='grid gap-12 grid-cols-4  w-fullmax-w-screen-lg  max-md:grid-cols-2 '>
        {renderView()}
        </div>
        <ProductDetail />
      </Layout>
    
        
        
  )
}

export default Home
