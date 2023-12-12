import React, { useState } from 'react';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    // Ambil file yang dipilih
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Lakukan sesuatu dengan file yang terpilih
    if (selectedFile) {
      console.log('File yang terpilih:', selectedFile);

      // Lakukan pengiriman file ke server atau tindakan lainnya di sini
    } else {
      console.log('Tidak ada file yang dipilih.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="file" onChange={handleFileChange}  />
      </div>
      
    </form>
  );
};

export default FileUpload;