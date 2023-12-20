import React, { useState } from 'react';

const Select = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lakukan sesuatu dengan nilai yang dipilih, misalnya kirim ke server
    console.log('Nilai yang dipilih:', selectedOption);
  };

  return (
    <div>

      <form onSubmit={handleSubmit}>
    
          <select value={selectedOption} onChange={handleSelectChange} className='input-custom'>
            <option value="" disabled>Pilih salah satu</option>
            <option value="option1">Wahyu S.Kom</option>
            <option value="option2">Dian S.Kom</option>
          </select>
    
      </form>
      
    </div>
  );
};

export default Select;