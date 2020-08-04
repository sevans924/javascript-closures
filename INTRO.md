# Introduction to closures

Many coding languages have private methods and instance variables that allow the developer to control access to and hide sensitive information. Javascript has its own way of helping developers to keep information hidden - one is called a closure.

Consider the following code:

```{r}

function myPassword() {

  var password = 'xh38sk';
 
}

```
password is local to the function myPassword. It's pretty safe in there because, remember, only myPassword has access to the password. But what if we want to check that a password that a user enters matches the password? If we return password, it's not so secret anymore.