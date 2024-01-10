// eslint-disable-next-line no-unused-vars
import React from 'react';
import Logo from '../../assets/logo.png'
import { FiPhoneCall } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { SlUser } from "react-icons/sl";
import { TbArrowsShuffle } from "react-icons/tb";
import { PiShoppingCart } from "react-icons/pi";
import { CgSearch } from "react-icons/cg";



const NavBar = () => {
    return (
        <>
            {/* Upper navbar */}
            <div>
                <div className='flex pt-7 text-white font-body justify-between items-start'>
                    <div className='flex items-center gap-7'>
                        <a href="">
                            <img className='w-52' src={Logo} alt='Logo' />
                        </a>
                        <div className='flex items-center gap-2'>
                            <div className='bg-primary h-9 w-9 flex items-center justify-center rounded'>
                                <FiPhoneCall className='text-2xl text-white' />
                            </div>
                            <div className='flex flex-col'>
                                <a className='font-body text-sm' href='tel:+77017448007'>+7 (701) 744-80-07</a>
                                <a className='text-sm' href='tel:+77064133556'>+7 (706) 413-35-56</a>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='bg-primary h-9 w-9 flex items-center justify-center rounded'>
                                <FaLocationDot className='text-2xl text-white' />
                            </div>
                            <div>
                                <a className=' flex text-sm flex-col ' href='https://2gis.kz/almaty/firm/70000001040222127/76.914359%2C43.305155?m=76.91509%2C43.305034%2F18.43%2Fr%2F3.96' >
                                    г. Алматы ул.
                                    <span>Казыбаева, 270а</span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <button className='py-2 px-8 bg-primary hover:bg-blue-600 transition-all text-sm rounded font-normal'>Заказать звонок</button>
                        </div>
                    </div>
                    <div>
                        <div className='flex '>
                            <div className='flex flex-col items-center w-24 text-center'>
                                <div className='bg-primary h-9 w-9 flex items-center justify-center rounded-full'>
                                    <SlUser className='' />
                                </div>
                                <a href='/account' className='text-xs'>
                                    Личный кабинет
                                </a>
                            </div>
                            <div className='flex flex-col items-center w-24 text-center'>
                                <div className='bg-primary h-9 w-9 flex items-center justify-center rounded-full'>
                                    <TbArrowsShuffle />
                                </div>
                                <span className='text-xs'>
                                    Список желаний
                                </span>
                            </div>
                            <div className='flex flex-col items-center w-24 text-center'>
                                <div className='bg-primary relative h-9 w-9 flex items-center justify-center rounded-full'>
                                    <PiShoppingCart />
                                    <span className=' text-xs px-1 absolute -top-0 -right-1 counter rounded-full bg-primary'>
                                        0
                                    </span>
                                </div>
                                <span className='text-xs flex flex-col'>
                                    Корзина <span>0 T</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/* lower naw */}
            <div>
                <form action='' method='post' className='flex max-w-[600px] m-auto'>
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

                <ul className='flex justify-around flex-wrap max-w-[950px] m-auto mt-8 py-3 px-2 bg-white rounded-md'>
                    <li>
                        <a href='/shini' className='list__link text-primary text-lg font-body'>Шины</a>
                    </li>
                    <li>
                        <a href='/diski' className='list__link text-primary text-lg font-body'>Диски</a>
                    </li>
                    <li>
                        <a href='/payment' className='list__link text-primary text-lg font-body'>Оплата и доставка</a>
                    </li>
                    <li>
                        <a href='/stocks' className='list__link text-primary text-lg font-body'>Акции и скидки</a>
                    </li>
                    <li>
                        <a href='/contacts' className='list__link text-primary text-lg font-body'>Контакты</a>
                    </li>
                    <li>
                        <a href='/shinomontaj' className='list__link text-primary text-lg font-body'>Шиномонтаж</a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default NavBar;