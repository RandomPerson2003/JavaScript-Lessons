console.log("You made it to the console!");

console.log("");
console.log("");

/**
 * 
 */
let person1 = {
  firstName: "Kyler",
  lastName: "Orsten",
  age: 15,
  favoriteNumber: 88,
  favoriteColor: "Blue",
  hairColor: "Brown",
  gender: "Male",
  birthMonth: "November",
  birthDay: 12,
  eyeColor: "Brown",
};

let person2 = {
  firstName: "Ethan",
  lastName: "Diep",
  age: 16,
  favoriteNumber: 8,
  favoriteColor: "Blue",
  hairColor: "Black",
  gender: "Male",
  birthMonth: "May",
  birthDay: "16",
  eyeColor: "Brown",
};


console.log(person1);
console.log(person2);
let swap = person1.last;
person1.lastName = person2.lastName;
person2.lastName = swap;
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person2.firstName);
console.log(person2.lastName);