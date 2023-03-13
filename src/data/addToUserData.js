import { userData } from "./userData";


export const landingPageData = (id, zipCodeValue, cityValue, stateValue, url) => {

  userData.userId = id;
  userData.zip_code = zipCodeValue;
  userData.city = cityValue;
  userData.state = stateValue;

  let tF = document.getElementById('xxTrustedFormToken_0').value;

  userData.trusted_form_token = tF;

  console.log('userData', userData);

};

export const businessAddress = (address, city, state, zipcode) => {

  userData.business_address = address;
  userData.business_city = city;
  userData.business_state = state;
  userData.business_zipcode = zipcode;

  console.log('userData', userData);
};

export const truckAddress = (address, city, state, zipcode) => {
  
    userData.truck_address = address;
    userData.truck_city = city;
    userData.truck_state = state;
    userData.truck_zipcode = zipcode;
  
    console.log('userData', userData);
}