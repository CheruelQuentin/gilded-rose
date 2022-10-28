import Item from "./Item";

class Shop {
  constructor(public items: Item[]) {
    this.items = items;
  }

  updateInventory() {
    // ...
  }
}

export default Shop;
