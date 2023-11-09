people = [
  { id: 1, name: "mate", isStudente: true },
  { id: 2, name: "mate", isStudente: true },
  { id: 3, name: "mate", isStudente: true },
];

person = people.find((p) => p.id === 2);

console.log(person);
