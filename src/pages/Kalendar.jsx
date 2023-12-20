import React, { useState } from 'react';
import DummyForm from '../components/DummyForm';
import DummyTabel from '../components/DummyTable';

const Kalendar = () => {
    const [tableData, setTableData] = useState([]);

    const handleFormSubmit = (formData) => {
        setTableData([...tableData, formData]);
    };

    return(
<div>
    <DummyForm onSubmit={handleFormSubmit}/>
    <DummyTabel data={tableData}/>
</div>
    );

    
};
     
   

export default Kalendar; 