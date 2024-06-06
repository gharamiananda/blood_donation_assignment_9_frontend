import React, { useState } from 'react';

interface UserProfileProps {
    selectedFile:File | null, setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>
}

const DragAndDropFileUpload: React.FC<UserProfileProps> = ({selectedFile, setSelectedFile}) => {
  const [dragActive, setDragActive] = useState(false);
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.type === 'dragenter' || event.type === 'dragover') {
      setDragActive(true);
    } else if (event.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragActive(false);
    const file = event.dataTransfer?.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    console.log('file', file)
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="user-profile">
      <div
        className={`upload-box ${dragActive ? 'drag-active' : ''}`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        {selectedFile ? (
          <p>Selected file: {selectedFile.name}</p>
        ) : (
          <>
            <p>Drag and drop your profile picture here or</p>
            <input type="file" accept="image/*" onChange={handleChange} />
          </>
        )}
      </div>
    </div>
  );
};

export default DragAndDropFileUpload;
