import React, { useContext } from 'react'
import { GlobalContext } from './Store'
import { toast } from 'react-toastify'

function CartTile({ cartData }) {
    const { cart, setCart } = useContext(GlobalContext)

    const removeFromCart = (ind) => {
        const updateCart = cart.filter(value => (
            value?.data?.id !== ind
        ))
        setCart(updateCart);
        toast.success("Product removed from cart", { pauseOnHover: false })
    }

    return (
        <div>
            <div className='w-44 sm:w-60 rounded-lg text-center bg-black/10 text-white shadow-custom mb-4' >
                <div className='h-28 sm:h-44 w-full m-auto pt-2'>
                    <img className='h-full w-full bg-green-400' src={cartData?.data?.image} />
                </div>
                <h1 className='font-semibold text-xl my-2 sm:mb-4' >{cartData?.data?.title?.length < 15 ? cartData?.data?.title : cartData?.data?.title.slice(0, 15) + '...'}</h1>
                <h1 className='font-semibold text-xl' >Price: {cartData?.data?.price}</h1>
                <button onClick={() => removeFromCart(cartData?.data?.id)} className='h-9 min-w-32 m-auto my-2 mb-4 px-2 text-white bg-black rounded' >Remove From Cart</button>
            </div>
        </div>
    )
}

export default CartTile