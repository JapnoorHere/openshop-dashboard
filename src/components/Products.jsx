import React from 'react'
import { Link } from 'react-router-dom'
const Products = () => {
  return (
    <div>
      This is products
      <p>
        <Link to="/" className='underline'>Go to Dashboard</Link>
      </p>
    </div>
  )
}

export default Products
