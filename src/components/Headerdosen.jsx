import React from 'react';
import { Link } from 'react-router-dom';

const Headerdosen = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-primary bg-primary p-2 shadow-sm fixed-top">
      <a className="ms-5 navbar-brand text-white fw-bold" href="/">
        {' '}
        EDUVION{' '}
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse me-3" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <Link to="/DosenBeranda">
            <li className="nav-item m-2">
              <a className="nav-link   text-white" href="#">
                Dashboard{' '}
              </a>
            </li>
          </Link>

          <Link to="/KalenderDosen">
            <li className="nav-item m-2">
              <a className="nav-link   text-white" href="#">
                Kalender{' '}
              </a>
            </li>
          </Link>

          <Link to="/Bimdosen">
            <li className="nav-item m-2">
              <a className="nav-link text-white" href="#">
                Bimbingan
              </a>
            </li>{' '}
          </Link>
          <Link to="/Jurnaldosen">
            <li className="nav-item m-2">
              <a className="nav-link text-white" href="#">
                E-Repository
              </a>
            </li>
          </Link>
          <Link to="/Profile">
            <li className="nav-item m-2">
              <button type="button" className="btn btn-sm m-2 btn-outline-light" link to="/Profile">
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
  );
};

export default Headerdosen;
