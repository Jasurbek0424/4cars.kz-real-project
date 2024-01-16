// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from './../NavBar/NavBar';
import Map from '../../assets/Map1.png';
import { FaTelegramPlane } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Footer from '../Footer/Footer';
import './Contact.css';

const Contacts = () => {
    return (
        <>
            <header className=" bg-no-repeat bg-cover bg-center w-full pb-20 bg-contact" >
                <div className='container '>
                    <NavBar />
                    <div className='mt-28 px-4'>
                        <h1 className='font-body font-bold 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl 
                        2xl:text-start xl:text-start lg:text-start text-center flex flex-col text-white'>
                            Контакты
                        </h1>
                    </div>
                </div>
            </header>
            <main className='mt-40'>
                <div className='container'>
                    <section className='mb-16 w-full'>
                        <img className='contact__map' src={Map} alt='' />
                        <div className='bg-primary p-4'>
                            <div className='max-w-[1000px]  mx-auto flex justify-center -translate-y-1/2 text-center contact__info'>
                                <div className='contact__item flex bg-white flex-col items-center pt-8 
                                2xl:max-w-[250px] xl:max-w-[200px] lg:max-w-[180px] md:max-w-[160px]
                                sm:max-w-[150px] max-w-[150px] w-full 
                                2xl:h-52 xl:h-48 lg:h-44 md:h-40 sm:h-36 h-36 p-3'>
                                    <FaTelegramPlane className='2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl text-xl mb-2 text-primary' />
                                    <h2 className='text-darkMain text-xl mb-4 font-semibold font-body'>
                                        Head Quarters
                                    </h2>
                                    <a href='#!' className='leading-7'>
                                        @Focarkz_bot
                                    </a>
                                </div>
                                <div className='contact__item flex bg-white flex-col items-center pt-8  
                                2xl:max-w-[250px] xl:max-w-[200px] lg:max-w-[180px] md:max-w-[160px]
                                sm:max-w-[150px] max-w-[150px] w-full 
                                2xl:h-52 xl:h-48 lg:h-44 md:h-40 sm:h-36 h-36'>
                                    <FaLocationPin className='2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl text-xl mb-2 text-primary' />
                                    <h2 className='text-darkMain text-xl mb-4 font-semibold font-body'>
                                        Адрес
                                    </h2>
                                    <a href='#!' className='leading-7'>
                                        г. Алматы ул. Казыбаева, 270а
                                    </a>
                                </div>
                                <div className='contact__item flex bg-white flex-col items-center pt-8 
                                2xl:max-w-[250px] xl:max-w-[200px] lg:max-w-[180px] md:max-w-[160px]
                                sm:max-w-[150px] max-w-[150px] w-full 
                                2xl:h-52 xl:h-48 lg:h-44 md:h-40 sm:h-36 h-36'>
                                    <FaPhone className='2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl text-xl mb-2 text-primary' />
                                    <h2 className='text-darkMain text-xl mb-4 font-semibold font-body'>
                                        Телефоны
                                    </h2>
                                    <a href='tel:+7 (701) 744-80-07' className=' leading-7'>
                                        +7 (701) 744-80-07
                                    </a>
                                    <a href='tel:+7 (706) 413-35-56' className='leading-7'>
                                        +7 (706) 413-35-56
                                    </a>
                                </div>
                                <div className='contact__item flex bg-white flex-col items-center pt-8 
                                2xl:max-w-[250px] xl:max-w-[200px] lg:max-w-[180px] md:max-w-[160px]
                                sm:max-w-[150px] max-w-[150px] w-full 
                                2xl:h-52 xl:h-48 lg:h-44 md:h-40 sm:h-36 h-36'>
                                    <MdEmail className='2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl text-xl mb-2 text-primary' />
                                    <h2 className='text-darkMain text-xl mb-4 font-semibold font-body'>
                                        E-Mail
                                    </h2>
                                    <a href='mailto:info@4car.kz' className='leading-7'>
                                        info@4car.kz
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='text-center mb-20'>
                        <h2 className='text-primary 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl
                        text-2xl text-center font-semibold mb-6'>
                            Реквизиты
                        </h2>
                        <div className='flex flex-col gap-8 props'>
                            <p className='text-3xl tracking-wide'>
                                <span className='font-bold'>Наименование: </span> ТОО “ADAK W&T”
                            </p>
                            <p className='text-3xl tracking-wide'>
                                <span className='font-bold'>ИИН: </span> 131240018078
                            </p>
                            <p className='text-3xl tracking-wide'>
                                <span className='font-bold'>Юридический адрес: </span> Республика Казахстан, г. Алматы ул. Казыбаева, 270 а
                            </p>
                            <p className='text-3xl tracking-wide'>
                                <span className='font-bold'>ИИК: </span> KZ086018771000401241
                            </p>
                            <p className='text-3xl tracking-wide'>
                                <span className='font-bold'>Банк: </span>  АО «Народный Банк Казахстан»
                            </p>
                            <p className='text-3xl tracking-wide'>
                                <span className='font-bold'>БИК Банка:</span> HSBKKZK
                            </p>
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

export default Contacts;