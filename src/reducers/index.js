const INITIAL_STATE = {
  isFront: true,
  currentCardIndex: 0,
  cards: [
    {
      front: "One this works!",
      back: "Yeah, it does!"
    }, {
      front: "Two this works!",
      back: "Yeah, it does!"
    }, {
      front: "Three this works!",
      back: "Yeah, it does!"
    }, {
      front: "Four this works!",
      back: "Yeah, it does!"
    }, {
      front: "Five this works!",
      back: "NOPE!"
    }, {
      front: "Six this works!",
      back: "Still doesn't!"
    }
  ]
}

// You have to write object.assign({}, state {[WHAT YOU WANT TO UPDATE GOES HERE]})
// With object.assign (first part is the object that you want to create. In this case nothing. the second part is the
 // part you wish to use to update the state. It will copy all the properties from the old object to the new object and
 // update the state.)


export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "NEXT":
      return Object.assign({}, state, {
        currentCardIndex: state.currentCardIndex + 1 });
    case "PREVIOUS":
    return Object.assign({}, state, {
      currentCardIndex: state.currentCardIndex - 1 });
    // case 'SHUFFLE':
    //   return shuffle(state, action.shuffle);
    // case 'FLIP':
    //   return flip(state, action.flip);
    default:
      return state;
  }
}
