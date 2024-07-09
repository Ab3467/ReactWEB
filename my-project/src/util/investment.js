// Example logic for investment calculation
export function calculateInvestmentResults({
  InitialInvestment,
  AnnualInvestment,
  ExpectedReturn,
  Duration,
}) {
  const annualData = [];
  let investmentValue = InitialInvestment;

  for (let i = 0; i < Duration; i++) {
    const interestEarnedInYear = investmentValue * (ExpectedReturn / 100);
    investmentValue += interestEarnedInYear + AnnualInvestment;
    annualData.push({
      year: i + 1,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      totalInterest: interestEarnedInYear * (i + 1),
      investedCapital: InitialInvestment + AnnualInvestment * (i + 1),
    });
  }

  return annualData;
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
