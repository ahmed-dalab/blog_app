import React from 'react'
import useFetch from '../hooks/useFetch'
import { useHistory, useParams } from 'react-router-dom'

export default function BlogDetails() {
    const { id } = useParams()
    const { data: blog, error, isPending } = useFetch('http://localhost:3000/blogs/' + id)
  const history = useHistory()
  const handleClick = () => { 
    fetch('http://localhost:3000/blogs/' + id, {
      method: 'DELETE',
   
    })
      .then(()=> {
        console.log('deleted blog')
        history.push('')
     })
     
  }

  return (
    <div className='blog-details'>
          {isPending && <div>loading..</div>}
          {error && <div>{error}</div>}
          {blog && (
              <article>
                  <h1>{blog.title}</h1>
          <p>{blog.body}</p>
          <button onClick={handleClick} className='delete'>delete</button>
              </article>
          )}
    </div>
  )
}
