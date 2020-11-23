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

// getting all sections form the DOM
const sectionsList = document.querySelectorAll('main section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// build nav helpers
/**
  * @description building the navigation bar
  * @constructor
  * @param sectionsList list of all sections
 */

function buildNav(sectionsList) {
    const frag = document.createDocumentFragment();
    for (section of sectionsList) {
        const sectionName = section.querySelector('h2').textContent;
        const li = document.createElement('li');
        const a = document.createElement('a');

        a.textContent = sectionName;
        a.setAttribute('class', 'menu__link');

        li.appendChild(a);
        frag.appendChild(li);
    }
    const navBarList = document.querySelector('#navbar__list');
    navBarList.appendChild(frag);
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
buildNav(sectionsList);


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


