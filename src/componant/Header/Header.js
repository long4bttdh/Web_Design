import React from 'react';
import Logo from '../../Img/Logo.jpg';
import './Header.css'


function App() {
  return (
    <div>
      <div id='head' style={{ backgroundColor: '#fff', padding: '10px 0', borderBottom: '1px solid #ccc' }}>
        <img  
          src={Logo}
          className="d-inline-block align-top ml-3"
          alt="Logo"
          style={{ height: '50px', margin: '40px' }} 

        />
        <ul className="nav_list" style={{ display: 'inline-block', marginLeft: '20px', verticalAlign: 'middle', textAlign: 'center' }}>
          <li style={{ display: 'inline-block', margin: '0 10px' }}><a href="#" className="nav_link" style={{ fontSize: '20px' }}>Blog</a></li>
          <li style={{ display: 'inline-block', margin: '0 10px' }}><a href="#band" className="nav_link" style={{ fontSize: '20px' }}>about</a></li>
          <li style={{ display: 'inline-block', margin: '0 10px' }}><a href="#tour" className="nav_link" style={{ fontSize: '20px' }}>links</a></li>
          <li style={{ display: 'inline-block', margin: '0 10px' }}><a href="#contact" className="nav_link" style={{ fontSize: '20px' }}>Projects</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
