const contact = new Map();

contact.set("personOne", "Sirius");
contact.set("personTwo", "Gurban");

const checkPerson = (name) => {
  contact.forEach((value, key) => {
    console.log(`${key} = ${value}`);
  });

  if (contact.has(name)) {
    contact.delete(name);
    console.log(contact.has(name));
  }
  contact.clear();
};

checkPerson("personOne");

console.log(contact, "checkPerson");

const contactArray = [1, 2, 3, 4, 1, 2, 3, 4];

const clearDuplicate = (arr) => {
  const contactSet = new Set(arr);

  return [...contactSet]; //Array.from(contactSet)
};

console.log(clearDuplicate(contactArray), "clearDuplicate(contactArray)");

const date = new Date();

const months = [1, 2, 3, 4, 5, 6, "Iyul"];

console.log(
  `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
);
