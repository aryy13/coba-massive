import React, { useState } from 'react';
import FileUpload from './UploadFile';
import Revisitbl from './Revisitbl';

const Formprofile = () => {
  const [inputNIP, setInputNIP] = useState('');
  const [inputNama, setInputNama] = useState('');
  const [inputstatus, setInputstatus] = useState('');
  const [inputtb, setInputtb] = useState('');
  const [inputprodi, setInputprodi] = useState('');
  const [inputemail, setInputemail] = useState('');

  const handleChangeInputNIP = (event) => {
    setInputNIP(event.target.value);
  };

  const handleChangeInputNama = (event) => {
    setInputNama(event.target.value);
  };

  const handleChangeInputstatus = (event) => {
    setInputstatus(event.target.value);
  };

  const handleChangeInputtb = (event) => {
    setInputtb(event.target.value);
  };

  const handleChangeInputprodi = (event) => {
    setInputprodi(event.target.value);
  };

  const handleChangeInputemail = (event) => {
    setInputemail(event.target.value);
  };

  // Membuat state lokal untuk menyimpan data formulir
  const [formData, setFormData] = useState({
    judulAcara: '',
    waktu: '',
    keterangan: '',
  });

  // Menangani pengiriman formulir
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data formulir (misalnya, kirim ke server)
    console.log('Data Formulir Dikirim:', formData);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">NIP: </label>
            <div className="col-sm-10">
              <input className="input-custom" type="text" name="NIP" value={inputNIP} onChange={handleChangeInputNIP} />
            </div>
            <br />
          </div>

          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Nama: </label>
            <div className="col-sm-10">
              <input className="input-custom" type="text" name="Nama" value={inputNama} onChange={handleChangeInputNama} />
            </div>
            <br />
          </div>

          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Status: </label>
            <div className="col-sm-10">
              <input className="input-custom" type="text" name="status" value={inputstatus} onChange={handleChangeInputstatus} />
            </div>
            <br />
          </div>

          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Tahun Bergabung: </label>
            <div className="col-sm-10">
              <input className="input-custom" type="text" name="tb" value={inputtb} onChange={handleChangeInputtb} />
            </div>
            <br />
          </div>

          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Program Studi: </label>
            <div className="col-sm-10">
              <input className="input-custom" type="text" name="prodi" value={inputprodi} onChange={handleChangeInputprodi} />
            </div>
            <br />
          </div>

          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Email: </label>
            <div className="col-sm-10">
              <input className="input-custom" type="text" name="Email" value={inputemail} onChange={handleChangeInputemail} />
            </div>
            <br />
          </div>
        </form>
      </div>
    </>
  );
};

export default Formprofile;
