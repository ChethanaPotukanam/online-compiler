import { useContext } from 'react';
import { ModalContext, modalConstants } from '../ModalProvider';
import { CreatePlaygroundModal } from './CreatePlaygroundModal';
import {CreateFolderModal} from './CreateFolderModal'
import {UpdateFolderTitle} from './UpdateFolderTitle'
export const Modal = () => {
    const modalFeatures = useContext(ModalContext);

    if (!modalFeatures) {
        return null;
    }

    return (
        <>
            {modalFeatures.activeModal === modalConstants.CREATE_PLAYGROUND && (<CreatePlaygroundModal />)}
            {modalFeatures.activeModal === modalConstants.CREATE_FOLDER && <CreateFolderModal/>}
            {modalFeatures.activeModal === modalConstants.UPDATE_FOLDER_TITLE && <UpdateFolderTitle/>}
        </>
    );
};
