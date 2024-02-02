/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

type SavingCardProps = {
  description: string;
  category: string;
  targetAmount: number;
  contributedAmount: number;
  id?: string;
};

const cardStyles = css`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  cursor: pointer;
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

const SavingCard = ({
  description,
  category,
  contributedAmount,
  targetAmount,
  id,
}: SavingCardProps) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    if (id) {
      navigate(`/savings/${id}`);
    }
  };
  return (
    <div css={cardStyles} onClick={handleCardClick}>
      <h3>{description}</h3>
      <h3>{category}</h3>
      <span>
        Progress: {((contributedAmount / targetAmount) * 100).toFixed(2)}%
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
