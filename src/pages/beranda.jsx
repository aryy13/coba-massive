import React from "react";
import { Link } from 'react-router-dom'; 
import Footer from "../components/Footer";
import Header from "../components/Header";

const Beranda = () => {
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

            <Link to="/">
                <li className="nav-item m-2">
                    <a className="nav-link active text-white" aria-current="page" > Dahboard</a>
                </li> </Link>
                
                <Link to="/Kalender">
                <li className="nav-item m-2">
                    <a className="nav-link text-white" href="#">Kalender </a>
                </li> </Link>

                <Link to="/Bimbingan">
                <li className="nav-item m-2">
                    <a className="nav-link text-white" href="#">Bimbingan</a>
                </li></Link>

                <Link to="/Repository">
                <li className="nav-item m-2">
                    <a className="nav-link text-white" href="#">E-Repository</a>
                </li> </Link>


                <Link to="/Signin">
                <li className="nav-item m-2">
                    <button type="button" className="btn btn-sm m-2 btn-outline-light" link to="/login"> Login </button>
                </li> </Link>
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

<svg xmlns="http://www.w3.org/2000/svg" width="1512" height="200" viewBox="0 0 1512 200" fill="none" className="margin-custom-tp">
<path d="M409.771 0C127.001 0.000407852 0 174.02 0 174.02V960H1513V32.0707C1513 32.0707 1331.38 178.219 1081.21 147.733C798.816 113.318 685.953 -0.00039835 409.771 0Z" fill="white"/>
</svg>
            <div className="col p-5 margin-custom-tp3">
                <h1 className="text-white fs-custom margin-custom-lf"> Mulai Langkah Pertamamu </h1>
                <p className="margin-custom-lf text-white"> untuk digitalisasi pendidikan yang lebih baik </p>
     
                <button className="btn btn-md btn-warning rounded-pill  btn-custom-wd mx-custom "type="button">
                    <a className="text-white text-decoration-none"href ="login.jsx" > Mulai </a> </button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-qr-code-scan" viewBox="0 0 16 16">
                <path
                  d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5M.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5M4 4h1v1H4z"
                />
                <path d="M7 2H2v5h5zM3 3h3v3H3zm2 8H4v1h1z" />
                <path d="M7 9H2v5h5zm-4 1h3v3H3zm8-6h1v1h-1z" />
                <path d="M9 2h5v5H9zm1 1v3h3V3zM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8zm2 2H9V9h1zm4 2h-1v1h-2v1h3zm-4 2v-1H8v1z" />
                <path d="M12 9h2V8h-2z" />
              </svg> 
            </div>
           
            <div className="col  p-5 m-cust-rg margin-custom-tp2">
                <img src="./gambar1.png" width="480px" height="450px" alt="gambar" /> 
                </div> 
               </div>


               
        </section>


<section> 
  <div className="container">
    <div className="row">   
      <div class="col-md-5 col-sm-12">
        <h1 className="margin-custom-lf2 m-cust-tp fs-custom"> Tentang Kami </h1>
        <p className="margin-custom-lf2"> Eduvion hadir sebagai sarana bagi para 
          mahasiswa dan juga dosen pembimbing 
          untuk mengelola, dan melakukan bimbingan. 
          Semuanya secara online!</p>
          </div> 
<div class="col-md-4 col-sm-12 margin-custom-lf2 m-cust-tp2 m-cust-rg">
<img src="./gambar5.jpeg" alt="gambar 2" width="450px" height="450px" /> 
</div>
<svg xmlns="http://www.w3.org/2000/svg" width="1512" height="500" viewBox="0 0 1512 500" fill="none" className="margin-custom-tp4">
<path d="M0 306C0 306 240.886 90.3501 432.781 90.3501C655.414 90.3501 1013.73 249.43 1185.54 209.65C1357.35 169.869 1512 1 1512 1" stroke="#1A8AFF" stroke-opacity="0.25" stroke-width="2" stroke-linecap="round"/>
</svg>      
    </div>
  </div>
</section>

<section> 
  <div className="container">
    <div className="row">
      <h1 className="fs-custom text-center margin-custom-tp">Fitur Kami </h1>
      <div className="col-md-4 col-sm-12 margin-custom-tp4">
        <img src="./gambar4.png" alt="gambar 3" width="450px" height="450px" />
        </div>  
       <div className="col-md-4 col-sm-12 m-cust-tp4 margin-custom-lf3 " >
       <div class="card rounded-cust card-size shadow-cust">
      <div class="card-body bg-primary rounded-cust card-size p-5 shadow-cust" >
        <h3 class="card-title text-white">Kalender</h3>
        <p class="card-text text-white">Berisi Informasi mengenai jadwal bimbingan yang akan mendatang dan  membuat jadwal bimbingan baru</p>
        <a href="#" class="btn btn-warning rounded-pill  btn-custom-wd text-white ">Selengkapnya</a>
      </div>
    </div>
       </div>
      </div>
    </div>
</section>

<section> 
  <div className="container">
    <div className="row m-cust-tp3">
      <div className="col-md-4 col-sm-12 margin-custom-tp4">
        <img src="./gambar6.png" alt="gambar 4" width="450px" height="450px" />
        </div>  
       <div className="col-md-4 col-sm-6 m-cust-tp4 margin-custom-lf3 " >
       <div class="card rounded-cust card-size shadow-cust">
      <div class="card-body bg-primary rounded-cust card-size p-5 shadow-cust" >
        <h3 class="card-title text-white">Bimbingan Online</h3>
        <p class="card-text text-white">Proses pengerjaan skripsi yang dilakukan oleh mahasiswa dan didampingi oleh dosen pembimbing.</p>
        <a href="#" class="btn btn-warning rounded-pill  btn-custom-wd text-white ">Selengkapnya</a>
      </div>
    </div>
       </div>
      </div>
    </div>
</section>

<section> 
  <div className="container">
    <div className="row m-cust-tp3">
      <div className="col-md-4 col-sm-12 margin-custom-tp4">
        <img src="./gambar7.png" alt="gambar 5" width="450px" height="450px" />
        </div>  
       <div className="col-md-4 col-sm-6 m-cust-tp4 margin-custom-lf3 " >
       <div class="card rounded-cust card-size shadow-cust">
      <div class="card-body bg-primary rounded-cust card-size p-5 shadow-cust" >
        <h3 class="card-title text-white">E-Repository</h3>
        <p class="card-text text-white">Kumpulan Artikel dan Jurnal 
yang dapat diakses secara online
dalam format PDF oleh pengguna</p>
        <a href="#" class="btn btn-warning rounded-pill  btn-custom-wd text-white ">Selengkapnya</a>
      </div>
    </div>
       </div>
      </div>
    </div>
</section>
    <Footer /> 
    </> 
    );
};

export default Beranda; 