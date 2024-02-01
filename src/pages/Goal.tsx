
/** @jsxRuntime classic */
/** @jsx jsx */
import  { useState } from 'react';
import { jsx, css } from '@emotion/react';
import { useParams } from 'react-router-dom';
import GoalDetailsCard from '../components/GoalDetailsCard';
import GoalForm from '../components/GoalForm';
const containerStyles = css`
  max-width: 100%;
  margin: auto;
  padding: 18px;
  h2 {
    padding: 2px;
    margin-bottom: 1px;
  }
  p {
    font-size: 18px;
    margin-bottom: 6px;
  }
  button {
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
  }
`;

const balanceStyles = css`
  margin-top: 4px;
  font-size: 14px;
  color: gray;
`;


const modalStyles = (props: { isOpen: boolean }) => css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  display: ${props.isOpen ? 'block' : 'none'};
  z-index: 2;
  width: 80%; 
`;

const modalOverlayStyles = (props: { isOpen: boolean }) => css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props.isOpen ? 'block' : 'none'};
  z-index: 1;
`;

 
const Goal = () => {
  const { id } = useParams();
  
  const goalData = {
    description: 'Emergency Fund',
    category: 'Monthly',
    targetAmount: 5000,
    contributedAmount: 2000,
  };

 
  const [contributeAmount, setContributeAmount] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
 
  const handleContribute = () => {
    console.log(`Contributing ${contributeAmount} to the goal`);
    setModalOpen(false);
  };

 
  const handleDeleteGoal = () => {
    console.log('Deleting the goal');
  };

  
  return (
    <div css={containerStyles}>
      <h2>{goalData.description}</h2>
      <p css={balanceStyles}>Balance: {goalData.targetAmount - goalData.contributedAmount}</p>
      <div
        css={css`
          text-align: center;
          padding: 10px;
        `}
      >
        <button onClick={() => setModalOpen(true)}>Top Up</button>
      </div>

    
      <div
          css={() => modalOverlayStyles({ isOpen: isModalOpen})}
          onClick={closeModal}
        ></div>
      <div css={() => modalStyles({ isOpen: isModalOpen})}>
        <h3>Top Up to Your Goal</h3>
         <GoalForm/>
      </div>
      

      <GoalDetailsCard goalData={goalData}/>
      <button onClick={handleDeleteGoal}>Delete Goal</button>
    </div>
  );
};

export default Goal;
