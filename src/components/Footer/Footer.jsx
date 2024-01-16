// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaAngleRight } from "react-icons/fa6";
import MapFrame from '../../assets/mapFrame.png';
import FooterBg from '../../assets/footerBg.png';
import Logo from '../../assets/logo.png'
import './footer.css';

const Footer = () => {
    return (
        <>
            <footer className='relative'>
                <div className='container font-bold'>
                    <div className='flex items-center justify-center max-w-[1260px] w-full m-auto gap-5 mb-36 px-5 footer__form'>
                        <form action='' method='post' className='text-darkMain py-2 flex flex-col justify-between 
                        2xl:max-w-[600px] xl:max-w-[500px] lg:max-w-[450px] md:max-w-[400px] sm:max-w-[350px] max-w-[300px]
                        w-full'>
                            <h1 className=' leading-[72px] font-semibold 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-xl'>
                                Свяжитесь с нами
                            </h1>
                            <p className='2xl:text-xl xl:text-xl lg:text-xl md:text-lg sm:text-lg text-md leading-10'>
                                Свяжитесь с нами для получения ценового предложения, помогите им присоединиться к нашей команде
                            </p>
                            <div>
                                <label htmlFor='fullName' className='2xl:text-lg xl:text-lg lg:text-md md:text-md sm:text-md text-md mb-3'>
                                    Полное имя
                                </label>
                                <input
                                    autoComplete='name'
                                    id='fullName'
                                    type='text'
                                    required
                                    placeholder='Саманта Уилер'
                                    className='w-full border-b py-3 px-4 focus:outline-none text-xl'
                                />
                            </div>
                            <div>
                                <label htmlFor='userEmail' className='2xl:text-lg xl:text-lg lg:text-md md:text-md sm:text-sm text-sm mb-3'>
                                    Введите адрес электронной почты
                                </label>
                                <input
                                    autoComplete='email'
                                    required
                                    id='userEmail'
                                    type='email'
                                    placeholder='Example@email.com'
                                    className='w-full border-b py-3 px-4 focus:outline-none text-xl' />
                            </div>
                            <div className='mt-3'>
                                <label htmlFor='textarea' className=' 2xl:text-lg xl:text-lg lg:text-md md:text-md sm:text-md text-md mb-3'>
                                    Ваше сообщение
                                </label>
                                <textarea
                                    id='textarea'
                                    cols='40'
                                    rows='3'
                                    className='w-full border-b py-3 px-4 focus:outline-none text-xl' >
                                </textarea>
                            </div>
                            <button type='submit'
                                className='flex items-center justify-center bg-primary 2xl:py-4 xl:py-4 lg:py-3 md:py-2 sm:py-2 py-2 rounded-lg
                                2xl:text-xl xl:text-xl lg:text-xl md:text-lg sm:text-md text-sm
                                 text-white gap-3 '>
                                Связаться с нами <FaAngleRight />
                            </button>
                        </form>
                        <img className='2xl:max-w-[600px] xl:max-w-[500px] lg:max-w-[450px] md:max-w-[400px] sm:max-w-[350px] max-w-[300px] w-full' src={MapFrame} alt='' />
                    </div>
                </div >
                <div className='footer_navigate py-5'>
                    <div className='container'>
                        <div className='pb-10 flex flex-wrap gap-5 justify-between items-start text-white px-5 '>
                            <div className='flex flex-col footer__content gap-6'>
                                <h2 className='2xl:text-3xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-lg font-bold'>Информация</h2>
                                <ul className='flex flex-col gap-4 footer__list'>
                                    <li>
                                        <a className='text-xl' href='/sitemap'>Карта сайта </a>
                                    </li>
                                    <li>
                                        <a className='text-xl' href='/blog'>Блог</a>
                                    </li>
                                    <li>
                                        <a className='text-xl' href='/news'>Новости </a>
                                    </li>
                                    <li>
                                        <a className='text-xl' href='/account'>Корзина</a>
                                    </li>
                                    <li>
                                        <a className='text-xl' href='#!'>Список сравнения</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex flex-col footer__content gap-6'>
                                <h2 className='2xl:text-3xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-lg font-bold'>Полезное</h2>
                                <ul className='flex flex-col gap-4 footer__list'>
                                    <li>
                                        <a className='text-xl' href='/contacts'>Контакты </a>
                                    </li>
                                    <li>
                                        <a className='text-xl' href='/shinomontazh'>Шиномонтаж</a>
                                    </li>
                                    <li>
                                        <a className='text-xl' href='/garantii'>Возврат и обмен  </a>
                                    </li>
                                    <li>
                                        <a className='text-xl' href='/delivery'>Оплата и доставка</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex flex-col footer__content gap-6 max-w-[250px]'>
                                <h2 className='2xl:text-3xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-lg font-bold'>Сервис</h2>
                                <ul className='flex flex-col gap-4 footer__list'>
                                    <li>
                                        <a className='text-xl' href='/product'>Условия кредита и
                                            рассрочки </a>
                                    </li>
                                    <li>
                                        <a className='text-xl' href='#!'>Публичная оферта</a>
                                    </li>
                                    <li>
                                        <a className='text-xl' href='/about'>О компании </a>
                                    </li>
                                    <li>
                                        <a className='text-xl' href='#!'>Список желаний</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex flex-col footer__content gap-6'>
                                <h2 className='2xl:text-3xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-lg font-bold'>Личный кабинет</h2>
                                <ul className='flex flex-col gap-4 footer__list'>
                                    <li>
                                        <a className='text-xl' href='/account'>Личный кабинет </a>
                                    </li>
                                    <li>
                                        <a className='text-xl' href='/account'>Заказы</a>
                                    </li>
                                    <li>
                                        <a className='text-xl' href='/account'>Адреса </a>
                                    </li>
                                    <li>
                                        <a className='text-xl' href='/account'>Последние</a>
                                    </li>
                                    <li>
                                        <a className='text-xl' href='/shinomontazh'>Шиномонтаж</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <a href=''>
                            <img className='m-auto' src={Logo} alt='' />
                        </a>
                    </div>
                </div>
                <img className='footer__bg absolute -bottom-5 -z-10 max-w-[2500px] w-full max-h-[1100px] h-full right-0' src={FooterBg} alt='' />
            </footer >
        </>
    );
};

export default Footer;