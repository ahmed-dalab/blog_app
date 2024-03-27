import React from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'

export default function BlogDetails() {
    const { id } = useParams()
    const { data: blog, error, isPending } = useFetch('http://localhost:3000/blogs/' + id)


  return (
    <div className='blog-details'>
          {isPending && <div>loading..</div>}
          {error && <div>{error}</div>}
          {blog && (
              <article>
                  <h1>{blog.title}</h1>
                  <p>{blog.body}</p>
              </article>
          )}
    </div>
  )
}
