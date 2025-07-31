import './proyectos.css';
import { useEffect, useRef } from 'react';

const proyectos = [
  {
    titulo: 'Calculadora Científica',
    descripcion: 'Hecha con HTML, CSS y JS puro. Incluye operaciones avanzadas.',
    enlace: '#',
  },
  {
    titulo: 'Mini Red Social',
    descripcion: 'Una app de publicación y búsqueda de trabajadores con React.',
    enlace: '#',
  },
  {
    titulo: 'Tienda Online',
    descripcion: 'Frontend de ecommerce minimalista responsivo.',
    enlace: '#',
  },
  {
    titulo: 'Portafolio Clásico',
    descripcion: 'Mi primer portafolio hecho sin frameworks.',
    enlace: '#',
  },
  {
    titulo: 'Blog Personal',
    descripcion: 'Diseño limpio para blog hecho con React y Markdown.',
    enlace: '#',
  },

  {
    titulo: 'Calculadora Científica',
    descripcion: 'Hecha con HTML, CSS y JS puro. Incluye operaciones avanzadas.',
    enlace: '#',
  },
  {
    titulo: 'Mini Red Social',
    descripcion: 'Una app de publicación y búsqueda de trabajadores con React.',
    enlace: '#',
  },
  {
    titulo: 'Tienda Online',
    descripcion: 'Frontend de ecommerce minimalista responsivo.',
    enlace: '#',
  },
  {
    titulo: 'Portafolio Clásico',
    descripcion: 'Mi primer portafolio hecho sin frameworks.',
    enlace: '#',
  },
  {
    titulo: 'Blog Personal',
    descripcion: 'Diseño limpio para blog hecho con React y Markdown.',
    enlace: '#',
  },
];

function Proyectos() {
  const sectionRef = useRef(null);
  const carruselRef = useRef(null);

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

  const scrollIzquierda = () => {
    carruselRef.current.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  };

  const scrollDerecha = () => {
    carruselRef.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  };

  return (
    <section id="proyectos" className="proyectos oculto" ref={sectionRef}>
      <div className="contenedor-proyectos">
        <h2>Mis Proyectos</h2>

        <div className="carrusel-contenedor">
          <button className="btn-carrusel izquierda" onClick={scrollIzquierda}>
            ◀
          </button>

          <div className="carrusel" ref={carruselRef}>
            {proyectos.map((proyecto, index) => (
              <div className="proyecto-card" key={index}>
                <h3>{proyecto.titulo}</h3>
                <p>{proyecto.descripcion}</p>
                <a href={proyecto.enlace} target="_blank" rel="noopener noreferrer">
                  Ver más →
                </a>
              </div>
            ))}
          </div>

          <button className="btn-carrusel derecha" onClick={scrollDerecha}>
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}

export default Proyectos;
