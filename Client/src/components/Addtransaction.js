import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/Globalstate'

export const Addtransaction = () => {
    const {addTransaction} = useContext(GlobalContext)
    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')

    function generateID() {
        return Math.floor(Math.random() * 100000000);
      }      

    const submit = (e) => {
        e.preventDefault()

        const newTransaction = {
            id:generateID(),
            text, 
            amount
        }
        // console.log(text, amount, typeof amount)

        addTransaction(newTransaction)
    }

    return (
        <div><h3>Add new transaction</h3>
            <form onSubmit={submit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" value = {text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                        (negative - expense, positive - income)</label>
                    <input type="number" id="amount" value = {amount} onChange={(e) => setAmount(Number(e.target.value))} placeholder="Enter amount..." />
                </div>
                <button className="btn" type="submit">Add transaction</button>
            </form></div>
    )
}
