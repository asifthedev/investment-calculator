import { useState } from 'react';
import { Header, UserInput, Results } from './components/index';

function App() {
  // State to manage user investment input values
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  // Update specific input field when user changes values
  function handleInputChange(fieldName: string, value: number) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [fieldName]: value };
    });
  }

  // Validate that duration is at least 1 year
  const isInputValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onInputChange={handleInputChange} />
      {/* Show results if valid input, otherwise show error message */}
      {isInputValid ? (
        <Results userInput={userInput} />
      ) : (
        <p className="center">Please enter duration greater than zero</p>
      )}
    </>
  );
}

export default App;
