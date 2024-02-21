// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from '../NavBar/NavBar';
import Null from '../../assets/Diska.png';
import Footer from '../Footer/Footer';
import './FourNullFour.css';
import ScrollToTop from './../ScrollToTop/ScrollToTop';

const FourNullFour = () => {
    return (
        <>
            <div className='overflow-hidden'>
                <header className=" bg-no-repeat bg-cover bg-center w-full h-screen bg-shini mb-10" >
                    <div className='container '>
                        <NavBar />
                        <div className='2xl:mt-16 xl:mt-16 lg:mt-12 md:mt-12 sm:mt-8 mt-8 relative '>
                            <h1
                                data-aos="fade-right"
                                className='font-body font-bold 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl text-2xl
                         flex items-center gap-6 text-center text-white fourToFour'>
                                УПС! <br />
                                Что то пошло не так
                                <span className='2xl:text-[280px] xl:text-[240px] lg:text-[130px] md:text-[120px] sm:text-[100px] text-[80px]  text-white flex items-center'>
                                    4 <img className='2xl:w-60 xl:w-52 lg:w-32 md:w-26 sm:w-24 w-20' src={Null} alt='' /> 4
                                </span>
                            </h1>
                            <div
                                data-aos="fade-up" className='flex justify-center items-center'>
                                <a className='2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg sm:text-md text-sm  text-white underline' href='/'>Вернутся  на главный экран</a>
                            </div>
                        </div>
                    </div>
                    <ScrollToTop />
                </header>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
};

export default FourNullFour;