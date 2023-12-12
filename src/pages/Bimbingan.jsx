
import Footer from "../components/Footer";
import { Link } from 'react-router-dom'; 


const Bimbingan = () => {
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
    <div className="container m-cust-tp3">
    <div className="card mb-3 card-size2 border-cust">
  <div className="row no-gutters">
    <div className="col-md-4 col-sm-12 bg-primary">
      <img src="./gambar8.png"  width="400px" height="500px" class="card-img" alt="..."/>
    </div>
    <div className="col-md-8 col-sm-12 p-5">
      <div className="card-body justify-content-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="57" viewBox="0 0 50 57" fill="none" className="margin-custom-lf4 m-cust-tp">
<path d="M22.1151 0C21.6871 0 21.4018 0.285357 21.1877 0.642053L0.214018 49.224C0.0713392 49.5807 0 50.1514 0 50.5795V56.358C0 56.7146 0.285357 57 0.642053 57H49.224C49.5807 57 49.8661 56.7146 49.8661 56.358V50.5795C49.8661 50.2228 49.7947 49.5807 49.6521 49.224L28.6784 0.642053C28.5357 0.285357 28.179 0 27.7509 0H21.9725L22.1151 0ZM21.4731 21.4018H28.607V35.6696H21.4731V21.4018ZM21.4731 42.8035H28.607V49.9374H21.4731V42.8035Z" fill="black" fill-opacity="0.75"/>
</svg>
        <h5 className="card-title text-center m-cust-tp2">Belum ada Bimbingan</h5>
 
 <Link to ="/createBimbinganmhs">
        <button className="btn btn-md btn-warning rounded-pill  btn-custom-wd margin-custom-lf3 m-cust-tp2 "type="button">
                    <a className="text-white text-decoration-none"href ="login.jsx" > Buat bimbingan </a> </button>
      </Link>     
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

export default Bimbingan;  