import React from 'react';


const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '10px', 
};

const thStyle = {
  border: '1px solid #ddd',
  padding: '5px',
  textAlign: 'center',
  backgroundColor: '#f2f2f2',
};

const tdStyle = {
  border: "1px solid #ddd",
  padding: '8px',
  margin: '8px',

};

const DummyTabel = ({ data }) => {
  return (
    <div>
      <table style={tableStyle}>
        <thead >
          <tr >
            <th style={thStyle}>Acara</th>
            <th style={thStyle}>Tanggal</th>
            <th style={thStyle}> Waktu</th>
            <th style={thStyle} > keterangan</th>
            <th style={thStyle}>metode</th>
            <th style={thStyle}>Lokasi</th>
            <th style={thStyle}>Dosen</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.judulAcara}</td>
              <td>{item.tanggal}</td>
              <td>{item.waktu}</td>
              <td>{item.keterangan}</td>
              <td>{item.metode}</td>
              <td>{item.Lokasi}</td>
              <td>{item.Dosen}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DummyTabel;