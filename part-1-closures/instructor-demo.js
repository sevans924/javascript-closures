
  
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

  ///////Extension
  //Is the function below a closure? Discuss.

  function amIClosure () {
      let x = 'I am not used by the inner function'
      return function amIClosure(){
          console.log('Am I a closure if I do not reference my surrounding state?')
      }
  }
  
  