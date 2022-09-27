/**
 * Create two classes: Animal and Dog. the Animal class should
 * take two parameters in the constructor (name and animalType).
 * Set them as its public properties.
 * in addition, the Animal class should have two functions:
 * sayName and sayAnimalType. sayName prints name, and sayAnimalType
 * prints animalType initialized in the constructor.
 * Finally, the Dog class inherits from the Animal class.
 */

// Animal class:
function Animal(name, animalType) {
  this.name = name;
  this.animalType = animalType;
}
// Animal class should have two functions:
// sayName and sayAnimalType
Animal.prototype.sayName = function () {
  console.log(this.name);
};
Animal.prototype.sayAnimalType = function () {
  console.log(this.animalType);
};

// Dog class
function Dog(name) {
  Animal.call(this, name, 'Dog');
  // The call() method is a predefined JavaScript method.
  // It can be used to invoke (call) a method with an owner object
  // as an argument (parameter).
  // With call(), an object can use a method belonging to another object.
}

Dog.prototype = Object.create(Animal.prototype);

var myAnimal = new Animal('ditto', 'pokemon');
myAnimal.sayName(); // "ditto"
myAnimal.sayAnimalType(); // "pokemon"
var myDog = new Dog('candy', 'dog');
myDog.sayName(); // "candy"
myDog.sayAnimalType(); // "dog"
