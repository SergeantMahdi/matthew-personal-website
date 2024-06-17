

async function fetchProjects(api) {
    try {
        const response = await fetch(api);
        const data = await response.json();
        makeProjectCard(data);
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
}

function makeProjectCard(data) {
    data.forEach(element => {
        const projectSection = document.querySelector('.projectSelection');
        const projectContainer = document.createElement('div');
        projectContainer.classList.add("projectContainer");
        projectSection.appendChild(projectContainer);
        const radioInput = document.createElement('input');
        radioInput.classList.add("selection");
        radioInput.setAttribute('type', "radio");
        radioInput.setAttribute('name', "selection");
        projectContainer.appendChild(radioInput);
        const label = document.createElement('label');
        projectContainer.appendChild(label);
        label.innerText = element.name;

        radioInput.addEventListener('change', () => {
            document.querySelector('#PName').setAttribute('value', element.name);
            document.querySelector('#PDescription').innerText = element.description;
            document.querySelector('#PImage').setAttribute('value', element.image);
            document.querySelector('#PLink').setAttribute('value', element.link);
            document.querySelector('#projectId').setAttribute('value', element._id);
        })
    });
}

fetchProjects('/api-project/projects');