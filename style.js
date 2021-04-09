var burger=document.querySelector('.burger')
var nav=document.querySelector('.nav-links')

const navSlide = () =>{
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');

    })    
}
navSlide();


var f,t;

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('select-from')
    .addEventListener('input', handleSelectFrom);

    document.getElementById('select-to')
    .addEventListener('input', handleSelectTo)

    document.getElementById('search')
    .addEventListener('click', ()=>{
        
         localStorage.setItem('From',f)
         localStorage.setItem('To',t)
       
        location.replace("https://www.google.com")
    })
})

function  handleSelectFrom(){
    let select = document.getElementById('select-from')
    f = select.value;
    console.log(select.value)
}

function  handleSelectTo(){
    let select = document.getElementById('select-to')
    t  = select.value;
    console.log(select.value)
}


window.addEventListener( "pageshow", function ( event ) {
  var historyTraversal = event.persisted || ( typeof window.performance != "undefined" && window.performance.navigation.type === 2 );
  if ( historyTraversal ) {
    window.location.reload();
  }
});
