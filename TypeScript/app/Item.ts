abstract class Item {
  constructor(
    public name: string,
    public sellIn: number,
    public quality: number,
  ) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  update() {}
}

export default Item;
