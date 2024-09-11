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
                    <a href="https://www.pinksale.finance/" target="_blank" rel="noopener noreferrer">
                        <img src={require("../../../assets/pinksale.png")} alt="Pinksale Logo" className="w-8 h-8 md:w-10 md:h-10" />
                    </a>
                    <a href="https://tr.ee/6zcKj0wXOn" target="_blank" rel="noopener noreferrer">
                        <img src={require("../../../assets/telegram.png")} alt="Telegram Logo" className="w-8 h-8 md:w-10 md:h-10" />
                    </a>
                    <a href="https://www.dexview.com/solana/7WfUQNHUCZgkZXf7vFo2Gm8VPcLF4buV87APp5DAueFD" target="_blank" rel="noopener noreferrer">
                        <img src={require("../../../assets/dexview.png")} alt="Dexview Logo" className="w-8 h-8 md:w-10 md:h-10" />
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
                😻  0% Tax<br />
                🙀  Metadata Authority Revoked<br />
                😽  Mint Authority Revoked<br />
                😾  Freeze Authority Revoked<br />
                </p>

                <p className=" text-white">
                    We've permanently revoked the minting authority to prevent any unexpected increases in token supply,<br /> 
                     protecting your investment from inflation and dilution.<br /> 
                    We've also revoked the freeze authority, ensuring that your assets are always accessible and <br /> 
                    never subject to sudden restrictions.<br /> 
                </p>

                <p className=" text-white">
                    Security and Trust<br />
                    By implementing these measures, we aim to provide a secure and trustworthy environment for your investments,<br /> 
                    ensuring peace of mind and confidence in our project.  
                </p>
                <img src={require("../../../assets/greenGrump.webp")} alt="grumpy with green chart on background" className="w-full h-auto" />
            </div>
        </div>
    );
}
