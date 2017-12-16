import Block from './Block';
import Blockchain from './Blockchain';

const coin = new Blockchain();

console.log('Mining block 1...');
coin.addBlock(new Block(1, '20/07/2017', { amount: 4 }));

console.log('Mining block 2...');
coin.addBlock(new Block(2, '20/07/2017', { amount: 8 }));

console.log(JSON.stringify(coin, null, 4));
