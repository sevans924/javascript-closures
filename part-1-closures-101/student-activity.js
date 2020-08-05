///////Use below to demonstrate different ways to invoke a closure. What works and what doesn't? What do you think will happen here? How do we fix it?

//////define function as a variable, return it after variable is declared.
////Note that it has access to the local variable even though it hasn't been passed in as an argument
function sayHello() {
    var say = function() { console.log(hello); }
    // Local variable that ends up within the closure 
    var hello = 'Hello, world!';
    return say;
  }
  var sayHelloClosure = sayHello(); 
  sayHelloClosure(); // ‘Hello, world!’
  
  /////////////define function and then return it after variable has been declare
  function sayHello1() {
    function say() {     console.log(hello); }
    // Local variable that ends up within the closure 
    var hello = 'Hello, world!';
    return say;
  }
  var sayHelloClosure1 = sayHello1(); 
  sayHelloClosure1(); // ‘Hello, world!’
  
  //////return closure before var is declared
  function sayHello2() {
    return function say() { console.log(hello); }
    // Local variable that ends up within the closure 
    var hello = 'Hello, world!';
    
  }
  var sayHelloClosure2 = sayHello2(); 
  sayHelloClosure2(); // undefined
  
  /////declared function
  function sayHello3() {
     // Local variable that ends up within the closure 
    var hello = 'Hello, world!';
    return function say() { console.log(hello); }
    
  }
  var sayHelloClosure3 = sayHello3(); 
  sayHelloClosure3(); // 'Hello, world!'
  
  
  /////anonymour function
  function sayHello4() {
     // Local variable that ends up within the closure 
    var hello = 'Hello, world!';
    return function() { 
      let bye = 'bye'
      console.log(hello);
       }
  }
  var sayHelloClosure4 = sayHello4(); 
  sayHelloClosure4(); // 'Hello, world!'
  
  ////outter function doesnt have access to closure's scope - cant console.log bye
  // function sayHello5() {
  //   function say() { 
  //   let bye = 'bye'
  //     console.log(hello); 
  //     }
  //   // Local variable that ends up within the closure 
  //   var hello = 'Hello, world!';
  //   console.log(bye)
  //   return say;
  // }
  // var sayHelloClosure5 = sayHello5(); 
  // sayHelloClosure5(); // ReferenceError
