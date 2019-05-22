//Header JS
const headerBar = document.querySelectorAll(".header");
const mainDiv = document.querySelector(".main-content-container");
console.dir(mainDiv);
console.log(headerBar);
// window.addEventListener("scroll", e => {
//   e.target.style.backgroundColor = "rgba(0, 0, 128, 0.7)";
// });

// Menu JS

const toggleMenu = () => {
  menu[0].classList.toggle("menu--open");
};

const menu = document.querySelectorAll(".menu");
const menuButton = document.querySelectorAll(".menu-button");

menuButton[0].addEventListener("click", e => {
  toggleMenu();
});

// Text Enlarger
const txtContent = document.querySelectorAll("p");

txtContent.forEach(p =>
  p.addEventListener("dblclick", event => {
    event.target.style.fontSize = "2rem";
  })
);

// Team Member Objects

class teamMember {
  constructor(attrs) {
    this.name = attrs.name;
    this.position = attrs.position;
    this.jobDescription = attrs.jobDescription;
  }
}

const nikita = new teamMember({
  name: "Nikita Thomas",
  position: "Team Leader",
  jobDescription: "Worked with..."
});

const andrew = new teamMember({
  name: "Andrew Safran",
  position: "Back End Design",
  jobDescription: "Worked with..."
});

const charles = new teamMember({
  name: "Charles Rogers",
  position: "Front End Design",
  jobDescription: "Worked with..."
});

const derek = new teamMember({
  name: "Derek Schwantner",
  position: "UI Designer",
  jobDescription: "Worked with..."
});

console.log(derek);

const clark = new teamMember({
  name: "Clark Williams",
  position: "UI Designer",
  jobDescription: "Worked with..."
});

const teamMembers = [nikita, andrew, charles, derek, clark];

const memberCards = document.querySelectorAll(".mem-card h2");

memberCards.forEach((card, index) => {
  card.textContent = `Meet ${teamMembers[index].name}!`;
});

//Member img Description Event

const memImage = document.querySelectorAll(".member-img");
console.log(memImage);

memImage.forEach(p =>
  p.addEventListener("dblclick", event => {
    alert("description");
  })
);
