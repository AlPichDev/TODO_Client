import { useState } from "react";
import { useRegisterMutation } from "../../app/apiSlice";

export const Register = () => {
    let [username, setUsername] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [rPassword, setRPassword] = useState('')
    let [register] = useRegisterMutation()

    let handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(password === rPassword){
            try {
                await register({email, password, username}).unwrap()
                alert('Registrer COMPLITE')
            } catch(err){
                alert('Registrer ERROR')
                console.log(err);
            }
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder={'username'} value={username} onChange={e => setUsername(e.target.value)}/>
                <input type="email" name="email" placeholder={'email'} value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" name="password" placeholder={'password'} value={password} onChange={e => setPassword(e.target.value)}/>
                <input type="password" name="retypePassword" placeholder={'retypePassword'} value={rPassword} onChange={e => setRPassword(e.target.value)}/>
                <input type="submit" />
            </form>
        </>
    )
};

