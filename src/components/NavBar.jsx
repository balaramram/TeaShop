import React, { useState } from 'react'
import logo from "../assets/png/chaai-logo-light-img.png"
import { NavBar_data } from '../constant/NavBar_data'
import { Link } from 'react-router-dom'
import ham from "../assets/svg/hamburger.svg"

const NavBar = () => {
  const [isHamOpened , setIsHamOpended] = useState({ham:false})
  const [isOpened , setIsOpened] = useState(false)

  const toggleham = (section) => {
    setIsHamOpended((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  const toggleSection = (key, value) => {
    setIsOpened((prev) => ({ ...prev, [key]: value }));
  };
  return (
    <div className="lg:w-355 xl:w-360 ">
       <div className="flex justify-between px-5 md:px-10 text-sm gap-25 md:gap-0 lg:text-lg items-center">

        <div className='block md:hidden'>
          <div onClick={() => toggleham("ham")}>
            <img className="size-5" src={ham} />
          </div>

          <div className={`absolute overflow-hidden border bg-black ${isHamOpened.ham ? "w-70 h-max" : "w-0 hidden"}`}>


          <div className="p-3">
             {NavBar_data.map((item, id) => (
              <div onClick={()=>{toggleSection(item.title,true)}} 
                // key={id}
                // onMouseEnter={()=>{toggleSection(item.title,true)}}
                // onMouseLeave={()=>{toggleSection(item.title,false)}}
                >
            
                 <div className="w-max h-max py-1 text-white hover:text-green-500 cursor-pointer">
                  {item.title}
                </div>

                {item.first_level && (
                  <div className={`flex flex-col gap-4 shadow-2xl rounded-lg justify-center items-center ${isOpened[item.title] ? "block" : "hidden"}`}>
                    {item.first_level.map((sub, i) => (
                     <div className="flex w-full" key={i} onClick={()=>{toggleSection(su.title,true)}} 
                      // onMouseEnter={()=>{toggleSection(sub.title,true)}}
                      // onMouseLeave={()=>{toggleSection(sub.title,false)}}
                    >
                  <div className=" text-white hover:text-gray-200 w-full">
                     <Link className="flex w-full justify-between p-2 px-7 items-center"to={sub.path}>
                       {sub.title}
                       <div>{sub.symbol}</div>
                     </Link>
                  </div>

                  <div className="absolute ml-10 pt-8 flex flex-col gap-4 shadow-2xl rounded-lg p-5 justify-center items-center w-max text-white">
                    {sub.second_level?.map((second,s)=>(
                      <div className={` ${isOpened[sub.title] ? "block" : "hidden"}`}>
                      <Link key={s} to={second.path}>
                      {second.title}
                      </Link>
                      </div>
                    ))}
                  </div>
                  
                  </div>
                ))}
              </div> 
            )}
          </div>
        ))}
        </div>
          </div>
          
        </div>



       <div className='hidden md:block'>
       <div className="flex">
        {NavBar_data.map((item, id) => (
          <div 
          key={id}
          onMouseEnter={()=>{toggleSection(item.title,true)}}
          onMouseLeave={()=>{toggleSection(item.title,false)}}>
            
            <div className="w-20 lg:w-25 h-10 py-1 text-white hover:text-green-500 cursor-pointer">
              {item.title}
            </div>

            {item.first_level && (
              <div className={`absolute flex flex-col gap-4 shadow-2xl rounded-lg justify-center items-center ${isOpened[item.title] ? "block" : "hidden"}`}>
                {item.first_level.map((sub, i) => (
                  <div className="flex w-full" key={i}
                  onMouseEnter={()=>{toggleSection(sub.title,true)}}
                  onMouseLeave={()=>{toggleSection(sub.title,false)}}
                  >
                  <div className=" text-white hover:text-gray-200 w-full">
                  <Link className="flex w-full justify-between p-2 px-7 items-center"to={sub.path}>
                    {sub.title}
                    <div>{sub.symbol}</div>
                  </Link>
                  </div>

                  <div className="absolute ml-35 flex flex-col gap-4 shadow-2xl rounded-lg p-5 justify-center items-center w-max text-white">
                    {sub.second_level?.map((second,s)=>(
                      <div className={` ${isOpened[sub.title] ? "block" : "hidden"}`}>
                      <Link key={s} to={second.path}>
                      {second.title}
                      </Link>
                      </div>
                    ))}
                  </div>
                  
                  </div>
                ))}
              </div> 
            )}
          </div>
        ))}
        </div>
        </div>

        <div>
          <img className="size-20 lg:size-30" src={logo} />
        </div>

        <div className="hidden md:block">
        <div className="flex lg:gap-10 lg:w-100 justify-end text-white ps-0 lg:ps-0 xl:ps-0 md:ps-50">
          <p>(0)</p>
          <p>Reservation</p>
        </div>
        </div>
    </div>
    </div>
   
  )
}

export default NavBar