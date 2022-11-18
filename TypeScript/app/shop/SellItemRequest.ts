class SellItemRequest {
  constructor(public type: string, public quality: number) {
    this.type = type
    this.quality = quality
  }
}

export default SellItemRequest
