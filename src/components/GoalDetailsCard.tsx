/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

const cardStyles = css`
  background: #e0dbdb;
  padding: 16px;
  border-radius: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const progressBarFillStyles = (percentage: number) => css`
  width: ${percentage}%;
  background: #dc3545;
  height: 20px;
  border-radius: 5px;
`;

const progressBarTextStyles = css`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #333;
  margin-top: 4px;
`;
const progressBarStyles = css`
  width: 100%;
  background: #ddd;
  border-radius: 5px;
  overflow: hidden;
`;

interface goalDataProps {
  goalData: {
    category: string;
    contributedAmount: number;
    targetAmount: number;
  };
}

const GoalDetailsCard: React.FC<goalDataProps> = ({ goalData }) => {
  const { category, contributedAmount, targetAmount } = goalData;
  const progressPercentage = (contributedAmount / targetAmount) * 100;
  return (
    <div css={cardStyles}>
      <p>Frequency: {category}</p>
      <p>Target: {goalData.targetAmount}</p>
      <div css={progressBarTextStyles}>
        <span>{progressPercentage}%</span>
        <span>100%</span>
      </div>
      <div css={progressBarStyles}>
        <div css={progressBarFillStyles(progressPercentage)} />
      </div>
    </div>
  );
};

export default GoalDetailsCard;
