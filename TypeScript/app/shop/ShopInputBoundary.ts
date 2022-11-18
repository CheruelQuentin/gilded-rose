import SellItemRequest from "./SellItemRequest"

interface ShopInputBoundary {
  updateInventory(): void
  sellItem(request: SellItemRequest): void
}

export default ShopInputBoundary
