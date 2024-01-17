// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from './../NavBar/NavBar';
import BlogImg from '../../assets/blog0.jpg';
import Blog1 from '../../assets/blog1.png';
import Blog2 from '../../assets/blog2.png';
import Blog3 from '../../assets/blog3.png';
import Blog4 from '../../assets/blog4.jpg';
import Footer from './../Footer/Footer';
import './Blog.css';
import ScrollToTop from './../ScrollToTop/ScrollToTop';

const Blog = () => {

    const data = new Date()
    const formatNumber = (num) => (num < 10 ? `0${num}` : num);
    const months = [
        'ЯНВ',
        'ФЕВ',
        'МАР',
        'АПР',
        'МАЙ',
        'ИЮН',
        'ИЮЛ',
        'АВГ',
        'СЕН',
        'ОКТ',
        'НОЯ',
        'ДЕК',
    ];
    const day = formatNumber(data.getDate());
    const month = months[data.getMonth()];
    const year = data.getFullYear();
    const formattedDate = `${day} ${month} ${year}`;

    const blogs = [
        { id: 1, img: Blog4, context: 'Почему не стоит покупать подержанные шины?' },
        { id: 2, img: Blog3, context: 'РАСШИРЕННАЯ ГАРАНТИЯ' },
        { id: 3, img: Blog2, context: 'Проверенные летние шины сезона 2019 для внедорожников' },
        { id: 4, img: Blog1, context: 'Как выбрать летние шины' },
    ]

    return (
        <>
            <header className=" bg-no-repeat bg-cover bg-center w-full pb-20 bg-map" >
                <div className='container '>
                    <NavBar />
                    <div className='mt-28 px-4'>
                        <h1 className=' font-body font-bold 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl 
                        2xl:text-start xl:text-start lg:text-start text-center flex flex-col text-white'>
                            Блог
                        </h1>
                    </div>
                </div>
            </header>
            <ScrollToTop />
            <main>
                <div className='container'>
                    <section className='blog mt-14 flex justify-center gap-6 mb-20'>
                        <div className='max-w-[650px] w-full px-4'>
                            <img className='mb-6' src={BlogImg} alt='' />
                            <div className='text-darkMain font-body max-w-[600px] flex flex-col gap-4'>
                                <span className=''>
                                    {formattedDate}
                                </span>
                                <h2 className='font-semibold 
                                2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-md blog__title'>
                                    Что нужно знать про шины Boto?
                                </h2>
                                <p className='2xl:text-lg xl:text-lg lg:text-lg md:text-md sm:text-sm text-sm text-justify'>
                                    Автомобилисты, Вы уже видели? Кто это тут у нас? Новички всегда подвергаются пристальному вниманию! Так и шины Boto – уверенно ворвались на прилавки, да еще и с громкими заявлениями, мол «Вы нас полюбите!».
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-wrap justify-center gap-5 blog__contents'>
                            {blogs.map(e => (
                                <div key={e.id} className='blog__item flex flex-col gap-3 max-w-[380px]'>
                                    <img src={e.img} alt='' className='max-h-[295px] h-full' />
                                    <span>
                                        {formattedDate}
                                    </span>
                                    <h2 className='text-xl tracking-wide font-semibold'>
                                        {e.context}
                                    </h2>
                                </div>
                            ))}
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

export default Blog;