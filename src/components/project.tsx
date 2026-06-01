import React, { ReactNode } from 'react';
import { SocialIcon } from './social_icon';
import { ArrowRight } from 'lucide-react'; // Adjust the path based on your project structure
import { ExternalIcon, GitHubIcon, ItchIcon, SteamIcon } from './project_icons';

interface ProjectProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    tagline: string;
    tags: string[];
    year: number | string;
    bgImage?: string;

    href?: string; // Link to project page
    githubHref?: string;
    itchHref?: string;
    steamHref?: string;
    backgroundPositionY?: string;
    children?: ReactNode;
    blogurl?: string;
    highlighted?: boolean;
}

export const Project: React.FC<ProjectProps> = ({ name, tagline, tags, bgImage, year, backgroundPositionY, children, blogurl, highlighted, ...props }) => {


    const hHeight = highlighted ? 'h-64' : 'h-32';

    const bgClass = `${hHeight} w-full overflow-hidden bg-bottom z-10`;
    const backgroundImage = bgImage ? `url('/images/projects/${bgImage}')` : 'url("/images/backgrounds/header_dark.png")';

    // Link for the Project Title, if applicable
    const link = props.href || props.githubHref || props.itchHref || props.steamHref;


    return (
        <div className={`group relative w-full overflow-hidden rounded-[14px] border border-white/10 background-blur-xl bg-white/10 ${highlighted ? 'soulflame-card' : ''}`}>

            <a href={link} target="_blank" rel="noopener noreferrer" className="block">
            <div className="relative z-10">
                <div className="relative rounded-[13px] overflow-hidden">
                    <div className={bgClass} style={{ backgroundImage, backgroundSize: 'cover', backgroundPositionY }} />

                    <div className="absolute top-2 right-2 flex flex-row gap-x-1">
                        {
                            props.githubHref &&
                            <div className="rounded-full bg-white/10 p-1 shadow-xl backdrop-blur-[10px] transition-colors hover:bg-white/20 active:bg-black/20">
                                <SocialIcon website={props.githubHref}>
                                    <GitHubIcon />
                                </SocialIcon>
                            </div>
                        }
                        {
                            props.steamHref &&
                            <div className="rounded-full bg-white/10 p-1 shadow-xl backdrop-blur-[10px] transition-colors hover:bg-white/20 active:bg-black/20">
                                <SocialIcon website={props.steamHref}>
                                    <SteamIcon />
                                </SocialIcon>
                            </div>
                        }
                        {
                            props.itchHref &&
                            <div className="rounded-full bg-white/10 p-1 shadow-xl backdrop-blur-[10px] transition-colors hover:bg-white/20 active:bg-black/20">
                                <SocialIcon website={props.itchHref}>
                                    <ItchIcon />
                                </SocialIcon>
                            </div>
                        }
                        {
                            props.href &&
                            <div className="rounded-full bg-white/10 p-1 shadow-xl backdrop-blur-[10px] transition-colors hover:bg-white/20 active:bg-black/20">
                                <SocialIcon website={props.href}>
                                    <ExternalIcon />
                                </SocialIcon>
                            </div>
                        }
                    </div>
                </div>

                <div className={`px-5 py-4`}>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div className="w-full font-funnel">
                            <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:gap-3">
                                <div className="text-xl font-semibold text-white">
                                    {link ? (
                                        <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-royal-200 active:text-royal-500 hover:underline">
                                            {name}
                                        </a>
                                    ) : (
                                        name
                                    )}
                                </div>
                                <div className="text-sm font-light text-royal-300 dark:text-royal-400">{tagline}</div>
                            </div>
                        </div>

                        <div className="font-funnel text-sm font-light text-royal-400 dark:text-royal-500">
                            {year}
                        </div>
                    </div>

                    <div className="pb-1 pt-2">
                        {blogurl && (
                            <a className="mt-2 flex w-fit gap-x-3 text-xs text-gray-200 hover:text-gray-50" href={`https://alexeckardt.ca${blogurl}`}>
                                Related Blog Post <ArrowRight width={14} height={14} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </a>
        </div >
    );
}