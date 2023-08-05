import React, { useRef } from 'react';
import Slider from 'react-slick';
import Mama1 from '../../images/Mama1.png';
import Mama2 from '../../images/Mama2.png';
import Mama3 from '../../images/Mama3.png';
import './CustomSlider.css'; // Import custom CSS for the slider

const customSliderStyles = {
  container: {
    padding: '40px',
    background: '#FFA689',
    position: 'relative',
  },
  slide: {
    borderRadius: '10px',
    width: '100%',
    height: '100%',
  },
  arrowContainer: {
    position: 'absolute',
    top: '45%',
    width: '40px', // Make the width equal to height for a circular shape
    height: '40px', // Make the height equal to width for a circular shape
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px', // Increase the font size for a larger arrow
    cursor: 'pointer',
    background: 'rgba(255, 255, 255, 0.7)',
    borderRadius: '50%',
  },
};

const CustomSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows
    centerMode: true,
    centerPadding: '20%', // Adjust the padding value as needed to show more or less of the next slides
    style: { height: '60%' },
  };

  const handlePreviousSlide = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div style={customSliderStyles.container}>
      <Slider {...settings} ref={sliderRef}>
        {[
          { imgSrc: Mama1, alt: 'Advertisement 1' },
          { imgSrc: Mama2, alt: 'Advertisement 2' },
          { imgSrc: Mama3, alt: 'Advertisement 3' },
        ].map((item, index) => (
          <div key={index} className="custom-slide">
            {/* Add custom class for center slide */}
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <img
                src={item.imgSrc}
                alt={item.alt}
                className="ad-image"
                style={customSliderStyles.slide}
              />
            </a>
          </div>
        ))}
      </Slider>
      <div
        style={{
          ...customSliderStyles.arrowContainer,
          left: '0px',
        }}
        onClick={handlePreviousSlide}
      >
        &lt; {/* Previous arrow */}
      </div>
      <div
        style={{
          ...customSliderStyles.arrowContainer,
          right: '0px',
        }}
        onClick={handleNextSlide}
      >
        &gt; {/* Next arrow */}
      </div>
    </div>
  );
};

export default CustomSlider;
