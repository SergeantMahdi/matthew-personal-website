const projectSection = document.querySelector('.projectSelection');

async function fetchProjects(api) {
    try {
        const response = await fetch(api);
        const data = await response.json();
        makeCard(data);
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
}

function makeCard(data) {
    data.forEach(element => {
        const projectContainer = document.createElement('div');
        projectContainer.classList.add("projectContainer");
        projectSection.appendChild(projectContainer);
        const radioInput = document.createElement('input');
        radioInput.classList.add("selection");
        radioInput.setAttribute('type', "radio");
        radioInput.setAttribute('name', "selection");
        radioInput.setAttribute('id', "selection");
        projectContainer.appendChild(radioInput);
        const label = document.createElement('label');
        projectContainer.appendChild(label);
        label.setAttribute('for', "selection");
        label.innerText = element.name;

        radioInput.addEventListener('change', () => {
            document.querySelector('#editName').setAttribute('value', element.name);
            document.querySelector('#editDescription').innerText = element.description;
            document.querySelector('#editImage').setAttribute('value', element.image);
            document.querySelector('#editLink').setAttribute('value', element.link);
            document.querySelector('#projectId').setAttribute('value', element._id);
        })
    });
}

fetchProjects('/api-project/admin');