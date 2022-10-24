class Item {
  public static MAX_QUALITY: number = 50;
  public static MIN_QUALITY = 0;

  constructor(
    public name: string,
    public sellIn: number,
    public quality: number,
    public decreaseQualityRate: number = 1,
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
    let decreaseBy = this.decreaseQualityRate;
    if (this.sellIn <= 0) {
      decreaseBy *= 2;
    }
    this.quality += decreaseBy;
    this.clampQuality();
  }

  clampQuality() {
    this.quality = Math.max(Item.MIN_QUALITY, this.quality);
    this.quality = Math.min(Item.MAX_QUALITY, this.quality);
  }
}

export default Item;
