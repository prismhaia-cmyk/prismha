import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, TrendingUp, Cpu, Briefcase, ArrowRight } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SpotlightCard from "./components/ui/SpotlightCard";
import CategoryBadge from "./components/blog/CategoryBadge";
import ReadingTime from "./components/blog/ReadingTime";
import SEO from "./components/SEO";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["Todos", "Tendencias", "Tecnología", "Casos de Éxito"];

  const articles = [
    {
      id: 1,
      title: "Automatización empresarial en 2025: panorama, impacto y decisiones",
      excerpt: "Un análisis sobre cómo la automatización está transformando las operaciones empresariales y los modelos de trabajo modernos.",
      category: "Tendencias",
      readTime: 5,
      link: "/blogpost",
      featured: true,
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      id: 2,
      title: "Chatbots inteligentes: la nueva era de la atención automatizada",
      excerpt: "Descubre cómo los chatbots impulsados por inteligencia artificial están redefiniendo la atención al cliente con experiencias más humanas.",
      category: "Tecnología",
      readTime: 4,
      link: "/blogpost2",
      featured: false,
      gradient: "from-green-500/20 to-teal-500/20"
    },
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === "Todos" || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Tendencias": return <TrendingUp className="w-4 h-4" />;
      case "Tecnología": return <Cpu className="w-4 h-4" />;
      case "Casos de Éxito": return <Briefcase className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-primary/30 selection:text-white">
      <SEO
        title="Blog"
        description="Explora nuestros artículos sobre automatización e inteligencia artificial."
        url="https://www.prismha.com/blog"
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
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
              Blog de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Inteligencia Artificial</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
              Descubre estrategias, casos de éxito y herramientas que te ayudarán a ahorrar tiempo, reducir costes y aumentar la productividad.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-white/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all backdrop-blur-sm"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="max-w-6xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${activeCategory === category
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/10"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-white/60 text-lg">No se encontraron artículos</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <SpotlightCard className={`p-0 border-0 bg-transparent hover:border-white/10 ${article.featured ? "md:col-span-2" : ""}`}>
                  <Link to={article.link} className="block h-full">
                    <article className="h-full flex flex-col bg-surface rounded-2xl p-8 border border-white/10 transition-all hover:bg-white/5 group relative overflow-hidden">
                      {/* Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                      <div className="relative z-10">
                        {/* Category & Reading Time */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="flex items-center gap-1.5">
                            {getCategoryIcon(article.category)}
                            <CategoryBadge category={article.category} variant="primary" />
                          </div>
                          <ReadingTime minutes={article.readTime} />
                        </div>

                        {/* Title */}
                        <h3 className={`font-semibold mb-4 leading-tight text-white group-hover:text-primary transition-colors ${article.featured ? "text-3xl md:text-4xl" : "text-2xl"}`}>
                          {article.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-white/60 mb-6 flex-grow leading-relaxed">
                          {article.excerpt}
                        </p>

                        {/* Read More */}
                        <div className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors font-medium group/link">
                          Leer artículo
                          <ArrowRight className="w-4 h-4 transform transition-transform group-hover/link:translate-x-1" />
                        </div>
                      </div>
                    </article>
                  </Link>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
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
              ¿Quieres más contenido como este?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Suscríbete para recibir las últimas tendencias en automatización e IA directamente en tu inbox.
            </p>
            <Link
              to="/contacto"
              className="inline-block bg-white text-black px-8 py-4 rounded-full font-medium text-lg transition-all hover:bg-gray-200 hover:scale-105 shadow-lg"
            >
              Mantente informado
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
