import { useState } from 'react';
import { storage } from '../../config/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';

import './FileDrop.css';

const FileDrop = ({ onUpload }) => {
    const [uploadedFileName, setUploadedFileName] = useState('');

    function dropHandler(e) {
        e.preventDefault();
        e.stopPropagation();
      
        if (e.dataTransfer.items) {
          // Use DataTransferItemList interface to access the file(s)
          [...e.dataTransfer.items].forEach((item) => {
            // If dropped items aren't files, reject them
            if (item.kind === "file") {
              const file = item.getAsFile();
              document.getElementById('dropZone').classList.add("image-uploaded");
              uploadFile(file);
            }
          });
        }
    }
      
    function dragOverHandler(e) {
        e.preventDefault();
    }
      
    const uploadFile = (file) => {
      const storageRef = ref(storage, `images/${file.name}`); // Create a reference to the file location
      uploadBytes(storageRef, file).then((snapshot) => {
          console.log('Uploaded a blob or file!', snapshot);
          getDownloadURL(snapshot.ref).then((downloadURL) => {
              console.log("File available at", downloadURL);
              setUploadedFileName(file.name);
              if (onUpload) {
                  onUpload(downloadURL); // Call the onUpload prop with the download URL
              }
          });
      }).catch((error) => {
          console.error("Error uploading file:", error);
      });
  }

    return (
        <div id="fileDrop">
            <div
                id="dropZone"
                onDrop={dropHandler}
                onDragOver={dragOverHandler}>
                  <FontAwesomeIcon icon={faCloudArrowUp} className="upload-icon" />
                  <p>Drag an image to this <i>drop zone</i>.<br/>Image size should be <b>775px x 800px</b>.</p>
            </div>
                {uploadedFileName && ( // Conditional rendering
                    <div className="image-details"><FontAwesomeIcon icon={faImage} className="image-icon" /> <b>File Uploaded:</b><br/>{uploadedFileName}</div>
                )}
        </div>
    )
}

export default FileDrop;