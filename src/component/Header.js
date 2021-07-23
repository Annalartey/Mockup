import React from 'react'
import {Link} from 'react-router-dom';


function Header() {
    return (
        <div className="flex flex-col lg:flex-row w-full lg:justify-between items-start lg:items-center space-y-6 lg:space-y-0 py-8 text-white header">
            <h1 class="ml-28">LOGO</h1>
            <div class="flex justify-between mr-28 text-sm font-bold">
                <Link to="/"><h3 class="ml-4 hover:text-gray-400">HOME</h3></Link>
                <Link to="/about"><h3 class="ml-4 hover:text-gray-400">ABOUT</h3></Link>
                <Link to="/contact"><h3 class="ml-4 hover:text-gray-400">CONTACT</h3></Link>
            </div>
            
        </div>
    )
}

export default Header
