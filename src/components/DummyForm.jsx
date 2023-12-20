import React, { useState } from 'react'; 

const DummyForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({});

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  

  return (
    <div>
        <form onSubmit={handleSubmit}>
      <div className="row mb-3">
        <label className= "col-sm col-form-label " >
          Judul Acara: </label>
          <div className="col-sm-10">
          <input className="input-custom"
            type="text"
            name="judulAcara"
           // value={formData.Acara}
            onChange={handleChange}
          />
          </div>
        <br />
        </div>  

         
        <div className="row mb-3">
        <label className= "col-sm-2 col-form-label" >
          Tanggal: </label>
            <div className='col'>
          <input className='input-custom3 m-cust-rg3'
            type="Date"
            name="tanggal"
            //value={formData.tanggal}
            onChange={handleChange}
          />
          </div>
        <br />
        </div> 

        <div className="row mb-3">
        <label className= "col-sm-2 col-form-label" >
          Waktu: </label>
            <div className='col'>
          <input className='input-custom3 m-cust-rg3'
            type="text"
            name="waktu"
            //value={formData.tanggal}
            onChange={handleChange}
          />
          </div>
        <br />
        </div> 

        <div className="row mb-3">
        <label className= "col-sm-2 col-form-label" >
          Keterangan: </label>
        <div className="col-sm-10">
        
          <input className='input-custom'
            type="textarea"
            name="keterangan"
            //={formData.Keterangan}
            onChange={handleChange}
          />
         
          </div>
        <br />
        </div> 


        <div className="row mb-3">
        <label className = 'col-sm-2 col-form-label'>
        Metode: </label>

        
        <div className='col-sm-10'>
        <label className='m-cust-rg3'>
        <input className='m-cust-rg4'
            type="radio"
            name="metode"
            value="chat"
            checked={formData.metode === 'chat'}
            onChange={handleChange}
            /> 
            chat </label>
            
        <label>
        <input className='m-cust-rg4'
            type="radio"
            name="metode"
            value="virtual"
            checked={formData.metode === 'virtual'}
            onChange={handleChange}
            /> 
            Virtual 
            </label>
            </div>
            </div>


            <div className="row mb-3">
        <label className= "col-sm-2 col-form-label" >
          Lokasi: </label>
            <div className='col'>
          <input className='input-custom m-cust-rg3'
            type="text"
            name="Lokasi"
            //value={formData.tanggal}
            onChange={handleChange}
          />
          </div>
        <br />
        </div> 

        <div className="row mb-3">
        <label className= "col-sm-2 col-form-label" >
          Dosen: </label>
          <div className="col-sm-10">
          <select name="Dosen" value={formData.Dosen} onChange={handleChange} className='input-custom'>
          <option value="" disabled>Pilih dosen</option>
            <option value="wahyu S.kom">Wahyu S.Kom</option>
            <option value="Dian S.kom">Dian S.Kom</option>
          </select>
        </div>
          </div>
           
    
            
    

      
        
        <div className='row mt-3'>
        <button className='btn-custom' type="button" onClick={handleSubmit}>Kirim</button>
        </div>
       
      </form>
    </div>
  );
};

export default DummyForm;
       

