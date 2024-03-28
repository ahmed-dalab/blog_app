import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Create() {
  const [ title, setTitle ] = useState('')
  const [body, setBody] = useState('')
  const history = useHistory()
  const handleClick = (e) => {
    e.preventDefault()
    const blog = { title, body }
    
    fetch('http://localhost:3000/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(blog)
    })
      .then(() => {
        console.log('blog created')
        history.push('/')
    })
  }
  return (
    <div className="create">
      <h2>Add New Blog</h2>
      <form onSubmit={handleClick}>
        <label>Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
        />
        <label>Body: </label>
        <textarea
          required
          value={body}
          onChange={(e)=> setBody(e.target.value)}
        ></textarea>
        <button>Add blog</button>
      </form>
    </div>
  );
}
