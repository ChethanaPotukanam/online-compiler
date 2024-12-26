import './createFolderModal.scss'
export const UpdateFolderTitle=()=>{
    const closeModal=()=>{

    }
    return <div className="modal-container">
    <form  className="modal-body" onSubmit={onSubmitModal}>
        <button  className="close-button" aria-label="Close">
            <span onClick={closeModal} className="material-icons">close</span>
        </button>
        <h1>Update Folder Title</h1>
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
}