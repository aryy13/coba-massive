import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Jurnaldosen = () => {
  return (
    <>
      <header className="navbar navbar-expand-lg navbar-primary bg-primary p-2 shadow-sm fixed-top">
        <a className="ms-5 navbar-brand text-white fw-bold" href="/">
          {' '}
          EDUVION{' '}
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse me-3" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <Link to="/DosenBeranda">
              <li className="nav-item m-2">
                <a className="nav-link   text-white" href="#">
                  Dasboard{' '}
                </a>
              </li>
            </Link>
            <Link to="/KalenderDosen">
              <li className="nav-item m-2">
                <a className="nav-link   text-white" href="#">
                  Kalender{' '}
                </a>
              </li>
            </Link>

            <Link to="/Bimdosen">
              <li className="nav-item m-2">
                <a className="nav-link text-white" href="#">
                  Bimbingan
                </a>
              </li>{' '}
            </Link>
            <Link to="/Jurnaldosen">
              <li className="nav-item m-2">
                <a className="nav-link text-white" href="#">
                  E-Repository
                </a>
              </li>
            </Link>
            <Link to="/Profile">
              <li className="nav-item m-2">
                <button type="button" className="btn btn-sm m-2 btn-outline-light" link to="/Profile">
                  {' '}
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                  </svg>{' '}
                </button>
              </li>{' '}
            </Link>
          </ul>
        </div>
      </header>

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
          <div className="col-md-6 col-sm-6 p-5 margin-custom-tp3">
            <h1 className="text-white fs-custom margin-custom-lf">E-Repository </h1>
            <p className="margin-custom-lf text-white">
              {' '}
              Situs utama yang menyajikan beberapa terbitan jurnal ilmiah yang diberikan oleh Perguruan Tinggi kepada anggota komunitasnya untuk mengelola dan menyebarluaskan bahan-bahan digital.{' '}
            </p>

            <p className="margin-custom-lf text-white">
              {' '}
              Situs utama yang menyajikan beberapa terbitan jurnal ilmiah yang diberikan oleh Perguruan Tinggi kepada anggota komunitasnya untuk mengelola dan menyebarluaskan bahan-bahan digital.{' '}
            </p>
          </div>

          <div className="col-md-2 col-sm-12  p-5 m-cust-rg margin-custom-tp2">
            <img src="./gambar7.png" width="480px" height="450px" alt="gambar" />
          </div>
        </div>
      </section>

      <section>
        <div className="box  margin-custom-tp5 mx-auto  ">
          <div className="row ms-5">
            <div className="col-md-4 col-sm-3">
              <h2>Topik Pembahasan </h2>
              <div class="justify-content-md-end pt-5 pb-1"></div>
            </div>
          </div>
          <div className="input-group d-none d-md-flex pt-2 ">
            <input type="text" className="form-control me-2" placeholder="Cari..." aria-label="Cari..." aria-describedby="basic-addon2" />

            <button class="btn btn-warning me-3 rounded-circle" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
            <button class="btn btn-warning border-5 rounded-pill" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
              </svg>
            </button>
          </div>

          <div className="row m-cust- ms-5 pt-3">
            <div className="col-md-6 col-sm-3">
              <div className="card mb-3 card-size5">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="./buku1.png" className="img-fluid rounded-start m-4" width="100px" height="150px" alt="..." />
                  </div>
                  <div className="col-md-8 col-sm-3">
                    <div className="card-body">
                      <h5 className="card-title">Jurnal teknologi terpadu</h5>
                      <p className="card-text">Jurnal Informatika Terpadu memuat jurnal ilmiah di bidang Ilmu Komputer, Sistem Informasi dan Teknik Informatika</p>
                      <a href="#" class="btn btn-warning rounded-pill  btn-custom-wd text-white ">
                        Selengkapnya
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-3">
              <div className="card mb-3 card-size5">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="./buku1.png" className="img-fluid rounded-start m-4" width="100px" height="150px" alt="..." />
                  </div>
                  <div className="col-md-8 col-sm-3">
                    <div className="card-body">
                      <h5 className="card-title">Jurnal teknologi terpadu</h5>
                      <p className="card-text">Jurnal Informatika Terpadu memuat jurnal ilmiah di bidang Ilmu Komputer, Sistem Informasi dan Teknik Informatika</p>
                      <a href="#" class="btn btn-warning rounded-pill  btn-custom-wd text-white ">
                        Selengkapnya
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-3">
              <div className="card mb-3 card-size5">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="./buku1.png" className="img-fluid rounded-start m-4" width="100px" height="150px" alt="..." />
                  </div>
                  <div className="col-md-8 col-sm-3">
                    <div className="card-body">
                      <h5 className="card-title">Jurnal teknologi terpadu</h5>
                      <p className="card-text">Jurnal Informatika Terpadu memuat jurnal ilmiah di bidang Ilmu Komputer, Sistem Informasi dan Teknik Informatika</p>
                      <a href="#" class="btn btn-warning rounded-pill  btn-custom-wd text-white ">
                        Selengkapnya
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-3">
              <div className="card mb-3 card-size5">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="./buku1.png" className="img-fluid rounded-start m-4" width="100px" height="150px" alt="..." />
                  </div>
                  <div className="col-md-8 col-sm-3">
                    <div className="card-body">
                      <h5 className="card-title">Jurnal teknologi terpadu</h5>
                      <p className="card-text">Jurnal Informatika Terpadu memuat jurnal ilmiah di bidang Ilmu Komputer, Sistem Informasi dan Teknik Informatika</p>
                      <a href="#" class="btn btn-warning rounded-pill  btn-custom-wd text-white ">
                        Selengkapnya
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Jurnaldosen;
