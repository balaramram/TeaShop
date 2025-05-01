import React, { useEffect, useState } from "react";
import slideshow_1 from "../../../assets/images/h1-rev-img1.jpg";
import slideshow_2 from "../../../assets/images/h1-rev-img2.jpg";
import slideshow_3 from "../../../assets/images/h1-rev-img3.jpg";



const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const images = [
    slideshow_1,
    slideshow_2,
    slideshow_3,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className=" lg:h-screen overflow-hidden w-84 h-50 md:w-full md:h-full lg:w-355 xl:w-full">
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className="w-full h-full object-cover bg-center transition-opacity duration-1000"
      />

    </div>
  );
}


export default Slideshow