const data = [
  {
    name: "Forge Your Mind",
    description: "Lorem ipsum dolor sit amet, Nullam in feugiat augue.",
    link: "#",
    image:
      "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fHww",
  },
  {
    name: "Personal Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. at luctus massa arcu eget neque. Nullam in feugiat augue.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fHww",
  },
  {
    name: "Hello World!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam, sapien sit amet hendrerit aliquet, ante tortor tempus est, at luctus massa arcu eget neque. Nullam in feugiat augue.",
    link: "#",
    image:
      "https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww",
  },
  {
    name: "DNS Changer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam, sapien sit amet hendrerit aliquet, ante tortor tempus est, at luctus massa arcu eget neque. Nullam in feugiat augue.",
    link: "#",
    image:
      "https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Data Structure",
    description:
      "Lorem ipsum dolor sit amet, consectetur, sapien sit amet hendrerit aliquet, ante tortor tempus est, at luctus massa arcu eget neque. Nullam in feugiat augue.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Algorithms in C++",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

function makeCard(data, container) {
  data.forEach((project) => {
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
    console.log(a);
    container.appendChild(a);
  });
}

let projectCard = document.querySelector(".project-cards");
let latestCard = document.querySelector(".latest-project-cards");
if (latestCard) {
  makeCard(data, latestCard);
} else {
  makeCard(data, projectCard);
}
