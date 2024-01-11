// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from './../NavBar/NavBar';
import Footer from './../Footer/Footer';

const MapSite = () => {
    return (
        <>
            <header className=" bg-no-repeat bg-cover bg-center w-full pb-10 bg-map" >
                <div className='container '>
                    <NavBar />
                    <div className='mt-28'>
                        <h1 className='font-body font-bold text-6xl flex flex-col text-white'>
                            Карта сайта
                        </h1>
                    </div>
                </div>
            </header>
            <main>
                <div className='container'>
                    <section className='mt-40  mb-14 flex justify-between'>
                        <div>
                            <h2 className='font-body font-bold text-5xl text-primary mb-10'>
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
                        <div>
                            <h2 className='font-body font-bold text-5xl text-primary mb-10'>
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
                        <div>
                            <h2 className='font-body font-bold text-5xl text-primary mb-10'>
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
                        <div>
                            <h2 className='font-body font-bold text-5xl text-primary mb-10'>
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