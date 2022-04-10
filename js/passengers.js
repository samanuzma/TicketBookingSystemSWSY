


function addElement(adultNum, childNum) {
    var pName = "<div class='form-group grid-temp'><span class='form-label'>Name</span><input class='form-control p-name' type='text'></div>";
    var pAge = "<div class='form-group grid-temp'><span class='form-label'> Age </span><input class='form-control min='1' max='50' adultp-age childp-age' type='number'></div>";
    var pGender ="<div class='form-group grid-temp'><span class='form-label'>Gender</span><div class='form-gender-checkbox'><label for='genderp-male'><input type='radio' class='genderp-male' name='flight-type'><span></span> Male</label><label for='genderp-female'><input type='radio' class='genderp-female' name='flight-type'><span></span>Female</label><label for='genderp-none'><input type='radio' class='genderp-none' name='flight-type'><span></span>Rather Not Say</label></div></div>"

    // let adultNum=document.getElementById("adults").value;
    // let childNum=document.getElementById("children").value;

    for(i=0;i<adultNum;i++){
      document.getElementById('PassengerInfo').innerHTML += `<h4 class='plist'>Adult Passenger ${i+1}:</h4>`;
      document.getElementById('PassengerInfo').innerHTML += pName;
      document.getElementById('PassengerInfo').innerHTML += pAge;
      document.getElementById('PassengerInfo').innerHTML += pGender;
    }
    for(i=0;i<childNum;i++){
      document.getElementById('PassengerInfo').innerHTML += `<h4 class='plist'>Child Passenger ${i+1}:</h4>`;
      document.getElementById('PassengerInfo').innerHTML += pName;
      document.getElementById('PassengerInfo').innerHTML += pAge;
      document.getElementById('PassengerInfo').innerHTML += pGender;
    }
}

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

function ticketCost(){
  
}

window.addEventListener('load', () => {

  // Via Query parameters - GET
  const params = (new URL(document.location)).searchParams;
  const origin = params.get('origin');
  const destination = params.get('destination');
  const depart = params.get('depart-date');
  const rdate = params.get('return-date');
  const adultNum = params.get('adults');
  const childNum = params.get('children');
  displayInfo(origin, destination, depart, rdate, adultNum, childNum);
  addElement(adultNum, childNum);
  document.getElementById('result-name').innerHTML = adultNum;
  // const childName = params.get('children'); 
  
  // document.getElementById('result-name').innerHTML = name;
  // document.getElementById('result-surname').innerHTML = surname;

})


