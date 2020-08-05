
//create diagram demonstrating scope chain

let a = 'I am global'

function soManyVariables(arg1){
    let c = 23
    let bubble1 = function(arg2){
        let dog = 'I belong to level1'
        function bubble2(parameter){
            let x = 137
            let bubble3 = function(param1){
                let message = 'I really need to work on naming my variables'
            }
            return bubble3
        }
        return bubble2
    }
return bubble1
}


let b = 'I am also global'