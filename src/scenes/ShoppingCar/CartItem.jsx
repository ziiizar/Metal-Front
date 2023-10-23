const CartItem = ({image, price, name, id}) => {

  return (
    <article className='w-[400px] h-[400px] flex flex-col gap-y-4'>
        <div>
            <img className="w-80 h-80" src={image} alt="" />
            
            </div>
        <div className='flex gap-x-4'>
            <h2>{name}</h2>
            <span>${price}</span>
            <span>{id}</span>
        </div>
    </article>
  )
}

export default CartItem