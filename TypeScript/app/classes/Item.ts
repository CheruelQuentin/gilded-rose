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
      this.updateQualityBackStage()
      this.clampQuality();
      return;
    }
  }
}
