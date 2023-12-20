import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


const JadwalBimbingan = () => {
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
    <div className="container m-cust-tp3">
    <div className="card mb-3 card-size2a border-cust">
  <div className="row no-gutters">
    <div className="col-md-4 col-sm-12 bg-primary">
      <img src="./gambar8.png"  width="350px" height="700px" class="card-img" alt="..."/>
    </div>
    <div className="col-md-8 col-sm-12 p-5">
      <div className="card-body">

      <table className="table table-stripped">
        <tbody>
            <tr> 
                <td className="table-width" > <b>Tanggal </b> </td>
                <td className="table-width2"> : </td>
                <td className="table-width3"> 20 Desember 2023</td>
            </tr>
            <tr> 
                <td className="table-width" > <b>Tahapan </b></td>
                <td className="table-width2"> : </td>
                <td className="table-width3"> bab 3</td>
            </tr>
            <tr> 
                <td className="table-width" ><b> File  </b></td>
                <td className="table-width2"> : </td>
                <td className="table-width3"> tugasArsitektur-SAP-3-Arsy.DOCX </td>
            </tr>
            <tr> 
                <td className="table-width" >  <b> Status File </b></td>
                <td className="table-width2"> : </td>
                <td className="table-width3"> Revisi</td>
            </tr>
            <tr> 
                <td className="table-width" >  <b> Dosen </b></td>
                <td className="table-width2"> : </td>
                <td className="table-width3"> Wahyu S. Kom </td>
            </tr>
        </tbody>
      </table>
       

       <div className="row position">
        <div className="col-md-3 m-cust-rg2">
      <Link to ="/chat">
        <button className="btn btn-md btn-warning rounded-pill  btn-custom-wd  m-cust-tp2 "type="button">
                    <a className="text-white text-decoration-none"href ="login.jsx" > Chat Dosen </a> </button>
      </Link>   
      </div>
      <div className="col-md-3">
       <Link to ="/createBimbinganmhs">
        <button className="btn btn-md btn-warning rounded-pill  btn-custom-wd  m-cust-tp2 "type="button">
                    <a className="text-white text-decoration-none"href ="login.jsx" > Bimbingan baru </a> </button>
      </Link>
      </div>
      </div>    
        
       
      
       
       
 
 
      </div>
    </div>
  </div>
</div>
</div>
    </section>
        </>

    );

};

export default JadwalBimbingan; 