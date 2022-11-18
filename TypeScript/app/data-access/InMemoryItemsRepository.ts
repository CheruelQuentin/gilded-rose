import AgingItem from "../item/AgingItem"
import ConjuredItem from "../item/ConjuredItem"
import EventItem from "../item/EventItem"
import GenericItem from "../item/GenericItem"
import Item from "../item/Item"
import ItemsGateway from "../item/ItemsGateway"
import LegendaryItem from "../item/LegendaryItem"

class InMemoryItemsRepository implements ItemsGateway {
  items: Item[]
  constructor() {
    this.items = [
      //name, sellIn, quality, type
      new GenericItem("foo", 10, 10, 5),
      new GenericItem("bar", 1, 11, 5),
      new LegendaryItem("Sulfuras", 5, 80, 1500),
      new LegendaryItem("Varus", 0, 80, 1500),
      new ConjuredItem("Snake venom", 4, 50, 32),
      new ConjuredItem("Mad genie lamp", 0, 50, 100),
      new AgingItem("Aged Brie", 23, 17, 3),
      new AgingItem("Aged mimolette", 0, 17, 7),
      new EventItem("Backstage Pass new", 10, 49, 0),
      new EventItem("Backstage Pass old", -1, 49, 0),
    ]
  }

  getInventory(): Item[] {
    return this.items
  }

  findItem(type: string, quality: number): Item {
    const itemReturn = this.items.find(item => item.type.toString() === type && item.quality === quality)
    if (itemReturn === undefined) {
      throw new Error("Item not found")
    }
    return itemReturn
  }

  saveInventory(items: Item[]): void {
    this.items = items
  }
}

export default InMemoryItemsRepository
