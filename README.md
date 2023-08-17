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

### Motivation

In order to provide traceability and transaparency of the withdrawl of the donations we need a proof of what is done with the money that was donated. 
Our approach is to make that the offchain actions become part of the blockchain. This is where FuelVM comes in handy, we developed a contract to augment the data that a transaction has stored in the blockchain associating it's hash with IPFS links that correspond to recepits, invoices or any justification to prove that the funds where correctly used.

## Implementation

We intend to keep using FuelVM in order to implement a contract that acts as an escrow that holds the funds of a donation until a milestone is completed or another contract that implements a votation of a donors call the escrow contract to perform an early cashout

The implementation of the OffchainContractNFT can be found in the following [link](./contracts/offchainActionNFT/src/main.sw)


## Push Protocol Grant

### Motivation

We've opted to integrate Push Protocol to notify users about the various stages of donations and other customized communication. 

This decision brings forth substantial benefits and has the potential to significantly elevate both user experience and the communication process

The push protocol holds significant value on our platform for a variety of reasons initial acknowledgment, real time progress,milestones and achievements, emergency appeals, call to actions, feedback and surveys, and customized communication.

Our main goal is that donors don't have to pursue the updates of a organization or campaign, we want that the news come to the donor not that they have to search them.

### Implementation

We implemented a custom hook in Next.js that let us use the notification wherever we need in the application. In the current implementation it's only used to send a notification whenever an action that's done offchain is uploaded to the chain. 
The hook can be found [here](./src/hooks/useSendNotification.ts)
The hook is being used [here](./src/components/ImageForm.tsx)

