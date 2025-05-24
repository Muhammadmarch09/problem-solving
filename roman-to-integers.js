// Problem 
// Convert Roman numarals to integers 
// Roman numarals are represented by seven different symbols. 
// Symbol      Value 
//   I    =    1
//   V    =    5
//   X    =    10 
//   L    =    50
//   C    =    100
//   D    =    500
//   M    =    1000


// For example , 2 is written as II in roman numaral just two ones added tother

// 12 is written as XII which is simply X+II. The number 27 is written as XXVII

// roman numaral are usually written largest to smallest from left to right .

// However the numaral for four is not IIII,Instead the number four is written as IV .

// Beacause the one is before the five we substrack it making four. The same principal

// applies to the number nine which is written as IX.

// There are six instances where substraction is useDebugValue.

// PseudoCode 

// FUNCTION getValue(character):
//     SWITCH character:
//         CASE "I": RETURN 1
//         CASE "V": RETURN 5
//         CASE "X": RETURN 10
//         CASE "L": RETURN 50
//         CASE "C": RETURN 100
//         CASE "D": RETURN 500
//         CASE "M": RETURN 1000
//         DEFAULT: RETURN 0

// FUNCTION romanToIntegers(inputString):
//     SET result TO 0

//     FOR i FROM 0 TO length of inputString - 1:
//         SET currentValue TO getValue(character at inputString[i])
//         SET nextValue TO getValue(character at inputString[i + 1])

//         IF currentValue >= nextValue OR i IS last index:
//             ADD currentValue TO result
//         ELSE:
//             SUBTRACT currentValue FROM result

//     RETURN result

// PRINT romanToIntegers("IV")


// Solution

function getValue(s) {
  switch (s) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return 0;
  }
}

function romanToIntegers(input) {
  let result = 0;
  for (let i = 0; i < input.length; i++) {
    let presentValue = getValue(input[i]);
    let nextValue = getValue(input[i + 1]);

    if (presentValue >= nextValue || i === input.length - 1) {
      result += presentValue;
    } else {
      result -= presentValue;
    }
  }
  return result;
}

console.log(romanToIntegers("IV")); 