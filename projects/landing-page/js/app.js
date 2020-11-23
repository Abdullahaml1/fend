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
 * @description it calculates the absolute position of an object element
 *              it was taken from here: https://www.aspsnippets.com/Articles/Get-Absolute-Position-Screen-Cordinates-of-HTML-Elements-using-JavaScript.aspx
 * @constructor 
 * @param obj the element object 
 * @return the position of the  object
 **/


function getAbsolutePosition(obj) {
    let p = P={};
    p.x = obj.offsetLeft;
    p.y = obj.offsetTop;
    while (obj.offsetParent) {
        p.x = p.x + obj.offsetParent.offsetLeft;
        p.y = p.y + obj.offsetParent.offsetTop;
        if (obj == document.getElementsByTagName("body")[0]) {
            break;
        }
        else {
            obj = obj.offsetParent;
        }
    }
    return p;

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
        // a.setAttribute('href', `#${sectionId}`); // anchor to every section

        li.appendChild(a);
        frag.appendChild(li);
    }
    // attaching the lis to the navbarlist
    const navBarList = document.querySelector('#navbar__list');
    navBarList.appendChild(frag);
}




// Add class 'active' to section when near top of viewport

/**
  * @description adding lisetening event when all sections of sectionsList in
  *              viewport
  * @constructor
 **/
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
  * @description scrolls to an element by absolute position
  * constructor
  * @param element the element to scroll to
 **/
function scrollToElelement(element) {
    const p = getAbsolutePosition(element);
    const header = document.querySelector('.page__header');
    p.y -= header.offsetHeight;
    scrollTo(p.x, p.y);
}



/**
  * @description adding listening events if a click occurred on the nabvar menu
  * @constructor
 **/
function goToAnchorEvents() {
    const navLiList = document.querySelectorAll('#navbar__list li');

    for (let i = 0; i <  navLiList.length; i++) {
        navLiList[i].addEventListener('click', function () {
            scrollToElelement(sectionsList[i]);
        });
    }

}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav(sectionsList);

// Scroll to section on link click
goToAnchorEvents();

// Set sections as active
document.addEventListener('scroll', activateSectionInNearViewport);


