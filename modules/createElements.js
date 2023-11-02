import {el} from 'redom';

export const cardNumber =
  el('span', {className: 'card__number'}, 'xxxx xxxx xxxx xxxx');
export const cardName = el('span', {className: 'card__name'}, 'John Doe');
export const cardDate = el('span', {className: 'card__date'}, '04/24');

export const inputName =
  el('input', {className: 'input input__holder', type: 'text'});
export const inputNumber = el(
    'input',
    {
      className: 'input input__number',
      type: 'text', id: 'cardNumber',
    },
);
export const inputDate =
  el('input', {className: 'input input__date', type: 'text'});
export const inputCVV =
  el('input', {className: 'input input__cvv', type: 'text'});

export const button = el('button', {className: 'form__button'}, 'CHECK OUT');

export const card = () => {
  const wrapper = el('div', {className: 'wrapper'},
      el('div', {className: 'card'},
          el('p', {className: 'secure'}, 'Secure Checkout'),
          el('div', {className: 'credit-card'},
              cardNumber,
              el('div', {className: 'card__personal'},
                  cardName,
                  cardDate,
              ),
          ),
          el('form', {className: 'form', id: 'form', action: '#'},
              el('div', {className: 'form__input-wrap form__input-wrap_holder'},
                  el('label',
                      {className: 'form__label form__holder-label', for: ''},
                      'Card Holder',
                  ),
                  inputName,
              ),
              el('div', {className: 'form__input-wrap form__input-wrap_number'},
                  el('label',
                      {
                        className: 'form__label form__number-label',
                        for: '',
                      },
                      'Card Number',
                  ),
                  inputNumber,
              ),
              el('div', {className: 'form__input-wrap form__input-wrap_date'},
                  el('label',
                      {className: 'form__label form__date-label', for: ''},
                      'Card Expiry',
                  ),
                  inputDate,
              ),
              el('div', {className: 'form__input-wrap form__input-wrap_cvv'},
                  el('label',
                      {className: 'form__label form__cvv-label', for: ''},
                      'CVV',
                  ),
                  inputCVV,
              ),
              button,
          ),
      ),
  );

  return wrapper;
};
