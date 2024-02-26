let price = 19.5;
let cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];

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

function calculateChange(amountReceived, status) {
  let denominations = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  let changeDue = Number(amountReceived) - price;
  let changeToGive = [];
  let reverseCid = [...cid].reverse();
  let len = reverseCid.length;
  for (let i = 0; i < len; i++) {
    let count = 0;
    let totalDenomination = Number(reverseCid[i][1]);
    while (changeDue >= denominations[i] && totalDenomination > 0) {
      changeDue = (changeDue - Number(denominations[i])).toFixed(2);
      count++;
      totalDenomination -= denominations[i];
      console.log(count);
      console.log(changeDue)
    }
    if (count > 0) {
      changeToGive.push([reverseCid[i][0], Number(denominations[i])*count]);
      cid[len-i-1][1] -= Number(denominations[i])*count;
      count = 0;
    }
  }
  displayDue(status, changeToGive);
  displayDrawer(cid);
}

function displayDue(status, change) {
  displayChangeDue.innerHTML = `Status: ${status} 
    ${change.map(money => `<p>${money[0]}: $${money[1]}</p>`).join('')}`;
}

function gettotalDrawer(dueAmount) {
  let totalAmountDrawer = 0;
  let denominations = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  for (let i = 0; i < cid.length; i++) {
    console.log(cid[i][1])
    if (dueAmount >= denominations[i]) {
      totalAmountDrawer += Number(cid[cid.length-i-1][1]);
      console.log("$$$",totalAmountDrawer)
    }
  }
  return totalAmountDrawer;
}

function giveChange(amountReceived) {
  let dueAmount = Number(amountReceived - price);
  let totalDrawer = gettotalDrawer(dueAmount);
  console.log(totalDrawer, dueAmount)
  if (totalDrawer < dueAmount) {
    displayChangeDue.innerHTML = "Status: INSUFFICIENT_FUNDS";
  } else if (totalDrawer === Number(dueAmount.toFixed(2))) {
    calculateChange(amountReceived, "CLOSED");
  } else {
    calculateChange(amountReceived, "OPEN");
  }
}

totalAmount.textContent =  `Total to Pay: $${price}`;

displayDrawer(cid)

purchaseButton.addEventListener('click', () => {
  if (Number(cash.value) < price){
      alert("Customer does not have enough money to purchase the item");
  } else if (Number(cash.value) === price) {
      displayChangeDue.textContent = " No change due - customer paid with exact cash";
  } else {
      giveChange(Number(cash.value));
  }

  cash.value = "";
})