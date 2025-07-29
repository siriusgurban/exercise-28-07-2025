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

//29 Juli 2025

//1. Diskriminanti hesablayin

function discriminant(a, b, c) {
  let d = b ** 2 - 4 * a * c;
  console.log(d, "diskriminatn");

  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    console.log(`${x1} and ${x2} are bigger than zero`);
  } else if (d == 0) {
    console.log(`${x} equal to zero`);
  } else {
    console.log("There is no carrot");
  }
}

discriminant(4, 7, 3);

//2. Qismet ve qaligi tapan funksiya

function qismetQaliq(a, b) {
  let x = Math.trunc(a / b);
  let y = a - b * x;

  console.log(`qismet: ${x}, qaliq: ${y}`);
}

qismetQaliq(5, 2);

//3. Event Tsak - event date-i ile bugunun tarixi arasinda gun saat deqiqe ferqini konsola cixarin

const futureDate = new Date("08-13-2025");

function calcFuture3(d) {
  // let date = new Date();

  let diff = new Date(d - new Date());

  console.log(
    `${diff.getDate()} gun, ${diff.getHours()} saat, ${diff.getMinutes()} deqiqe, ${diff.getSeconds()} sekunde`
  );
}

calcFuture3(futureDate);

//4. Imtahan Netiseni yoxlayan funksiya'

function examHoney(lab, con, exam, prac, honey) {
  if ((lab === 0, con === 0, exam === 0, prac === 0, honey === 0))
    return console.log("You are not allowed to participate");

  let total = lab + prac + honey + exam;

  if (con > 6 && total >= 17 && total + honey >= 51) {
    console.log("You passed" + (total + honey));
  } else {
    console.log("You dissapointed me!");
  }
}

examHoney(10, 10, 10, 10, 10);

//5 Qarsilama Teaski

function greetingWithDayTime() {
  const name = prompt("Enter your name");
  const gender = confirm(
    "Choose your gender. (Okey means male, cancel means female)"
  );

  const date = new Date();
  let dayTime = "";

  if (date.getHours() >= 8 && date.getHours() <= 12) dayTime = "Guten Morgen";
  else if (date.getHours() >= 12 && date.getHours() <= 18)
    dayTime = "Guten Tag";
  else date = "Guten Abend";

  gender
    ? alert(`${dayTime}, Herr ${name}!`)
    : alert(`${dayTime}, Frau ${name}!`);
}

// greetingWithDayTime();

//6

function minMaxAve(a, b, c) {
  console.log(`${Math.min(a, b, c)} is minimum`);
  console.log(`${Math.max(a, b, c)} is maximum`);
  console.log(`${(a + b + c) / 3} is average`);
}

minMaxAve(1, 2, 3);

//7

let arrMix = [-1, 2, 5, 7, 12, 2, 7];

function repeatNum(arr) {
  console.log();

  let aaaa = []

  let newArr = arr.forEach((item, index) => {
    for (let i = 0; i < arr.length; i++) {
      if (item === arr[i]) {

        aaaa[item]
        console.log(item, "item");
      }else{
        aaaa.pop(arr[i])
      }
    }
  });
  console.log(aaaa, "newArr");
}

repeatNum(arrMix);

// const date = new Date();

const tomorrowDate = new Date("07-30-2025 09:00");

function calcFuture(date) {
  let hours = date / 1000 / 60 / 60 / 24;
  let minutes = (date / 1000 / 60 / 60) % 24;
  let seconds = (date / 1000 / 60) % 60;
  console.log(`${hours}, Minutes: ${minutes}, Seconds: ${seconds}`);
}

calcFuture(tomorrowDate);
