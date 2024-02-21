// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from '../NavBar/NavBar';
import Credit1 from '../../assets/Credit1.png';
import Credit2 from '../../assets/Credit2.png';
import Credit3 from '../../assets/Credit3.png';
import Credit4 from '../../assets/Credit4.png';
import Footer from './../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const Credit = () => {
    return (
        <>
            <div className='overflow-hidden'>
                <header className=" bg-no-repeat bg-cover bg-center w-full pb-20 bg-diski" >
                    <div className='container '>
                        <NavBar />
                        <div className='mt-28 px-4' data-aos="fade-right">
                            <h1 className='font-body font-bold 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl 
                        2xl:text-start xl:text-start lg:text-start text-center flex flex-col text-white'>
                                Условия кредита и рассрочки
                            </h1>
                        </div>
                    </div>
                </header>
                <ScrollToTop />
                <main className='mt-14 mb-10'>
                    <div className='container'>
                        <div
                            data-aos="fade-right" data-aos-anchor-placement="top-bottom"
                            className='max-w-[1050px] w-full mx-auto flex flex-col gap-8 font-body px-4'>
                            <div>
                                <h2 className='2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg sm:text-md text-md mb-2'>
                                    Как купить в рассрочку или кредит через <a href='https://kaspi.kz'>Kaspi.kz</a>
                                </h2>
                                <p className='2xl:text-lg xl:text-lg lg:text-md md:text-sm sm:text-sm text-xs mb-4'>
                                    1.    Выберите товар, который вы хотите купить, нажмите «Оформить в кредит» в карточке товара и выберите кнопку с логотипом Kaspi Bank. После нажатия на данную кнопку вы будете перенаправлены на сайт kaspi.kz для оформления покупки.
                                </p>
                                <img src={Credit1} alt='' />
                            </div>
                            <div>
                                <p className='2xl:text-lg xl:text-lg lg:text-md md:text-sm sm:text-sm text-xs mb-4'>
                                    2.    Выберите удобный для вас способ доставки.
                                </p>
                                <img src={Credit2} alt='' />
                            </div>
                            <div>
                                <p className='2xl:text-lg xl:text-lg lg:text-md md:text-sm sm:text-sm text-xs mb-4'>
                                    3.   Выберите удобный для вас способ оплаты.
                                </p>
                                <img src={Credit3} alt='' />
                            </div>
                            <div>
                                <p className='2xl:text-lg xl:text-lg lg:text-md md:text-sm sm:text-sm text-xs mb-4'>
                                    4.    Заполните анкету. Укажите актуальные данные, в соответствии с вашими документами. Помните, что правильное и корректное заполнение заявки увеличит вероятность одобрения кредита.
                                </p>
                                <img src={Credit4} alt='' />
                            </div>
                            <div>
                                <p className='2xl:text-lg xl:text-lg lg:text-md md:text-sm sm:text-sm text-xs mb-4'>
                                    5. После оформления заявки с вами в течение 10 минут свяжется сотрудник банка. В некоторых случаях после предварительного одобрения по заявке может потребоваться обращение к кредитному консультанту Kaspi Bank, который находится непосредственно на торговой точке, либо в шаговой доступности.
                                </p>
                                <p className='2xl:text-lg xl:text-lg lg:text-md md:text-sm sm:text-sm text-xs mb-4'>
                                    6. В том случае, если вы получили одобрение заявки, в течение одного часа с вами свяжется менеджер нашей компании и примет заказ в обработку, после чего на указанный в заявке телефон поступит SMS-подтверждение.
                                    <br />
                                    - При оформлении заказа самовывозом: обратитесь в наш магазин по адресу, указанному в SMS и сообщите любому менеджеру номер заказа.
                                    <br />
                                    - При оформлении заказа курьером: ожидайте курьера в указанный при оформлении заказа день, либо время озвученное менеджером.
                                </p>
                                <p className='2xl:text-lg xl:text-lg lg:text-md md:text-sm sm:text-sm text-xs mb-4'>
                                    7. В том случае, если вы подтверждаете желание приобрести товар после его демонстрации, на ваш телефон будет отправлено SMS с кодом, который необходимо сообщить сотруднику, выдающему товар.
                                </p>
                            </div>
                            <div>
                                <h2 className='2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg sm:text-md text-md mb-2 flex flex-col'>
                                    Условия кредитования

                                </h2>
                                <p className='2xl:text-lg xl:text-lg lg:text-md md:text-sm sm:text-sm text-xs mb-4'>
                                    - Быть гражданином Республики Казахстан старше 18 лет;
                                    <br />
                                    - Иметь постоянный источник дохода.
                                </p>
                                <p className='2xl:text-lg xl:text-lg lg:text-md md:text-sm sm:text-sm text-xs mb-4 font-bold'>
                                    Время одобрения кредита – 10 минут.
                                </p>
                                <p className='2xl:text-lg xl:text-lg lg:text-md md:text-sm sm:text-sm text-xs mb-4 font-bold'>
                                    Для оформления кредита необходимы следующие документы:
                                </p>
                                <p className='2xl:text-lg xl:text-lg lg:text-md md:text-sm sm:text-sm text-xs mb-4'>
                                    - Оригинал документа, удостоверяющего личность с ИИН.
                                </p>
                                <p className='2xl:text-lg xl:text-lg lg:text-md md:text-sm sm:text-sm text-xs mb-4 font-bold'>
                                    Условия кредитования:
                                </p>
                                <p className='2xl:text-lg xl:text-lg lg:text-md md:text-sm sm:text-sm text-xs mb-4 '>
                                    - Размер кредита от 1 500 до 1 000 000 тенге;
                                    <br />
                                    - Без первоначального взноса;
                                    <br />
                                    - Срок кредитования 3, 6, 12 и 24 месяца.
                                </p>
                                <p className='2xl:text-lg xl:text-lg lg:text-md md:text-sm sm:text-sm text-xs mb-4 font-bold'>
                                    Как оплатить кредит?
                                </p>
                                <p className='2xl:text-lg xl:text-lg lg:text-md md:text-sm sm:text-sm text-xs mb-4 '>
                                    - В любом из 300 отделений Kaspi Bank по всей стране;
                                    <br />
                                    - Через более чем 4000 платежных терминалов Kaspi Bank.
                                </p>
                                <div>
                                    <h2 className='2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg sm:text-md text-md mb-2 flex flex-col'>
                                        Права клиента

                                    </h2>
                                    <p className='2xl:text-lg xl:text-lg lg:text-md md:text-sm sm:text-sm text-xs mb-4'>
                                        Клиент имеет право на обмен или возврат товара надлежащего качества и не бывшего в употреблении, в соответствии со ст.14 Закона «О защите прав потребителей». Обмен товара производится на аналогичный по стоимости.
                                    </p>
                                    <p className='2xl:text-lg xl:text-lg lg:text-md md:text-sm sm:text-sm text-xs mb-4'>
                                        В случае возврата товара вам необходимо получить одобрение на возврат со стороны банка, после обратиться в сервисный центр нашей Компании для проверки товара сервис-инженерами.
                                    </p>
                                    <p className='2xl:text-lg xl:text-lg lg:text-md md:text-sm sm:text-sm text-xs mb-4'>
                                        Если товар признается удовлетворяющим условиям возврата, с вами свяжется сотрудник банка для начала процедуры аннулирования договора.
                                    </p>
                                </div>
                                <div>
                                    <h2 className='2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg sm:text-md text-md mb-2 flex flex-col'>
                                        Куда обратиться
                                    </h2>
                                    <p className='2xl:text-lg xl:text-lg lg:text-md md:text-sm sm:text-sm text-xs mb-4'>
                                        В данный момент кредитование доступно только для клиентов, проживающих в городах  Алматы. Для оформления кредита, необходимо выбрать товар в нашем интернет-магазине или в Kaspi Магазине, оформить заказ на сайте kaspi.kz и обратиться в наш интернет магазин для получения товара или ожидать курьерскую доставку вашей покупки.
                                    </p>
                                </div>
                                <div>
                                    <h2 className='2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg sm:text-md text-md mb-2 flex flex-col'>
                                        Важная информация
                                    </h2>
                                    <p className='2xl:text-lg xl:text-lg lg:text-md md:text-sm sm:text-sm text-xs mb-4 text-gray-400 font-semibold'>
                                        <span className='font-bold text-blue-600'>✓</span>  Для расчета берется стоимость товара в интернет-магазине, в некоторых случаях цена в Kaspi Магазине может быть ниже. Если в процессе оформления заказа вы заметили, что цена в Kaspi Магазине выше, чем в интернет-магазине 4car.kz, сообщите нам об этом.
                                    </p>
                                    <p className='2xl:text-lg xl:text-lg lg:text-md md:text-sm sm:text-sm text-xs mb-4 text-gray-400 font-semibold'>
                                        <span className='font-bold text-blue-600'>✓</span>   Проценты за кредит начисляются с момента выдачи заказа.
                                    </p>
                                    <p className='2xl:text-lg xl:text-lg lg:text-md md:text-sm sm:text-sm text-xs mb-4 text-gray-400 font-semibold'>
                                        <span className='font-bold text-blue-600'>✓</span>   При приобретении в кредит процент скидки по персональной бонусной системе не учитывается. Стоимость приобретенного товара не участвует в расчете бонусного процента.
                                    </p>
                                    <p className='2xl:text-lg xl:text-lg lg:text-md md:text-sm sm:text-sm text-xs mb-4 text-gray-400 font-semibold'>
                                        <span className='font-bold text-blue-600'>✓</span>   Интернет-магазин не гарантирует положительное рассмотрение заявки и не может повлиять на утверждение кредита.
                                    </p>
                                    <p className='text-sm font-bold'>
                                        Оформляя заказ в кредит, вы подтверждаете, что ознакомлены с информацией в данном разделе.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
};

export default Credit;