import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Repository = () => {
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
                    <a className="nav-link  text-white" href="#">Bimbingan</a>
                </li> </Link>
                <Link to="/Repository">
                <li className="nav-item m-2">
                    <a className="nav-link text-white active" href="#">E-Repository</a>
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


        <section className="bg-primary full-page"> 
         <div className="row">
         <svg xmlns="http://www.w3.org/2000/svg" width="1512" height="600" viewBox="0 0 1512 600" fill="none">
         <path d="M1118.92 368.228C766.824 139.387 626.365 -48.9833 0 11.3959V701.57C280.273 831.345 902.462 647.878 902.462 647.878C902.462 647.878 1263.64 564.399 1512 386.126L1512 265C1382 368.228 1300.17 433.064 1118.92 368.228Z" fill="#1A8AFF"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="700" height="150" viewBox="0 0 1512 150" fill="none">
       <path d="M1 307C1 307 241.727 91.3501 433.495 91.3501C655.98 91.3501 1014.06 250.43 1185.75 210.65C1357.45 170.869 1512 2 1512 2" stroke="#F8F7F6" stroke-opacity="0.25" stroke-width="4" stroke-linecap="round"/>
       </svg>
            <div className="col-md-6 col-sm-6 p-5 margin-custom-tp3">
                <h1 className="text-white fs-custom margin-custom-lf">E-Repository </h1>
                <p className="margin-custom-lf text-white"> Situs utama yang menyajikan beberapa terbitan jurnal ilmiah yang diberikan oleh Perguruan Tinggi kepada anggota
                 komunitasnya untuk mengelola dan menyebarluaskan bahan-bahan digital. </p>

                 <p className="margin-custom-lf text-white"> Situs utama yang menyajikan beberapa terbitan jurnal ilmiah yang diberikan oleh Perguruan Tinggi kepada anggota
                 komunitasnya untuk mengelola dan menyebarluaskan bahan-bahan digital. </p>
             
            </div>
           
            <div className="col-md-2 col-sm-12  p-5 m-cust-rg margin-custom-tp2">
                <img src="./gambar1.png" width="480px" height="450px" alt="gambar" /> 
                </div> 
               </div>            
       </section>

<section>
      
      <div className="box margin-custom-tp5 mx-auto">
        <div className="row">
            <div className="col-md-4 col-sm-3">
        <h2>topik pembahasan </h2>
        </div>
        </div>

        <div className="row m-cust-tp2">


    <div className="col-md-6 col-sm-3">
    <div className="card mb-3 card-size5">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="./buku1.png" className="img-fluid rounded-start m-4" width="100px" height="150px" alt="..." />
    </div>
    <div className="col-md-8 col-sm-3">
      <div className="card-body">
        <h5 className="card-title">Jurnal teknologi terpadu</h5>
        <p className="card-text">Jurnal Informatika Terpadu memuat jurnal ilmiah di bidang 
Ilmu Komputer, Sistem Informasi dan Teknik Informatika</p>
<a href="#" class="btn btn-warning rounded-pill  btn-custom-wd text-white ">Selengkapnya</a>
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
        <p className="card-text">Jurnal Informatika Terpadu memuat jurnal ilmiah di bidang 
Ilmu Komputer, Sistem Informasi dan Teknik Informatika</p>
<a href="#" class="btn btn-warning rounded-pill  btn-custom-wd text-white ">Selengkapnya</a>
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
        <p className="card-text">Jurnal Informatika Terpadu memuat jurnal ilmiah di bidang 
Ilmu Komputer, Sistem Informasi dan Teknik Informatika</p>
<a href="#" class="btn btn-warning rounded-pill  btn-custom-wd text-white ">Selengkapnya</a>
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
        <p className="card-text">Jurnal Informatika Terpadu memuat jurnal ilmiah di bidang 
Ilmu Komputer, Sistem Informasi dan Teknik Informatika</p>
<a href="#" class="btn btn-warning rounded-pill  btn-custom-wd text-white ">Selengkapnya</a>
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
        <Footer/> 
    </div>
</section>
        </>
    );
}; 

export default Repository;  