import React from "react";
import { Link } from "react-router-dom";

const BlogPost: React.FC = () => {
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
      <article className="max-w-4xl mx-auto">
        {/* Título */}
        <header className="mb-12">
          <h1
            className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-4"
            style={{ color: "#19A1FF" }}
          >
            Automatización Empresarial en 2025: panorama, impacto y decisiones que importan
          </h1>
          <p className="text-center text-white/70 text-lg">
            Qué está ocurriendo en el mundo de las automatizaciones, cómo están tomando decisiones
            las empresas y qué factores separan a quienes obtienen retorno real de quienes solo hacen pruebas.
          </p>
        </header>

        {/* CINTILLO / RESUMEN EJECUTIVO */}
        <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-3" style={{ color: "#19A1FF" }}>
            Resumen ejecutivo
          </h2>
          <p className="text-white/80 leading-relaxed">
            La automatización empresarial ha pasado de ser una promesa a convertirse en una capa
            imprescindible de la operación. Las compañías que mejor capitalizan su potencial no son
            necesariamente las que despliegan más herramientas, sino las que diseñan **criterios de decisión**,
            **miden impacto** y **alinean automatización con objetivos de negocio**. El foco no es “qué conectar”,
            sino **qué resultado mantener en el tiempo**.
          </p>
        </section>

        {/* CONTENIDO PRINCIPAL */}
        <div className="space-y-14 text-white/90 leading-relaxed">

          {/* 1. PANORAMA */}
          <section>
            <h3 className="text-2xl font-semibold mb-3" style={{ color: "#19A1FF" }}>
              1) Panorama 2025: de automatizar tareas a orquestar decisiones
            </h3>
            <p>
              La conversación ha evolucionado. Las automatizaciones ya no se limitan a mover datos entre
              sistemas: hoy **orquestan eventos, priorizan flujos** y se integran con modelos de decisión.
              Las áreas más activas son Operaciones, Atención al Cliente, Ventas y Finanzas; todas con un punto
              común: **reducción de fricción interna** y **aumento de velocidad** sin sacrificar control.
            </p>
            <p className="mt-4">
              Tres rasgos de madurez que vemos en las organizaciones que avanzan:
            </p>
            <ul className="list-disc list-inside text-white/80 mt-2">
              <li>Automatización como **producto interno**: versión, propietario y roadmap.</li>
              <li>**Observabilidad**: lo que no se monitoriza, no existe (tiempos, costes, errores).</li>
              <li>**Gobernanza ligera**: reglas simples para priorizar qué sí y qué no automatizar.</li>
            </ul>
          </section>

          {/* 2. IMPACTO */}
          <section>
            <h3 className="text-2xl font-semibold mb-3" style={{ color: "#19A1FF" }}>
              2) Impacto real: dónde se ve el retorno
            </h3>
            <p>
              Las palancas de retorno más consistentes son **tiempo**, **calidad** y **previsibilidad**.
              Reducir tiempos de ciclo desbloquea ventas y entrega; mejorar la calidad reduce retrabajo;
              la previsibilidad estabiliza la operación y permite escalar.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h4 className="font-semibold mb-2">Indicadores operativos</h4>
                <ul className="list-disc list-inside text-white/80">
                  <li>Tiempo de ciclo por proceso.</li>
                  <li>Tasa de reintentos/errores.</li>
                  <li>Tiempo medio de resolución de casos.</li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h4 className="font-semibold mb-2">Indicadores de negocio</h4>
                <ul className="list-disc list-inside text-white/80">
                  <li>Pedidos/ingresos desbloqueados por reducción de fricción.</li>
                  <li>Ahorro en horas-hombre equivalentes.</li>
                  <li>CSAT/NPS vinculado a respuestas más rápidas y consistentes.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. CASOS POR ÁREA (alto nivel) */}
          <section>
            <h3 className="text-2xl font-semibold mb-3" style={{ color: "#19A1FF" }}>
              3) Casos por área (sin entrar en el “cómo”)
            </h3>
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h4 className="font-semibold mb-2">Atención al cliente</h4>
                <p className="text-white/80">
                  Enrutado inteligente de solicitudes, respuestas consistentes, cierre automático de
                  tickets cuando se cumplan condiciones de negocio, y reportes de demanda en tiempo real.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h4 className="font-semibold mb-2">Ventas</h4>
                <p className="text-white/80">
                  Calificación automatizada de oportunidades, recordatorios contextuales y
                  actualización de estados sin intervención manual, con foco en **tiempo a propuesta**.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h4 className="font-semibold mb-2">Operaciones</h4>
                <p className="text-white/80">
                  Sincronización entre sistemas, validaciones automáticas, conciliaciones recurrentes y
                  alertas tempranas ante desviaciones del flujo estándar.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h4 className="font-semibold mb-2">Finanzas</h4>
                <p className="text-white/80">
                  Preparación de reportes, validación de facturas y detección de incoherencias
                  antes del cierre mensual.
                </p>
              </div>
            </div>
          </section>

          {/* 4. MODELO DE MADUREZ */}
          <section>
            <h3 className="text-2xl font-semibold mb-3" style={{ color: "#19A1FF" }}>
              4) Modelo simple de madurez en automatización
            </h3>
            <ol className="list-decimal list-inside text-white/80 space-y-2">
              <li><strong>Exploración</strong>: pruebas aisladas, sin métricas.</li>
              <li><strong>Operación</strong>: primeras automatizaciones “dueñas” de un KPI.</li>
              <li><strong>Orquestación</strong>: flujos conectados entre áreas, monitorizados.</li>
              <li><strong>Producto interno</strong>: catálogo, versionado y gobierno ligero.</li>
            </ol>
            <p className="mt-4">
              El salto crítico ocurre entre “Operación” y “Orquestación”: cuando la empresa deja
              de automatizar tareas sueltas y empieza a **alinear flujos a objetivos comunes**.
            </p>
          </section>

          {/* 5. ARQUITECTURA DE DECISIÓN (alto nivel) */}
          <section>
            <h3 className="text-2xl font-semibold mb-3" style={{ color: "#19A1FF" }}>
              5) Arquitectura de decisión (sin herramientas)
            </h3>
            <p>
              Toda iniciativa sostenible de automatización combina cuatro capas:
            </p>
            <ul className="list-disc list-inside text-white/80 mt-2">
              <li><strong>Eventos</strong>: qué dispara cada flujo.</li>
              <li><strong>Reglas</strong>: condiciones de negocio claras y auditables.</li>
              <li><strong>Acciones</strong>: efectos en sistemas y documentos.</li>
              <li><strong>Observabilidad</strong>: métricas, logs, alertas y coste.</li>
            </ul>
            <p className="mt-4">
              El diseño se vuelve robusto cuando los **eventos y reglas** están modelados de forma
              explícita; así la empresa puede cambiar el comportamiento sin rehacer todo.
            </p>
          </section>

          {/* 6. RIESGOS Y ANTÍDOTOS */}
          <section>
            <h3 className="text-2xl font-semibold mb-3" style={{ color: "#19A1FF" }}>
              6) Riesgos frecuentes y cómo evitarlos (enfoque ejecutivo)
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h4 className="font-semibold mb-2">Dependencia de personas clave</h4>
                <p className="text-white/80">
                  Antídoto: documentación mínima, propiedad de procesos y estándares de nombrado.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h4 className="font-semibold mb-2">Flujos invisibles</h4>
                <p className="text-white/80">
                  Antídoto: panel operativo con errores, reintentos, tiempos y coste por flujo.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h4 className="font-semibold mb-2">Automatizar lo equivocado</h4>
                <p className="text-white/80">
                  Antídoto: priorización por impacto (ahorro/ingresos) x esfuerzo (complejidad).
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h4 className="font-semibold mb-2">Crecimiento de costes</h4>
                <p className="text-white/80">
                  Antídoto: límites, archivado de logs y revisión técnica trimestral.
                </p>
              </div>
            </div>
          </section>

          {/* 7. MÉTRICAS QUE IMPORTAN */}
          <section>
            <h3 className="text-2xl font-semibold mb-3" style={{ color: "#19A1FF" }}>
              7) Métricas que sí mueven la aguja
            </h3>
            <ul className="list-disc list-inside text-white/80 space-y-2">
              <li><strong>Horas-ahorro/mes</strong> y equivalentes salariales.</li>
              <li><strong>Pedidos o tickets acelerados</strong> por reducción de tiempos.</li>
              <li><strong>% de casos automatizados</strong> sin intervención.</li>
              <li><strong>Coste por 1.000 ejecuciones</strong> (unit economics del flujo).</li>
              <li><strong>Tiempo a diagnóstico</strong> cuando algo falla.</li>
            </ul>
          </section>

          {/* 8. HISTORIA BREVE (ESTILO CASO) */}
          <section>
            <h3 className="text-2xl font-semibold mb-3" style={{ color: "#19A1FF" }}>
              8) Una historia breve: la empresa que ganó tiempo para vender
            </h3>
            <p>
              Una compañía mediana sufría cuellos de botella en pre-venta: aprobaciones,
              generación de documentos y actualizaciones en el CRM. Decidieron **automatizar el movimiento
              de información y la verificación de condiciones**. Resultado a 90 días: +18% en tasa de cierre
              por reducción del tiempo a propuesta; el cambio no fue “magia técnica”, sino **alineación entre
              proceso y decisión**.
            </p>
          </section>

          {/* 9. CONCLUSIÓN */}
          <section>
            <h3 className="text-2xl font-semibold mb-3" style={{ color: "#19A1FF" }}>
              Conclusión
            </h3>
            <p>
              La automatización es una **competencia organizativa**. Las empresas que ganan consistencia
              combinan visión de negocio, criterios de priorización y observabilidad. El reto ya no es
              empezar, sino **sostener resultados** mientras la operación crece.
            </p>
          </section>

          {/* CTA SIMPLE */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <h4 className="text-xl font-semibold mb-2" style={{ color: "#19A1FF" }}>
              ¿Quieres identificar 3 automatizaciones de impacto en 10 días?
            </h4>
            <p className="text-white/80">
              En Prismha trabajamos con un marco de priorización y métricas que aceleran decisiones y retornos.
            </p>
          </section>
        </div>

        {/* Volver */}
        <div className="text-center mt-16">
          <Link
            to="/blog"
            className="inline-block bg-[#19A1FF] hover:bg-[#1097ef] text-white px-6 py-3 rounded-full transition-all"
          >
            ← Volver al Blog
          </Link>
        </div>
      </article>
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

export default BlogPost;
