import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Headerdosen from '../components/Headerdosen';

const Chatdosen = () => {
  return (
    <>
      <div className="container-fluid">
        <Headerdosen />
      </div>

      <section>
        <div className="container">
          <div className="row">
            <div className="a m-cust-tp col-md-4 col-sm-12">
              <h4 className="fs-custom3">Bimbingan Chat</h4>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="input-group  mb-3 card-chat mx-auto m-cust-tp">
          <input type="text" className="form-control me-2" placeholder="Cari..." aria-label="Cari..." aria-describedby="basic-addon2" />

          <button class="btn btn-warning me-3 rounded-circle ms-3 " type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
        </div>
        <div className="card mb-3 card-chat mx-auto m-cust-tp bg-primary">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="./dosen1.png" classNames="img-fluid  rounded-pill" width="100px" height="100px" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body card-chat">
                <h5 className="card-title text-white">Maya </h5>
                <p className="card-text text-white">halo bu, selamat siang</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3 card-chat mx-auto bg-primary">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="./dosen1.png" classNames="img-fluid  rounded-pill" width="100px" height="100px" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body card-chat">
                <h5 className="card-title text-white">Syafa jauhara </h5>
                <p className="card-text text-white">halo bu, selamat siang</p>
              </div>
            </div>
          </div>
        </div>

        <a href="#" class="btn btn-warning rounded-pill  btn-custom-chat text-white m-cust-rg5">
          pesan baru
        </a>
      </section>
    </>
  );
};

export default Chatdosen;
