// Import the UserInputData type definition
import type { UserInputData } from './types';

// Define the props interface for the UserInput component
type UserInputProps = {
  userInput: UserInputData;
  onInputChange: (fieldName: string, value: number) => void;
};

// UserInput component - displays form inputs for investment calculator parameters
function UserInput({ userInput, onInputChange }: UserInputProps) {
  return (
    <section id="user-input">
      {/* First row of input fields */}
      <div className="input-group">
        {/* Initial Investment input */}
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) => onInputChange('initialInvestment', Number(event.target.value))}
          />
        </p>
        {/* Annual Investment input */}
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) => onInputChange('annualInvestment', Number(event.target.value))}
          />
        </p>
      </div>
      {/* Second row of input fields */}
      <div className="input-group">
        {/* Expected Return input */}
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) => onInputChange('expectedReturn', Number(event.target.value))}
          />
        </p>
        {/* Duration input */}
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onInputChange('duration', Number(event.target.value))}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
