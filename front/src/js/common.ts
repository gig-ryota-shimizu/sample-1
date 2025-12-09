import {init as dropInit} from './drop.ts';
import {init as fluidInit} from './fluid.ts';

console.log('common');

window.addEventListener('DOMContentLoaded', () => {
  dropInit();
  fluidInit();
});