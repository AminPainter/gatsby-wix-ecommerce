import { proxy } from 'valtio';

const state = proxy({
  isCartOpen: false,
  isSearchOpen: false,
});

export default state;
