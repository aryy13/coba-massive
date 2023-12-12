import React from 'react';
import Headerdosen from '../components/Headerdosen';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Bimdosen = () => {
  return (
    <>
      <div className="container-fluid">
        <Headerdosen />
      </div>

      <section className="bg-primary full-page">
        <div className="row">
          <svg xmlns="http://www.w3.org/2000/svg" width="1512" height="600" viewBox="0 0 1512 600" fill="none">
            <path
              d="M1118.92 368.228C766.824 139.387 626.365 -48.9833 0 11.3959V701.57C280.273 831.345 902.462 647.878 902.462 647.878C902.462 647.878 1263.64 564.399 1512 386.126L1512 265C1382 368.228 1300.17 433.064 1118.92 368.228Z"
              fill="#1A8AFF"
            />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="700" height="150" viewBox="0 0 1512 150" fill="none">
            <path d="M1 307C1 307 241.727 91.3501 433.495 91.3501C655.98 91.3501 1014.06 250.43 1185.75 210.65C1357.45 170.869 1512 2 1512 2" stroke="#F8F7F6" stroke-opacity="0.25" stroke-width="4" stroke-linecap="round" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="1512" height="200" viewBox="0 0 1512 200" fill="none" className="margin-custom-tp">
            <path d="M409.771 0C127.001 0.000407852 0 174.02 0 174.02V960H1513V32.0707C1513 32.0707 1331.38 178.219 1081.21 147.733C798.816 113.318 685.953 -0.00039835 409.771 0Z" fill="white" />
          </svg>
          <div className="col ms-5 p-5 margin-custom-tp3">
            <div class="row">
              <div class="col-sm-5 mb-3 mb-sm-0">
                <div class="card ">
                  <div class="card-header bg-warning text-light fw-bold">JUMLAH MAHASISWA BIMBINGAN</div>
                  <div class="card-body fw-bold  text-center">
                    <h5 class="card-title  fs-1 ">4</h5>
                    <p class="card-text">Mahasiswa</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-5 mb-3 mb-sm-0">
                <div class="card ">
                  <div class="card-header bg-warning text-light fw-bold">JUMLAH BIMBINGAN HARI INI</div>
                  <div class="card-body fw-bold  text-center">
                    <h5 class="card-title  fs-1 ">2</h5>
                    <p class="card-text">Mahasiswa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col  p-5 m-cust-rg margin-custom-tp2">
            <img src="./gambar6.png" width="480px" height="450px" alt="gambar" />
          </div>
        </div>
      </section>

      <section>
        <div class="row col-10 text-center ms-5">
          <div class="col-md-4 col-sm-1 margin-custom-lf2 m-cust-tp2 m-cust-rg">
            <div class="card mb-1">
              <div class="card-header bg-warning text-light fw-bold">Selesai BAB I</div>
              <div div class="card-body fw-bold text-center">
                <h5 class="card-title fs-1">1</h5>
                <p class="card-text">Mahasiswa</p>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-1 margin-custom-lf2 m-cust-tp2 m-cust-rg">
            <div class="card mb-3">
              <div class="card-header bg-warning text-light fw-bold">Selesai BAB II</div>
              <div class="card-body fw-bold text-center">
                <h5 class="card-title fs-1">2</h5>
                <p class="card-text">Mahasiswa</p>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-1 margin-custom-lf2 m-cust-tp2 m-cust-rg">
            <div class="card mb-3">
              <div class="card-header bg-warning text-light fw-bold">Selesai BAB III</div>
              <div class="card-body fw-bold text-center">
                <h5 class="card-title fs-1">1</h5>
                <p class="card-text">Mahasiswa</p>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-1 margin-custom-lf2 m-cust-tp2 m-cust-rg">
            <div class="card mb-3">
              <div class="card-header bg-warning text-light fw-bold">Selesai BAB IV</div>
              <div class="card-body fw-bold text-center">
                <h5 class="card-title fs-1">0</h5>
                <p class="card-text">Mahasiswa</p>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-1 margin-custom-lf2 m-cust-tp2 m-cust-rg">
            <div class="card mb-3">
              <div class="card-header bg-warning text-light fw-bold">Selesai BAB V</div>
              <div class="card-body fw-bold text-center">
                <h5 class="card-title fs-1">0</h5>
                <p class="card-text">Mahasiswa</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section></section>
      <section>
        <div className="container m-cust-tp3">
          <div className="input-group   mb-5 card-chat mx-auto m-cust-tp">
            <input type="text" className="form-control me-2" placeholder="Cari..." aria-label="Cari..." aria-describedby="basic-addon2" />

            <button class="btn btn-warning me-3 rounded-circle ms-3 " type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </div>
          <div className="card mb-3 card-size1 ">
            <div className="row no-gutters">
              <div className="col-md-4 pt-5 col-sm-12 bg-light">
                <img src="./images.jpeg" width="500px" height="350px" class="card-img" alt="..." />
              </div>
              <div className="col-md-8 col-sm-12 p-5">
                <div className="card-body justify-content-center bg-primary rounded-4">
                  <div class="header-text mb-4  text-light ">
                    <p>NPM: 234342234</p>
                    <p>Nama: Maya</p>
                    <p>Judul Skripsi : Sistem Informasi Monitoring Proses Bimbingan </p>
                    <p>Tahapan: BAB II </p>
                    <p>Pembimbing 1 : Dwi Saketi, M.Kom. </p>
                    <p>Pembimbing 2 : Dian Sastro</p>
                  </div>

                  <Link to="/Chatdosen">
                    <li className="nav-item m-2">
                      <button type="button" className="btn btn-sm m-2 btn-outline-light" link to="/Chatdosen">
                        {' '}
                        <button class="btn btn-primary rounded-pill btn-warning fw-bold" type="button">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                            <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                          </svg>
                        </button>{' '}
                      </button>
                    </li>{' '}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="table pt-5">
        <table class="table text-center mx-auto  pb-5 ms-5">
          <thead>
            <tr>
              <th>Tangggal</th>
              <th>Tahapan</th>
              <th>File</th>
              <th>Status File</th>
              <th>File Revisi</th>

              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>02//11/2023</td>
              <td>BAB II</td>
              <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-filetype-pdf" viewBox="0 0 16 16">
                  <path
                    fill-rule="evenodd"
                    d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"
                  />
                </svg>
              </td>
              <td>Revisi</td>
              <td>https://shorturl.at/yAGKT</td>

              <td>
                <Link to="/Editbim">
                  <button type="button" className="btn btn-sm m-2 btn-outline-light" link to="/Editbim">
                    <button class="btn btn-primary rounded-pill btn-primary fw-bold" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                      </svg>
                    </button>
                  </button>
                </Link>
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
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Bimdosen;
