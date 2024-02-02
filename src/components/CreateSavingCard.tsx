/** @jsxRuntime classic */
/** @jsx jsx */
import { IoAddCircle } from 'react-icons/io5';
import ModalForm from '../components/ModalForm';
import { jsx, css } from '@emotion/react';
import   { useState } from 'react';
const cardStyles = css`
  background-color: #dc3545;
  border-radius: 10px;
  padding: 20px;
  color: white;
  position: relative;
`;

const amountStyles = css`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const buttonStyles = css`
  border: 2px solid #dc3545;
  border-radius: 5px;
  color: #dc3545;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
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
export default function CreateSavingCard() {
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
  return (
    <div css={cardStyles}>
    <p css={amountStyles}>You have saved KES 0</p>
    <button css={buttonStyles} onClick={openModal}>
      <IoAddCircle fontSize="20px" />
    </button>
    <div css={() => modalOverlayStyles({ isOpen: isModalOpen })} onClick={closeModal}></div>
    <div css={() => modalStyles({ isOpen: isModalOpen })}>
      <ModalForm />
    </div>
  </div>
  )
}
