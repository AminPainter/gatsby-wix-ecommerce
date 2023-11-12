import { proxy } from 'valtio';

const state = proxy({
  isCartOpen: false,
});

export default state;
