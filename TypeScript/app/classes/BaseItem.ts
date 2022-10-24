abstract class BaseItem {
    public static MAX_QUALITY = 50
    public static MIN_QUALITY = 0

    constructor(public name: string, public sellIn: number, public quality: number, public decreaseQualityRate: number = 1) { 
        this.name = name
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
        if(this.sellIn <= 0) {
            this.decreaseQualityRate *= 2;
        }

        this.quality = Math.max(0, this.quality += this.decreaseQualityRate);
        this.quality = Math.min(50, this.quality);
    }
}

export default BaseItem;