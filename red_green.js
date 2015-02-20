

function RedOrGreen(element){
	var newElement = document.createElement(element);
this.makeGreen = function(){
	newElement.style.backgroundColor = "green";
	newElement.innerHTML = "passed!"
};
 this.makeRed = function(){
    newElement.style.backgroundColor = "red";
	newElement.innerHTML = "failed!";
   };
   document.body.appendChild(newElement);
}



