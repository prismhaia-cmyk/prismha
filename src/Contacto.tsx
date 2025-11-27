import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Clock, CheckCircle2, MessageCircle, Zap, Shield, TrendingUp } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SEO from "./components/SEO";

const WEBHOOK_URL =
  "https://prismha.app.n8n.cloud/webhook/62c4994c-a5e9-47c7-99e5-a25d2cb0b8a2";

const Contacto = () => {
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
    <div className="relative min-h-screen bg-black text-white selection:bg-primary/30 selection:text-white">
      <SEO
        title="Contacto - Solicita tu Auditoría Gratuita"
        description="Contacta con Prismha para automatizar tu empresa con IA. Respuesta en menos de 24h. Auditoría gratuita incluida. Descubre cómo aumentar tus ingresos y reducir costes."
        keywords="contacto Prismha, auditoría gratuita IA, consultoría automatización, contactar agencia IA España"
        url="https://www.prismha.com/contacto"
        image="https://prismha.com/logo-google.png"
      />
      <Header />

      <div className="relative min-h-screen w-full px-6 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            Hablemos de tu <span className="text-primary">proyecto</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            Cuéntanos tu reto y te mostraremos cómo la automatización puede transformar tu negocio
          </p>
        </motion.div>

        {/* Beneficios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-white mb-2">Respuesta en 24h</h3>
              <p className="text-white/60 text-sm">Nuestro equipo te responderá en menos de un día hábil</p>
            </div>

            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 text-center">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Auditoría gratuita</h3>
              <p className="text-white/60 text-sm">Análisis inicial de tus procesos sin coste</p>
            </div>

            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Sin compromiso</h3>
              <p className="text-white/60 text-sm">Explora las posibilidades sin obligación</p>
            </div>
          </div>
        </motion.div>

        {/* Contenido principal: Formulario + Sidebar */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="backdrop-blur-xl bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-light mb-8">Envíanos un mensaje</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Nombre */}
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-medium">Nombre *</label>
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Nombre y apellidos"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-medium">Email *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>

                  {/* Teléfono - OPCIONAL */}
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-medium">
                      Teléfono <span className="text-white/40 text-xs">(opcional)</span>
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      placeholder="+34 600 000 000"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>

                  {/* Empresa - OPCIONAL */}
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-medium">
                      Empresa <span className="text-white/40 text-xs">(opcional)</span>
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      placeholder="Nombre de tu empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-white/80 mb-2 text-sm font-medium">¿Cómo podemos ayudarte? *</label>
                  <textarea
                    name="mensaje"
                    rows={5}
                    placeholder="Cuéntanos sobre tu proyecto o necesidades..."
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  />
                </div>

                {/* Botón */}
                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    disabled={enviando}
                    className="w-full md:w-auto px-12 py-4 bg-primary text-white rounded-full font-medium text-lg transition-all duration-300 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1"
                  >
                    {enviando ? "Enviando..." : "Enviar mensaje"}
                  </button>
                </div>

                {/* Mensaje de confirmación */}
                {enviado && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Contacto alternativo */}
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="font-semibold text-white mb-4">Otras formas de contacto</h3>
              <div className="space-y-4">
                <a href="mailto:prismhaagencia@prismha.com" className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>prismhaagencia@prismha.com</span>
                </a>
                <a href="tel:+34669369800" className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+34 669 369 800</span>
                </a>
                <a href="https://wa.me/34669369800" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* FAQs */}
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="font-semibold text-white mb-4">Preguntas frecuentes</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white/90 font-medium mb-1 text-sm">¿Cuánto cuesta?</h4>
                  <p className="text-white/60 text-xs">Depende del proyecto. La auditoría inicial es gratuita.</p>
                </div>
                <div>
                  <h4 className="text-white/90 font-medium mb-1 text-sm">¿Cuánto tiempo toma?</h4>
                  <p className="text-white/60 text-xs">Proyectos simples: 1-2 semanas. Complejos: 4-8 semanas.</p>
                </div>
                <div>
                  <h4 className="text-white/90 font-medium mb-1 text-sm">¿Qué necesito preparar?</h4>
                  <p className="text-white/60 text-xs">Solo una descripción de tus procesos actuales.</p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="backdrop-blur-md bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-2xl p-6 border border-primary/20">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-white/90 text-sm italic mb-2">
                    "En 2 semanas automatizamos nuestro proceso de ventas. Ahorramos 20 horas semanales."
                  </p>
                  <p className="text-white/60 text-xs">— CEO, Empresa Retail</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contacto;
