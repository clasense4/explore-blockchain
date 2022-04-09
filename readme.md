# Explore Javascript, Typescript and Blockchain

## Introduction

This repository is about exploring Vanilla Javascript and Blockchain with Typescript.

## Requirements

[Docker](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04) needs to be available.

```bash
❯ docker --version
Docker version 20.10.6, build 370c289
```

## Up & Running

I have provided a Makefile to install the project and running the script.

```bash
$ make
bash                 Run bash inside the docker image
help                 Show this help
install              Build the Docker image and install NPM packages
problem1             Run the Problem 1: Three ways to sum to n
problem3             Run the Problem 3: Datasource Connector Tool
problem4             Run the Problem 4: Interacting with Chain

# Build the Docker image and install NPM packages
make install

# Run the Problem 1: Three ways to sum to n
make problem1

Three ways to sum to n
Using a simple for loop: 15
Using a Formula: 15
Using a Recursive Function: 15

# Run the Problem 3: Datasource Connector Tool
make problem3

Datasource Connector Tool
Mid price for BTCSGD is 8925.7 SGD.
Mid price for LTCUSD is 65.92 USD.
Mid price for ETHSGD is 509.275 SGD.
Mid price for BCHSGD is 852.29 SGD.
Mid price for LTCSGD is 89.94 SGD.
Mid price for BTCUSD is 6529.6 USD.
Mid price for BCHUSD is 625.58 USD.
Mid price for ETHUSD is 373.555 USD.

# Note: prices.json is provided in the repository. And the content is the same as https://static.ngnrs.io/test/prices

# Run the Problem 4: Interacting with Chain
# Prepare the BSC_RPC_URL by folowing the guide at: https://docs.moralis.io/speedy-nodes/connecting-to-rpc-nodes/connect-to-bsc-node
# Export the RPC URL from the previous step as environment variable
export BSC_RPC_URL=https://...

# Example output
make problem4

Interacting with Chain
BSC_RPC_URL: https://...
Contract Address: 0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c
0xfe808b079187cc460f47374580f5fb47c82b87a5 0.0
0x123d475e13aa54a43a7421d94caa4459da021c77 424964.17132654
0x0020c5222a24e4a96b720c06b803fb8d34adc0af 0.0

# Note: the result for problem 4 probably varies because of the randomness of the blockchain.
```
