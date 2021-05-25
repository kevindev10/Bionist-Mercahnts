import React from 'react';
import './App.css';
import 'tachyons';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import NavbarTop from  './components/NavbarTop/NavbarTop'; 
import NavbarMiddle from './components/NavbarMiddle/NavbarMiddle';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'; 
import About from './components/About/About'; 
import Contact from './components/Contact/Contact'; 
import CleanWater from './components/CleanWater/CleanWater';
import Gallery from './components/Gallery/Gallery';
import Team from './components/Team/Team';



function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
        <NavbarTop/>
        <NavbarMiddle/>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
           <Route path='/about'>
            <About/>
          </Route>
           <Route path ='/contact'>
            <Contact/>
          </Route>
          <Route path ='/clean-water'>
            <CleanWater/>
          </Route>
          <Route path ='/gallery'>
            <Gallery/>
          </Route>
          <Route path ='/team'>
            <Team/>
          </Route>

        </Switch>
    </BrowserRouter>
  );
}

export default App;
