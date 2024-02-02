/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useState } from "react";
import SavingsContext from "../context/SavingsContext";
import { useContext } from "react";

type GoalFormProps = {
  id: string | undefined;
};

const modalContentStyles = css`
  padding: 8px;
  color: black;
  h3 {
    text-align: center;
    margin: 4px;
  }
  label {
    display: block;
    margin-bottom: 8px;
  }

  input {
    width: calc(100% - 16px);
    padding: 8px;
    margin-bottom: 16px;
    box-sizing: border-box;

    border: 0.5px solid #ccc;
  }
`;
const GoalForm: React.FC<GoalFormProps> = (props) => {
  const { updateContributedAmount } = useContext(SavingsContext);
  const [contributeAmount, setContributeAmount] = useState<number>(0);

  return (
    <form css={modalContentStyles}>
      <label>Enter Amount:</label>
      <input
        type="number"
        value={contributeAmount}
        onChange={(e) => setContributeAmount(parseInt(e.target.value, 10))}
      />
      <button
        type="button"
        onClick={() => updateContributedAmount(props.id!, contributeAmount)}
      >
        Top Up
      </button>
    </form>
  );
};

export default GoalForm;
