import Image from "next/image";
import { Welcome } from "../Sections/Welcome";
import { WorkExperience } from "../Sections/WorkExperience";
import { Projects } from "../Sections/Projects";
import { Experiments } from "../Sections/Experiments";
import { SocialIcon } from "@/components/social_icon";
import { InlineOutboundLink } from "@/components/InlineOutboundLink";
import { getPosts } from "@/lib/posts";
import Favicon from '../../public/favicon.png';
import { OnwardLink } from "@/components/OnwardLink";
import { BlogPostLink } from "@/components/BlogPostLink";

export default async function Home() {

  const posts = await getPosts();

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

            <h1 className="flex items-center gap-3 text-3xl font-bold mb-4">
              Hi, I'm Alex Eckardt &#128075;
            </h1>

            <div className="mb-2 gap-5 flex flex-col font-sans text-neutral-600 dark:text-neutral-100 text-base/6 font-size-[1rem]">
              <p>I like to code fun stuff and mess around with tiny squares. I'm a newgrad software developer from <b>McMaster University</b>.</p>
              <p>Currently working on <a className="inline-flex items-center gap-1 mr-1" target="_blank" rel="noopener noreferrer" href={"https://soulflamegame.com"}>Soulflame <InlineOutboundLink /></a></p>
            </div>

            <h2>Projects</h2>
            <Projects />

            <h2>Blog Posts</h2>
            {posts.map((post) => (
              <BlogPostLink key={post.slug} post={post} />
            ))}
            <a className="flex items-center gap-1 text-gray-200 dark:text-gray-700 hover:text-gray-400 dark:hover:text-gray-500" href="/blog"> see all <OnwardLink /></a>

          </div>
        </div>
      </div >
    </div>
  );
}
