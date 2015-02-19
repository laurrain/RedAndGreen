
    document.getElementsByTagName("div")[0].style.backgroundColor = "green"; 

    document.getElementsByTagName("button")[0].addEventListener("click", function(){ 
    if(document.getElementsByTagName("div")[0].style.backgroundColor === "green"){
        document.getElementsByTagName("div")[0].style.backgroundColor = "red";
        document.getElementsByTagName("button")[0].innerHTML = "Make green";
    }
    else if(document.getElementsByTagName("div")[0].style.backgroundColor === "red"){
        document.getElementsByTagName("div")[0].style.backgroundColor = "green";
        document.getElementsByTagName("button")[0].innerHTML = "Make red";
        //document.getElementById("text").innerHTML = "Make red";
        
    }
}
    


     
   
  