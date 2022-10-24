export interface IBaseItem {
    sellIn: number
    quality: number
    lowerSellIn(): void
    updateQuality(rate: number): void
}

export interface ILegendaryItem {
    isLegendary: boolean
}

export class Item implements IBaseItem {
    constructor(public sellIn: number, public quality: number) { 
        this.sellIn = sellIn;
        this.quality = quality;
    }

    lowerSellIn() {
        this.sellIn--;
    }

    updateQuality(rate: number) {
        if(this.sellIn <= 0) {
            rate *= 2;
        }

        this.quality = Math.max(0, this.quality += rate);
        this.quality = Math.min(50, this.quality);
    }
}