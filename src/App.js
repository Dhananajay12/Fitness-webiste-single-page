
import React from 'react';
import Aboutus from './Components/Aboutus';
import Contact from './Components/Contact';
import Fetures from './Components/Fetures';
import Home from './Components/Home';
import Navbars from './Components/Navbars';
import Offer from './Components/Offer';

function App() {
  return (
    <div className="App" >
      <Navbars/>
      <Home/>
      <Fetures></Fetures>
      <Offer></Offer>
      <Aboutus/>
      <Contact/>

    </div>
  );
}

export default App;
