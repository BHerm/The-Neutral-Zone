//get modal element
var modal = document.getElementById('loginmodal');

// get open modal button
var openBtn = document.getElementById('open-button');

//close button
var closeBtn = document.getElementsByClassName('close-button')[0];


//function to open openmodal
function openmodal(){
  modal.style.display = 'block';
}

//function to close openmodal
function closemodal(){
  modal.style.display = 'none';
}

//close modal if click outside box
function outsideClick(e){
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

//listen for click
openBtn.addEventListener('click', openmodal);
closeBtn.addEventListener('click', closemodal);
window.addEventListener('click', outsideClick);
