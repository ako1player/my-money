import styles from './Login.module.css';
import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';

const Login = () =>{
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { login, error, isPending} = useLogin();

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        login(email, password);
    }

    return(
        <form  onSubmit={handleSubmit} className={styles['login-form']}>
            <h2>Login</h2>
            <label>
                <span>email:</span>
                <input 
                type="email"
                onChange={(e)=> setEmail(e.target.value)}
                value={email}
                />
            </label>
            <label>
                <span>password:</span>
                <input 
                type="password"
                onChange={(e)=> setPassword(e.target.value)}
                value={password}
                />
            </label>
            {!isPending && <button className='btn'>Login</button>}
            {isPending && <button className='btn' disabled>Loading</button>}
            {error && <p>{error}</p>}
        </form>
    )
}

export default Login;