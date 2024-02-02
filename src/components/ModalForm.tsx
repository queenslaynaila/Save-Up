/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React, { useState, useContext } from "react";
import SavingsContext from "../context/SavingsContext";

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
  const { addSaving } = useContext(SavingsContext);

  // State to manage form values
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    savingFrequency: "daily", // Default value
  });

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Call addSaving function with form data
    addSaving({
      description: formData.name,
      targetAmount: parseFloat(formData.targetAmount),
      category: formData.savingFrequency,
      contributedAmount: 0,
    });

    // Reset form after submission
    setFormData({
      name: "",
      targetAmount: "",
      savingFrequency: "daily",
    });
  };

  return (
    <form css={modalContentStyles} onSubmit={handleSubmit}>
      <h3>Create Saving Goal</h3>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <label>Target Amount:</label>
      <input
        type="number"
        name="targetAmount"
        value={formData.targetAmount}
        onChange={handleInputChange}
        required
      />
      <label>Saving Frequency:</label>
      <select
        name="savingFrequency"
        value={formData.savingFrequency}
        onChange={handleInputChange}
        required
      >
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
