async function fetchProjects(api, container) {
    try {
        const response = await fetch(api);
        const data = await response.json();
        makeCard(data,container);
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
}

function makeCard(data, container) {

    data.forEach(project => {
        const a = document.createElement("a");
        a.classList.add("project");
        a.href = project.link;
        a.style.backgroundImage = `url(${project.image})`;
        
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        h3.innerText = project.name;
        p.innerText = project.description;

        a.appendChild(h3);
        a.appendChild(p);
        console.log(a)
        container.appendChild(a);
    });
}

let projectCard = document.querySelector('.project-cards');
let latestCard = document.querySelector('.latest-project-cards');

fetchProjects('/api-project/',latestCard);
fetchProjects('/api-project/projects',projectCard);