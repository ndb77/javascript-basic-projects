// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert')
const form = document.querySelector('.grocery-form')
const grocery_name = document.getElementById('grocery-name')
const container = document.querySelector('.grocery-container')
const grocery_list = document.querySelector('.grocery-list')
const submit_btn = document.querySelector('.submit-btn')
const clear_btn = document.querySelector('.clear-btn')

// edit option - empty values because the thing to edit must be selected and assigned dynamically by user
let editElement;
let editFlag = false;
let editID = '';
// ****** EVENT LISTENERS **********

//submit form - when the grocery-form is submitted, do this
form.addEventListener('submit',addItem)
//clear items
clear_btn.addEventListener('click',clearItems)
// ****** FUNCTIONS **********
function addItem(e){
    e.preventDefault();
    const grocery_value = grocery_name.value;
    const id = new Date().getTime().toString();
    if(grocery_value && !editFlag){ // not empty and edit flag is false --> add new item to list
        // want to create a grocery item.
        const element = document.createElement('article')
        // add class
        element.classList.add('grocery-item')
        // add id
        const attr = document.createAttribute('data-id')
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `<p class="title">${grocery_value}</p>
        <div class="btn-container">
          <button class="edit-button">
            <i class="fas fa-edit">Edit</i>
          </button>
          <button class="delete-button">
            <i class="fas fa-trash">Delete</i>
          </button>
        </div>`
        //append the item to the rest of the grocery list
        grocery_list.appendChild(element);
        //display alert
        display_alert('item was added', 'success');
        // show container for the list
        container.classList.add('show-container')
        // add to local storage
        addToLocalStorage(id,grocery_value);
        //set back to default
        setBackToDefault();
    }
    else if(!grocery_value && editFlag){ // not empty and edit flag is true --> edit existing item in list

    }else{ // empty --> don't add or edit anything
        display_alert('Please Enter Value','danger')
    }
}

// clear items will select all elements with the grocery-item class and delete them
function clearItems(){
    console.log('clicked clear')
    const items = document.querySelectorAll('.grocery-item')
    if(items.length>0){ // if the list has items in it, go through the list and remove each item
        items.forEach(function(item){
            grocery_list.removeChild(item);
        });
    }
    container.classList.remove('show-container');
    display_alert('Emptied the list!', 'danger');
    localStorage.removeItem('list') //placeholder
    setBackToDefault();
}

// display alert
function display_alert(text,action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    // remove alert
    setTimeout(function(){
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);       
    },1000)
}

function setBackToDefault(){
    console.log('set back to default')
    grocery_name.value = "";
    editFlag = false;
    editID = "";
    submit_btn.textContent = "submit";

}

// ****** LOCAL STORAGE **********
// add to local storage 
function addToLocalStorage(id,value){
    console.log('add to local storage')
}
// ****** SETUP ITEMS **********
