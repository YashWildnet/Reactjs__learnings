import React,{Component} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from "./home";
import About from "./about";
import ContactUs from "./contactus";

class App extends Component{
  render(){
    return(
      <Router>
        <div className="App">
          <ul className="App-header">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
          <Routes>
            <Route path="/" element={<Home/>}>
            </Route>

            <Route path="/about" element={<About/>}>
            </Route>

            <Route path="/contact" element={<ContactUs/>}>
            </Route>
  
        </Routes>
        </div>
        
      </Router>
    )
  }
}






export default App;
