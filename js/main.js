/* TODO: convert to FPY example  */

/* store the result of the selct dropdown */
var select = document.querySelector('select');


var para = document.querySelector('p'); 

select.addEventListener('change', submitChoice);

function submitChoice() {
  var choice = select.value;

/* TODO: convert to sending data to db */

  if(choice === 'reset') {
    para.textContent = 'You chose reset.';
  } else if(choice === 'frozen') {
    para.textContent = 'You chose frozen.';
  } else {
    para.textContent = '';
  }

}