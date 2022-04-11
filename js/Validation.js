function printError(message){
  document.getElementById('error-message').innerHTML = `Error: ${message} <br>`;
}

function validateCityList(){
  let originIndex = false;
  let destinationIndex = false;
  let cityList = ["sydney", "melbourne", "brisbane"];
  let originCity = document.getElementById('origin').value;
  originCity = originCity.toLowerCase();
  let destinationCity = document.getElementById('destination').value;
  destinationCity = destinationCity.toLowerCase();
  cityList.forEach((city)=>{
    if(city == originCity){
      originIndex = true;
    }
    if(city == destinationCity){
      destinationIndex = true;
    }
  });
  if(!(originIndex)){
    printError("No available flights from the chosen location");
    return false;   
  }
  if(!(destinationIndex)){
    printError("No available flights to the chosen location");
    return false;   
  }
  return true;
}



function validateToAndFrom() {
    let originCity=document.getElementById("origin").value;
    if(originCity=="" || originCity==null){
      alert("Please Enter a city in 'To' field");
      originCity.focus();
      return false;
    }
    return true;
  }

// function passengerNum()
//   {
//     pNum.adultNum=document.getElementById("adults").value;
//     pNum.childNum=document.getElementById("children").value;
//   }



// function validateAll(){
//   document.getElementById('error-message').innerHTML = "This is Error Message";
//   alert("hello");
//    document.getElementById('error-message').innerHTML = "No available flights from the chosen locations";
//     if(!validateCityList()){
//       return false;
//     }
// }
  
form.addEventListener("submit", (e) => {
 // e.preventDefault();
  validateCityList();
  validateToAndFrom();
  // alert("Error");
  // document.getElementById('error-message').innerHTML = "This is Error Message"; 
});
