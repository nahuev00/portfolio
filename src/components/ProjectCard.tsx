import React from "react";
import { ExternalLink, Eye, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onClick,
}) => {
  return (
    <div
      className="group relative bg-gray-900/40 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-700/50 hover:border-blue-500/50 flex flex-col h-full"
      onClick={() => onClick(project)}
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-blue-500 p-3 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <Eye className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full bg-blue-900/40 text-blue-300 text-xs font-medium backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-300 text-sm line-clamp-2 flex-grow min-h-[40px]">
          {project.description}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-700/50 flex items-center justify-between text-gray-400">
          <span className="text-xs font-medium uppercase tracking-wider">
            Ver detalles
          </span>
          <div className="flex gap-3">
            <Github className="w-4 h-4 hover:text-blue-400 transition-colors" />
            <ExternalLink className="w-4 h-4 hover:text-blue-400 transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
};
