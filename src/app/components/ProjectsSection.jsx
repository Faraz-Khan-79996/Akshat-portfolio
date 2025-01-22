"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

// const videoUrls = [
//   "https://res.cloudinary.com/dqasiuje0/video/upload/v1737562162/akshat_videos/vid1_svhrhm.mp4",
//   "https://res.cloudinary.com/dqasiuje0/video/upload/v1737562162/akshat_videos/vid1_svhrhm.mp4",
//   "https://res.cloudinary.com/dqasiuje0/video/upload/v1737562162/akshat_videos/vid1_svhrhm.mp4",
//   "https://res.cloudinary.com/dqasiuje0/video/upload/v1737562162/akshat_videos/vid1_svhrhm.mp4",
//   "https://res.cloudinary.com/dqasiuje0/video/upload/v1737562162/akshat_videos/vid1_svhrhm.mp4",
//   "https://res.cloudinary.com/dqasiuje0/video/upload/v1737562162/akshat_videos/vid1_svhrhm.mp4",  
// ]; // Replace with your video URLs.

const videoUrls = [
  "videos/test.mp4",
  "videos/test.mp4",
  "videos/test.mp4",
  "videos/test.mp4",
  "videos/test.mp4",
  "videos/test.mp4",
]; // Replace with your video URLs.


export default function ProjectSection() {
  const [controls, setControls] = useState(
    Array(videoUrls.length).fill({ isMuted: true, isPaused: false })
  );

  const videoRefs = useRef([]);

  const toggleMute = (index) => {
    setControls((prev) =>
      prev.map((control, i) =>
        i === index ? { ...control, isMuted: !control.isMuted } : control
      )
    );
    if (videoRefs.current[index]) {
      videoRefs.current[index].muted = !controls[index].isMuted;
    }
  };

  const togglePlay = (index) => {
    setControls((prev) =>
      prev.map((control, i) =>
        i === index ? { ...control, isPaused: !control.isPaused } : control
      )
    );
    if (videoRefs.current[index]) {
      controls[index].isPaused
        ? videoRefs.current[index].play()
        : videoRefs.current[index].pause();
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3  gap-3 md:gap-20 md:p-4">
      {videoUrls.map((videoUrl, index) => (
        <motion.div
          key={index}
          className="relative w-full h-auto overflow-hidden border border-gray-300 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <div className="relative w-full h-auto">
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={videoUrl}
              autoPlay
              loop
              muted
              playsInline
              // preload="auto"
              className="w-full h-auto object-contain"
            ></video>
            <div className="absolute bottom-2 left-2 flex space-x-2">
              <button
                onClick={() => toggleMute(index)}
                className="bg-black bg-opacity-50 text-white text-[12px] md:text-xl px-2 py-1 rounded hover:bg-opacity-75"
              >
                {controls[index].isMuted ? "Unmute" : "Mute"}
              </button>
              <button
                onClick={() => togglePlay(index)}
                className="bg-black bg-opacity-50 text-white text-[12px] md:text-xl px-2 py-1 rounded hover:bg-opacity-75"
              >
                {controls[index].isPaused ? "Play" : "Pause"}
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
