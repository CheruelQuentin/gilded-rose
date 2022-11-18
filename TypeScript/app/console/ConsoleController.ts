import SellItemRequest from "../shop/SellItemRequest"
import ShopInputBoundary from "../shop/ShopInputBoundary"

class ConsoleController implements ShopInputBoundary {
  constructor(private shopInput: ShopInputBoundary) {
    this.shopInput = shopInput
  }

  updateInventory(): void {
    this.shopInput.updateInventory()
  }

  sellItem(request: SellItemRequest): void {
    this.shopInput.sellItem(request)
  }
}

export default ConsoleController
