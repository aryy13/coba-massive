import React, { useState } from 'react';
import DummyForm from './DummyForm';
import DummyTabel from './DummyTable';

const FormTable = () => {
  const [tableData, setTableData] = useState([]);

  const handleFormSubmit = (formData) => {
    setTableData([...tableData, formData]);
  };

  return (
    <div>
      <DummyForm onSubmit={handleFormSubmit} />
      <DummyTabel data={tableData} />
    </div>
  );
};

export default FormTable;