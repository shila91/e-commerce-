import { XMarkIcon } from "@heroicons/react/24/solid"


const OrderCard = props => {
  const { id, title, imageUrl, price, handleDelete } = props;

  let renderXMarkIcon = null;

  if (handleDelete) {
    renderXMarkIcon = (
      <XMarkIcon
        onClick={() => handleDelete(id)} // Pasa el id del producto al handleDelete
        className="w-4 h-4 cursor-pointer"
      />
    );
  }

  return (
    <div className='flex justify-between mb-4'>
      <div className='flex items-center'>
        <figure className='mb-2 w-24 h-20'>
          <img className="w-full h-full object-cover rounded-lg " src={imageUrl} alt={title} />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1"></div>
        <p className="text-lg font-medium">${price}</p> 
        {renderXMarkIcon}
      </div> 
    </div>
  );
}

export default OrderCard;
