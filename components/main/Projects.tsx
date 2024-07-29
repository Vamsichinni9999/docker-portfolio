import React from 'react';
import ProjectCard from '../sub/ProjectCard';
import Link from 'next/link';

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <div>
          <ProjectCard
            src="/aws1.png"
            title="Stock Analysis Enhancement"
            description="A web-based application for enhancing stock analysis using PowerBI and Amazon Web Services."
            link="http://chinniii2730.s3-website-ap-southeast-2.amazonaws.com/"
           
          />
        </div>
        <ProjectCard
          src="/cv.png"
          title="Resume/CV Website"
          description="Building and Hosting a Resume/CV Website with AWS from S3 to CloudFront."
          link="http://chinni.com.s3-website-ap-southeast-2.amazonaws.com/"
         
        />
        <ProjectCard
          src="/art.png"
          title="ArtHub"
          description="ArtHub: Empowering Artists with Sales and Secure Payment Integration Using MERN Stack."
          link=""
          
        />
      </div>
    </div>
  );
};

export default Projects;
