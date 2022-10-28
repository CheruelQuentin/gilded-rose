abstract class Item {
  constructor(public name: string, public sellIn: number, public quality: number, public basePrice: number) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
    this.basePrice = basePrice
  }

  abstract update(): void

  getValue() {
    return this.basePrice
  }
}

export default Item
