import React from "react";
import roadGrump from '../../../assets/grumpyroad.webp';

export default function Grumpgames() {
    return (
        
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 p-4 text-bckgd">
        <div className="md:w-1/2 w-full mb-6 md:mb-0 mx-3 bgRoad bg-no-repeat bg-center p-4">
            <h2 className="text-3xl text-white   text-center bg-bckgd  bg-opacity-60 underline decoration-solid ">Grumpy News v2 Roadmap</h2>
            <ul className="list-disc flex flex-col gap-y-5 p-8 bg-white bg-opacity-80 rounded">
                <li className="border-t-4 pt-5">Q4 2024: <br/>
    - Fair Launch via Moonshot<br/>
    - Token Launch and Initial DEX Offering (IDO) on Meteora<br/>
    - Launch of the V2 Website<br/>
    - First AMA Session<br/>
    - Release of the Promotional Video</li>
                <li className="border-t-4 pt-5">Q1-Q2 2025: <br/>
    - Launch of the Staking <br/>
    - Major Partnership Announcements <br/>
    - First Community Event <br/>
    - Full Release of GrumpyCat Game <br/>
    - Launch of Live Staking & DApp: Stake GRUMP tokens and use the decentralized application <br/>
    - Release of Promotional Movies (Launch of GrumpFlix)</li>
                <li className="border-t-4 pt-5">Q2-Q3 2025: <br/>
    - Expansion of the Grumpy News Ecosystem <br/>
    - Enhanced Marketing Campaigns <br/>
    - Listings on Exchanges <br/>
    - Introduction of GrumpyCat Game (Alpha Version)</li>
                <li className="border-t-4 pt-5">Q3-Q4 2025: <br/>
    - More Exchange Listings <br/>
    - Further Development of the DApp <br/>
    - Launch of Community-driven Projects Funding Initiative <br/>
    - Full Release of GrumpyCat Game <br/>
    - Introduction of the Grumpy swap exchange</li>
            </ul>
        </div>
    </div>
    
    )
}