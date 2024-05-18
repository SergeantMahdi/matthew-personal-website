let projects = document.querySelector('.project-cards');

const data = [{
    title: "DNS CHANGER",
    description: "This project is made to solve some pesonal problem. made from scrach by C++ and QT framework",
    img: "https://images.freeimages.com/images/large-previews/443/php-code-1242330.jpg?fmt=webp&h=350",
    link: "https://github.com/SergeantMahdi/DNS-Changer"
},
{
    title: "File Organizer",
    description: "This software is made to organize different format files that you have. highly recommended for 3D designers",
    img: "https://images.freeimages.com/images/large-previews/b0b/code-1243504.jpg?fmt=webp&h=350",
    link: "https://github.com/SergeantMahdi/DNS-Changer"
},
{
    title: "DNS CHANGER",
    description: "This project is made to solve some pesonal problem. made from scrach by C++ and QT framework",
    img: "https://images.unsplash.com/photo-1585079542156-2755d9c8a094?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://github.com/SergeantMahdi/DNS-Changer"
},
{
    title: "DNS CHANGER",
    description: "This project is made to solve some pesonal problem. made from scrach by C++ and QT framework",
    img: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://github.com/SergeantMahdi/DNS-Changer"
},

{
    title: "DNS CHANGER",
    description: "This project is made to solve some pesonal problem. made from scrach by C++ and QT framework",
    img: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://github.com/SergeantMahdi/DNS-Changer"
    }]

data.push({title: "Personal website V2",
description: "This project is made to solve some pesonal problem. made from scrach by C++ and QT framework",
img: "https://images.unsplash.com/photo-1563089145-599997674d42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHByb2dyYW1taW5nfGVufDB8fDB8fHww",
link: "https://github.com/SergeantMahdi/DNS-Changer"})

function makeCard() {

    for (let i = data.length - 6; i < data.length; i++) {
        const a = document.createElement("a");
        a.classList.add("project");
        a.href = data[i].link;
        a.style.backgroundImage = `url(${data[i].img}`
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        a.appendChild(h3);
        a.appendChild(p);
        h3.innerText = data[i].title;
        p.innerText = data[i].description;

        projects.appendChild(a);
    }
}

makeCard();