let getrandomcard = (a, b) => {
  a = Math.floor(a);
  b = Math.ceil(b);
  return Math.floor(Math.random() * (b - a + 1)) + a;
};
let take = document.getElementById("message-el");
let message_el = take.textContent;
let sumtake = document.getElementsByTagName("p")[2];
let sum_el = sumtake.textContent;
let cardtake = document.getElementsByTagName("p")[1];
let card_el = cardtake.textContent;
let player = { name: "Per", chips: 154 };
let playere1 = document.getElementById("player-el");
playere1.textContent = player.name + "  : $ " + player.chips;

let sum;
let cards = [];
let hasblackjack = false;

let startGame = () => {
  if (!hasblackjack) {
    let firstcard = getrandomcard(1, 10);
    let secondcard = getrandomcard(1, 10);
    cards = [firstcard, secondcard];
    sum = firstcard + secondcard;
    hasblackjack = true;
    let isalive = true;
    let message = "";
    rendergame();
  }
};

let rendergame = () => {
  if (sum < 20) {
    message = "do you want to draw a new card?";
  } else if (sum === 21) {
    message = "you have got blackjacked";
  } else {
    message = "you are out of the game ";
    isalive = false;
  }
  take.textContent = message;
  let againandagain = " ";
  for (let i = 0; i < cards.length; i++) {
    againandagain += cards[i] + " ";
  }
  againandagain = card_el + againandagain;
  cardtake.textContent = againandagain;
  sumtake.textContent = sum_el + " " + sum;
};

let newcard = () => {
  if (hasblackjack && sum <= 21) {
    let card = getrandomcard(1, 10);
    cards.push(card);
    sum += card;
    rendergame();
  }
};
