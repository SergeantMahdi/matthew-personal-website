
const data = [{
    title: "DNS CHANGER",
    description: "This project is made to solve some pesonal problem. made from scrach by C++ and QT framework",
    img: "https://images.freeimages.com/images/large-previews/443/php-code-1242330.jpg?fmt=webp&h=350",
    link: "https://github.com/SergeantMahdi/DNS-Changer"
},
]


function makeCard() {
    let projects = document.querySelector('.project-cards');
    
    for (let i = 0; i < data.length; i++) {
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