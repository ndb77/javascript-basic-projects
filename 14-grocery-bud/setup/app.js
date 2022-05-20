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
// this works for both adding and editing, as the add button becomes submit button after the edit button on dynamically created items get clicked
form.addEventListener('submit',addItem)
//clear items
clear_btn.addEventListener('click',clearItems)

// ****** FUNCTIONS **********
function addItem(e){
    e.preventDefault();
    // grocery_value is what is currently in the form input bar
    const grocery_value = grocery_name.value;
    const id = new Date().getTime().toString();
    if(grocery_value !=="" && !editFlag){ // not empty and edit flag is false --> add new item to list
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
        </div>`;

        //append the item to the rest of the grocery list
        grocery_list.appendChild(element);
        //display alert
        display_alert('item was added', 'success');
        // show container for the list
        container.classList.add('show-container');

        // these functions must be created dynamically because they are  
        // accessible only after a grocery_value is added to the grocery list
        // delete function
        const delete_btn = element.querySelector('.delete-button');
        delete_btn.addEventListener('click',deleteItem);
        // edit function 
        const edit_btn = element.querySelector('.edit-button');
        edit_btn.addEventListener('click',editItem);
        // add to local storage
        addToLocalStorage(id,grocery_value);
        //set back to default
        setBackToDefault();
    }
    else if(grocery_value !=="" && editFlag){ // not empty and edit flag is true --> edit existing item in list
        // the editElement is set when an edit button is clicked on
        // when edit button is clicked, the submit button is set to "edit" with an eventListener
        editElement.innerHTML = grocery_value; 
        display_alert("value changed", "success");
        // edit local storage
        editLocalStorage(editID,grocery_value)
        setBackToDefault()
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


function deleteItem(click_event){
     // look at the clicked button, and go up 2 parent elements to get grocery-item
     // element is the 2nd order parent of the current target(delete button)
    // console.log(click_event.currentTarget.parentElement.parentElement)
    // console.log(grocery_list.querySelectorAll('.grocery-item'))
    const element = click_event.currentTarget.parentElement.parentElement;
    console.log(element);
    const id = element.dataset.id;
    grocery_list.removeChild(element)
    if(grocery_list.children.length===0){
        container.classList.remove("show-container")
    }
    display_alert('item removed!','danger');
    setBackToDefault();
    // remove from local storage
    // removeFromLocalStorage(id);
}

function editItem(e){
    // getting the grocery item paragraph
    const element = e.currentTarget.parentElement.parentElement;
    //set form value
    //set edit item
    console.log(e.currentTarget)
    editElement = e.currentTarget.parentElement.previousElementSibling;
    
    // setting the input form to be the selected item
    grocery_name.value = editElement.innerHTML
    editFlag = true;
    editID = element.dataset.id;

    submit_btn.textContent = "edit";
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
    // console.log('set back to default')
    grocery_name.value = "";
    editFlag = false;
    editID = "";
    submit_btn.textContent = "submit";

}

// ****** LOCAL STORAGE **********
// add to local storage 
function addToLocalStorage(id,value){
    // console.log('add to local storage')
}
function removeFromLocalStorage(id){

}

function editLocalStorage(id,value){
    console.log(id)
    console.log(value)

}
// ****** SETUP ITEMS **********
