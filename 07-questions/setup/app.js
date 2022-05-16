// // traversing the dom
// const btns = document.querySelectorAll('.question-btn'); // selecting all that have the .queston-btn class
// btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         e.currentTarget.parentElement.parentElement.classList.toggle('show-text');
//     })
// })


//using selectors inside the element

// All of the buttons have eventListeners put onto them
const questionsList = document.querySelectorAll('.question'); // selecting all that have the .queston class (articles)
console.log(questionsList)
questionsList.forEach(function(question){ // question is a value in the questionList 
    console.log(question);
    const btn = question.querySelector('.question-btn'); // assigns btn to the first element with classname = .question-btn within the question parent class
    btn.addEventListener('click',function(){ // adds an eventListener. Read function() only when clicked
        questionsList.forEach(function(item){ // go through the questionList 
            if(question===item){ // check if the button clicked(question) is the same as the current question selected by the iterator(item).
                item.classList.toggle('show-text')
            }else{
                item.classList.remove('show-text')
            }
        })
    })
    
})

