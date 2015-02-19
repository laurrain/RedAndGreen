function RedOrGreen(element){
	//this.element = element;

this.makeGreen = function(){
	document.getElementById(element).style.backgroundColor = "green";
};
 this.makeRed = function(){
		document.getElementById(element).style.backgroundColor = "red";
   };
}




// Define a class like this
//function Person(name, gender){

   // Add object properties like this
   //this.name = name;
   ///this.gender = gender;
//}

// Add methods like this.  All Person objects will be able to invoke this
//Person.prototype.speak = function(){
   // alert("Howdy, my name is" + this.name);
//};

// Instantiate new objects with 'new'
//var person = new Person("Bob", "M");

// Invoke methods like this
//person.speak(); 