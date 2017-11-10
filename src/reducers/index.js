const INITIAL_STATE = {
  isFront: true,
  currentCardIndex: 0
}

let cardInfo = [
  {
    front: "Hope this works!",
    back: "Yeah, it does!"
  },
  {
    front: "Hope this works!",
    back: "Yeah, it does!"
  },
  {
    front: "Hope this works!",
    back: "Yeah, it does!"
  },
  {
    front: "Hope this works!",
    back: "Yeah, it does!"
  },
  {
    front: "Hope this works!",
    back: "NOPE!"
  },
  {
    front: "Hope this works!",
    back: "Still doesn't!"
  }
];

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'NEXT':
      return next(state, action.next);
    case 'PREVIOUS':
      return previous(state, action.previous);
    case 'SHUFFLE':
      return shuffle(state, action.shuffle);
    case 'FLIP':
      return flip(state, action.flip);
    default:
      return state;
  }
}
