import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Calendar from '../components/Calendar';
import Form from '../components/form';
import Headerdosen from '../components/Headerdosen';

const KalenderDosen = () => {
  return (
    <>
      <div className="container">
        <Headerdosen />
      </div>

      <section>
        <div className="container">
          <div className="row">
            <div className="a m-cust-tp col-md-4 col-sm-12">
              <h4 className="fs-custom3">
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none" className="m-cust-rg3">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.75 9.75C7.95507 9.75 6.5 11.2051 6.5 13V42.25C6.5 44.0449 7.95507 45.5 9.75 45.5H42.25C44.0449 45.5 45.5 44.0449 45.5 42.25V13C45.5 11.2051 44.0449 9.75 42.25 9.75H9.75ZM3.25 13C3.25 9.41015 6.16015 6.5 9.75 6.5H42.25C45.8399 6.5 48.75 9.41015 48.75 13V42.25C48.75 45.8399 45.8399 48.75 42.25 48.75H9.75C6.16015 48.75 3.25 45.8399 3.25 42.25V13Z"
                    fill="#0F172A"
                  />
                  <path d="M30.0625 26C31.4087 26 32.5 24.9087 32.5 23.5625C32.5 22.2163 31.4087 21.125 30.0625 21.125C28.7163 21.125 27.625 22.2163 27.625 23.5625C27.625 24.9087 28.7163 26 30.0625 26Z" fill="#0F172A" />
                  <path d="M38.1875 26C39.5337 26 40.625 24.9087 40.625 23.5625C40.625 22.2163 39.5337 21.125 38.1875 21.125C36.8413 21.125 35.75 22.2163 35.75 23.5625C35.75 24.9087 36.8413 26 38.1875 26Z" fill="#0F172A" />
                  <path d="M30.0625 34.125C31.4087 34.125 32.5 33.0337 32.5 31.6875C32.5 30.3413 31.4087 29.25 30.0625 29.25C28.7163 29.25 27.625 30.3413 27.625 31.6875C27.625 33.0337 28.7163 34.125 30.0625 34.125Z" fill="#0F172A" />
                  <path d="M38.1875 34.125C39.5337 34.125 40.625 33.0337 40.625 31.6875C40.625 30.3413 39.5337 29.25 38.1875 29.25C36.8413 29.25 35.75 30.3413 35.75 31.6875C35.75 33.0337 36.8413 34.125 38.1875 34.125Z" fill="#0F172A" />
                  <path d="M13.8125 34.125C15.1587 34.125 16.25 33.0337 16.25 31.6875C16.25 30.3413 15.1587 29.25 13.8125 29.25C12.4663 29.25 11.375 30.3413 11.375 31.6875C11.375 33.0337 12.4663 34.125 13.8125 34.125Z" fill="#0F172A" />
                  <path d="M21.9375 34.125C23.2837 34.125 24.375 33.0337 24.375 31.6875C24.375 30.3413 23.2837 29.25 21.9375 29.25C20.5913 29.25 19.5 30.3413 19.5 31.6875C19.5 33.0337 20.5913 34.125 21.9375 34.125Z" fill="#0F172A" />
                  <path d="M13.8125 42.25C15.1587 42.25 16.25 41.1587 16.25 39.8125C16.25 38.4663 15.1587 37.375 13.8125 37.375C12.4663 37.375 11.375 38.4663 11.375 39.8125C11.375 41.1587 12.4663 42.25 13.8125 42.25Z" fill="#0F172A" />
                  <path d="M21.9375 42.25C23.2837 42.25 24.375 41.1587 24.375 39.8125C24.375 38.4663 23.2837 37.375 21.9375 37.375C20.5913 37.375 19.5 38.4663 19.5 39.8125C19.5 41.1587 20.5913 42.25 21.9375 42.25Z" fill="#0F172A" />
                  <path d="M30.0625 42.25C31.4087 42.25 32.5 41.1587 32.5 39.8125C32.5 38.4663 31.4087 37.375 30.0625 37.375C28.7163 37.375 27.625 38.4663 27.625 39.8125C27.625 41.1587 28.7163 42.25 30.0625 42.25Z" fill="#0F172A" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13 3.25C13.8975 3.25 14.625 3.97754 14.625 4.875V8.125C14.625 9.02246 13.8975 9.75 13 9.75C12.1025 9.75 11.375 9.02246 11.375 8.125V4.875C11.375 3.97754 12.1025 3.25 13 3.25Z"
                    fill="#0F172A"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M39 3.25C39.8975 3.25 40.625 3.97754 40.625 4.875V8.125C40.625 9.02246 39.8975 9.75 39 9.75C38.1025 9.75 37.375 9.02246 37.375 8.125V4.875C37.375 3.97754 38.1025 3.25 39 3.25Z"
                    fill="#0F172A"
                  />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.875 14.625H47.125V17.875H4.875V14.625Z" fill="#0F172A" />
                </svg>
                Kalender Akademik
              </h4>
              <div class="card rounded-cust m-cust-tp4 shadow-lg">
                <div class="card-body bg-primary rounded-cust card-size3 shadow-lg">
                  <Calendar />
                </div>
              </div>
            </div>

            <div className=" margin-custom-lf m-cust-tp5 col-md-2 col-sm-12">
              <div class="card text-center card-size4 shadow-lg">
                <div class="card-header bg-primary fs-custom3 text-white">Acara Mendatang</div>
                <div class="card-body">
                <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
                   <div className="table-width" style={{ marginRight: '10px', fontWeight: 'bold' }}>
                    Nama Mahasiswa
                   </div>
                  <div className="table-width2">:</div>
                  <div className="table-width3"> Maya</div>
                  </div>

      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
        <div className="table-width" style={{ marginRight: '10px', fontWeight: 'bold' }}>
          Hari/Tanggal
        </div>
        <div className="table-width2">:</div>
        <div className="table-width3">Rabu, 20 Desember 2023</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
        <div className="table-width" style={{ marginRight: '10px', fontWeight: 'bold' }}>
         Waktu
        </div>
        <div className="table-width2">:</div>
        <div className="table-width3"> 08.00 WIB </div>
      </div>

                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h1 class="display-1 fw-bold fs-1 ms-5 pt-5 pb-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-file-earmark-medical-fill" viewBox="0 0 16 16">
            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1m-3 2v.634l.549-.317a.5.5 0 1 1 .5.866L7 7l.549.317a.5.5 0 1 1-.5.866L6.5 7.866V8.5a.5.5 0 0 1-1 0v-.634l-.549.317a.5.5 0 1 1-.5-.866L5 7l-.549-.317a.5.5 0 0 1 .5-.866l.549.317V5.5a.5.5 0 1 1 1 0m-2 4.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1m0 2h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1" />
          </svg>
          Bimbingan skripsi yang akan berlangsung
        </h1>
        <div class="card text-center pt-5 pb-5 ms-5 me-5">
          <div class="card-body ">
            <h5 class="card-title">Pengaruh Motivasi dan Komunikasi Dalam Kinerja Proses Pembuatan Skripsi</h5>
            <p class="card-text">Nama Mahasiswa : Shafa Jauhara</p>
            <p class="card-text">Tanggal pengajuan : 20 November 2023</p>
            <p class="card-text">Dosen Pembimbing : Dian Sastro</p>
            <div class="d-grid gap-2 col-6 mx-auto  pb-5">
              <button class="btn btn-primary rounded-pill fw-bold" type="button">
                Terima
              </button>
              <button class="btn btn-primary rounded-pill btn-danger fw-bold" type="button">
                Tolak
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 class="display-1 fw-bold fs-1 ms-5 pt-5 pb-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-megaphone-fill" viewBox="0 0 16 16">
            <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z" />
          </svg>
          Acara Mendatang
        </h1>
        <div className="table">
          <table className="table text-center mx-auto rounded-pill pb-5 ms-5">
            <thead>
              <tr>
                <th>No.</th>
                <th>Event Title</th>
                <th>Metode</th>
                <th>Location</th>
                <th>Nama Mahasiswa</th>
                <th>Time</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Bimbingan Skripsi</td>
                <td>Virtual</td>
                <td>http://meet.google.com/ucj-aafm-djf</td>
                <td>Maya</td>
                <td>Senin 08:30 - 10:00</td>
                <td>
                  <button class="btn btn-primary rounded-pill btn-primary fw-bold" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                    </svg>
                  </button>
                  <button class="btn btn-primary rounded-pill btn-danger fw-bold" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Bimbingan Skripsi</td>
                <td>Virtual</td>
                <td>Open chat</td>
                <td>Asep</td>
                <td>Senin 08:30 - 10:00</td>
                <td>
                  <button class="btn btn-primary rounded-pill btn-primary fw-bold" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                    </svg>
                  </button>
                  <button class="btn btn-primary rounded-pill btn-danger fw-bold" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Bimbingan Skripsi</td>
                <td>Virtual</td>
                <td>http://meet.google.com/ucj-aafm-djf</td>
                <td>Shafa Jauhara</td>
                <td>Senin 08:30 - 10:00</td>
                <td>
                  <button class="btn btn-primary rounded-pill btn-primary fw-bold" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                    </svg>
                  </button>
                  <button class="btn btn-primary rounded-pill btn-danger fw-bold" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default KalenderDosen;
