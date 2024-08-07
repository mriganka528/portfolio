'use client'
import { MoveDownLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { ExternalLink, Github } from 'lucide-react';
import projects from "@/data/projects.json"
import { motion } from 'framer-motion';
import Image from 'next/image';
import VideoPlayer from './VideoPlayer';
interface Projects {
  "id": number,
  "name": string,
  "desc": string,
  "tags": Array<string>,
  "Link": string,
  "image": string,
  "gitLink": string,
  "videoSrc": string
}
function Projects() {
  return (
    <section id='projects' className='w-screen  border-b border-[#33353F]  py-24  md:py-36 lg:py-44  xl:py-52 '>
      <motion.div initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.7,
          ease: "easeInOut",
        }} className=' '>
        <div className=' flex px-14 sm:px-32 px-50 md:px-48 lg:px-60  justify-end pb-5 sm:pb-7 lg:pb-10'>
          <span className=" font-customFont text-3xl lg:text-5xl text-gray-200 xl:text-6xl font-bold mb-7">PROJECTS</span>
          <MoveDownLeft className='h-8 w-8 lg:h-12 lg:w-12 xl:h-14 xl:w-14' size={55} />
        </div>
      </motion.div>
      <div>
        <div className="flex flex-col gap-10 space-y-7  px-14 sm:px-32 px-50 md:px-48 lg:px-60  ">
          {projects.projects.map((project: Projects) => (
            <motion.div
              initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.0,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className={`flex items-center gap-10 max-[885px]:flex-col 
              ${project.id % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              key={project.id}
            >
              <div className="relative flex-[0.9] group">
                <VideoPlayer videoSrc={project.videoSrc} />
              </div>
              <div
                className={`flex-[1] ${project.id % 2 === 0 ? "text-right" : "text-left"
                  }`}
              >
                <p className="relative  text-xl  sm:text-2xl lg:text-3xl antialiased font-semibold mb-6">
                  {project.name}
                </p>
                <p
                  className="text-slate-300 text-sm sm:text-base lg:text-lg  antialiased"
                  dangerouslySetInnerHTML={{
                    __html: project?.desc,
                  }}
                />
                <div
                  className={`list-none flex items-center  flex-wrap font-mono antialiased gap-3 rounded-lg text-sm sm:text-base lg:text-lg ${project.id % 2 === 0 ? "justify-end" : "justify-start"
                    } mt-5`}
                >
                  {project.tags.map(
                    (tech: string, techIndex: number) => (
                      <li key={techIndex} style={{ wordSpacing: "-3px", color: "#64ffda" }} className=' border border-slate-800 px-[5px] py-[2px] rounded-[4px]'>
                        {tech}
                      </li>
                    )
                  )}
                </div>
                <div
                  className={`flex items-center gap-10 mt-5 ${project.id % 2 === 0 ? "justify-end" : "justify-start"
                    }`}
                >
                  <Link href={project.Link} target="_blank">
                    <p className="flex items-center text-sm sm:text-base lg:text-lg  antialiased gap-2 cursor-pointer">
                      Live Demo{" "}
                      <span>
                        <ExternalLink size={18} />
                      </span>
                    </p>
                  </Link>
                  <Link href={project.gitLink} target="_blank">
                    <p className="flex items-center gap-2 cursor-pointer text-sm sm:text-base lg:text-lg  antialiased">
                      GitHub{" "}
                      <span>
                        <Github size={18} />
                      </span>
                    </p>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


    </section>
  )
}

export default Projects
