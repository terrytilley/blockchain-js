const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(index, timestamp, data, previousHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    const { data, index, timestamp, previousHash } = this;

    return SHA256(
      index + previousHash + timestamp + JSON.stringify(data)
    ).toString();
  }
}

export default Block;
