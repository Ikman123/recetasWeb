import React from 'react';
import './App.css';
import Cartas from './components/Cartas';



function App(props) {
  return (
        <div className="App">
            <nav class="navbar">
          <div class="logo">
            <img src={props.iconUrl} alt='' />
          </div>
          <ul class="nav-list">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
        <Cartas/>
        <footer className="footer">
          <div className="footer-content">
            <p>© 2023 Mi Empresa. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
  );
}
export default App;