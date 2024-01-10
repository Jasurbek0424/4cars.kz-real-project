// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from './../NavBar/NavBar';
import Footer from './../Footer/Footer';

const MapSite = () => {
    return (
        <>
            <header className=" bg-no-repeat bg-cover bg-center w-full h-screen bg-map" >
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
                    <section className='mt-40 text-center mb-14'>
                        <h2 className='font-body font-bold text-5xl text-primary mb-10'>
                            Главная
                        </h2>
                        <ul className='max-w-[900px] gap-10 m-auto flex flex-wrap justify-center border py-8 px-8 
                        shadow-lg border-primary shadow-gray-400'>
                            <li>
                                <a className='text-darkMain font-body font-medium text-2xl
                                underline' href='/shini'>Шины</a>
                            </li>
                            <li>
                                <a className='text-darkMain font-body font-medium text-2xl
                                underline' href='/diski'>Диски</a>
                            </li>
                            <li>
                                <a className='text-darkMain font-body font-medium text-2xl
                                underline' href='/payment'>Оплата и доставка</a>
                            </li>
                            <li>
                                <a className='text-darkMain font-body font-medium text-2xl
                                underline' href='/stocks'>Акции и скидки</a>
                            </li>
                            <li>
                                <a className='text-darkMain font-body font-medium text-2xl
                                underline' href='/contacts'>Контакты </a>
                            </li>
                            <li>
                                <a className='text-darkMain font-body font-medium text-2xl
                                underline' href='/shinomontaj'>Шиномонтаж</a>
                            </li>
                            <li>
                                <a className='text-darkMain font-body font-medium text-2xl
                                underline' href='/404'>404</a>
                            </li>
                        </ul>
                    </section>
                    <section className='mt-40 text-center mb-14'>
                        <h2 className='font-body font-bold text-5xl text-primary mb-10'>
                            Дополнительно
                        </h2>
                        <ul className='max-w-[900px] gap-10 m-auto flex flex-wrap justify-center border py-8 px-8 
                        shadow-lg border-primary shadow-gray-400'>
                            <li>
                                <a className='text-darkMain font-body font-medium text-2xl
                                underline' href='/shini'>Шины</a>
                            </li>
                            <li>
                                <a className='text-darkMain font-body font-medium text-2xl
                                underline' href='/diski'>Диски</a>
                            </li>
                            <li>
                                <a className='text-darkMain font-body font-medium text-2xl
                                underline' href='/payment'>Оплата и доставка</a>
                            </li>
                            <li>
                                <a className='text-darkMain font-body font-medium text-2xl
                                underline' href='/stocks'>Акции и скидки</a>
                            </li>
                            <li>
                                <a className='text-darkMain font-body font-medium text-2xl
                                underline' href='/contacts'>Контакты </a>
                            </li>
                            <li>
                                <a className='text-darkMain font-body font-medium text-2xl
                                underline' href='/shinomontaj'>Шиномонтаж</a>
                            </li>
                            <li>
                                <a className='text-darkMain font-body font-medium text-2xl
                                underline' href='/404'>404</a>
                            </li>
                        </ul>
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