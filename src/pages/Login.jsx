import React, {useContext, useState} from 'react';
import {AppContext} from "../context/AppContext.jsx";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [state, setState] = useState('Sign Up')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const { login,setLogin} = useContext(AppContext)
    const navigate = useNavigate()

    const submitHanler = async (e) => {
        e.preventDefault()
        if( state === 'Login') {
            setLogin(true)
            navigate('/')
        }
        else{
            setState('Login')
        }

    }
    return (
        <form className={'min-h-[80px] flex items-center'} onSubmit={ submitHanler}>
            <div className={'flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl'}>
                <p className={'text-2xl font-semibold'}>{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
                <p>Please {state === "Sign Up" ? 'sign up' : 'login'} to book appointment</p>
                { state === "Sign Up" &&
                    <div className={'w-full'}>
                        <p>Full Name</p>
                        <input type={'text'} onChange={ (e) => setName(e.target.value)} value={name} className={'border border-zinc-300 rounded w-full p-2 mt-1'}/>
                    </div>
                }
                <div className={'w-full'}>
                    <p>Email</p>
                    <input type={'email'} onChange={ (e) => setEmail(e.target.value)} value={email} className={'border border-zinc-300 rounded w-full p-2 mt-1'}/>
                </div>
                <div className={'w-full'}>
                    <p>Password</p>
                    <input type={'password'} onChange={ (e) => setPassword(e.target.value)} value={password} className={'border border-zinc-300 rounded w-full p-2 mt-1'}/>
                </div>
                <button className={'bg-primary text-white w-full py-2 rounded-md text-base'}>{state === 'Sign Up' ? 'Create Account' : 'Login'}</button>
                {
                    state === 'Sign Up' ?
                        <p>Already have an account? <span className={'text-primary underline cursor-pointer'} onClick={ ()=> setState('Login')}>Login here</span></p>
                        :
                        <p>Create an new account? <span className={'text-primary underline cursor-pointer'} onClick={()=> setState('Sign Up')}>Click here</span></p>
                }
            </div>
        </form>
    );
};

export default Login;