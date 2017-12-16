const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(index, timestamp, data, previousHash = '') {
    this.nonce = 0;
    this.data = data;
    this.index = index;
    this.timestamp = timestamp;
    this.hash = this.calculateHash();
    this.previousHash = previousHash;
  }

  calculateHash() {
    const { nonce, data, index, timestamp, previousHash } = this;

    return SHA256(
      index + previousHash + timestamp + JSON.stringify(data) + nonce
    ).toString();
  }

  mineBlock(difficulty) {
    while (this.hash.substring(0, difficulty) !== [difficulty + 1].join('0')) {
      this.nonce += 1;
      this.hash = this.calculateHash();
    }
    console.log('BLOCK MINED:', this.hash);
  }
}

export default Block;
