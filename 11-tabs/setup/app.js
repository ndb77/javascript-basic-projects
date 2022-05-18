const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn'); // creates a nodelist of buttons
const articles = document.querySelectorAll('.content');

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        btn.classList.toggle('active');
        console.log(btn.dataset.id);
        btns.forEach(function(i){
            if(btn.dataset.id!=i.dataset.id){
                i.classList.remove('active');
            }
        });
        articles.forEach(function(article){
            if(article.id==btn.dataset.id){
                article.classList.add('active')
            }else{
                article.classList.remove('active')
            }
        })
    });
});

articles.forEach(function(article){
    console.log(article.id)
})
