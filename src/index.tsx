import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Aurora from "./Aurora";
import ScrollReveal from "./ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PoliticaPrivacidad from "./PoliticaPrivacidad";
import Contacto from "./Contacto";
import SaberMas from "./SaberMas";
import Blog from "./blog";
import BlogPost from "./BlogPost";
import BlogPost2 from "./BlogPost2";

import { useState } from "react";


const App = () => {
  const { scrollY } = useScroll();
  
  // Transformaciones para el encabezado al hacer scroll
  const headerPaddingY = "0.30rem";
const headerPaddingX = "2rem";
const logoSize = useTransform(scrollY, [0, 100], [60, 50]);
const headerWidth = useTransform(scrollY, [0, 50], ["67%", "55%"]);
const scrollContainerRef = useRef(null);
const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div className="relative bg-black min-h-screen w-full overflow-hidden">
      {/* Efecto Aurora de fondo */}
      <div className="absolute inset-0 w-full h-screen">
        <Aurora
          colorStops={["#0066FF", "#0099FF", "#0066FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        
      </div>

      {/* Encabezado fijo con animación */}
      <motion.header 
  className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[90%] md:w-[65%] max-w-[1400px]"
  style={{ 
    paddingTop: headerPaddingY,
    paddingBottom: headerPaddingY,
  }}
>
  <motion.nav
    className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full flex items-center justify-between shadow-2xl px-5 md:px-6 overflow-hidden"
    style={{ height: "60px" }}
  >
    {/* Logo */}
    <div className="flex items-center gap-3 pl-2">
      <motion.img
        src="/logo.png"
        alt="Prismha Logo"
        className="object-contain w-10 md:w-12"
        style={{ transform: "scale(2)" }}
      />
    </div>

    {/* Menú normal en desktop */}
    <div className="hidden md:flex items-center gap-4">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="text-white/80 hover:text-white transition-colors text-sm md:text-base font-normal tracking-tight px-2"
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
        }}
      >
        Home
      </button>

      <a
        href="#servicios"
        className="text-white/80 hover:text-white transition-colors text-sm md:text-base font-normal tracking-tight px-2"
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
        }}
      >
        Servicios
      </a>

      <Link
        to="/blog"
        className="text-white/80 hover:text-white transition-all duration-300 text-sm md:text-base font-normal tracking-tight px-2"
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
        }}
      >
        Blog
      </Link>

      <Link
        to="/contacto"
        className="backdrop-blur-xl bg-white/15 border border-white/30 rounded-full px-4 py-2 text-white font-normal text-sm transition-all duration-300 hover:bg-[#0066FF]/20 hover:border-[#0066FF]/40 shadow-lg"
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
        }}
      >
        Contacto
      </Link>
    </div>

    {/* Menú móvil */}
    <div className="md:hidden">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="text-white text-2xl"
      >
        ☰
      </button>
    </div>
  </motion.nav>

  {/* Dropdown móvil */}
  {showMenu && (
    <div className="absolute right-0 mt-3 w-48 bg-black/80 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg flex flex-col items-start p-4 space-y-3 md:hidden">
      <a href="#" className="text-white/90 hover:text-[#19A1FF] transition">Home</a>
      <a href="#servicios" className="text-white/90 hover:text-[#19A1FF] transition">Servicios</a>
      <Link to="/blog" className="text-white/90 hover:text-[#19A1FF] transition">Blog</Link>
      <Link to="/contacto" className="text-white/90 hover:text-[#19A1FF] transition">Contacto</Link>
    </div>
  )}
</motion.header>


      {/* Contenido principal */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-8 pt-3">
        <div className="text-center max-w-5xl">
          <h1
            className="text-white text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight animate-slide-up-delayed"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
            }}
          >
            Impulsa tu empresa con el poder de la Inteligencia Artificial.
          </h1>
          <p
            className="text-white/80 text-lg md:text-xl lg:text-2xl font-light mb-10 animate-slide-up-delayed-more"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
            }}
          >
            Optimiza procesos, mejora decisiones y destaca en un mercado competitivo.
          </p>

          {/* Botones principales */}
          <div className="flex gap-4 justify-center animate-slide-up-delayed-more-2">
            <a
  href="#servicios"
  className="text-white/80 hover:text-white transition-colors text-sm md:text-base font-normal tracking-tight px-4 py-2"
  style={{
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif',
  }}
