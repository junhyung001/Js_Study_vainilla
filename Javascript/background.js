const body = document.querySelector("body");

//이미지 갯수 설정
const IMG_NUMBER = 6;

/* 이미지를 가져오는 함수 */
function PaintImage(imgNumber){
    const image = new Image();
    image.src = `img/${imgNumber + 1}.jpeg`; // 가져올 image경로 지정
    image.classList.add("bgImage"); // image에 bgImage 클래스 추가 
    body.appendChild(image); // body의 자식에 image추가
    console.log(image);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number
}

function init(){
    const randomNumber = genRandom();
    PaintImage(randomNumber);
}

init()