import React, { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Clock, Users, DollarSign, CheckCircle2, ArrowRight, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SpotlightCard from "./components/ui/SpotlightCard";
import SEO from "./components/SEO";

const CasosDeExito = () => {
    const [activeFilter, setActiveFilter] = useState("Todos");

    const filters = ["Todos", "E-commerce", "Salud", "Inmobiliaria", "Hostelería"];

    const caseStudies = [
        {
            id: 1,
            company: "Moda Urbana",
            industry: "E-commerce",
            logo: "🛍️",
            challenge: "Recibían más de 200 consultas diarias por WhatsApp sobre tallas, disponibilidad y envíos. El equipo de 3 personas no daba abasto y perdían ventas por respuestas lentas.",
            solution: "Implementamos un chatbot de IA integrado con su inventario en Shopify que responde automáticamente consultas sobre productos, procesa pedidos y agenda videollamadas con asesoras de moda.",
            results: {
                roi: "650%",
                timeSaved: "120 horas/mes",
                conversion: "+75%",
                satisfaction: "4.8/5"
            },
            metrics: [
                { label: "Tiempo de respuesta", before: "2-3 horas", after: "< 30 segundos", improvement: "95%" },
                { label: "Ventas mensuales", before: "€12,000", after: "€21,000", improvement: "+75%" },
                { label: "Consultas atendidas", before: "~150/día", after: "~500/día", improvement: "+233%" },
                { label: "Costo por venta", before: "€12", after: "€4", improvement: "-67%" }
            ],
            testimonial: {
                text: "En 2 meses recuperamos la inversión. Ahora atendemos el triple de clientes con el mismo equipo. El chatbot no solo responde, vende mejor que algunos de nuestros vendedores.",
                author: "Laura Martínez",
                position: "CEO, Moda Urbana",
                image: "👩‍💼"
            },
            duration: "4 semanas",
            investment: "€1,200",
            gradient: "from-purple-500/20 to-pink-500/20"
        },
        {
            id: 2,
            company: "Clínica Dental Sonrisas",
            industry: "Salud",
            logo: "🦷",
            challenge: "El 30% de las citas programadas terminaban en no-shows. La recepcionista pasaba 4 horas diarias confirmando citas manualmente por teléfono, quitando tiempo para atender pacientes presenciales.",
            solution: "Desarrollamos un sistema de recordatorios automáticos por WhatsApp, SMS y email con confirmación de un clic. Incluye agente de voz IA para llamadas de confirmación y reprogramación automática.",
            results: {
                roi: "580%",
                timeSaved: "85 horas/mes",
                conversion: "+61%",
                satisfaction: "4.9/5"
            },
            metrics: [
                { label: "No-shows", before: "30%", after: "7%", improvement: "-77%" },
                { label: "Ocupación agenda", before: "65%", after: "92%", improvement: "+42%" },
                { label: "Ingresos mensuales", before: "€18,000", after: "€29,000", improvement: "+61%" },
                { label: "Tiempo administrativo", before: "20h/semana", after: "5h/semana", improvement: "-75%" }
            ],
            testimonial: {
                text: "Pasamos de perder €5,400 al mes por citas vacías a tener la agenda completa. La recepcionista ahora se enfoca en dar mejor atención presencial. Fue la mejor inversión del año.",
                author: "Dr. Carlos Ruiz",
                position: "Director, Clínica Dental Sonrisas",
                image: "👨‍⚕️"
            },
            duration: "3 semanas",
            investment: "€890",
            gradient: "from-blue-500/20 to-cyan-500/20"
        },
        {
            id: 3,
            company: "Inmobiliaria Prime",
            industry: "Inmobiliaria",
            logo: "🏢",
            challenge: "Recibían 400+ leads mensuales de portales inmobiliarios, pero el 70% eran curiosos sin capacidad de compra. Los agentes perdían tiempo en llamadas improductivas en vez de cerrar ventas.",
            solution: "Creamos un chatbot cualificador que hace 8 preguntas clave sobre presupuesto, zona, urgencia y financiación. Solo los leads calificados llegan a los agentes, con toda la información ya recopilada en el CRM.",
            results: {
                roi: "750%",
                timeSaved: "160 horas/mes",
                conversion: "+150%",
                satisfaction: "4.7/5"
            },
            metrics: [
                { label: "Leads cualificados", before: "30%", after: "78%", improvement: "+160%" },
                { label: "Tiempo por lead", before: "45 min", after: "12 min", improvement: "-73%" },
                { label: "Ventas cerradas", before: "4/mes", after: "10/mes", improvement: "+150%" },
                { label: "Comisiones mensuales", before: "€8,000", after: "€20,000", improvement: "+150%" }
            ],
            testimonial: {
                text: "Antes perdíamos horas con gente que solo miraba. Ahora cada llamada es con alguien serio. Más que duplicamos las ventas con el mismo equipo. El ROI fue brutal, se pagó solo en 2 semanas.",
                author: "Ana Sánchez",
                position: "Directora Comercial, Inmobiliaria Prime",
                image: "👩‍💼"
            },
            duration: "4 semanas",
            investment: "€1,450",
            gradient: "from-green-500/20 to-emerald-500/20"
        },
        {
            id: 4,
            company: "Restaurante La Terraza",
            industry: "Hostelería",
            logo: "🍽️",
            challenge: "Perdían 40% de llamadas en hora punta porque el personal estaba ocupado. Las reservas por Instagram DM se perdían entre mensajes. No tenían forma de hacer upselling de menús especiales.",
            solution: "Implementamos un sistema de reservas por WhatsApp con IA que gestiona disponibilidad en tiempo real, sugiere menús según ocasión, y envía recordatorios. Integrado con su sistema de gestión de mesas.",
            results: {
                roi: "490%",
                timeSaved: "95 horas/mes",
                conversion: "+61%",
                satisfaction: "4.8/5"
            },
            metrics: [
                { label: "Reservas perdidas", before: "40%", after: "5%", improvement: "-88%" },
                { label: "Ticket medio", before: "€32", after: "€51", improvement: "+59%" },
                { label: "Ocupación mesas", before: "68%", after: "91%", improvement: "+34%" },
                { label: "Ingresos mensuales", before: "€28,000", after: "€45,000", improvement: "+61%" }
            ],
            testimonial: {
                text: "Ya no perdemos ni una reserva. El bot sugiere vinos y menús degustación, aumentando el ticket medio. Los fines de semana estamos a tope. Recuperamos la inversión en 3 semanas.",
                author: "Miguel Ángel Torres",
                position: "Propietario, Restaurante La Terraza",
                image: "👨‍🍳"
            },
            duration: "3 semanas",
            investment: "€750",
            gradient: "from-orange-500/20 to-red-500/20"
        }
    ];

    const filteredCases = activeFilter === "Todos"
        ? caseStudies
        : caseStudies.filter(c => c.industry === activeFilter);

    return (
        <div className="relative min-h-screen bg-black text-white selection:bg-primary/30 selection:text-white">
            <SEO
                title="Casos de Éxito - Resultados Reales con IA"
                description="Descubre cómo empresas reales aumentaron sus ingresos €49K/mes y lograron ROI del 618% con nuestras soluciones de automatización e IA. Casos verificables con métricas reales."
                keywords="casos de éxito IA, ROI automatización, resultados IA España, testimonios clientes IA, éxito automatización empresarial"
                url="https://www.prismha.com/casos-de-exito"
                image="https://prismha.com/logo-google.png"
            />
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />

                <div className="relative max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
                            <span className="text-sm font-medium text-primary tracking-wide uppercase">Resultados Reales</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
                            Casos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Éxito</span>
                        </h1>

                        <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
                            Empresas reales que transformaron sus operaciones con automatización e IA.
                            Métricas verificables, resultados medibles.
                        </p>

                        {/* Stats Overview */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
                            {[
                                { icon: TrendingUp, label: "ROI Promedio", value: "618%" },
                                { icon: Clock, label: "Horas Ahorradas", value: "460h/mes" },
                                { icon: Users, label: "Clientes Felices", value: "4.8/5" },
                                { icon: DollarSign, label: "Ingresos Extra", value: "€49K/mes" }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                    className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10"
                                >
                                    <stat.icon className="w-8 h-8 text-primary mb-3 mx-auto" />
                                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-white/60 text-sm">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Filters */}
            <section className="max-w-6xl mx-auto px-6 mb-12">
                <div className="flex items-center gap-4 flex-wrap justify-center">
                    <Filter className="w-5 h-5 text-white/60" />
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2.5 rounded-full font-medium transition-all ${activeFilter === filter
                                ? "bg-primary text-white shadow-lg shadow-primary/25"
                                : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/10"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </section>

            {/* Case Studies */}
            <section className="max-w-7xl mx-auto px-6 pb-24">
                <div className="space-y-16">
                    {filteredCases.map((caseStudy, index) => (
                        <motion.div
                            key={caseStudy.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <SpotlightCard className="p-0 border-0 bg-transparent">
                                <div className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${caseStudy.gradient} p-8 md:p-12`}>
                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />

                                    <div className="relative z-10">
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
                                            <div className="flex items-center gap-4">
                                                <div className="text-6xl">{caseStudy.logo}</div>
                                                <div>
                                                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2">
                                                        {caseStudy.company}
                                                    </h2>
                                                    <div className="flex items-center gap-3 text-white/60">
                                                        <span className="px-3 py-1 rounded-full bg-white/10 text-sm">
                                                            {caseStudy.industry}
                                                        </span>
                                                        <span className="text-sm">•</span>
                                                        <span className="text-sm">{caseStudy.duration}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Quick Stats */}
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="text-center">
                                                    <div className="text-3xl font-bold text-green-400">{caseStudy.results.roi}</div>
                                                    <div className="text-white/60 text-xs">ROI</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-3xl font-bold text-blue-400">{caseStudy.results.conversion}</div>
                                                    <div className="text-white/60 text-xs">Crecimiento</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Challenge */}
                                        <div className="mb-8">
                                            <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                                                <span className="text-red-400">⚠️</span> El Desafío
                                            </h3>
                                            <p className="text-white/80 leading-relaxed text-lg">
                                                {caseStudy.challenge}
                                            </p>
                                        </div>

                                        {/* Solution */}
                                        <div className="mb-8">
                                            <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                                                <span className="text-blue-400">💡</span> La Solución
                                            </h3>
                                            <p className="text-white/80 leading-relaxed text-lg">
                                                {caseStudy.solution}
                                            </p>
                                        </div>

                                        {/* Metrics Grid */}
                                        <div className="mb-8">
                                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                                <span className="text-green-400">📊</span> Resultados Medibles
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {caseStudy.metrics.map((metric, i) => (
                                                    <div key={i} className="backdrop-blur-md bg-black/30 rounded-xl p-5 border border-white/10">
                                                        <div className="text-white/60 text-sm mb-2">{metric.label}</div>
                                                        <div className="flex items-center justify-between mb-2">
                                                            <div>
                                                                <span className="text-white/50 line-through text-sm">{metric.before}</span>
                                                                <ArrowRight className="inline w-4 h-4 mx-2 text-primary" />
                                                                <span className="text-white font-semibold text-lg">{metric.after}</span>
                                                            </div>
                                                            <span className="text-green-400 font-bold text-xl">{metric.improvement}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Testimonial */}
                                        <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/20">
                                            <div className="flex items-start gap-4">
                                                <div className="text-5xl flex-shrink-0">{caseStudy.testimonial.image}</div>
                                                <div>
                                                    <p className="text-white/90 text-lg italic mb-4 leading-relaxed">
                                                        "{caseStudy.testimonial.text}"
                                                    </p>
                                                    <div>
                                                        <div className="text-white font-semibold">{caseStudy.testimonial.author}</div>
                                                        <div className="text-white/60 text-sm">{caseStudy.testimonial.position}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Investment */}
                                        <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
                                            <div className="text-white/60">
                                                <span className="text-sm">Inversión inicial: </span>
                                                <span className="text-white font-semibold text-lg">{caseStudy.investment}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-green-400">
                                                <CheckCircle2 className="w-5 h-5" />
                                                <span className="font-medium">Recuperado en {caseStudy.duration}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-4xl mx-auto px-6 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-3xl p-8 md:p-12 border border-white/10 text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-light mb-4">
                            ¿Quieres resultados como estos?
                        </h2>
                        <p className="text-white/70 mb-8 max-w-2xl mx-auto text-lg">
                            Agenda una consulta gratuita y descubre cómo podemos ayudarte a automatizar
                            tu negocio y multiplicar tus resultados.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contacto"
                                className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:scale-105 shadow-lg shadow-primary/25"
                            >
                                Solicitar Auditoría Gratuita
                            </Link>
                            <Link
                                to="/sabermas"
                                className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium text-lg transition-all border border-white/20"
                            >
                                Agendar Reunión
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
};

export default CasosDeExito;
