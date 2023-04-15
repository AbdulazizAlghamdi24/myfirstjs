import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Header from './Component/Header';
import Main from './Component/Main';
import Footer from './Component/Footer';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='App-div'>
        <div className='App-div-two'>
    <Header/>
        <Main/>
        <Footer/>
        </div>
   
    </div>
);


