import React from 'react';
import Headerdosen from '../components/Headerdosen';
import Footer from '../components/Footer';
import Formeditbim from '../components/Formeditbim';

const Editbim = () => {
  return (
    <>
      <div className="container-fluid">
        <Headerdosen />
      </div>
      <section>
        <div className="container m-cust-tp3">
          <div className="card mb-3 card-size2a border-cust">
            <div className="row no-gutters">
              <div className="col-md-4 col-sm-12 bg-primary">
                <img src="./gambar8.png" width="350px" height="700px" class="card-img" alt="..." />
              </div>
              <div className="col-md-8 col-sm-12 p-5">
                <div className="card-body">
                  <Formeditbim />
                </div>
                <button className="btn btn-md btn-warning rounded-pill fw-bold  btn-custom-wd margin-custom-lf3 m-cust-tp2 " type="button">
                  <a className="text-white text-decoration-none" href="/BerandaMhs">
                    {' '}
                    Submit{' '}
                  </a>{' '}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Editbim;
