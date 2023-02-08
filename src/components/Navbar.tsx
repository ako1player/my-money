import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return(
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.title}>myMoney</li>
                <li>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Sign Up</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;