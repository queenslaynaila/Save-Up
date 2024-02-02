import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

const formContainerStyles = css`
  max-width: 400px;
  margin: auto;
  padding: 20px;
`;

const formStyles = css`
  display: flex;
  flex-direction: column;
`;

const inputStyles = css`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
`;

const selectStyles = css`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
`;

const buttonStyles = css`
  background-color: #dc3545;
  outline: "none";
  color: white;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
`;

const MakeGoal = () => {
  return (
    <div css={formContainerStyles}>
      <h2 css={{ textAlign: "center" }}>Make a Savings Goal</h2>
      <form css={formStyles}>
        <label htmlFor="goalName">Description:</label>
        <input type="text" id="goalName" css={inputStyles} />

        <label htmlFor="category">Category:</label>
        <select id="category" css={selectStyles}>
          <option value="monthly">Monthly</option>
          <option value="weekly">Weekly</option>
          <option value="annual">Annual</option>
        </select>

        <label htmlFor="targetAmount">Target Amount:</label>
        <input type="number" id="targetAmount" css={inputStyles} />

        <button type="submit" css={buttonStyles}>
          Create Savings Goal
        </button>
      </form>
    </div>
  );
};

export default MakeGoal;
