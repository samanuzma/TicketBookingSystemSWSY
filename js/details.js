// Prints the Error message below the Passenger details.
function printErrorPassenger(message){
  document.getElementById('error-message-passenger').innerHTML = `Error: ${message} <br>`;
}

// Prints the Error message below the other details
function printErrorOther(message){
  document.getElementById('error-message-other').innerHTML = `Error: ${message} <br>`;
}

// Add Passenger Details Fields as per the User Input for Number of Passengers
function addElement(adultNum, childNum) {
    var pName = "<div class='form-group grid-temp'><span class='form-label required'>Name</span><input class='form-control p-name' type='text' pattern='[a-zA-Z ]{5,}' required></div>";
    var aAge = "<div class='form-group grid-temp'><span class='form-label required'> Age </span><input class='form-control adultp-age' min='13' max='120' type='number' required></div>";
    var cAge = "<div class='form-group grid-temp'><span class='form-labelrequired'> Age </span><input class='form-control childp-age' min='1' max='12' type='number' required></div>";
    var pGender ="<div class='form-group grid-temp'><span class='form-label required'>Gender</span><div class='form-gender-checkbox'><label for='genderp-male'><input type='radio' class='genderp-male' name='gender'><span></span> Male</label><label for='genderp-female'><input type='radio' class='genderp-female' name='gender'><span></span>Female</label><label for='genderp-none'><input type='radio' class='genderp-none' name='gender'><span></span>Rather Not Say</label></div></div>";
    for(i=0;i<adultNum;i++){
      document.getElementById('PassengerInfo').innerHTML += `<h4 class='plist'>Adult Passenger ${i+1}:</h4>`;
      document.getElementById('PassengerInfo').innerHTML += pName;
      document.getElementById('PassengerInfo').innerHTML += aAge;
      document.getElementById('PassengerInfo').innerHTML += pGender;
    }
    for(i=0;i<childNum;i++){
      document.getElementById('PassengerInfo').innerHTML += `<h4 class='plist'>Child Passenger ${i+1}:</h4>`;
      document.getElementById('PassengerInfo').innerHTML += pName;
      document.getElementById('PassengerInfo').innerHTML += cAge;
      document.getElementById('PassengerInfo').innerHTML += pGender;
    }
}

// Displays the User Input from Homepage Form
function displayInfo(origin, destination, depart, rdate, adultNum, childNum){
  if(rdate=="" || rdate == null){
    document.getElementById('travel-type').innerHTML = "One-Way";
  }
  else{
    document.getElementById('travel-type').innerHTML = "Return Trip";
    document.getElementById('arrivalp').innerHTML = `<h4>Arrival Date : ${rdate}</h4>`;
  }
  document.getElementById('originp').innerHTML = origin.toUpperCase();
  document.getElementById('destinationp').innerHTML = destination.toUpperCase();
  document.getElementById('departp').innerHTML = depart;
  document.getElementById('adultp').innerHTML = adultNum;
  document.getElementById('childp').innerHTML = childNum;
}

// Calculate and Print the Cost of the ticket
function ticketCost(){
  
}

// Display Ticket Details and Ticket Cost at the time of page load
window.addEventListener('load', () => {
  const params = (new URL(document.location)).searchParams;
  const origin = params.get('origin');
  const destination = params.get('destination');
  const depart = params.get('depart-date');
  const rdate = params.get('return-date');
  const adultNum = params.get('adults');
  const childNum = params.get('children');
  displayInfo(origin, destination, depart, rdate, adultNum, childNum);
  addElement(adultNum, childNum);
  ticketCost();
  document.getElementById('result-name').innerHTML = adultNum;
})


// Custom Validation to be activated at the time of Form Submit
form.addEventListener("submit", (e) => {
  if(!(validateCityList()&& validateTripType())){
    e.preventDefault();
  }
});

