// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from './../NavBar/NavBar';
import Footer from './../Footer/Footer';
import './Stock.css';
import ScrollToTop from './../ScrollToTop/ScrollToTop';

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
            <ScrollToTop />
            <main>
                <div className='container'>
                    <section className='mt-14 mb-16 px-4 flex flex-wrap justify-center gap-4 news__content'>
                        <div className='news__item max-w-[550px] w-full p-4 border flex flex-col justify-between'>
                            <div>
                                <span className='text-sm text-blue-400 font-bold flex flex-col justify-between'>
                                    06 МАЙ 2022
                                </span>
                                <h2 className='2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm text-sm mb-3'>
                                    Как правильно выбрать летние шины?
                                </h2>
                                <p className='text-justify mb-4'>
                                    Завершение зимнего сезона для каждого автомобилиста обязательно ознаменуется сменой колес. Чтобы правильно подобрать и выгодно купить летние шины, следует ориентироваться на их параметры. Дополнительно учитывают стиль вождения и рекомендации производителя машины. Соблюдение таких правил обеспечит безопасность езды, курсовую устойчивость автомобиля, минимальную шумность и оптимальный расход топлива.
                                </p>
                            </div>
                            <a href='#!' className='py-2  max-w-[150px] w-full flex justify-center bg-primary font-medium text-white rounded'>
                                Подробнее
                            </a>
                        </div>
                        <div className='news__item max-w-[550px] w-full p-4 border flex flex-col justify-between'>
                            <div>
                                <span className='text-sm text-blue-400 font-bold'>
                                    03 НОЯ 2020
                                </span>
                                <h2 className='2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm text-sm mb-3'>
                                    Что нужно знать про шины Boto?
                                </h2>
                                <p className='text-justify mb-4'>
                                    Автомобилисты, Вы уже видели? Кто это тут у нас? Новички всегда подвергаются пристальному вниманию! Так и шины Boto – уверенно ворвались на прилавки, да еще и с громкими заявлениями, мол «Вы нас полюбите!». Первое, что бросается в глаза – демократичная цена. Давайте разберемся, есть ли еще какие-то преимущества...
                                </p>
                            </div>
                            <a href='#!' className='py-2 max-w-[150px] w-full flex justify-center bg-primary font-medium text-white rounded'>
                                Подробнее
                            </a>
                        </div>
                        <div className='news__item max-w-[550px] w-full p-4 border flex flex-col justify-between'>
                            <div>
                                <span className='text-sm text-blue-400 font-bold'>
                                    06 АПР 2020
                                </span>
                                <h2 className='2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm text-sm mb-3'>
                                    Бессрочная расширенная гарантия Nokian
                                </h2>
                                <p className='text-justify mb-4'>
                                    Бессрочная расширенная гарантия Nokian Расширенная гарантия на шины Nokian Tyres является дополнением к стандартным гарантийным условиям. В случае непреднамеренного повреждения шины компания Nokian Tyres бесплатно отремонтирует каждую поврежденную шину, а если ремонт невозможен – заменит на новую.
                                </p>
                            </div>
                            <a href='#!' className='py-2  max-w-[150px] w-full flex justify-center bg-primary font-medium text-white rounded'>
                                Подробнее
                            </a>
                        </div>
                        <div className='news__item max-w-[550px] w-full p-4 border flex flex-col justify-between'>
                            <div>
                                <span className='text-sm text-blue-400 font-bold'>
                                    15 НОЯ 2019
                                </span>
                                <h2 className='2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm text-sm mb-3'>
                                    Рассрочка или кредит на Покупки с Kaspi QR
                                </h2>
                                <p className='text-justify mb-4'>
                                    Уважаемые клиенты! Представляем Вам Покупки с Kaspi QR. Шины и диски в рассрочку до 1 миллиона тенге на 3 месяца или в кредит до 24 месяцев.
                                </p>
                            </div>
                            <a href='#!' className='py-2  max-w-[150px] w-full flex justify-center bg-primary font-medium text-white rounded'>
                                Подробнее
                            </a>
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