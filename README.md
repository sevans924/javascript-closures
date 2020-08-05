# javascript-closures
Skills Assessment for 2U: Included in this repository is a lesson plan and activities on the topic of 'Closures in Javascript'.

### Defining Terms and Assumptions

__Stoking Curiosity:__
* ‘The Hook’
 * a tool used to engage students in a concept 
* Encourage students to draw connections between the concept and their own experience, other coding concepts, or the world

__Real World Problem:__
* Applying skills to a scenario that a student might find while working as a developer or a scenario in which the concept may be applied to the student’s own personal projects

__Prior knowledge of students:__
* Online learning
* Access to other students via slack, etc.
* Asynchronous learning - concepts are introduced in recorded lectures that students can either attend, or watch later, activities are done at student’s pace
* Students have covered basic data types and know how to declare a function
* Students have encountered vocbulary associated with functions and different types of functions (function expression, anonymous function, arrow function, IIFE, etc.) but may not have yet mastered them
* Students are familiar with basic scope and hoisting


## Overview


## Objectives

### Students will be able to...
* define 'closure' in JavaScript in their own words
* define scope chain in their own words
* describe practical use cases for closures

## Introduction

## Instructor Demo 1: Closures
### Key terms and points
* Define the term 'closure'
* Demonstrate how to invoke a closure
* 'Function-level scope'
* Closures have access to variables and parameters that belong to all parent functions.

### Notes
* The instructor-demo file contains a function called, 'onion'. Ask students to predict what will happen when you console.log(onion()). Discuss predictions, invoke the function, discuss the outcome ([Function: insideOnion]).
* Tell students that insideOnion() is a closure, and that they will be able to define this term in their own words by the end of the lesson.
* Ask students how they can access the function insideOnion(). If students aren't sure, guide them towards onion()().  _(extension: Demonstrate other ways to invoke a closure.)_
* Once the closure has been invoked, ask them to notice what was logged. What does this tell them about closures and scope? What do they have access to? _Closures have access to variables and parameters that belong to all parent functions._
* Ask students to summarize what they know about closures so far.
  + a closure is a function inside of a parent function
  + several ways to invoke a closure
  + closures have access to variables and parameters that belong to all parent functions.


## Student Activity 1: Closures
* Students will debug functions and invocations in order to demonstrate key points.
* Students will write their own function that includes a closure.
## Review 1: Closures
* Allow students the opportunity to ask questions about their activity and/or share what they discovered
* The review file contains an empty function called ```onion```. Have students take turns declaring global and local variables, creating a closure, and invoking the closure using ```onion```. Encourage them to try multiple solutions. _i.e. How does the code change when the closure is an anonymous function?_
* Extension 1: Look at the function in instructor-demo.js - ask students to discuss whether or not the inner function is a closure, since it doesn't reference any variables in its lexical environment.
* Extension 2: Guide students through creating multiple closures, or in this case, multiple layers of the onion. 
## Instructor Demo 2: Scope Chain

### Key terms and points
* Define 'scope chain'
* Closures inherit variables and parameters from their parent functions
* Clusures have access to global variables
* Parents do not inherit from children

### Notes
* Ask students to summarize what they've learned so far about closures. Tell them that they will be learning about scope and inheritance in this lesson.
* ```equalsTen``` in instructor-demo.js demonstrates scope chain in simple terms. Invoke the function and ask students what they notice about how variables are passed down to the inner-most function. Define scope chain.
* ```myFunc``` demonstrates that closures also have access to global variables. Ask students to predict what will happen when the code runs. Then, change ```c``` and ```d``` to ```x``` to demonstrate how x is defined, depending on where the console.log is located.
* Explain that the function ```layer1``` demonstrates how arguments are also passed down through scope chain. Ask students to count how many closures they see. Ask them to either draw or write down which variables they believe ```layer1```, ```layer2```, ```layer3``` have access to. 
* Ask them how they would invoke ```layer1```. Experiment with taking invoking parentheses away to see what happens.
* Ask students if they think the closure in ```level1``` has access to ```e```. Discuss why it does have access to it, even though ```e``` is declared after ```level3```.
* Ask students to define scope chain.
* Summarize key points.

## Student Activity 2: Scope Chain
* students will practice creating closures and variables to demonstrate scope chain.
## Review 2: Scope Chain
* Students should complete the review activity independently or in pairs.
* Allow students the opportunity to ask questions about their student activity and review activity. They should share what they discovered.
* Ask students to define scope chain in their own words
* Ask students to explain how scope chain relates to closures
## Instructor Demo 3: Practical Use Cases for Closures

### Key terms and points
* Define 'Lexical Environment'
* Closures allow us to create multiple lexical environments that hold different values for local variables.
* 

###Notes
* Walk students through the myCounter() function in instructor-demo.js. Define 'Lexical Environment' and demonstrate that each time the outer function is called, it creates a separate lexical environment. So even though we are calling the same function, it is creating a new environment that may hold a different value.
* Ask students to brainstorm how this might be valuable based on what they know so far. _i.e. storing data that can only be altered with certain methods_
*

Privacy and memory
## Student Activity 3: Practical Use Cases for Closures
* If possible, ask students to work on this activity in pairs.

## Review 3: Practical Use Cases for Closures

## References
* [Closures - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
* [Learn JavaScript Closures with Code Examples
](https://www.freecodecamp.org/news/lets-learn-javascript-closures-66feb44f6a44/)
* [Private Members in JavaScript
](https://www.crockford.com/javascript/private.html)




