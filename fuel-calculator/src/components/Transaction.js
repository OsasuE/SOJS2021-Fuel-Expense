import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const kulutus = (transaction.distance / transaction.litres).toFixed(2);
  const kulut = (transaction.price / transaction.distance * 100).toFixed(2);
  const signCar = 'Car: ';
  const signConsumption = 'Avg: ' + kulutus + 'L/100km & ' + kulut + '€/100km';
  const litrat = ' litres';
  const matka = ' km';
  const hinta = '€';

  

  return (
    <li className={transaction.litres < 0 ? 'minus' : 'plus'}>
      {signCar}{transaction.text} <span></span><span>{transaction.litres}{litrat}</span><span>{transaction.price}{hinta}
      </span><span>{transaction.distance}{matka}</span><span>{signConsumption}
      </span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}