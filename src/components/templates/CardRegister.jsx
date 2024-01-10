/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
import RegisterImg from '../../assets/register.png';
import RegisterDecor from '../../assets/registerDecor.png';
import RegisterDecor2 from '../../assets/registerDecor2.png';
import RegisterDecor3 from '../../assets/registerDecor3.png';



const CardRegister = (props) => {

    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLoginChange = (e) => {
        setLogin(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };


    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handlePasswordChange2 = (e) => {
        setPassword2(e.target.value);
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
    };


    return (
        <>
            <div className='max-w-[550px] rounded w-full 
            overflow-hidden pb-36 mt-20 m-auto shadow-xl shadow-gray-500 pt-10 relative mb-20'>
                <img className='absolute -top-4 left-0 -z-10' src={RegisterDecor} alt='' />
                <img
                    src={RegisterDecor2}
                    alt=''
                    className='absolute -z-10 right-0 -top-4' />
                <img
                    src={RegisterDecor3}
                    alt=''
                    className='absolute -z-10 right-0 -top-4' />
                <h2 className='text-primary font-semibold text-2xl text-center'>
                    Регистрация
                </h2>
                <form action='' method='post' onSubmit={handleSubmit} className='max-w-[400px] m-auto w-full pt-10 px-12 flex flex-col gap-4'>
                    <div className='flex flex-col'>
                        <label className='mb-2 text-primary' htmlFor="login">Имя:</label>
                        <input
                            type="text"
                            id="login"
                            value={login}
                            onChange={handleLoginChange}
                            className='border rounded py-1 px-2 outline-none'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label className='mb-2 text-primary' htmlFor="lastName">Фамилия:</label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={handleLastNameChange}
                            className='border rounded py-1 px-2 outline-none'
                        />
                    </div>
                    <div className='flex flex-col text-primary'>
                        <label className='mb-2' htmlFor="password">Пароль:</label>
                        <div className='flex relative'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                className='border rounded py-1 px-2 outline-none w-full'
                            />
                            <button
                                type="button"
                                onClick={handleTogglePasswordVisibility}
                                className='text-2xl text-gray-400 absolute right-2 top-1'
                            >
                                {showPassword ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col text-primary'>
                        <label className='mb-2' htmlFor="password">Повторите Пароль:</label>
                        <div className='flex relative'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={password2}
                                onChange={handlePasswordChange2}
                                className='border rounded py-1 px-2 outline-none w-full'
                            />
                            <button
                                type="button"
                                onClick={handleTogglePasswordVisibility}
                                className='text-2xl text-gray-400 absolute right-2 top-1'
                            >
                                {showPassword ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label className='mb-2 text-primary' htmlFor="email">Введите адрес электронной почты или номер телефона:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            className='border rounded py-1 px-2 outline-none'
                        />
                    </div>
                    <div className='flex flex-col gap-4 justify-center'>
                        <button type='submit'
                            className='text-primary outline-none underline text-lg border 
                            active:bg-blue-100 px-3 rounded border-primary'>
                            Зарегистрироваться
                        </button>
                        <button type='submit'
                            className=' bg-primary text-white text-lg px-3 rounded'
                            onClick={props.click}>
                            Вернуться к входу
                        </button>
                    </div>
                </form>
                <img className='absolute bottom-0 -z-10' src={RegisterImg} alt='' />
            </div>
        </>
    );
};

export default CardRegister;