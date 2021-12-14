import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [litres, setLitres] = useState(0);
    const [price, setPrice] = useState(0);
    const [distance, setDistance] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            litres: +litres,
            price: +price,
            distance: +distance

        }

        addTransaction(newTransaction);
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="litres">Litres</label>
                    <input type="number" value={litres} onChange={(e) => setLitres(e.target.value)} placeholder="Enter amount..." />
                </div>
                <div className="form-control">
                    <label htmlFor="price">Price</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter price..." />
                </div>
                <div className="form-control">
                    <label htmlFor="distance">Distance</label>
                    <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} placeholder="Enter distance since last refuel..." />
                </div>
                <div className="form-control">
                    <label htmlFor="car">Car</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter car..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}