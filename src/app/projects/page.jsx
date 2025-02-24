'use client';

import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
    {
      title: '3D Projects',
      href: '/projects_3D',
      image: 'https://img.freepik.com/premium-photo/black-white-photo-black-white-collage-photos-flowers_1115474-43903.jpg', // Replace with your image path
    },
    {
      title: 'Video Editing Projects',
      href: '/video_editing_projects',
      image: 'https://img.freepik.com/premium-photo/black-white-photo-black-white-collage-photos-flowers_1115474-43903.jpg', // Replace with your image path
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 min-h-screen p-1">
      {projects.map((project) => (
        <Link href={project.href} key={project.title}>
          <span className="relative group block w-full max-w-lg sm:w-[600px] h-[400px] rounded-lg overflow-hidden shadow-lg">
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-40" />
            {/* Title */}
            <div className="absolute bottom-0 left-0 p-4 text-white bg-gradient-to-t from-black/70 via-black/50 to-transparent">
              <h2 className="text-lg font-bold">{project.title}</h2>
            </div>
          </span>
        </Link>
      ))}
    </div>
  );
}
