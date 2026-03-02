import React from "react";
import { ArrowRight, Code2, Github, Linkedin } from "lucide-react";
import { HERO_DATA } from "../data/config";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Columna de Texto (Izquierda en Desktop, Arriba en Móvil) */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 text-blue-300 text-sm font-medium backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Disponible para trabajar
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              {HERO_DATA.greeting}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {HERO_DATA.name}
              </span>
              <br />
              <span className="text-2xl md:text-4xl text-gray-300">
                {HERO_DATA.role}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              {HERO_DATA.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-3.5 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
              >
                {HERO_DATA.cta}
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="p-3 text-gray-300 bg-gray-900/40 backdrop-blur-sm rounded-lg hover:bg-gray-800/50 hover:text-white transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 text-gray-300 bg-gray-900/40 backdrop-blur-sm rounded-lg hover:bg-gray-800/50 hover:text-blue-400 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Columna de Imagen/Visual (Derecha en Desktop, Abajo en Móvil) */}
          <div className="flex-1 w-full max-w-lg md:max-w-md lg:max-w-lg">
            <div className="relative aspect-square md:aspect-[1/1] rounded-2xl bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm overflow-hidden border border-gray-700/50 shadow-2xl">
              {/* Aquí iría tu foto real. Por ahora usaremos un placeholder elegante */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <img
                  alt="profile"
                  src="./../../public/yo.jpg"
                  className="w-full h-full object-cover"
                />
                <span className="sr-only">Foto de perfil</span>
              </div>

              {/* Decoración de fondo (Efecto Glow) */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-2xl -z-10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
