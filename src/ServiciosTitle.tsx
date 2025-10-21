import React from "react";

export default function ServiciosTitle() {
  return (
    <div className="service-title-box">
      <p className="subtitle">Nuestros</p>
      <h2 className="main-title">Servicios</h2>

      <style>{`
        /* Fuente Poppins */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

        .service-title-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(10, 10, 20, 0.85);
          border: 1px solid var(--aurora-primary);
          border-radius: 18px;
          padding: 35px 60px;
          max-width: 600px;
          margin: 40px auto;
          text-align: center;
          font-family: 'Poppins', sans-serif;
          box-shadow: 0 0 15px var(--aurora-primary);
          transition: all 0.4s ease;
        }

        .service-title-box:hover {
          box-shadow: 0 0 30px var(--aurora-secondary);
          border-color: var(--aurora-secondary);
          transform: scale(1.02);
        }

        .service-title-box .subtitle {
          font-size: 1.1rem;
          font-weight: 500;
          margin: 0;
          margin-bottom: -10px;
          color: #ffffff;
          text-shadow: 1px 0px 3px var(--aurora-primary);
        }

        .service-title-box .main-title {
          font-size: 2.4rem;
          font-weight: 700;
          margin: 0;
          color: #ffffff;
          text-shadow: 2px 0px 5px var(--aurora-secondary);
        }
      `}</style>
    </div>
  );
}
