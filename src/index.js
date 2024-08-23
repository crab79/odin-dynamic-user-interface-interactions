console.log('test!');
import "./style.scss";
import logoSrc from "../img/crab.png";
import {tab_about } from "./tab-about";
import {tab_home} from "./tab-home";
import {tab_menu} from "./tab-menu";
// header
const header = document.querySelector('header');
const header_title = document.createElement('div');
const nav = header.querySelector('nav');
const tabs = header.querySelectorAll('button');
const about = tabs[0];
const home = tabs[1];
const menu = tabs[2];
header.insertBefore(header_title, nav);
header_title.setAttribute('id', 'title');
header_title.textContent = "Crab's restaurant";
about.id = "about";
about.textContent = "About";
home.id = "home";
home.textContent = "Home";
menu.id = "menu";
menu.textContent = "Menu";

about.addEventListener('click',() => {
    tab_about();
})

home.addEventListener('click',() => {
    tab_home();
})

menu.addEventListener('click',() => {
    tab_menu();
})

// content
const content = document.getElementById('content');
const leftPart = document.createElement('div');
const rightPart = document.createElement('div');
const logoImg = document.createElement('img');
const leftPart_title = document.createElement('h1');
const rightPart_slogan = document.createElement('h2');
logoImg.src = logoSrc;
logoImg.id = 'logo';
leftPart_title.id = 'logo_title';
leftPart_title.innerHTML = "Crab's<br>Restaurant";
rightPart_slogan.id = 'slogan';
rightPart_slogan.textContent = 'Welcome to my world!';
leftPart.setAttribute('id', 'leftPart');
rightPart.setAttribute('id', 'rightPart');
content.appendChild(leftPart);
content.appendChild(rightPart);
leftPart.append(logoImg);
leftPart.append(leftPart_title);
rightPart.append(rightPart_slogan);



