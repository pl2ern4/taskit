import React from 'react';
import { StyledModal } from './StyledModalStyle';
import Modal from "react-modal";

StyledModal.setAppElement("#root");

const StyledModalComponent = ({ isOpen, onRequestClose, contentLabel, children }) => {
    return (
        <StyledModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel={contentLabel}
            className="form-modal"
            overlayClassName="form-overlay"
        >
            {children}
        </StyledModal>)

}

export default StyledModalComponent;