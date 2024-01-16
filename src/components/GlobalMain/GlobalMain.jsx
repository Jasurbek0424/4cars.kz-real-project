// eslint-disable-next-line no-unused-vars
import React from 'react';
import SelectShini from '../templates/SelectShini';
import SelectDiski from '../templates/SelectDiski';
import Complect from '../../assets/complect.png'
import Vector1 from '../../assets/Vector1.png'
import Vector2 from '../../assets/Vector2.png'
import Vector3 from '../../assets/Vector3.png'
import Partners from '../templates/Partners';
import BlogImg from '../../assets/BlogImg.png'
import { IoBookOutline } from "react-icons/io5";
import AboutImg from '../../assets/AboutImg.jpg';
import Hits from '../templates/Hits';


const GlobalMain = () => {

    const collects = [
        { id: 1, image: Complect, title: 'Шины BOTO', span: 'Genesys', type: '208 155/70 R12 73T', img: Vector1, alt: 'Vector1', text: 'left' },
        { id: 2, image: Complect, title: 'Шины BOTO', span: 'Genesys', type: '208 155/70 R12 73T', img: Vector2, alt: 'Vector1', text: 'center' },
        { id: 3, image: Complect, title: 'Шины BOTO', span: 'Genesys', type: '208 155/70 R12 73T', img: Vector3, alt: 'Vector1', text: 'right' }
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
                <section className='flex items-center justify-center 2xl:justify-between mb-12 gap-5 flex-wrap px-4'>
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
                    <div className='flex 2xl:justify-between justify-center gap-5 flex-wrap'>
                        {collects.map((e) => (
                            <div key={e.id} className='2xl:max-w-md xl:max-w-sm lg:max-w-xs md:max-w-xs sm:max-w-[260px] max-w-[250px] w-full border py-4 relative' style={{ textAlign: e.text }}>
                                <img className='2xl:max-w-56 xl:max-w-48 lg:max-w-42 md:max-w-38 sm:max-w-36 max-w-[120px] m-auto 2xl:py-6
                                xl:py-5 lg:py-4 md:py-2 sm:py-1 py-0' src={e.image} alt='Ballon' />
                                <h3 className='px-6 2xl:mt-8 xl:mt-6 lg:mt-5 md:mt-5 sm:mt-4 mt-4 md:text-center sm:text-center text-center font-semibold 
                                2xl:text-lg xl:text-lg lg:text-md md:text-sm sm:text-sm text-sm text-white'>
                                    {e.title} {e.span} <br />
                                    {e.type}
                                </h3>
                                <div className='w-full flex justify-center mt-8'>
                                    <a href='/shini' type='submit' className='active:bg-gray-100 py-1 px-6 text-lg bg-white rounded font-bold font-body'>
                                        Купить
                                    </a>
                                </div>
                                <img className='absolute md:h-auto sm:h-56 h-56 bottom-0 -z-10' src={e.img} alt={e.alt} />
                            </div>
                        ))}
                    </div>
                    <button type='submit' className='mt-6 text-lg font-semibold py-2 px-5 border border-black m-auto rounded'>
                        Все товары
                    </button>
                </section>
                <Partners />
                <section className='mb-20'>
                    <h2 className='font-body text-center text-3xl mb-7 font-bold'>
                        Блог
                    </h2>
                    <div className='flex font-body flex-wrap m-auto justify-evenly gap-10 px-4'>
                        {blogs.map((data) => (
                            <div key={data.id} className='max-w-[550px] w-full'>
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
                    <h2 className=' font-body text-center text-3xl mb-10 font-bold'>
                        О нас
                    </h2>
                    <div className='flex 2xl:flex-nowrap flex-wrap  font-body justify-center px-5 gap-6'>
                        <img className='max-w-[740px] w-full' src={AboutImg} alt='' />
                        <div className='flex flex-col 2xl:justify-between justify-center mx-auto'>
                            <h2 className='font-medium mb-5 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl text-2xl'>
                                4CAR Интернет-магазин шин и дисков
                            </h2>
                            <p className='2xl:text-3xl
                            xl:text-2xl lg:text-2xl md:text-xl sm:text-lg text-md leading-10 text-justify mb-5 '>
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