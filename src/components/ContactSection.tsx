import React from "react";
import { Mail, Linkedin, MessageSquare } from "lucide-react";
import { CONTACT_DATA } from "../data/config";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden min-h-[85vh] md:min-h-screen"
    >
      <div className="container mx-auto px-2 md:px-4 py-4 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Título y descripción - Ultra compacto en móvil */}
          <div className="mb-3 md:mb-12">
            <h2 className="text-xl md:text-5xl font-bold text-white mb-1 md:mb-6">
              {CONTACT_DATA.title}
            </h2>
            <p className="text-xs md:text-xl text-gray-300 max-w-2xl mx-auto">
              {CONTACT_DATA.description}
            </p>
          </div>

          {/* Botones de contacto - Super compactos para móvil */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 mb-4 md:mb-16">
            {/* Email */}
            <a
              href={`mailto:${CONTACT_DATA.email}`}
              className="group relative p-2 md:p-6 bg-gray-900/40 backdrop-blur-sm rounded-md md:rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex flex-col items-center gap-1 md:gap-4">
                <div className="p-1.5 md:p-4 bg-blue-900/30 rounded-full group-hover:bg-blue-800/40 transition-colors">
                  <Mail className="w-4 h-4 md:w-8 md:h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-sm md:text-xl font-semibold text-white">
                    Email
                  </h3>
                  <p className="text-[10px] md:text-sm text-gray-400 break-all leading-tight mt-0.5">
                    {CONTACT_DATA.email}
                  </p>
                </div>
                <span className="text-blue-400 text-[10px] md:text-sm font-medium group-hover:text-blue-300 transition-colors mt-0.5">
                  Enviar →
                </span>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={CONTACT_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2 md:p-6 bg-gray-900/40 backdrop-blur-sm rounded-md md:rounded-2xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex flex-col items-center gap-1 md:gap-4">
                <div className="p-1.5 md:p-4 bg-blue-700/30 rounded-full group-hover:bg-blue-600/40 transition-colors">
                  <Linkedin className="w-4 h-4 md:w-8 md:h-8 text-blue-300" />
                </div>
                <div>
                  <h3 className="text-sm md:text-xl font-semibold text-white">
                    LinkedIn
                  </h3>
                  <p className="text-[10px] md:text-sm text-gray-400 leading-tight mt-0.5">
                    Perfil profesional
                  </p>
                </div>
                <span className="text-blue-400 text-[10px] md:text-sm font-medium group-hover:text-blue-300 transition-colors mt-0.5">
                  Conectar →
                </span>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={CONTACT_DATA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2 md:p-6 bg-gray-900/40 backdrop-blur-sm rounded-md md:rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex flex-col items-center gap-1 md:gap-4">
                <div className="p-1.5 md:p-4 bg-green-900/30 rounded-full group-hover:bg-green-800/40 transition-colors">
                  <MessageSquare className="w-4 h-4 md:w-8 md:h-8 text-green-400" />
                </div>
                <div>
                  <h3 className="text-sm md:text-xl font-semibold text-white">
                    WhatsApp
                  </h3>
                  <p className="text-[10px] md:text-sm text-gray-400 leading-tight mt-0.5">
                    {CONTACT_DATA.whatsappNumber}
                  </p>
                </div>
                <span className="text-green-400 text-[10px] md:text-sm font-medium group-hover:text-green-300 transition-colors mt-0.5">
                  Chatear →
                </span>
              </div>
            </a>
          </div>

          {/* Información adicional - Mínima en móvil */}
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-md md:rounded-2xl p-2 md:p-8 border border-gray-700/50">
            <h3 className="text-base md:text-2xl font-semibold text-white mb-1 md:mb-4">
              ¿Listo para comenzar?
            </h3>
            <p className="text-[10px] md:text-base text-gray-300 mb-2 md:mb-6">
              Respondo en menos de 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 md:gap-4">
              <a
                href={`mailto:${CONTACT_DATA.email}`}
                className="px-2 py-1 md:px-8 md:py-3 bg-blue-500 text-white rounded-md md:rounded-lg font-semibold hover:bg-blue-600 transition-all flex items-center justify-center gap-1 md:gap-2 shadow-lg shadow-blue-500/25 text-[10px] md:text-base w-full sm:w-auto"
              >
                <Mail className="w-2.5 h-2.5 md:w-5 md:h-5" />
                <span className="truncate">Email</span>
              </a>
              <a
                href={CONTACT_DATA.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 md:px-8 md:py-3 bg-green-600 text-white rounded-md md:rounded-lg font-semibold hover:bg-green-700 transition-all flex items-center justify-center gap-1 md:gap-2 shadow-lg shadow-green-600/25 text-[10px] md:text-base w-full sm:w-auto"
              >
                <MessageSquare className="w-2.5 h-2.5 md:w-5 md:h-5" />
                <span className="truncate">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Efectos de fondo - Mínimos en móvil */}
      <div className="absolute top-0 left-0 w-20 h-20 md:w-64 md:h-64 bg-blue-500/10 rounded-full blur-lg md:blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-28 h-28 md:w-96 md:h-96 bg-green-500/10 rounded-full blur-lg md:blur-3xl translate-x-1/3 translate-y-1/3"></div>
    </section>
  );
};
