// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from './../NavBar/NavBar';
import Placeholder from '../../assets/Placeholder.png'
import Footer from './../Footer/Footer';
import './Stock.css';

const Stocks = () => {
    return (
        <>
            <header className=" bg-no-repeat bg-cover bg-center w-full pb-20 bg-stock" >
                <div className='container '>
                    <NavBar />
                    <div className='mt-28 px-4'>
                        <h1 className='font-body font-bold 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl 
                        2xl:text-start xl:text-start lg:text-start text-center flex flex-col text-white'>
                            Новости
                        </h1>
                    </div>
                </div>
            </header>
            <main>
                <div className='container'>
                    <section className='mt-14 mb-16 px-4'>
                        <div className='flex justify-between 2xl:mb-14 mb-4 gap-5 stock__item'>
                            <div className='max-w-[700px]'>
                                <h2 className='text-darkMain 2xl:text-3xl xl:text-3xl
                                lg:text-2xl md:text-xl sm:text-xl text-xl font-bold font-body mb-2'>
                                    Creatt Figma Kit
                                </h2>
                                <p className='2xl:text-lg xl:text-lg lg:text-lg  md:text-md  sm:text-sm text-sm max-w-[600px] tracking-wide mb-5'>
                                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                                </p>
                                <img src={Placeholder} alt='' />
                            </div>
                            <div className='max-w-[700px] stock__item-child'>
                                <img src={Placeholder} alt='' className='mb-5' />
                                <div>

                                    <h2 className='text-darkMain 2xl:text-3xl xl:text-3xl
                                lg:text-2xl md:text-xl sm:text-xl text-xl font-bold font-body mb-4'>
                                        Design Kit for Figma
                                    </h2>
                                    <p className='2xl:text-lg xl:text-lg lg:text-lg md:text-md sm:text-sm max-w-[600px] tracking-wide mb-5'>
                                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between gap-5 stock__item'>
                            <div className='max-w-[700px]'>
                                <h2 className='text-darkMain 2xl:text-3xl xl:text-3xl
                                lg:text-2xl md:text-xl sm:text-xl text-xl font-bold font-body mb-4'>
                                    Creatt Figma Kit
                                </h2>
                                <p className='2xl:text-lg xl:text-lg lg:text-lg md:text-md sm:text-sm max-w-[600px] tracking-wide mb-10'>
                                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                                </p>
                                <img src={Placeholder} alt='' />
                            </div>
                            <div className='max-w-[700px] stock__item-child'>
                                <img src={Placeholder} alt='' className='mb-9' />
                                <div>
                                    <h2 className='text-darkMain 2xl:text-3xl xl:text-3xl
                                lg:text-2xl md:text-xl sm:text-xl text-xl font-bold font-body mb-4'>
                                        Design Kit for Figma
                                    </h2>
                                    <p className='2xl:text-lg xl:text-lg lg:text-lg md:text-md sm:text-sm max-w-[600px] tracking-wide mb-10'>
                                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div >
            </main >
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Stocks;