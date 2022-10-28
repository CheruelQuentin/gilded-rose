import Item from "./Item"

class LegendaryItem extends Item {
  constructor(name: string, sellIn: number, quality: number, basePrice:number) {
    super(name, sellIn, quality,basePrice)
  }

  update(): void {
    // Do nothing
  }
}

export default LegendaryItem
