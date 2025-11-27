import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TrendingUp, Target, Zap, Shield, BarChart3, CheckCircle2 } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SEO from "./components/SEO";
import ProgressBar from "./components/blog/ProgressBar";
import AnimatedStat from "./components/blog/AnimatedStat";
import CategoryBadge from "./components/blog/CategoryBadge";
import ReadingTime from "./components/blog/ReadingTime";
import InteractiveQuote from "./components/blog/InteractiveQuote";

const BlogPost = () => {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-primary/30 selection:text-white">
      <SEO
        title="Automatización Empresarial en 2025"
        description="Panorama, impacto y decisiones que importan en la automatización empresarial."
        url="https://www.prismha.com/blogpost"
      />
      <ProgressBar />
      <Header />

      <div className="relative min-h-screen w-full flex flex-col items-center px-6 py-24">
        <article className="max-w-4xl mx-auto w-full">
          {/* Header */}
          <header className="mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <CategoryBadge category="Tendencias" variant="primary" />
              <ReadingTime minutes={5} />
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent"
            >
              Automatización Empresarial en 2025: panorama, impacto y decisiones que importan
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            >
              Qué está ocurriendo en el mundo de las automatizaciones, cómo están tomando decisiones
              las empresas y qué factores separan a quienes obtienen retorno real de quienes solo hacen pruebas.
            </motion.p>
          </header>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl border border-white/10">
              <AnimatedStat value={30} suffix="%" label="Reducción de costes" />
              <AnimatedStat value={2} suffix="x" label="Velocidad de procesos" />
              <AnimatedStat value={24} suffix="/7" label="Disponibilidad" />
              <AnimatedStat value={85} suffix="%" label="Satisfacción" />
            </div>
          </section>

          {/* Executive Summary */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface border border-white/10 rounded-2xl p-8 mb-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold text-primary">Resumen ejecutivo</h2>
              </div>
              <p className="text-white/80 leading-relaxed">
                La automatización empresarial ha pasado de ser una promesa a convertirse en una capa
                imprescindible de la operación. Las compañías que mejor capitalizan su potencial no son
                necesariamente las que despliegan más herramientas, sino las que diseñan <strong className="text-white">criterios de decisión</strong>,
                <strong className="text-white"> miden impacto</strong> y <strong className="text-white">alinean automatización con objetivos de negocio</strong>.
              </p>
            </div>
          </motion.section>

          {/* Main Content */}
          <div className="space-y-16 text-white/90 leading-relaxed">

            {/* Section 1 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-3xl font-semibold text-white">
                  Panorama 2025: de automatizar tareas a orquestar decisiones
                </h3>
              </div>

              <p className="mb-4">
                La conversación ha evolucionado. Las automatizaciones ya no se limitan a mover datos entre
                sistemas: hoy <strong>orquestan eventos, priorizan flujos</strong> y se integran con modelos de decisión.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                {[
                  { icon: CheckCircle2, title: "Producto interno", desc: "Versión, propietario y roadmap" },
                  { icon: BarChart3, title: "Observabilidad", desc: "Monitorización de tiempos y costes" },
                  { icon: Shield, title: "Gobernanza ligera", desc: "Reglas simples de priorización" }
                ].map((item, i) => (
                  <div key={i} className="p-5 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <item.icon className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Section 2 - Impact */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-3xl font-semibold text-white">
                  Impacto real: dónde se ve el retorno
                </h3>
              </div>

              <p className="mb-6">
                Las palancas de retorno más consistentes son <strong>tiempo</strong>, <strong>calidad</strong> y <strong>previsibilidad</strong>.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 rounded-xl p-6">
                  <h4 className="font-semibold mb-4 text-white flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    Indicadores operativos
                  </h4>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Tiempo de ciclo por proceso</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Tasa de reintentos/errores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Tiempo medio de resolución</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-white/10 rounded-xl p-6">
                  <h4 className="font-semibold mb-4 text-white flex items-center gap-2">
                    <Target className="w-5 h-5 text-green-400" />
                    Indicadores de negocio
                  </h4>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Pedidos desbloqueados por reducción de fricción</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Ahorro en horas-hombre equivalentes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>CSAT/NPS vinculado a respuestas rápidas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Interactive Quote */}
            <InteractiveQuote author="CEO, Empresa Mediana">
              El cambio no fue "magia técnica", sino alineación entre proceso y decisión. Ganamos +18% en tasa de cierre simplemente reduciendo el tiempo a propuesta.
            </InteractiveQuote>

            {/* Maturity Model - Visual Timeline */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold text-white mb-8">
                Modelo de madurez en automatización
              </h3>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-blue-400 to-green-400" />

                {/* Timeline Items */}
                <div className="space-y-8">
                  {[
                    { level: "1", title: "Exploración", desc: "Pruebas aisladas, sin métricas", color: "from-red-500 to-orange-500" },
                    { level: "2", title: "Operación", desc: "Primeras automatizaciones 'dueñas' de un KPI", color: "from-orange-500 to-yellow-500" },
                    { level: "3", title: "Orquestación", desc: "Flujos conectados entre áreas, monitorizados", color: "from-yellow-500 to-green-500" },
                    { level: "4", title: "Producto interno", desc: "Catálogo, versionado y gobierno ligero", color: "from-green-500 to-blue-500" }
                  ].map((stage, i) => (
                    <div key={i} className="relative pl-16">
                      <div className={`absolute left-0 w-12 h-12 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center font-bold text-white shadow-lg`}>
                        {stage.level}
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                        <h4 className="text-xl font-semibold text-white mb-2">{stage.title}</h4>
                        <p className="text-white/70">{stage.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-8 text-white/80 bg-primary/10 border border-primary/20 rounded-xl p-6">
                <strong className="text-primary">Punto crítico:</strong> El salto entre "Operación" y "Orquestación" es donde la empresa deja de automatizar tareas sueltas y empieza a alinear flujos a objetivos comunes.
              </p>
            </motion.section>

            {/* Conclusion */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">Conclusión</h3>
              <p className="text-white/90 leading-relaxed">
                La automatización es una <strong>competencia organizativa</strong>. Las empresas que ganan consistencia
                combinan visión de negocio, criterios de priorización y observabilidad. El reto ya no es
                empezar, sino <strong>sostener resultados</strong> mientras la operación crece.
              </p>
            </motion.section>

            {/* CTA */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface border border-primary/30 rounded-2xl p-8 text-center"
            >
              <h4 className="text-2xl font-semibold mb-4 text-primary">
                ¿Quieres identificar 3 automatizaciones de impacto en 10 días?
              </h4>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                En Prismha trabajamos con un marco de priorización y métricas que aceleran decisiones y retornos.
              </p>
              <Link
                to="/contacto"
                className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:scale-105 shadow-lg shadow-primary/25"
              >
                Agendar consulta gratuita
              </Link>
            </motion.section>
          </div>

          {/* Back Button */}
          <div className="text-center mt-16">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-8 py-3 rounded-full transition-all font-medium border border-white/10"
            >
              ← Volver al Blog
            </Link>
          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;
