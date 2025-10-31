import React, { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Link } from "react-router-dom";

const SaberMas: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div className="relative bg-black min-h-screen w-full overflow-hidden flex flex-col items-center">
      {/* === ENCABEZADO RESPONSIVE === */}
      <header className="w-full bg-black/80 backdrop-blur-md fixed top-0 left-0 z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 sm:px-10 py-4 sm:py-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Prismha Logo"
              className="h-10 sm:h-12 object-contain transition-transform hover:scale-105"
            />
          </Link>

          {/* Botón Hamburguesa (solo móvil) */}
          <button
            className="text-white sm:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Navegación */}
          <nav
            className={`${
              menuOpen ? "flex" : "hidden"
            } sm:flex flex-col sm:flex-row absolute sm:static top-16 left-0 w-full sm:w-auto bg-black sm:bg-transparent text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-6 px-6 sm:px-0 py-6 sm:py-0 transition-all duration-300`}
          >
            <Link
              to="/"
              className="text-white/80 hover:text-white transition-all duration-300 text-base font-normal tracking-tight"
            >
              Home
            </Link>

            <Link
              to="/contacto"
              className="text-white/80 hover:text-white transition-all duration-300 text-base font-normal tracking-tight"
            >
              Contacto
            </Link>

            <Link
              to="/politica-privacidad"
              className="text-white/80 hover:text-white transition-all duration-300 text-base font-normal tracking-tight"
            >
              Política de Privacidad
            </Link>
          </nav>
        </div>
      </header>

      {/* Calendario */}
      <main className="flex-grow flex justify-center items-center w-full max-w-4xl px-6 py-10">
        <div className="w-full h-[80vh] flex justify-center items-center">
          <Cal
            namespace="30min"
            calLink="prismha-c34zuk/30min"
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            config={{ layout: "month_view" }}
          />
        </div>
      </main>

      {/* Pie de página */}
      <footer className="w-full bg-black text-white py-10 border-t border-[#0099FF]/40">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h2
              className="text-2xl font-semibold tracking-tight mb-2"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
              }}
            >
              Prismha
            </h2>
            <p
              className="text-white/80 leading-relaxed text-sm"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
              }}
            >
              Mirador de Gredos 7<br />
              Madrid, España
            </p>
          </div>

          <div className="text-sm space-y-2">
            <p
              className="text-white/80"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
              }}
            >
              Correo electrónico:{" "}
              <a
                href="mailto:prismhaagencia@prismha.com"
                className="text-[#0099FF] hover:underline"
              >
                prismhaagencia@prismha.com
              </a>
            </p>

            <Link
              to="/politica-privacidad"
              className="text-white/80 hover:text-[#0099FF] transition-colors"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
              }}
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

export default SaberMas;
