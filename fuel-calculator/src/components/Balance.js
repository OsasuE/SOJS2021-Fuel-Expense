import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const km = transactions.map(transaction => transaction.distance);
    const totalKm = km
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item),0)
    .toFixed(0);


    const fuel = transactions.map(transaction => transaction.litres);
    const totalFuel = fuel
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item),0)
    .toFixed(0);


    const price = transactions.map(transaction => transaction.price);
    const totalPrice = price
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item),0)
    .toFixed(0);

    const avgConsumption = (totalFuel / totalKm * 100).toFixed(2);
    const avgCost = (totalPrice / totalKm * 100).toFixed(2);


//  Tulostusten muotoilua
    const matka = transactions.distance < 0 ? ' km' : ' km';
    const hinta = transactions.price < 0 ? '€' : '€';
    const litra = transactions.fuel < 0 ? ' litres' : ' litres';

    return (
        <>
            <h4>Total Distance</h4>
            <h2>{totalKm}{matka}</h2>
            <h4>Total Fuel Used</h4>
            <h2>{totalFuel}{litra}</h2>
            <h4>Average Consumption per 100 km</h4>
            <h2>{avgConsumption}{litra}</h2>
            <h4>Average Expenses per 100km</h4>
            <h2>{avgCost}{hinta}</h2><br></br>
            <h1>Total Cost</h1>
            <h2>{totalPrice}{hinta}</h2>
        </>
    )
}
