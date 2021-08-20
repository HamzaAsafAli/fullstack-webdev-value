const container = document.querySelector('#container'); // selects html element which already exists.
const content = document.createElement('p'); // create new paragraph element
//content.classList.add('content');
content.style.color = 'red';   
content.textContent = 'Hey I’m red!';
container.appendChild(content);

const heading = document.createElement('h3');
heading.style.color = 'blue';
heading.textContent = 'I’m a blue h3!';
container.appendChild(heading);

const box = document.createElement('div');
box.style.backgroundColor = 'pink';
box.style.borderStyle = 'solid';
box.style.borderColor = 'black';
const heading1 = document.createElement('h1');
heading1.textContent = 'I’m in a div';
const par2 = document.createElement('p');
par2.textContent = 'ME TOO!';
box.appendChild(heading1);
box.appendChild(par2);

container.appendChild(box);