// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles     class

const navToggle = document.querySelector('.nav-toggle') // getting all elements that have this as their class
const links = document.querySelector('.links') // getting all elements that have this as their class


navToggle.addEventListener('click',function(){
    links.classList.toggle('show-links') // toggling the css onto the elements containing .links
                                         // note that the .links class has height to auto with overflow to hidden and the show-links set to 10.
                                         // this allows the navbar to become unhidden when possible, and hides when text overflow happens
    console.log(links.classList)
})

