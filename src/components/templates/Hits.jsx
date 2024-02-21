// eslint-disable-next-line no-unused-vars
import React from 'react';
import Xit1 from '../../assets/Xit1.png';
import Xit2 from '../../assets/Xit2.png';
import Xit3 from '../../assets/Xit3.png';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';


const Hits = () => {
    const xits = [
        { id: 1, img: Xit1, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг' },
        { id: 1, img: Xit2, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг' },
        { id: 1, img: Xit1, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг' },
        { id: 1, img: Xit3, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг' },
    ]

    const navigate = useNavigate()
    const handleDivClick = () => {
        navigate('/product');
        window.scrollTo({
            top: 0,

        });
    };
    return (
        <>
            <section className='mb-20 px-4'>
                <h3 className='font-body text-center text-3xl mb-7 font-bold'>
                    Хиты продаж
                </h3>
                <Slider
                    dots={false}
                    autoplay={true}
                    infinite={true}
                    slidesToShow={3}
                    slidesToScroll={1}
                    responsive={[
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]}
                >
                    {xits.map((e) => (
                        <div
                            onClick={handleDivClick}
                            key={e.id}
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom "
                            className=' cursor-pointer rounded 2xl:max-w-[320px] xl:max-w-[300px] lg:max-w-[260px] md:max-w-[260px] sm:max-w-[220px] max-w-[220px] w-full border pt-2' >
                            <img
                                className='2xl:max-w-[140px] xl:max-w-[110px] lg:max-w-[80px] md:max-w-38 sm:max-w-[80px] max-w-[80px] m-auto 2xl:pt-6 xl:pt-5 lg:pt-4 md:pt-2 sm:pt-1 pt-0 mb-3'
                                src={e.img} alt='Ballon' />
                            <div className='bg-primary py-2 rounded'>
                                <h3 className='px-6 2xl:mt-8 xl:mt-6 lg:mt-5 md:mt-5 sm:mt-4 mt-4 md:text-center sm:text-center text-center font-semibold 
                                            2xl:text-lg xl:text-lg lg:text-md md:text-sm sm:text-sm text-sm text-white'>
                                    {e.title} {e.span} <br />
                                    {e.type}
                                </h3>
                                <div className='w-full flex flex-col mt-8 px-4'>
                                    <div className='flex justify-center mb-3 flex-wrap gap-2'>
                                        <a href='/product' type='submit' className='active:bg-gray-100 2xl:py-1 py-2 px-6 2xl:text-lg xl:text-lg lg:text-md md:text-sm text-xs bg-white rounded font-bold font-body'>
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
                </Slider>
            </section>
        </>
    );
};

export default Hits;