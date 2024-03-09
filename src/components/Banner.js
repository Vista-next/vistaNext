import Particles from "react-tsparticles"


export default function Banner (){

    const particlesInit = async (main: any) => {
        
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        // await loadFull(main);
      };
    

      return (
          <div className="relative flex flex-col justify-center items-center" id='home'>
                <Particles className="w-full"
            id="tsparticles"
            height = "100vh"
            width="100%"

            options={{
                background: {
                color: {
                    value: "#0b0c22",
                },
                },

                fullScreen: false,
                fpsLimit: 60,
                interactivity: {
                events: {
                    onClick: {
                    // enable: true,
                    mode: "push",
                    },
                    onHover: {
                    enable: true,
                    mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                    },
                    push: {
                    quantity: 4,
                    },
                    repulse: {
                    distance: 200,
                    // duration: 0.4,
                    },
                },
                },
                particles: {
                color: {
                    value: "#fff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: false,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                    enable: true,
                    area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    random: true,
                    value: 5,
                },
                },
                detectRetina: true,
            }}
            />
                <div className="absolute flex flex-col items-center px-[5%] lg:px-[10%] text-white space-y-8">
                    <h1 className=" text-white  text-2xl md:text-3l lg:text-4xl font-bold">Meta Web Inu is a decentralized Community driven memes NFT token!!</h1>    
                    <p className="text-sm sm:text-base md:text-lg ">
                        {/* banner body */}
                        Our aim is to make record by growing token to 10000X
                    </p>
                    <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-2">
                        <p>
                            Contract Address : 
                        </p>
                        <a className="text-sm md:text-base font-semibold " href="https://bscscan.com/token/0xfc75817694083d1eaf48c238e2aa212ec4b209ea">0xfc75817694083d1eaf48c238e2aa212ec4b209ea</a>
                    </div>
                    
                {/* buttons */}
                    <div className="flex flex-col space-y-4 space-x-0  md:space-y-0 md:flex-row md:space-x-4 justify-center items-center">
                        <a type='submit' href="https://pancakeswap.finance/swap?outputCurrency=0xfc75817694083d1eaf48c238e2aa212ec4b209ea" className="py-1 md:py-4 px-4 sm:px-6  md:px-8 text-sm md:text-base flex-nowrap  bg-sky-700 shadow-sm rounded-md  active:scale-95"> Buy PancakeSwap </a>
                         
                        <a href="https://deeplock.io/lock/0xd064dbCEB023c6DEf074Bd9bb388deA0aaC320c1" className="py-1 sm:pd-2 md:py-4 px-4 sm:px-6 cursor-pointer md:px-8 text-sm md:text-base shadow-sm rounded-md  bg-violet-700 active:scale-95">20 Yrs liquidity lock</a> 
                       
                    </div>
            </div>
           
          </div>
        
      );
}