import React, { useEffect, useState } from "react";

interface SnowParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export const SnowBackground = () => {
  const [particles, setParticles] = useState<SnowParticle[]>([]);

  useEffect(() => {
    // Crear partículas iniciales
    const initialParticles: SnowParticle[] = [];
    const particleCount = 80; // Número de puntos en pantalla

    for (let i = 0; i < particleCount; i++) {
      initialParticles.push({
        id: i,
        x: Math.random() * 100, // Porcentaje horizontal
        y: Math.random() * 100, // Porcentaje vertical
        size: Math.random() * 3 + 1, // Tamaño entre 1px y 4px
        duration: Math.random() * 10 + 10, // Duración entre 10s y 20s
        delay: Math.random() * 5, // Retardo inicial entre 0s y 5s
      });
    }

    setParticles(initialParticles);

    // Actualizar partículas periódicamente para mantener el efecto
    const interval = setInterval(() => {
      setParticles((current) => {
        // Mover algunas partículas que hayan salido de pantalla
        return current.map((p) => {
          if (p.y > 100) {
            // Si la partícula salió de la pantalla, reiniciarla arriba
            return {
              ...p,
              y: -5,
              x: Math.random() * 100,
              duration: Math.random() * 10 + 10,
              delay: Math.random() * 2,
            };
          }
          return p;
        });
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="snow-background">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="snow-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
