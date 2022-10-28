import Shop from '../src/Shop';
import Item from '../src/Item';


describe('Gilded Rose', () => {
    let item = new Item(1,1, "Age Brie");
    it('Should build', () => {
        let shop = new Shop();
        expect(shop).toBeInstanceOf(Shop);
    });

    it('Should build Item', () => {
        expect(item).toBeInstanceOf(Item);
    })

    it('Should reduce one to increase sellIn',() => {
        item.sellIn -=1;
        expect(item.sellIn).toBe(0);
    })
    it('should reduce quality', () =>{
        item.updateQuality()
        expect(item.quality).toBe(2);
    })
    it('should reduce sellIn', () =>{
        item.lowerSellIn()
        expect(item.quality).toBe(0);
    })

});

