import Block from './Block';

class Blockchain {
  constructor() {
    this.difficulty = 1;
    this.chain = [new Block(0, '01/01/2017', 'Genesis block', '0')];
  }

  getLatestBlock() {
    const { chain } = this;

    return chain[chain.length - 1];
  }

  addBlock(block) {
    const newBlock = block;

    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.mineBlock(this.difficulty);

    this.chain.push(newBlock);
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i += 1) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }

    return true;
  }
}

export default Blockchain;
