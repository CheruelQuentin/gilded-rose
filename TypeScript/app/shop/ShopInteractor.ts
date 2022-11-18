import Item from "../item/Item"
import ItemsGateway from "../item/ItemsGateway"
import ItemResponse from "./ItemResponse"
import SellItemRequest from "./SellItemRequest"
import ShopInputBoundary from "./ShopInputBoundary"
import ShopOutputBoundary from "./ShopOutputBoundary"

class ShopInteractor extends ShopInputBoundary implements ItemsGateway, ShopOutputBoundary {
  
  displayInventory(inventory: ItemResponse[]) {
    throw new Error("Method not implemented.")
  }
  displayBalance(balance: number) {
    throw new Error("Method not implemented.")
  }

  updateInventory(): void {
    throw new Error("Method not implemented.")
  }

  sellItem(request: SellItemRequest): void {
    throw new Error("Method not implemented.")
  }

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

export default ShopInteractor
