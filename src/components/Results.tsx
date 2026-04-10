import type { UserInputData, InvestmentResults } from './types';
import { calculateInvestmentResults, formatter } from '../utils/investment';

function Results({ userInput }: { userInput: UserInputData }) {
  const results: InvestmentResults[] = calculateInvestmentResults(userInput);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((eachYearData) => {
          //  initialInvestment = valueEndOfYear - annualInvestment - interest
          const initialInvestment =
            results[0].valueEndOfYear - results[0].annualInvestment - results[0].interest;

          // Formula: totalInterest = valueEndOfYear - (initialInvestment + annualInvestment × year)

          const totalInterest =
            eachYearData.valueEndOfYear -
            (initialInvestment + eachYearData.annualInvestment * eachYearData.year);

          //  totalInvestedCapital = initialInvestment + (annualInvestment × year)

          const totalInvestedCapital =
            initialInvestment + eachYearData.annualInvestment * eachYearData.year;

          return (
            <tr>
              <td>{eachYearData.year}</td>
              <td>{formatter.format(eachYearData.valueEndOfYear)}</td>
              <td>{formatter.format(eachYearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvestedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Results;
