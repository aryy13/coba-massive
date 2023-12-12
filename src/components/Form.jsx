import React, { useState } from 'react';
import RadioButton from './RadioButton';
import Select from './Select';

const Form = () => {

const [inputAcara, setInputAcara] = useState('');
const [inputTanggal, setInputTanggal] = useState('');
const [inputJam, setInputJam] = useState('');
const [inputKeterangan, setInputKeterangan] = useState('');
const [inputLokasi, setInputLokasi] = useState('');


const handleChangeInputAcara = (event) => {
    setInputAcara(event.target.value);
  };

  const handleChangeInputTanggal = (event) => {
    setInputTanggal(event.target.value);
  };

  const handleChangeInputJam = (event) => {
    setInputJam(event.target.value);
  };

  const handleChangeInputKeterangan = (event) => {
    setInputKeterangan(event.target.value);
  };

  const handleChangeInputLokasi = (event) => {
    setInputLokasi(event.target.value);
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
   
    <div>

      <form onSubmit={handleSubmit}>

      <div className="row mb-3">
        <label className= "col-sm-2 col-form-label" >
          Judul Acara: </label>
          <div className="col-sm-10">
          <input className="input-custom"
            type="text"
            name="judulAcara"
            value={inputAcara}
            onChange={handleChangeInputAcara}
          />

          </div>
        <br />
        </div> 

        <div className="row mb-3">
        <label className= "col-sm-2 col-form-label" >
          Waktu: </label>
            <div className='col'>
          <input className='input-custom3 m-cust-rg3'
            type="Date"
            name="tanggal"
            value={inputTanggal}
            onChange={handleChangeInputTanggal}
          />
          <input className='input-custom3'
            type="text"
            name="jam"
            value={inputJam}
            onChange={handleChangeInputJam}
          />
      
          </div>
        <br />
        </div> 

        <div className="row mb-3">
        <label className= "col-sm-2 col-form-label" >
          Keterangan: </label>
          <div className="col-sm-10">
            <textarea className='input-custom2'>
          <input className='input-custom'
            type="textarea"
            name="lastName"
            value={inputKeterangan}
            onChange={handleChangeInputKeterangan}
          />
          </textarea>
          </div>
        <br />
        </div> 

        <div className="row mb-3">
        <label className= "col-sm-2 col-form-label" >
          Metode: </label>
          <div className='col-sm-10'>
          <RadioButton /> 
          </div>
        </div>
  
        <div className="row mb-3">
        <label className= "col-sm-2 col-form-label" >
          Lokasi: </label>
          <div className="col-sm-10">
          <input className='input-custom'
            type="text"
            name="lastName"
            value={inputLokasi}
            onChange={handleChangeInputLokasi}
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
        
        <div className='row mt-3'>
        <button className='btn-custom' type="submit">Kirim</button>
        </div>
       
       
        
     
      </form>
    </div> 




  );
};


export default Form;