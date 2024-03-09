// import Image from "next/image";
// import Link from "next/link";
import Navigation from "./Navigation";

const Header = () =>{

    const navLink = [{label: 'HOME', href:'home'}, {label: 'ABOUT', href:'about'}, { label: 'TOKEN',href:'token' },
    {label:'OUR ACTIVITY', href:'activity'},
    {label:'ROADMAP', href:'mainroad'},
{label:'CONTACT', href:'contact'} ]

    return (
        <>
        <div className=" justify-between  pl-0 flex  md:justify-start flex-row w-full top-0 sticky text-sky-50 bg-[#0b0c22] py-4 px-2 z-50 shadow-md">
            
            <div className = 'z-50 md:hidden left-0'>
                        <Navigation link={navLink}/>
            </div>
            
            <div className="flex items-center md:ml-4  flex-col md:justify-start  relative md:flex-row justify-center  ">
                {/* logo */}
               <img 
                src="/logo.png"
                className="object-contain h-12"
                />
                <h1 className="text-lg font-semibold">META WEB INU </h1>
            </div>

            <div className="hidden md:flex flex-row flex-1 justify-center text-lg font-semibold text-white items-center">
                {/* Header items */}
                {navLink.map(({label,href})=><a key={href} href={`/#${href}`} className="mx-3 text-sm sm:text-lg md:text-base cursor-pointer">{label}</a>)}
                
                
            </div>

        </div>

            </>
        
    )
}

export default Header;