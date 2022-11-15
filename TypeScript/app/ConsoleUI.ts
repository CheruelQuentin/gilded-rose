import ItemRepository from "./item/ItemRepository"
import Shop from "./Shop"

class ConsoleUI {
  shop: Shop
  constructor() {
    this.shop = new Shop(new ItemRepository([]))
  }

  DisplayInventory(): void {
    this.shop.itemRepo.getInventory().forEach(item => {
      console.log(item.toString())
    })
  }

  DisplayBalance(): void {
    console.log("Balance: " + this.shop.itemRepo.getInventory().reduce((acc, item) => acc + item.getValue(), 0))
  }

  UpdateInventory(): void {
    this.shop.updateInventory()
  }

  SellItem(type: string, quality: number): void {
    this.shop.sellItem(type, quality)
  }
}
