// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from './../NavBar/NavBar';
import Footer from './../Footer/Footer';
import './Stock.css';
import ScrollToTop from './../ScrollToTop/ScrollToTop';
import { NewsInfo } from '../../data/home';
import { Link } from 'react-router-dom';

const Stocks = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 200,
        });
    };
    return (
        <>
            <div className='overflow-hidden'>
                <header className=" bg-no-repeat bg-cover bg-center w-full pb-20 bg-stock" >
                    <div className='container '>
                        <NavBar />
                        <div className='mt-28 px-4' data-aos="fade-right">
                            <h1 className='font-body font-bold 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl 
                        2xl:text-start xl:text-start lg:text-start text-center flex flex-col text-white'>
                                Новости
                            </h1>
                        </div>
                    </div>
                </header>
                <ScrollToTop />
                <main>
                    <div className='container'>
                        <section className='mt-14 mb-16 px-4 flex flex-wrap justify-center gap-4 news__content'>
                            {NewsInfo.map(el => (
                                <div
                                    key={el.id}
                                    data-aos="fade-up-right"
                                    data-aos-anchor-placement="top-bottom"
                                    className='news__item max-w-[550px] w-full p-4 border flex flex-col justify-between'>
                                    <div>
                                        <span className='text-sm text-blue-400 font-bold flex flex-col justify-between'>
                                            {el.date}
                                        </span>
                                        <h2 className='2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm text-sm mb-3'>
                                            {el.title}
                                        </h2>
                                        <p className='text-justify mb-4'>
                                            {el.content}
                                        </p>
                                    </div>
                                    <Link
                                        to={`/news/${el.id}`}
                                        onClick={scrollToTop}
                                        className='py-2  max-w-[150px] w-full flex justify-center bg-primary font-medium text-white rounded'>
                                        Подробнее
                                    </Link>
                                </div>
                            ))}
                        </section>
                    </div >
                </main >
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
};

export default Stocks;