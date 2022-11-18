import ItemResponse from "./ItemResponse"
interface ShopOutputBoundary {
  displayInventory(inventory: ItemResponse[])
  displayBalance()
}
export default ShopOutputBoundary
