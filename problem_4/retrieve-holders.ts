/**
# Task

Implement a script to retrieve the specified holders of [$SWTH token](https://bscscan.com/token/0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c) on the [Binance Smart Chain](https://coinmarketcap.com/alexandria/article/what-is-binance-smart-chain) network.

BSC Block Explorer: [https://bscscan.com/](https://bscscan.com/)

$SWTH Token Contract: `0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c`

Addresses to look up:

```json
0x123d475e13aa54a43a7421d94caa4459da021c77
0x0020c5222a24e4a96b720c06b803fb8d34adc0af
0xfe808b079187cc460f47374580f5fb47c82b87a5
```

How your script will be tested:

```bash
ts-node ./retrieve-holders.ts
```

## Expected Output:

The output should be organized as one `address amount` per line.

```
0x123d475e13aa54a43a7421d94caa4459da021c77 99,888,874.62734227
0x0020c5222a24e4a96b720c06b803fb8d34adc0af 7,970,573.69197209
0xfe808b079187cc460f47374580f5fb47c82b87a5 2,894,918.96152958
…
```
 */

// bscscan References:
// https://bscscan.com/token/0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c?a=0x0020c5222a24e4a96b720c06b803fb8d34adc0af
// https://bscscan.com/token/0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c?a=0x123d475e13aa54a43a7421d94caa4459da021c77
// https://bscscan.com/token/0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c?a=0xfe808b079187cc460f47374580f5fb47c82b87a5


import { ethers } from 'ethers';

const contractAddress = '0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c';
const addresses = [
    '0x123d475e13aa54a43a7421d94caa4459da021c77',
    '0x0020c5222a24e4a96b720c06b803fb8d34adc0af',
    '0xfe808b079187cc460f47374580f5fb47c82b87a5',
];


async function lookupAddress(address: string) {
    const provider = new ethers.providers.JsonRpcProvider(process.env.BSC_RPC_URL);
    const contract = new ethers.Contract(contractAddress, [
        'function balanceOf(address) view returns (uint256)',
    ], provider);
    const balance = await contract.balanceOf(address);
    console.log(`${address} ${ethers.utils.formatUnits(balance, '8')}`);
}

console.log(`BSC_RPC_URL: ${process.env.BSC_RPC_URL}`);
console.log(`Contract Address: ${contractAddress}`);
for (const address of addresses) {
    lookupAddress(address);
}