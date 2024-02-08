let textInput = document.getElementById("text-input");
console.log('$$$$$$'+textInput.value)
function isPalindrome(str) {
    let cleanString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = cleanString.length - 1;
    console.log('########'+str);
    while(left < right) {
        if (cleanString[left] != cleanString[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}


isPalindrome(textInput.value);
console.log(isPalindrome('na--ba'));
console.log(textInput.value)