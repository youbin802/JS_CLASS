function ex1_a(num1,num2) {
    document.querySelector(".exAnswer").innerText= `입력받은 두 수의 값은 ${num1}과  ${num2}입니다.`;
}

function ex1_b(num1,num2) {
    let str = num1%num2 == 0 ? '짝수' : '홀수';
    textInsert(str + "입니다");
}

function ex1_c(num1,num2) {
    let p = document.createElement('p');
    let str= document.createTextNode('');
    
    str.nodeValue = num1%num2 == 0 ? '짝수' : '홀수';
    p.appendChild(str);
    document.querySelector(".exAnswer").appendChild(p);
}

function textInsert(str) {
    document.querySelector(".exAnswer").innerText= str;
}

function open(idx) {
        document.querySelector("#exQuery").innerText="a. 두 수를 입력받아서, 출력해 봅시다.";
        let num1 = prompt("첫번째 숫자 입력", "0~99");
        let num2 = prompt("두번째 숫자 입력", "0~99");

        switch(idx) {
            case '1':
                ex1_a(num1,num2);
                break;
            case '2':
                ex1_b(num1,num2);
                break;

            case '3':
                ex1_c(num1,num2);
                break;

        }
}

window.addEventListener("load",()=> {
    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener("click",e=> {
            open(e.target.dataset.idx);
        });
    });
})

