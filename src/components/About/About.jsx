// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from '../NavBar/NavBar';
import Partners from '../templates/Partners';
import Footer from './../Footer/Footer';
import ScrollToTop from './../ScrollToTop/ScrollToTop';

const About = () => {
    return (
        <>
            <div className='overflow-hidden'>
                <header className=" bg-no-repeat bg-cover bg-center w-full pb-20 bg-map" >
                    <div className='container '>
                        <NavBar />
                    </div>
                </header>
                <ScrollToTop /> 
                <main>
                    <div className='container'>
                        <section
                            data-aos="zoom-out-down"
                            data-aos-anchor-placement="top-bottom"
                            className='font-body text-center mt-10 mb-10 px-5'>
                            <h1 className='font-bold text-darkMain mb-10 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-xl'>
                                О компании
                            </h1>
                            <p className='max-w-[1250px] m-auto text-justify tracking-wide 2xl:text-xl xl:text-xl lg:text-xl md:text-lg sm:text-md text-sm
                        flex flex-col gap-8 leading-10'>
                                Компания ТОО ADAK W&T (Интернет магазин www.4car.kz) работает на рынке с 2013 года. Основное направление деятельности компании – оптовая и розничная продажа автошин и дисков. У нас вы найдете широкий ассортимент легковых шин различных типоразмеров для любого класса автомобиля, начиная от легковых авто, заканчивая спецтехникой, а также грузового транспорта. В ассортименте представлены:
                                <ul className='list-disc max-w-[1200px] ml-auto'>
                                    <li>Зимние, летние и всесезонные шины торговых марок TOYO, NOKIAN, DUNLOP, MICHELIN, PIRELLI, и других производителей.</li>
                                    <li>Штампованные, литые диски торговых марок RIAL, ALUTEC, ATS, FUEL, American Racing, и других производителей.</li>
                                </ul>
                                www.4car.kz сегодня – это динамично развивающаяся компания. Мы заинтересованы во взаимовыгодном сотрудничестве с новыми партнерами и поэтому рассмотрим любые (разумные) коммерческие предложения.
                            </p>
                        </section>
                        <Partners />
                    </div>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
};

export default About;