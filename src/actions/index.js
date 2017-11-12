export function next() {
  return {type: "NEXT"};
}

export function previous() {
  return {type: "PREVIOUS"};
}

export function flip() {
  return {type: "FLIP"};
}

export function shuffle(shuffle) {
  return {type: "shuffle"};
  shuffle;
}
