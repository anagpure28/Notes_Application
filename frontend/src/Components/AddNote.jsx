import React, { useState } from 'react'

export const AddNote = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = () => {
    const payload = {
        title, body, category
    }
    
    // fetch("{https://giant-cardigan-newt.cyclic.app/notes/create",{
    fetch("http://localhost:4200/notes/create",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(payload)
    }).then(res=> res.json())
    .then(res=> console.log(res))
    .catch(err=> console.log(err))
    setTitle("")
    setBody("")
    setCategory("")
  }

  return (
    <div>
        <h3>Add a New Note</h3>
        <label htmlFor="title">Note Title</label>
        <br />
        <input type="text" name="title" value={title} onChange={(e)=> setTitle(e.target.value)} />
        <br />
        <label htmlFor="body">Note Body</label>
        <br />
        <input type="text" name="body" value={body} onChange={(e)=> setBody(e.target.value)} />
        <br />
        <label htmlFor="category">Category</label>
        <br />
        <input type="text" name="category" value={category} onChange={(e)=> setCategory(e.target.value)} />
        <br />
        <button onClick={handleSubmit}>Add Note</button>
    </div>
  )
}
