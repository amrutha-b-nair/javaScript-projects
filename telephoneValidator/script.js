// let number = document.getElementById("user-input");
// let checkButton = document.getElementById("check-btn");
// let clearButton = document.getElementById("clear-btn");
// let result = document.getElementById("results-div");

function validate(num) {
    const regex = /(1\s?)?(\(\d{3}\)|\d{3})[/s-]?\d{3}[/s-]?\d{4}/;
    console.log(num.match(regex));
    return regex.test(num);
}

// checkButton.addEventListener('click', () => {
//     if (number.value === ""){
//         alert("Please provide a phone number");
//     } else if (validate(number.value)) {
//         result.textContent = `Valid US number: ${number.value}`;
//     } else {
//         result.textContent = `Invalid US number: ${number.value}`;
//     }
//     number.value = "";
// })

// clearButton.addEventListener('click',() => {
//     result.textContent = "";
// })

console.log(validate("1 (555) 555-5555"));