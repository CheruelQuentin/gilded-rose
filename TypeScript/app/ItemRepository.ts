import Item from "./Item"

class ItemRepository {
  constructor(private items: Item[]) {
    this.items = items
  }

  getInventory(): Item[] {
    return this.items
  }

  saveIntenvory(items: Item[]): void {
    this.items = items
  }
}

export default ItemRepository
