// SavingCard.js
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

interface SavingCardProps {
  saving: {
    description: string;
    contributedAmount: number;
    targetAmount: number;
  };
}

const cardStyles = css`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
`;

const progressBarContainer = css`
  background-color: #f5f5f5;
  border-radius: 5px;
  height: 15px;
  margin-top: 10px;
`;

const progressBar = css`
  height: 100%;
  border-radius: 5px;
  background-color: #dc3545;  
`;

const SavingCard: React.FC<SavingCardProps> = ({ saving }) => {
  const { description, contributedAmount, targetAmount } = saving;

  return (
    <div css={cardStyles}>
      <h3>{description}</h3>
      <span>
        Progress: {contributedAmount}/{targetAmount}
      </span>
      <div css={progressBarContainer}>
        <div
          css={progressBar}
          style={{ width: `${(contributedAmount / targetAmount) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SavingCard;
