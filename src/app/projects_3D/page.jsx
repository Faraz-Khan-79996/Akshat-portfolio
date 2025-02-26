"use client"

import React from 'react'
import ProjectSection from '../components/ProjectsSection'

function projects_3D() {

  const videos = [
    
    {
      url : "videos/3d/vid1.webm",
      name : "Shoes - Product Visualization"
    }
  ] // Replace with your video URLs.  

  return (
    <>
    <ProjectSection videos={videos} />
    {videos && videos.length == 0 ? (<>
      <div className='h-screen flex items-center justify-center'>
          <h3 className='font-normal text-3xl text-slate-400'>No Projects right now</h3>
      </div>  
    </>) : null}
    </>
  )
}

export default projects_3D