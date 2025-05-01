import React from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import img from "../../assets/images/home-2-blog-2.jpeg"

const TeaHome = () => {
  return (
    <div>
      <div className=' w-screen h-100 fixed top-0 right-0 z-0'>
        <img className='w-screen h-screen' src={img} />
      </div>
      <div className="bg-white mt-70 absolute ">
        <div className='absolute bg-amber-700'><NavBar/></div>
      
      <div className='w-screen h-screen'>fff</div>
      <Footer/> 
      </div>
    </div>
  )
}

export default TeaHome