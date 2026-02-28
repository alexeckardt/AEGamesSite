import Image from "next/image";
import { Welcome } from "../Sections/Welcome";
import { WorkExperience } from "../Sections/WorkExperience";
import { Projects } from "../Sections/Projects";
import { Experiments } from "../Sections/Experiments";
import { SocialIcon } from "@/components/social_icon";
import { InlineOutboundLink } from "@/components/InlineOutboundLink";
import Favicon from '../../public/favicon.png';
import { OnwardLink } from "@/components/OnwardLink";

export default async function Home() {

  return (
    <div className="min-h-screen w-full bg-background text-foreground mb-20">
      {/* Header */}
      <div className="h-1/4 w-full -z-1 overflow-hidden bg-[url(/images/backgrounds/header_dark.png)] bg-bottom bg-cover fixed top-0 left-0">
      </div>



      {/* Body */}
      <div className="bg-background w-full mt-24 relative">

        <Image
          src={Favicon}
          alt="Favicon"
          width={Favicon.width}
          height={Favicon.height}
          unoptimized
          className="relative -top-[26px] left-2 lg:left-12"
        />

        <div className="flex flex-col max-w-[65ch] mx-12 lg:mx-auto pt-12 lg:mt-10">
          <div className="main">

            <div className="flex flex-col items-center gap-4 justify-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://alexeckardtgames.com"
                className="flex flex-col items-center justify-center mt-4 mb-12 text-center w-100 hover:scale-105 transition-transform duration-300">
                <Image
                  // src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=80&fit=crop&crop=center"
                  src="/dev-logo.png"
                  alt="Alex Eckardt Games Logo"
                  width={200}
                  height={210}
                  className="object-contain h-20 pixelated"
                  priority
                />
              </a>
            </div>


            <div className="mb-2 gap-5 flex flex-col font-sans text-neutral-600 dark:text-neutral-100 text-base/6 font-size-[1rem]">
              <p>Indie Game Developer from Waterloo, Ontario.</p>
              <p>Currently working on <a className="inline-flex items-center gap-1 mr-1" target="_blank" rel="noopener noreferrer" href={"https://soulflamegame.com"}>Soulflame <InlineOutboundLink /></a></p>
            </div>

            <h2>Projects</h2>
            <Projects />

            <h2>Blog Posts</h2>
            <a className="flex items-center gap-1 text-gray-300 dark:text-gray-400 hover:text-gray-400 dark:hover:text-gray-500" href="https://alexeckardt.ca/blog"> Link <InlineOutboundLink /></a>
          
          
            <h2>Contact</h2>
            <a className="flex items-center gap-1 text-gray-300 dark:text-gray-400 hover:text-gray-400 dark:hover:text-gray-500" href="https://soulflamegame.com/press#contact"> Contact <InlineOutboundLink /></a>

            {/* <a className="flex items-center gap-1 text-gray-300 dark:text-gray-400 hover:text-gray-400 dark:hover:text-gray-500" href="mailto:hello@alexeckardtgames.com"> hello@alexeckardtgames.com</a> */}
            {/* <a className="flex items-center gap-1 text-gray-300 dark:text-gray-400 hover:text-gray-400 dark:hover:text-gray-500" href="mailto:hello@alexeckardtgames.com"> hello@alexeckardtgames.com</a> */}

          </div>
        </div>
      </div >
    </div>
  );
}
