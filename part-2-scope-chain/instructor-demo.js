let x = 1

function myFunc(){
  var x = 2
  function apple(){
    var x = 3
    console.log(x, 'hi')
  }
    console.log(x, 'hi2')

  return apple
}

console.log(x, 'hi3')

console.log(myFunc()())


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
