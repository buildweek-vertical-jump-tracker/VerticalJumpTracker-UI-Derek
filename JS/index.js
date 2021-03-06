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
  name: "Nikita",
  position: "Team Leader",
  jobDescription: "Worked with..."
});

const andrew = new teamMember({
  name: "Andrew",
  position: "Backend Design",
  jobDescription: "Worked with..."
});

const charles = new teamMember({
  name: "Charles",
  position: "Front End Design",
  jobDescription: "Worked with..."
});

const derek = new teamMember({
  name: "Derek",
  position: "UI Designer",
  jobDescription: "Worked with..."
});

const clark = new teamMember({
  name: "Clark",
  position: "UI Designer",
  jobDescription: "Worked with..."
});

//Using the name  and position properties for each user object to appear on the site introductions to each team member
const teamMembers = [nikita, andrew, charles, derek, clark];

const memberCards = document.querySelectorAll(".mem-card h2");

const memberRole = document.querySelectorAll(".member-p");

memberCards.forEach((card, index) => {
  card.textContent = `Meet ${teamMembers[index].name}!`;
});

memberRole.forEach((card, index) => {
  card.textContent = `${teamMembers[index].position}`;
});

//scroll Nav Animation

// window.onscroll = function() {scrollFunction()};
// function scrollFunction() {
//     if (document.body.scrollTop > 96.8 || document.documentElement.scrollTop > 96.8) {
//         document.getElementById("nav-container").style.opacity = "0.75";
//     } else {
//         document.getElementById("nav-container").style.opacity = "1";
//     }
// }
