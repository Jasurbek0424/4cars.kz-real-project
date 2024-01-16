// eslint-disable-next-line no-unused-vars
import React from 'react';
import Logo from '../../assets/logo.png'
import { FiPhoneCall } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { SlUser } from "react-icons/sl";
import { TbArrowsShuffle } from "react-icons/tb";
import { PiShoppingCart } from "react-icons/pi";
import { CgSearch } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

import './NavBar.css';



const NavBar = () => {
    return (
        <>
            <div className='overflow-x-hidden px-4'>
                {/* Upper navbar */}
                <div className=''>
                    <div className='flex pt-7 text-white font-body justify-between items-center'>
                        <a href="/">
                            <img className=' logo w-52' src={Logo} alt='Logo' />
                        </a>
                        <label className='nav-animate' htmlFor='media-nav'><FaBars className='text-2xl' /></label>
                        <input className='hidden' type='checkbox' id='media-nav' />
                        <div className='flex pt-7 lg:pt-4 text-white font-body justify-between items-center nav__top '>
                            <label className='nav-animate' htmlFor='media-nav'><FaTimes className='text-2xl absolute left-5' /></label>
                            <div className='flex items-center gap-7 xl:gap-4'>
                                <div className='flex items-center gap-2'>
                                    <div className='bg-primary h-9 w-9 flex nav__icon items-center justify-center rounded'>
                                        <FiPhoneCall className='icon text-2xl text-white' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <a className='media__link font-body text-xs xl:text-sm lg:text-sm ' href='tel:+77017448007'>+7 (701) 744-80-07</a>
                                        <a className='media__link text-xs xl:text-sm lg:text-sm' href='tel:+77064133556'>+7 (706) 413-35-56</a>
                                    </div>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className='bg-primary nav__icon h-9 w-9 flex items-center justify-center rounded'>
                                        <FaLocationDot className='text-2xl icon text-white' />
                                    </div>
                                    <div>
                                        <a className='media__link flex text-sm flex-col ' href='https://2gis.kz/almaty/firm/70000001040222127/76.914359%2C43.305155?m=76.91509%2C43.305034%2F18.43%2Fr%2F3.96' >
                                            г. Алматы ул.
                                            <span>Казыбаева, 270а</span>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <button className='media__linkButton py-2 px-8 bg-primary hover:bg-blue-600 transition-all text-sm rounded font-normal'>Заказать звонок</button>
                                </div>
                            </div>
                            <div>
                                <div className='flex '>
                                    <div className='flex flex-col items-center w-24 text-center'>
                                        <div className='bg-primary nav__icon h-9 w-9 flex items-center justify-center rounded-full'>
                                            <SlUser className='' />
                                        </div>
                                        <a href='/account' className='media__link text-xs'>
                                            Личный кабинет
                                        </a>
                                    </div>
                                    <div className='flex flex-col items-center w-24 text-center'>
                                        <div className='media__link bg-primary nav__icon h-9 w-9 flex items-center justify-center rounded-full'>
                                            <TbArrowsShuffle />
                                        </div>
                                        <a href='#!' className=' media__link text-xs '>
                                            Список желаний
                                        </a>
                                    </div>
                                    <div className='flex flex-col  items-center w-24 text-center'>
                                        <div className='bg-primary nav__icon relative h-9 w-9 flex items-center justify-center rounded-full'>
                                            <PiShoppingCart />
                                            <span className=' text-xs px-1 absolute -top-0 -right-1 counter rounded-full bg-primary'>
                                                0
                                            </span>
                                        </div>
                                        <a href='#!' className='media__link text-xs flex flex-col'>
                                            Корзина <span>0 T</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                {/* lower naw */}
                <div>
                    <form action='' method='post' className='flex max-w-[600px] m-auto mt-8'>
                        <input type='search' id='searchProduct'
                            className='bg-transparent border
                    rounded-s-md w-full placeholder:text-white text-white focus:placeholder:opacity-100
                    py-1 px-2 placeholder:opacity-50 focus:outline-none'
                            placeholder='Найти' />
                        <button
                            type='submit'
                            className='bg-primary h-9 w-9 flex items-center rounded-e-md
                    justify-center text-white'>
                            <CgSearch />
                        </button>
                    </form>

                    <ul className='flex justify-around flex-wrap gap-1 max-w-[950px] m-auto mt-8 py-3 px-2 bg-white rounded-md list'>
                        <li>
                            <a href='/tires' className='list__link text-primary lg:text-lg md:text-xs sm:text-xs text-xs font-body'>Шины</a>
                        </li>
                        <li>
                            <a href='/rims' className='list__link text-primary lg:text-lg md:text-xs sm:text-xs text-xs font-body'>Диски</a>
                        </li>
                        <li>
                            <a href='/delivery' className='list__link text-primary lg:text-lg md:text-xs sm:text-xs text-xs font-body'>Оплата и доставка</a>
                        </li>
                        <li>
                            <a href='/news' className='list__link text-primary lg:text-lg md:text-xs sm:text-xs text-xs font-body'>Новости</a>
                        </li>
                        <li>
                            <a href='/contacts' className='list__link text-primary lg:text-lg md:text-xs sm:text-xs text-xs font-body'>Контакты</a>
                        </li>
                        <li>
                            <a href='/shinomontazh' className='list__link text-primary lg:text-lg md:text-xs sm:text-xs text-xs font-body'>Шиномонтаж</a>
                        </li>
                    </ul>
                </div >
            </div>
        </>
    );
};

export default NavBar;