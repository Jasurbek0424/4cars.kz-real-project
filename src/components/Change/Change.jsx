// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from './../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ScrollToTop from './../ScrollToTop/ScrollToTop';

const Change = () => {
    return (
        <>
            <header className=" bg-no-repeat bg-cover bg-center w-full pb-12 bg-map" >
                <div className='container '>
                    <NavBar />
                </div>
            </header>
            <ScrollToTop />
            <main>
                <div className='container'>
                    <section className='mt-10 font-body px-4'>
                        <h1 className='text-center  font-bold text-darkMain 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-xl mb-8'>
                            Возврат и обмен
                        </h1>
                        <div className='mb-10'>
                            <h2 className='font-semibold 2xl:text-xl xl:text-xl lg:text-xl md:text-lg sm:text-md text-sm mb-5'>
                                Внимание!
                            </h2>
                            <p className='2xl:text-lg xl:text-lg lg:text-md md:text-md sm:text-sm text-sm tracking-wide'>
                                Получая диски или шины, необходимо детально осмотреть их на наличие визуальных дефектов. После подписания товарной накладной претензии к внешнему виду колес не принимаются.
                            </p>
                        </div>
                        <div className='mb-14'>
                            <h2 className='font-semibold 2xl:text-xl xl:text-xl lg:text-xl md:text-lg sm:text-md text-sm mb-5'>
                                Обмен и возврат товара
                            </h2>
                            <p className='2xl:text-lg xl:text-lg lg:text-md md:text-md sm:text-sm text-sm tracking-wide flex flex-col gap-6 text-justify'>
                                <span>
                                    Покупатель может вернуть шины или диски в течение 14 дней со дня доставки. При возврате или обмене товара покупатель при себе должен иметь, товарную накладную, кассовый чек или любой иной документ, подтверждающий факт приобретения товара.
                                </span>
                                <span>
                                    При отказе покупателя от товара продавец возвращает ему денежную сумму, уплаченную за товар, за исключением расходов продавца на доставку (если доставка оплачивалась) от потребителя возвращенного товара. Возврат денежных средств осуществляется в течение 10 дней со дня предъявления потребителем соответствующего требования.
                                </span>
                                <span>
                                    В случае оплата картой:Возврат переведенных средств, производится на Ваш банковский счет в течение 5—30 рабочих дней (срок зависит от Банка, который выдал Вашу банковскую карту).
                                </span>
                                <span>
                                    Для осуществления обмена или возврата денежных средств, покупателю необходимо привезти шины или диски к нам в офис.
                                </span>
                                <span>
                                    Возвращаемый товар должен быть в том же состоянии, в котором он передавался потребителю. Если на нем есть следы эксплуатации, повреждена упаковка, сорваны фабричные ярлыки, или другим образом нарушен товарный вид, то в удовлетворении требования может быть отказано. К обмену и возврату не принимаются шины и диски после монтажа, бывшие в употреблении, а также, пришедшие в негодность по вине Покупателя.
                                </span>
                            </p>
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

export default Change;