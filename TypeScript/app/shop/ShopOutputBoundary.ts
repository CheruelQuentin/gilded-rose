import ItemResponse from "./ItemResponse"
interface ShopOutputBoundary {
  DisplayInventory(inventory : ItemResponse[])
  DisplayBalance(balance: number)
}
export default ShopOutputBoundary