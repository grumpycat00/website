export default function Grumpnomics() {
    return (
        <div className="flex boxMobile items-center justify-center p-4 m-4  rounded noPaddingMobile">

             <div className=" half-minus-margin w-full mb-6 min-h-[30rem] text-center mx-4 bg-blueGrump   rounded-lg p-6  drop-shadow-lg noPaddingMobile heighMobile">
                <div className=" w-fit flex-center mx-auto border-2 bg-white  border-bckgd rounded-lg marginYMobile">
                <h2 className="  text-3xl  p-2 text-pinksaleSoft  font-bold underline decoration-solid TitreMobile paddingXMobile " >
                    Grumpy News
                    </h2>
                </div>
                    <p>Liquidity Locked</p>
                    <p className="border-b-4 pb-4 mb-5  border-bckgd"></p>
                
                <ul className="list-disc flex flex-col gap-y-5 px-14 text-left pl-20 text-bckgd min-h-[20rem] noPaddingMobile textAlignMobile gapMobile heighMobile marginYMobile">
                    <li>100% of liquidity is locked to ensure price stability and protect investors.</li>
                    <li>5 Rounds of Token Burns
                    We have scheduled 5 rounds of token burns, each reducing the total supply by 10%, ensuring long-term deflationary pressure.</li>
                    <li>Community Airdrop Rewards
                    5% of the total supply will be distributed to early adopters and active community members through periodic airdrops.</li>
                    <li>Fair Launch on pinksale and Raydium
                    No presale or early investor advantages. The token is launched directly on Raydium, giving everyone an equal opportunity to participate.</li>
                    <li>Referral Program
                    Invite your friends and earn bonus tokens! For every person you refer who purchases meme coins, you’ll receive a percentage of their purchase as a reward.</li>
                </ul>
            </div>  



            {/* <div className="half-minus-margin w-full mb-6 min-h-[30rem] text-center mx-4  bg-gray  rounded-lg p-6 drop-shadow-lg noPaddingMobile heighMobile">
                <h2 className="text-3xl text-white mb-5  underline decoration-solid TitreMobile ">Grumpy-nomics !</h2>
                <p className="text-blueGrump mb-4 font-bold border-b-4 pb-4  border-white">Hello, watch our tokenomic about your favorite GrumpMeme!</p>
                <ul className="list-disc flex flex-col gap-y-5 px-14 text-left pl-20 text-blueGrump min-h-[20rem] noPaddingMobile textAlignMobile gapMobile heighMobile marginYMobile ">
                    <li>Fair Launch: 40% (39,800,000 GRUMP)</li>
                    <li>Team & Reserve and Burn: 20% (19,900,000 GRUMP)</li>
                    <li>Marketing & Partnerships: 10% (9,950,000 GRUMP)</li>
                    <li>Community Rewards & Ecosystem Development: 10% (9,950,000 GRUMP)</li>
                    <li>Liquidity: 20% (19,900,000 GRUMP)</li>
                </ul>
            </div> */}


        </div>
    );
}