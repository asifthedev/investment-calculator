import type { UserInputData, InvestmentResults } from "./types";
import { calculateInvestmentResults, formatter } from "../utils/investment";

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
        {results.map((eachYearData) => (
          <tr>
            <td>{eachYearData.year}</td>
            <td>{formatter.format(eachYearData.valueEndOfYear)}</td>
            <td>{formatter.format(eachYearData.interest)}</td>
            <td>
              {formatter.format(
                eachYearData.valueEndOfYear -
                  (eachYearData.year * eachYearData.annualInvestment +
                    userInput.initialInvestment),
              )}
            </td>
            <td>
              {formatter.format(
                userInput.initialInvestment +
                  eachYearData.year * userInput.annualInvestment,
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Results;
