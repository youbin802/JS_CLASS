const log = console.log;
function winLode(e) {
    alert(`${e.currentTarget} 객체가 ${e.type} 되었습니다.`);
}

window.onload = winLode;

document.querySelector("h1").addEventListener("click", function() {
    alert(`${this}를 클릭했습니다.`);
    alert(`${this.textContent}를 클릭했습니다.`);
});

function dbClick(e) {
    alert(`${e.currentTarget.textContent}를  더블클릭했습니다.`);
    alert(`${e.currentTarget.tagName} 태그를 ${e.type} 했습니다.`);
}

document.querySelector("#dbClick").addEventListener("dblclick", dbClick);

function over() {
    alert('첫번째 버튼만 오버 됩니다.');
}

document.querySelector("button").addEventListener("mouseover", over);

let btns = document.querySelectorAll('button');
btns.forEach( btn => {
    btn.style.background = '#db8860';
    btn.addEventListener("dblclick", dbClick);
});

function dbclicks(e) {
    alert(`${e.currentTarget.textContent}이 ${e.type} 되었습니다.`);
}

