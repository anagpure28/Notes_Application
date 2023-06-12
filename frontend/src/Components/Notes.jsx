import React, { useEffect } from 'react'

export const Notes = () => {
  
  useEffect(()=> {
    // fetch("https://giant-cardigan-newt.cyclic.app/notes", {
    fetch("http://localhost:4200/notes", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }).then(res=> res.json())
    .then(res=> console.log(res))
    .catch(err=> console.log(err))
  },[])

  return (
    <div>
        <h2>To see the notes, go the console.....</h2>
    </div>
  )
}
