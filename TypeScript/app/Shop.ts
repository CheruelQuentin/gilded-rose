import Item from "./Item"

class Shop {
  constructor(public items: Item[]) {
    this.items = items
  }

  updateInventory() {
    this.items.forEach((item) => item.update())
  }
  sellItem(type: string, quality:number) {
    
  }
}

export default Shop
