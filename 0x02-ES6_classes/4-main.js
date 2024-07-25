/* eslint-disable import/extensions */
import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

// eslint-disable-next-line quotes
const p = new Pricing(100, new Currency("KSH", "Kenyan Shillings"));
console.log(p);
console.log(p.displayFullPrice());
