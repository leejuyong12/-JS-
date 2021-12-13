// // const a = 5;  // 보통 const 를 쓰고 
// // const b = 2;
// // let myName = "juyong";  // 변경하고 싶은게 있으면 let을 사용한다.   var은 그냥 쓰지 말자


// // console.log(a + 2);
// // console.log(a * 2);
// // console.log(a / 2);
// // console.log("hello" + myName);

// // myName = "leejuyong"

// // console.log("your ne name is " + myName);


// // const amIFat = true;
// // console.log(amIFat);

// // const amITall = null;    // 값이 없다.
// // console.log(amIFat);

// // // const amIBig;       // undefined  정의되지 않았다.
// // // console.log(amIBig);

// // console.log('--------------------')


// // // 데이터 정리
// // const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// // console.log(daysOfWeek);

// // daysOfWeek.push("sun");

// // console.log(daysOfWeek);

// // console.log('--------------------')

// // // objects { } 이걸 objects 라고 부른다
// // const player = {
// //   name: "nico",
// //   points: 10,
// //   fat: true,
// // };
// // console.log(player)
// // console.log(player.points)
// // player.lastName = "potato";
// // console.log(player.lastName)
// // player.points = player.points + 15
// // console.log(player.points)

// // console.log('--------------------')
// // // functions
// // function sayHello(nameOfPerson, age) {
// //   console.log("Hello my name is " + nameOfPerson + " and I'm " + age)
// // }

// // sayHello("nico", 10);
// // sayHello("dal", 23);
// // sayHello("lynn", 21);

// // const soccerPlayer = {
// //   name: "nico",
// //   sayHello: function (otherPersonsName) {
// //     console.log("hello " + otherPersonsName + " nice to meet you!")
// //   },
// // };
// // soccerPlayer.sayHello("lynn");
// // soccerPlayer.sayHello("nico");

// // // returns
// // const calculator = {
// //   plus: function (a, b) {
// //     return a + b;
// //   },
// //   minus: function (a, b) {
// //     return a - b
// //   },
// //   times: function (a, b) {
// //     return a * b
// //   },
// //   divide: function (a, b) {
// //     return a / b
// //   },
// //   power: function (a, b) {
// //     return a ** b
// //   },
// // };

// // const plusResult = calculator.plus(2, 3);
// // const minusResult = calculator.minus(plusResult, 10);
// // const timeResult = calculator.times(10, minusResult);
// // const divideResult = calculator.divide(timeResult, plusResult);
// // const powerResult = calculator.power(divideResult, minusResult);

// // // conditional ---  boolean ---- true or false --- || or  ----- && and
// // const age = parseInt(prompt("How old are you?"));

// // if (isNaN(age) || age < 0) {
// //   console.log("Please write a real positive number");
// // } else if (age < 18) {
// //   console.log("You are too young.");
// // } else if (age >= 18 && age <= 50) {
// //   console.log("You can drink.");
// // } else if (age > 50 && age <= 80) {
// //   console.log("You should exercise");
// // } else if (age === 100) {
// //   console.log("wow you are wise");
// // } else if (age >= 80) {
// //   console.log("You can do whatever you want.");
// // }

// // const title = document.getElementById("title");

// // title.innerText = "Got you!";

// // console.log(title.id)
// // console.log(title.className)

// const h1 = document.querySelector("div.hello:first-child h1"); // 첫번째꺼 가져온다. 다 가져오려면 All 붙이기
// // 아이디는 .   클래스는 # 앞에 붙이기



// function handleTitleClick() {
//   h1.classList.toggle("clicked" );
// }
// h1.addEventListener("click", handleTitleClick);


// // function handleTitleClick() {
// //   h1.style.color = 'blue';
// // }
// // function handleMouseLeave() {
// //   h1.innerText = "Mouse is gone!";
// // }

// // function handleWindowResize() {
// //   document.body.style.backgroundColor = "tomato";
// // }

// // function handleWindowCopy() {
// //   alert("copier!");
// // }

// // function handleWindowOffLine() {
// //   alert("SOS no WIFI")
// // }

// // function handleWindowOnLine() {
// //   alert("ALL GOOD")
// // }
// // title.addEventListener("mouseenter", handleMouseEnter);
// // title.addEventListener("mouseleave", handleMouseLeave);
// // h1.onclick = handleTitleClick;
// // h1.onmouseenter = handleMouseEnter;
// // // 이런 형식으로도 할수 있지만 addEventListener 로 하면 나중에 removeEventListener로 지울수도 있기 때문에
// // // addEventListener 이게 더 낫다

// // window.addEventListener("resize", handleWindowResize);
// // window.addEventListener("copy", handleWindowCopy);
// // window.addEventListener("offline", handleWindowOffLine);
// // window.addEventListener("online", handleWindowOnLine);

// 여기까지는 연습

// 여기서부터 진짜 앱 만들기
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = "hidden"; // str만 포함된 것은 변수 이름 모두 대문자
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username); // username 계속 저장해놓게 하는 코드
  // greeting.innerText = "Hello " + username;
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);

} else {
  paintGreetings(savedUsername);
}