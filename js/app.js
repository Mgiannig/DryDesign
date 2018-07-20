document.addEventListener("DOMContentLoaded", function() {
 
  
    
  });

  


function addElementJsBox() {

  var newLi = document.createElement("li");
  var newA = document.createElement("a");

  let boxes = document.getElementById("main-nav").getElementsByTagName("ul")[0];

  boxes.appendChild(newLi);
  newLi.appendChild(newA)

  newA.innerHTML = "added!";

}

