import React from 'react'

export const Our_Unique_Tea_Blends = ({image,hoverImage,product_name,product_cost}) => {
  return (
    <div className="relative w-max" >
       <img src={image} className="w-90 h-140 object-cover transition-opacity duration-500 opacity-100 hover:opacity-0"/>
       <img src={hoverImage} className="absolute inset-0 w-90 h-120 transition-opacity duration-500 opacity-0 object-center object-cover hover:opacity-100"/>
        <div className="absolute bottom-0 w-full bg-white bg-opacity-80 px-4 py-5 flex items-center justify-between">
          <div>
             <p className="text-lg text-gray-600 font-Arimo">{product_name}</p>
             <p className="text-custom font-medium text-sm tracking-widest">{product_cost}</p>
         </div>
        <button className="font-tangerine text-2xl font-bold text-custom border-b-0 hover:border-b">Add to Cart →</button>
        </div>
    </div>

  )
}

export const Popular = ({title,dis,price}) => {
  return(
      <div className="flex justify-between lg:w-120 items-center py-5">
         <div>
           <p className="font-saira text-lg">{title}</p>
           <p className="font-serif text-sm text-gray-500">{dis}</p>
         </div>
         <p className="font-saira text-sm text-custom">${price}</p>
      </div>
  )
}