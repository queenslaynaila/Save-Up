/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import  { useState } from 'react';
const modalContentStyles = css`
     padding:8px;
  color: black; 
  h3{
    text-align:center;
    margin:4px
  }
  label {
    display: block;
    margin-bottom: 8px;
  }

   
  input{
    width: calc(100% - 16px); 
    padding: 8px;
    margin-bottom: 16px;
    box-sizing: border-box;

    border: 0.5px solid #ccc; 
  }
  
`;
const GoalForm = () => {
    const [contributeAmount, setContributeAmount] = useState('');
    const handleContribute = () => {
        // Add your logic to update the contributed amount in the database or state
        console.log(`Contributing ${contributeAmount} to the goal`);
        // Close the modal after contributing
        
      };
    return (
        <form  css={modalContentStyles}>
        <label>Enter Amount:</label>
        <input
          type="number"
          value={contributeAmount}
          onChange={(e) => setContributeAmount(e.target.value)}
        />
        <button type="button" onClick={handleContribute}>
          Top Up
        </button>
      </form>
    );
  };
  
  export default GoalForm;
  