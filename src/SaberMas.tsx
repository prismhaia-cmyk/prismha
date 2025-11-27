import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Cal, { getCalApi } from "@calcom/embed-react";
import { CheckCircle2, Clock, TrendingUp, Target, Zap, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SEO from "./components/SEO";

const SaberMas: React.FC = () => {
  const [calLoaded, setCalLoaded] = React.useState(false);

  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({ namespace: "30min" });
        cal("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
          theme: "dark"
        });
        setCalLoaded(true);
      } catch (error) {
        console.error("Error loading Cal.com:", error);
      }
    })();
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-primary/30 selection:text-white">
      <SEO
        title="Agendar Consulta Gratuita - 30 Minutos"
        description="Agenda tu consulta gratuita de 30 minutos. Descubre 3 oportunidades de automatización para tu negocio y obtén una estimación de ROI personalizada. Sin compromiso."
        keywords="consulta gratuita IA, agendar reunión automatización, consultoría IA gratis, análisis ROI IA"
        url="https://www.prismha.com/sabermas"
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
            Agenda tu <span className="text-primary">consulta gratuita</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            30 minutos para descubrir cómo la automatización puede transformar tu negocio
          </p>

          {/* Qué incluye */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 text-left"
          >
            <h3 className="font-semibold text-white mb-4 text-center">Qué obtendrás en esta sesión:</h3>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">Análisis de tu caso específico</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">3 oportunidades de automatización</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">Estimación de ROI esperado</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">Plan de acción personalizado</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Contenido principal: Calendario + Sidebar */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Calendario */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
              <div className="h-[700px] relative">
                <Cal
                  namespace="30min"
                  calLink="prismha-c34zuk/30min"
                  style={{ width: "100%", height: "100%", overflow: "auto" }}
                  config={{ layout: "month_view", theme: "dark" }}
                />
                {!calLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="text-center">
                      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-white/70">Cargando calendario...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Preparación */}
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-white">Cómo prepararte</h3>
              </div>
              <div className="space-y-3 text-sm text-white/70">
                <p>Para aprovechar al máximo la sesión:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Identifica 2-3 procesos repetitivos en tu negocio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Ten claros tus objetivos de crecimiento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Prepara preguntas sobre automatización</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Testimonios */}
            <div className="backdrop-blur-md bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-2xl p-6 border border-primary/20">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-white/90 text-sm italic mb-2">
                    "La sesión fue reveladora. Identificamos 5 automatizaciones que ahora nos ahorran 30h/semana."
                  </p>
                  <p className="text-white/60 text-xs">— Director de Operaciones</p>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-md bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/20">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-white/90 text-sm italic mb-2">
                    "En 30 minutos entendimos el potencial de la IA para nuestro negocio. ROI de 400% en 6 meses."
                  </p>
                  <p className="text-white/60 text-xs">— CEO, Startup SaaS</p>
                </div>
              </div>
            </div>

            {/* CTA alternativo */}
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="font-semibold text-white mb-4">¿Prefieres otra forma?</h3>
              <div className="space-y-3">
                <Link
                  to="/contacto"
                  className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">Escríbenos un mensaje</span>
                </Link>
                <a
                  href="https://wa.me/34600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm">Chatea por WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Horario */}
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-white">Horario</h3>
              </div>
              <div className="space-y-2 text-sm text-white/70">
                <p>Lunes a Viernes</p>
                <p className="text-white/90 font-medium">9:00 - 14:00  16:30 - 20:30 (CET)</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <h2 className="text-2xl md:text-3xl font-light text-center mb-8">Preguntas frecuentes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="font-semibold text-white mb-2">¿Tiene algún coste?</h3>
              <p className="text-white/70 text-sm">No, la consulta es completamente gratuita y sin compromiso.</p>
            </div>
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="font-semibold text-white mb-2">¿Qué pasa después?</h3>
              <p className="text-white/70 text-sm">Te enviaremos un resumen con las oportunidades identificadas y próximos pasos.</p>
            </div>
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="font-semibold text-white mb-2">¿Puedo reprogramar?</h3>
              <p className="text-white/70 text-sm">Sí, puedes cambiar la fecha hasta 24h antes sin problema.</p>
            </div>
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="font-semibold text-white mb-2">¿Es por videollamada?</h3>
              <p className="text-white/70 text-sm">Sí, recibirás un link de Google Meet al confirmar la cita.</p>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default SaberMas;
