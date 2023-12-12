import React, { useState } from 'react';

const Revisitbl = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="row mb-3">
      <div className="col-sm-10">
        <label className="m-cust-rg3">
          <input className="m-cust-rg4" type="radio" value="option1" checked={selectedOption === 'option1'} onChange={handleRadioChange} />
          Revisi
        </label>
        <label>
          <input className="m-cust-rg4" type="radio" value="option2" checked={selectedOption === 'option2'} onChange={handleRadioChange} />
          Disetujui
        </label>
      </div>
    </div>
  );
};

export default Revisitbl;
