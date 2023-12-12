import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


const Chat = () => {
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
                    <a className="nav-link text-white" aria-current="page" href="#"> Dahboard</a>
                </li>
              </Link>
                <Link to="/kalender">
                <li className="nav-item m-2">
                    <a className="nav-link text-white" href="#">Kalender </a>
                </li></Link>

               <Link to="/Bimbingan">
                <li className="nav-item m-2">
                    <a className="nav-link active text-white" href="#">Bimbingan</a>
                </li> </Link>
                <Link to="/Repository">
                <li className="nav-item m-2">
                    <a className="nav-link text-white" href="#">E-Repository</a>
                </li></Link>

                <Link to="/Profil">
            <li className="nav-item m-2">
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
        <div className="container">
    <div className="row">
 <div className="a m-cust-tp col-md-4 col-sm-12"> 
      <h4 className='fs-custom3'>
  
     Bimbingan Chat</h4>
   
        </div>
        </div>
        </div>
        </section>

        <section>
        <div className="card mb-3 card-chat mx-auto m-cust-tp bg-primary" >
        <div className="row g-0">
        <div className="col-md-4">
          <img src="./dosen1.png" classNames="img-fluid  rounded-pill"  width="100px" height="100px"alt="..."/>
        </div>
        <div className="col-md-8">
        <div className="card-body card-chat">
        <h5 className="card-title text-white">Amalia M.Kom </h5>
        <p className="card-text text-white">halo bu, selamat siang</p>
        
      </div>
    </div>
  </div>
</div>

<div className="card mb-3 card-chat mx-auto bg-primary" >
        <div className="row g-0">
        <div className="col-md-4">
          <img src="./dosen1.png" classNames="img-fluid  rounded-pill"  width="100px" height="100px"alt="..."/>
        </div>
        <div className="col-md-8">
        <div className="card-body card-chat">
        <h5 className="card-title text-white">Amalia M.Kom </h5>
        <p className="card-text text-white">halo bu, selamat siang</p>
        
      </div>
    </div>
  </div>
</div>


<a href="#" class="btn btn-warning rounded-pill  btn-custom-chat text-white m-cust-rg5">pesan baru</a>
        </section>
       
        </>
        
    );
}; 

export default Chat;  