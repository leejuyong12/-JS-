const quotes = [
  {
    quote: "승리는 가장 끈기있는 자에게 돌아간다.",
    author: "나폴레옹 보나파르트",
  },
  {
    quote: "위대한 이들은 목적을 갖고, 그 외의 사람들은 소원을 갖는다.",
    author: "워싱턴 어빙",
  },
  {
    quote: "성공한 사람보다는 가치 있는 사람이 되려 하라.",
    author: "알버트 아인슈타인",
  },
  {
    quote: "무언가를 위해 목숨을 버릴 각오가 되어 있지 않는 한 그것이 삶의 목표라는 어떤 확신도 가질 수 없다.",
    author: "체 게바라",
  },
  {
    quote: "성공은 대개 그를 좇을 겨를도 없이 바쁜 사람에게 온다.",
    author: "헨리 데이비드 소로우",
  },
  {
    quote: "인생은 겸손에 대한 오랜 수업이다.",
    author: "제임스 M. 배리",
  },
  {
    quote: "작은 변화가 일어날 때 진정한 삶을 살게 된다.",
    author: "레프 톨스토이",
  },
  {
    quote: "태어나면서부터 현명한 이는 없다.",
    author: "미겔 데 세르반테스",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;