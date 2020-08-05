
//Memory

function myCounter(){
    var counter = 0
    return function(num){
          counter += num
          return counter
      }
     
  }
  
  var value5 = myCounter()(5)
  var value7 = myCounter()(7)
  
  console.log(value5)
  console.log(value7)


//Privacy