import React from 'react';
import Footer from "./Footer";
import Header from './Header';
import Badan from './badan';


const Mainlayout  = ({ children }) => {
    return (
        <>
        <div className="container-fluid">
            <Header />
                </div>
                <div className="col-md-9">
                    {children}
                </div>
                <div className='container-fluid'> 
                    <Badan /> 
                </div>
            <div>
            <Footer />
        </div>
        </>
    );
};

export default Mainlayout;