import React from 'react';
import './App.css';
import Cartas from './components/Cartas';



function App(props) {
  return (
        <div className="App">
            <nav class="navbar">
          <div class="logo">
          <img src="https://cdn-icons-png.flaticon.com/128/1046/1046747.png" alt="Icono" />
          </div>
          <ul class="nav-list">
              <li><a href="#">en</a></li>
              <li><a href="#">proceso</a></li>
          </ul>
        </nav>
        <Cartas/>
        <footer className="footer">
          <div className="footer-content">
            <p>© Recetas del Tio Nacho. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
  );
}
export default App;