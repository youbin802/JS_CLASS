let exAnswer = document.querySelector('.exAnswer');
function ex2_a() {
    const arr =[];
    let num = prompt('숫자 입력', '0~99');
    arr.push(num);
    exAnswer.innerText = `입력받은 수 값은 ${arr} 입니다.`;
}

function ex2_public(idx) {
    let count = prompt('배열 크기 입력', '0~99');
    const arr = new Array();

    for(let i=1; i<= count; i++) {
        arr.push(prompt(i + "번째 숫자 입력하세요", '0~99'));
    }

    for(i in arr) {
        if(idx == '2') {
            exAnswer.innerText += arr[i];
        } else {
            addPtag(arr[i]);
        }
    }
}

function addPtag(str) {
    let p = document.createElement('p');
    let text= document.createTextNode(str);
    p.appendChild(text);
    exAnswer.appendChild(p);
}



function open(idx) {
    if(idx == '1') {
        ex2_a();
    } else {
        ex2_public(idx);
    }
}

window.addEventListener("load",()=> {
    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener("click",e=> {
            open(e.target.dataset.idx);
        });
    });
})

