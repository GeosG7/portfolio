import './contacto.css';
import { useRef, useEffect } from 'react';

function Contacto() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add('visible');
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section id="contacto" className="contacto oculto" ref={sectionRef}>
      <div className="contenedor-contacto">
        <h2>Contáctame</h2>
        <p>¿Tienes alguna pregunta o propuesta? ¡Estoy abierto a colaborar y aprender!</p>

        <form className="formulario">
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu correo" required />
          <textarea placeholder="Tu mensaje" required></textarea>
          <button type="submit">Enviar</button>
        </form>

        <div className="redes">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:tuemail@ejemplo.com">Correo</a>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
