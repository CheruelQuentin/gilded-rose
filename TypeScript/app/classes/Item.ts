import BaseItem from "./BaseItem";

class Item extends BaseItem {
    constructor(name: string, sellIn: number, quality: number, decreaseQualityRate: number = 1) {
        super(name, sellIn, quality, decreaseQualityRate);
    }

    updateQuality() {
        // Implement this method based on item name
    }
}