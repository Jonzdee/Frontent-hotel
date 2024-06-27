import React from 'react';
import Animation from './Animation';
import '../Styles/Animation.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import slide1 from '../assets/slider/slide-1.jpg';
import slide2 from '../assets/slider/slide-2.jpg';
import slide3 from '../assets/slider/slide-3.jpg';
import slide4 from '../assets/slider/slide-4.jpg';



const slides = [
    { id: 1, img: slide1 },
    { id: 2, img: slide2 },
    { id: 3, img: slide3 },
    { id: 4, img: slide4 },
  ];
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  
  function Hero() {
    return (
      <section className="relative bg-black">
        <div className="absolute inset-0 h-full bg-gradient-to-r from-gray-950 via-SaddleBrown to-gray-950 z-0"></div>
        <Slider {...settings} className="main-slider-active z-20 relative">
          {slides.map((slide) => (
            <div key={slide.id} className="slider-item">
              <div className="container mx-auto pt-3 pb-9">
                <div className="flex justify-end items-center">
                  <div className="w-full xl:w-1/4 ml-16 relative">
                    <div className="slider-content text-white">
                      <span className="sub-title text-lg"><i className="fal fa-arrow-right"></i> Welcome to D&G Hotels</span>
                      <h1 className="text-5xl font-bold">Enjoy Vacations With <span className="text-yellow-500">Luxury Hotel</span></h1>
                      <a href="room-grid.html" className="mt-4 inline-block bg-yellow-500 text-white py-2 px-4 rounded">Explore Our Rooms <i className="far fa-angle-right"></i></a>
                    </div>
                  </div>
                  <div className="w-full xl:w-3/4">
                    <div className="slider-image">
                      <img src={slide.img} alt="Slider" className="w-11/12 h-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <Animation />
      </section>
    );
  }
  
  export default Hero;