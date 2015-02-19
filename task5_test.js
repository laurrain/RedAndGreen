
document.getElementById("mySquare").style.backgroundColor = "green";
if(document.getElementById("mySquare").style.backgroundColor === "green"){
	//document.getElementById("mySquare").style.backgroundColor = "green";
	alert("success is green");	 
}else{
	alert("Not green");
}
setBackgroundColor('mySquare', 'red'); 

	if(document.getElementById("mySquare").style.backgroundColor === "red"){
	//document.getElementById("mySquare").style.backgroundColor = "green";
	alert("success is red");	 
}else{
	alert("Not red");
}