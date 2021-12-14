import React from 'react'
import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'


export const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const { AddTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
    }

    let num = 0;
    const newTransaction = {
        id: (num += 1),
        text,
        amount: +amount
    }

    AddTransaction(newTransaction)

    return (
        <>
            <div>
                <h3>Add new transaction</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-control">
                        <label htmlFor="litres">Litres</label>
                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                    </div>
                    <div className="form-control">
                        <label htmlFor="price">Price</label>
                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter price..." />
                    </div>
                    <div className="form-control">
                        <label htmlFor="distance">Distance</label>
                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter distance since last refuel..." />
                    </div>
                    <div className="form-control">
                        <label htmlFor="car">Car</label>
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter car..." />
                    </div>
                    <button className="btn">Add transaction</button>
                </form>
            </div >
        </>
    )
}
