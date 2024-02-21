let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

let changeName = {
    "PENNY": "Pennies",
    "NICKEL": "Nickles",
    "DIME": "Dimes",
    "QUARTER": "Quarters",
    "ONE": "Ones",
    "FIVE": "Fives",
    "TEN": "Tens",
    "TWENTY": "Twenties",
    "ONE HUNDRED": "One Hundreds"
}


const totalAmount = document.getElementById("total-amount");
const changeDue = document.getElementById("change-due");
const changeDrawer = document.getElementById("change-drawer");

totalAmount.textContent =  `Total to Pay: $${price}`;

changeDrawer.innerHTML = `<p><strong>Change in drawer:</strong></p>
${cid.map(money => `<p>${changeName[money[0]]}:$${money[1]}</p>`).join('')}`

// let cash = documet.getElementByID()