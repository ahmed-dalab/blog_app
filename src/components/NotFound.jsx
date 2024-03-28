import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div className='not-found'>
      <h2>Not Found</h2>
      <p>The resource you are looking does not exist.</p>
      <Link to="/">Go back to Homepage</Link>
    </div>
  )
}
