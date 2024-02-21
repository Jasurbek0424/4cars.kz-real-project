// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Partners from './Partners';
import { PartnersInfo } from '../../data/home';




const Brands = () => {
    return (
        <>
            <header className=" bg-no-repeat bg-cover bg-center w-full pb-20 bg-diski" >
                <div className='container '>
                    <NavBar />
                    <div className='mt-28 px-4' data-aos="fade-right">
                        <h1 className='font-body font-bold 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl 
                        2xl:text-start xl:text-start lg:text-start text-center flex flex-col text-white'>
                            Наши партнёры
                        </h1>
                    </div>
                </div>
            </header>
            <main className='container my-16'>
                <div className='flex flex-wrap sm:flex-nowrap justify-center gap-6 px-4'>
                    <div className='flex flex-col gap-3 border max-w-[350px] w-full h-full '>
                        <p className='w-full py-2 px-4 bg-gray-100 font-body font-semibold'>Производители</p>
                        <div className='flex flex-col gap-3 px-4 pb-5'>
                            {PartnersInfo.map(e => (
                                <a key={e.id} href='#!' className='hover:text-primary transition-all'>
                                    {e.title}
                                </a>
                            ))}
                            <a href='#!' className='hover:text-primary transition-all text-lg'>Показать все...</a>
                        </div>
                    </div>
                    <div>
                        <p className='font-body text-center sm:text-start text-xl md:text-2xl xl:text-3xl mb-7 font-bold'>
                            Список производителей
                        </p>
                        <Partners />
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Brands;