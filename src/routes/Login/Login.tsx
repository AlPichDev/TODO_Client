import React, { useState } from "react";
import { useLoginMutation } from "../../app/apiSlice";

export const Login = () => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    let [login] = useLoginMutation()

    let handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            let a = await login({email, password}).unwrap()
            localStorage.setItem('token', a.token)
            alert('Login COMPLITE')
        } catch(err){
            alert('Login ERROR')
            console.log(err);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    name="email" 
                    placeholder={'email'} 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}/>
                <input type="password" name="password" placeholder={'password'} value={password} onChange={e => setPassword(e.target.value)}/>
                <input type="submit" />
            </form>
        </>
    )
};

