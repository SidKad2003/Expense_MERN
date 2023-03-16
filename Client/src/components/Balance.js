import React, { useContext } from 'react';
import { GlobalContext } from '../context/Globalstate';

//Money formatter function
function moneyFormatter(num) {
  // console.log(num, "abc")
  // let p = Number(num).toFixed(2).split('.');
  let p = (num).toFixed(2).split('.');
  // console.log((p), "1233")
  return (
    '$ ' + (p[0].split('')[0]=== '-' ? '-' : '') +
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

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <h4>Your Balance</h4>
    <h1>{moneyFormatter(total)}</h1>
    </>
  )
}

export default Balance

