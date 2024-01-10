// eslint-disable-next-line no-unused-vars
import React from 'react';
import SelectShini from '../templates/SelectShini';
import SelectDiski from '../templates/SelectDiski';
import Complect from '../../assets/complect.png'
import Vector1 from '../../assets/Vector1.png'
import Vector2 from '../../assets/Vector2.png'
import Vector3 from '../../assets/Vector3.png'
import Partners from '../templates/Partners';
import BlogImg from '../../assets/BlogImg.png';
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
                <section className='flex items-center justify-between mb-12'>
                    <div>
                        <h2 className='text-2xl font-bold font-body mb-4'>
                            Подбор шин
                        </h2>
                        <SelectShini />
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold font-body mb-4'>
                            Подбор шин
                        </h2>
                        <SelectDiski />
                    </div>
                </section>
                <section className='text-center mb-10'>
                    <div className='flex justify-between'>
                        {collects.map((e) => (
                            <div key={e.id} className='max-w-md w-full border py-4 relative' style={{ textAlign: e.text }}>
                                <img className='max-w-56 m-auto py-6' src={e.image} alt='Ballon' />
                                <h3 className='px-6 mt-8 font-semibold text-lg text-white'>
                                    {e.title} {e.span} <br />
                                    {e.type}
                                </h3>
                                <div className='w-full flex justify-center mt-8'>
                                    <button type='submit' className='active:bg-gray-100 py-1 px-6 text-lg bg-white rounded font-bold font-body'>
                                        Купить
                                    </button>
                                </div>
                                <img className='absolute bottom-0 -z-10' src={e.img} alt={e.alt} />
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
                    <div className='flex font-body flex-wrap m-auto justify-evenly gap-10'>
                        {blogs.map((data) => (
                            <div key={data.id} className='max-w-[600px] w-full'>
                                <div className='flex items-center justify-between mb-4'>
                                    <p className='text-xl'>{data.dataTime}</p>
                                    <div className='max-w-[440px] w-full h-1 bg-primary'></div>
                                </div>
                                <div className='border p-2 bg-gray-100'>
                                    <img
                                        src={data.img}
                                        alt='' />
                                    <p className='text-xl py-1 px-2'>
                                        {data.text}
                                    </p>
                                </div>
                                <button className='w-full flex items-center bg-primary py-4 text-2xl font body font-bold
                                gap-4 text-white justify-center'>
                                    {data.icon} Читать дальше
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
                <section className='mb-10'>
                    <h2 className=' font-body text-center text-3xl mb-10 font-bold'>
                        О нас
                    </h2>
                    <div className='flex font-body justify-between gap-6'>
                        <img className='max-w-[740px]' src={AboutImg} alt='' />
                        <div className='flex flex-col justify-between'>
                            <h2 className='font-medium text-6xl'>
                                4CAR Интернет-магазин шин и дисков
                            </h2>
                            <p className='text-3xl leading-10 text-justify'>
                                В нашем магазине представлен широкий ассортимент популярных брендов.
                                У нас вы сможете купить зимние и летние шины, литые и flow forming автомобильные диски. Есть удобный инструмент для подбора шин и дисков по размерам либо модели Вашего автомобиля.
                                Так, же для зарегистрированных клиентов мы предоставляем скидки. Большинство товаров в нашем магазине.
                            </p>
                            <a className='bg-primary max-w-[200px] text-white text-xl py-2 px-4' href='#!'>Узнать больше</a>
                        </div>
                    </div>
                </section>
                <Hits />
            </div>
        </>
    );
};

export default GlobalMain;