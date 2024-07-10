import React from 'react'
import calculateInvestmentResults from "../util/investment.js"

export default function Results({input}) {
  const Results = calculateInvestmentResults(input);
  console.log(Results);
  return (
    <div>
      Results...
    </div>
  )
}
