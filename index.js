function theBeatlesPlay (array, instruments) {
  var beatlesArr = [];
  for (var i = 0; i < array.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  };
  return beatlesArr;
};
