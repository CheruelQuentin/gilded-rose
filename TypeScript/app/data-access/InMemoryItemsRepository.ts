import Item from "../item/Item"
import ItemRepository from "../item/ItemRepository"
import FileItemsRepository from "./FileItemsRepository"

class InMemoryItemsRepository {
  fileItemRepository: FileItemsRepository
  constructor(private path: string) {
    this.path = path
    this.fileItemRepository = new FileItemsRepository(this.path)
  }

  getItems(): Item[] {
    return this.fileItemRepository.loadItemsFromFiles()
  }

  saveItemRepository(itemRepository: ItemRepository): void {
    this.fileItemRepository.saveItemsToFile(itemRepository)
  }
}

export default InMemoryItemsRepository
