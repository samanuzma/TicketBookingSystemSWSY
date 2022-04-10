



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
  
function validateAll(){
    
    if(validateToAndFrom()){
      passengerNum();
      return true
    }
    else return false;
}
  


