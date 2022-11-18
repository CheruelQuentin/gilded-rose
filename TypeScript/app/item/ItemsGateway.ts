import Item from "./Item"

interface ItemsGateway {
  getInventory(): Item[]
  findItem(type: string, quality: number): Item
  saveInventory(items: Item[]): void
}

export default ItemsGateway
