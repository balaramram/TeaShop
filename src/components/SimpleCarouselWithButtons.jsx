import React, { useState } from 'react';

const SimpleCarouselWithButtons = ({ children, visibleSlides = 3 }) => {
  const slides = React.Children.toArray(children);
  const totalSlides = slides.length;

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + visibleSlides) % totalSlides);
  };

  const prev = () => {
    setIndex((prev) => (prev - visibleSlides + totalSlides) % totalSlides);
  };

  const getVisibleSlides = () => {
    const visible = [];
    for (let i = 0; i < visibleSlides; i++) {
      visible.push(slides[(index + i) % totalSlides]);
    }
    return visible;
  };

  return (
    <div className="w-full relative">
      <p onClick={prev} className="absolute left-2 top-2/5 rounded-full pb-1 px-2 border cursor-pointer">←</p>
      <p onClick={next} className="absolute right-2 top-2/5 rounded-full pb-1 px-2 border cursor-pointer w-max h-max">→</p>
      <div className="flex justify-center gap-6">
        {getVisibleSlides().map((slide, i) => (
          <div key={i}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleCarouselWithButtons;
