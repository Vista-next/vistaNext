// import Image from 'next/image';


const About = ()=>{
    return <section className="bg-white " id='about'>
        <div className="flex flex-col px-6 py-2 md:px-[5%] md:grid md:grid-cols-2  sm:p-5  lg:p-[10%] ">
            {/* left */}
            <div className='flex flex-col justify-center items-start space-y-4'>
                {/* <p>The world’s only enterprise blockchain solution for global payments</p> */}
                <h2 className='text-3xl font-md text-gray-700'>Meta Web Inu will be listing on Hotbit, Bitmart, Latoken, LBank, Bitbns, Gate.io & many more big exchanges</h2>
                <p className="">Welcome to Meta Web Inu (META WEB), a community-driven, equitably
launched, decentralized (metaverse, NFT & meme coin) on Binance Smart
Chain where we can create/buy or sold memes NFT. These memes
character can be auctioned & seen in metaverse world when we dives
into it. Later on, the total number of 100K cabbed plots will be created
& can be bough with (META WEB) coins. It aims to be the world’s
Largest NFT Metaverse coin. Meta Web Inu (META WEB) is largely
inspired by the success of meme coin Shiba Inu & NFT coin Decentraland(MANA), from that we started a project on it and it may kill both Shiba Inu and Decentraland(MANA) in 2022.</p>
                <p>Our project will mainly focus on 1.Providing platform for creating memes and sold it as NFTs. 2.Creating metaverse world where the memes avatars can be seen. 3.Creating plots for these avatars to live in like real world. 4.When all these land finally bought then it can be traded as real estate.</p>
            </div>

            {/* right */}
            <div className='flex flex-row text-center '>
                <img className='z-0 object-cover'  src ="about.png" 
                />
            </div>
        </div>
    </section>
}

export default About;