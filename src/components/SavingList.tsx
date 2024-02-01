 
import savingsData from './data';
import SavingCard from './SavingCard';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

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
    navigate('/savings');
  };

  return (
    <div css={containerStyles}>
      <div css={headerContainerStyles}>
        <h2>Your Saving Goals</h2>
        <button onClick={handleClick}>View All Goals</button>
      </div>
      {savingsData.map((saving, index) => (
        <SavingCard saving={saving} key={index}/>
      ))}
    </div>
  );
};

export default SavingList;
