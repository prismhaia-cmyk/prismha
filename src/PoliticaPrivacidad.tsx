import React from "react";
import { Link } from "react-router-dom";

const PoliticaPrivacidad = () => {
  return (
    <div className="bg-black text-white min-h-screen py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        
        {/* Encabezado con título y navegación */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h1
            className="text-4xl md:text-5xl font-light text-white mb-6 md:mb-0"
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
            }}
          >
            Política de Privacidad
          </h1>

          {/* Botones de navegación tipo texto */}
          <div className="flex gap-8 text-lg font-normal">
            <Link
              to="/"
              className="transition-transform duration-200 hover:scale-110"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
              }}
            >
              Home
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
        </div>

        {/* Contenido de la política */}
        <div
          className="space-y-8 text-white leading-relaxed text-base"
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
          }}
        >
          <section>
            <h2 className="text-xl font-medium mb-3 text-white">1. Responsable del tratamiento</h2>
            <p>
              El responsable del tratamiento de los datos personales recogidos en esta web es:
              <br /><br />
              <strong>Prismha Agency</strong><br />
              Representada por: Alexander Venelin Andreev, Alejandro de Hoz García y Jesús Grande Serrano<br />
              Email de contacto:{" "}
              <a href="mailto:prismhaia@gmail.com" className="hover:underline">
                prismhaia@gmail.com
              </a><br />
              Ubicación: Madrid, España<br />
              Sitio web:{" "}
              <a href="https://www.prismha.com" className="hover:underline">
                www.prismha.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium mb-3 text-white">2. Datos que recopilamos</h2>
            <p>
              En Prismha tratamos los datos personales que el usuario nos facilita a través de formularios de contacto, chats de IA y herramientas de analítica web. No solicitamos ni tratamos categorías especiales de datos personales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium mb-3 text-white">3. Finalidad del tratamiento</h2>
            <p>
              Los datos se tratan para responder consultas, ofrecer información sobre servicios de inteligencia artificial, analizar el uso de la web y mejorar su funcionamiento. En ningún caso se venderán los datos a terceros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium mb-3 text-white">4. Base legal</h2>
            <p>
              El tratamiento se basa en el consentimiento del usuario, la ejecución de un contrato o el interés legítimo de Prismha para garantizar la seguridad y calidad del servicio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium mb-3 text-white">5. Conservación de los datos</h2>
            <p>
              Los datos se conservarán mientras dure la relación comercial o la finalidad del tratamiento. Los datos procesados en n8n no se almacenan permanentemente, solo durante las ejecuciones.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium mb-3 text-white">6. Derechos del usuario</h2>
            <p>
              Puedes ejercer tus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición escribiendo a{" "}
              <a href="mailto:prismhaia@gmail.com" className="hover:underline">
                prismhaia@gmail.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium mb-3 text-white">7. Seguridad de los datos</h2>
            <p>
              Prismha aplica medidas técnicas y organizativas adecuadas para proteger los datos personales frente a accesos no autorizados, pérdida o alteración.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium mb-3 text-white">8. Uso de inteligencia artificial</h2>
            <p>
              Prismha utiliza sistemas de IA mediante n8n, OpenAI, Google Cloud, Airtable, Google Sheets y Stripe. Los datos del usuario se procesan únicamente durante las ejecuciones, sin almacenarse de forma permanente ni emplearse para entrenar modelos públicos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium mb-3 text-white">9. Encargados del tratamiento</h2>
            <p>
              Prismha trabaja con proveedores conformes al RGPD: OpenAI, Google Cloud, Airtable, Google Sheets, Stripe y n8n.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium mb-3 text-white">10. Cookies y analítica</h2>
            <p>
              Este sitio utiliza cookies de terceros (como Google Analytics). Puedes rechazarlas o configurarlas desde el banner de cookies o tu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium mb-3 text-white">11. Actualización</h2>
            <p>
              Prismha podrá modificar esta política en cualquier momento. Última actualización: octubre de 2025.
            </p>
          </section>
        </div>
      </div>
    </div>
    
  );
};

export default PoliticaPrivacidad;
