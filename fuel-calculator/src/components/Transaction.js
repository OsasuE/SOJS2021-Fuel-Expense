import React, {useContext} from "react";
import { GlobalContext } from '../context/GlobalState'


export const Transaction = ({ transaction }) => {

    const { addTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                    {transaction.text} <span>{sign}€{transaction.amount}</span><button className="delete-btn">x</button>
                </li>
    )
}
