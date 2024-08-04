import React, { useEffect, useState } from 'react'
import ProductTile from './ProductTile'
import { Circles } from 'react-loader-spinner';
import { toast } from 'react-toastify';

function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([])

  const handlefunction = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const result = await response.json();
      if (result) {
        setData(result);
        setLoading(false)
      }
    } catch (err) {
      console.log('Error:: HandleProduct:: Home.jsx:: Error::', err);
      setTimeout(() => {
        setLoading(false)
        setError(true)
        toast.error('Got an Error!', { theme: 'dark', pauseOnHover: false }) // This is for Error Alert
      }, 3000);
    }
  }
  useEffect(() => {
    handlefunction();
  }, [])

  return (
    <div >
      {
        loading ? <div className='min-h-96 flex justify-center items-center' >
          <Circles height={'60'} width={120} color='white' visible={true} />         {/* This is taken from react liabrary (react-loader-spinner) */}
        </div> :
          <>
            {
              error ? <h1 className='text-2xl text-center font-semibold pt-10 cursor-pointer'>Sorry Get an Error!</h1> :
                <div className='grid grid-cols-2 m-auto sm:grid-cols-4 sm:gap-4 h-full w-full sm:w-11/12 pl-3 sm:pl-16' >
                  {
                    data.map(value => <ProductTile key={value.id} data={value} />)
                  }
                </div>
            }
          </>
      }
    </div>
  )
}

export default Home