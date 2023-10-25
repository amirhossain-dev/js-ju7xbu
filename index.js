// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
const date = new Date().toLocaleString();
const dateEl = document.createElement('div');
dateEl.innerText = date;
appDiv.appendChild(dateEl);
//appDiv.innerHTML = `<h1>JS Starter</h1>`;
//console.log(new Date())
