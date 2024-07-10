import React from 'react'
import calculateInvestmentResults from "../util/investment.js"

export default function Results({input}) {
  const Results = calculateInvestmentResults(input);
  console.log(Results);
  return (
    <table id='result'>
      <thead>
        <tr>Year</tr>
        <tr>Investment Value</tr>
        <tr>Interest (Value)</tr>
        <tr>Total Interest</tr>
        <tr>Invested Capital</tr>
      </thead>
      <tbody>
        {Results.map((data)=>{
          <tr>{data.year}</tr>
          
        })}
      </tbody>
    </table>
  )
}
