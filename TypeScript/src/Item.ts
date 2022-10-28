export default class Item {
    private _sellIn : number;
    private _quality : number;
    private _name : string;

    MAXIMUM_QUALITY = 50;
    MINIMUM_QUALITY = 0;

    isLessThanMaximum = _quality => this._quality < this.MAXIMUM_QUALITY
    isOverMinimun = _quality => this._quality > this.MINIMUM_QUALITY

    increaseQuality = _quality => this.isLessThanMaximum(_quality) ? _quality +1 : _quality
    decreaseQuality = _quality => this.isOverMinimun(_quality) ? _quality -1 : _quality

    constructor(sellIn: number, quality: number, name: string) {
        this._sellIn = sellIn;
        this._quality = quality;
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get quality(): number {
        return this._quality;
    }

    set quality(value: number) {
        this._quality = value;
    }
    get sellIn(): number {
        return this._sellIn;
    }

    set sellIn(value: number) {
        this._sellIn = value;
    } 


    updateQuality() {
      this._quality = this.decreaseQuality(this._quality);
      this._quality = this._sellIn <= 0 ? this.decreaseQuality(this._quality) : this._quality;
      return this._quality
    }

    updateQualityForNormalItem() {
      this._sellIn--;
    }
    updateQualityForSulfuras() {
      this._quality = 80;
      return this._quality;
    }

    updateQualityForConjured() {
      if(this._sellIn === 5) {
        this._quality -= 3
      } else {
        this.updateQuality();
        this.updateQuality();
      }
      this._sellIn -=1;
    }

    updateQualityForAgedBrie() {
      this._quality = this.increaseQuality(this._quality);
      this.quality = this._sellIn < 0 ? this.increaseQuality(this._quality): this._quality;

    }


    
  

    
}

