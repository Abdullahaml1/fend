# Landing Page Project

## Table of Contents

* [Introduction](#introduction)
* [Features](#features)
* [Notes](#notes)
    * [Scroll to Anchor](#scroll-to-anchor)
    * [Getting Absolute Position of an Element](#getting-absolute-position-of-an-element)
    

## Introduction 
This project aims to build a website that use the same javascript code whenever we added more content (section in the html) the code behaves the same in all devices desktop screen, phones, tablets.

## Features
| CRITERIA             | DESCRIPTION                                                                   |
| -------------------- | ----------------------------------------------------------------------------  |
| Navigation           | Navigation is built dynamically as an unordered list.                         |
| Section Active State | We activate the section in viewport.                                          |
| Scroll to Anchor     | We made it with two ways: using `href` attribute in `a` tag, and using events |


## Notes 
### Scroll to Anchor

scrolling to anchor using `href` attribute using `a` tag is much simpler: 
```javascript
a.setAttribute('href', `#${sectionId}`); // anchor to every section
```
But, I did it with events too in oreder to practice javascript.

### Getting absolute Position of an Element
I used code form [this webiste](https://www.aspsnippets.com/Articles/Get-Absolute-Position-Screen-Cordinates-of-HTML-Elements-using-JavaScript.aspx) to find the absolute position of an element.
```javascript
    function GetScreenCordinates(obj) {
        var p = {};
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
```
Great thanks to them !.



