import ItemRepository from "../item/ItemRepository"
import Shop from "../shop/Shop"

class ConsoleUI {
  shop: Shop
  constructor() {
    this.shop = new Shop(new ItemRepository([]))
  }

  displayInventory(): void {
    this.shop.itemRepo.getInventory().forEach(item => {
      console.log(item.toString())
    })
  }

  displayBalance(): void {
    console.log("Balance: " + this.shop.itemRepo.getInventory().reduce((acc, item) => acc + item.getValue(), 0))
  }

  updateInventory(): void {
    this.shop.updateInventory()
  }

  sellItem(type: string, quality: number): void {
    this.shop.sellItem(type, quality)
  }
}

export default ConsoleUI
