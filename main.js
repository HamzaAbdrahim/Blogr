//creat drowpdown menu

let click = document.querySelector('.list').children;
let menu = document.querySelectorAll('.list > li')
for (let i = 0;i<click.length;i++) {
    click[i].addEventListener('click',function() {
        click[i].lastElementChild.classList.toggle('spiner');
        menu[i].classList.toggle('rotate');
        if (click[i].classList.contains('spiner') && click[i+1].classList.contains('spiner') ) {
            click[i].classList.remove('spiner')
        }
    } )
}


// the humberger menu

let humberger = document.querySelector('.hamburger');
let Singup = document.querySelector('.Singup');
let list = document.querySelector('.list');

  

humberger.addEventListener('click',action)

function action() {
    humberger.classList.toggle('rotate');
    Singup.classList.toggle('active');
    list.classList.toggle('active');

}


let To_Top = document.querySelector('.To_Top');


window.onscroll = function () {
    if (window.scrollY >= 500) {
        To_Top.classList.add('scroll');
    } else {
        To_Top.classList.remove('scroll')
    }
}



To_Top.onclick =  function () {
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}

let progras = document.querySelector('.progras');
let H = document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener('scroll', () => {
    let scroolTop = document.documentElement.scrollTop;
    let style = scroolTop / H * 100
    progras.style.width = style + '%'
})


const pargref  = document.querySelector('.pargraf');
let content = 'A modern publishing platform ';

let i = 0;
let j = 0;
setInterval( function () {
    pargref.innerHTML += content.charAt(i)
    i++
},200)