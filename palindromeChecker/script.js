let textInput = document.getElementById("text-input");
let checkButton = document.getElementById("check-btn");
let result = document.getElementById("result");



function isPalindrome(str) {
    let cleanString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = cleanString.length - 1;
    while(left < right) {
        if (cleanString[left] != cleanString[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}


checkButton.addEventListener('click', function(event){
    event.preventDefault();
    if (textInput.value === '') {
        alert("Please input a value");
    } else {
        if (isPalindrome(textInput.value)) {
            result.textContent = `${textInput.value} is a Palindrome`;
        } else {
            result.textContent = `${textInput.value} is not a Palindrome`;
        }
        textInput.value = '';
    }
});