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

const totalAmount = document.getElementByID("total-amount");
const changeDue = document.getElementByID("change-due");
const changeDrawer = document.getElementByID("change-drawer");

totalAmount.textContent =  `Total to Pay: $ ${price}`;

let cash = documet.getElementByID()