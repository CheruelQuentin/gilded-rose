import Item from "./Item"

class EventItem extends Item {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality)
  }

  update(): void {
    this.sellIn -= 1
    this.quality += 1
    if (this.sellIn < 10) {
      this.quality += 1
    }
    if (this.sellIn < 5) {
      this.quality += 1
    }
    if (this.sellIn < 0) {
      this.quality = 0
    }
    if (this.quality > 50) {
      this.quality = 50
    }
  }
}
