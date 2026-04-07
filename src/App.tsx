import { useState } from "react";
import { Header, UserInput, Results } from "./components/index";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleInputChange(fieldName: string, value: number) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [fieldName]: value };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onInputChange={handleInputChange} />
      <Results userInput={userInput} />
    </>
  );
}

export default App;
// test