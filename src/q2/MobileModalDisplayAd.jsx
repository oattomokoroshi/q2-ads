import React, { useState, useEffect, useRef } from 'react';


import MainImage from '../images/Mama.jpg';

import CustomSlider from './slider/CustomSlider';

import './styles.css';

const MobileModalDisplayAd = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();

  const handleCloseModal = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };



  const showAdInMobile = () => {
    setShowModal(window.innerWidth <= 768);
  };

  useEffect(() => {
    // Check on mount
    showAdInMobile();

    // Add event listener to check on resize
    window.addEventListener('resize', showAdInMobile);

    return () => {
      // Cleanup the event listener on unmount
      window.removeEventListener('resize', showAdInMobile);
    };
  }, []);

  return (
    <>
      {showModal && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" ref={modalRef}>
          <span className="close" onClick={() => setShowModal(false)}>
              <span className="circle"></span>
              <span className="line"></span>
            </span> 
              <img className="ad-image" src={MainImage} alt="Advertisement" />
          <CustomSlider />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileModalDisplayAd;
