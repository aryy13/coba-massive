import React, { useState } from 'react';

const DummyFormTable = () => {
  const [formData, setFormData] = useState({
    tanggal: '',
    tahapan: '',
    file: '',
    statusFile: '',
  });

  const [tableData, setTableData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Validasi form sebelum menambahkan data ke tabel
    if (formData.tanggal && formData.tahapan && formData.statusFile) {
      // Tambahkan data ke tabel
      setTableData([...tableData, formData]);
      // Reset form setelah pengiriman
      setFormData({
        tanggal: '',
        tahapan: '',
        file: '',
        statusFile: '',
      });
    } else {
      alert('Mohon isi semua field yang diperlukan.');
    }
  };

  return (
    <div>
      <div>
        <label>Tanggal:</label>
        <input type="text" name="tanggal" value={formData.tanggal} onChange={handleInputChange} />
      </div>
      <div>
        <label>Tahapan:</label>
        <input type="text" name="tahapan" value={formData.tahapan} onChange={handleInputChange} />
      </div>
      <div>
        <label>File:</label>
        <input type="text" name="file" value={formData.file} onChange={handleInputChange} />
      </div>
      <div>
        <label>Status File:</label>
        <input
          type="text"
          name="statusFile"
          value={formData.statusFile}
          onChange={handleInputChange}
        />
      </div>
      <button type="button" onClick={handleSubmit}>
        Kirim
      </button>

      <div>
        <table>
          <thead>
            <tr>
              <th>Tanggal</th>
              <th>Tahapan</th>
              <th>File</th>
              <th>Status File</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.tanggal}</td>
                <td>{data.tahapan}</td>
                <td>{data.file}</td>
                <td>{data.statusFile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DummyFormTable;