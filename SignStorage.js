        
        function myFunction() {
			var a = document.getElementById("myName").value;
            var b = document.getElementById("myEmail").value;
            var c = document.getElementById("myUser").value;
            var d = document.getElementById("myPW").value;
            var e = document.getElementById("myPWTwo").value;
            var f = document.getElementById("mySsn").value;
     		
            var aa;
            var bb;
            var cc;
            var dd;
            var ee;
            var ff;
            
            
if ( a != "" && b != "" && c != "" && d != "" && e == d && f != ""){
alert("Account Created! We will be VERY responsible with most your information. Welcome To SCÁM, " + a + "!");

document.getElementById("TransitionPage").href = "index.html#home";
localStorage.setItem("savedName", a);
localStorage.setItem("savedEmail", b);
localStorage.setItem("savedUser", c);
localStorage.setItem("savedPW", d);
localStorage.setItem("savedSSN", f);
		}
     
     
     
     else {
     
if ( a == "") {
		aa = "Please include your name.\n";
}

if ( a != "") {
		aa = "";
}

if ( b == "") {
		bb = "Please include your email.\n";
}

if ( b != "") {
		bb = "";
}

if ( c == "") {
		cc = "Please include a Username.\n";
}

if ( c != "") {
		cc = "";
}

if ( d == "") {
		dd = "Please type in a password.\n";
}

if ( d != "") {
		dd = "";
}

if ( e != d) {
		ee = "Please retype your verified password.\n";
}

if ( e == d) {
		ee = "";
}


if ( f == "") {
		ff = "Please include your Social Security Number.\n";
}

if ( f != "") {
		ff = "";
}


alert( aa  + bb  + cc  + dd  + ee  + ff );

}
}         
       

       function LoggingFunction() {
       
       var x = localStorage.getItem("savedUser");
       var y = localStorage.getItem("savedPW");
       
       var InputX = document.getElementById("myUserName").value;
       var InputY = document.getElementById("myPassword").value;
       
	       
       if (InputX == x && InputY == y)
       {
       alert("Welcome, " + localStorage.getItem("savedName"));
       
       }
       
       else if (InputX == x && InputY != y)
       {
       alert("Invalid password");
       }
	
	else if (InputX == "" || InputY == "")
	{
	alert("Please fill out the entire info.");
	}
       
       else {
       alert("Sorry, we don't recognize you.");
       }
       }
       }
        
