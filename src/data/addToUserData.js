import { supabase } from "./lib/supa";
import { userData } from "./userData";



export const saveUserDataToLocalStorage = () => {
  localStorage.setItem('userData', JSON.stringify(userData));
  console.log('local storage data', localStorage.getItem('userData'));
};

export const loadUserDataFromLocalStorage = () => {
  const storedData = localStorage.getItem('userData');
  if (storedData) {
    Object.assign(userData, JSON.parse(storedData));
    console.log('loaded data', userData);
  }

  
};

loadUserDataFromLocalStorage();

export const landingPageData = async (uuid, zipCodeValue, cityValue, stateValue) => {

  console.log('UUID inside landingPageData:', uuid);


  userData.uuid = uuid;
  userData.zip_code = zipCodeValue;
  userData.city = cityValue;
  userData.state = stateValue;
  userData.url = window.location.pathname;

  let tF = document.getElementById('xxTrustedFormToken_0').value;

  userData.trusted_form_token = tF;

  console.log('userData', userData);
  saveUserDataToLocalStorage();

  const { data, error } = await supabase
  .from('user_data')
  .upsert([{
    uuid: userData.uuid,
    zip_code: userData.zip_code,
    city: userData.city,
    state: userData.state,
    trusted_form_token: userData.trusted_form_token,
    url: userData.url
  }], { returning: 'minimal', onConflict: ['uuid'] })
if (error) {
  console.log(error);
}
};


export const businessAddress = async (address, city, state, zipcode) => {

  let uuid = userData.uuid;

  userData.business_address = address;
  userData.business_city = city;
  userData.business_state = state;
  userData.business_zipcode = zipcode;
  userData.url = window.location.pathname;


  console.log('userData', userData);
  saveUserDataToLocalStorage();

  let { data, error } = await supabase 
    .from('user_data')
    .update({
      business_address: userData.business_address,
      business_city: userData.business_city,
      business_state: userData.business_state,
      business_zipcode: userData.business_zipcode,
      url: userData.url
    })
    .eq('uuid', uuid)
  if (error) {
    console.log(error);
  }
  

};

export const truckAddress = async (address, city, state, zipcode) => {
  
  let uuid = userData.uuid;

  userData.truck_address = address;
  userData.truck_city = city;
  userData.truck_state = state;
  userData.truck_zipcode = zipcode;
  userData.url = window.location.pathname;

  
  console.log('userData', userData);
  saveUserDataToLocalStorage();

  let { data, error } = await supabase
    .from('user_data')
    .update({
      truck_address: userData.truck_address,
      truck_city: userData.truck_city,
      truck_state: userData.truck_state,
      truck_zipcode: userData.truck_zipcode,
      url: userData.url
    })
    .eq('uuid', uuid)
  if (error) {  
    console.log(error);
  }


};

export const currentInsurance = async (insurer) => {

  let uuid = userData.uuid;

  userData.current_insurance = insurer;
  userData.url = window.location.pathname;

  saveUserDataToLocalStorage();

  let { data, error } = await supabase
    .from('user_data')
    .update({
      current_insurance: userData.current_insurance,
      url: userData.url
    })
    .eq('uuid', uuid)
  if (error) {
    console.log(error);
  }


};

export const dateToStartInsurance = async (date) => {

  let uuid = userData.uuid;

  
  userData.policy_start_date = date;
  console.log('userData', userData);
  userData.url = window.location.pathname;

  saveUserDataToLocalStorage();

  let { data, error } = await supabase
    .from('user_data')
    .update({
      policy_start_date: userData.policy_start_date,
      url: userData.url
    })
    .eq('uuid', uuid)
  if (error) {
    console.log(error);
  }


};

export const dotNumber = async (dot) => {

  let uuid = userData.uuid;

    
  userData.dot_number = dot;
  console.log('userData', userData);
  userData.url = window.location.pathname;

  saveUserDataToLocalStorage();

  let { data, error } = await supabase
    .from('user_data')
    .update({
      dot_number: userData.dot_number,
      url: userData.url
    })
    .eq('uuid', uuid)
}

export const startDate = async (start) => {

  let uuid = userData.uuid;

        
  userData.startDate = start;
  console.log('userData', userData);
  userData.url = window.location.pathname;

  saveUserDataToLocalStorage();

  let { data, error } = await supabase
    .from('user_data')
    .update({
      startDate: userData.startDate,
      url: userData.url
    })
    .eq('uuid', uuid)
  if (error) {
    console.log(error);
  }


}

export const numberOfTrucks = async (number) => {
        
  let uuid = userData.uuid;

  userData.number_of_trucks = number;
  console.log('userData', userData);
  userData.url = window.location.pathname;

  saveUserDataToLocalStorage();

  let { data, error } = await supabase
    .from('user_data')
    .update({
      number_of_trucks: userData.number_of_trucks,
      url: userData.url
    })
    .eq('uuid', uuid)
  if (error) {
    console.log(error);
  }


};

export const numberOfTrailers = async (number) => {

  let uuid = userData.uuid;

  userData.number_of_trailers = number;
  console.log('userData', userData);
  userData.url = window.location.pathname;

  saveUserDataToLocalStorage();

  let { data, error } = await supabase
    .from('user_data')
    .update({
      number_of_trailers: userData.number_of_trailers,
      url: userData.url
    })
    .eq('uuid', uuid)
  if (error) {
    console.log(error);
  }


};

export const haulingStuff = async (stuff) => {

  let uuid = userData.uuid;

  userData.hauling_stuff = stuff;
  console.log('userData', userData);
  userData.url = window.location.pathname;

  saveUserDataToLocalStorage();

  let { data, error } = await supabase
    .from('user_data')
    .update({
      hauling_stuff: userData.hauling_stuff,
      url: userData.url
    })
    .eq('uuid', uuid)
  if (error) {
    console.log(error);
  }

};

export const bName = async (name) => {

  let uuid = userData.uuid;

  userData.business_name = name;
  console.log('userData', userData);
  userData.url = window.location.pathname;

  saveUserDataToLocalStorage();

  let { data, error } = await supabase
    .from('user_data')
    .update({
      business_name: userData.business_name,
      url: userData.url
    })
    .eq('uuid', uuid)
  if (error) {
    console.log(error);
  }

};

export const businessType = async (type) => {

  let uuid = userData.uuid;

  userData.business_type = type;
  console.log('userData', userData);
  userData.url = window.location.pathname;

  saveUserDataToLocalStorage();

  let { data, error } = await supabase
    .from('user_data')
    .update({
      business_type: userData.business_type,
      url: userData.url
    })
    .eq('uuid', uuid)
  if (error) {
    console.log(error);
  }

};


export const contactInformation = async (firstName, lastName, email, phone) => {

  let uuid = userData.uuid;

  userData.firstName = firstName;
  userData.lastName = lastName;
  userData.email = email;
  userData.phone = phone;
  console.log('userData', userData);
  userData.url = window.location.pathname;

  saveUserDataToLocalStorage();

  let { data, error } = await supabase
    .from('user_data')
    .update({
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      phone: userData.phone,
      url: userData.url
    })
    .eq('uuid', uuid)
  if (error) {
    console.log(error);
  }
  

};

