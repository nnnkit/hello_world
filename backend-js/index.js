const { ApiPromise, WsProvider } = require('@polkadot/api');
const chalk = require('chalk');
const log = console.log;

const PROVIDER = 'wss://kusama-rpc.polkadot.io';
const blockID = process.argv[2];
let isHash = false;

if (process.argv[2] && process.argv[2].startsWith('0x')) {
  isHash = true;
}

async function getApi(p) {
  const provider = new WsProvider(p);
  return await ApiPromise.create({ provider });
}

async function displayLatestBlock(url) {
  const api = await getApi(url);
  const block = await api.rpc.chain.getBlock();
  log(chalk.bgYellow.black('Latest block on: 👉') + ` ${url} : ${block}`);
}

async function displayBlock(blockId, url) {
  const api = await getApi(url);
  let block;
  if (isHash) {
    block = await api.rpc.chain.getBlock(blockId);
  } else {
    const blockHash = await api.rpc.chain.getBlockHash(blockId);
    block = await api.rpc.chain.getBlock(blockHash);
  }
  log(
    chalk.black.bgYellow('Block details for: 👉') +
      ` ${blockId} is ${url} : ${block}`
  );
}

async function main() {
  if (blockID) {
    await displayBlock(parseInt(blockID), PROVIDER);
  } else {
    await displayLatestBlock(PROVIDER);
  }
}

main()
  .catch(console.error)
  .finally(() => process.exit());
