/*
1. Adicionar um item no carrinho
2. Adicionar 3% de taxa para o item no carrinho
3. Comprar um item
4. Esvaziar o carrinho
*/

type Buyer = {
  name: string;
  actived: boolean;
  cart: never[];
  purchases: [];
};

const fernando: Buyer = {
  name: 'Fernando',
  actived: true,
  cart: [],
  purchases: [],
};

type Item = {
  name: string;
  price: number;
}

const compose = (f: Function, g: Function) => (...args: any) => f(g(...args));

function purchaseItem(...fns: Function[]) {
  return fns.reduce((compose as any));
}

function addItemToCart(user: Buyer, item: never) {
  const updateCart = user.cart.concat(item);
  return { ...user, cart: updateCart };
}
function apllyTaxToItem(user: Buyer) {
  const { cart } = user;
  const taxRate = 1.03;
  const updatedCart = cart.map((item: Item) => ({
    name: item.name,
    price: item.price * taxRate,
  }));

  return { ...user, cart: updatedCart };
}
function buyItem(user: Buyer) {
  return { ...user, purchases: user.cart };
}
function emptyCart(user: Buyer) {
  return { ...user, cart: [] };
}

console.log(purchaseItem(
  emptyCart,
  buyItem,
  apllyTaxToItem,
  addItemToCart,
)(fernando, { name: 'Notebook', price: 14 }));
