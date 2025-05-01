import React from 'react'
import Slideshow from "./slideshow/Slideshow"
import health_benefits from "../../assets/images/health benifits.jpg"
import Popular_Offers  from "../../assets/images/h1-img2-1.jpg"
import Magic_of_tea_1 from "../../assets/images/h1-img3.jpg"
import Magic_of_tea_2 from "../../assets/images/h1-img4.jpg"
import the_art_of_tea from "../../assets/images/h1-img5.jpg"
import The_tea_cup_of_life from "../../assets/images/h1-img6-2.jpg"
import { Our_Unique_Tea_Blends ,Popular } from "../../components/Props"
import { Tea_blend,Popular_data } from '../../constant/Home_data'
import { useNavigate } from 'react-router-dom'
import SimpleCarouselWithButtons from '../../components/SimpleCarouselWithButtons'


const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col w-84.5 md:w-full lg:w-355 xl:w-full justify-center">
        <div>
            <Slideshow/>
            <div className="flex flex-col gap-10 lg:p-20 p-5 text-gray-800">
                <div className="lg:flex items-center gap">
                     <img className="mt-10 rounded-full w-140 " src={health_benefits} />
                    <div className="flex flex-col gap-5 lg:px-15">
                        <p className="font-serif text-5xl leading-15 ">Health Benefits of Drinking Tea Regularly</p>
                        <p className="font-light brightness-0 text-lg leading-8 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                           tempor incididunt ut labore et dolore magna aliqua. Vulputate mi sit amet 
                           mauris commodo quis imperdiet massa. Massa tincidunt nunc pulvinar sapien 
                           et ligula. Cursus risus at ultrices mi tempus imperdiet.
                        </p>
                        <button
                          className="text-white px-4 text-sm py-2 w-max font-saira bg-custum">
                          VIEW MORE
                        </button>
                    </div>
                </div>


            <div className="lg:grid lg:grid-cols-2 gap-10 ">
              <div>
                <p className="text-5xl font-serif pb-10">Popular Offers</p>
                {Popular_data.map((item,i)=>(
                  <Popular key={i} title={item.title} dis={item.dis} price={item.price}/>
                ))}
              </div>

              <img src={Popular_Offers} className=" " />
            </div>


            <div className="flex justify-center items-center text-center my-10">
              <p className="w-200 font-serif text-5xl ">Discover The Magic Of Tea,
              Learn About Our Signature Flavors</p>
            </div>


            <div className="lg:grid lg:grid-cols-2 gap-5 place-items-center">
                <div className="lg:grid lg:grid-cols-2 gap-5">
                  <div className="overflow-hidden lg:w-79 lg:h-119 ">
                  <img className="w-79 h-119 hover:w-80 hover:h-122 transition-all duration-1000" src={Magic_of_tea_1} />
                  </div>
                  <div className="overflow-hidden lg:w-79 lg:h-119 ">
                  <img className="w-79 h-119 hover:w-80 hover:h-122 transition-all duration-1000" src={Magic_of_tea_2} />
                  </div>
                </div>
                <div className="font-serif text-3xl px-15 flex flex-col gap-5">
                  <p>100% Organic</p>
                  <p className="text-lg text-gray-600">Et malesuada fames ac turpis egestas maecenas pharetra convallis met nisl purus.</p>
                  <p>High Quality</p>
                  <p className="text-lg text-gray-600">Et malesuada fames ac turpis egestas maecenas pharetra convallis met nisl purus.</p>
                  <p>Always Fresh</p>
                  <p className="text-lg text-gray-600">Et malesuada fames ac turpis egestas maecenas pharetra convallis met nisl purus.</p>
                </div>
            </div>


            <div className="lg:grid lg:grid-cols-3 gap-20">
              <div className="lg:col-span-1">
                <img className='h-full w-full' src={the_art_of_tea} />
                <p className="font-saira text-custom text-xs pt-2">THE ART OF TEA</p>
              </div>
              <div className="lg:col-span-2">
                <img className="h-full w-full" src={The_tea_cup_of_life} />
                <p className="font-saira text-custom text-xs pt-2">THE TEA CUP OF LIFE</p>
              </div>
            </div>



        </div>
        </div>
    </div>
  )
}

export default Home