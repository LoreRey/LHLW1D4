function map(array, callback) {
  var newArray = []
  for(var i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}

var words = ["ground", "control", "to", "major", "tom"];

var mapWords1 = map(words, function(word) {
  return word.length;
});

console.log(mapWords1);

var mapWords2 = map(words, function(word) {
  return word.toUpperCase();
});

console.log(mapWords2);

var mapWords3 = map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(mapWords3);