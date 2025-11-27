import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Bot, User, Send, Smile, TrendingUp, Clock, Users, Zap } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SEO from "./components/SEO";
import ProgressBar from "./components/blog/ProgressBar";
import AnimatedStat from "./components/blog/AnimatedStat";
import CategoryBadge from "./components/blog/CategoryBadge";
import ReadingTime from "./components/blog/ReadingTime";
import InteractiveQuote from "./components/blog/InteractiveQuote";

const BlogPost2 = () => {
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: "¡Hola! Soy el asistente virtual de Prismha. ¿En qué puedo ayudarte? Puedo contarte sobre nuestros servicios de automatización, IA, chatbots, agentes de voz y más.", sender: "bot" }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive (only within chat container)
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages, isTyping]);

  // Knowledge base sobre Prismha
  interface KnowledgeEntry {
    keywords?: string[];
    response: string;
  }

  interface KnowledgeBase {
    [key: string]: KnowledgeEntry;
  }

  const knowledgeBase: KnowledgeBase = {
    servicios: {
      keywords: ["servicios", "qué hacen", "qué ofrecen", "ayuda", "soluciones"],
      response: "En Prismha ofrecemos 5 servicios principales:\n\n1. **Automatización de Procesos**: Optimizamos flujos de trabajo repetitivos\n2. **Chatbots Inteligentes**: Atención al cliente 24/7 con IA\n3. **Agentes de Voz**: Llamadas automáticas inteligentes\n4. **Análisis de Datos con IA**: Insights accionables de tus datos\n5. **Consultoría Estratégica**: Te ayudamos a identificar oportunidades\n\n¿Sobre cuál te gustaría saber más?"
    },
    automatizacion: {
      keywords: ["automatización", "automatizar", "procesos", "workflows", "flujos"],
      response: "Nuestra **Automatización de Procesos** te permite:\n\n✓ Reducir hasta 30% de costes operativos\n✓ Eliminar tareas repetitivas\n✓ Integrar sistemas (CRM, ERP, etc.)\n✓ Reducir errores humanos\n✓ Escalar sin aumentar personal\n\nPodemos automatizar desde emails hasta procesos complejos de negocio. ¿Tienes algún proceso específico en mente?"
    },
    chatbots: {
      keywords: ["chatbot", "chat", "atención", "cliente", "soporte"],
      response: "Nuestros **Chatbots Inteligentes** ofrecen:\n\n🤖 Atención 24/7 sin descansos\n🧠 IA que aprende de cada conversación\n💬 Respuestas en lenguaje natural\n📊 Análisis de satisfacción en tiempo real\n🔗 Integración con tus sistemas\n\nPueden resolver hasta el 80% de consultas sin intervención humana. ¿Quieres ver cómo funcionaría en tu negocio?"
    },
    agentesVoz: {
      keywords: ["voz", "llamadas", "teléfono", "agente de voz", "voice"],
      response: "Los **Agentes de Voz** son perfectos para:\n\n📞 Calificación de leads automática\n📅 Recordatorios de citas\n📋 Encuestas de satisfacción\n🔔 Notificaciones importantes\n💼 Seguimiento de ventas\n\nSuenan completamente humanos y pueden manejar miles de llamadas simultáneas. ¿Te interesa una demo?"
    },
    ia: {
      keywords: ["ia", "inteligencia artificial", "ai", "machine learning", "datos"],
      response: "Nuestro **Análisis de Datos con IA** te ayuda a:\n\n📈 Predecir tendencias de ventas\n🎯 Segmentar clientes automáticamente\n⚠️ Detectar anomalías y fraudes\n💡 Generar insights accionables\n📊 Visualizar datos complejos\n\nConvertimos tus datos en decisiones inteligentes. ¿Qué tipo de datos manejas?"
    },
    consultoria: {
      keywords: ["consultoría", "asesoría", "estrategia", "auditoría", "ayuda"],
      response: "Nuestra **Consultoría Estratégica** incluye:\n\n🔍 Auditoría gratuita de procesos\n📋 Plan de automatización personalizado\n🎯 Identificación de quick wins\n💰 Análisis de ROI esperado\n🚀 Hoja de ruta de implementación\n\nEn 10 días identificamos 3 automatizaciones de alto impacto. ¿Quieres agendar una sesión?"
    },
    precios: {
      keywords: ["precio", "costo", "cuánto", "tarifa", "inversión"],
      response: "Nuestros precios son personalizados según tus necesidades. Factores que influyen:\n\n• Complejidad del proyecto\n• Número de integraciones\n• Volumen de operaciones\n• Soporte requerido\n\nOfrecemos una **auditoría gratuita** donde evaluamos tu caso y te damos un presupuesto exacto. ¿Te gustaría agendarla?"
    },
    contacto: {
      keywords: ["contacto", "hablar", "reunión", "agendar", "demo", "contactar"],
      response: "¡Perfecto! Puedes contactarnos de varias formas:\n\n📅 **Agendar reunión**: Haz clic en 'Saber más' para ver nuestro calendario\n📧 **Email**: A través del formulario de contacto\n💬 **WhatsApp**: Respuesta en menos de 24h\n\n¿Prefieres una llamada o una videollamada para la demo?"
    },
    tiempo: {
      keywords: ["cuánto tiempo", "duración", "plazo", "rápido", "cuando"],
      response: "Los tiempos típicos son:\n\n⚡ **Auditoría inicial**: 2-3 días\n🔧 **Implementación simple**: 1-2 semanas\n🏗️ **Proyecto complejo**: 4-8 semanas\n🚀 **Primeros resultados**: Desde la semana 1\n\nTrabajamos con metodología ágil para que veas valor rápidamente. ¿Tienes alguna urgencia específica?"
    },
    roi: {
      keywords: ["roi", "retorno", "beneficio", "ahorro", "resultados"],
      response: "Nuestros clientes típicamente ven:\n\n💰 **ROI**: 300-500% en el primer año\n⏱️ **Ahorro de tiempo**: 20-40 horas/semana\n📉 **Reducción de costes**: 25-35%\n📈 **Aumento de ventas**: 15-25%\n😊 **Satisfacción cliente**: +30 puntos NPS\n\nEl retorno exacto depende de tu caso. ¿Quieres que calculemos el tuyo?"
    },
    default: {
      response: "Interesante pregunta. Te puedo ayudar con información sobre:\n\n• Nuestros servicios (automatización, chatbots, IA, etc.)\n• Precios y ROI\n• Casos de éxito\n• Cómo empezar\n• Agendar una demo\n\n¿Sobre qué te gustaría saber más?"
    }
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Buscar coincidencias en la base de conocimiento
    for (const [key, data] of Object.entries(knowledgeBase)) {
      if (key === 'default') continue;

      if (data.keywords && data.keywords.some((keyword: string) => lowerMessage.includes(keyword))) {
        return data.response;
      }
    }

    // Respuesta por defecto si no hay coincidencia
    return knowledgeBase.default.response;
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = { id: Date.now(), text: inputMessage, sender: "user" };
    setChatMessages(prev => [...prev, userMessage]);
    const messageText = inputMessage;
    setInputMessage("");
    setIsTyping(true);

    // Simulate bot response with knowledge base
    setTimeout(() => {
      const botResponse = getBotResponse(messageText);
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        sender: "bot"
      };
      setChatMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-primary/30 selection:text-white">
      <SEO
        title="Chatbots Inteligentes"
        description="El futuro de la atención al cliente con chatbots basados en IA."
        url="https://www.prismha.com/blogpost2"
      />
      <ProgressBar />
      <Header />

      <div className="relative min-h-screen w-full flex flex-col items-center px-6 py-24">
        <article className="max-w-4xl w-full">
          {/* Header */}
          <header className="mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <CategoryBadge category="Tecnología" variant="success" />
              <ReadingTime minutes={4} />
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent"
            >
              Chatbots inteligentes: el futuro de la atención al cliente
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            >
              Los chatbots basados en inteligencia artificial están redefiniendo la forma
              en que las empresas se comunican con sus clientes.
            </motion.p>
          </header>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-2xl border border-white/10">
              <AnimatedStat value={24} suffix="/7" label="Disponibilidad" />
              <AnimatedStat value={90} suffix="%" label="Precisión" />
              <AnimatedStat value={60} suffix="%" label="Ahorro de costes" />
              <AnimatedStat value={3} suffix="s" label="Tiempo de respuesta" />
            </div>
          </section>

          {/* Interactive Chatbot Demo */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold text-white mb-4">Prueba un chatbot en acción</h2>
              <p className="text-white/60">Interactúa con este demo para ver cómo funciona</p>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/20 overflow-hidden shadow-2xl">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-primary to-blue-500 p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Asistente Virtual</h3>
                  <p className="text-xs text-white/80">En línea</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div
                ref={chatContainerRef}
                className="h-80 overflow-y-auto p-6 space-y-4 bg-black/40 scroll-smooth"
                style={{ overscrollBehavior: 'contain' }}
              >
                <AnimatePresence>
                  {chatMessages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`flex items-start gap-2 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse" : ""}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.sender === "bot" ? "bg-primary/20" : "bg-white/10"
                          }`}>
                          {message.sender === "bot" ? (
                            <Bot className="w-5 h-5 text-primary" />
                          ) : (
                            <User className="w-5 h-5 text-white" />
                          )}
                        </div>
                        <div className={`px-4 py-3 rounded-2xl ${message.sender === "bot"
                          ? "bg-white/10 text-white"
                          : "bg-primary text-white"
                          }`}>
                          {message.text}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                    <div className="bg-white/10 px-4 py-3 rounded-2xl flex gap-1">
                      <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </motion.div>
                )}

                {/* Scroll anchor */}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <div className="p-4 bg-white/5 border-t border-white/10">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Escribe tu mensaje..."
                    className="flex-1 px-4 py-3 bg-black/40 border border-white/10 rounded-full text-white placeholder-white/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="w-12 h-12 rounded-full bg-primary hover:bg-primary-hover flex items-center justify-center transition-colors"
                  >
                    <Send className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* Section 1 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-400" />
                </div>
                <h2 className="text-3xl font-semibold text-white">
                  De respuestas automáticas a conversaciones reales
                </h2>
              </div>

              <p className="text-white/90 leading-relaxed mb-6">
                Los primeros chatbots funcionaban mediante comandos predefinidos y respuestas fijas.
                Hoy, los sistemas modernos emplean modelos de lenguaje y procesamiento natural (NLP)
                para mantener conversaciones fluidas y naturales.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <h4 className="font-semibold text-red-400 mb-3">❌ Chatbots Tradicionales</h4>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Respuestas predefinidas</li>
                    <li>• Sin contexto</li>
                    <li>• Limitados a comandos</li>
                    <li>• Experiencia robótica</li>
                  </ul>
                </div>
                <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <h4 className="font-semibold text-green-400 mb-3">✓ Chatbots IA</h4>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Conversaciones naturales</li>
                    <li>• Comprensión contextual</li>
                    <li>• Aprendizaje continuo</li>
                    <li>• Experiencia humana</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Benefits Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-3xl font-semibold text-white">
                  Beneficios estratégicos
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Clock, title: "24/7", desc: "Disponibilidad continua sin descansos", color: "from-blue-500 to-cyan-500" },
                  { icon: Users, title: "Escalabilidad", desc: "Miles de conversaciones simultáneas", color: "from-purple-500 to-pink-500" },
                  { icon: Zap, title: "Eficiencia", desc: "Respuestas instantáneas y precisas", color: "from-green-500 to-teal-500" }
                ].map((benefit, i) => (
                  <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors group">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} bg-opacity-20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">{benefit.title}</h4>
                    <p className="text-white/70 text-sm">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Emotional Intelligence */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center">
                  <Smile className="w-6 h-6 text-pink-400" />
                </div>
                <h2 className="text-3xl font-semibold text-white">
                  Inteligencia emocional y personalización
                </h2>
              </div>

              <p className="text-white/90 leading-relaxed mb-6">
                La nueva generación de chatbots no se limita a responder preguntas: comprende el tono, el contexto
                y las emociones del usuario. Gracias a la IA emocional, estos sistemas pueden adaptar su lenguaje,
                ofrecer empatía y hasta detectar insatisfacción antes de que se produzca una queja formal.
              </p>

              <div className="flex flex-wrap gap-3">
                {["😊 Feliz", "😐 Neutral", "😟 Frustrado", "😡 Enojado"].map((emotion, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
                    {emotion}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* Quote */}
            <InteractiveQuote author="Director de CX, Empresa Retail">
              El verdadero potencial de los chatbots no está en automatizar respuestas, sino en crear experiencias que conecten de forma más humana con la tecnología.
            </InteractiveQuote>

            {/* Conclusion */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">Conclusión</h3>
              <p className="text-white/90 leading-relaxed">
                Los chatbots inteligentes representan una de las mayores revoluciones tecnológicas en la relación
                entre empresas y clientes. Su evolución hacia sistemas más humanos, empáticos y contextuales
                marca un antes y un después en la atención al cliente digital.
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
                ¿Listo para implementar un chatbot inteligente?
              </h4>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Creamos chatbots personalizados entrenados con tu información para atender a tus clientes como lo harías tú.
              </p>
              <Link
                to="/contacto"
                className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:scale-105 shadow-lg shadow-primary/25"
              >
                Solicitar demo personalizada
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

export default BlogPost2;
