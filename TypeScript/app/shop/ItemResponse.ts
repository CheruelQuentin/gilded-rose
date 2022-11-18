class ItemResponse {
  constructor(public sellIn: number,public quality: number,public value: number) {
    this.sellIn = sellIn;
    this.quality = quality;
    this.value = value;
  }
}

export default ItemResponse;