abstract class BaseItem {
  public static MAX_QUALITY = 50;
  public static MIN_QUALITY = 0;

  constructor(
    public name: string,
    public sellIn: number,
    public quality: number,
    public decreaseQualityRate: number = 1
  ) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
    this.decreaseQualityRate = decreaseQualityRate;
  }

  updateItem() {
    this.lowerSellIn();
    this.updateQuality();
  }

  lowerSellIn() {
    this.sellIn--;
  }

  updateQuality() {
    if (this.sellIn <= 0) {
      this.decreaseQualityRate *= 2;
    }
    this.quality += this.decreaseQualityRate;
    this.clampQuality();
  }

  clampQuality() {
    this.quality = Math.max(BaseItem.MIN_QUALITY, this.quality);
    this.quality = Math.min(BaseItem.MAX_QUALITY, this.quality);
  }

  updateQualityBackStage() {
    if (this.sellIn <= 5) {
      return this.quality += 3;
    } else if (this.sellIn <= 10) {
      return this.quality += 2;
    } else if (this.sellIn <= 0) {
      return this.quality = 0;
    }
  }
}

export default BaseItem;
