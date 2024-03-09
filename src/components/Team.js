import Image from 'next/image';
import data from './data.json';


export default function Team() {
  return (
    <section id='team' className="">
                <div className=" flex flex-col items-center px-[10%] text-white space-y-8 py-[5%]">
                    <h1 className=" text-black text-4xl font-semibold">Meta Web Team</h1>    
                    <p className="text-sm text-gray-700 ">
                        {/* banner body */}
                        
                    </p>
                {/* images */}
                    <div className="flex flex-col items-center space-y-8 md:space-y-0 md:flex-row md:space-x-4">
                        
                        {data.team.map((member)=>(
                            <div key={member.src} className="flex flex-col items-center space-y-1">
                                <div key={member.src} className='  h-40 w-40  -z-10'>
                                    <img key={member.src}
                                        src={member.src}
                                        // objectFit='cover'
                                        // layout='fill'
                                        className=' h-full w-full hover:scale-105 rounded-full  object-cover'
                                    />
                            
                            </div>
                            <h1 className='py-1 text-gray-900 text-base font-semibold'>{member.name}</h1>
                            <h1 className='py-1 text-gray-900 text-base font-light'>{member.role}</h1>
                        </div>
))}
                        
                        {/* <div className='relative h-40 w-40 rounded-full -z-10'>
                            <Image 
                                src="/Edward.jpg"
                                objectFit='cover'
                                layout='fill'
                                className='rounded-full'
                            />
                        </div>
                        <div className='relative h-40 w-40 rounded-full -z-10'>
                            <Image 
                                src="/Jonathan.jpg"
                                objectFit='cover'
                                layout='fill'
                                className='rounded-full '
                            />
                            <h1>Name</h1>
                        </div>
                        <div className='relative h-40 w-40 rounded-full -z-10'>
                            <Image 
                                src="/YCLau.jpg"
                                objectFit='cover'
                                layout='fill'
                                className='rounded-full'
                            />
                            <h1>Name</h1>
                        </div>
                        <div className='relative h-40 w-40 rounded-full -z-10'>
                            <Image 
                                src="/MikeChiam.jpg"
                                objectFit='cover'
                                layout='fill'
                                className='rounded-full'
                            />
                            <h1>Name</h1>
                        </div>

                        <div className='relative h-40 w-40 rounded-full -z-10'>
                            <Image 
                                src="/Richard.jpg"
                                objectFit='cover'
                                layout='fill'
                                className='rounded-full '
                            />
                            <h1>Name</h1>
                        </div> */}
                    </div>
            </div>

    </section>
  )
}
