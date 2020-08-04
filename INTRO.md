# Introduction to closures

Many coding languages have private methods and instance variables that allow the developer to control access to and hide sensitive information. Javascript has its own way of helping developers to keep information hidden.

Consider the following code:

```
function myPassword() {
  var password = 'safe,Password20';
}
```
```password``` is local to the function ```myPassword```. It's pretty safe in there because, remember, only ```myPassword``` has access to the password. But we can't really do anything with it. What if we want to check that a password that a user enters matches ```password```? If we return ```password```, it's not so secret anymore. Take a minute to copy the ```myPassword()``` function into your console and play around with it. Can you find a way to check to see if the password that a user enters is a match, without revealing ```password```?

### Closures
Maybe you set up a simple conditional statement, maybe you thought of another way, or maybe you're feeling a little lost. Wherever you are let's take a look at a really cool solution that Javascript offers to this problem: its called a __closure__.

A __closure__ is basically a function inside of a function that offers added flexibilty.

```
function myPassword() {
  var password = 'safe,Password20';
  var guessPassword = function(userInput) {
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

