// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from './../NavBar/NavBar';
import Map from '../../assets/Map.png'
import Footer from './../Footer/Footer';

const Shinomontaj = () => {
    return (
        <>
            <header className=" bg-no-repeat bg-cover bg-center w-full h-screen bg-contact" >
                <div className='container '>
                    <NavBar />
                    <div className='mt-28'>
                        <h1 className='font-body font-bold text-6xl flex flex-col text-white'>
                            Шиномонтаж
                        </h1>
                    </div>
                </div>
            </header>
            <main className='mt-10 mb-20'>
                <div className='container'>
                    <section>
                        <h2 className='text-5xl max-w-[700px] font-semibold mb-8'>
                            Cкидка на шиномонтаж в Алматы
                        </h2>
                        <p className='text-2xl mb-10 tracking-wide'>
                            Интернет магазин 4car.kz не имеет собственного шиномонтажа вместо этого мы договорились с шиномонтажами, чтобы они предоставили скидку для вас.
                        </p>
                        <p className='text-2xl mb-8 tracking-wide'>
                            Для получения скидки необходимо прибрести шины или диски у нас и получить купон!
                        </p>
                        <img className='max-w-[1140px] m-auto' src={Map} alt='' />
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