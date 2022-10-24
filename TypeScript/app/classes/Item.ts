import BaseItem from "./BaseItem";

class Item extends BaseItem {
    constructor(name: string, sellIn: number, quality: number, decreaseQualityRate: number = 1) {
        super(name, sellIn, quality, decreaseQualityRate);
    }

    updateQuality() {
        switch (this.name) {
            case "Sulfuras" : {
                this.quality = 80;
                break;
            }
            case "Backstage passes" : {
                this.timeLapsUpdateQuality()
                break;
            }
            case "Aged Brie" : {
                this.timeLapsUpdateQuality()
                break;
            }
        }
    }

}