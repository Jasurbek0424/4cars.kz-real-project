/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
// import UserImg from '../../assets/UserImg.png';

const EditAccount = (props) => {

    const [login, setLogin] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [emailError, setEmailError] = useState('');
    const [showPassword, setShowPassword] = useState(false);





    const handleLoginChange = (e) => {
        setLogin(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };


    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleInputChange = (e) => {
        const value = e.target.value;

        // Проверка наличия символов '@' и '+' в значении
        if (value.includes('@') || value.includes('+')) {
            setEmailError('');
        } else {
            setEmailError('Введите действительный адрес электронной почты или номер телефона');
        }

        setInputValue(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            setError('');
        } else {
            setError('Пароли не совпадают');
        }
    };

    return (
        <>
            <div className='flex items-center editAccount'>
                <form action='' method='post' onSubmit={handleSubmit} className='max-w-[400px] m-auto w-full pt-10 px-12 flex flex-col gap-4'>
                    <div className='flex flex-col'>
                        <label className='mb-2 text-primary' htmlFor="login">Имя:</label>
                        <input
                            required name='FirstName'
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
                            required name='LastName'
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
                                required name='password'
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
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div className='flex flex-col text-primary'>
                        <label className='mb-2' htmlFor="password">Повторите Пароль:</label>
                        <div className='flex relative'>
                            <input
                                required
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
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
                    {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                    <div className='flex flex-col'>
                        <label className='mb-2 text-primary' htmlFor="email">Введите адрес электронной почты или номер телефона:</label>
                        <input
                            required
                            type="text"
                            id="emailPhoneInput"
                            value={inputValue}
                            onChange={handleInputChange}
                            className='border rounded py-1 px-2 outline-none'
                        />
                    </div>
                    <div className='flex flex-col gap-4 justify-center'>
                        <button type='submit'
                            className='text-white bg-primary outline-none text-lg border 
                            active:bg-blue-100 px-3 rounded border-primary submitChange'>
                            Применить изменения
                        </button>
                    </div>
                </form>

                <div className=''>
                    {props.imgSelect && (
                        <div className='flex flex-col items-center setUserIcon'>
                            <img src={props.imgSelect} alt="Selected" className='object-cover max-w-[208px] w-full h-52 rounded-full border' />
                            <input
                                type="file"
                                accept="image/*"
                                onChange={props.myFunc}
                                className='mt-6'
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default EditAccount;