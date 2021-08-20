const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");


// event listeners, more complex but best method bc we can also allow multiple event listeners if the need arises 
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});


btn3.addEventListener('click', function (e) {
    console.log(e.target);
    e.target.style.background = 'blue';
  });



// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});