import React, { useContext } from 'react'
import { GlobalContext } from './Store';
import { toast } from 'react-toastify';

function ProductTile({ data }) {
    const { cart, setCart } = useContext(GlobalContext);

    const addToCart = () => {
        const newCart = { data }
        const AllCart = [...cart, newCart]
        setCart(AllCart)
        toast.success('Product Added to cart', { pauseOnHover: false })
    }

    return (
        <div className='w-44 sm:w-60 rounded-lg text-center bg-black/10 text-white shadow-custom' >
            <div className='h-28 sm:h-44 w-full m-auto pt-2'>
                <img className='h-full w-full bg-green-400' src={data.image} />
            </div>
            <h1 className='font-semibold text-xl my-2 sm:mb-4' >{data.title.length < 15 ? data.title : data.title.slice(0, 15) + '...'}</h1>
            <h1 className='font-semibold text-xl' >Price: {data.price}</h1>
            <button onClick={addToCart} className='h-9 min-w-32 m-auto my-2 mb-4 px-2 text-white bg-black rounded' >Add to Cart</button>
        </div>
    )
}

export default ProductTile