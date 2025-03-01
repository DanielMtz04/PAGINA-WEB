import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import oxxoLogo from "./oxxo-logo.png";
import introImg from "./intro.png";
import empresaImg from "./empresa.png";
import tamanioImg from "./tamanio.png";
import misionImg from "./mision.png";
import historiaImg from "./historia.png";
import organigramaImg from "./organigrama.png";
import puestosImg from "./puestos.png";

const Home = () => (
  <div className="home">
    <img src={oxxoLogo} alt="OXXO Logo" className="logo" />
    <div className="card">
      <h1>Índice</h1>
      <ul>
        <li>
          <Link to="/introduccion">Introducción</Link>
        </li>
        <li>
          <Link to="/empresa">Nombre y Giro</Link>
        </li>
        <li>
          <Link to="/tamanio">Tamaño de la Empresa</Link>
        </li>
        <li>
          <Link to="/mision">Misión</Link>
        </li>
        <li>
          <Link to="/vision">Visión</Link>
        </li>
        <li>
          <Link to="/historia">Historia</Link>
        </li>
        <li>
          <Link to="/organigrama">Organigrama</Link>
        </li>
        <li>
          <Link to="/puestos">Descripción de Puestos</Link>
        </li>
        <li>
          <Link to="/valores">Valores de la UANL</Link>
        </li>
        <li>
          <Link to="/alumno">Alumno</Link>
        </li>
      </ul>
    </div>
  </div>
);

const Page = ({ title, content, image }) => (
  <div className="page">
    <img src={oxxoLogo} alt="OXXO Logo" className="logo" />
    <div className="card">
      <h1>{title}</h1>
      {image && <img src={image} alt={title} className="page-image" />}
      <p>{content}</p>
      <Link className="back-button" to="/">
        Volver al Índice
      </Link>
    </div>
  </div>
);

const Alumno = () => (
  <Page title="Alumno" content="Diego Emiliano Castillo Martínez" />
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/introduccion"
        element={
          <Page
            title="Introducción"
            content={
              <>
                <p>
                  Este documento presenta un análisis completo de OXXO,
                  incluyendo su historia, estructura organizativa y valores
                  corporativos.
                </p>
                <Link to="/alumno">Creado por</Link>
              </>
            }
            image={introImg}
          />
        }
      />
      <Route
        path="/empresa"
        element={
          <Page
            title="Nombre y Giro"
            content="OXXO es una cadena de tiendas de conveniencia operada por FEMSA, especializada en la venta de productos de consumo rápido."
            image={empresaImg}
          />
        }
      />
      <Route
        path="/tamanio"
        element={
          <Page
            title="Tamaño de la Empresa"
            content="OXXO cuenta con más de 20,000 tiendas en México y América Latina, generando miles de empleos y sirviendo a millones de clientes diariamente."
            image={tamanioImg}
          />
        }
      />
      <Route
        path="/mision"
        element={
          <Page
            title="Misión"
            content="Nuestra misión es brindar una experiencia de compra rápida, accesible y conveniente a nuestros clientes, ofreciendo productos y servicios de alta calidad."
            image={misionImg}
          />
        }
      />
      <Route
        path="/vision"
        element={
          <Page
            title="Visión"
            content="Ser la cadena de tiendas de conveniencia líder en América Latina con innovación constante como Smart OXXO para mejorar la experiencia del cliente y optimizar operaciones."
            image={puestosImg}
          />
        }
      />
      <Route
        path="/historia"
        element={
          <Page
            title="Historia"
            content="OXXO fue fundado en 1978 en Monterrey, México. Desde entonces, ha experimentado un crecimiento exponencial, consolidándose como la principal cadena de tiendas de conveniencia en el país y expandiéndose a otras regiones."
            image={historiaImg}
          />
        }
      />
      <Route
        path="/organigrama"
        element={
          <Page
            title="Organigrama"
            content="Estructura organizativa de OXXO incluyendo áreas clave como Recursos Humanos, Finanzas, Marketing, Producción y Tecnología de Información."
            image={organigramaImg}
          />
        }
      />
      <Route
        path="/puestos"
        element={
          <Page
            title="Descripción de Puestos"
            content="Diferentes roles en OXXO."
            image={puestosImg}
          />
        }
      />
      <Route
        path="/valores"
        element={
          <Page
            title="Valores de la UANL"
            content="Responsabilidad, Honestidad, Respeto, Solidaridad, Compromiso con la sociedad."
            image={misionImg}
          />
        }
      />
      <Route path="/alumno" element={<Alumno />} />
    </Routes>
  </Router>
);

export default App;
