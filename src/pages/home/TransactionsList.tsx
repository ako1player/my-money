import styles from './Home.module.css';
import { useFirestore } from '../../hooks/useFirestore';

const TransactionsList = ({transactions}:any) =>{
    const { deleteDocument, response } = useFirestore('transactions');
    console.log(response);
    return(
        <ul className={styles.transactions}>
            {transactions.map((transaction:any)=>(
                <li key={transaction.id}>
                    <p className={styles.name}>{transaction.name}</p>
                    <p className={styles.amount}>${transaction.amount}</p>
                    <button onClick={()=>deleteDocument(transaction.id)}>X</button>
                </li>
            ))}
        </ul>
    )
}

export default TransactionsList;