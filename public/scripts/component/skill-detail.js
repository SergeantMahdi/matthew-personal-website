const detail = document.querySelector('.detail');

const skillText = {
    js: "jdjdjd",
    html: "ddda a html",
    css: "I embarked on my CSS journey through a Udemy course. Initially, navigating the intricacies of CSS posed a formidable challenge. Yet, I persevered by crafting my own website from scratch. This hands-on experience not only honed my CSS skills but also reinforced my understanding of web development",
    cpp: "cpp",
    qt: "qt",
    react: "react",
    mongo: "mongo",
    defaultText:'CLICK ON ONE OF THE SKILLS TO SEE THE DETAIL'
}


function importText(text) {
    detail.innerText = text;
}

document.addEventListener("DOMContentLoaded", () => {
    //Set default text
    detail.innerText = skillText.defaultText;

    const skillCards = document.querySelectorAll('.skill-card')

    skillCards.forEach(card => {
        //Get the data-target attribute
        let target = card.getAttribute('data-target');

        //import the text of every card by it's attribute
        card.addEventListener('click', () => importText(skillText[target]))

    })
});