import React from 'react'

//Componets
import Header from "./components/Header";
import Hero from "./components/Hero";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";


const App = () => {
  return (

    <>
      <Header />
      <Hero/>
      <SobreMi/>
      <Proyectos/>
      <Contacto/>
      <Footer/>
    </>
    
  )
}

export default App