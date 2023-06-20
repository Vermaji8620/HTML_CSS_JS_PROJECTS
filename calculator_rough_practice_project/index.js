let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let ans;
let take = document.getElementById("sum-el");
let savinginitialstring = take.textContent;

let add = () => {
  ans = num1 + num2;
  callit();
};
let sub = () => {
  ans = num1 - num2;
  callit();
};
let div = () => {
  ans = num1 / num2;
  callit();
};
let mul = () => {
  ans = num1 * num2;
  callit();
};

let callit = () => {
  take.textContent = savinginitialstring + ans;
};
