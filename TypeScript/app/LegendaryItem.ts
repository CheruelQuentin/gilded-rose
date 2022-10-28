import Item from "./Item"

class LegendaryItem extends Item {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality)
  }

  update(): void {
    // Do nothing
  }
}

export default LegendaryItem
