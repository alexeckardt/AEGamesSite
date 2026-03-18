import Image from "next/image";
import { Metadata } from "next";
import { Welcome } from "../Sections/Welcome";
import { WorkExperience } from "../Sections/WorkExperience";
import { Projects } from "../Sections/Projects";
import { Experiments } from "../Sections/Experiments";
import { SocialIcon } from "@/components/social_icon";
import { InlineOutboundLink } from "@/components/InlineOutboundLink";
import Favicon from '../../public/favicon.png';
import { OnwardLink } from "@/components/OnwardLink";

export const metadata: Metadata = {
  title: "Alex Eckardt Games | Indie Game Developer Portfolio",
  description: "Discover Alex Eckardt's indie game development portfolio, featuring games like Soulflame. Learn about projects, blog posts, and game development from Waterloo, Ontario.",
};

export default async function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Alex Eckardt",
    "url": "https://alexeckardtgames.com",
    "image": "https://alexeckardtgames.com/dev-logo.png",
    "description": "Indie game developer from Waterloo, Ontario",
    "jobTitle": "Indie Game Developer",
    "affiliation": {
      "@type": "Organization",
      "name": "Alex Eckardt Games",
      "url": "https://alexeckardtgames.com"
    },
    "sameAs": [
      "https://twitter.com/alexeckardt",
      "https://github.com/alexeckardt",
      "https://soulflamegame.com"
    ]
  };

  return (
    <div className="min-h-screen w-full bg-background text-foreground mb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
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
                  src="/dev-logo.png"
                  alt="Alex Eckardt Games Logo"
                  width={200}
                  height={210}
                  className="object-contain h-20 pixelated"
                  priority
                />
              </a>
            </div>

            <h1 className="text-3xl font-bold mb-6 text-center">Alex Eckardt Games</h1>

            <div className="mb-2 gap-5 flex flex-col font-sans text-neutral-600 dark:text-neutral-100 text-base/6 font-size-[1rem]">
              <p><strong>Alex Eckardt Games</strong> is an indie game development studio based in Waterloo, Ontario, dedicated to creating unique and engaging games.</p>
              <p>I'm an indie game developer currently working on <a className="inline-flex items-center gap-1 mr-1 font-semibold hover:underline" target="_blank" rel="noopener noreferrer" href={"https://soulflamegame.com"}>Soulflame <InlineOutboundLink /></a>, an action RPG.</p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Game Projects</h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Explore my latest game development projects</p>
            <Projects />

            <h2 className="text-2xl font-bold mt-8 mb-4">Blog & Development Articles</h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Read articles about game development, design, and my creative process</p>
            <a className="flex items-center gap-1 text-gray-300 dark:text-gray-400 hover:text-gray-400 dark:hover:text-gray-500 font-semibold" href="https://alexeckardt.ca/blog"> View All Articles <InlineOutboundLink /></a>
          
          
            <h2 className="text-2xl font-bold mt-8 mb-4">Get In Touch</h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Interested in collaborating or have questions about my games?</p>
            <a className="flex items-center gap-1 text-gray-300 dark:text-gray-400 hover:text-gray-400 dark:hover:text-gray-500 font-semibold" href="https://soulflamegame.com/press#contact"> Contact <InlineOutboundLink /></a>

            {/* <a className="flex items-center gap-1 text-gray-300 dark:text-gray-400 hover:text-gray-400 dark:hover:text-gray-500" href="mailto:hello@alexeckardtgames.com"> hello@alexeckardtgames.com</a> */}
            {/* <a className="flex items-center gap-1 text-gray-300 dark:text-gray-400 hover:text-gray-400 dark:hover:text-gray-500" href="mailto:hello@alexeckardtgames.com"> hello@alexeckardtgames.com</a> */}

          </div>
        </div>
      </div >
    </div>
  );
}
