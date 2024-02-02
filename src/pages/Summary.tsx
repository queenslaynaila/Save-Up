/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useContext } from "react";
import SavingsContext from "../context/SavingsContext";
import { jsx, css } from "@emotion/react";
import { FaMoneyBillTransfer } from "react-icons/fa6";

const containerStyles = css`
  max-width: 100%;
  margin: auto;
  padding: 18px;

  h3 {
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 16px;
    padding: 16px;
  }
`;
const cardStyles = css`
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;

  .icon-section {
    flex: 1;
    display: flex;
    align-items: center;
    margin-right: 16px;

    svg {
      font-size: 32px;
      color: black;
    }
  }

  .text-section {
    flex: 3;
    display: flex;
    flex-direction: column;

    .date {
      font-size: 14px;
      color: #666;
      margin-bottom: 4px;
    }

    .name {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 8px;
    }
  }

  .amount-section {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }
`;

export default function Summary() {
  const { savings, contributions, totalContributions, totalTargetedAmount } =
    useContext(SavingsContext);
  console.log(savings);

  // Function to combine contribution with corresponding saving description
  const combineContributionsWithSavingNames = () => {
    return contributions.map((contribution) => {
      const correspondingSaving = savings.find(
        (saving) => saving.id === contribution.savingId,
      );
      const contributionName = correspondingSaving
        ? correspondingSaving.description
        : "Unknown Saving";
      return { ...contribution, contributionName };
    });
  };

  const combinedContributions = combineContributionsWithSavingNames();

  return (
    <div css={containerStyles}>
      <h3>Here Are Your Cumulatives</h3>
      <ul>
        {combinedContributions.map((combinedContribution) => (
          <div css={cardStyles}>
            <div className="icon-section">
              <FaMoneyBillTransfer />
            </div>
            <div className="text-section">
              <div className="date">{combinedContribution.date}</div>
              <div className="name">
                {combinedContribution.contributionName}
              </div>
            </div>
            <p className="amount-section">KES {combinedContribution.amount}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
