function theBeatlesPlay(musicians, instruments) {
  var whoPlaysWhat = [] 
  for (var i = 0; i < 4; i++) {
  whoPlaysWhat.push((musicians[i]) +" plays " + (instruments[i]))
}
return whoPlaysWhat
}

function johnLennonFacts(facts) {
  var i = 0;
  var loudFacts = [];
  while (i < facts.length) {
  loudFacts.push((facts[i]) + "!!!");
  (i++);
}
return loudFacts;
}
