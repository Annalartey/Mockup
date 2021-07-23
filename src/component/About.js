import React from 'react'
import Footer from './Footer'
import Header from './Header'

function About() {
    return (
        <div>
           <Header/> 
           <div className="about-pic1 bg-fixed"></div>

           <div className="flex flex-row bg-black text-white w-100%">
               <div className="w-50% pl-48 py-40 font-bold">
                   <h1 className="text-3xl" >ABOUT THE MOVEMENT</h1>
               </div>
               
               <div className="pr-48 py-40 ml-40 font-bold ">
                   <h1 className="text-xl  mb-10">NOW, MORE THAN EVER, WOMEN ARE SHATTERING GLASS CEILINGS THAT ONCE LIMITED THEIR ABILITY TO DREAM, GROW, AND CHANGE THE WORLD.</h1>
                    <p> No longer do women have to choose between family or career, they can have it all!
                    As the definition of womanhood continues to advance so does the woman’s need to connect and assess where she fits in the ever-changing world around her. There is no better time than the present to awaken, identify, and release the unique offering of the woman.</p>
                </div>
          </div>

           <div className="about-pic2 bg-fixed"></div>

           <div className="flex flex-row bg-black text-white w-100%">
                <div className="pl-56 py-40 font-bold about-founder">
                   <h1 className="text-2xl mb-10" >ABOUT THE<br></br> FOUNDER</h1>
                   <div className="h-96 bg-gray-200"></div>
                </div>
               
               <div className="pr-56 py-40 ml-10 font-bold ">
                   <h1 className="text-xl  mb-10">SOME TEXT GOES HERE THAT TALKS ABOUT WHAT YOU DO.</h1>
                    <p> No longer do women have to choose between family or career, they can have it all!
                        As the definition of womanhood continues to advance so does the woman’s need to
                        connect and assess where she fits in the ever-changing world around her. There is no better time than the present to awaken, identify, and release the unique offering of the woman.
                    </p>
                    <p className="mt-4"> No longer do women have to choose between family or career, they can have it all!
                        As the definition of womanhood continues to advance so does the woman’s need to
                        connect and assess where she fits in the ever-changing world around her. There is no better time than the present to awaken, identify, and release the unique offering of the woman.
                    </p>
                    <p className="mt-4"> No longer do women have to choose between family or career, they can have it all!
                        As the definition of womanhood continues to advance so does the woman’s need to
                        connect and assess where she fits in the ever-changing world around her. There is no better time than the present to awaken, identify, and release the unique offering of the woman.
                    </p>
                </div>
           </div>
           <Footer/>
        </div>
    )
}

export default About
