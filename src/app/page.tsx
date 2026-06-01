import { Metadata } from "next";
import Image from "next/image";
import { Projects } from "../Sections/Projects";
import { InlineOutboundLink } from "@/components/InlineOutboundLink";
import Favicon from '../../public/favicon.png';
import { ExternalIcon, GitHubIcon, ItchIcon } from "@/components/project_icons";

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
    <div className="min-h-screen w-full text-foreground mb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Body */}
      <div className="w-full mt-24 relative">


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

            <h1 className="text-3xl font-bold mb-6 text-center hidden">Alex Eckardt Games</h1>

            <div className="mb-2 gap-5 flex flex-col font-sans text-neutral-600 dark:text-neutral-100 text-base/6 font-size-[1rem]">
              <p><strong>Alex Eckardt Games</strong> is an indie game development studio based in Waterloo, Ontario dedicated to crafting unique and engaging stories.</p>
              <p>I'm an indie game developer currently working on <a className="inline-flex items-center gap-1 mr-1 font-semibold hover:underline" target="_blank" rel="noopener noreferrer" href={"https://soulflamegame.com"}>Soulflame <InlineOutboundLink /></a>, an action RPG.</p>
            </div>

            <div className="mt-10 mb-4">
              <p className="text-sm uppercase tracking-[0.35em] text-neutral-400 text-center mb-4">Links</p>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                <a className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/6 p-5 text-center text-neutral-200 backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-white/10 hover:text-white" href="https://github.com/alexeckardt" target="_blank" rel="noopener noreferrer">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-black/20 text-white transition-transform group-hover:scale-105"><GitHubIcon className="h-10 w-10" /></span>
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/6 p-5 text-center text-neutral-200 backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-white/10 hover:text-white" href="https://twitter.com/alexeckardt" target="_blank" rel="noopener noreferrer">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-black/20 text-white transition-transform group-hover:scale-105"><ExternalIcon className="h-10 w-10" /></span>
                  <span className="text-sm font-medium">Twitter / X</span>
                </a>
                <a className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/6 p-5 text-center text-neutral-200 backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-white/10 hover:text-white md:col-span-1 col-span-2 md:mx-0 mx-auto md:w-auto w-full max-w-[16rem]" href="https://alexeckardt.itch.io/" target="_blank" rel="noopener noreferrer">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-black/20 text-white transition-transform group-hover:scale-105"><ItchIcon className="h-10 w-10" /></span>
                  <span className="text-sm font-medium">Itch.io</span>
                </a>
              </div>
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

          </div>
        </div>
      </div>

      <Image
        src={Favicon}
        alt="Favicon"
        width={Favicon.width}
        height={Favicon.height}
        unoptimized
        className="fixed bottom-0 left-2 lg:left-12"
      />

    </div>
  );
}
