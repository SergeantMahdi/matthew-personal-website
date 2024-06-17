async function fetchProjects(api) {
    try {
        const response = await fetch(api);
        const Data = await response.json();
        makeSkillCard(Data);
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
}

function makeSkillCard(Data) {
    Data.forEach(element => {
        const skillSelection = document.querySelector('.skillSelection');
        const skillContainer = document.createElement('div');
        skillContainer.classList.add("skillContainer");
        skillSelection.appendChild(skillContainer);
        const sRadioInput = document.createElement('input');
        sRadioInput.classList.add("selection");
        sRadioInput.setAttribute('type', "radio");
        sRadioInput.setAttribute('name', "selection");
        skillContainer.appendChild(sRadioInput);
        const sLabel = document.createElement('Label');
        skillContainer.appendChild(sLabel);
        sLabel.innerText = element.name;

        sRadioInput.addEventListener('change', () => {
            document.querySelector('#SName').setAttribute('value', element.name);
            document.querySelector('#SDescription').innerText = element.description;
            document.querySelector('#SPercentage').setAttribute('value', element.percentage);
            document.querySelector('#skillId').setAttribute('value', element._id);
        })
    });
}

fetchProjects('/api-skill/about');