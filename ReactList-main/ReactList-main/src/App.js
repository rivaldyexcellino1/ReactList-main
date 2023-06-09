// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React from "react";
import Utama from "./Components/utama";
import { Link } from "react-router-dom";
import './App.css'

class App extends React.Component {
  render(){
    return (
      <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/beranda">
          <img src="/image/bintang.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
            Stars
          </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link to="/" class="nav-link active">Beranda</Link> 
                  </li>
                  <li class="nav-item">
                    <Link to="/tentangsaya" class="nav-link active" aria-current="page" >Tentang Saya</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/karya" class="nav-link active" aria-current="page" >Karya</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/kontak" class="nav-link active" aria-current="page" >Kontak</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/Gallery" class="nav-link active" aria-current="page" >Gallery</Link>
                  </li>
                </ul>
              </div>
          </div>
      </nav>
          <p><Utama /></p>
  </div>      
    );
  }
}

export default App;
