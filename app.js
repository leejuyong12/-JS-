const a = 5;  // 보통 const 를 쓰고 
const b = 2;
let myName = "juyong";  // 변경하고 싶은게 있으면 let을 사용한다.   var은 그냥 쓰지 말자


console.log(a + 2);
console.log(a * 2);
console.log(a / 2);
console.log("hello" + myName);

myName = "leejuyong"

console.log("your ne name is " + myName);


const amIFat = true;
console.log(amIFat);

const amITall = null;    // 값이 없다.
console.log(amIFat);

// const amIBig;       // undefined  정의되지 않았다.
// console.log(amIBig);

console.log('--------------------')


// 데이터 정리
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(daysOfWeek);

daysOfWeek.push("sun");

console.log(daysOfWeek);

console.log('--------------------')

// objects { } 이걸 objects 라고 부른다
const player = {
  name: "nico",
  points: 10,
  fat: true,
};
console.log(player)
console.log(player.points)
player.lastName = "potato";
console.log(player.lastName)
player.points = player.points + 15
console.log(player.points)

console.log('--------------------')
// functions
function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age)
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);

const soccerPlayer = {
  name: "nico",
  sayHello: function (otherPersonsName) {
    console.log("hello " + otherPersonsName + " nice to meet you!")
  },
};
soccerPlayer.sayHello("lynn");
soccerPlayer.sayHello("nico");

// returns
const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b
  },
  times: function (a, b) {
    return a * b
  },
  divide: function (a, b) {
    return a / b
  },
  power: function (a, b) {
    return a ** b
  },
};

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timeResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timeResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);

// conditional ---  boolean ---- true or false --- || or  ----- && and
const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  console.log("Please write a real positive number");
} else if (age < 18) {
  console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink.");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise");
} else if (age === 100) {
  console.log("wow you are wise");
} else if (age >= 80) {
  console.log("You can do whatever you want.");
}