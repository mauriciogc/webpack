import template from './components/card.html';
import './styles/card.scss';

window.onload = function() {
  console.log('Hello world!!!');
  console.info('Its my first webpack :)');

  document.getElementById("app").innerHTML = template;

  const hello = () => console.log("hello world!");
};
