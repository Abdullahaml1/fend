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

const MAX_VIEWPORT_HEIGHT = 220;

// getting all sections form the DOM
const sectionsList = document.querySelectorAll('main section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function isElementNearTopOfViewPort(element) {
    return (element.getBoundingClientRect().top < MAX_VIEWPORT_HEIGHT) &&
        (element.getBoundingClientRect().top >
         (MAX_VIEWPORT_HEIGHT - element.getBoundingClientRect().height/1.1));
}




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav





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
        const sectionId = section.getAttribute('id');

        const li = document.createElement('li');
        const a = document.createElement('a');

        a.textContent = sectionName;
        a.setAttribute('class', 'menu__link'); //adding class name to apply css
        a.setAttribute('href', `#${sectionId}`); // anchor to every section

        li.appendChild(a);
        frag.appendChild(li);
    }
    // attaching the lis to the navbarlist
    const navBarList = document.querySelector('#navbar__list');
    navBarList.appendChild(frag);
}


buildNav(sectionsList);


// Add class 'active' to section when near top of viewport

function activateSectionInNearViewport() {

    let lastSectionIndex = 0;
    for (let i=0; i< sectionsList.length; i++) {

        const section = sectionsList[i];

        if(isElementNearTopOfViewPort(section)) {
            section.classList.add("activate-section");
            lastSectionIndex = i;
            break;
        } else {
            section.classList.remove("activate-section");
        }
    }

    for (let i = lastSectionIndex + 1; i < sectionsList.length; i++) {
        sectionsList[i].classList.remove("activate-section");
    }
}





// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
document.addEventListener('scroll', activateSectionInNearViewport);


