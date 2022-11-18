import * as fs from "fs"
import Item from "../item/Item"
import ItemsGateway from "../item/ItemsGateway"

class FileItemsRepository implements ItemsGateway {
  items: Item[]
  path: string
  constructor() {
    this.path = "./inv.json"
    this.items = []
  }

  getInventory(): Item[] {
    const fileContents: Item[] = JSON.parse(fs.readFileSync(this.path, "utf8"))
    return fileContents
  }

  findItem(type: string, quality: number): Item {
    const itemReturn = this.items.find(item => item.type.toString() === type && item.quality === quality)
    if (itemReturn === undefined) {
      throw new Error("Item not found")
    }
    return itemReturn
  }

  saveInventory(items: Item[]): void {
    fs.writeFileSync(this.path, JSON.stringify(items))
  }
}

export default FileItemsRepository
