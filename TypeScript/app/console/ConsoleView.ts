import ItemResponse from "../shop/ItemResponse"
import ShopOutputBoundary from "../shop/ShopOutputBoundary"

class ConsoleView implements ShopOutputBoundary {
  constructor(private shopOutputBoundary: ShopOutputBoundary) {
    this.shopOutputBoundary = shopOutputBoundary
  }

  displayInventory(inventory: ItemResponse[]) {
    this.shopOutputBoundary.displayInventory(inventory)
  }

  displayBalance(balance: number) {
    this.shopOutputBoundary.displayBalance(balance)
  }
}

export default ConsoleView
