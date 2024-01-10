// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from '../NavBar/NavBar';

const Hero = () => {
    return (
        <>
            <header className=" bg-no-repeat bg-cover bg-center w-full h-screen bg-hero" >
                <div className='container'>
                    <NavBar />
                    <div className='mt-14'>
                        <h1 className='font-body font-bold text-6xl flex flex-col text-white'>
                            Интернет-магазин <span>шин и дисков</span>
                        </h1>
                    </div>
                </div>
            </header >
        </>
    );
};

export default Hero;