import React, { useContext } from 'react'
import { GlobalContext } from './Store';
import CartTile from './CartTile';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Cart() {
  const { cart } = useContext(GlobalContext);

  console.log(cart);

  const handleBuy = () => {
    toast.info('Sorry ! This is just a Dummy Button', { pauseOnHover: false })
  }

  return (
    <div>
      {
        cart.length === 0 ? <h1 className='text-xl font-semibold text-center pt-10' >Add Items To Cart. <Link to='/' className='text-blue-700 cursor-pointer hover:text-blue-600' >Click Here</Link></h1> :
          <div className=' h-full w-11/12 m-auto flex justify-evenly '>
            <div className=" w-3/5 sm:w-4/5 grid grid-cols-1 sm:grid-cols-3 " >
              {
                cart.map(value => <CartTile key={value?.data?.id} cartData={value} />)
              }
            </div>
            <div className=' w-1/3 sm:w-1/5 sm:pl-20 ' >
              <h1 className='text-lg' >Total Item : <span className='font-bold' >{cart.length}</span></h1>
              <h1 className='text-lg' >Total Price : <span className='font-bold' >{cart.reduce((ini, value) => ini + value?.data?.price, 0)}</span></h1>
              <button onClick={handleBuy} className='h-9 w-28 my-2 px-2 font-semibold text-black bg-white rounded' >Buy Now</button>
            </div>
          </div>
      }
    </div>
  )
}

export default Cart