>
  Servicios
</a>

            <Link
  to="/contacto"
  className="backdrop-blur-xl bg-white/15 border border-white/30 rounded-full px-5 py-2 text-white font-normal text-sm transition-all duration-300 hover:bg-[#0066FF]/20 hover:border-[#0066FF]/40 shadow-lg"
  style={{
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
  }}
>
  Contacto
</Link>

          </div>
        </div>
      </div>

      {/* Texto ScrollReveal */}
      <section className="relative z-10 w-full flex items-start justify-center px-8 py-10 bg-black">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={20}

            containerClassName="text-center"
            textClassName="text-white"
          >
            Con Prismha, las empresas aceleran su crecimiento gracias a la inteligencia artificial.
            Automatizamos y optimizamos procesos para generar resultados reales, y nuestros clientes ya disfrutan de más tiempo, más ahorro y un negocio en expansión.
          </ScrollReveal>
        </div>
      </section>

      {/* Sección título "Servicios" */}
      <section className="relative z-10 flex flex-col items-center mt-12 mb-4">
        <div className="service-title-box">
          <p className="subtitle">Nuestros</p>
          <h2 className="main-title">Servicios</h2>
        </div>
      </section>

      {/* Tarjetas de servicios */}
      <section id="servicios" className="services-grid">
        <div className="service-card">
          <h3>Automatizaciones</h3>
          <p>
            Transformamos tareas complejas en procesos ágiles para reducir costos y acelerar resultados.
          </p>
          <ul>
            <li>Tareas Básicas – Correos, recordatorios y reportes sin esfuerzo.</li>
            <li>Operaciones Internas – Conecta sistemas y coordina departamentos.</li>
            <li>Avanzada – Procesos complejos con soluciones a medida.</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>Chatbots y Agentes IA</h3>
          <p>
            Agentes inteligentes que toman decisiones autónomas en procesos y departamentos, adaptándose a cada necesidad de tu negocio.
          </p>
          <ul>
            <li>Atención – Respuestas 24/7 a clientes.</li>
            <li>Ventas – Califica y cierra prospectos con más precisión.</li>
            <li>Soporte – Ayuda a empleados y FAQs en tiempo real.</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>Funnels de Venta</h3>
          <p>
            Captación inteligente, seguimiento automático y cierres de venta optimizados.
          </p>
          <ul>
            <li>Captación – Páginas y formularios personalizados.</li>
            <li>Seguimiento – Mensajes y correos estratégicos.</li>
            <li>Cierre – Ofertas y recordatorios que convierten.</li>
          </ul>
        </div>

        <div className="service-card wide">
          <h3>Planes Básicos</h3>
          <p>Automatizaciones sencillas para comenzar: procesos simples y rápidos de implementar.</p>
          <ul>
            <li>Tareas Básicas – Correos, recordatorios y reportes sin esfuerzo.</li>
            <li>Operaciones Internas – Conecta sistemas y coordina departamentos.</li>
            <li>Avanzada – Procesos complejos con soluciones a medida.</li>
          </ul>
        </div>

        <div className="service-card wide">
          <h3>Consultoría Empresarial</h3>
          <p>Estrategias personalizadas con análisis de datos y soluciones hechas a medida.</p>
          <ul>
            <li>Diagnóstico Exprés – Análisis rápido para identificar oportunidades inmediatas.</li>
            <li>Estrategia a Medida – Plan personalizado según necesidades.</li>
            <li>Consultoría Integral – Implementación completa de soluciones.</li>
          </ul>
        </div>
      </section>

      {/* Botones debajo de las tarjetas */}
      <div className="relative z-10 flex justify-center gap-4 pb-16">
        <Link
  to="/sabermas"
  className="glass-button backdrop-blur-xl bg-white/15 border border-white/30 rounded-full px-6 py-2 text-white font-normal text-sm transition-all duration-300 hover:bg-[#0066FF]/20 hover:border-[#0066FF]/40 shadow-lg"
>
  Saber más
