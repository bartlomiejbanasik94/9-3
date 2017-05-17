var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period."
var dinosaur = "triceratops"
var animal = dinosaur.toUpperCase();
console.log(animal);

var textAfter = text.replace('Velociraptor', animal);
// console.log(textAfter);
var lengthOfText = textAfter.length;
console.log(lengthOfText);

var halfText = textAfter.substr(0,lengthOfText/2); //tak działa ale jak wezmę lenghtOfText/2 albo spróbuję go wypisać w logu konsoli to daje undefined
console.log(halfText);