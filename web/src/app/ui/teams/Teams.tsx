import React from 'react';

export default function Teams() {
    // Tableau avec les URLs des images et les titres
    const imageUrls = [
        {
            title: "The Original",
            url: require("../../../assets/king.webp")
        },
        {
            title: "Mini Grumpy",
            url: require("../../../assets/mini.png")
        },
        {
            title: "Grumpy Dev",
            url: require("../../../assets/dev.webp")
        },
        {
            title: "Second Boss",
            url: require("../../../assets/mini boss.webp")
        },
        {
            title: "Grump Market",
            url: require("../../../assets/marketing.webp")
        },
        {
            title: "GrumpTective",
            url: require("../../../assets/detectiv.webp")
        }
    ];

    return (
        <div className="flex flex-col items-center  p-4 m-4  ">
            <h2 className=" text-3xl text-white mb-4  underline decoration-solid">Team Grumpy</h2>
            <p className='text-xl text-fear'>Join us, or don't. We honestly couldn't care less.</p>
            <p className="text-white m-8 text-left">
            Meet the masterminds behind the legend! <br />
            The Grumpy Team is a collection of highly unimpressed individuals who reluctantly drag themselves to work every day to keep the Grumpy Cat empire running.<br /><br />
            They possess an unmatched talent for eye-rolling and sarcasm, which they expertly channel into making Grumpy Cat the global phenomenon it is today.<br /><br />
            Whether it’s the stern-faced Original, the ever-grouchy Mini Grumpy, or the perpetually exasperated Grumpy Dev, rest assured, our team is dedicated to achieving greatness – one annoyed sigh at a time.<br /><br />
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {imageUrls.map(({ title, url }, index) => (
                    <div key={index} className="flex flex-col items-center bg-grey/25  border-0 rounded-lg">
                        <img src={url} alt={title} className="w-full max-w-xs h-auto mb-2 border-0 rounded-lg" />
                        <h3 className="text-white mb-2">{title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
