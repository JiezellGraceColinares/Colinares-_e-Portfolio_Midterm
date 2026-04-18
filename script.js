let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// Typed.js effect
const typed = new Typed('.multiple-text', {
  strings: ['Cavite State University-Tanza', 'Bachelor of Science in Information Technology'],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true
});

function toggleText() {
    let text = document.getElementById("moreText");
    text.style.display = text.style.display === "none" ? "block" : "none";
}

// FORM VALIDATION
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
  const inputs = form.querySelectorAll("input, textarea");
  let valid = true;

  inputs.forEach(input => {
    if (input.value.trim() === "") {
      valid = false;
    }
  });

  if (!valid) {
    e.preventDefault();
    alert("Please fill in all fields!");
  } else {
    e.preventDefault();
    alert("Message sent successfully!");
  }
});