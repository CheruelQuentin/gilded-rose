import Item from "./Item"

class ConjuredItem extends Item {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality)
  }

  update(): void {
    this.sellIn -= 1
    this.quality -= 2
    if (this.sellIn < 0) {
      this.quality -= 2
    }
    if (this.quality < 0) {
      this.quality = 0
    }
  }
}

export default ConjuredItem
