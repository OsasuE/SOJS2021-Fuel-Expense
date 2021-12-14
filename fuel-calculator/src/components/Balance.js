import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

//Money formatter function
function moneyFormatter(num) {
    let p = num.toFixed(2).split('.');
    return (
        '$ ' + (p[0].split('')[0] === '-' ? '-' : '') +
        p[0]
            .split('')
            .reverse()
            .reduce(function (acc, num, i, orig) {
                return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
            }, '') +
        '.' +
        p[1]
    );
}

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const koko = transactions.map(transaction => transaction.distance);
    const matka = transactions.distance < 0 ? ' km' : ' km';

    const total = amounts.reduce((acc, item) => (acc += item), 0);

    return (
        <>
            <h4>Total Distance</h4>
            <h1>{koko}{matka}</h1>
            <h4>Total Consumption</h4>
            <h1 id="consumption">0.00 l</h1>
            <h4>Average Consumption per 100 km</h4>
            <h1 id="avgConsumption">0.00 l/100km</h1>
            <h4>Average Expenses per 100km</h4>
            <h1 id="avgExpenses">0.00€</h1>
            <h2>Total Cost</h2>
            <h1 id="total">0.00€</h1>
        </>
    )
}
