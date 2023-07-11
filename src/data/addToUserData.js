import { userData } from "./userData";

const saveUserDataToLocalStorage = () => {
  localStorage.setItem('userData', JSON.stringify(userData));
  console.log('local storage data', localStorage.getItem('userData'));
};

const loadUserDataFromLocalStorage = () => {
  const storedData = localStorage.getItem('userData');
  if (storedData) {
    Object.assign(userData, JSON.parse(storedData));
    console.log('loaded data', userData)
  }
};

loadUserDataFromLocalStorage();

export const landingPageData = (id, zipCodeValue, cityValue, stateValue, url) => {

  userData.userId = id;
  userData.zip_code = zipCodeValue;
  userData.city = cityValue;
  userData.state = stateValue;

  let tF = document.getElementById('xxTrustedFormToken_0').value;

  userData.trusted_form_token = tF;

  console.log('userData', userData);
  saveUserDataToLocalStorage();

};

export const businessAddress = (address, city, state, zipcode) => {

  userData.business_address = address;
  userData.business_city = city;
  userData.business_state = state;
  userData.business_zipcode = zipcode;

  console.log('userData', userData);
  saveUserDataToLocalStorage();

};

export const truckAddress = (address, city, state, zipcode) => {
  
  userData.truck_address = address;
  userData.truck_city = city;
  userData.truck_state = state;
  userData.truck_zipcode = zipcode;
  
  console.log('userData', userData);
  saveUserDataToLocalStorage();

};

export const currentInsurance = (insurer) => {

  userData.current_insurance = insurer;
  saveUserDataToLocalStorage();

};

export const dateToStartInsurance = (date) => {
  
  userData.insurance_date = date;
  console.log('userData', userData);
  saveUserDataToLocalStorage();

};

export const dotNumber = (dot) => {
    
  userData.dot_number = dot;
  console.log('userData', userData);
  saveUserDataToLocalStorage();

}

export const businessDuration = (duration) => {
        
  userData.business_duration = duration;
  console.log('userData', userData);
  saveUserDataToLocalStorage();

}

export const numberOfTrucks = (number) => {
          
  userData.number_of_trucks = number;
  console.log('userData', userData);
  saveUserDataToLocalStorage();

};

export const numberOfTrailers = (number) => {

  userData.number_of_trailers = number;
  console.log('userData', userData);
  saveUserDataToLocalStorage();

};

export const haulingStuff = (stuff) => {

  userData.hauling_stuff = stuff;
  console.log('userData', userData);
  saveUserDataToLocalStorage();

};

export const businessName = (name) => {

  userData.business_name = name;
  console.log('userData', userData);
  saveUserDataToLocalStorage();

};

export const businessType = (type) => {

  userData.business_type = type;
  console.log('userData', userData);
  saveUserDataToLocalStorage();

};

export const contactName = (firstName, lastName) => {

  userData.firstName = firstName;
  userData.lastName = lastName;
  console.log('userData', userData);
  saveUserDataToLocalStorage();

};

export const contactInformation = (email, phone) => {

  userData.email = email;
  userData.phone = phone;
  console.log('userData', userData);
  saveUserDataToLocalStorage();

};

