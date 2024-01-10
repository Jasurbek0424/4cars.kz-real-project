// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import CardLogin from '../templates/CardLogin';
import CardRegister from '../templates/CardRegister';
import Footer from './../Footer/Footer';



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
                </div>
            </header>
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