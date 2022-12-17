import React, { useState, useEffect } from 'react';
import image1 from './../images/banner-5.jpg'
import image2 from './../images/banner-6.jpg'
import image3 from './../images/banner-9.jpg'
import './../home-banner/homebanner.css'

function Homebanner() {
    const [selectedImage, setSelectedImage] = useState(0)
    const [allImages, setAllImages] = useState([image1, image2, image3])

      useEffect(() => {
        setInterval(() => {
          setSelectedImage(selectedImage => selectedImage < 3 ? selectedImage + 1 : 0)
        }, 4000)
      }, [])

    return (<>
        <div className='home-banner'>
            <img src={allImages[selectedImage]} /> <br />

            <button  onClick={() => {
                    if (selectedImage > 0)
                        setSelectedImage(selectedImage - 1)
                }}
            className='prev-btn'><i class="fa-solid fa-arrow-left"></i></button>

            <button onClick={() => {
                    if (selectedImage < allImages.length - 1)
                        setSelectedImage(selectedImage + 1)
                }}
                className='next-btn' ><i class="fa-solid fa-arrow-right"></i></button>
        </div>

    </>);
}

export { Homebanner }