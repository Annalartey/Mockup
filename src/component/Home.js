import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Try from './Try'

function Home() {
    return (
        <div className="text-center">
            <Header/>
            <div className='picture'><Try/></div>
            <div className="px-80">
                <h1 className="font-bold text-4xl uppercase mt-10">TEXT GOES HERE</h1>
                <h1 className="font-bold text-4xl uppercase  mt-10" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
                <p className="my-10 uppercase text-xl">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div className="flex bg-black h-2/5 w-100%">
                <div className="pic"></div>
                <div>
                    <h1 className="font-bold text-4xl text-white mt-60 ml-52">TEXT HERE</h1>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home
