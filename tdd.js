var passed = 0;
var failed = 0;
var total = 0;

var assert = {
	equals:function(expectedResult, returnResult){

		var myDiv = new RedOrGreen("div");
		if(expectedResult === returnResult){
			myDiv.makeGreen();
			passed++;
		var newElement = document.createElement("p");
		newElement.innerHTML = "passed:" + passed + ' ' + "failed:" + failed + ' ' + "total:" + total;
		}else{

			myDiv.makeRed();
			failed++;
		var newElement = document.createElement("p");
		newElement.innerHTML = "passed:" + passed + "failed:" + failed + "total passed:" + total;	
		}
		total = passed + failed;
		document.body.appendChild(newElement);
		
		
   }
}

var TestMyCode = {
      run:function(testfunction, functionToReturn){
      	
      	 functionToReturn(assert);
      	
      }
}



