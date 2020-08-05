///////Use below to demonstrate different ways to invoke a closure. What works and what doesn't? What do you think will happen here? How do we fix it?


//The following functions are broken and need to be fixed. Work on debugging so that each returns the phrase, 'Oh, hey there!'
//* check functions, variables, and invocations

function greeting() {
    var say = function() { console.log(something); }
    return say;
    var something = 'Oh, hey there!';
   
  }
  var sayHey = greeting(); 
  sayHey();
  
  /////////////////////////////////////////////////////////////////

  function greeting1() {
    function say() {  
        console.log(something); 
    }
    var something = 'Oh, hey there!';
    return say;
  }
  var sayHey1 = greeting1(); 

  ////////////////////////////////////////////////////////////////


  function greeting2() {
    return function say() { 
        console.log(something); 
    }
    var something = 'Oh, hey there!';
  }
  var sayHey2 = greeting2(); 
  sayHey2(); 


  ////////////////////////////////////////////////////////////////
  
  function sayHeyThere3() {
    var something = 'Oh, hey there!';
    var say = function() { console.log(something); }
    return say
  }
  
  sayHey3()
  
////////////////////////////////////////////////////////////////

  function greeting4() {
    var something = 'Oh, hey there!';
    function say() { 
      let bye = 'bye now'
      console.log(something);
       } 
       console.log(bye)
       return say  
  }
  greeting4()(); 

////////////////////////////////////////////////////////////////

//1. Once you finish debugging above, uncomment  myFunction below. 
//2. Declare a variable in the local scope of myFunction and give it a value.
//3. Create a closure that uses the variable that you just declared (you chose how to use it).
//4. Declare a global variable and incorporate it into your closure.
//5. Invoke myFunction and make sure that it is returning the value that you expected. If not, debug and try again!

// function myFunction(){

// }
