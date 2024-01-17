// eslint-disable-next-line no-unused-vars
import React from 'react';
import SelectShini from '../templates/SelectShini';
import SelectDiski from '../templates/SelectDiski';
import Complect from '../../assets/complect.png'
import Partners from '../templates/Partners';
import BlogImg from '../../assets/BlogImg.png'
import { IoBookOutline } from "react-icons/io5";
import AboutImg from '../../assets/AboutImg.jpg';
import Hits from '../templates/Hits';


const GlobalMain = () => {

    const collects = [
        { id: 1, image: Complect, title: 'Шины BOTO', span: 'Genesys', type: '208 155/70 R12 73T' },
        { id: 2, image: Complect, title: 'Шины BOTO', span: 'Genesys', type: '208 155/70 R12 73T' },
        { id: 3, image: Complect, title: 'Шины BOTO', span: 'Genesys', type: '208 155/70 R12 73T' }
    ]

    const blogs = [
        { id: 1, dataTime: '02 Ноя 2020', img: BlogImg, text: 'Автомобилисты, Вы уже видели? Кто это тут у нас? Новички всегда подвергаются пристальному вниманию! Так и шины Boto  уверенно ворвались на прилавки, да еще и с громкими заявлениями', read: 'Читать дальше', icon: <IoBookOutline /> },
        { id: 2, dataTime: '01 Апр 2020', img: BlogImg, text: 'Автомобилисты, Вы уже видели? Кто это тут у нас? Новички всегда подвергаются пристальному вниманию! Так и шины Boto  уверенно ворвались на прилавки, да еще и с громкими заявлениями', read: 'Читать дальше', icon: <IoBookOutline /> },
        { id: 3, dataTime: '12 Мар 2020', img: BlogImg, text: 'Автомобилисты, Вы уже видели? Кто это тут у нас? Новички всегда подвергаются пристальному вниманию! Так и шины Boto  уверенно ворвались на прилавки, да еще и с громкими заявлениями', read: 'Читать дальше', icon: <IoBookOutline /> },
        { id: 4, dataTime: '21 Янв 2020', img: BlogImg, text: 'Автомобилисты, Вы уже видели? Кто это тут у нас? Новички всегда подвергаются пристальному вниманию! Так и шины Boto  уверенно ворвались на прилавки, да еще и с громкими заявлениями', read: 'Читать дальше', icon: <IoBookOutline /> }
    ]

    return (
        <>
            <div className='container mt-16'>
                <section className='flex items-center justify-center mb-12 gap-5 flex-wrap px-4'>
                    <div className=''>
                        <h2 className='text-2xl font-bold font-body mb-4'>
                            Подбор шин
                        </h2>
                        <SelectShini />
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold font-body mb-4'>
                            Подбор дисков
                        </h2>
                        <SelectDiski />
                    </div>
                </section>
                <section className='text-center mb-10'>
                    <div className='flex justify-center gap-5 flex-wrap'>
                        {collects.map((e) => (
                            <div key={e.id} className='2xl:max-w-[350px] xl:max-w-[300px] lg:max-w-[260px] md:max-w-[260px] sm:max-w-[220px] max-w-[220px] w-full border pt-2' style={{ textAlign: e.text }}>
                                <img className='2xl:max-w-[140px] xl:max-w-[110px] lg:max-w-[80px] md:max-w-38 sm:max-w-[80px] max-w-[80px] m-auto 2xl:pt-6
                                xl:pt-5 lg:pt-4 md:pt-2 sm:pt-1 pt-0 mb-3' src={e.image} alt='Ballon' />
                                <div className='bg-primary py-2 rounded'>
                                    <h3 className='px-6 2xl:mt-8 xl:mt-6 lg:mt-5 md:mt-5 sm:mt-4 mt-4 md:text-center sm:text-center text-center font-semibold 
                                2xl:text-lg xl:text-lg lg:text-md md:text-sm sm:text-sm text-sm text-white'>
                                        {e.title} {e.span} <br />
                                        {e.type}
                                    </h3>
                                    <div className='w-full flex flex-col mt-8 px-4'>
                                        <div className='flex justify-center mb-3 flex-wrap gap-2'>
                                            <a href='/shini' type='submit' className='active:bg-gray-100 2xl:py-1 py-2 px-6 2xl:text-lg xl:text-lg lg:text-md md:text-sm text-xs bg-white rounded font-bold font-body'>
                                                Купить
                                            </a>
                                            <button type='submit' className='active:bg-blue-700 
                                        rounded px-2 py-1 2xl:text-lg xl:text-lg lg:text-md md:text-sm text-xs text-white outline-none border border-white'>
                                                В корзину
                                            </button>
                                        </div>
                                        <div className='px-4'>
                                            <a href='/product' type='submit' className='py-1 w-full 2xl:text-lg xl:text-lg lg:text-md md:text-sm  text-xs px-3 text-white bg-red-600 rounded active:bg-red-700'>
                                                Купить в рассрочку
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                    <button type='submit' className='mt-6 text-lg font-semibold py-2 px-5 border border-black m-auto rounded'>
                        Все товары
                    </button>
                </section>
                <Partners />
                <section className='mb-20'>
                    <h2 className='font-body text-center text-4xl mb-7 font-bold'>
                        Блог
                    </h2>
                    <div className='flex font-body flex-wrap mx-auto w-full justify-center gap-8 px-4'>
                        {blogs.map((data) => (
                            <div key={data.id} className='2xl:max-w-[550px] xl:max-w-[480px] lg:max-w-[420px] md:max-w-[460px] sm:max-w-[400px] max-w-[300px] w-full'>
                                <div className='flex items-center justify-between mb-4'>
                                    <p className='2xl:text-xl xl:text-xl lg:text-xl md:text-lg w-48'>{data.dataTime}</p>
                                    <div className='max-w-[440px] w-full h-1 bg-primary'></div>
                                </div>
                                <div className='border p-2 bg-gray-100'>
                                    <img
                                        src={data.img}
                                        alt='' />
                                    <p className='2xl:text-xl xl:text-xl lg:text-xl md:text-lg sm:text-md text-sm py-1 px-2'>
                                        {data.text}
                                    </p>
                                </div>
                                <a href='/blog' className='w-full flex items-center bg-primary py-4 2xl:text-2xl xl:text-xl lg:text-xl md:text-lg font body font-bold
                                gap-4 text-white justify-center'>
                                    {data.icon} Читать дальше
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
                <section className='mb-10'>
                    <h2 className=' font-body text-center text-4xl mb-10 font-bold'>
                        О нас
                    </h2>
                    <div className='flex 2xl:flex-nowrap flex-wrap w-full  font-body justify-center px-5 gap-4'>
                        <img className='2xl:max-w-[650px] xl:max-w-[550px] lg:max-w-[590px] w-full 2xl:h-[500px] xl:h-[500px] lg:h-[500px]' src={AboutImg} alt='' />
                        <div className='2xl:max-w-[650px] xl:max-w-[520px] lg:max-w-[590px] flex flex-col 2xl:justify-between justify-center mx-auto'>
                            <h2 className='font-medium mb-2 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-xl'>
                                4CAR Интернет-магазин шин и дисков
                            </h2>
                            <p className='2xl:text-2xl
                            xl:text-2xl lg:text-xl md:text-lg sm:text-lg text-md leading-10 text-justify mb-5 '>
                                В нашем магазине представлен широкий ассортимент популярных брендов.
                                У нас вы сможете купить зимние и летние шины, литые и flow forming автомобильные диски. Есть удобный инструмент для подбора шин и дисков по размерам либо модели Вашего автомобиля.
                                Так, же для зарегистрированных клиентов мы предоставляем скидки. Большинство товаров в нашем магазине.
                            </p>
                            <a className='bg-primary max-w-[200px] text-white 2xl:text-xl xl:text-xl lg:text-lg  text-center py-2 ' href='/about'>Узнать больше</a>
                        </div>
                    </div>
                </section>
                <Hits />
            </div>
        </>
    );
};

export default GlobalMain;