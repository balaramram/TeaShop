import React from 'react'
import logo from "../assets/png/chaai-logo-light-img.png"

const Footer = () => {
  return (
    <div className="bg-custum h-full w-84.5 md:w-full lg:w-355 xl:w-full text-white">
    <div className="lg:grid lg:grid-cols-3 pb-10 pt-20">
      <div className="w-full flex flex-col justify-center items-center">
        <p className="text-3xl font-serif border-b mb-4 px-4">Get in Touch</p>
        <p>mailto:chaai@qodeinteractive.com</p>
        <p>Kalchbstrasse 4,8038 Zueich</p>
        <p>1234567890</p>
      </div>

      <div className="w-full flex flex-col justify-center items-center border-x">
        <img className="size-30" src={logo} />
      </div>
      
      <div className="w-full flex flex-col justify-center items-center">
        <p className="text-3xl font-serif border-b mb-4 px-4">Working Hours</p>
        <p>Monday-Friday 9:00-23:00</p>
        <p>Saturday 10:00-21:00</p>
        <p>Weekend Closed</p>
      </div>
    </div>

    <div className="border-t mt-10 py-5 text-center">
      <p>© 2021 Qode Interactive, All Rights Reserved</p>
    </div>
    </div>
  )
}

export default Footer