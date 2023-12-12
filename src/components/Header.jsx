import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="navbar navbar-expand-lg navbar-primary bg-primary p-2 shadow-sm fixed-top"> 
            <a className="navbar-brand text-white fw-bold" href= "/"> EDUVION </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls='navbarNav' aria-expanded="false"
              aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

            <div className="collapse navbar-collapse" id="navbarNav">   
            <ul className="navbar-nav ms-auto">
                <li className="nav-item m-2">
                    <a className="nav-link active text-white" aria-current="page" href="#"> Dahboard</a>
                </li>

                <li className="nav-item m-2">
                    <a className="nav-link text-white" href="#">Kalender </a>
                </li>
                <li className="nav-item m-2">
                    <a className="nav-link text-white" href="#">Bimbingan</a>
                </li>
                <li className="nav-item m-2">
                    <a className="nav-link text-white" href="#">E-Repository</a>
                </li>

                <li className="nav-item m-2">
                    <button type="button" className="btn btn-sm m-2 btn-outline-light" link to="/login"> Login </button>
                </li>
            </ul>
        </div>
        </header>
    );
};

export default Header; 