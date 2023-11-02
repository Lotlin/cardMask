import IMask from 'imask';
import binking from "binking";
import {inputNumber, inputDate, inputCVV} from './createElements';

const initNumberMask = () => new IMask(inputNumber, {
  mask: binking.defaultResult.cardNumberMask,
});

const initCvvMask = () => new IMask(inputCVV, {
  mask: '000',
});


const initDateMask = () => new IMask(inputDate, {
  mask: 'MM/YY',
  lazy: false,

  blocks: {
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
    },
    YY: {
      mask: IMask.MaskedRange,
      from: 22,
      to: 99,
    },
  },
});

export const initMasks = () => {
  initNumberMask();
  initCvvMask();
  initDateMask();
};
