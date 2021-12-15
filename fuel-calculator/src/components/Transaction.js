import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const signCar = 'Car: ';
//  const signConsumption = 'Consumption: ';
//  const signCost = 'Cost: ';
//  const signPer100km = '/ 100km';
  const litrat = transaction.litres < 0 ? ' litres' : ' litres';
  const matka = transaction.distance < 0 ? ' km' : ' km';
  const hinta = transaction.price < 0 ? '€' : '€';
//  const kulutus = (transaction.distance / transaction.price * 100).toFixed(2);
//  const kulut = (transaction.price / transaction.distance * 100).toFixed(2);

  return (
    <li className={transaction.litres < 0 ? 'minus' : 'plus'}>
      {signCar}{transaction.text} <span></span><span>{transaction.litres}{litrat}</span><span>{transaction.price}{hinta}
      </span><span>{transaction.distance}{matka}
      </span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}