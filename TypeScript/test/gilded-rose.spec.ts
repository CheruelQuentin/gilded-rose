import GenericItem from "../app/GenericItem"

describe("Gilded Rose", () => {
  it("Should build", () => {
    expect(true).toBe(true)
  })

  it("Should have a name", () => {
    const item = new GenericItem("foo", 0, 0)
    expect(item.name).toBe("foo")
  })

  it("Should have a sellIn", () => {
    const item = new GenericItem("foo", 0, 0)
    expect(item.sellIn).toBe(0)
  })

  it("Should have a quality", () => {
    const item = new GenericItem("foo", 0, 0)
    expect(item.quality).toBe(0)
  })

  it("Should update sellIn", () => {
    const item = new GenericItem("foo", 2, 0)
    item.update()
    expect(item.sellIn).toBe(1)
  })

  it("Should update quality", () => {
    const item = new GenericItem("foo", 0, 2)
    item.update()
    expect(item.quality).toBe(1)
  })

  it("Should not update quality below 0", () => {
    const item = new GenericItem("foo", 0, 0)
    item.update()
    expect(item.quality).toBe(0)
  })

  it("Should update quality twice as fast after sellIn", () => {
    const item = new GenericItem("foo", 0, 4)
    item.update()
    expect(item.quality).toBe(2)
  })

  it("Should not update quality below 0 after sellIn", () => {
    const item = new GenericItem("foo", 0, 1)
    item.update()
    expect(item.quality).toBe(0)
  })

  it("Should not update quality above 50", () => {
    const item = new GenericItem("foo", 0, 51)
    item.update()
    expect(item.quality).toBe(50)
  })
})
