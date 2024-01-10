// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from './../NavBar/NavBar';
import Placeholder from '../../assets/Placeholder.png'
import Footer from './../Footer/Footer';

const Stocks = () => {
    return (
        <>
            <header className=" bg-no-repeat bg-cover bg-center w-full h-screen bg-stock" >
                <div className='container '>
                    <NavBar />
                    <div className='mt-28'>
                        <h1 className='font-body font-bold text-6xl flex flex-col text-white'>
                            Акции и скидки
                        </h1>
                    </div>
                </div>
            </header>
            <main>
                <div className='container'>
                    <section className='mt-14 mb-40'>
                        <div className='flex justify-between mb-14'>
                            <div className='max-w-[700px]'>
                                <h2 className='text-darkMain text-3xl font-bold font-body mb-4'>
                                    Creatt Figma Kit
                                </h2>
                                <p className='text-lg max-w-[600px] tracking-wide mb-10'>
                                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                                </p>
                                <img src={Placeholder} alt='' />
                            </div>
                            <div className='max-w-[700px]'>
                                <img src={Placeholder} alt='' className='mb-9' />
                                <h2 className='text-darkMain text-3xl font-bold font-body mb-4'>
                                    Design Kit for Figma
                                </h2>
                                <p className='text-lg max-w-[600px] tracking-wide mb-10'>
                                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                                </p>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='max-w-[700px]'>
                                <h2 className='text-darkMain text-3xl font-bold font-body mb-4'>
                                    Creatt Figma Kit
                                </h2>
                                <p className='text-lg max-w-[600px] tracking-wide mb-10'>
                                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                                </p>
                                <img src={Placeholder} alt='' />
                            </div>
                            <div className='max-w-[700px]'>
                                <img src={Placeholder} alt='' className='mb-9' />
                                <h2 className='text-darkMain text-3xl font-bold font-body mb-4'>
                                    Design Kit for Figma
                                </h2>
                                <p className='text-lg max-w-[600px] tracking-wide mb-10'>
                                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                                </p>
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