import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full bg-black text-white py-10 border-t border-primary/40 mt-20 relative z-10">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                {/* Nombre y dirección */}
                <div>
                    <h2 className="text-2xl font-semibold tracking-tight mb-2 font-sans">
                        Prismha
                    </h2>
                    <p className="text-white/80 leading-relaxed text-sm font-sans">
                        Mirador de Gredos 7<br />
                        Madrid, España
                    </p>
                </div>

                {/* Correo y política */}
                <div className="text-sm space-y-2">
                    <p className="text-white/80 font-sans">
                        Correo electrónico:{" "}
                        <a
                            href="mailto:prismhaagencia@prismha.com"
                            className="text-primary hover:underline"
                        >
                            prismhaagencia@prismha.com
                        </a>
                    </p>

                    <Link
                        to="/politica-privacidad"
                        className="text-white/80 hover:text-primary transition-colors block font-sans"
                    >
                        Política de Privacidad
                    </Link>
                </div>
            </div>

            <div className="mt-8 text-center text-white/50 text-xs">
                © {new Date().getFullYear()} Prismha. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