</Link>
        <Link
  to="/contacto"
  className="backdrop-blur-xl bg-white/15 border border-white/30 rounded-full px-5 py-2 text-white font-normal text-sm transition-all duration-300 hover:bg-[#0066FF]/20 hover:border-[#0066FF]/40 shadow-lg"
  style={{
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
  }}
>
  Contacto
</Link>
      </div>
     {/* Nueva sección con cuadro glassmorphism */}
<section className="relative z-10 w-full flex justify-center px-8 py-16 bg-black">
  <div className="max-w-4xl w-full backdrop-blur-xl bg-black/60 rounded-3xl p-10 shadow-2xl border border-white/10">
    {/* Título grande */}
    <h2 
      className="text-white text-2xl md:text-3xl lg:text-4xl font-light mb-6 text-center leading-tight"
      style={{ 
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
      }}
    >
      Enfrenta el futuro con confianza junto a Prismha
    </h2>
    
    {/* Texto descriptivo */}
    <p 
      className="text-white/80 text-base md:text-lg font-light mb-8 text-center leading-relaxed"
      style={{ 
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
      }}
    >
      Desarrollamos sistemas de automatización, asistentes virtuales y herramientas de análisis inteligente que te ayudan a ahorrar tiempo, reducir costes y crecer de forma sostenible.
    </p>
  </div>
