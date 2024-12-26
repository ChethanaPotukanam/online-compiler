import './createFolderModal.scss';
import {useContext} from 'react'
import {ModalContext} from "../ModalProvider.jsx"
import {PlaygroundContext} from "../PlaygroundProvider.jsx"

export const CreateFolderModal = () => {
    const modalFeatures=useContext(ModalContext)
    const {createNewFolder}=useContext(PlaygroundContext)
    const closeModal=()=>{
        modalFeatures.closeModal();
    }
    const onSubmitModal=(e)=>{
        e.preventDefault();
        const folderName=e.target.folderName.value;
        // console.log(folderName)
        createNewFolder(folderName);
        closeModal();

    }
    return (
        <div className="modal-container">
            <form  className="modal-body" onSubmit={onSubmitModal}>
                <button  className="close-button" aria-label="Close">
                    <span onClick={closeModal} className="material-icons">close</span>
                </button>
                <h1>Create New Folder</h1>
                <hr />
                <div className="input-row">
                    <input 
                        name="folderName"
                        placeholder="Enter Folder Name" 
                        className="folder-input"
                    />
                    <button className="create-button">Create Folder</button>
                </div>
            </form>
        </div>
    );
};
