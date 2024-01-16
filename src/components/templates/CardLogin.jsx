/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import LoginImg from '../../assets/LoginImg.jpg';
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";

const LoginForm = (props) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLoginChange = (e) => {
        setLogin(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className='flex max-w-[1000px] rounded w-full mt-14 m-auto shadow-xl shadow-gray-500 loginForm'>
                <form action='' method='post' onSubmit={handleSubmit} className='max-w-[400px] w-full pt-10 px-12 flex flex-col gap-8'>
                    <div className='flex flex-col'>
                        <label className='mb-2' htmlFor="login">Логин:</label>
                        <input
                            required name="login"
                            type="text"
                            id="login"
                            value={login}
                            onChange={handleLoginChange}
                            className='border rounded py-1 px-2 outline-none'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label className='mb-2' htmlFor="password">Пароль:</label>
                        <div className='flex relative'>
                            <input
                                required name="password"
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                className='border rounded py-1 px-2 outline-none w-full'
                            />
                            <button
                                type="button"
                                onClick={handleTogglePasswordVisibility}
                                className='text-2xl text-gray-400 absolute right-2 top-2'
                            >
                                {showPassword ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <button className='bg-primary rounded px-4 py-1 active:bg-blue-700 text-white' type="submit">Войти</button>
                        <button className='text-primary underline' type='submit'>
                            Забыли пароль
                        </button>
                    </div>
                    <div className='flex justify-center'>
                        <button onClick={props.click} className='text-primary underline text-lg border px-3 rounded border-primary mb-4'>
                            Зарегистрироваться
                        </button>
                    </div>
                </form>
                <img className='max-w-[600px] w-full rounded rounded-s-sm loginImg' src={LoginImg} alt='' />
            </div>
        </>
    );
};

export default LoginForm;