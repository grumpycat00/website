import React from 'react';

export default function Article() {
    return (
        <div className="flex boxMobile justify-around items-stretch bg-aquamarine w-full  ">
            <div className="bg-grey/25 flex-1 flex flex-col items-center p-4 m-4 md:m-4 border-2 border-red rounded space-y-4">
                <h2 className="text-3xl  mb-8 text-white text-center  underline decoration-solid">Connect with Us – Because Why Not?</h2>
                <h3 className="text-fear text-2xl">
                We’re too grumpy to care.
                    </h3>
                    <div className="flex space-x-4 my-4">
                    <a href="https://x.com/grumpycoincat" target="_blank" rel="noopener noreferrer">
                        <img src={require("../../../assets/x.png")} alt="Twitter Logo" className="w-8 h-8 md:w-10 md:h-10" />
                    </a>
                </div>
                <p className="text-white">
                Join the Grumpy Cat fan club on social media – if you feel like it.<br />
                Follow us on Twitter for a daily dose of snark, <br />
                check out our Pinksale page for the latest in reluctant investment opportunities, <br />
                and hop onto our Telegram for all the grumpy gossip. <br /></p>
                <p className="text-white">We're practically everywhere, sharing our discontent with the world. <br />
                So, hit those follow buttons and join the ranks of the unimpressed. Or don't. <br /></p>
                
                    <img src={require("../../../assets/redgrumpy.webp")} alt="Grumpy with red chart on background" className="w-full h-auto  " />
            </div>

            <div className="bg-grey/25 flex-1 flex flex-col items-center p-4 m-4 md:m-4 border-2 border-grey rounded space-y-4">
                <h2 className="text-3xl  mb-8 text-white text-center  underline decoration-solid">Discover the Phenomenon: Grumpy Cat's Rise to Fame</h2>
                <p className=" text-white">
                In a world where celebrity status can be achieved by looking perpetually annoyed, Grumpy Cat reigns supreme.<br />
                This CNN article chronicles the meteoric rise of the internet's favorite feline sourpuss.<br /><br />
                From meme stardom to a multi-million dollar empire, Grumpy Cat’s journey is a testament to the power of a good frown.<br />
                Perfect for those who believe the secret to success lies in mastering the art of looking unimpressed.<br /><br />
                Dive in to learn how this grumpy kitty clawed her way to the top, one disdainful glare at a time.</p>
                <a href=" https://edition.cnn.com/2019/05/17/business/grumpy-cat-pet-celebrities-memes-influencer/index.html" target="_blank" rel="noopener noreferrer">
                    <img src={require("../../../assets/cnn.png")} alt="Illustration 2" className="w-full h-auto" />
                </a>
            </div>

            <div className="bg-grey/25 flex-1 flex flex-col items-center p-4 m-4 md:m-4 border-2 border-gread rounded space-y-4">
                <h2 className="text-3xl  mb-8 text-white text-center  underline decoration-solid">I'm not a fucking crook</h2>
                <p className=" text-white font-bold">
                😻 Liquidity Locked FOREVER<br />
                🙀 Metadata, Mint, Freeze Authority Revoked<br />
                😽 Top Holders rewards<br />
                😾 Doxxed Team<br />
                </p>

                <p className=" text-white">
                We’ve permanently revoked all minting and freeze authorities to ensure that the token supply remains fixed, safeguarding your investment from inflation or dilution. With no control over these authorities, your assets are secure and accessible at all times, free from any unexpected restrictions.</p>

                <p className=" text-white">
                    Security and Trust<br />
                    By locking 100% of liquidity FOREVER and revoking authorities, we aim to create a secure and transparent environment for our community. <br /> 
                    Our commitment to a fair launch on Moonshot and Meteora, along with rewards for the top 50 holders and a DOXXED team, ensures long-term trust and confidence in the project.  
                </p>
                <img src={require("../../../assets/greenGrump.webp")} alt="grumpy with green chart on background" className="w-full h-auto" />
            </div>
        </div>
    );
}
