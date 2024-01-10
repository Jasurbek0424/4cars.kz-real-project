// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from '../NavBar/NavBar';
import Null from '../../assets/Diska.png';
import Footer from '../Footer/Footer';

const FourNullFour = () => {
    return (
        <>
            <header className=" bg-no-repeat bg-cover bg-center w-full h-screen bg-shini mb-20x" >
                <div className='container '>
                    <NavBar />
                    <div className='mt-28 relative'>
                        <h1 className='font-body font-bold text-6xl flex items-center gap-6 text-center text-white'>
                            УПС! <br />
                            Что то пошло не так
                            <span className='text-[280px] text-white flex items-center'>
                                4 <img src={Null} alt='' /> 4
                            </span>
                        </h1>
                        <div className='flex justify-center items-center'>
                            <a className='text-2xl text-white underline' href='#!'>Вернутся  на главный экран</a>
                        </div>
                    </div>
                </div>
            </header>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default FourNullFour;