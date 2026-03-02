import React from "react";
import { EXPERIENCE_DATA, SKILLS_DATA } from "../data/config";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "iconify-icon": any;
    }
  }
}

export const ExperienceSection = () => {
  // Dividimos los skills en dos grupos aproximadamente iguales
  const half = Math.ceil(SKILLS_DATA.length / 2);
  const firstHalf = SKILLS_DATA.slice(0, half); // Primeros 7 skills
  const secondHalf = SKILLS_DATA.slice(half); // Últimos 7 skills

  // Duplicamos cada grupo para el efecto de carrusel infinito
  const firstRow = [...firstHalf, ...firstHalf];
  const secondRow = [...secondHalf, ...secondHalf].reverse();

  return (
    <section id="experience" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experiencia Profesional
          </h2>
          <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg">
            Mi trayectoria en el mundo del desarrollo de software, trabajando en
            proyectos desafiantes y equipos multidisciplinarios.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-24">
          {EXPERIENCE_DATA.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 last:pb-0 border-l-2 border-gray-700 ml-4"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-bold text-white">
                    {exp.position}
                  </h3>
                  <span className="text-sm font-semibold text-blue-400 bg-blue-900/30 px-3 py-1 rounded-full mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-lg font-medium text-gray-300 mb-3">
                  {exp.company}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Carousel */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">
              Tecnologías y Stack
            </h3>
            <div className="w-12 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="relative space-y-8 pause-animation">
            {/* Versión móvil - carrusel animado */}
            <div className="md:hidden">
              {/* Primera fila - izquierda */}
              <div className="flex w-fit animate-scroll-left">
                {firstRow.map((skill, index) => (
                  <div
                    key={`row1-${index}`}
                    className="flex flex-col items-center justify-center min-w-[120px] mx-4 p-4 bg-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-700/50 transition-transform hover:scale-105 hover:bg-gray-800/50"
                  >
                    <iconify-icon
                      icon={skill.icon}
                      width="40"
                      height="40"
                      className="mb-2 text-white"
                    ></iconify-icon>
                    <span className="text-sm font-medium text-gray-300 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Segunda fila - derecha */}
              <div className="flex w-fit animate-scroll-right mt-8">
                {secondRow.map((skill, index) => (
                  <div
                    key={`row2-${index}`}
                    className="flex flex-col items-center justify-center min-w-[120px] mx-4 p-4 bg-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-700/50 transition-transform hover:scale-105 hover:bg-gray-800/50"
                  >
                    <iconify-icon
                      icon={skill.icon}
                      width="40"
                      height="40"
                      className="mb-2 text-white"
                    ></iconify-icon>
                    <span className="text-sm font-medium text-gray-300 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Versión desktop - estática */}
            <div className="hidden md:block">
              <div className="flex flex-wrap justify-center gap-6">
                {SKILLS_DATA.map((skill, index) => (
                  <div
                    key={`desktop-${index}`}
                    className="flex flex-col items-center justify-center w-28 p-4 bg-gray-900/90 backdrop-blur-sm rounded-xl border border-gray-700/50 transition-transform hover:scale-105 hover:bg-gray-800/50"
                  >
                    <iconify-icon
                      icon={skill.icon}
                      width="40"
                      height="40"
                      className="mb-2 text-white"
                    ></iconify-icon>
                    <span className="text-sm font-medium text-gray-300 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
