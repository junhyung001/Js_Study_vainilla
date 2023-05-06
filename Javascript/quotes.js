const quotes = [
    {
        quote: "지옥에 있다면 계속 걸어라 멈추지 말아라",
        author: "윈스턴 처칠",
    },
    {
        quote:"큰 목표를 이루고 싶으면 허락을 구하지 마라",
        author:"미상",
    },
    {
        quote:"상황을 가장 잘 활용하는 사람이 가장 좋은 상황을 맞는다.",
        author:"존 우드",
    },
    {
        quote:"인생의 뜻을 세우는데 적당한 때는 없다.",
        author:"볼드원",
    },
    {
        quote:"실패는 잊어라. 하지만 그것이 준 교훈은 절대 잊으면 안 된다.",
        author:"하버트개서",
    },
    {
        quote:"우리는 행복하기 때문에 웃는 게 아니라, 웃기 때문에 행복하다.",
        author:"윌리엄 제임스",
    },
    {
        quote:"너 자신이 돼라. 다른 사람은 이미 있으니까.",
        author:"오스카 와일드",
    },
    {
        quote:"인생은 가까이서 보면 비극, 멀리서 보면 희극이다.",
        author:"찰리 채플린",
    },
    {
        quote:"인생을 다시 산다면 다음번에는 더 많은 실수를 저지르리라.",
        author:"나딘 스테어",
    },
    {
        quote:"최고에 도달하려면 최저에서 시작해라.",
        author:"p.시루스",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;