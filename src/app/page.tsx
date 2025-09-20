import React from 'react'
import ProductCards from './components/ProductCards'


export default function page() {
  return (
<>
<div className=''>
  <div className='font-bold flex justify-center items-center text-center text-5xl pt-10 rounded-lg'>
    <h1>qCoffe Shop</h1>
  </div>
  <div>
    <p>We deliver nothing but the finest coffee experience</p>
  </div>

</div>
  <div>
    <ProductCards />
  </div>
</>
  )
}
