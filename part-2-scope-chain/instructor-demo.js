let r = 1

function equalsTen(){
  let s = 2
  function addNums1(){
    let t = 3
    function addNums2(){
      let u = 4
      return (r + s + t + u)
    }
    return addNums2
  }
  return addNums1
}

//equalsTen()()()





//////////////////////
let x = 1

function myFunc(){
  var c = 2
  function innerFunc(){
    var d = 3
    console.log(x, 'hi')
  }
    console.log(x, 'hi2')

  return innerFunc
}

console.log(x, 'hi3')

console.log(myFunc()())

//////////////////////////////////////////////


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

///////////////////////////////////////////////////

let a = 0

function level1(arg1){
  let b = 1
  var level2 = function (arg2){
    let c = 2
    function level3(arg3){
      let d = 3
      console.log(a, b, c, d, arg1, arg2, arg3, e)
    }
    let e = 200
    return level3
  }
  return level2
}

level1(10)(20)(30)
