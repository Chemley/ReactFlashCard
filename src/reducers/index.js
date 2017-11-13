const INITIAL_STATE = {
  isFront: true,
  currentCardIndex: 0,
  cards: [
    {
      front: "What is the average weight of a fox?",
      back: "14 pounds."
    }, {
      front: "How long can an alligator live?",
      back: "Up to 100 years."
    }, {
      front: "What is a group of owls called?",
      back: "A parliament."
    }, {
      front: "How long has the honey bee been around?",
      back: "30 million years."
    }, {
      front: "How many muscles are in a cat's ear?",
      back: "32 muscles in each ear."
    }, {
      front: "How fast can a woodpecker peck?",
      back: "20 times per second."
    }
  ]
}

// You have to write object.assign({}, state {[WHAT YOU WANT TO UPDATE GOES HERE]})
// With object.assign (first part is the object that you want to create. the second part is the
 // part you wish to use to update the state. It will copy all the properties from the old object to the new object and
 // update the state.)

Array.prototype.list_shuffle = function() {
  var i = this.length,
    j, temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this[j];
    this[j] = this[i];
    this[i] = temp;
  }
}
// var to reset the current state of the card back to the front.
let prevState = true;

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "NEXT":
      return Object.assign({}, state, {
        currentCardIndex: state.currentCardIndex + 1,
        isFront: prevState});
    case "PREVIOUS":
      return Object.assign({}, state, {
        currentCardIndex: state.currentCardIndex - 1,
        isFront: prevState});
    case "SHUFFLE":
      const newCards = state.cards.slice(0);
            newCards.list_shuffle();
      return Object.assign({}, state, {
            cards: newCards,
            currentCardIndex: state.currentCardIndex = 0});
    case "FLIP":
      return Object.assign({}, state, {
        isFront: state.isFront === false });
    default:
      return state;
  }
}
