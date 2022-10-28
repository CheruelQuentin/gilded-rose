import Item from "./Item"

class Shop {
  constructor(public items: Item[]) {
    this.items = items
  }

  updateInventory() {
    this.items.forEach((item) => item.update())
  }
}

export default Shop
