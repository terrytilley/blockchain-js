import Block from './Block';
import Blockchain from './Blockchain';

const coin = new Blockchain();
coin.addBlock(new Block(1, '20/07/2017', { amount: 4 }));
coin.addBlock(new Block(2, '20/07/2017', { amount: 8 }));

console.log('Blockchain valid?', coin.isChainValid());

console.log('Changing a block...');
coin.chain[1].data = { amount: 100 };
coin.chain[1].hash = coin.chain[1].calculateHash();

console.log('Blockchain valid?', coin.isChainValid());

console.log(JSON.stringify(coin, null, 4));
