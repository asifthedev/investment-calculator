import type { UserInputData } from "./types";

type UserInputProps = {
  userInput: UserInputData;
  onInputChange: (fieldName: string, value: number) => void;
};

function UserInput({ userInput, onInputChange }: UserInputProps) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onInputChange("initialInvestment", Number(event.target.value))
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onInputChange("annualInvestment", Number(event.target.value))
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onInputChange("expectedReturn", Number(event.target.value))
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) =>
              onInputChange("duration", Number(event.target.value))
            }
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
