import { Project } from "@/components/project"

export const Projects = () => {
    return (

        <div className='w-full relative w-full flex flex-col items-center'>
            <div className="w-full flex flex-col items-start text-start justify-start">
                <div className="w-full flex flex-col gap-y-8 mt-2">

                    <Project
                        name={"Soulflame"}
                        tagline={"Solo-developed Action Adventure Game"}
                        tags={['GML']}
                        year={2027}
                        bgImage={'soulflame.png'}
                        steamHref="https://store.steampowered.com/app/4177660/Soulflame/"
                        href="https://soulflamegame.com"
                        backgroundPositionY='30%'
                        highlighted={true}
                    >
                    </Project>

                    <Project
                        name={"Pinball Pioneer"}
                        tagline={"Top 10 Game of GMTK 2023 Game Jam"}
                        tags={['GML']}
                        year={2024}
                        bgImage={'pinball_highres.png'}
                        backgroundPositionY='35%'
                        itchHref="https://alexeckardt.itch.io/pinball-pioneer"
                        blogurl="/blog/pinball-pioneer"
                    >
                    </Project>

                    <Project
                        name={"Titan Quest (Prototype)"}
                        tagline={"Educational project for NASA Spaceapps Hackathon. No relation to the ARPG of the same name."}
                        tags={['GML']}
                        year={2023}
                        bgImage={'spaceapps_bkg.png'}
                        backgroundPositionY='50%'
                    >
                    </Project>
                    
                    <Project
                        name={"Soulflame (Alpha)"}
                        tagline={"Solo-developed Action Adventure Game"}
                        tags={['GML']}
                        year={2021}
                        bgImage={'soulflame_highres.png'}
                        itchHref="https://alexeckardt.itch.io/soulflamealpha"
                        backgroundPositionY='50%'
                    >
                    </Project>

                </div>
            </div >
        </div >
    )
}