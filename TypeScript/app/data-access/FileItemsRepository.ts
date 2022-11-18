import * as fs from "fs"
import Item from "../item/Item"
import ItemRepository from "../item/ItemRepository"

class FileItemsRepository {
  constructor(private path: string) {
    this.path = path
  }

  loadItemsFromFiles(): Item[] {
    const fileContents: Item[] = JSON.parse(fs.readFileSync(this.path, "utf8"))
    return fileContents
  }

  saveItemsToFile(items: ItemRepository): void {
    fs.writeFileSync(this.path, JSON.stringify(items.getInventory()))
  }
}

export default FileItemsRepository
