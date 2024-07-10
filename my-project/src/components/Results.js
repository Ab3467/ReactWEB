import React from "react";
import calculateInvestmenthesults, { formatter } from "../util/investment.js";

export default function Results({ input }) {
  const Results = calculateInvestmenthesults(input);
  console.log(Results);
  return (
    <table id="result">
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
        {Results.map((data) => {
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(data.totalInterest)}</td>
              <td>{formatter.format(data.investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
