import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import "./App.css";

// Imágenes base (ya existentes)
import oxxoLogo from "./oxxo-logo.png";
import introImg from "./intro.png";
import empresaImg from "./empresa.png";
import tamanioImg from "./tamanio.png";
import misionImg from "./mision.png";
import historiaImg from "./historia.png";
import antImg from "./antecedentes.png";
import organigramaImg from "./organigrama.png";
import puestosImg from "./puestos.png";

// Imágenes nuevas (ejemplo) para cada área del organigrama
import recursosHumanosImg from "./recursosHumanos.png";
import finanzasImg from "./finanzas.png";
import tiImg from "./ti.png";
import marketingImg from "./marketing.png";
import produccionImg from "./produccion.png";
import legalImg from "./legal.png";
import expansionImg from "./expansion.png";

// ---------------------------------------------------------------------------
// Componente genérico Page para mostrar cualquier sección en formato de 'card'
// ---------------------------------------------------------------------------
const Page = ({ title, content, image }) => {
  // Hook para la ubicación actual, para determinar la ruta "anterior".
  const location = useLocation();
  // Dividimos la ruta en segmentos.
  const paths = location.pathname.split("/").filter(Boolean);
  // Si hay más de 1 segmento, quitamos el último para volver a la ruta anterior.
  // Si solo hay 1 segmento, volvemos al inicio.
  const backLink = paths.length > 1 ? `/${paths.slice(0, -1).join("/")}` : "/";

  return (
    <div className="page">
      <img src={oxxoLogo} alt="OXXO Logo" className="logo" />
      <div className="card">
        <h1>{title}</h1>
        {image && <img src={image} alt={title} className="page-image" />}
        <p>{content}</p>
        {/* Botón para regresar dinámicamente según la lógica explicada */}
        <Link className="back-button" to={backLink}>
          Volver
        </Link>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// HOME
// ---------------------------------------------------------------------------
const Home = () => (
  <div className="home">
    <img src={oxxoLogo} alt="OXXO Logo" className="logo" />
    <div className="card">
      <h1>Índice</h1>
      <ul>
        <li>
          <Link to="/inicio">Inicio</Link>
        </li>
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
          <Link to="/antecedentes">Antecedentes Históricos</Link>
        </li>
        <li>
          <Link to="/organigrama">Organigrama</Link>
        </li>
        <li>
          <Link to="/valores">Valores de la UANL</Link>
        </li>
        <li>
          <Link to="/conclusion">Conclusión</Link>
        </li>
        <li>
          <Link to="/alumno">Alumno</Link>
        </li>
      </ul>
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// SECCIONES ORIGINALES (Inicio, Introducción, etc.)
// ---------------------------------------------------------------------------

// (Puedes reacomodar este “Inicio” si así lo deseas)
const Inicio = () => (
  <Page
    title="Inicio"
    content="Bienvenido al análisis de OXXO."
    image={introImg}
  />
);

const Alumno = () => (
  <Page title="Alumno" content="Diego Emiliano Castillo Martínez" />
);

const Conclusion = () => (
  <Page
    title="Conclusión"
    content="Este documento ha presentado un análisis completo sobre OXXO y su impacto en el mercado."
    image={introImg}
  />
);

// Introducción
const Introduccion = () => (
  <Page
    title="Introducción"
    content={
      <>
        <p>
          Este documento presenta un análisis completo de OXXO, incluyendo su
          historia, estructura organizativa y valores corporativos.
        </p>
        <Link to="/alumno">Creado por</Link>
      </>
    }
    image={introImg}
  />
);

// Empresa
const Empresa = () => (
  <Page
    title="Nombre y Giro"
    content="OXXO es una cadena de tiendas de conveniencia operada por FEMSA, especializada en la venta de productos de consumo rápido."
    image={empresaImg}
  />
);

// Tamaño de la Empresa
const Tamanio = () => (
  <Page
    title="Tamaño de la Empresa"
    content="OXXO cuenta con más de 20,000 tiendas en México y América Latina, generando miles de empleos y sirviendo a millones de clientes diariamente."
    image={tamanioImg}
  />
);

// Misión
const Mision = () => (
  <Page
    title="Misión"
    content="Nuestra misión es brindar una experiencia de compra rápida, accesible y conveniente a nuestros clientes, ofreciendo productos y servicios de alta calidad."
    image={misionImg}
  />
);

// Visión
const Vision = () => (
  <Page
    title="Visión"
    content="Ser la cadena de tiendas de conveniencia líder en América Latina con innovación constante como Smart OXXO para mejorar la experiencia del cliente y optimizar operaciones."
    image={puestosImg}
  />
);

// Historia
const Historia = () => (
  <Page
    title="Historia"
    content="OXXO fue fundado en 1978 en Monterrey, México. Desde entonces, ha experimentado un crecimiento exponencial, consolidándose como la principal cadena de tiendas de conveniencia en el país y expandiéndose a otras regiones."
    image={historiaImg}
  />
);

// Nueva sección de antecedentes históricos
const Antecedentes = () => (
  <Page
    title="Antecedentes Históricos"
    content="OXXO inició vendiendo botanas y cerveza, se expandió sumando servicios financieros y digitales, y hoy es la mayor cadena de conveniencia en Latinoamérica."
    image={antImg}
  />
);

// ---------------------------------------------------------------------------
// ORGANIGRAMA - MENÚ PRINCIPAL DE ÁREAS
// ---------------------------------------------------------------------------
const Organigrama = () => (
  <Page
    title="Organigrama"
    content={
      <>
        <p>
          Áreas Corporativas de Soporte en OXXO (Aplica para todas las unidades
          de negocio). Selecciona un área para más detalles.
        </p>
        <ul>
          <li>
            <Link to="/organigrama/recursos-humanos">
              Recursos Humanos en OXXO
            </Link>
          </li>
          <li>
            <Link to="/organigrama/finanzas">
              Finanzas y Administración en OXXO
            </Link>
          </li>
          <li>
            <Link to="/organigrama/tecnologia">
              Tecnología de la Información en OXXO
            </Link>
          </li>
          <li>
            <Link to="/organigrama/marketing">Marketing en OXXO</Link>
          </li>
          <li>
            <Link to="/organigrama/produccion">Producción en OXXO</Link>
          </li>
          <li>
            <Link to="/organigrama/legal">Legal y Regulación en OXXO</Link>
          </li>
          <li>
            <Link to="/organigrama/expansion">
              Expansión y Desarrollo Inmobiliario en OXXO
            </Link>
          </li>
        </ul>
      </>
    }
    image={organigramaImg}
  />
);

// ---------------------------------------------------------------------------
// CADA ÁREA DEL ORGANIGRAMA - SUBMENÚ CON SUS FUNCIONES
// ---------------------------------------------------------------------------
// Recursos Humanos
const OrganigramaRecursosHumanos = () => (
  <Page
    title="Recursos Humanos en OXXO"
    image={recursosHumanosImg}
    content={
      <>
        <p>
          Área responsable de Reclutamiento, Capacitación, Cultura
          Organizacional, Evaluación del Desempeño y Gestión del Talento.
        </p>
        <ul>
          <li>
            <Link to="/organigrama/recursos-humanos/reclutamiento">
              Reclutamiento
            </Link>
          </li>
          <li>
            <Link to="/organigrama/recursos-humanos/capacitacion">
              Capacitación
            </Link>
          </li>
          <li>
            <Link to="/organigrama/recursos-humanos/cultura">
              Cultura Organizacional
            </Link>
          </li>
          <li>
            <Link to="/organigrama/recursos-humanos/evaluacion">
              Evaluación del Desempeño
            </Link>
          </li>
          <li>
            <Link to="/organigrama/recursos-humanos/talento">
              Gestión del Talento
            </Link>
          </li>
        </ul>
      </>
    }
  />
);

// Subpáginas de Recursos Humanos
const Reclutamiento = () => (
  <Page
    title="Reclutamiento"
    content="Proceso de búsqueda, selección e incorporación de talento para OXXO."
  />
);
const Capacitacion = () => (
  <Page
    title="Capacitación"
    content="Formación continua para el personal de OXXO, impulsando su desarrollo."
  />
);
const Cultura = () => (
  <Page
    title="Cultura Organizacional"
    content="Fomenta valores y prácticas que promueven el compañerismo y la excelencia."
  />
);
const Evaluacion = () => (
  <Page
    title="Evaluación del Desempeño"
    content="Monitoreo y retroalimentación del desempeño del personal."
  />
);
const Talento = () => (
  <Page
    title="Gestión del Talento"
    content="Planes de carrera, identificación de alto potencial y sucesión."
  />
);

// -------------------------------------------------------------
// Finanzas y Administración
// -------------------------------------------------------------
const OrganigramaFinanzas = () => (
  <Page
    title="Finanzas y Administración en OXXO"
    image={finanzasImg}
    content={
      <>
        <p>
          Área encargada de la Tesorería, Contabilidad, Planeación Financiera,
          Auditoría Interna y Control Presupuestal.
        </p>
        <ul>
          <li>
            <Link to="/organigrama/finanzas/tesoreria">Tesorería</Link>
          </li>
          <li>
            <Link to="/organigrama/finanzas/contabilidad">Contabilidad</Link>
          </li>
          <li>
            <Link to="/organigrama/finanzas/planeacion">
              Planeación Financiera
            </Link>
          </li>
          <li>
            <Link to="/organigrama/finanzas/auditoria">Auditoría Interna</Link>
          </li>
          <li>
            <Link to="/organigrama/finanzas/control">Control Presupuestal</Link>
          </li>
        </ul>
      </>
    }
  />
);
// Subpáginas de Finanzas y Administración
const Tesoreria = () => (
  <Page
    title="Tesorería"
    content="Gestión de flujo de efectivo, inversiones y relaciones bancarias."
  />
);
const Contabilidad = () => (
  <Page
    title="Contabilidad"
    content="Registra y analiza las transacciones financieras de la empresa."
  />
);
const Planeacion = () => (
  <Page
    title="Planeación Financiera"
    content="Proyecciones y estrategias para asegurar la rentabilidad y el crecimiento."
  />
);
const Auditoria = () => (
  <Page
    title="Auditoría Interna"
    content="Verifica el cumplimiento de políticas y la integridad de los procesos."
  />
);
const Control = () => (
  <Page
    title="Control Presupuestal"
    content="Monitoreo y ajuste de los presupuestos para optimizar los recursos."
  />
);

// -------------------------------------------------------------
// Tecnología de la Información
// -------------------------------------------------------------
const OrganigramaTI = () => (
  <Page
    title="Tecnología de la Información en OXXO"
    image={tiImg}
    content={
      <>
        <p>
          Involucra Sistemas, Ciberseguridad, Infraestructura, Desarrollo de
          Software y Soporte Técnico.
        </p>
        <ul>
          <li>
            <Link to="/organigrama/tecnologia/sistemas">Sistemas</Link>
          </li>
          <li>
            <Link to="/organigrama/tecnologia/ciberseguridad">
              Ciberseguridad
            </Link>
          </li>
          <li>
            <Link to="/organigrama/tecnologia/infraestructura">
              Infraestructura
            </Link>
          </li>
          <li>
            <Link to="/organigrama/tecnologia/software">
              Desarrollo de Software
            </Link>
          </li>
          <li>
            <Link to="/organigrama/tecnologia/soporte">Soporte Técnico</Link>
          </li>
        </ul>
      </>
    }
  />
);
// Subpáginas TI
const Sistemas = () => (
  <Page
    title="Sistemas"
    content="Administración de plataformas tecnológicas y soluciones informáticas."
  />
);
const Ciberseguridad = () => (
  <Page
    title="Ciberseguridad"
    content="Protección de los sistemas y datos frente a amenazas digitales."
  />
);
const Infraestructura = () => (
  <Page
    title="Infraestructura"
    content="Gestión de servidores, redes y hardware para asegurar la operación."
  />
);
const Software = () => (
  <Page
    title="Desarrollo de Software"
    content="Creación y mantenimiento de aplicaciones internas y externas."
  />
);
const Soporte = () => (
  <Page
    title="Soporte Técnico"
    content="Asistencia y resolución de incidencias tecnológicas a usuarios finales."
  />
);

// -------------------------------------------------------------
// Marketing
// -------------------------------------------------------------
const OrganigramaMarketing = () => (
  <Page
    title="Marketing en OXXO"
    image={marketingImg}
    content={
      <>
        <p>
          Responsables de las Estrategias de Publicidad, Análisis de Mercado,
          Branding y Posicionamiento, Gestión de Redes Sociales y Programas de
          Lealtad.
        </p>
        <ul>
          <li>
            <Link to="/organigrama/marketing/publicidad">
              Estrategias de Publicidad
            </Link>
          </li>
          <li>
            <Link to="/organigrama/marketing/analisis-mercado">
              Análisis de Mercado
            </Link>
          </li>
          <li>
            <Link to="/organigrama/marketing/branding">
              Branding y Posicionamiento
            </Link>
          </li>
          <li>
            <Link to="/organigrama/marketing/redes">
              Gestión de Redes Sociales
            </Link>
          </li>
          <li>
            <Link to="/organigrama/marketing/lealtad">
              Programas de Lealtad
            </Link>
          </li>
        </ul>
      </>
    }
  />
);
// Subpáginas Marketing
const Publicidad = () => (
  <Page
    title="Estrategias de Publicidad"
    content="Diseño de campañas y medios para promocionar la marca y productos."
  />
);
const AnalisisMercado = () => (
  <Page
    title="Análisis de Mercado"
    content="Investigación de tendencias, competencia y comportamientos del cliente."
  />
);
const Branding = () => (
  <Page
    title="Branding y Posicionamiento"
    content="Construcción de la identidad de la marca y posicionamiento en la mente del consumidor."
  />
);
const Redes = () => (
  <Page
    title="Gestión de Redes Sociales"
    content="Creación de contenido e interacción con la comunidad digital."
  />
);
const Lealtad = () => (
  <Page
    title="Programas de Lealtad"
    content="Fidelización del cliente mediante recompensas y beneficios especiales."
  />
);

// -------------------------------------------------------------
// Producción
// -------------------------------------------------------------
const OrganigramaProduccion = () => (
  <Page
    title="Producción en OXXO"
    image={produccionImg}
    content={
      <>
        <p>
          Incluye Control de Calidad, Gestión de Inventarios, Optimización de
          Procesos, Desarrollo de Nuevos Productos y Seguridad Industrial.
        </p>
        <ul>
          <li>
            <Link to="/organigrama/produccion/calidad">Control de Calidad</Link>
          </li>
          <li>
            <Link to="/organigrama/produccion/inventarios">
              Gestión de Inventarios
            </Link>
          </li>
          <li>
            <Link to="/organigrama/produccion/procesos">
              Optimización de Procesos
            </Link>
          </li>
          <li>
            <Link to="/organigrama/produccion/nuevos-productos">
              Desarrollo de Nuevos Productos
            </Link>
          </li>
          <li>
            <Link to="/organigrama/produccion/seguridad">
              Seguridad Industrial
            </Link>
          </li>
        </ul>
      </>
    }
  />
);
// Subpáginas Producción
const Calidad = () => (
  <Page
    title="Control de Calidad"
    content="Verificación de estándares para garantizar la excelencia de productos."
  />
);
const Inventarios = () => (
  <Page
    title="Gestión de Inventarios"
    content="Control de stock y abastecimiento oportuno en tiendas."
  />
);
const Procesos = () => (
  <Page
    title="Optimización de Procesos"
    content="Mejora continua para maximizar la eficiencia operativa."
  />
);
const NuevosProductos = () => (
  <Page
    title="Desarrollo de Nuevos Productos"
    content="Investigación y creación de propuestas innovadoras para el portafolio de OXXO."
  />
);
const Seguridad = () => (
  <Page
    title="Seguridad Industrial"
    content="Aplicación de normas y procedimientos para salvaguardar al personal."
  />
);

// -------------------------------------------------------------
// Legal y Regulación
// -------------------------------------------------------------
const OrganigramaLegal = () => (
  <Page
    title="Legal y Regulación en OXXO"
    image={legalImg}
    content={
      <>
        <p>
          Supervisa Contratos, Litigios, Cumplimiento Normativo, Protección de
          Datos y Asesoría Jurídica.
        </p>
        <ul>
          <li>
            <Link to="/organigrama/legal/contratos">Contratos</Link>
          </li>
          <li>
            <Link to="/organigrama/legal/litigios">Litigios</Link>
          </li>
          <li>
            <Link to="/organigrama/legal/cumplimiento">
              Cumplimiento Normativo
            </Link>
          </li>
          <li>
            <Link to="/organigrama/legal/datos">Protección de Datos</Link>
          </li>
          <li>
            <Link to="/organigrama/legal/asesoria">Asesoría Jurídica</Link>
          </li>
        </ul>
      </>
    }
  />
);
// Subpáginas Legal
const Contratos = () => (
  <Page
    title="Contratos"
    content="Elaboración, revisión y negociación de contratos clave para la operación."
  />
);
const Litigios = () => (
  <Page
    title="Litigios"
    content="Defensa legal de los intereses de la empresa en procesos judiciales."
  />
);
const Cumplimiento = () => (
  <Page
    title="Cumplimiento Normativo"
    content="Alineación a la legislación y regulaciones gubernamentales."
  />
);
const Datos = () => (
  <Page
    title="Protección de Datos"
    content="Garantiza la seguridad y confidencialidad de la información personal."
  />
);
const Asesoria = () => (
  <Page
    title="Asesoría Jurídica"
    content="Brinda orientación legal interna en operaciones diarias y estratégicas."
  />
);

// -------------------------------------------------------------
// Expansión y Desarrollo Inmobiliario
// -------------------------------------------------------------
const OrganigramaExpansion = () => (
  <Page
    title="Expansión y Desarrollo Inmobiliario en OXXO"
    image={expansionImg}
    content={
      <>
        <p>
          Gestiona la Adquisición de Tierras, Construcción, Permisos, Evaluación
          de Ubicaciones y Relaciones con Autoridades.
        </p>
        <ul>
          <li>
            <Link to="/organigrama/expansion/tierras">
              Adquisición de Tierras
            </Link>
          </li>
          <li>
            <Link to="/organigrama/expansion/construccion">Construcción</Link>
          </li>
          <li>
            <Link to="/organigrama/expansion/permisos">Permisos</Link>
          </li>
          <li>
            <Link to="/organigrama/expansion/ubicaciones">
              Evaluación de Ubicaciones
            </Link>
          </li>
          <li>
            <Link to="/organigrama/expansion/autoridades">
              Relaciones con Autoridades
            </Link>
          </li>
        </ul>
      </>
    }
  />
);
// Subpáginas Expansión
const Tierras = () => (
  <Page
    title="Adquisición de Tierras"
    content="Compra y negociación de propiedades para nuevos proyectos."
  />
);
const Construccion = () => (
  <Page
    title="Construcción"
    content="Planeación y edificación de instalaciones con estándares de seguridad."
  />
);
const Permisos = () => (
  <Page
    title="Permisos"
    content="Tramitación de licencias y autorizaciones ante autoridades gubernamentales."
  />
);
const Ubicaciones = () => (
  <Page
    title="Evaluación de Ubicaciones"
    content="Análisis de áreas estratégicas para la apertura de nuevas sucursales."
  />
);
const Autoridades = () => (
  <Page
    title="Relaciones con Autoridades"
    content="Coordinación con entidades locales y regulatorias para asegurar el cumplimiento legal."
  />
);

// ---------------------------------------------------------------------------
// PUESTOS (sección previa, mantenida como ejemplo genérico de descripción)
// ---------------------------------------------------------------------------
const Puestos = () => (
  <Page
    title="Descripción de Puestos"
    content="Diferentes roles en OXXO."
    image={puestosImg}
  />
);

// ---------------------------------------------------------------------------
// VALORES DE LA UANL
// ---------------------------------------------------------------------------
const Valores = () => (
  <Page
    title="Valores de la UANL"
    content={
      <ul>
        <li>Actitud de Servicio</li>
        <li>Ética</li>
        <li>Honestidad</li>
        <li>Integridad</li>
        <li>Justicia</li>
        <li>Responsabilidad</li>
        <li>Respeto</li>
        <li>Solidaridad</li>
        <li>Trabajo en Equipo</li>
        <li>Verdad</li>
      </ul>
    }
    image={misionImg}
  />
);

// ---------------------------------------------------------------------------
// RUTAS PRINCIPALES DE LA APP
// ---------------------------------------------------------------------------
export default function App() {
  return (
    <Router>
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* Sección Inicio */}
        <Route path="/inicio" element={<Inicio />} />

        {/* Introducción */}
        <Route path="/introduccion" element={<Introduccion />} />

        {/* Empresa */}
        <Route path="/empresa" element={<Empresa />} />

        {/* Tamaño de la Empresa */}
        <Route path="/tamanio" element={<Tamanio />} />

        {/* Misión */}
        <Route path="/mision" element={<Mision />} />

        {/* Visión */}
        <Route path="/vision" element={<Vision />} />

        {/* Historia */}
        <Route path="/historia" element={<Historia />} />

        {/* Nueva sección: Antecedentes */}
        <Route path="/antecedentes" element={<Antecedentes />} />

        {/* ORGANIGRAMA (MENÚ PRINCIPAL) */}
        <Route path="/organigrama" element={<Organigrama />} />

        {/* Sub-rutas de ORGANIGRAMA */}
        {/* Recursos Humanos */}
        <Route
          path="/organigrama/recursos-humanos"
          element={<OrganigramaRecursosHumanos />}
        />
        <Route
          path="/organigrama/recursos-humanos/reclutamiento"
          element={<Reclutamiento />}
        />
        <Route
          path="/organigrama/recursos-humanos/capacitacion"
          element={<Capacitacion />}
        />
        <Route
          path="/organigrama/recursos-humanos/cultura"
          element={<Cultura />}
        />
        <Route
          path="/organigrama/recursos-humanos/evaluacion"
          element={<Evaluacion />}
        />
        <Route
          path="/organigrama/recursos-humanos/talento"
          element={<Talento />}
        />

        {/* Finanzas */}
        <Route path="/organigrama/finanzas" element={<OrganigramaFinanzas />} />
        <Route path="/organigrama/finanzas/tesoreria" element={<Tesoreria />} />
        <Route
          path="/organigrama/finanzas/contabilidad"
          element={<Contabilidad />}
        />
        <Route
          path="/organigrama/finanzas/planeacion"
          element={<Planeacion />}
        />
        <Route path="/organigrama/finanzas/auditoria" element={<Auditoria />} />
        <Route path="/organigrama/finanzas/control" element={<Control />} />

        {/* Tecnología */}
        <Route path="/organigrama/tecnologia" element={<OrganigramaTI />} />
        <Route path="/organigrama/tecnologia/sistemas" element={<Sistemas />} />
        <Route
          path="/organigrama/tecnologia/ciberseguridad"
          element={<Ciberseguridad />}
        />
        <Route
          path="/organigrama/tecnologia/infraestructura"
          element={<Infraestructura />}
        />
        <Route path="/organigrama/tecnologia/software" element={<Software />} />
        <Route path="/organigrama/tecnologia/soporte" element={<Soporte />} />

        {/* Marketing */}
        <Route
          path="/organigrama/marketing"
          element={<OrganigramaMarketing />}
        />
        <Route
          path="/organigrama/marketing/publicidad"
          element={<Publicidad />}
        />
        <Route
          path="/organigrama/marketing/analisis-mercado"
          element={<AnalisisMercado />}
        />
        <Route path="/organigrama/marketing/branding" element={<Branding />} />
        <Route path="/organigrama/marketing/redes" element={<Redes />} />
        <Route path="/organigrama/marketing/lealtad" element={<Lealtad />} />

        {/* Producción */}
        <Route
          path="/organigrama/produccion"
          element={<OrganigramaProduccion />}
        />
        <Route path="/organigrama/produccion/calidad" element={<Calidad />} />
        <Route
          path="/organigrama/produccion/inventarios"
          element={<Inventarios />}
        />
        <Route path="/organigrama/produccion/procesos" element={<Procesos />} />
        <Route
          path="/organigrama/produccion/nuevos-productos"
          element={<NuevosProductos />}
        />
        <Route
          path="/organigrama/produccion/seguridad"
          element={<Seguridad />}
        />

        {/* Legal y Regulación */}
        <Route path="/organigrama/legal" element={<OrganigramaLegal />} />
        <Route path="/organigrama/legal/contratos" element={<Contratos />} />
        <Route path="/organigrama/legal/litigios" element={<Litigios />} />
        <Route
          path="/organigrama/legal/cumplimiento"
          element={<Cumplimiento />}
        />
        <Route path="/organigrama/legal/datos" element={<Datos />} />
        <Route path="/organigrama/legal/asesoria" element={<Asesoria />} />

        {/* Expansión y Desarrollo Inmobiliario */}
        <Route
          path="/organigrama/expansion"
          element={<OrganigramaExpansion />}
        />
        <Route path="/organigrama/expansion/tierras" element={<Tierras />} />
        <Route
          path="/organigrama/expansion/construccion"
          element={<Construccion />}
        />
        <Route path="/organigrama/expansion/permisos" element={<Permisos />} />
        <Route
          path="/organigrama/expansion/ubicaciones"
          element={<Ubicaciones />}
        />
        <Route
          path="/organigrama/expansion/autoridades"
          element={<Autoridades />}
        />

        {/* Descripción de Puestos (versión genérica previa) */}
        <Route path="/puestos" element={<Puestos />} />

        {/* Valores de la UANL */}
        <Route path="/valores" element={<Valores />} />

        {/* Conclusión */}
        <Route path="/conclusion" element={<Conclusion />} />

        {/* Alumno */}
        <Route path="/alumno" element={<Alumno />} />
      </Routes>
    </Router>
  );
}
