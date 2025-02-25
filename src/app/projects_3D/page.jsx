"use client"

import React from 'react'
import ProjectSection from '../components/ProjectsSection'

function projects_3D() {

  const videoUrls = [
    // "videos/vid1.webm",
    // "videos/vid1.webm",
    // "videos/vid1.webm",
    // "videos/vid1.webm",
    // "videos/vid1.webm",
    // "videos/vid1.webm",
  ] // Replace with your video URLs.  

  return (
    <>
    <ProjectSection videoUrls={videoUrls} />
    {videoUrls && videoUrls.length == 0 ? (<>
      <div className='h-screen flex items-center justify-center'>
          <h3 className='font-normal text-3xl text-slate-400'>No Projects right now</h3>
      </div>  
    </>) : null}
    </>
  )
}

export default projects_3D