import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="contenedor-footer">
        <p>© {new Date().getFullYear()} Geovanny Michel. Todos los derechos reservados.</p>
        <div className="redes-footer">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:tuemail@ejemplo.com">Correo</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