</section>
{/* Sección de Reseñas */}
<section className="relative z-10 w-full px-8 py-20 bg-black">
  {/* Título */}
  <h2 
    className="text-white text-3xl md:text-4xl lg:text-5xl font-light text-center mb-16"
    style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
    }}
  >
    ¿Qué dicen nuestros <span className="text-[#0099FF]">Clientes</span>?
  </h2>

  {/* Contenedor de cajas con scroll */}
  <div className="relative max-w-7xl mx-auto">
    <div 
      ref={scrollContainerRef}
      className="flex gap-6 overflow-x-auto scroll-smooth pb-8 snap-x snap-mandatory scrollbar-hide"
    >
      
      {/* Caja 1 */}
      <div className="min-w-[350px] md:min-w-[400px] snap-center">
        <div className="backdrop-blur-xl bg-black/60 rounded-3xl p-8 shadow-2xl border border-white/10 h-full">
          <h3 
            className="text-white text-xl font-semibold mb-4"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}
          >
            Laura Méndez
          </h3>
          <p 
            className="text-white/80 text-base leading-relaxed"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}
          >
            "Trabajar con Prismha ha sido un antes y un después. Nos ayudaron a automatizar la atención al cliente con un chatbot que entiende realmente a nuestros usuarios. Ahora respondemos más rápido y con mejor calidad."
          </p>
        </div>
        <div className="h-1 mt-4 rounded-full bg-gradient-to-r from-[#0066FF] via-[#0099FF] to-[#0066FF]"></div>
      </div>

      {/* Caja 2 */}
      <div className="min-w-[350px] md:min-w-[400px] snap-center">
        <div className="backdrop-blur-xl bg-black/60 rounded-3xl p-8 shadow-2xl border border-white/10 h-full">
          <h3 
            className="text-white text-xl font-semibold mb-4"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}
          >
            Carlos Rivas
          </h3>
          <p 
            className="text-white/80 text-base leading-relaxed"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}
          >
            "Gracias a Prismha logramos reducir un 40% el tiempo de gestión de tareas internas. Su enfoque práctico y su acompañamiento constante marcaron la diferencia."
          </p>
        </div>
        <div className="h-1 mt-4 rounded-full bg-gradient-to-r from-[#0066FF] via-[#0099FF] to-[#0066FF]"></div>
      </div>

      {/* Caja 3 */}
      <div className="min-w-[350px] md:min-w-[400px] snap-center">
        <div className="backdrop-blur-xl bg-black/60 rounded-3xl p-8 shadow-2xl border border-white/10 h-full">
          <h3 
            className="text-white text-xl font-semibold mb-4"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}
          >
            Marta Soler
          </h3>
          <p 
            className="text-white/80 text-base leading-relaxed"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}
          >
            "Queríamos aprovechar nuestros datos, pero no sabíamos por dónde empezar. Prismha desarrolló una solución de análisis inteligente que nos permite tomar decisiones más rápidas y precisas."
          </p>
        </div>
        <div className="h-1 mt-4 rounded-full bg-gradient-to-r from-[#0066FF] via-[#0099FF] to-[#0066FF]"></div>
      </div>

      {/* Caja 4 */}
      <div className="min-w-[350px] md:min-w-[400px] snap-center">
        <div className="backdrop-blur-xl bg-black/60 rounded-3xl p-8 shadow-2xl border border-white/10 h-full">
          <h3 
            className="text-white text-xl font-semibold mb-4"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}
          >
            Javier Ortega
          </h3>
          <p 
            className="text-white/80 text-base leading-relaxed"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}
          >
            "Con la ayuda de Prismha implementamos inteligencia artificial para personalizar la experiencia de nuestros clientes. El cambio fue inmediato: más satisfacción y mejores resultados."
          </p>
        </div>
        <div className="h-1 mt-4 rounded-full bg-gradient-to-r from-[#0066FF] via-[#0099FF] to-[#0066FF]"></div>
      </div>

      {/* Caja 5 */}
      <div className="min-w-[350px] md:min-w-[400px] snap-center">
        <div className="backdrop-blur-xl bg-black/60 rounded-3xl p-8 shadow-2xl border border-white/10 h-full">
          <h3 
            className="text-white text-xl font-semibold mb-4"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}
          >
            Ana Torres
          </h3>
          <p 
            className="text-white/80 text-base leading-relaxed"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}
          >
            "El equipo de Prismha entendió perfectamente nuestras necesidades. Automatizamos procesos repetitivos y ahora puedo centrarme en hacer crecer mi negocio."
          </p>
        </div>
        <div className="h-1 mt-4 rounded-full bg-gradient-to-r from-[#0066FF] via-[#0099FF] to-[#0066FF]"></div>
      </div>

      {/* Caja 6 */}
      <div className="min-w-[350px] md:min-w-[400px] snap-center">
        <div className="backdrop-blur-xl bg-black/60 rounded-3xl p-8 shadow-2xl border border-white/10 h-full">
          <h3 
            className="text-white text-xl font-semibold mb-4"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}
          >
            David Paredes
          </h3>
          <p 
            className="text-white/80 text-base leading-relaxed"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}
          >
            "Prismha transformó nuestra forma de trabajar. Integramos soluciones de IA sin complicaciones y vimos resultados reales desde el primer mes."
          </p>
        </div>
        <div className="h-1 mt-4 rounded-full bg-gradient-to-r from-[#0066FF] via-[#0099FF] to-[#0066FF]"></div>
      </div>

    </div>

    {/* Botones de navegación */}
    <div className="flex justify-center gap-4 mt-8">
      <button 
  className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full p-3 text-white transition-all duration-300 hover:bg-[#0066FF]/20 hover:border-[#0066FF]/40"
  onClick={() => {
    if (scrollContainerRef.current) {
      (scrollContainerRef.current as HTMLDivElement).scrollLeft -= 1260;
    }
  }}
>
  ←
</button>

  
      <button 
  className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full p-3 text-white transition-all duration-300 hover:bg-[#0066FF]/20 hover:border-[#0066FF]/40"
  onClick={() => {
    if (scrollContainerRef.current) {
      (scrollContainerRef.current as HTMLDivElement).scrollLeft += 1260;
    }
  }}
>
  →
</button>
    </div>
  </div>
</section>
{/* Sección de Preguntas Frecuentes */}
<section className="relative z-10 w-full px-6 py-16 bg-black">
  {/* Título */}
  <h2 
    className="text-white text-2xl md:text-3xl lg:text-4xl font-light text-center mb-12"
    style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
    }}
  >
    Preguntas Frecuentes
  </h2>

  {/* Contenedor de preguntas */}
  <div className="max-w-4xl mx-auto space-y-4">
    
    {/* Pregunta */}
    {[
      {
        q: "¿Por qué contratar a Prismha?",
        a: "Porque no solo implementamos tecnología, sino que entendemos tu negocio. Te acompañamos en cada paso para que la IA se convierta en un verdadero aliado estratégico.",
      },
      {
        q: "¿Imponéis permanencia?",
        a: "No. Creemos en la libertad de nuestros clientes. Te quedas con nosotros porque ves resultados, no por contratos rígidos.",
      },
      {
        q: "¿Dónde trabajáis?",
        a: "Somos 100% digitales, lo que nos permite trabajar con empresas en cualquier parte del mundo.",
      },
      {
        q: "¿Cuánto tiempo se tarda en implementar la IA?",
        a: "Depende del alcance del proyecto. Algunos servicios se pueden activar en pocos días, mientras que soluciones más complejas requieren varias semanas. Siempre buscamos la mayor rapidez sin perder calidad.",
      },
      {
        q: "¿Ofrecéis vosotros todo el servicio?",
        a: "Sí. Desde la consultoría inicial, hasta el desarrollo, integración y soporte. Te entregamos una solución completa y funcional.",
      },
      {
        q: "¿Cómo empiezo?",
        a: "Muy fácil: agenda una llamada con nosotros, cuéntanos tu reto y en menos de 48 horas tendrás una propuesta adaptada a tus necesidades.",
      },
    ].map((item, index) => (
      <details 
        key={index}
        className="backdrop-blur-lg bg-black/60 rounded-2xl border border-[#0099FF]/60 hover:border-[#0099FF]/90 transition-all duration-300 shadow-lg overflow-hidden group"
      >
        <summary 
          className="cursor-pointer p-5 text-white text-base md:text-lg font-medium list-none flex justify-between items-center"
          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}
        >
          {item.q}
          <span className="text-[#0099FF] text-xl font-bold transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>
        <div className="px-5 pb-5">
          <p 
            className="text-white/80 text-sm md:text-base leading-relaxed"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}
          >
            {item.a}
          </p>
        </div>
      </details>
    ))}
  </div>
