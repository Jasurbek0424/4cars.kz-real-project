// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from './../NavBar/NavBar';
import PayDecor from '../../assets/payDecor.png';
import payDecor2 from '../../assets/payDecor2.png';
import Footer from './../Footer/Footer';

const Payment = () => {
    return (
        <>
            <header className=" bg-no-repeat bg-cover bg-center w-full h-screen bg-diski" >
                <div className='container '>
                    <NavBar />
                    <div className='mt-28'>
                        <h1 className='font-body font-bold text-6xl flex flex-col text-white mb-8'>
                            Оплата и доставка
                        </h1>
                        <p className='text-xl text-white font-body tracking-wide max-w-[450px]'>
                            Вы можете произвести оплату заказа любым удобным способом
                        </p>
                    </div>
                </div>
            </header>
            <main className='mt-10'>
                <section>
                    <div className='container'>
                        <p className='text-xl mb-16'>
                            Покупая товары в нашем интернет-магазине, Вы соглашаетесь с условиями Публичной оферты.
                        </p>
                        <h2 className='text-primary text-4xl mb-8 font-semibold'>
                            Оплата товара
                        </h2>
                        <p className='text-xl max-w-[600px] mb-7'>
                            Вы можете произвести оплату заказа любым удобным способом
                        </p>
                    </div>
                </section>
                <section className='py-4 bg-black text-white relative mb-10'>
                    <div className='container'>
                        <div className='flex flex-col gap-5 max-w-[1040px]'>
                            <p className='text-xl tracking-wide'>
                                <span className='font-bold'>Наличными</span> тенге курьеру (только при доставке по г. Алматы) или в магазине при самовывозе
                            </p>
                            <p className='text-xl tracking-wide'>
                                <span className='font-bold'>Банковской</span> картой (Visa, MasterCard, American Express, а также дебетные электронные карты), эмитированной любым банком в процессе оформления Вашего заказа онлайн. Оплата производится по защищенному каналу через систему Авторизации АО ``Halykbank``. Удобно, быстро, безопасно
                            </p>
                            <p className='text-xl tracking-wide'>
                                <span className='font-bold'>Банковским</span> переводом на наш расчетный счет в АО ``Halykbank`` после оформления Вашего заказа онлайн и обязательного резервирования товара
                            </p>
                            <img
                                src={PayDecor}
                                alt=''
                                className='absolute max-h-[280px] bottom-0 right-0'
                            />
                        </div>
                    </div>
                </section>
                <section className=''>
                    <div className='container'>
                        <h2 className='text-primary text-4xl mb-8 font-semibold'>
                            Доставка товара
                        </h2>
                        <p className='text-xl max-w-[1000px] tracking-wide mb-7'>
                            По г. Алматы: Интернет-магазин выполняет доставку товара собственной Службой доставки. Доставка осуществляется все дни недели, кроме воскресенья
                        </p>
                    </div>
                </section>
                <section className='py-10 bg-black text-white relative mb-16'>
                    <div className='container'>
                        <div className='flex flex-col gap-5 max-w-[1040px]'>
                            <p className='text-xl tracking-wide'>
                                <span className='font-bold'>Бесплатная доставка:</span> по г. Алматы при заказе на сумму свыше 80 000 тенге или 4 шины доставка осуществляется бесплатно.
                            </p>
                            <p className='text-xl tracking-wide'>
                                <span className='font-bold'>Платная доставка:</span>  по г. Алматы при заказе на сумму менее 80000 тенге стоимость доставки - 1000 тенге
                            </p>
                            <p className='text-xl tracking-wide'>
                                <span className='font-bold'>Стоимость доставки</span>  в отдаленные районы Алматы согласовывается отдельно.
                                Вы также можете забрать Ваш товар самостоятельно из нашего магазина. В этом случае Вам необходимо связаться с нами и обязательно зарезервировать Ваш товар и уточнить время.
                                Время доставки по г. Алматы
                            </p>
                            <p className='text-xl tracking-wide'>
                                <span className='font-bold'>Стоимость доставки</span> в отдаленные районы Алматы согласовывается отдельно.
                            </p>
                            <p className='text-xl tracking-wide'>
                                <span className='font-bold'>Вы также можете забрать</span>   Ваш товар самостоятельно из нашего магазина.
                                В этом случае вам необходимо связаться с нами и обязательно зарезервировать
                                Ваш товар и уточнить время
                            </p>
                            <span className='font-bold'>Время доставки по г. Алматы</span>
                            <img
                                src={payDecor2}
                                alt=''
                                className='absolute max-h-[512px] bottom-0 right-0'
                            />
                        </div>
                    </div>
                </section>
                <section className='mb-10'>
                    <div className='container'>
                        <h2 className='font-semibold text-primary text-xl mb-10'>
                            Отправка заказа осуществляется после оплаты заказа. Отправка осуществляется ТОЛЬКО в рабочие дни.
                        </h2>
                        <p className='text-xl text-justify text-gray-500'>
                            Внимание! Неправильно указанный номер телефона, неточный или неполный адрес могут привести к задержке выполнения Вашего заказа. Пожалуйста, внимательно проверяйте Ваши персональные данные при оформлении заказа. Конфиденциальность ваших данных гарантируется
                        </p>
                    </div>
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Payment;