import React, { useState } from "react";
import { Link } from "react-router-dom";

const WEBHOOK_URL =
  "https://prismha.app.n8n.cloud/webhook/62c4994c-a5e9-47c7-99e5-a25d2cb0b8a2"; // 🔹 tu webhook

const Contacto = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setEnviado(true);
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        empresa: "",
        mensaje: "",
      });

      setTimeout(() => setEnviado(false), 5000);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert(
        "Hubo un problema al enviar el mensaje. Inténtalo de nuevo más tarde."
      );
    } finally {
      setEnviando(false);
    }
  };

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
              to="/politica-privacidad"
              className="text-white/80 hover:text-white transition-all duration-300 text-base font-normal tracking-tight"
            >
              Política de Privacidad
            </Link>
          </nav>
        </div>
      </header>
      {/* ===== FORMULARIO ===== */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 pt-32">

  <div className="w-full max-w-5xl backdrop-blur-xl bg-black/60 p-12 rounded-3xl border border-[#0099FF]/40 shadow-2xl mx-auto">
    <h1
      className="text-white text-3xl md:text-4xl font-light text-center mb-2"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}
    >
      Contáctanos
    </h1>
    <p
      className="text-white/60 text-center mb-10"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}
    >
      En menos de 24 horas tendrás una respuesta.
    </p>

    {/* Formulario en dos columnas */}
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Nombre */}
      <div>
        <label className="block text-white/80 mb-2 text-sm">Nombre *</label>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre y apellidos"
          value={formData.nombre}
          onChange={handleChange}
          required
          className="w-full px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#0099FF]"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-white/80 mb-2 text-sm">Email *</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#0099FF]"
        />
      </div>

      {/* Teléfono */}
      <div>
        <label className="block text-white/80 mb-2 text-sm">Teléfono *</label>
        <input
          type="tel"
          name="telefono"
          placeholder="📞 Ingresa tu número de teléfono"
          value={formData.telefono}
          onChange={handleChange}
          required
          className="w-full px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#0099FF]"
        />
      </div>

      {/* Empresa */}
      <div>
        <label className="block text-white/80 mb-2 text-sm">Nombre de la empresa *</label>
        <input
          type="text"
          name="empresa"
          placeholder="Nombre de la empresa"
          value={formData.empresa}
          onChange={handleChange}
          required
          className="w-full px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#0099FF]"
        />
      </div>

      {/* Mensaje */}
      <div className="md:col-span-2">
        <label className="block text-white/80 mb-2 text-sm">¿Cómo podemos ayudarte? *</label>
        <textarea
          name="mensaje"
          rows={5}
          placeholder="Cuéntanos cómo podemos impulsar tu empresa"
          value={formData.mensaje}
          onChange={handleChange}
          required
          className="w-full px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#0099FF]"
        />
      </div>

      {/* Botón */}
      <div className="md:col-span-2 flex justify-center">
        <button
          type="submit"
          disabled={enviando}
          className="w-full md:w-1/2 bg-[#0099FF] text-white py-3 rounded-full font-medium transition-all duration-300 hover:bg-[#00B3FF] disabled:opacity-50"
          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}
        >
          {enviando ? "Enviando..." : "Enviar mensaje"}
        </button>
      </div>

      {/* Mensaje de confirmación */}
      {enviado && (
        <div className="md:col-span-2 flex justify-center items-center gap-2 mt-6 text-green-400 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-green-400 animate-pulse"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          <span>Mensaje enviado correctamente ✅</span>
        </div>
      )}
    </form>
  </div>
</main>


      {/* ===== PIE ===== */}
      <footer className="w-full bg-black text-white py-10 border-t border-[#0099FF]/40">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight mb-2">Prismha</h2>
            <p className="text-white/80 leading-relaxed text-sm">
              Mirador de Gredos 7<br />
              Madrid, España
            </p>
          </div>
          <div className="text-sm space-y-2">
            <p className="text-white/80">
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

export default Contacto;
