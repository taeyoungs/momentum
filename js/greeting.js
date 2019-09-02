const greetingForm = document.querySelector(".js-greetingForm"),
    input = greetingForm.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_JS = "showing";

function saveName(name) {
    localStorage.setItem(USER_LS, name);
}

function handleSubmit(event) {
    event.preventDefault();
    const name = input.value;
    saveName(name);
    // submit해서 LS에 저장한 순간 브라우저에도 출력되어야 한다.
    paintGreeting(name);
}

function askUserName() {
    // 유저 이름 입력칸 show
    greetingForm.classList.add(SHOWING_JS);
    // handleSubmit
    greetingForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(name) {
    // 존재하던 입력칸 없애기
    greetingForm.classList.remove(SHOWING_JS);
    // 이름 출력부 display block 처리
    greeting.classList.add(SHOWING_JS);
    greeting.innerText = `Hello ${name}`;
}

function init() {
    // LS에 저장된 NAME이 있을 때랑 없을 때랑 다른 함수 호출
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){ 
        // ask userName
        askUserName();
    } else {
        // 이름이 존재할 경우 브라우저에 출력
        paintGreeting(currentUser);
    }
}

init();