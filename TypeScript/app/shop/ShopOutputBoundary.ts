import ItemResponse from "./ItemResponse"
interface ShopOutputBoundary {
  displayInventory(inventory : ItemResponse[])
  displayBalance(balance: number)
}
export default ShopOutputBoundary