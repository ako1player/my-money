import styles from './Home.module.css';

const TransactionsList = ({transactions}:any) =>{
    return(
        <ul className={styles.transactions}>
            {transactions.map((transaction:any)=>(
                <li key={transaction.id}>
                    <p className={styles.name}>{transaction.name}</p>
                    <p className={styles.amount}>${transaction.amount}</p>
                </li>
            ))}
        </ul>
    )
}

export default TransactionsList;