// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Complect from '../../assets/complect.png';
import Tabs from '../templates/Tabs';

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Footer from './../Footer/Footer';
import './Product.css';
import ScrollToTop from './../ScrollToTop/ScrollToTop';




const Product = () => {
    const [countProduct, setCountProduct] = useState(1);
    const [selectedMonth, setSelectedMonth] = useState('1 мес');



    const product = 4;

    const Increment = () => {
        countProduct < product ? setCountProduct(countProduct + 1) : countProduct
    }
    const Decrement = () => {
        countProduct > 1 ? setCountProduct(countProduct - 1) : 0
    }
    const months = [
        '1 мес', '2 мес', '3 мес', '4 мес',
        '5 мес', '6 мес', '7 мес', '8 мес',
        '9 мес', '10 мес', '11 мес', '12 мес'
    ];

    const ProductPrice = 13150 * countProduct; // Цена товара

    const calculateInstallment = (selectedMonth) => {
        // Предположим, что процентная ставка равна 1% в месяц
        // const interestRate = 0.01;
        const months = parseInt(selectedMonth.split(' ')[0], 10);
        const installment = (ProductPrice / months);  // interestRate => процент рассрочки
        const roundedInstallment = Math.ceil(installment); // Округляем до двух знаков после запятой
        return roundedInstallment.toFixed(0);
    };



    return (
        <>
            <header className=" bg-no-repeat bg-cover bg-center w-full pb-20 bg-map" >
                <div className='container '>
                    <NavBar />
                </div>
            </header>
            <ScrollToTop />
            <main>
                <div className='container'>
                    <section className='mt-14 font-body px-4'>
                        <div className=' flex gap-5 flex-col ranking'>
                            <h1 className='2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-md text-md font-body font-bold '>
                                Шины BOTO <span>Genesys 208</span> <span>155/70</span> R12 73T
                            </h1>
                            <div className='flex gap-6'>
                                <Stack className='max-w-[120px]' spacing={1}>
                                    <Rating className='' name="half-rating" defaultValue={5} precision={0.5} />
                                </Stack>
                                <p>
                                    <span>161</span> отзыв
                                </p>
                            </div>
                        </div>
                        <div className='mt-10 flex max-w-[1400px] w-full justify-between gap-4 mx-auto mb-24 productHero'>
                            <div className='flex items-center gap-4 max-w-[700px] w-full justify-between productLeft'>
                                <img src={Complect} alt='' />
                                <div className='flex flex-col gap-4'>
                                    <p className='flex gap-3 text-xl text-gray-500'>
                                        Модель шины
                                        <span className='text-primary'>Genesys 208</span>
                                    </p>
                                    <p className='flex gap-3 text-xl text-gray-500'>
                                        Ширина шины
                                        <span className='text-primary'>155</span>
                                    </p>
                                    <p className='flex gap-3 text-xl text-gray-500'>
                                        Высота
                                        <span className='text-primary'>70</span>
                                    </p>
                                    <p className='flex gap-3 text-xl text-gray-500'>
                                        Диаметр шины
                                        <span className='text-primary'>18</span>
                                    </p>
                                    <p className='flex gap-3 text-xl text-gray-500'>
                                        Сезонность
                                        <span className='text-primary'>Летние</span>
                                    </p>
                                    <p className='flex gap-3 text-xl text-gray-500'>
                                        Шипы
                                        <span className='text-primary'>Нет</span>
                                    </p>
                                    <p className='flex gap-3 text-xl text-gray-500'>
                                        Индекс нагрузки
                                        <span className='text-primary'>73</span>
                                    </p>
                                    <p className='flex gap-3 text-xl text-gray-500'>
                                        Индекс скорости
                                        <span className='text-primary'>T</span>
                                    </p>
                                    <p className='flex gap-3 text-xl text-gray-500'>
                                        RunFlat
                                        <span className='text-primary'>Нет </span>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className='flex items-center gap-7 flex-wrap max-w-[620px] w-full productRight'>
                                    <h2 className='text-darkMain 2xl:text-3xl
                                    xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-xl font-body font-bold max-w-[180px] w-full'>
                                        {ProductPrice} тг
                                    </h2>
                                    <p className='2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg sm:text-md text-md flex flex-col leading-10 '>
                                        В наличии: {product} шт.
                                        <span className='text-primary' >в 1 магазине</span>
                                    </p>

                                    <div className='flex items-center gap-5 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-xl'>
                                        <button
                                            onClick={Decrement}
                                            className='2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-xl text-2xl text-gray-500'
                                        >
                                            -
                                        </button>
                                        <p className='2xl:w-14 xl:w-12 lg:w-10 md:w-8 sm:w-6 w-6 text-center'>
                                            {countProduct}
                                        </p>
                                        <button
                                            className='2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-gray-500'
                                            onClick={Increment}>
                                            +
                                        </button>
                                    </div>
                                    <div className='flex flex-wrap items-center gap-5 w-full btnsBuyProduct'>
                                        <button type='submit' className='py-2 bg-primary max-w-[300px] w-full 2xl:text-2xl
                                        xl:text-xl lg:text-xl md:text-lg sm:text-md text-sm text-white rounded active:bg-blue-700'>
                                            В корзину
                                        </button>
                                        <button type='submit' className='py-2 bg-primary max-w-[300px] w-full 2xl:text-2xl
                                        xl:text-xl lg:text-xl md:text-lg sm:text-md text-sm text-white rounded active:bg-blue-700'>
                                            Купить в один клик
                                        </button>
                                    </div>
                                    <div className='flex max-w-[620px] w-full btnKredit'>
                                        <div className='bg-red-600 max-w-[200px] w-full rounded-s-lg text-white'>
                                            {selectedMonth && (
                                                <div className='px-3 pt-1'>
                                                    <p className='text-sm text-center'>рассрочка</p>
                                                    <div className='flex items-end gap-4 justify-center'>
                                                        <p className='font-bold 2xl:text-xl xl:text-xl lg:text-lg md:text-lg
                                                        sm:text-lg text-md tracking-widest'>
                                                            {calculateInstallment(selectedMonth)} </p>
                                                        <span>
                                                            тг/мес
                                                        </span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <Autocomplete
                                            value={selectedMonth}
                                            onChange={(event, newValue) => setSelectedMonth(newValue)}
                                            options={months}
                                            renderInput={(params) => <TextField {...params} />}
                                            className='max-w-[170px] hover:outline-none border-red-600 border 
                                            2xl:rounded-e-lg xl:rounded-e-lg md:rounded-e-lg lg:rounded-e-lg sm:rounded-e-lg rounded-none w-full text-center cursor-pointer'
                                        />
                                    </div>
                                    <div className='w-full hotLine'>
                                        <p className='flex flex-col text-xl gap-4'>
                                            Звоните и заказывайте на номер: <a className='underline text-primary' href='tel:+7(701)744-80-07'>+7(701)744-80-07</a>
                                            <span>
                                                <strong>Бесплатная</strong> горячая линия по Казахстану
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className=' w-full'>
                        <Tabs />
                    </section>
                </div >
            </main >
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Product;