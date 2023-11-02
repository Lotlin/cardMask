import {inputName, inputNumber, inputDate, cardName, cardNumber, cardDate}
  from './createElements';
import {initMasks} from './masks';

export const cardControl = () => {
  inputName.addEventListener('input', () => {
    inputName.value = inputName.value.replace(/[^a-z\s]/ig, '');
  });

  inputName.addEventListener('change', () => {
    cardName.textContent = inputName.value;
  });

  inputNumber.addEventListener('change', () => {
    cardNumber.textContent = inputNumber.value;
  });

  inputDate.addEventListener('change', () => {
    cardDate.textContent = inputDate.value;
  });

  initMasks();
};
