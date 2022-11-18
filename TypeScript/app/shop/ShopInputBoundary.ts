import SellItemRequest from "./SellItemRequest"

abstract class ShopInputBoundary {
  abstract updateInventory(): void
  abstract sellItem(request: SellItemRequest): void
}

export default ShopInputBoundary
