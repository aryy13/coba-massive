import React, { useState } from 'react';
import FileUpload from './UploadFile';
import Select from './Select';

const FormBimbingan = () => {

    const [inputNpm, setInputNpm] = useState('');
    const [inputNama, setInputNama] = useState('');
    const [inputTgl, setInputTgl] = useState('');
    const [inputJudul, setInputJudul] = useState('');
    const [inputTahapan, setInputTahapan] = useState('');
    const [inputLink, setInputLink] = useState('');
    
    
    const handleChangeInputNpm = (event) => {
        setInputNpm(event.target.value);
      };
    
      const handleChangeInputNama = (event) => {
        setInputNama(event.target.value);
      };
    
      const handleChangeInputTgl= (event) => {
        setInputTgl(event.target.value);
      };
    
      const handleChangeInputJudul = (event) => {
        setInputJudul(event.target.value);
      };
    
      const handleChangeInputTahapan = (event) => {
        setInputTahapan(event.target.value);
      };

      const handleChangeInputLink = (event) => {
        setInputLink(event.target.value);
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
                <label className= "col-sm-2 col-form-label" >
                  Npm: </label>
                  <div className="col-sm-10">
                  <input className="input-custom"
                    type="text"
                    name="Npm"
                    value={inputNpm}
                    onChange={handleChangeInputNpm}
                  />
        
                  </div>
                <br />
                </div> 

                <div className="row mb-3">
                <label className= "col-sm-2 col-form-label" >
                  Nama: </label>
                  <div className="col-sm-10">
                  <input className="input-custom"
                    type="text"
                    name="Nama"
                    value={inputNama}
                    onChange={handleChangeInputNama}
                  />
                  </div>
                <br />
                </div> 

                <div className="row mb-3">
                <label className= "col-sm-2 col-form-label" >
                  Tanggal: </label>
                  <div className="col-sm-10">
                  <input className="input-custom"
                    type="Date"
                    name="Tgl"
                    value={inputTgl}
                    onChange={handleChangeInputTgl}
                  />
                  </div>
                <br />
                </div>
                
                <div className="row mb-3">
                <label className= "col-sm-2 col-form-label" >
                  Judul: </label>
                  <div className="col-sm-10">
                  <input className="input-custom"
                    type="text"
                    name="Judul"
                    value={inputJudul}
                    onChange={handleChangeInputJudul}
                  />
                  </div>
                <br />
                </div>
                
                <div className="row mb-3">
                <label className= "col-sm-2 col-form-label" >
                  Upload: </label>
                  <div className="col-sm-10">
                  <FileUpload/>
                  </div>
                <br />
                </div> 

                <div className="row mb-3">
                <label className= "col-sm-2 col-form-label" >
                  Tahapan: </label>
                  <div className="col-sm-10">
                  <input className="input-custom"
                    type="text"
                    name="Tahapan"
                    value={inputTahapan}
                    onChange={handleChangeInputTahapan}
                  />
                  </div>
                <br />
                </div> 

                <div className="row mb-3">
                <label className= "col-sm-2 col-form-label" >
                  Link: </label>
                  <div className="col-sm-10">
                  <input className="input-custom"
                    type="text"
                    name="Tahapan"
                    value={inputLink}
                    onChange={handleChangeInputLink}
                  />
                  </div>
                <br />
                </div>
                
                <div className="row mb-3">
        <label className= "col-sm-2 col-form-label" >
          Dosen: </label>

          <div className="col-sm-10">
          <Select />
        </div>
        </div>



                </form>
                </div>
        </>
    );
};

export default FormBimbingan; 