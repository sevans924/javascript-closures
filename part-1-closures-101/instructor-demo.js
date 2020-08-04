
  /////closure

  let skin = 'outer' 

  function onion(){
      let layer1 = 'another layer'
    function insideOnion(){
        let layer2 = 'inside the onion'
        console.log(`Peel back the ${skin} layer, then the ${layer1}, then the ${layer1}, until you finally reach the ${layer2}`)
    }
    return insideOnion
  }

  console.log(onion()) ///[Function: insideOnion]
  console.log(onion()()) ///Peel back the outer layer, then another layer, then another layer, until you finally reach the inside the onion.
  
  
  let myOnion = onion()
  console.log(myOnion())
  
  /////////invoking closures
  let a = 0
  
  function layer1(arg1){
    let b = 1
    var layer2 = function (arg2){
      let c = 2
      function layer3(arg3){
        let d = 3
        console.log(a, b, c, d, arg1, arg2, arg3)
      }
      return layer3
    }
    return layer2
  }
  
  
  /*Each parentheses invokes a deeper layer of the function.
  What do you think will happen if you remove one of the parentheses
  layer1(10)(20)(30)
  */
  
  /*
  
  let cat = layer1(10)
  
  console.log(cat)///what will this value be?
  
  let dog = cat(20)
  
  console.log(dog) ///// what will this value be?
  
  let bird = dog(30)
  
  console.log(bird) //////// what will this value be?
  */
  
