/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
let navbarLinks = document.getElementById('navbar__list');
let sections = document.getElementsByTagName('section');
const fragment = document.createDocumentFragment();
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

function buildNav() {
  for (const section of sections) {
    const newElement = document.createElement('li');
    newElement.setAttribute('id', `l${section.id}`);
    newElement.innerHTML = `<a class="menu__link"  href="#${section.id}" > ${section.dataset.nav}</a>`;
    fragment.appendChild(newElement);
  }
  navbarLinks.appendChild(fragment);
}
buildNav();
//   };
// }

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active with 'your-active-class' and remove while not active
//add 'active' class to highlight respective link and remove while not active
let callback = (entries) => {
  for (const entery of entries) {
    const listSelector = document.getElementById(`l${entery.target.id}`);

    if (entery && entery.isIntersecting) {
      document
        .getElementById(entery.target.id)
        .classList.add('your-active-class');
      listSelector.classList.add('active');
    }
    if (!(entery && entery.isIntersecting)) {
      document
        .getElementById(entery.target.id)
        .classList.remove('your-active-class');
      listSelector.classList.remove('active');
    }
  }
};
// root Defaults to the browser viewport if not specified
// Margin around the root set to 0
// threshold:what percentage of the target's visibility the observer's callback should execute
let options = {
  rootMargin: '0px',
  threshold: 0.7,
};

//creating an object "observer" by calling its constructor
//callback will be called upon target interaction with viewport
//obseving all the sections part
let observer = new IntersectionObserver(callback, options);
for (const part of sections) {
  observer.observe(document.getElementById(part.id));
}
