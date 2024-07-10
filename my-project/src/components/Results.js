import React from 'react'
import calculateInvestmenthesults from "../util/investment.js"

export default function Results({input}) {
  const Results = calculateInvestmenthesults(input);
  console.log(Results);
  return (
    <table id='result'>
      <thead>
        <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (Value)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {Results.map((data)=>{
          <th>{data.year}</th>
          
        })}
      </tbody>
    </table>
  )
}
