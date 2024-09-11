import React from "react";
import ProjectCard from "../sub/ProjectCard";
import doom3Rust from '@/public/Doom3-Rust.png'

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent  text-white py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-wrap flex-col md:flex-row gap-9 px-10">
        <ProjectCard
          href="https://topmega-clon.vercel.app/"
          src="/topmega.png"
          title="Topmega Ecommerce Clone"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          href="https://spotify-clone-mu-woad.vercel.app/"
          src="/spotify.png"
          title="Spotify Music Clone"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/duke.png"
          title="Duke Nukem with Rust"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          inProgress
        />
        <ProjectCard
          src="/youtube.png"
          title="Youtube Clone"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          inProgress
        />
        <ProjectCard
          src="/youtubeMusic.png"
          title="Youtube Music Clone"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          inProgress
        />
      </div>
    </div>
  );
};

export default Projects;
