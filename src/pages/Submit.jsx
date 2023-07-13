import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import Sending from "../assets/Confirm.json";
import { userData } from '../data/userData';
import { useNavigate } from 'react-router';


const Submit = () => {

  let businessName = userData.business_name;
  const navigate = useNavigate();

useEffect(() => {

  //set time out function that lasts 3 seconds
  setTimeout(() => {
   
    navigate('/thank-you')
  } 
  , 4000)
  
}, [])


  return (
    <div>
 <div className="bg-input-purple ">

<section className="w-full py-8 mx-auto" id='lottie'>
  <div className="container px-4 mx-auto">
    <div className="py-5 mx-auto overflow-hidden rounded-lg bg-button-purple lg:w-1/2 md:w-full sm:w-full">
      <div className="flex flex-wrap align-middle">
        <div className="w-full px-6 m-auto text-center md:w-full md:pl-12 lg:pr-0">
          <h3 className="mb-2 font-medium text-center text-white lg:text-2xl sm:text-lg">
            <span data-config-id="header-p2">We are submitting your form...</span>
                  </h3>
                  <h3 className='mb-2 font-medium text-center text-white lg:text-4xl sm:text-lg'>
                    You are on your way to savings <br/> {businessName}!
                  </h3>
          <p className="justify-center font-medium text-center text-blue-100 lg:text-xl sm:text-sm" data-config-id="desc">Please wait while we get you connected with an agent</p>
        </div>

      </div>
    </div>

    <Lottie animationData={Sending} loop={true} className="lottie" />

  </div>

</section>




</div>

      
    </div>
  );
}

export default Submit;