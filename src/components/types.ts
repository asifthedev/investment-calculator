type UserInputData = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
};

type InvestmentResults = {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
};

export type { UserInputData, InvestmentResults };
