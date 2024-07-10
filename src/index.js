import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './componant/Header/Header';
import Body from './componant/Body/Main';
import Footer from './componant/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Body />
    <Footer />
  </React.StrictMode>
);

