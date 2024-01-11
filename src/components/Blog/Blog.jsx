// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from './../NavBar/NavBar';
import BlogImg from '../../assets/blog0.jpg';
import Blog1 from '../../assets/blog1.png';
import Blog2 from '../../assets/blog2.png';
import Blog3 from '../../assets/blog3.png';
import Blog4 from '../../assets/blog4.jpg';
import Footer from './../Footer/Footer';

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
            <header className=" bg-no-repeat bg-cover bg-center w-full pb-10 bg-map" >
                <div className='container '>
                    <NavBar />
                    <div className='mt-28'>
                        <h1 className='font-body font-bold text-6xl flex flex-col text-white'>
                            Блог
                        </h1>
                    </div>
                </div>
            </header>
            <main>
                <div className='container'>
                    <section className='mt-20  flex justify-center gap-6 mb-20'>
                        <div className='max-w-[650px] w-full'>
                            <img className='mb-20' src={BlogImg} alt='' />
                            <div className='text-darkMain font-body max-w-[600px] flex flex-col gap-5'>
                                <span className=''>
                                    {formattedDate}
                                </span>
                                <h2 className='font-semibold text-4xl'>
                                    Что нужно знать про шины Boto?
                                </h2>
                                <p className='text-lg text-justify'>
                                    Автомобилисты, Вы уже видели? Кто это тут у нас? Новички всегда подвергаются пристальному вниманию! Так и шины Boto – уверенно ворвались на прилавки, да еще и с громкими заявлениями, мол «Вы нас полюбите!».
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-wrap justify-between gap-4'>
                            {blogs.map(e => (
                                <div key={e.id} className=' flex flex-col gap-3 max-w-[380px]'>
                                    <img src={e.img} alt='' className='max-h-[295px] h-full' />
                                    <span>
                                        {formattedDate}
                                    </span>
                                    <p className='text-xl tracking-wide font-semibold'>
                                        {e.context}
                                    </p>
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