import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div
    style={{display:'flex',alignItems:'center', justifyContent:'space-around', width:'100vw', height:'100vh',}}
    >
    <Link to='/sign-in'>Sign in</Link>
    <Link to ='/sign-up'>Sign Up</Link>
    </div>
  )
}

export default Home