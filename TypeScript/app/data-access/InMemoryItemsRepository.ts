import Item from "../item/Item"
import ItemsGateway from "../item/ItemsGateway"

class InMemoryItemsRepository implements ItemsGateway {
  constructor() {}

  getInventory(): Item[] {
    throw new Error("Method not implemented.")
  }

  findItem(type: string, quality: number): Item {
    throw new Error("Method not implemented.")
  }

  saveInventory(items: Item[]): void {
    throw new Error("Method not implemented.")
  }
}

export default InMemoryItemsRepository
