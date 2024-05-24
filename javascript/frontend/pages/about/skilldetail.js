const detail = document.querySelector('.detail');
const js = document.querySelector('.js');
const css = document.querySelector('.css');
const html = document.querySelector('.html');
const cpp = document.querySelector('.cpp');
const qt = document.querySelector('.qt');
const react = document.querySelector('.react');
const mongo = document.querySelector('.mongo');

const root = document.querySelector(':root');
const rootStyle = getComputedStyle(root);

const texts = [
    { text: 'JS' },
    { text: 'flkjedfojb;lkb;lkrtl kptrkpkbprt[pblktprrlpb kolkjotkjtoprjbopjkbpojpojre' },
    { text: 'html' },
    { text: 'mongo' },
    { text: 'qt' },
    { text: 'cpp' },
    { text: 'react' },
]

const defaultText = 'CLICK ON ONE OF THE SKILLS TO SEE THE DETAIL';
document.addEventListener("DOMContentLoaded", () => {
    detail.innerText = defaultText;
})


function onClick(text) {
    detail.innerText = text;
}

js.addEventListener('click', () => {
    onClick(texts[0].text)
});

css.addEventListener('click', () => onClick(texts[1].text));

html.addEventListener('click', () => onClick(texts[2].text));

mongo.addEventListener('click', () => onClick(texts[3].text));

qt.addEventListener('click', () => onClick(texts[4].text));

cpp.addEventListener('click', () => onClick(texts[5].text));

react.addEventListener('click', () => onClick(texts[6].text));

