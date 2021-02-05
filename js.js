//변수 : selector(#id명), getElementsByTagName(태그 <li></li> 같은것들)
let input = document.querySelector('#add');
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');
let el = document.getElementsByTagName('li');

function write() {
    let txt = input.value;
    if (txt === "") { //왜 ===인지 모르겠음!!!!!!
        alert('입력을 해야합니다.');
    } else {
        let li = document.createElement('li');
        li.innerHTML = txt;
        list.insertBefore(li, list.childNodes[0]); // 맨위에 리스트 추가되게
        input.value = ''; //입력한 후에 다시 빈칸이 되게함.
    }
}
btn.addEventListener('click', () => {
    write();
})

function enterkey() {
    write();
}


//할일 다하면 클릭하고, 클릭하면 줄- 그어짐
list.addEventListener('click', e => {
    if (e.target.tagName == 'LI') { //위는 ===인데 얘는 왜 ==이지?. LI말고 li로 하면 안됨! 무조건 대문자로 써야되는듯.
        e.target.classList.toggle('checked');
    }
})