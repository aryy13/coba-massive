import React from 'react';
import Headerdosen from '../components/Headerdosen';
import { Link } from 'react-router-dom';
import Formprofile from '../components/Formprofile';
const Profile = () => {
  return (
    <>
      <div className="container-fluid">
        <Headerdosen />
      </div>
      <section>
        <div className="container m-cust-tp3">
          <div className="card mb-3 card-size1">
            <div className="row no-gutters">
              <div className="col-md-4 col-sm-12 bg-light pt-5">
                <img src="./ds.png" width="400px" height="300px" class="card-img  " alt="..." />
              
                  <button class="btn btn-warning rounded-pill btn-primary fw-bold m-5 btn-md text-light" type="button">
                    Edit Profile
                  </button>
               
                <Link to="/">
                  <button class="btn btn-warning rounded-pill btn-primary fw-bold btm-md text-light" type="button">
                    Log Out
                  </button>
                </Link>
              </div>

              <div className="col-md-8 col-sm-12 p-5">
                <div className="card-body justify-content-center bg-primary rounded-4 text-light">
                  <div className="card-body">
                    <Formprofile />
                  </div>
                  <button className="btn btn-md btn-warning rounded-pill fw-bold   " type="button">
                    <a className="text-white text-decoration-none" href="/BerandaMhs">
                      Submit
                    </a>
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

export default Profile;
