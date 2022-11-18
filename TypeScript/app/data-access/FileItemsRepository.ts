import * as fs from "fs"
import Item from "../item/Item"
import ItemRepository from "../item/ItemRepository"

class FileItemsRepository {
  constructor(private path: string) {
    this.path = path
  }

  loadItemsFromFiles(): ItemRepository {
    const items: Item[] = []
    const fileContents = fs.readFileSync(this.path, "utf8")
    return new ItemRepository(JSON.parse(fileContents))
  }

  saveItemsToFile(items: ItemRepository): void {
    fs.writeFileSync(this.path, JSON.stringify(items.getInventory()))
  }
}

export const FileItemsRepository
