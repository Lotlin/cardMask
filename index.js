import {setChildren} from 'redom';
import {card} from '/modules/createElements';
import {cardControl} from './modules/control';


const init = () => {
  setChildren(document.body, card());
  cardControl();
};

init();
