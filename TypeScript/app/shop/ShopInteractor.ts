import FileItemsRepository from "../data-access/FileItemsRepository"
import Item from "../item/Item"
import ItemsGateway from "../item/ItemsGateway"
import ItemResponse from "./ItemResponse"
import SellItemRequest from "./SellItemRequest"
import ShopInputBoundary from "./ShopInputBoundary"
import ShopOutputBoundary from "./ShopOutputBoundary"

class ShopInteractor implements ItemsGateway, ShopInputBoundary, ShopOutputBoundary {
  fileItemsRepository: ItemsGateway
  items: Item[]
  balance: number
  constructor() {
    this.fileItemsRepository = new FileItemsRepository()
    this.items = []
    this.balance = 0
  }

  displayInventory(inventory: ItemResponse[]) {
    inventory.forEach(item => {
      console.log(`SellIn: ${item.sellIn}, Quality: (${item.quality}), Value: ${item.value}`)
    })
  }

  displayBalance(balance: number) {
    console.log(balance)
  }

  updateInventory(): void {
    this.items.forEach(item => item.update())
    this.saveInventory(this.items)
  }

  sellItem(request: SellItemRequest): void {
    const itemToSell = this.findItem(request.type, request.quality)
    this.items = this.items.filter(item => item !== itemToSell)
    this.balance += itemToSell.basePrice
  }

  getInventory(): Item[] {
    this.items = this.fileItemsRepository.getInventory()
    return this.items
  }

  findItem(type: string, quality: number): Item {
    const itemReturn = this.items.find(item => item.type.toString() === type && item.quality === quality)
    if (itemReturn === undefined) {
      throw new Error("Item not found")
    }
    return itemReturn
  }

  saveInventory(items: Item[]): void {
    this.fileItemsRepository.saveInventory(items)
  }
}

export default ShopInteractor
