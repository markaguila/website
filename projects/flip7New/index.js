const message = 'Hello world' // Try edit me

function createDeck() {
  const deck = ["x2", "+2", "+4", "+6", "+8", "+10"];
  for (let i = 0; i < 3; i++) {
    deck.push("Freeze");
    deck.push("Flip 3");
    deck.push("2nd Chance");
  }
  deck.push(0);
  for (let cardValue = 1; cardValue <= 12; cardValue++) {
    for (let i = 1; i <= cardValue; i++) {
      deck.push(cardValue);
    }
  }
  return deck;
}

function cardCount(card, deck) {
  let count = 0;
  for (let i = 0; i < deck.length; i++) {
    if (deck[i] === card) {
      count++;
    }
  }
  return count;
}

function bustCount(hand, deck) {
  let count = 0;
  bustHand = hand.filter(item => typeof item === "number");
  for (let i = 0; i < bustHand.length; i++) {
      count += cardCount(bustHand[i], deck);
  }
  return count;
}

function bustProbability(hand, deck) {
  return bustCount(hand, deck) / deck.length;
}

function bustChanceOne(hand, deck) {
    bustCards = bustCount(hand, deck);
    totalCards = deck.length;
    return 100 * bustCards / totalCards;
}

function fact(n) {
    if (n <= 1) {
        return n;
    }
    return n * fact(n - 1);
}

function removeCardfromDeck(card, deck) {
    deck.splice(deck.indexOf(card), 1);
    return deck;
}

function roundToDecimalPlaces(number, decimalPlaces) {
  const multiplier = Math.pow(10, decimalPlaces);
  return Math.round(number * multiplier) / multiplier;
}

function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}

let myHand = [];
let notMyHand = [];
let d = createDeck();
let h = [];



function addCardToHand(card) {
  const checkbox = document.getElementById("player");
  const result = checkbox.checked ? checkbox.value : "Not checked";

  if (d.includes(card)) {

    if (result === "Not checked") {
      notMyHand.push(card);
      d = removeCardfromDeck(card, d);
      h.push(card);
      let p = bustProbability(notMyHand, d);
      let percent = roundToDecimalPlaces(p * 100, 1);
      let bustDisplay = "Bust chance: " + percent + "%";
      if (hasDuplicates(notMyHand)) {
        bustDisplay = "Busted!";
      }
      document.getElementById("odds2").innerText = bustDisplay;
    } else {
      myHand.push(card);
      d = removeCardfromDeck(card, d);
      h.push(card)
    }  
    let handDisplay = "Hand:" + myHand;
    document.getElementById("output").innerText=handDisplay;
    let notMyHandDisplay = "Not my hand:" + notMyHand;
    document.getElementById("output").innerText=handDisplay;
    document.getElementById("deck").innerText=notMyHandDisplay;    


    let p = bustProbability(myHand, d);
    let percent = roundToDecimalPlaces(p * 100, 1);
    let bustDisplay = "Bust chance: " + percent + "%";
    if (hasDuplicates(myHand)) {
      bustDisplay = "Busted!";
    }
    document.getElementById("odds").innerText = bustDisplay;

  } else {
    document.getElementById("logs").innerText = card + " not in deck!";
  }
  document.getElementById("bust").innerText="LIVE DECK:" + d;
  document.getElementById("history").innerText="History:" + h;
  const mySum = myHand.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  //document.getElementById("output").innerText = document.getElementById("output").innerText + "(" + mySum + ")";
  const notMySum = notMyHand.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  //document.getElementById("deck").innerText = document.getElementById("deck").innerText + "(" + notMySum + ")";

}

function resetHands() {
  myHand = [];
  notMyHand = [];
  let handDisplay = "Hand:" + myHand;
  let notMyHandDisplay = "Not my hand:" + notMyHand;
  document.getElementById("output").innerText = handDisplay;
  document.getElementById("deck").innerText = notMyHandDisplay;
  document.getElementById("odds").innerText = "Bust chance:";
  document.getElementById("odds2").innerText = "Bust chance:";
  
}

function refreshDeck() {
  const d = createDeck();
  let deckDisplay = "Deck:" + d;
  document.getElementById("deck").innerText=deckDisplay;
}

function startGame() {
  let handDisplay = "Hand:" + myHand;
  document.getElementById("output").innerText=handDisplay;

}



console.log(message)