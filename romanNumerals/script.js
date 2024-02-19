let number = document.getElementById("number");
let convertButton = document.getElementById("convert-btn");
let output = document.getElementById("output");

function convertNumber(num) {
    const romanNumeralMap = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I" ]];
    
    let roman = '';
    
    for (let i=0; i < romanNumeralMap.length; i++){
        while (num >= romanNumeralMap[i][0]) {
            console.log(romanNumeralMap[i])
            roman += romanNumeralMap[i][1];
            num -= romanNumeralMap[i][0];

        }
    }
    return roman;
}


convertButton.addEventListener('click', function(){
    if (number.value === ''){
        output.textContent = "Please enter a valid number";
    }else if (number.value < 1){
        output.textContent = "Please enter a number greater than or equal to 1";
    }else if (number.value > 3999){
        output.textContent = "Please enter a number less than or equal to 3999";
    } else {
        output.textContent = convertNumber(number.value);
    }
})