// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import ProductModal2 from './ProductModal2';
import ProductModal3 from './ProductModal3';
import ProductModal4 from './ProductModal4';

const Tabs = () => {
    const [activeModal, setActiveModal] = useState('modal2');

    const openModal = (modalType) => {
        setActiveModal(modalType);
    };

    return (
        <>
            <div className=''>
                <section className='mt-20 mb-20 font-body justify-between accountContent'>
                    <div className='max-w-[900px] w-full flex gap-4 px-8 justify-between items-center flex-wrap 2xl:text-md
                    xl:text-md lg:text-sm md:border-b border py-2 mx-auto'>
                        <button
                            onClick={() => openModal('modal2')}
                            className={`border-b-4 ${activeModal === 'modal2' ? 'border-primary' : 'border-transparent'}`}
                            type='submit'>
                            Другие варианты
                        </button>
                        <button
                            onClick={() => openModal('modal3')}
                            className={`border-b-4 ${activeModal === 'modal3' ? 'border-primary' : 'border-transparent'}`}
                            type='submit'>
                            Оплата и доставка
                        </button>
                        <button
                            onClick={() => openModal('modal4')}
                            className={`border-b-4 ${activeModal === 'modal4' ? 'border-primary' : 'border-transparent'}`}
                            type='submit'>
                            Возврат и гарантия
                        </button>
                        <a href='/credit'>
                            Условия кредитования
                        </a>
                    </div>

                    <div className='mt-6 w-full flex-col flex justify-center items-center  px-4'>
                        {activeModal === 'modal2' && (<ProductModal2 />)}
                        {activeModal === 'modal3' && (<ProductModal3 />)}
                        {activeModal === 'modal4' && (<ProductModal4 />)}
                    </div>
                </section>
            </div>
        </>
    );
};

export default Tabs;
