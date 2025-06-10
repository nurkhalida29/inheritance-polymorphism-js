<script>
// Base class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Subclass (Inheritance + Polymorphism)
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

class Cat extends Animal {
  speak() {
    console.log(`${this.name} meows.`);
  }
}

// Demonstration
const animals = [
  new Animal("Generic"),
  new Dog("Rex"),
  new Cat("Whiskers"),
];

animals.forEach(animal => animal.speak());  // Polymorphism in action
<script>
