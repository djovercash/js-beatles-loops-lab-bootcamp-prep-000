function theBeatlesPlay (musicians, instruments) {
  var beatlesArr = [];
  for (var i = 0; i < musicians.length; i++) {
    beatlesArr.push(`${musicians[i]} plays ${instruments[i]}`)
  };
  return beatlesArr;
};
