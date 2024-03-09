import Doughnut from "./Doughnut";
import {useState} from 'react';

function Token() {
  const [ day, setDay ]  = useState();
  const  [ hour, setHour]  = useState();
  const  [ min, setMin ]  = useState();
  const  [ sec, setSec ]  = useState();


  setInterval(()=>{
    
  }, )

  return (
    <section className=" bg-[#0b0c22] w-full py-16 sm:p-5" id='token'>
      <div className=" flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-16 justify-center px-[10%] py-4 text-white">
        {/* left */}
        <div>
          <h1 className="text-4xl">
           Token Allocation <br />  
          </h1>
           
          
          {/* card */}
          <div className="block p-6 rounded-lg shadow-lg bg-gray-800 shadown-md max-w-md mt-5 space-y-4">
            <h5 className=" text-white text-lg leading-tight font-medium mb-2">
              {/* Presale is Live from 10th April to 30th April 2022 */}
              <p> Crypto token will be released on the basis of our Token Allocation</p>
            </h5>
            {/* Timer section */}
            <div className="flex w-full justify-between">
                {/* <div>
                   
                    <h1 className="text-3xl font-bold">00</h1>
                    <h3 className="text-lg font-semibold">Days</h3>
                </div>
                <div>
                   
                    <h1 className="text-3xl font-bold">00</h1>
                    <h3 className="text-lg font-semibold">Hours</h3>
                </div>
                <div>
                    
                    <h1 className="text-3xl font-bold">00</h1>
                    <h3 className="text-lg font-semibold">Mins</h3>
                </div>
                <div>
                   
                    <h1 className="text-3xl font-bold">00</h1>
                    <h3 className="text-lg font-semibold">Secs</h3>
                </div> */}
            </div>

            <div className="flex justify-center space-x-4">
                <a
                type="button"
                href="https://twitter.com/Metawebinu"
                className=" inline-block px-8 py-2.5 bg-sky-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 active:scale-95 ease-in-out"
                >
                Join Us
                </a>

                <a  href="https://pancakeswap.finance/swap?outputCurrency=0xfc75817694083d1eaf48c238e2aa212ec4b209ea" className=" inline-block px-8 py-2.5 bg-violet-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 active:scale-95 ease-in-out">
                    Buy Now
                </a>
            </div>
          </div>

                              {/* right */}
           
        </div>
        <div> <Doughnut/> </div>
      </div>
    </section>
  );
}



  

export default Token;
