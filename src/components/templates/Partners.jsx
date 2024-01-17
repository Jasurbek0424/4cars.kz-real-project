// eslint-disable-next-line no-unused-vars
import React from 'react';

const Partners = () => {
    return (
        <>
            <section className='mb-10'>
                <h2 className='font-body text-center text-3xl mb-7 font-bold'>
                    Наши партнёры
                </h2>
                <div className='flex w-full justify-center flex-wrap gap-5 mb-10'>
                    <div className='max-w-44 w-full h-44 bg-gray-300'></div>
                    <div className='max-w-44 w-full h-44 bg-gray-300'></div>
                    <div className='max-w-44 w-full h-44 bg-gray-300'></div>
                    <div className='max-w-44 w-full h-44 bg-gray-300'></div>
                    <div className='max-w-44 w-full h-44 bg-gray-300'></div>
                    <div className='max-w-44 w-full h-44 bg-gray-300'></div>
                </div>
                <div className='flex justify-center'>
                    <a href='#!' className='2xl:text-2xl xl:text-2x lg:text-xl md:text-md sm:text-md text-md rounded text-white py-2 px-4 bg-primary' >
                        Подробнее
                    </a>
                </div>
            </section>
        </>
    );
};

export default Partners;