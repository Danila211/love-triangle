/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {

  var Spichonees = {};

  for (var i = 0; i < preferences.length; i++) {
      var spichonee = i + 1;
      Spichonees[spichonee] = preferences[i];
  }
  
  var loveTrianglesCounter = 0;
  
  for(var firstSpichonee in Spichonees) {
    var secondSpichonee = Spichonees[firstSpichonee];
    var thirdSpichonee = Spichonees[secondSpichonee];
    
    var thirdLovesFirst = Spichonees[thirdSpichonee] == firstSpichonee;
    var firstLoveHimself = Spichonees[firstSpichonee] == firstSpichonee;

    if (thirdLovesFirst && !firstLoveHimself){
      loveTrianglesCounter++;    
    }
  }

  var result = loveTrianglesCounter / 3;

  return result;
};


