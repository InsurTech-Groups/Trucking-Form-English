import React from 'react';

import Logo from '../assets/whiteLogo.png';

export default function NavBar(props){

 

    return(
<header className="bg-input-purple">
      <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between w-full py-6 border-b lg:border-none">
          <div className="flex items-center">
            <a href="/">
              <img className="w-auto h-16" src={Logo} alt="" />
            </a>
           
          </div>
          <div className="ml-10 space-x-4">
            
            <a
              href="tel:18045313796"
              className="inline-block px-4 py-2 text-base font-medium text-white border border-transparent rounded-md bg-button-purple hover:bg-indigo-50 hover:text-button-purple"
            >
                (804) 531-3796
              </a>
          </div>
        </div>
       
      </nav>
    </header>

    )

}
