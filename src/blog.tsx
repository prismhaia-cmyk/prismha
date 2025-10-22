import React from "react";
import { Link } from "react-router-dom";

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] via-[#0A0A0A] to-[#101010] text-white flex flex-col items-center px-6 py-16">

      {/* Encabezado */}
      <header className="w-full max-w-6xl flex justify-between items-center mb-16">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Prismha Logo"
            className="h-12 object-contain"
          />
          <span className="text-xl font-semibold tracking-tight">
            
          </span>
        </Link>

        {/* Navegación */}
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
            className="hover:text-[#0099FF] transition-colors"
          >
            Contacto
          </Link>
          <Link
            to="/blog"
            className="text-[#0099FF] font-medium transition-colors"
          >
            Blog
          </Link>
        </nav>
      </header>

      {/* Contenido principal */}
      <main className="w-full max-w-4xl text-center">
        <h1
  className="text-4xl font-semibold tracking-tight mb-4 text-center"
  style={{
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif',
    fontWeight: 500,
  }}
>
  Blog de Automatización e Inteligencia Artificial
</h1>

        <p className="text-white/70 text-lg leading-relaxed mb-12">
          Aprende cómo la automatización y la inteligencia artificial pueden
          transformar tu empresa. Descubre estrategias, casos de éxito y
          herramientas que te ayudarán a ahorrar tiempo, reducir costes y
          aumentar la productividad.
        </p>

        {/* Artículos destacados */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* Artículo 1 */}
          <article className="bg-[#111] rounded-2xl p-6 border border-white/10 hover:border-[#0099FF] transition-all">
            <h3 className="text-2xl font-semibold mb-3">
  Automatización empresarial en 2025: panorama, impacto y decisiones que importan
</h3>
<p className="text-white/70 mb-6">
  Un análisis sobre cómo la automatización está transformando las operaciones empresariales, 
  los modelos de trabajo y las decisiones estratégicas dentro de las compañías modernas.
</p>
<Link to="/blogpost" className="text-[#19A1FF] font-medium hover:underline">
  Leer más →
</Link>


          </article>

          {/* Artículo 2 */}
          <article className="bg-[#111] rounded-2xl p-6 border border-white/10 hover:border-[#0099FF] transition-all">
            <h3 className="text-2xl font-semibold mb-3">
  Chatbots inteligentes: la nueva era de la atención automatizada
</h3>
<p className="text-white/70 mb-6">
  Descubre cómo los chatbots impulsados por inteligencia artificial están redefiniendo la atención al cliente,
  ofreciendo experiencias más rápidas, humanas y personalizadas.
</p>
<Link to="/blogpost2" className="text-[#19A1FF] font-medium hover:underline">
  Leer más →
</Link>

            
            
          </article>
        </section>
      </main>

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

export default Blog;
