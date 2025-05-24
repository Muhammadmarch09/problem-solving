// Problem 
// Given an integer x return true if x is palindrome and otherwise false 

// What is palindrome number ?

// A palindrome number is a number thats remain the same when its digits are reversed .

// Pseudocode :

// function (number) :

//         original-number   = number 
//         reversed-number   = number(reverse)


//     IF original-number  == reversed-number THEN 

//         DISPLAY   "True"

//     ELSE 

//         DISPLAY   "False"


// solution

            function isPalindrome(number){
                let originalNumber = number
                let reversedNumber = parseInt(number.toString().split('').reverse().join(''))

                if(originalNumber == reversedNumber){
                    return true
                }else{
                    return false
                }

            }

console.log(isPalindrome(121))
console.log(isPalindrome(334))