# Scope 
  - its a context where variables and functions are declared , and we can access them
  - eg: global scope , function scope , block , lexical ....

# initialization vs declration
 var a // declartion
 a = 5 // initilisation  

# var v/s let v/s const
  
  var
  - scope : function scoped
  - hoisting : YES, it hoisted
  - re-declaration (SAME SCOPE) : YES
  - re-assignment : YES
  - Global Object binding : YES
  - Initialization Required : NO

  let
  - scope : block scope
  - hoisting : YES | it stayed in TDZ
  - re-declaration : Not allowed , will throw Syntax error
  - re-assignment : YES
  - Global Object binding : NO
  - Initialization Required : NO

  const
  - scope : block scope
  - hoisting : YES | it stayed in TDZ
  - re-declaration : Not allowed , will throw Syntax error
  - re-assignment : NO , TypeError: Assignment to constant variable.
  - Global Object binding : NO
  - Initialization Required : YES


    