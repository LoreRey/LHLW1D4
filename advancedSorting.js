var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function sortNameAge(first, second) {
  if (first.name < second.name) {
    return -1;
  } else if (first.name === second.name) {
    return first.age - second.age;
  } else {
    return 1;
  }
});

console.log(students);


