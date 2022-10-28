import ItemRepository from "./ItemRepository"

class Shop {
  constructor(public itemRepo: ItemRepository) {
    this.itemRepo = itemRepo
  }

  updateInventory() {
    this.itemRepo.getInventory().forEach((item) => item.update())
  }
  sellItem(type: string, quality:number) {
    
  }
}

export default Shop
