import React from "react";
import "../styles/forms.css";
import Banner from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import CTA from "../components/CTA";
import { LinkWithQuery } from "../components/BackButton";

import { businessType } from "../data/addToUserData";

function BusinessType() {

  const navigate = useNavigate();


  let buttons = [
    { title: 'Individual / Sole Proprietor', id: 'individual', value: 'Individual / Sole Proprietor', key: '1' },
    { title: 'Joint Venture', id: 'joint-venture', value: 'Joint Venture', key: '2' },
    { title: 'LLC', id: 'llc', value: 'LLC', key: '3' },
    { title: 'Partnership', id: 'partnership', value: 'Partnership', key: '4' },
    { title: 'Trust', id: 'trust', value: 'Trust', key: '5' },
    { title: 'Corporation', id: 'corporation', value: 'Corporation', key: '6' },
	
  ]
  
  const nextStep = (e) => {
    
    e.preventDefault();
    let v = e.currentTarget.value;

    businessType(v)

    navigate('/contact')

    
  }
  
  return (
    
      
      <div className="pb-10 bg-dark-purple">
      <Banner setProgress={30} />
      

    <div className="flex flex-col items-center px-4 py-5 mt-20 formArea justify-top sm:px-6 lg:px-4">

      <div className="space-y-8 m-w-1/2">
        <div>
            <h2 className="mt-4 text-4xl font-extrabold text-center text-white">
             How is Your Business <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">Structured </span> 

            </h2>
            
        </div>
        <form className="mt-8 space-y-6">


          
        <div className="grid justify-center gap-4 md:grid-cols-3 sm:grid-cols-2">
        {buttons.map((button) => {
                
          return (
                  <div>
                  <button
                    className="w-full font-bold text-white rounded monthButton bg-input-purple hover:shadow-lg hover:shadow-button-purple/50 hover:transition-transform hover:ease-in-out hover:bg-button-purple"
                    data-value={button.value}
                    value={button.value}
                    onClick={nextStep}
                  >
                    <span>{button.title}</span>
                  </button>
                  </div>
                );
              
            })}

            </div>
            <LinkWithQuery to="/business-name">Back</LinkWithQuery>

        </form>
      </div>
      </div>
        <CTA />
        

      </div>
      
  )

}

export default BusinessType;