</section>
{/* Botones debajo de las tarjetas */}
      <div className="relative z-10 flex justify-center gap-4 pb-16">
        <Link
  to="/sabermas"
  className="glass-button backdrop-blur-xl bg-white/15 border border-white/30 rounded-full px-6 py-2 text-white font-normal text-sm transition-all duration-300 hover:bg-[#0066FF]/20 hover:border-[#0066FF]/40 shadow-lg"
>
  Saber más
</Link>

        <Link
  to="/contacto"
  className="backdrop-blur-xl bg-white/15 border border-white/30 rounded-full px-5 py-2 text-white font-normal text-sm transition-all duration-300 hover:bg-[#0066FF]/20 hover:border-[#0066FF]/40 shadow-lg"
  style={{
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
  }}
>
  Contacto
</Link>
      </div>
     {/* === PIE DE PÁGINA === */}
<footer className="w-full bg-black text-white py-10 border-t border-[#0099FF]/40 mt-20">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
    
    {/* Nombre y dirección */}
    <div>
      <h2 
        className="text-2xl font-semibold tracking-tight mb-2"
        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}
      >
        Prismha
      </h2>
      <p 
        className="text-white/80 leading-relaxed text-sm"
        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}
      >
        Mirador de Gredos 7<br />
        Madrid, España
      </p>
    </div>

    {/* Correo y política */}
    <div className="text-sm space-y-2">
      <p 
        className="text-white/80"
        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}
      >
        Correo electrónico:{" "}
        <a 
          href="mailto:prismhaia@gmail.com" 
          className="text-[#0099FF] hover:underline"
        >
          prismhaia@gmail.com
        </a>
      </p>

      {/* Enlace de Política de Privacidad */}
      <Link 
        to="/politica-privacidad"
        className="text-white/80 hover:text-[#0099FF] transition-colors"
        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}
      >
        Política de Privacidad
      </Link>
    </div>
  </div>

  <div className="mt-8 text-center text-white/50 text-xs">
    © {new Date().getFullYear()} Prismha. Todos los derechos reservados.
  </div>
</footer>


    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
  <Route path="/" element={<App />} />
  <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
  <Route path="/contacto" element={<Contacto />} />
  <Route path="/sabermas" element={<SaberMas />} />
  <Route path="/blog" element={<Blog />} />
 <Route path="/blogpost" element={<BlogPost />} />
<Route path="/blogpost2" element={<BlogPost2 />} />


</Routes>
    </BrowserRouter>
  </React.StrictMode>
);
