# Introduction to closures

## Learning Goals for this Unit:
* Define 'closure'
* Define 'scope chain'
* Understand practical use cases for closures

__*This lesson includes code-along activities, so fire up that console!__

Many coding languages have private methods and instance variables that allow the developer to control access to and hide sensitive information. Javascript has its own way of helping developers to keep information hidden.

Consider the following code:

```
function myPassword() {
  var password = 'safe,Password20';
}
```
```password``` is local to the function ```myPassword```. It's pretty safe in there because, remember, only ```myPassword``` has access to the password. But we can't really do anything with it. What if we want to check that a password that a user enters matches ```password```? If we return ```password```, it's not so secret anymore. Take a minute to copy the ```myPassword()``` function into your console and play around with it. Can you find a way to check to see if the password that a user enters is a match, without revealing ```password```?

## Closures
Maybe you set up a simple conditional statement, maybe you thought of somehting new, or maybe you're feeling a little lost. Wherever you are let's take a look at a really cool solution that Javascript offers to this problem: its called a __closure__.

A __closure__ is basically a function inside of a function.

```
function myPassword() {
  var password = 'safe,Password20';         ///// password is a local variable created by myPassword
  function guessPassword (userInput) {      /////guessPassword is a closure
      if ( userInput === password) {
        return true;
      } else {
        return false;
      }
    }
  return guessPassword
  }
  
  var checkPassword = myPassword()
  console.log(myPassword('maskParty'))  /// false
```

Notice that ```guessPassword``` is declared inside of the ```myPassword``` function - that is one reason that it is considered a closure. ```myPassword``` is the 'parent' of ```guessPassword``` and guess what - children inherit all methods and variables from their parents. So ```guessPassword``` has access to ```password```!!!

But can parents inherit from children? 

```
function myPassword() {
  var password = 'safe,Password20';
  function guessPassword (userInput) {
      if ( userInput === password) {
        return true;
      } else {
        return false;
      }
    }
  console.log(userInput)
  return guessPassword
  }
  
  console.log(myPassword()('maskParty'))
  
```

Try it. Copy and paste the ```myPassword``` funtion into your console and see if the parent function has access to ```userInput```, the parameter taken in by ```guessPassword```. 

If you are a parent, you already knew the answer to this question: no, parents do not inherit from their children. You should have an error that looks like this ```ReferenceError: userInput is not defined```. We refer to this as _scope chain_ and you're about to learn more about the cool things that it lets us do.

## Conclusion
Over the next couple of lessons you'll learn more about closures, scope chain, and practical use cases. 


