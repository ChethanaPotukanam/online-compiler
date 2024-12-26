import './CreatePlaygroundModal.scss';
import {useContext} from 'react';
import {ModalContext,modalConstants} from "../ModalProvider.jsx"
import {PlaygroundContext} from "../PlaygroundProvider.jsx"
export const CreatePlaygroundModal = () => {
    const modalFeatures=useContext(ModalContext)
    const playgroundFeatures=useContext(PlaygroundContext)
    const closeModal=()=>{
        modalFeatures.closeModal()
    }
    const onSubmitModal=(e)=>{
        e.preventDefault();
        const folderName=e.target.folderName.value;
        const fileName=e.target.fileName.value;
        const language=e.target.language.value;
        playgroundFeatures.createNewPlayground({folderName,fileName,language})
        closeModal()
    }
    return (
        <div className="modal-container">
            <form className="modal-body" onSubmit={onSubmitModal}>
                <button className="close-button" aria-label="Close">
                    <span onClick={closeModal} className="material-icons">close</span>
                </button>
                <h1>Create New Playground</h1>
                <div className="row">
                    <label className="item">
                        <span>Enter Folder Name :</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="folderName" required />
                    </label>
                </div>
                <div className="row">
                    <label className="item">
                        <span>Enter File Name     &nbsp;&nbsp;&nbsp;&nbsp;   :</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" name="fileName" required/>
                    </label>
                </div>
                <div className="row actions">
                    <select name="language">
                        <option value="cpp">C++</option>
                        <option value="java">Java</option>
                        <option value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                    </select>
                    <button type="submit">Create Playground</button>
                </div>
            </form>
        </div>
    );
};
