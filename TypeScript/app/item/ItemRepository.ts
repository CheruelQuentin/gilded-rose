import InMemoryItemsRepository from "../data-access/InMemoryItemsRepository"
import Item from "./Item"

class ItemRepository {
  private items: Item[]
  constructor() {
    this.items = new InMemoryItemsRepository("inv.json").getItems()
  }

  getInventory(): Item[] {
    return this.items
  }

  saveIntenvory(items: Item[]): void {
    this.items = items
  }

  findItem(type: string, quality: number): Item {
    const itemReturn = this.items.find(item => item.type.toString() === type && item.quality === quality)
    if (itemReturn === undefined) {
      throw new Error("Item not found")
    }
    return itemReturn
  }
}

export default ItemRepository
