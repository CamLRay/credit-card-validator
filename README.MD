////////Specs

Double every other digit starting from right to left.
Add double digits together

Add all numbers to have a sum ending in a 0
Needs to validate accredited company 

Needs to validate number length number = 16

identify which card brand it is

output if the card is valid or not

///Tests////

Describe CreditCardValidator()

Test: It turn a string into numbers in an array
Code:
number = "4204 0707 8046 5320"
creditCardValidator(number);
Expected Output: [4,2,0,4,0,7,0,7,8,0,4,6,5,3,2,0]

Test: It turns multiplies every other number by 2 descending from the final index
code:
number = "4204 0707 8046 5320"
creditCardValidator(number);
Expected Output:[4,4,0,8,0,14,0,14,8,0,4,12,5,6,2,0]