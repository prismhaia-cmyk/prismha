import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./ui/MagneticButton";

const Header = () => {
    const { scrollY } = useScroll();
    const location = useLocation();
    const [showMenu, setShowMenu] = useState(false);
    const isHome = location.pathname === "/";

    // Transformaciones para el encabezado al hacer scroll (solo en home o siempre, a elección)
    const headerPaddingY = useTransform(scrollY, [0, 100], ["0.5rem", "0.3rem"]);

    // Si no estamos en home, usamos valores fijos para consistencia
    const paddingY = isHome ? headerPaddingY : "0.3rem";

    return (
        <motion.header
            className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[90%] md:w-[65%] max-w-[1400px]"
            style={{
                paddingTop: paddingY,
                paddingBottom: paddingY,
            }}
        >
            <motion.nav
                className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full flex items-center justify-between shadow-2xl px-5 md:px-6 overflow-hidden h-[60px]"
            >
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 pl-2 group">
                    <motion.img
                        src="/logo.png?v=2"
                        alt="Prismha Logo"
                        className="object-contain w-10 md:w-12 transition-transform duration-500 group-hover:rotate-180"
                        style={{ transform: "scale(1.5)" }}
                    />
                </Link>

                {/* Menú Desktop */}
                <div className="hidden md:flex items-center gap-4">
                    <NavButton to="/" label="Home" />
                    <NavButton to="/#servicios" label="Servicios" isAnchor />
                    <NavButton to="/casos-de-exito" label="Casos de Éxito" />
                    <NavButton to="/blog" label="Blog" />

                    <MagneticButton>
                        <Link
                            to="/contacto"
                            className="relative block overflow-hidden backdrop-blur-xl bg-white/15 border border-white/30 rounded-full px-6 py-2 text-white font-normal text-sm transition-all duration-300 hover:bg-primary/20 hover:border-primary/40 shadow-lg group"
                        >
                            <span className="relative z-10">Contacto</span>
                            <div className="absolute inset-0 bg-primary/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>
                    </MagneticButton>
                </div>

                {/* Menú Móvil */}
                <div className="md:hidden">
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className="text-white text-2xl focus:outline-none"
                    >
                        {showMenu ? "✕" : "☰"}
                    </button>
                </div>
            </motion.nav>

            {/* Dropdown Móvil */}
            {showMenu && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute right-0 mt-3 w-48 bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl flex flex-col items-start p-4 space-y-3 md:hidden"
                >
                    <MobileLink to="/" onClick={() => setShowMenu(false)}>Home</MobileLink>
                    <MobileLink to="/#servicios" onClick={() => setShowMenu(false)} isAnchor>Servicios</MobileLink>
                    <MobileLink to="/casos-de-exito" onClick={() => setShowMenu(false)}>Casos de Éxito</MobileLink>
                    <MobileLink to="/blog" onClick={() => setShowMenu(false)}>Blog</MobileLink>
                    <MobileLink to="/contacto" onClick={() => setShowMenu(false)}>Contacto</MobileLink>
                </motion.div>
            )}
        </motion.header>
    );
};

const NavButton = ({ to, label, isAnchor = false }: { to: string; label: string; isAnchor?: boolean }) => {
    const Component = isAnchor ? "a" : Link;
    const hrefProps = isAnchor ? { href: to } : { to };

    return (
        <MagneticButton>
            <Component
                {...(hrefProps as any)}
                className="text-white/80 hover:text-white transition-colors text-sm md:text-base font-normal tracking-tight px-3 py-1 relative group inline-block"
            >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
            </Component>
        </MagneticButton>
    );
};

const MobileLink = ({ to, children, onClick, isAnchor = false }: any) => {
    const Component = isAnchor ? "a" : Link;
    const hrefProps = isAnchor ? { href: to } : { to };
    return (
        <Component
            {...(hrefProps as any)}
            onClick={onClick}
            className="text-white/90 hover:text-primary transition block w-full"
        >
            {children}
        </Component>
    );
};

export default Header;
