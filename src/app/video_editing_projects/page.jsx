"use client"
import React from 'react'
import ProjectSection from '../components/ProjectsSection'


function projects_video_editing() {

  const videoUrls = [
    "videos/video-editing/vid1.webm",
    // "videos/video-editing/vid2.webm",
    // "videos/video-editing/vid1.webm",
    // "videos/video-editing/vid2.webm",
    // "videos/video-editing/vid2.webm",
    // "videos/video-editing/vid2.webm",
  ] // Replace with your video URLs.  

  return (
    <ProjectSection videoUrls={videoUrls} />
  )
}

export default projects_video_editing