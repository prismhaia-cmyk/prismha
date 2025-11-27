import React, { useEffect } from "react";
import Lenis from "lenis";
import { useLocation } from "react-router-dom";

interface GlobalWrapperProps {
    children: React.ReactNode;
}

const GlobalWrapper: React.FC<GlobalWrapperProps> = ({ children }) => {
    const location = useLocation();

    // Lenis smooth scroll desactivado temporalmente para mejor rendimiento
    // useEffect(() => {
    //     const lenis = new Lenis({
    //         duration: 1.2,
    //         easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    //         orientation: "vertical",
    //         gestureOrientation: "vertical",
    //         smoothWheel: true,
    //     });

    //     function raf(time: number) {
    //         lenis.raf(time);
    //         requestAnimationFrame(raf);
    //     }

    //     requestAnimationFrame(raf);

    //     return () => {
    //         lenis.destroy();
    //     };
    // }, []);

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            {/* Film Grain Overlay - Global */}
            <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03] mix-blend-overlay"
                style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}>
            </div>
            {children}
        </>
    );
};

export default GlobalWrapper;
