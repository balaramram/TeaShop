import React from 'react';
import image from "../../assets/images/h1-img6-2.jpg";
import img from "../../assets/images/h1-img3.jpg";
import NavBar from '../../components/NavBar';

const TeaShop = () => {
  return (
    <div>
      <img
        src={image}
        className="fixed top-0 left-0 w-screen h-100 object-cover"
        alt="Background"
      />
      
      <div className='relative'>
        <NavBar/>
      </div>

      <div className="relative z- mt-70"> 
        <div className="">
          <img src={img} className="w-full h-full" alt="Foreground" />
        </div>
      </div>
    </div>
  );
};

export default TeaShop;




// import React, { useState } from 'react';

// const images = [
//   '/src/assets/images/avinash.jpg',
//   '/src/assets/images/ekrulila.jpg',
//   '/src/assets/images/julia.jpg',
// ];

// const TeaShop = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((currentIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((currentIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-2xl shadow-lg">
//       {/* Image */}
//       <img
//         src={images[currentIndex]}
//         alt={`Slide ${currentIndex}`}
//         className="w-full h-[400px] object-cover transition-all duration-500"
//       />

//       {/* Left arrow */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition"
//       >
//         ◀
//       </button>

//       {/* Right arrow */}
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition"
//       >
//         ▶
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
//         {images.map((_, i) => (
//           <div
//             key={i}
//             onClick={() => setCurrentIndex(i)}
//             className={`w-3 h-3 rounded-full cursor-pointer ${
//               i === currentIndex ? 'bg-custom' : 'bg-gray-300'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TeaShop;
