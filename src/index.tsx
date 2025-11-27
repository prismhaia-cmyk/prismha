import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Aurora from "./Aurora";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalWrapper from "./components/GlobalWrapper";
import SpotlightCard from "./components/ui/SpotlightCard";
import Preloader from "./components/Preloader";
import SEO from "./components/SEO";
import DemoShowcase from "./components/demos/DemoShowcase";

// Lazy load pages
const PoliticaPrivacidad = lazy(() => import("./PoliticaPrivacidad"));
const Contacto = lazy(() => import("./Contacto"));
const SaberMas = lazy(() => import("./SaberMas"));
const CasosDeExito = lazy(() => import("./CasosDeExito"));
const Blog = lazy(() => import("./blog"));
const BlogPost = lazy(() => import("./BlogPost"));
const BlogPost2 = lazy(() => import("./BlogPost2"));

const App = () => {
  // Animaciones de texto
  const heroTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="relative bg-black w-full overflow-hidden min-h-screen text-white selection:bg-primary/30 selection:text-white">
      <SEO /> {/* Default SEO for Home */}
      <Header />

      {/* Efecto Aurora de fondo (Solo en Home) */}
      <div className="absolute inset-0 w-full h-screen z-0 pointer-events-none">
        <Aurora
          colorStops={["#0066FF", "#0099FF", "#0066FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Contenido principal Hero */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-8 pt-20">
        <div className="text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-6 inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <span className="text-sm font-medium text-primary tracking-wide uppercase">Agencia de Automatización e IA</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={heroTextVariants}
            className="text-white text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight tracking-tight"
          >
            Impulsa tu empresa con el poder de la <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary bg-300% animate-gradient font-normal">Inteligencia Artificial</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-white/70 text-lg md:text-xl font-light mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Optimiza procesos, mejora decisiones y destaca en un mercado competitivo con soluciones a medida que trabajan por ti las 24 horas.
          </motion.p>

          {/* Botones principales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href="#servicios"
              className="text-white/80 hover:text-white transition-colors text-lg font-normal tracking-tight px-6 py-3 border-b border-transparent hover:border-primary"
            >
              Explorar Soluciones
            </a>

            <Link
              to="/contacto"
              className="group relative px-8 py-4 rounded-full bg-white text-black font-medium text-lg transition-all hover:bg-gray-200 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              Comenzar Ahora
              <div className="absolute inset-0 rounded-full ring-2 ring-white/50 animate-pulse group-hover:animate-none" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Texto ScrollReveal - Ajustado (Punto medio) */}
      <section className="relative z-10 w-full flex items-start justify-center px-8 py-32 bg-black">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal
            baseOpacity={0.1}
            enableBlur={true}
            baseRotation={2}
            blurStrength={10}
            containerClassName="text-center"
            textClassName="text-white text-2xl md:text-4xl font-light leading-relaxed"
          >
            En Prismha, no solo implementamos tecnología; diseñamos ecosistemas digitales que trabajan por ti.
            Transformamos tu visión en una realidad operativa, permitiéndote escalar sin límites y centrarte en tu crecimiento.
          </ScrollReveal>
        </div>
      </section>

      {/* Demo Showcase - Automatización en Acción */}
      <DemoShowcase />

      {/* Sección título "Servicios" - Corregido */}
      <section className="relative z-10 flex flex-col items-center mt-12 mb-16">
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="text-primary text-sm uppercase tracking-widest font-medium">Nuestras Soluciones</p>
          <h2 className="text-white text-3xl md:text-5xl font-light">Servicios Especializados</h2>
        </div>
      </section>

      {/* Tarjetas de servicios con Spotlight */}
      <section id="servicios" className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-32">
        <SpotlightCard>
          <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">Automatizaciones</h3>
          <p className="text-white/70 mb-6 leading-relaxed">Transformamos tareas manuales y repetitivas en flujos de trabajo eficientes que funcionan solos.</p>
          <ul className="space-y-3 text-white/60 text-sm">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Gestión de Leads y CRM</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Facturación Automática</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Sincronización de Datos</li>
          </ul>
        </SpotlightCard>

        <SpotlightCard>
          <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">Chatbots IA</h3>
          <p className="text-white/70 mb-6 leading-relaxed">Asistentes virtuales entrenados con tu información para atender a tus clientes como lo harías tú.</p>
          <ul className="space-y-3 text-white/60 text-sm">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Atención 24/7</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Cualificación de Clientes</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Agendamiento de Citas</li>
          </ul>
        </SpotlightCard>

        <SpotlightCard>
          <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">Agentes de Voz</h3>
          <p className="text-white/70 mb-6 leading-relaxed">La próxima frontera de la comunicación. IAs capaces de mantener llamadas telefónicas naturales.</p>
          <ul className="space-y-3 text-white/60 text-sm">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Llamadas Entrantes/Salientes</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Confirmación de Asistencia</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Encuestas de Satisfacción</li>
          </ul>
        </SpotlightCard>

        <SpotlightCard>
          <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">Funnels de Venta</h3>
          <p className="text-white/70 mb-6 leading-relaxed">Sistemas de captación y conversión diseñados para maximizar el retorno de inversión.</p>
          <ul className="space-y-3 text-white/60 text-sm">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Landing Pages Dinámicas</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Email Marketing Automatizado</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Retargeting Inteligente</li>
          </ul>
        </SpotlightCard>

        <SpotlightCard className="md:col-span-2">
          <div className="flex flex-col md:flex-row gap-8 items-center h-full">
            <div className="flex-1">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-3xl font-semibold text-white mb-4">Consultoría Estratégica</h3>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                No solo implementamos herramientas, diseñamos la hoja de ruta digital de tu empresa.
                Analizamos tus cuellos de botella y creamos un plan de acción claro para escalar tu negocio con tecnología.
              </p>
              <Link to="/contacto" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-medium">
                Solicitar Auditoría Gratuita <span className="text-xl">→</span>
              </Link>
            </div>
          </div>
        </SpotlightCard>
      </section>

      {/* CTA Saber Más */}
      <section className="relative z-10 w-full px-6 py-16 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            ¿Quieres saber más sobre nuestros servicios?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Agenda una reunión de 30 minutos con nuestro equipo y descubre cómo podemos ayudarte a transformar tu negocio.
          </p>
          <Link
            to="/sabermas"
            className="inline-block px-8 py-4 rounded-full bg-primary text-white font-medium text-lg transition-all hover:bg-primary-hover hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            Agendar Reunión
          </Link>
        </div>
      </section>

      {/* Nueva Sección: Proceso de Trabajo - Colores Ajustados */}
      <section className="relative z-10 w-full px-6 py-24 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-white mb-6">Cómo trabajamos</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">Un proceso transparente y ágil diseñado para obtener resultados desde la primera semana.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Análisis", desc: "Estudiamos tus procesos actuales para identificar ineficiencias y oportunidades." },
              { step: "02", title: "Estrategia", desc: "Diseñamos una solución a medida que se integra perfectamente con tu ecosistema." },
              { step: "03", title: "Implementación", desc: "Desarrollo ágil y puesta en marcha de las automatizaciones y sistemas." },
              { step: "04", title: "Optimización", desc: "Monitorización continua y mejoras basadas en datos reales." }
            ].map((item, i) => (
              <div key={i} className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="text-5xl font-bold text-white/10 mb-4 group-hover:text-primary/20 transition-colors">{item.step}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Expandido y Mejorado */}
      <section className="relative z-10 w-full px-6 py-32 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white text-3xl md:text-5xl font-light text-center mb-16">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "¿Por qué debería invertir en automatización ahora?",
                a: "El mercado se mueve rápido. Las empresas que automatizan sus procesos reducen costes operativos hasta un 30% y liberan a su equipo para tareas de alto valor. No es solo tecnología, es ventaja competitiva."
              },
              {
                q: "¿Es necesario tener conocimientos técnicos?",
                a: "En absoluto. Nosotros nos encargamos de toda la complejidad técnica. Te entregamos sistemas llave en mano y formamos a tu equipo para que sepan utilizarlos sin depender de nosotros."
              },
              {
                q: "¿Cuánto tiempo tarda en implementarse?",
                a: "Depende de la complejidad. Automatizaciones sencillas pueden estar listas en 1-2 semanas. Proyectos integrales de transformación digital suelen llevar entre 4 y 8 semanas. Siempre trabajamos por hitos para que veas resultados pronto."
              },
              {
                q: "¿Qué pasa si mis herramientas actuales no son compatibles?",
                a: "Somos expertos en integración. Trabajamos con APIs y herramientas como n8n o Make que nos permiten conectar prácticamente cualquier software moderno. Si tiene una interfaz digital, podemos conectarlo."
              },
              {
                q: "¿Ofrecéis soporte post-implementación?",
                a: "Sí. No te dejamos solo. Ofrecemos periodos de garantía y planes de mantenimiento para asegurar que todo siga funcionando como un reloj a medida que tu empresa evoluciona."
              },
              {
                q: "¿Cómo empezamos?",
                a: "Lo más fácil es agendar una llamada de descubrimiento gratuita. En 30 minutos evaluaremos si podemos ayudarte y te daremos una hoja de ruta inicial sin compromiso."
              }
            ].map((item, index) => (
              <details
                key={index}
                className="group bg-white/5 rounded-2xl border border-white/10 open:bg-white/10 transition-all duration-300 overflow-hidden"
              >
                <summary className="cursor-pointer p-6 text-white text-lg md:text-xl font-medium flex justify-between items-center list-none hover:bg-white/5 transition-colors">
                  {item.q}
                  <span className="text-primary text-2xl transition-transform duration-300 group-open:rotate-45 flex-shrink-0 ml-4">+</span>
                </summary>
                <div className="px-6 pb-8 pt-2 text-white/70 leading-relaxed text-base md:text-lg border-t border-white/5">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <GlobalWrapper>
          <Preloader />
          <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center"><div className="w-8 h-8 border-t-2 border-primary rounded-full animate-spin"></div></div>}>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/sabermas" element={<SaberMas />} />
              <Route path="/casos-de-exito" element={<CasosDeExito />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blogpost" element={<BlogPost />} />
              <Route path="/blogpost2" element={<BlogPost2 />} />
            </Routes>
          </Suspense>
        </GlobalWrapper>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
