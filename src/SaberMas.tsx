import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Link } from "react-router-dom";

const SaberMas: React.FC = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div className="relative bg-black min-h-screen w-full overflow-hidden flex flex-col items-center">
      {/* Encabezado con logo y botones */}
      <header className="w-full flex justify-between items-center px-10 py-6 max-w-6xl mx-auto">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Prismha Logo"
          className="h-12 object-contain"
          style={{ transform: "scale(1.5)" }}
        />

        {/* Botones de navegación */}
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
                href="mailto:prismhaia@gmail.com"
                className="text-[#0099FF] hover:underline"
              >
                prismhaia@gmail.com
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
