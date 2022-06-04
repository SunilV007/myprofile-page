import logo from './logo.svg';
import React from 'react';
import Navbar from './component/navbar';
import Profile from './component/profile';
import About from './component/about';
import Footer from './component/footer';
import Info from './component/info';
import Skills from './component/skills';
import Education from './component/education';
import 'materialize-css/dist/css/materialize.min.css';
/*import img from './images/profile.jpeg';
import * as ReactBootStrap from "react-bootstrap";*/

function App() {
  return (
    /*<>
    <div className='app'>
      <img src={img}></img>
    </div>*/
    <>
    
    
    <section>
      <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">

           <Profile/>
          </div>
          <div className="col-sm-9">
           <About/>
           <Info/>
           <Skills/>
           <Education />
           
          </div>
        </div>
      </div>
    </section>
    
    </>    
  );
}

export default App;
