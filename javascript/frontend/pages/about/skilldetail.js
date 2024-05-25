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
    {
        text: '🌟 My CSS journey kicked off with a Udemy course. Initially, I felt like I was deciphering a secret code! But guess what? I rolled up my sleeves, built my own website from scratch, and voilà! My CSS skills got a major boost. 🚀'
    },
    { text: ' the fascinating world of markup languages! 🌟 Containers—the enigmatic puzzle pieces that once left me scratching my head. But fear not! With practice, they transformed from cryptic hieroglyphs into familiar allies. Now, I wield them like a seasoned sorcerer, weaving magic across the digital canvas. 🪄✨' },
    { text: 'Ah, databases—the beating heart of backend wizardry! ⚡ When I immersed myself in backend development, databases became my compass. Sure, mastering the art of managing and engineering these data realms took time, but oh, was it worth it!' },
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


    js.addEventListener('click', () => { onClick(texts[0].text) });
    css.addEventListener('click', () => onClick(texts[1].text));
    html.addEventListener('click', () => onClick(texts[2].text));
    mongo.addEventListener('click', () => onClick(texts[3].text));
    qt.addEventListener('click', () => onClick(texts[4].text));
    cpp.addEventListener('click', () => onClick(texts[5].text));
    react.addEventListener('click', () => onClick(texts[6].text));
