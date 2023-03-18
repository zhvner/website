// Get references to the buttons
const homeBtn = document.getElementById('home-btn');
const aboutBtn = document.getElementById('about-btn');
const portfolioBtn = document.getElementById('portfolio-btn');
const contactsBtn = document.getElementById('contacts-btn');
const hireMeBtn = document.getElementById('hire-me-btn');

// Attach event listeners to the buttons
homeBtn.addEventListener('click', () => {
  alert('You clicked on the HOME button!');
});

aboutBtn.addEventListener('click', () => {
  alert('You clicked on the ABOUT button!');
});

portfolioBtn.addEventListener('click', () => {
  alert('You clicked on the PORTFOLIO button!');
});

contactsBtn.addEventListener('click', () => {
  alert('You clicked on the CONTACTS button!');
});

hireMeBtn.addEventListener('click', () => {
  alert('You clicked on the HIRE ME button!');
});
