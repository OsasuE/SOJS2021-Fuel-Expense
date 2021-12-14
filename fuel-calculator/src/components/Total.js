import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Total = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const totals = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div>
            <>
                <h4>Total Distance</h4>
                <h1 id="distance">10000</h1>
                <h4>Total Consumption</h4>
                <h1 id="consumption">0.00 l</h1>
                <h4>Average Consumption per 100 km</h4>
                <h1 id="avgConsumption">0.00 l/100km</h1>
                <h4>Average Expenses per 100km</h4>
                <h1 id="avgExpenses">0.00€</h1>
                <h2>Total Cost</h2>
                <h1 id="total">0.00€</h1>
            </>
        </div>
    )
}
