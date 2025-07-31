import './SobreMi.css';
import { useEffect, useRef } from 'react';

function SobreMi() {
  const sectionRef = useRef(null);

  // Efecto scroll reveal simple
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          sectionRef.current.classList.add('visible');
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section id="sobre-mi" className="sobre-mi oculto" ref={sectionRef}>
      <div className="contenedor-sobre-mi">
        <h2>Sobre mí</h2>
        <p>
         Soy Ingeniero en Sistemas Computacionales con gran interés en el desarrollo frontend.
        Me estoy formando de manera autodidacta con enfoque en tecnologías fundamentales como HTML, CSS, JavaScript y React.
        Tengo experiencia construyendo proyectos prácticos, profesionales y bien estructurados, con buenas prácticas de desarrollo, diseño responsivo y control de versiones con Git.
        </p>
        <p>
          Estoy construyendo este portafolio para mostrar mi evolución como desarrollador, y me emociona todo lo que viene en este camino.
        </p>

       
      </div>
    </section>
  );
}

export default SobreMi;
