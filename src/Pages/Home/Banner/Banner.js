import React from 'react';
import img1 from '../../../assets/img3.jpeg';
import img2 from '../../../assets/img2.jpeg';
import img3 from '../../../assets/img4.jpeg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='mt-6'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} alt="" className="w-full h-2/3 carousel-img" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-5 top-1/3">
                        <h1 className='text-4xl font-bold text-blue-600'>
                            Design Your Home <br />
                            With Your Wanted Items In Low Budget <br />
                        </h1>
                    </div>
                    
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} alt="" className="w-full h-2/3" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-5 top-1/3">
                        <h1 className='text-4xl font-bold text-blue-600'>
                            Design Your Home <br />
                            With Your Wanted Items In Low Budget <br />
                        </h1>
                    </div>
                    
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} alt="" className="w-full h-2/3" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-5 top-1/3">
                        <h1 className='text-4xl font-bold text-blue-600'>
                            Design Your Home <br />
                            With Your Wanted Items In Low Budget <br />
                        </h1>
                    </div>
                    
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;