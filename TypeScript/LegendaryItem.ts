import { ILegendaryItem, Item } from "./Item";

class LegendaryItem extends Item implements ILegendaryItem {
    isLegendary: boolean;
    constructor(public sellIn: number, public quality: number) {
        super(sellIn, quality);
        this.isLegendary = true;
    }

    lowerSellIn() {
        // do nothing
    }

    updateQuality(rate: number) {
        // do nothing
    }
}