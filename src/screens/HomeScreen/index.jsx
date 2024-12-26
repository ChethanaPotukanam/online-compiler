import React, { useContext } from 'react';
import { ModalContext, modalConstants } from '../../Providers/ModalProvider.jsx';
import './index.scss';
import { RightComponent } from './RightComponent/index.jsx';
import { Modal } from '../../Providers/Modals/Modal.jsx';

export const HomeScreen = () => {
    const modalFeatures = useContext(ModalContext);

    const openCreatePlaygroundModal = () => {
        modalFeatures.openModal(modalConstants.CREATE_PLAYGROUND);
    };

    return (
        <div className="home-container">
            <div className="left-container">
                <div className="items-container">
                    <img src="logo.avif" alt="Logo" />
                    <h1>Online Compiler</h1>
                    <h3>Code. Compile. Debug.</h3>
                    <button onClick={openCreatePlaygroundModal}>
                        <span className="material-icons icon">add</span>
                        Create Playground
                    </button>
                </div>
            </div>
            <RightComponent />
            <Modal />
        </div>
    );
};
