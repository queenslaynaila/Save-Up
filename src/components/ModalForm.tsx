 
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

const modalContentStyles = css`
  padding: 8px;
  color: black;
  h3 {
    text-align: center;
    margin: 4px;
  }
  label {
    display: block;
    margin-bottom: 8px;
  }

  input,
  select {
    width: calc(100% - 16px);
    padding: 8px;
    margin-bottom: 16px;
    box-sizing: border-box;
    border: 0.5px solid #ccc;
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

const ModalForm = () => {
  return (
    <form css={modalContentStyles}>
      <h3>Create Saving Goal</h3>
      <label>Name:</label>
      <input type="text" required />
      <label>Target Amount:</label>
      <input type="number" required />
      <label>Saving Frequency:</label>
      <select required>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="all">All</option>
      </select>
      <button type="submit">Create Goal</button>
    </form>
  );
};

export default ModalForm;
