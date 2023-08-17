# Truth Cycle

Truth Cycle allows you to manage your funds so everyone can see where the money comes from and where it goes.
Donate, collect and spend money transparently.

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## FuelVM Bounty

In order to provide traceability and transaparency of the withdrawl of the donations we need a proof of what is done with the money that was donated. 
Our approach is to make that the offchain actions become part of the blockchain. This is where FuelVM comes in handy, we developed a contract to augment the data that a transaction has stored in the blockchain associating it's hash with IPFS links that correspond to recepits, invoices or any justification to prove that the funds where correctly used.

The implementation of the OffchainContractNFT can be found in the following [link](./contracts/offchainActionNFT/src/main.sw)

We intend to keep using FuelVM in order to implement a contract that acts as an escrow that holds the funds of a donation until a milestone is completed or another contract that implements a votation of a donors call the escrow contract to perform an early cashout 
