module.exports = class CoinResponse {
  constructor(obj) {
    this.status = "success";
    this.price = obj.price_usd;
    this.symbol = obj.symbol;
  }

  getResponse() {
    return this;
  }
};