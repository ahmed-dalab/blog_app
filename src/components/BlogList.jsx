import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogList({ blogs, title}) {
  return (
    <div>
          <h2>{title}</h2>
          {blogs && blogs.map((blog) => (
              <div className='blog-lists' key={blog.id}>
                  <Link to={`/blogs/${blog.id}`}>
                  <h2>{blog.title}</h2>
                      <p>{blog.body.substring(0,192)}...</p>
                    </Link>
              </div>
          ))}
    </div>
  )
}
