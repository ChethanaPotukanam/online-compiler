import React, { createContext, useState } from 'react';
import { CreatePlaygroundModal } from './Modals/CreatePlaygroundModal.jsx';

export const ModalContext = createContext();


export const modalConstants={
    CREATE_PLAYGROUND:"CREATE_PLAYGROUND",
    CREATE_FOLDER:"CREATE_FOLDER",
    UPDATE_FOLDER_TITLE:"UPDATE_FOLDER_TITLE"
}
export const ModalProvider = ({ children }) => {
    const [modalType, setModalType] = useState(null);

    const closeModal = () => {
        setModalType(null);
    };

    const openModal = (type) => {
        if (modalTypes[type]) {
            setModalType(type);
        } else {
            console.warn(`Modal type "${type}" does not exist.`);
        }
    };

    const modalFeatures = {
        openModal:setModalType,
        closeModal,
        activeModal: modalType,
    };

    return (
        <ModalContext.Provider value={modalFeatures}>
            {children}
        </ModalContext.Provider>
    );
};