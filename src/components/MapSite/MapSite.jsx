// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from './../NavBar/NavBar';
import Footer from './../Footer/Footer';
import './MapSite.css';
import ScrollToTop from './../ScrollToTop/ScrollToTop';

const MapSite = () => {
    return (
        <>
            <header className=" bg-no-repeat bg-cover bg-center w-full pb-10 bg-map" >
                <div className='container '>
                    <NavBar />
                    <div className='mt-28 px-4'>
                        <h1 className='font-body font-bold 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl 
                        2xl:text-start xl:text-start lg:text-start text-center flex flex-col text-white'>
                            Карта сайта
                        </h1>
                    </div>
                </div>
            </header>
            <ScrollToTop />
            <main>
                <div className='container'>
                    <section className='mt-20  mb-14 flex flex-wrap gap-6 justify-between px-5'>
                        <div className='site__mapItem'>
                            <h2 className='font-body font-bold text-3xl text-primary mb-4'>
                                Навигация
                            </h2>
                            <ul className='flex flex-col gap-4 text-lg list-disc text-primary'>
                                <li>
                                    <a href='/'>Главная</a>
                                </li>
                                <li>
                                    <a href='/shini'>Шины</a>
                                </li>
                                <li>
                                    <a href='/diski'>Диски</a>
                                </li>
                                <li>
                                    <a href='/payment'>Оплата и доставка</a>
                                </li>
                                <li>
                                    <a href='/contacts'>Контакты</a>
                                </li>
                                <li>
                                    <a href='/shinomontaj'>Шиномонтаж</a>
                                </li>
                                <li>
                                    <a href='/product'>Рассрочка товара</a>
                                </li>
                                <li>
                                    <a href='/change'>Возврат и обмен</a>
                                </li>
                                <li>
                                    <a href='/about'>О компании</a>
                                </li>
                            </ul>
                        </div>
                        <div className='site__mapItem'>
                            <h2 className='font-body font-bold text-3xl text-primary mb-4'>
                                Полезное
                            </h2>
                            <ul className='flex flex-col gap-4 text-lg list-disc text-primary'>
                                <li>
                                    <a href='/stocks'>Новости</a>
                                </li>
                                <li>
                                    <a href='/stocks'>Другие Новости</a>
                                </li>
                                <li>
                                    <a href='/stocks'>Другие Новости</a>
                                </li>
                                <li>
                                    <a href='/stocks'>Другие Новости</a>
                                </li>
                                <li>
                                    <a href='/stocks'>Другие Новости</a>
                                </li>
                                <li>
                                    <a href='/stocks'>Другие Новости</a>
                                </li>
                                <li>
                                    <a href='/stocks'>Другие Новости</a>
                                </li>
                            </ul>
                        </div>
                        <div className='site__mapItem'>
                            <h2 className='font-body font-bold text-3xl text-primary mb-4'>
                                Партнеры
                            </h2>
                            <ul className='flex flex-col gap-4 text-lg list-disc text-primary'>
                                <li>
                                    <a href='#!'>Ford Mustang</a>
                                </li>
                                <li>
                                    <a href='#!'>Lamborgini</a>
                                </li>
                                <li>
                                    <a href='#!'>BMW</a>
                                </li>
                                <li>
                                    <a href='#!'>Mersedes-Benz</a>
                                </li>
                                <li>
                                    <a href='#!'>Chevrolet</a>
                                </li>
                                <li>
                                    <a href='#!'>Hundai</a>
                                </li>

                            </ul>
                        </div>
                        <div className='site__mapItem'>
                            <h2 className='font-body font-bold text-3xl text-primary mb-4'>
                                Новое
                            </h2>
                            <ul className='flex flex-col gap-4 text-lg list-disc text-primary'>
                                <li>
                                    <a href='#!'>Купи сейчас – забери весной</a>
                                </li>
                                <li>
                                    <a href='#!'>Распродажа ламинированной фанеры</a>
                                </li>
                                <li>
                                    <a href='#!'>Фасадные панели TECOS со скидкой 25%</a>
                                </li>
                                <li>
                                    <a href='#!'>Представляем акцию на террасную доску </a>
                                </li>
                            </ul>
                        </div>


                    </section>

                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default MapSite;