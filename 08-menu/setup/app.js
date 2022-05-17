// normally, you need to get the data from a server(AJAX: With Ajax, web applications can send and retrieve data from a server asynchronously without interfering with the display and behaviour of the existing page.)

const menuList = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 36.99,
    img: "./images/item-10.jpeg",
    desc: `yummy in my tummy steak`,
  },
];

const section_center = document.querySelector('.section-center') // all of the menu items are encapulated by this class
const filterBtns = document.querySelectorAll('.filter-btn') // selects all of the filter buttons
// console.log(filterBtns)

// load items
window.addEventListener('DOMContentLoaded',function(){
  console.log(menuList)
  displayMenuItems(menuList);
  // console.log(displayMenu);
});

// filter items
// adding an event listener to all filterBtns
// when a filter button is clicked, the e.current.target.dataset.id is set to category
// the menuCategory is built by filtering the menuList 
filterBtns.forEach(function(filter_btn){
  filter_btn.addEventListener('click',function(e){
    console.log(e.currentTarget.dataset.id)
    const category = e.currentTarget.dataset.id; // clicked category
    const menuCategory = menuList.filter(function(menuItem){
      // console.log(menuItem)
      if(menuItem.category == category){
        return menuItem
      }
    });
    if(category=="all"){
      displayMenuItems(menuList)
    }else{
      displayMenuItems(menuCategory)
    }
    console.log(menuCategory);
  });
});

// filterBtns.forEach(function(filter_button){ // question is a value in the questionList 
//   // console.log(filter_button);
//   filter_button.addEventListener('click',function(){
//     if(filter_button.innerText=="All"){
//       console.log('All Clicked!')
//     }
//     if(filter_button.innerText=="Breakfast"){
//       console.log('Breakfast Clicked!')
//       displayBreakfast(menuList);
//     }
//     if(filter_button.innerText=="Lunch"){
//       console.log('Lunch Clicked!')
//     }
//     if(filter_button.innerText=="Shakes"){
//       console.log('Shakes Clicked!')
//     }
//   });
  
// });

function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function(item){ // the iterator variable is every item in the menuList
    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title}/>
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
      </header>
      <p class="item-text">${item.desc}</p>
    </div>
  </article>`
    }); // converts the menuItem into formatted HTML
    displayMenu = displayMenu.join(""); // the list with formatted HTML is joined together. 
    section_center.innerHTML = displayMenu; // sets the section_center to be the displayMenu
}


// my solution - for breakfast menu only, proof of concept

// function displayBreakfast(menuItems){
//   let displayBreakfastItems = menuItems.map(function(item){ // the iterator variable is every item in the menuList
//     // Goal: Filter the menuItems list according to breakfast
//       if(item.category=="breakfast"){
//         return `<article class="menu-item">
//           <img src=${item.img} class="photo" alt=${item.title}/>
//           <div class="item-info">
//             <header>
//               <h4>${item.title}</h4>
//               <h4 class="price">${item.price}</h4>
//             </header>
//             <p class="item-text">${item.desc}</p>
//           </div>
//         </article>`
//       }
//     });
//     displayBreakfastItems = displayBreakfastItems.join(""); // the list with formatted HTML is joined together. 
//     section_center.innerHTML = displayBreakfastItems; // sets the section_center to be the displayMenu
// }