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


function giveChange(amountReceived) {
  let totalDrawer = parseFloat(cid.map(sublist => sublist[1]).reduce((acc, value) => acc + value, 0).toFixed(2));
  console.log(totalDrawer);
  console.log(amountReceived - price);
  if (totalDrawer < amountReceived - price) {
    console.log("yessss");
    changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
  } else if (totalDrawer === amountReceived - price) {
    console.log("ooooohh")
  }
}

const totalAmount = document.getElementById("total-amount");
const changeDue = document.getElementById("change-due");
const changeDrawer = document.getElementById("change-drawer");
const purchaseButton = document.getElementById("purchase-btn");
const cash = document.getElementById("cash");

totalAmount.textContent =  `Total to Pay: $${price}`;

changeDrawer.innerHTML = `<p><strong>Change in drawer:</strong></p>
${cid.map(money => `<p>${changeName[money[0]]}:$${money[1]}</p>`).join('')}`

purchaseButton.addEventListener('click', () => {
  if (Number(cash.value) < price){
      alert("Customer does not have enough money to purchase the item");
  } else if (Number(cash.value) === price) {
      console.log("yesss");
      changeDue.textContent = " No change due - customer paid with exact cash";
  } else {
      giveChange(Number(cash.value));
  }

  cash.value = "";
})