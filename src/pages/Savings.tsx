 

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import SavingCard from "../components/SavingCard"
import savingsData from '../components/data';
const containerStyles = css`
  max-width: 100%;
  margin: auto;
  padding: 20px;
`;

const headerContainerStyles = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;
 
const Savings = () => {
  return (
    <div css={containerStyles}>
    <div css={headerContainerStyles}>
      <h2>Your Saving Goals</h2>
    </div>
    {savingsData.map((saving, index) => (
      <SavingCard saving={saving} key={index}/>
    ))}
  </div>
  )
}
export default Savings