"use client";
import React from "react";
import ProjectSection from "../components/ProjectsSection";
import Link from "next/link";

function projects_video_editing() {
    const videos = [
        {
            url: "videos/video-editing/vid1.webm",
            name: "Style-1",
        },
    ]; // Replace with your video URLs.

    return (
        <>
            <div className="mb-4 flex justify-center">
                {" "}
                <Link
                    href="/projects"
                    className="inline-flex items-center border border-indigo-300 px-3 py-1.5 rounded-md text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-300"

                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 16l-4-4m0 0l4-4m-4 4h18"
                        ></path>
                    </svg>
                    <span class="ml-1 font-bold text-lg">Back</span>
                </Link>
            </div>
            <ProjectSection videos={videos} />
        </>
    );
}

export default projects_video_editing;
