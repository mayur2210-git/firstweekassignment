// Function to reverse a string
function reverseString(input) {
    let reversed = "";
    let chars = input.split("");

    // Loop in reverse direction
    for (let i = chars.length - 1; i >= 0; i--) {
        reversed += chars[i];
    }

    console.log("Reversed String:", reversed);
    return reversed;
}

// Function to check if a string is a palindrome
function isPalindrome(input) {
    let reversed = reverseString(input);

    // Compare original and reversed strings
    return input === reversed;
}

// Test cases
let testStrings = [
    "madam",
    "testleaf",
    "mayur",
    "hello",
    "nayan"
];

for (let str of testStrings) {
    console.log("\nOriginal String:", str);
    console.log("Is Palindrome?", isPalindrome(str));
}