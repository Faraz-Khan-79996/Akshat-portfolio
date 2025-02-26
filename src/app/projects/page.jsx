'use client';
import { motion } from "framer-motion";
import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
    {
      title: '3D Projects',
      href: '/projects_3D',
      image: '3d.jpg', // Replace with your image path
    },
    {
      title: 'Video Editing Projects',
      href: '/video_editing_projects',
      image: 'video-editing.jpg', // Replace with your image path
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 min-h-screen p-1">
      {projects.map((project, index) => (
        <motion.div
  key={project.title}
  initial={{ opacity: 0, y: 60 }} // Increased initial y-offset for a more noticeable rise
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.15, ease: "easeOut", delay: index * 0.05 }} // Faster duration, shorter delay
  className="rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-500/50"
>

          <Link href={project.href}>
            <span className="relative group block w-full max-w-lg sm:w-[600px] h-[400px] rounded-lg overflow-hidden shadow-lg">
              {/* Image */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                initial={{ scale: 0.90 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.25 }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-60" />
              {/* Title */}
              <div className="absolute bottom-0 left-0 p-4 text-white bg-gradient-to-t from-black/70 via-black/50 to-transparent">
                <h2 className="text-lg font-bold">{project.title}</h2>
              </div>
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
