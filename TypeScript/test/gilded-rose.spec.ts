import AgingItem from "../app/AgingItem"
import ConjuredItem from "../app/ConjuredItem"
import GenericItem from "../app/GenericItem"
import LegendaryItem from "../app/LegendaryItem"

describe("Gilded Rose, GenericItem", () => {
  it("Should build", () => {
    expect(true).toBe(true)
  })

  it("Should have a name", () => {
    const item = new GenericItem("foo", 0, 0, 0)
    expect(item.name).toBe("foo")
  })

  it("Should have a sellIn", () => {
    const item = new GenericItem("foo", 0, 0, 0)
    expect(item.sellIn).toBe(0)
  })

  it("Should have a quality", () => {
    const item = new GenericItem("foo", 0, 0, 0)
    expect(item.quality).toBe(0)
  })

  it("Should update sellIn", () => {
    const item = new GenericItem("foo", 2, 0, 0)
    item.update()
    expect(item.sellIn).toBe(1)
  })

  it("Should update quality", () => {
    const item = new GenericItem("foo", 1, 2, 0)
    item.update()
    expect(item.quality).toBe(1)
  })

  it("Should update quality with sellIn below zero", () => {
    const item = new GenericItem("foo", 0, 2, 0)
    item.update()
    expect(item.quality).toBe(0)
  })

  it("Should not update quality below 0", () => {
    const item = new GenericItem("foo", 0, 0, 0)
    item.update()
    expect(item.quality).toBe(0)
  })

  it("Should update quality twice as fast after sellIn", () => {
    const item = new GenericItem("foo", 0, 4, 0)
    item.update()
    expect(item.quality).toBe(2)
  })

  it("Should not update quality below 0 after sellIn", () => {
    const item = new GenericItem("foo", 0, 1, 0)
    item.update()
    expect(item.quality).toBe(0)
  })

  it("Should not update quality above 50", () => {
    const item = new GenericItem("foo", 1, 51, 0)
    item.update()
    expect(item.quality).toBe(50)
  })
})

describe("Gilded Rose, LegendaryItem", () => {
  it("Should not update LegendaryItem", () => {
    const item = new LegendaryItem("Sulfuras", 1, 80, 0)
    item.update()
    expect(item.quality).toBe(80)
  })
})

describe("Gilded Rose, ConjuredItem", () => {
  it("Should update ConjuredItem", () => {
    const item = new ConjuredItem("Conjured", 1, 50, 0)
    item.update()
    expect(item.quality).toBe(48)
  })

  it("Should update ConjuredItem twice as fast after sellIn", () => {
    const item = new ConjuredItem("Conjured", 0, 50, 0)
    item.update()
    expect(item.quality).toBe(46)
  })

  it("Should not update ConjuredItem below 0", () => {
    const item = new ConjuredItem("Conjured", 0, 1, 0)
    item.update()
    expect(item.quality).toBe(0)
  })
})

describe("Gilded Rose, AgingItem", () => {
  it("Should update AgingItem", () => {
    const item = new AgingItem("Aged Brie", 1, 49, 0)
    item.update()
    expect(item.quality).toBe(50)
  })

  it("Should update AgingItem twice as fast after sellIn", () => {
    const item = new AgingItem("Aged Brie", 0, 48, 0)
    item.update()
    expect(item.quality).toBe(50)
  })

  it("Should not update AgingItem above 50", () => {
    const item = new AgingItem("Aged Brie", 0, 50, 0)
    item.update()
    expect(item.quality).toBe(50)
  })
})
