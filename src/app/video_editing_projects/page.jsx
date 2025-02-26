"use client"
import React from 'react'
import ProjectSection from '../components/ProjectsSection'


function projects_video_editing() {

  const videos = [
    {
      url : "videos/video-editing/vid1.webm",
      name : "Style-1"
    }
  ] // Replace with your video URLs.  

  return (
    <ProjectSection videos={videos} />
  )
}

export default projects_video_editing