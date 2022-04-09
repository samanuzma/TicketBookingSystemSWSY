

let validate = true;


function AddElement() {
  document.getElementById('second-block').style.cssText = 'display:block';
  if(validate == true){
  var pName = "<div class='form-group grid-temp'><span class='form-label'>Name</span><input class='form-control p-name' type='text'></div>";
  var pAge = "<div class='form-group grid-temp'><span class='form-label'> Age </span><input class='form-control adultp-age childp-age' type='number'></div>";
  var pGender ="<div class='form-group grid-temp'><span class='form-label'>Gender</span><div class='form-gender-checkbox'><label for='genderp-male'><input type='radio' class='genderp-male' name='flight-type'><span></span> Male</label><label for='genderp-female'><input type='radio' class='genderp-female' name='flight-type'><span></span>Female</label><label for='genderp-none'><input type='radio' class='genderp-none' name='flight-type'><span></span>Rather Not Say</label></div></div>"

  let adultNum=document.getElementById("adults").value;
  let childNum=document.getElementById("children").value;

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
  validate =false;
}
}

function viewElement() {
  document.getElementById('second-block').style.cssText = 'visibility: visible';
}