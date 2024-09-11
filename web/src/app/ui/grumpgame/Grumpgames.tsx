import React from "react";
import roadGrump from '../../../assets/grumpyroad.webp';

export default function Grumpgames() {
    return (
        
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 p-4 text-bckgd">
        <div className="md:w-1/2 w-full mb-6 md:mb-0 mx-3 bgRoad bg-no-repeat bg-center p-4">
            <h2 className="text-3xl text-white   text-center bg-bckgd  bg-opacity-60 underline decoration-solid ">Grumpy Road</h2>
            <ul className="list-disc flex flex-col gap-y-5 p-8 bg-white bg-opacity-80 rounded">
                <li className="border-t-4 pt-5">Q3 2024: Fair Launch, Token Launch, Initial DEX Offering (IDO) on Raydium, V2 website, Introduction of GrumpyCat Game( alpha), first ama, promotional vidéo</li>
                <li className="border-t-4 pt-5">Q4 2024: Staking Platform Launch, Major Partnerships Announcements, First Community Event, GrumpyCat Game release, Live Staking & DApp: Stake GRUMP tokens and use the decentralized application, promotional movies (launch of the grumpflix)</li>
                <li className="border-t-4 pt-5">Q1 2025: Expansion of Ecosystem, Enhanced Marketing Campaigns, Exchange Listings</li>
                <li className="border-t-4 pt-5">Q2 2025: Additional Exchange Listings, Further Development of DApp, Community-driven Projects Funding.</li>
            </ul>
        </div>
        {/* <div className="md:w-1/2 w-full mb-6 md:mb-0 mx-3 bgGame bg-no-repeat bg-center p-4 relative">
            <div className="absolute bottom-0 left-0 right-0 p-4">
                <h2 className="text-3xl text-white   text-center bg-bckgd  bg-opacity-90 underline decoration-solid">Grumpy Game</h2>
                <ul className="list-disc flex flex-col gap-y-5 p-8 bg-white bg-opacity-60 rounded">
                    <li className="border-t-4 pt-5">“Our developers are working tirelessly. Soon, you'll be able to crush the competition in our all-new fighting game and battle it out against the other memecoins!”</li>
                    <li className="border-t-4 pt-5">“Get ready for an explosive Smash or Brawlhalla-style fighting game, where every battle will be unique and intense!”</li>
                    <li className="border-t-4 pt-5">“Take on your friends and opponents from all over the world in battles inspired by the best VS fighting games!”</li>
                    <li className="border-t-4 pt-5">“Unique characters, await you soon in our virtual memecoins arena!”</li>
                </ul>
            </div>
        </div> */}
    </div>
    
    )
}