import React from 'react'

const User = (prop) => {
    const { data } = prop
  return (
    <>
    <h1>User Component</h1>
    <h2 style={{color:'red'}}>Your Name is {data.name}</h2>
    <h2 style={{color:'green'}}>Your Age is {data.age}</h2>

    </>
  )
}

export default User