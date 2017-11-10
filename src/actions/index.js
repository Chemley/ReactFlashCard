export function next() {
  return {type: "NEXT"};
}

export function previous() {
  return {type: "PREVIOUS"};
}

export function flip(flip) {
  return {type: "flip"};
  flip;
}

export function shuffle(shuffle) {
  return {type: "shuffle"};
  shuffle;
}
