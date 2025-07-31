import { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Cambiar clase del body al alternar el modo oscuro
  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  return (
    <header className="header">
      <div className="contenedor">
        <h1 className="logo">Geovanny</h1>

        <nav className={`nav ${menuAbierto ? 'activo' : ''}`}>
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="acciones">
          <button
            className="modo-btn"
            onClick={() => setDarkMode(!darkMode)}
            title="Modo oscuro"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>

          <button className="menu-btn" onClick={toggleMenu}>
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
