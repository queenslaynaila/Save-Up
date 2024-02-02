/** @jsxRuntime classic */
/** @jsx jsx */
import SavingCard from "./SavingCard";
import SavingsContext from "../context/SavingsContext";
import { useContext } from "react";
import { jsx, css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const containerStyles = css`
  max-width: 100%;
  margin: auto;
  padding: 20px;
`;

const headerContainerStyles = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  button {
    background-color: transparent;
    border: 2px solid #dc3545;
    border-radius: 15px;
    color: #dc3545;
    padding: 10px 20px;
    cursor: pointer;
  }
`;

const SavingList = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/savings");
  };

  const { savings } = useContext(SavingsContext);
  return (
    <div css={containerStyles}>
      <div css={headerContainerStyles}>
        <h2>Your Saving Goals</h2>
        <button onClick={handleClick}>View All Goals</button>
      </div>
      {savings.slice(0, 3).map((saving) => (
        <SavingCard
          key={saving.id}
          description={saving.description}
          category={saving.category}
          targetAmount={saving.targetAmount}
          contributedAmount={saving.contributedAmount}
          id={saving.id}
        />
      ))}
    </div>
  );
};

export default SavingList;
