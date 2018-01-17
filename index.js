function theBeatlesPlay(musicians, instruments) {
  var whoPlaysWhat = [] 
  for (var i = 0; i < 4; i++) {
  whoPlaysWhat.push((musicians[i]) +" plays " + (instruments[i]))
}
return whoPlaysWhat
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]

function johnLennonFacts(facts) {
  var i = 0;
  var loudFacts = [];
  while (i < facts.length) {
  loudFacts.push((facts[i]) + "!!!");
  (i++);
}
return loudFacts;
}