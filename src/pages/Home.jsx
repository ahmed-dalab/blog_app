import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import BlogList from '../components/BlogList'

 function Home() {
      const { data: blogs, isPending, error } = useFetch('http://localhost:3000/blogs')
  
  
  return (
    <div className=''>
      {isPending && <div>loading...</div>}
      {error && <div>{error}</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!!" />}
    </div>
  )
}

export default Home