export default function Grumpnomics() {
    return (
        <div className="flex boxMobile items-center justify-center p-4 m-4  rounded noPaddingMobile">

            <div className=" half-minus-margin w-full mb-6 min-h-[30rem] text-center mx-4 bg-blueGrump   rounded-lg p-6  drop-shadow-lg noPaddingMobile heighMobile">
                <div className=" w-fit flex-center mx-auto border-2 bg-white  border-bckgd rounded-lg marginYMobile">
                <h2 className="  text-3xl  p-2 text-pinksaleSoft  font-bold underline decoration-solid TitreMobile paddingXMobile " >

                <a href="https://www.pinksale.finance/" target="_blank" rel="noopener noreferrer">
                    Fair-launch Grumpy !
                    </a> 
                    </h2>
                </div>
                    <p>Participate ⬆️</p>
                    <p className="border-b-4 pb-4 mb-5  border-bckgd"></p>
                
                <ul className="list-disc flex flex-col gap-y-5 px-14 text-left pl-20 text-bckgd min-h-[20rem] noPaddingMobile textAlignMobile gapMobile heighMobile marginYMobile">
                    <li>Fair Launch (40%)</li>
                    <li>Tokens for Fair Launch: 39,800,000 GRUMP</li>
                    <li>Presale Price: 1 SOL = 26,533 GRUMP</li>
                    <li>Start Time: 2024-08-15 11:00 (UTC)</li>
                    <li>End Time: 2024-08-22 19:00 (UTC)</li>
                    <li>Soft Cap: 15 SOL</li>
                    <li>Hard Cap: 1500 SOL</li>
                </ul>
            </div>



            <div className="half-minus-margin w-full mb-6 min-h-[30rem] text-center mx-4  bg-gray  rounded-lg p-6 drop-shadow-lg noPaddingMobile heighMobile">
                <h2 className="text-3xl text-white mb-5  underline decoration-solid TitreMobile ">Grumpy-nomics !</h2>
                <p className="text-blueGrump mb-4 font-bold border-b-4 pb-4  border-white">Hello, watch our tokenomic about your favorite GrumpMeme!</p>
                <ul className="list-disc flex flex-col gap-y-5 px-14 text-left pl-20 text-blueGrump min-h-[20rem] noPaddingMobile textAlignMobile gapMobile heighMobile marginYMobile ">
                    <li>Fair Launch: 40% (39,800,000 GRUMP)</li>
                    <li>Team & Reserve and Burn: 20% (19,900,000 GRUMP)</li>
                    <li>Marketing & Partnerships: 10% (9,950,000 GRUMP)</li>
                    <li>Community Rewards & Ecosystem Development: 10% (9,950,000 GRUMP)</li>
                    <li>Liquidity: 20% (19,900,000 GRUMP)</li>
                </ul>
            </div>


        </div>
    );
}