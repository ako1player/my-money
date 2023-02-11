import { useAuthContext } from '../../hooks/useAuthContext';
import styles from './Home.module.css';
import TransactionForm from './TransactionForm';
import { useCollection } from '../../hooks/useCollection';
import TransactionsList from './TransactionsList';

const Home = () =>{
    const { user }:any = useAuthContext();
    const { documents, error} = useCollection('transactions');
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                {error && <p>{error}</p>}
                {documents && <TransactionsList transactions={documents} />}
            </div>
            <div className={styles.sidebar}>
                <TransactionForm uid={user.uid}/>
            </div>
        </div>
    )
}

export default Home;