// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from '../NavBar/NavBar';
import ScrollToTop from './../ScrollToTop/ScrollToTop';

const Hero = () => {


    return (
        <>
            <header className=" bg-no-repeat bg-cover bg-center w-full pb-20 bg-hero" >
                <div className='container'>
                    <div >
                        <NavBar />
                    </div>
                    <div className='mt-14 px-4' data-aos="fade-right">
                        <h1 className='font-body font-bold 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl 
                        2xl:text-start xl:text-start lg:text-start text-center flex flex-col text-white'>
                            Интернет-магазин <span>шин и дисков</span>
                        </h1>
                    </div>
                </div>
            </header >
            <ScrollToTop />
        </>
    );
};

export default Hero;