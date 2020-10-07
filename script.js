

// instantiate a moment object
(function()
{
  // instantiate a moment object
  var NowMoment = moment();
  
  
  
  // display value of moment object in #displayMoment div
  var eDisplayMoment = document.getElementById("displayDate");
  eDisplayMoment.innerHTML = NowMoment;
 
  
})();   

// input
var timePlan = document.querySelector(".event col-9");
var text = document.querySelector(".lead");
var button = document.querySelector(".saveBtn");

button.addEventListener("click", function(){
     var plan = text.value;
     localStorage.setItem("text", plan );
     
})