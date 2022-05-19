const btns = document.querySelectorAll('.tab-btn'); // creates a nodelist of buttons
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

// this is a way to practice event targeting
about.addEventListener('click',function(e){
    // console.log(e.target.dataset.id)
    const id = e.target.dataset.id;
    if(id){
        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active')
        });
        // hide other articles
        articles.forEach(function(article){
            article.classList.remove('active')
        })
        const element = document.getElementById(id); // getting element by id by passing id from e.target
        element.classList.add("active");

    }
})


// my solution
// btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         btn.classList.toggle('active');
//         console.log(btn.dataset.id);
//         btns.forEach(function(i){
//             if(btn.dataset.id!=i.dataset.id){
//                 i.classList.remove('active');
//             }
//         });
//         articles.forEach(function(article){
//             if(article.id==btn.dataset.id){
//                 article.classList.add('active')
//             }else{
//                 article.classList.remove('active')
//             }
//         })
//     });
// });

