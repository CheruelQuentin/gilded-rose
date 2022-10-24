import Item from "../app/classes/Item";

describe("Gilded Rose", () => {
  it("Should build", () => {
    expect(true).toBe(true);
  });

  it("Should degrade twice as fast after sell by date", () => {
    const item = new Item("item", 0, 10, -1);
    item.updateItem();
    expect(item.quality).toBe(8);
  });
});
