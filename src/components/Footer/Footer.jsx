// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaAngleRight } from "react-icons/fa6";
import MapFrame from '../../assets/mapFrame.png';
import FooterBg from '../../assets/footerBg.png';
import Logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <>
            <footer className='relative'>
                <div className='container font-bold'>
                    <div className='flex max-w-[1260px] m-auto gap-5 mb-36'>
                        <form action='' method='post' className='text-darkMain py-2 flex flex-col justify-between'>
                            <h1 className=' leading-[72px] font-semibold text-5xl'>
                                Свяжитесь с нами
                            </h1>
                            <p className='text-xl leading-10'>
                                Свяжитесь с нами для получения ценового предложения, помогите им присоединиться к нашей команде
                            </p>
                            <div>
                                <label htmlFor='fullName' className='text-lg mb-3'>
                                    Полное имя
                                </label>
                                <input
                                    id='fullName'
                                    type='text'
                                    required
                                    placeholder='Саманта Уилер'
                                    className='w-full border-b py-3 px-4 focus:outline-none text-xl'
                                />
                            </div>
                            <div>
                                <label htmlFor='userEmail' className='text-lg mb-3'>
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
                            <div>
                                <label htmlFor='textarea' className='text-lg mb-3'>
                                    Ваши сообщения
                                </label>
                                <textarea
                                    id='textarea'
                                    cols='40'
                                    rows='4'
                                    className='w-full border-b py-3 px-4 focus:outline-none text-xl' >
                                </textarea>
                            </div>
                            <button type='submit'
                                className='flex items-center justify-center bg-primary py-4 rounded-lg
                                text-xl text-white gap-3 '>
                                Связатся с нами <FaAngleRight />
                            </button>
                        </form>
                        <img className='max-h-[740px]' src={MapFrame} alt='' />
                    </div>

                    <div className='pb-10 flex justify-between items-start text-white'>
                        <div className='flex flex-col gap-6'>
                            <h2 className='text-3xl font-bold'>Информация</h2>
                            <ul className='flex flex-col gap-4'>
                                <li>
                                    <a className='text-xl' href='/map-site'>Карта сайта </a>
                                </li>
                                <li>
                                    <a className='text-xl' href='/blog'>Блог</a>
                                </li>
                                <li>
                                    <a className='text-xl' href='#!'>Новинки </a>
                                </li>
                                <li>
                                    <a className='text-xl' href='/account'>Корзина</a>
                                </li>
                                <li>
                                    <a className='text-xl' href='#!'>Список сравнения</a>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h2 className='text-3xl font-bold'>Полезное</h2>
                            <ul className='flex flex-col gap-4'>
                                <li>
                                    <a className='text-xl' href='/contacts'>Контакты </a>
                                </li>
                                <li>
                                    <a className='text-xl' href='/shinomontaj'>Шиномонтаж</a>
                                </li>
                                <li>
                                    <a className='text-xl' href='/change'>Возврат и обмен  </a>
                                </li>
                                <li>
                                    <a className='text-xl' href='/payment'>Оплата и доставка</a>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-6 max-w-[250px]'>
                            <h2 className='text-3xl font-bold'>Сервис</h2>
                            <ul className='flex flex-col gap-4'>
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
                        <div className='flex flex-col gap-6'>
                            <h2 className='text-3xl font-bold'>Личный кабинет</h2>
                            <ul className='flex flex-col gap-4'>
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
                                    <a className='text-xl' href='/shinomontaj'>Шиномонтаж</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <a href=''>
                        <img className='m-auto' src={Logo} alt='' />
                    </a>
                </div >
                <img className='absolute -bottom-5 -z-10 max-w-[2500px] w-full max-h-[1100px] h-full right-0' src={FooterBg} alt='' />
            </footer >
        </>
    );
};

export default Footer;