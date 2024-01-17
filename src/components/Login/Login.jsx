// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import CardLogin from '../templates/CardLogin';
import CardRegister from '../templates/CardRegister';
import Footer from './../Footer/Footer';
import './Login.css';
import ScrollToTop from './../ScrollToTop/ScrollToTop';



const Login = () => {

    const [isLoginVisible, setLoginVisible] = useState(true);
    const [isRegistrationVisible, setRegistrationVisible] = useState(false);

    const showLoginForm = () => {
        setLoginVisible(true);
        setRegistrationVisible(false);
    };

    const showRegistrationForm = () => {
        setLoginVisible(false);
        setRegistrationVisible(true);
    };
    return (
        <>
            <header className=" bg-no-repeat bg-cover bg-center w-full pb-20 bg-map" >
                <div className='container '>
                    <NavBar />
                    <div className='mt-28 px-4'>
                        <h1 className='font-body font-bold 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl 
                        2xl:text-start xl:text-start lg:text-start text-center flex flex-col text-white'>
                            Регистрация и Вход
                        </h1>
                    </div>
                </div>
            </header>
            <ScrollToTop />
            <main>
                <div className='container'>
                    <section className='mb-20'>
                        {isLoginVisible && (
                            <div>
                                <CardLogin click={showRegistrationForm} />

                            </div>
                        )}
                        {isRegistrationVisible && (
                            <div>
                                <CardRegister click={showLoginForm} />
                            </div>
                        )}
                    </section>
                </div >
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Login;