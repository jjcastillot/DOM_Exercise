// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.classList.add('red');
paragraph.textContent = 'Hey I’m red!';
paragraph.style.color = 'red';
container.appendChild(paragraph);

const blueText = document.createElement('h3');
blueText.classList.add('blue');
blueText.textContent = 'I’m a blue h3!';
blueText.style.color = 'blue';
container.appendChild(blueText);

// Container 2 with different things

const container2 = document.createElement('div');
container2.classList.add('container2');
container2.setAttribute('style', 'border-style: solid; background: pink;');
container.appendChild(container2);

const newH1 = document.createElement('h1');
newH1.classList.add('newH1');
newH1.textContent = 'I’m in a div';
container2.appendChild(newH1);

const paragraph2 = document.createElement('p');
paragraph2.classList.add('newP');
paragraph2.textContent = 'ME TOO';
paragraph2.style.color = 'green';
container2.appendChild(paragraph2);