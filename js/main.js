let t1;
let popcat = false;
const cat = new Audio('popcat.mp3');

document.querySelector('.popcat').addEventListener('click', function() {
  if(popcat === false) {
    cat.play();
    document.querySelector('.popcat').addEventListener('click', popcatCl);
    console.log(cat);
  } else {
    popcat = false
    document.querySelector('.popcat').removeEventListener('click', popcatCl);
  }
});




function popcatCl() {
  this.classList.add('popcat_click');
  stopPopcat();
}

function stopPopcat() {
  t1 = setTimeout(()=>{
    document.querySelector('.popcat').classList.remove('popcat_click')
  }, 200)
}