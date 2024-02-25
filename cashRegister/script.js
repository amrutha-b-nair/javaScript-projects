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
};

const totalAmount = document.getElementById("total-amount");
const displayChangeDue = document.getElementById("change-due");
const changeDrawer = document.getElementById("change-drawer");
const purchaseButton = document.getElementById("purchase-btn");
const cash = document.getElementById("cash");


function displayDrawer() {
  changeDrawer.innerHTML = `<p><strong>Change in drawer:</strong></p>
${cid.map(money => `<p>${changeName[money[0]]}:$${money[1]}</p>`).join('')}`
}

function calculateChange(amountReceived) {
  let denominations = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  let changeDue = Number(amountReceived) - price;
  let changeToGive = [];
  let reverseCid = [...cid].reverse();
  let len = reverseCid.length;
  for (let i = 0; i < len; i++) {
    console.log(i);
    let count = 0;
    while (changeDue > denominations[i] && cid[len- i - 1][1] > 0) {
      console.log(changeDue, count);
      changeDue -= Number(denominations[i]);
      count++;
      cid[len-i-1][1] -= Number(cid[len-i-1][1])
    }
    changeToGive.push([reverseCid[i][0], Number(cid[i][1])*count]);
    count = 0;
  }
  displayDue("OPEN", changeToGive);
  displayDrawer(cid);
}

function displayDue(status, change) {
  displayChangeDue.innerHTML = `Status: ${status} 
    ${change.map(money => `<p>${money[0]}:$${money[1]}</p>`).join('')}`;
}

function giveChange(amountReceived) {
  let totalDrawer = Number(parseFloat(cid.map(sublist => sublist[1]).reduce((acc, value) => acc + value, 0).toFixed(2)));
  // console.log(totalDrawer);
  // console.log((amountReceived - price).toFixed(2));

  if (totalDrawer < amountReceived - price) {
    displayChangeDue.innerHTML = "Status: INSUFFICIENT_FUNDS";
  } else if (totalDrawer === Number((amountReceived - price).toFixed(2))) {
    displayDue("CLOSED", cid);
    // update cid to 0...0
  } else {
    calculateChange(amountReceived);
  }
}

totalAmount.textContent =  `Total to Pay: $${price}`;

displayDrawer(cid)

purchaseButton.addEventListener('click', () => {
  if (Number(cash.value) < price){
      alert("Customer does not have enough money to purchase the item");
  } else if (Number(cash.value) === price) {
      console.log("yesss");
      displayChangeDue.textContent = " No change due - customer paid with exact cash";
  } else {
      giveChange(Number(cash.value));
  }

  cash.value = "";
})