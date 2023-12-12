import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";


const Signin = () => {
  return (
    <>
      <div className="container-fluid">
        <Header />
      </div>
      <section>
        <div className="container m-cust-tp3">
          <div className="card mb-3 card-size2 ">
            <div className="row no-gutters">
              <div className="col-md-4 col-sm-12 bg-light">
                <img src="./gambar8.png" width="400px" height="500px" class="card-img" alt="..." />
              </div>
              <div className="col-md-8 col-sm-12 p-5">
                <div className="card-body justify-content-center bg-primary rounded-4">
                  <div class="header-text mb-4 text-center text-light fw-bold">
                    <h2>LOGIN</h2>
                    <p>Eduvion</p>
                  </div>
                  <div class="input-group mb-3">
                    <input type="text" class="form-control form-control-lg bg-light fs-6" placeholder="Email address" />
                  </div>
                  <div class="input-group mb-3">
                    <input type="password" class="form-control form-control-lg bg-light fs-6" placeholder="Password" />
                  </div>
                  <div class="input-group mb-3">
                    <input type="text" class="form-control form-control-lg bg-light fs-6" placeholder="Asal Universitas" />
                  </div>
                  <div class="input-group mb-4 d-flex justify-content-between">
                    <div class="form-check">
                      <input type="radio" class="form-check-input" id="mahasiswaCheckbox" />
                      <label for="formCheck" class="form-check-label text-light">
                        <small>Mahasiswa</small>
                      </label>
                    </div>
                    <div class="form-check">
                      <input type="radio" class="form-check-input" id="dosenCheckbox" />
                      <label for="formCheck" class="form-check-label text-light">
                        <small>Dosen</small>
                      </label>
                    </div>
                  </div>
            
                  <button className="btn btn-md btn-warning rounded-pill fw-bold  btn-custom-wd margin-custom-lf3 m-cust-tp2 " type="button">
                    <a className="text-white text-decoration-none" href="/BerandaMhs">
                      {' '}
                      Login{' '}
                    </a>{' '}
                  </button> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>    
    );
}; 

export default Signin;  