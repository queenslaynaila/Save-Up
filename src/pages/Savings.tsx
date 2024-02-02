/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import SavingCard from "../components/SavingCard";
import SavingsContext from "../context/SavingsContext";
import { useContext } from "react";
import CreateSavingCard from "../components/CreateSavingCard";
const containerStyles = css`
  max-width: 100%;
  margin: auto;
  padding: 20px;
`;

const headerContainerStyles = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const noSavingsContainerStyles = css`
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const textHea = css`
  padding: 10px;
  margin-bottom: 10px;
`;

const Savings = () => {
  const { savings } = useContext(SavingsContext);

  if (savings.length === 0) {
    return (
      <div css={noSavingsContainerStyles}>
        <div css={textHea}>
          {" "}
          <h2>You have no savings</h2>
          <p>Start your saving journey here.</p>
        </div>

        <CreateSavingCard />
      </div>
    );
  }

  return (
    <div css={containerStyles}>
      <div css={headerContainerStyles}>
        <h2>Your Saving Goals</h2>
      </div>
      {savings.map((saving) => (
        <div key={saving.id}>
          <SavingCard
            description={saving.description}
            category={saving.category}
            targetAmount={saving.targetAmount}
            contributedAmount={saving.contributedAmount}
            id={saving.id}
          />
        </div>
      ))}
    </div>
  );
};

export default Savings;
