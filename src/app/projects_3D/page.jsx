"use client"

import React from 'react'
import ProjectSection from '../components/ProjectsSection'

function projects_3D() {

  const videoUrls = [
    "videos/vid1.webm",
    "videos/vid1.webm",
    "videos/vid1.webm",
    "videos/vid1.webm",
    "videos/vid1.webm",
    "videos/vid1.webm",
  ] // Replace with your video URLs.  

  return (
    <>
    <ProjectSection videoUrls={videoUrls} />
    </>
  )
}

export default projects_3D