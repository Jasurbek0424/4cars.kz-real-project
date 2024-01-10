// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from './../NavBar/NavBar';
import Map from '../../assets/Map1.png';
import { FaTelegramPlane } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Footer from '../Footer/Footer';

const Contacts = () => {
    return (
        <>
            <header className=" bg-no-repeat bg-cover bg-center w-full h-screen bg-contact" >
                <div className='container '>
                    <NavBar />
                    <div className='mt-28'>
                        <h1 className='font-body font-bold text-6xl flex flex-col text-white'>
                            Контакты
                        </h1>
                    </div>
                </div>
            </header>
            <main className='mt-40'>
                <div className='container'>
                    <section className='mb-24'>
                        <img src={Map} alt='' />
                        <div className='bg-primary'>
                            <div className=' max-w-[1000px] m-auto flex -translate-y-1/2'>
                                <div className=' flex bg-white flex-col items-center pt-8 max-w-[250px] w-full h-52'>
                                    <FaTelegramPlane className='text-4xl mb-2 text-primary' />
                                    <h2 className='text-darkMain text-xl mb-4 font-semibold font-body'>
                                        Head Quarters
                                    </h2>
                                    <a href='#!' className='leading-7'>
                                        Focarkz_bot
                                    </a>
                                </div>
                                <div className='flex bg-white flex-col items-center pt-8 max-w-[250px] w-full h-52'>
                                    <FaLocationPin className='text-4xl mb-2 text-primary' />
                                    <h2 className='text-darkMain text-xl mb-4 font-semibold font-body'>
                                        Адрес
                                    </h2>
                                    <a href='#!' className='leading-7'>
                                        г. Алматы ул. Казыбаева, 270а
                                    </a>
                                </div>
                                <div className='flex bg-white flex-col items-center pt-8 max-w-[250px] w-full h-52'>
                                    <FaPhone className='text-4xl mb-2 text-primary' />
                                    <h2 className='text-darkMain text-xl mb-4 font-semibold font-body'>
                                        Телефоны
                                    </h2>
                                    <a href='tel:+7 (701) 744-80-07' className='leading-7'>
                                        +7 (701) 744-80-07
                                    </a>
                                    <a href='tel:+7 (706) 413-35-56' className='leading-7'>
                                        +7 (706) 413-35-56
                                    </a>
                                    <p className='text-xs'>
                                        Chat with Us
                                    </p>
                                </div>
                                <div className='flex bg-white flex-col items-center pt-8 max-w-[250px] w-full h-52'>
                                    <MdEmail className='text-4xl mb-2 text-primary' />
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
                    <section className='text-center mb-40'>
                        <h2 className='text-primary text-5xl text-center font-semibold mb-6'>
                            Реквизиты
                        </h2>
                        <div className='flex flex-col gap-8'>
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