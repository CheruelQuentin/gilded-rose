import Item from "./Item"

class GenericItem extends Item {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality)
  }

  update(): void {
    this.sellIn -= 1
    this.quality -= 1
    if (this.sellIn < 0) {
      this.quality -= 1
    }
    if (this.quality < 0) {
      this.quality = 0
    }
  }
}
