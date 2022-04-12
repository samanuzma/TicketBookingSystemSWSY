// function validateToAndFrom() {
//     let originCity=document.getElementById("origin").value;
//     if(originCity=="" || originCity==null){
//       alert("Please Enter a city in 'To' field");
//       originCity.focus();
//       return false;
//     }
//     return true;
//   }

// Prints the Error message on the Form.
function printError(message){
  document.getElementById('error-message').innerHTML = `Error: ${message} <br>`;
}


// Validate that the Source and Destination cities is among the list of cities of Array and they are not the same
function validateCityList(){
  let originIndex = false;
  let destinationIndex = false;
  let cityList = ["sydney", "melbourne", "brisbane"];
  let originCity = document.getElementById('origin').value;
  originCity = originCity.toLowerCase();
  let destinationCity = document.getElementById('destination').value;
  destinationCity = destinationCity.toLowerCase();

  //check if the source city is same as destination city
  if(originCity == destinationCity){
    printError("Origin and Destination city cannot be same");
    return false;  
  }

  // Matching the source and destination input with the array of cities
  cityList.forEach((city)=>{
    if(city == originCity){
      originIndex = true;
    }
    if(city == destinationCity){
      destinationIndex = true;
    }
  });

  if(!(originIndex)){
    printError("No available flights from the chosen Origin location");
    return false;   
  }
  if(!(destinationIndex)){
    printError("No available flights to the chosen Destination location");
    return false;   
  }
  return true;
}


// Validate that the Trip Type is selected
function validateTripType() {
  let oneway  =  document.getElementById("oneway").value;
  let roundtrip =  document.getElementById ("roundtrip").value;
    if (oneway == false && roundtrip == false){
      printError("Please select your flight type");
      return false;  
    } 
  return true ;
} 
  
form.addEventListener("submit", (e) => {
  if(!(validateCityList()&& validateTripType())){
    e.preventDefault();
  }
});
