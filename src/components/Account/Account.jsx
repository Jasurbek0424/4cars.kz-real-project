// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import UserImg from '../../assets/UserImg.png';
import { GiBackwardTime } from "react-icons/gi";
import { FaAngleRight } from "react-icons/fa6";
import { PiShoppingCart } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import History from '../templates/History';
import Footer from './../Footer/Footer';
import Cart from './../templates/Cart';
import MyCredits from './../templates/MyCredits';
import EditAccount from '../templates/EditAccount';

const Account = () => {

    const [activeModal, setActiveModal] = useState('modal1');

    const [selectedImage, setSelectedImage] = useState(UserImg);

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                setSelectedImage(e.target.result);
            };

            reader.readAsDataURL(file);
        }
    };


    const openModal = (modalType) => {
        setActiveModal(modalType);
    };

    return (
        <>
            <header className=" bg-no-repeat bg-cover bg-center w-full pb-20 bg-map" >
                <div className='container '>
                    <NavBar />
                </div>
            </header>
            <main>
                <div className='container'>
                    <section className='mt-20 mb-20 font-body flex justify-between'>
                        <div className='max-w-[360px] border rounded shadow-xl flex flex-col px-8 items-center pb-10 relative'>
                            <img
                                src={selectedImage}
                                alt=''
                                className=' rounded-full border object-cover bg-white -translate-y-14 
                                h-44 max-w-[176px] '
                            />
                            <div className='-translate-y-6'>
                                <p className='text-xl text-center'>Имя</p>
                                <p className='text-xl text-center'>Фамилия</p>
                            </div>
                            <div className=' flex flex-col gap-6'>
                                <div className='flex items-center gap-3'>
                                    <GiBackwardTime className='text-primary text-3xl' />
                                    <button
                                        onClick={() => openModal('modal1')}
                                        className='flex items-center max-w-[220px] text-darkMain
                                    border-b border-primary focus:bg-primary rounded focus:text-white 
                                    px-2 w-full justify-between'
                                        type='submit'>
                                        История заказов
                                        <FaAngleRight />
                                    </button>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <PiShoppingCart className='text-primary text-3xl' />
                                    <button
                                        onClick={() => openModal('modal2')}
                                        className='flex items-center max-w-[220px] text-darkMain
                                    border-b border-primary focus:bg-primary rounded focus:text-white 
                                    px-2 w-full justify-between'
                                        type='submit'>
                                        Корзина
                                        <FaAngleRight />
                                    </button>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <CiCreditCard1 className='text-primary text-3xl' />
                                    <button
                                        onClick={() => openModal('modal3')}
                                        className='flex items-center max-w-[220px] text-darkMain
                                    border-b border-primary focus:bg-primary rounded focus:text-white 
                                    px-2 w-full justify-between'
                                        type='submit'>
                                        Мои карты
                                        <FaAngleRight />
                                    </button>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <IoSettingsOutline className='text-primary text-3xl' />
                                    <button
                                        onClick={() => openModal('modal4')}
                                        className='flex items-center max-w-[220px] text-darkMain
                                    border-b border-primary focus:bg-primary rounded focus:text-white 
                                    px-2 w-full justify-between'
                                        type='submit'>
                                        Настройки аккаунта
                                        <FaAngleRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='border max-w-[1100px] w-full flex-col flex justify-center items-center pb-8'>
                            {activeModal === 'modal1' && (<History />)}
                            {activeModal === 'modal2' && (<Cart />)}
                            {activeModal === 'modal3' && (<MyCredits />)}
                            {activeModal === 'modal4' && (<EditAccount myFunc={handleImageChange} imgSelect={selectedImage} />)}

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

export default Account;