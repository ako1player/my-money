import styles from './Signup.module.css';
import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

const Signup = () =>{

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [displayName, setDisplayName] = useState<string>('');
    const {signup, error, isPending} = useSignup();

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        signup(email, password, displayName);
    }

    return(
        <form onSubmit={handleSubmit} className={styles['signup-form']}>
            <h2>Sign Up</h2>
            <label>
                <span>Display Name:</span>
                <input 
                type="text"
                onChange={(e)=> setDisplayName(e.target.value)}
                value={displayName}
                />
            </label>
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
            {!isPending && <button className='btn'>Sign Up</button>}
            {isPending && <button className='btn' disabled>Loading...</button>}
            {error && <p>{error}</p>}
        </form>
    )
}
export default Signup;