var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period."
var dinosaur = "triceratops"
var animal = dinosaur.toUpperCase();
console.log(animal);

var textAfter = text.replace('Velociraptor', animal);
// console.log(textAfter);
// var lenght = textAfter.lenght;
// console.log(lenght);

var halfText = textAfter.substr(0,72);
console.log(halfText);