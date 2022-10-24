import BaseItem from "./BaseItem";

class Item extends BaseItem {
  constructor(
    name: string,
    sellIn: number,
    quality: number,
    decreaseQualityRate: number = 1
  ) {
    super(name, sellIn, quality, decreaseQualityRate);
  }

  updateQuality() {
    if (this.name === "Sulfuras") {
      return;
    }

    if (this.name === "Backstage pass") {
      if (this.sellIn <= 10) {
        this.quality += 2;
      }
      if (this.sellIn <= 5) {
        this.quality += 3;
      }
      if (this.sellIn <= 0) {
        this.quality = 0;
      }
      this.clampQuality();
      return;
    }
  }
}
