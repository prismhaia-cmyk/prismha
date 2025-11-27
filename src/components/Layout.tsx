import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Lenis from "lenis";
import { useLocation } from "react-router-dom";
import Preloader from "./Preloader";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="relative min-h-screen bg-black text-white selection:bg-primary/30 selection:text-white">
            <Preloader />

            {/* Film Grain Overlay */}
            <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03] mix-blend-overlay"
                style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}>
            </div>

            <Header />

            <main className="relative z-10 min-h-screen">
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
