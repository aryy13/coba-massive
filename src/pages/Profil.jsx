import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Formprofile from '../components/Formprofile';


const Profil = () => {
    return (
        <>
        <header className="navbar navbar-expand-lg navbar-primary bg-primary p-2 shadow-sm fixed-top"> 
            <a className="navbar-brand text-white fw-bold" href= "/"> EDUVION </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls='navbarNav' aria-expanded="false"
              aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

            <div className="collapse navbar-collapse" id="navbarNav">   
            <ul className="navbar-nav ms-auto">

            <Link to ="/">
                <li className="nav-item m-2">
                    <a className="nav-link text-white" aria-current="page" href="#"> Dashboard</a>
                </li>
              </Link>
                <Link to="/kalender">
                <li className="nav-item m-2">
                    <a className="nav-link text-white" href="#">Kalender </a>
                </li></Link>

               <Link to="/Bimbingan">
                <li className="nav-item m-2">
                    <a className="nav-link text-white" href="#">Bimbingan</a>
                </li> </Link>
                <Link to="/Repository">
                <li className="nav-item m-2">
                    <a className="nav-link text-white" href="#">E-Repository</a>
                </li></Link>

                <Link to="/Profil">
            <li className="nav-item m-2 ">
              <button type="button" className="btn btn-sm m-2 btn-outline-light" link to="/login">
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

        

       
       
        <div> 
            <Footer/>
        </div>
        
        </>
    );
}; 

export default Profil;  