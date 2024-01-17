// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from './../NavBar/NavBar';
import Map from '../../assets/Map.png'
import Footer from './../Footer/Footer';
import ScrollToTop from './../ScrollToTop/ScrollToTop';

const Shinomontaj = () => {
    return (
        <>
            <header className=" bg-no-repeat bg-cover bg-center w-full pb-20 bg-contact" >
                <div className='container '>
                    <NavBar />
                    <div className='mt-28 px-4'>
                        <h1 className='font-body font-bold 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl 
                        2xl:text-start xl:text-start lg:text-start text-center flex flex-col text-white'>
                            Шиномонтаж
                        </h1>
                    </div>
                </div>
            </header>
            <ScrollToTop />
            <main className='mt-10 mb-16'>
                <div className='container'>
                    <section className='px-4'>
                        <h2 className='2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl text-3xl max-w-[700px] font-semibold mb-8'>
                            Cкидка на шиномонтаж в Алматы
                        </h2>
                        <p className='2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-md mb-10 tracking-wide'>
                            Интернет магазин 4car.kz не имеет собственного шиномонтажа вместо этого мы договорились с шиномонтажами, чтобы они предоставили скидку для вас.
                        </p>
                        <p className='2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-md mb-8 tracking-wide'>
                            Для получения скидки необходимо прибрести шины или диски у нас и получить купон!
                        </p>
                        <img className='max-w-[1140px] w-full
                        2xl:block xl:block lg:hidden hidden mx-auto' src={Map} alt='' />
                    </section>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Shinomontaj;