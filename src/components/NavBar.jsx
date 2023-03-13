import React from 'react';

import Logo from '../assets/whiteLogo.png';

export default function NavBar(props){

 

    return(
<header className="bg-input-purple">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b  py-6 lg:border-none">
          <div className="flex items-center">
            <a href="/">
              <img className="h-16 w-auto" src={Logo} alt="" />
            </a>
           
          </div>
          <div className="ml-10 space-x-4">
            
            <a
              href="tel:18777141714"
              className="inline-block rounded-md border border-transparent bg-button-purple py-2 px-4 text-base font-medium text-white hover:bg-indigo-50 hover:text-button-purple"
            >
              	(877) 714-1714
            </a>
          </div>
        </div>
       
      </nav>
    </header>

    )

}
