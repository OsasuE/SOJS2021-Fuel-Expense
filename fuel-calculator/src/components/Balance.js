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

function totalDistance(num) {
    let p = num.toFixed(0).split('.');
    return (
        (p[0].split('')[0]) + p[0].split('').reverse().reduce(function (acc, num, i, orig) {
                return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
            }, '') +
        '.' +
        p[1] + 'km'
    );
}

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const koko = transactions.map(transaction => transaction.Distance);
    const kustannus = transactions.map(transaction => transaction.price);

    const kilometrit = transactions.map(transaction => transaction.distance);
    const litrat = transactions.map(transaction => transaction.litres);

    const totConsumption = (kilometrit / litrat);

    let testi = parseFloat(transactions.distance);
    const lista = [];
    const kokmatka = [];

    const income = koko.filter(item => item > 0).reduce((acc, item) => (acc += item), 0);


    const matka = transactions.distance < 0 ? ' km' : ' km';
    const hinta = transactions.distance < 0 ? '€' : '€';

    const total = koko.reduce((acc, item) => (acc += item), 0);

    return (
        <>
            <h4>Total Distance</h4>
            <h1>{totalDistance(income)}</h1>
            <h4>Total Consumption</h4>
            <h1>{litrat}</h1>
            <h4>Average Consumption per 100 km</h4>
            <h1>{totConsumption}</h1>
            <h4>Average Expenses per 100km</h4>
            <h1>testitesti</h1>
            <h2>Total Cost</h2>
            <h1>{kustannus}{hinta}</h1>
        </>
    )
}
