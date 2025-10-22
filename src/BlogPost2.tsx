import React from "react";
import { Link } from "react-router-dom";

const BlogPost2 = () => {
  return (
    <div className="relative bg-black min-h-screen w-full overflow-hidden flex flex-col items-center">
      {/* Encabezado con logo y botones */}
      <header className="w-full flex justify-between items-center px-10 py-6 max-w-6xl mx-auto">
        <img
          src="/logo.png"
          alt="Prismha Logo"
          className="h-12 object-contain"
          style={{ transform: "scale(1.5)" }}
        />
        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className="text-white/80 hover:text-white transition-all duration-300 text-sm md:text-base font-normal tracking-tight"
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
            }}
          >
            Home
          </Link>
          <Link
            to="/contacto"
            className="text-white/80 hover:text-white transition-all duration-300 text-sm md:text-base font-normal tracking-tight"
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
            }}
          >
            Contacto
          </Link>
          <Link
            to="/politica-privacidad"
            className="text-white/80 hover:text-white transition-all duration-300 text-sm md:text-base font-normal tracking-tight"
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
            }}
          >
            Política de Privacidad
          </Link>
        </nav>
      </header>

      {/* Contenido del blog */}
      <div className="text-white w-full flex justify-center px-6 md:px-20 py-16">
        <article className="max-w-4xl w-full space-y-10">
          {/* Título */}
          <h1 className="text-4xl md:text-5xl font-semibold text-center mb-8 text-blue-400 leading-tight">
            Chatbots inteligentes: el futuro de la atención al cliente
          </h1>

          <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
            Los chatbots basados en inteligencia artificial están redefiniendo la forma
            en que las empresas se comunican con sus clientes. Ya no son simples asistentes,
            sino sistemas capaces de comprender, aprender y adaptarse a las necesidades humanas.
          </p>

          {/* Sección 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-3">
              1. De respuestas automáticas a conversaciones reales
            </h2>
            <p className="text-white/90 leading-relaxed">
              Los primeros chatbots funcionaban mediante comandos predefinidos y respuestas fijas.
              Hoy, los sistemas modernos emplean modelos de lenguaje y procesamiento natural (NLP)
              para mantener conversaciones fluidas y naturales. Un chatbot inteligente puede interpretar
              emociones, detectar intenciones y ofrecer soluciones personalizadas sin intervención humana.
            </p>
          </section>

          {/* Sección 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-3">
              2. Beneficios estratégicos para las empresas
            </h2>
            <p className="text-white/90 leading-relaxed">
              Incorporar chatbots inteligentes en la atención al cliente no solo mejora la experiencia del usuario,
              sino que también optimiza recursos internos. Estos asistentes pueden gestionar miles de consultas
              simultáneamente, reduciendo costes y permitiendo que los equipos humanos se concentren en tareas más
              complejas o creativas.
            </p>
            <ul className="list-disc list-inside text-white/80 mt-4 space-y-2">
              <li>Disponibilidad 24/7 con tiempos de respuesta instantáneos.</li>
              <li>Escalabilidad sin necesidad de ampliar personal.</li>
              <li>Recopilación y análisis de datos de interacción para mejorar decisiones comerciales.</li>
            </ul>
          </section>

          {/* Sección 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-3">
              3. Inteligencia emocional y personalización
            </h2>
            <p className="text-white/90 leading-relaxed">
              La nueva generación de chatbots no se limita a responder preguntas: comprende el tono, el contexto
              y las emociones del usuario. Gracias a la IA emocional, estos sistemas pueden adaptar su lenguaje,
              ofrecer empatía y hasta detectar insatisfacción antes de que se produzca una queja formal.
            </p>
          </section>

          {/* Sección 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-3">
              4. Casos de uso en distintos sectores
            </h2>
            <p className="text-white/90 leading-relaxed">
              Desde el comercio electrónico hasta la banca, los chatbots están presentes en casi todos los sectores.
              En retail, ayudan a gestionar pedidos y devoluciones; en salud, orientan al paciente y facilitan citas;
              en educación, acompañan el proceso de aprendizaje con tutorización digital personalizada.
            </p>
          </section>

          {/* Sección 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-3">
              5. El papel del aprendizaje continuo
            </h2>
            <p className="text-white/90 leading-relaxed">
              A diferencia de los sistemas tradicionales, los chatbots con machine learning mejoran con el tiempo.
              Analizan cada conversación, identifican patrones de comportamiento y se ajustan a las preferencias
              del usuario. Esto permite una atención progresivamente más eficiente y humana.
            </p>
          </section>

          {/* Cita destacada */}
          <blockquote className="border-l-4 border-blue-400 pl-4 italic text-white/70 my-10">
            “El verdadero potencial de los chatbots no está en automatizar respuestas, sino en crear experiencias que
            conecten de forma más humana con la tecnología.”
          </blockquote>

          {/* Sección 6 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-3">
              6. Desafíos y futuro de la atención automatizada
            </h2>
            <p className="text-white/90 leading-relaxed">
              Aunque los avances son notables, el reto está en equilibrar eficiencia y empatía.
              Las empresas deben garantizar transparencia en el uso de IA, ofrecer opciones humanas cuando sea necesario
              y mantener una comunicación ética y responsable. En el futuro, veremos chatbots que no solo hablen,
              sino que entiendan el contexto completo del cliente, anticipándose a sus necesidades.
            </p>
          </section>

          {/* Conclusión */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-3">
              Conclusión
            </h2>
            <p className="text-white/90 leading-relaxed">
              Los chatbots inteligentes representan una de las mayores revoluciones tecnológicas en la relación
              entre empresas y clientes. Su evolución hacia sistemas más humanos, empáticos y contextuales
              marca un antes y un después en la atención al cliente digital.
            </p>
          </section>

          {/* Botón volver */}
          <div className="text-center mt-16">
            <Link
              to="/blog"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-all duration-300"
            >
              ← Volver al Blog
            </Link>
          </div>
        </article>
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

export default BlogPost2;
