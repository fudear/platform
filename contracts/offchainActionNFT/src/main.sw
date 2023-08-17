contract;

use std::{identity::Identity};
use std::storage::storage_vec::*;
use string::String;

pub struct OffChainActionNFT {
    image_link: String,
    description: String,
    transaction_hash: String,
}


abi NFT {
    #[storage(read, write)]
    fn mint(image_link: String, transaction_hash: String, description: String);

    #[storage(read)]
    fn get_tx_nfts(transactionHash: String) -> StorageVector<OffChainActionNFT>;
}

storage {
    transactionsOffchainActions: StorageMap<String, StorageVector<OffChainActionNFT>> = StorageMap {}
}

impl NFT for Contract {
    #[storage(read, write)]
    fn mint(imageLink: String, transactionHash: String, description: String) {
        if storage.transactionsOffchainActions.get(TransactionHash).try_read().is_none() {
            let v: StorageVector<OffChainActionNFT> = StorageVector {};
            
            v.insert(OffChainActionNFT {
                imageLink: imageLink,
                description: description,
                transactionHash: transactionHash
            });

            storage.transactionsOffchainActions.insert(transactionHash, v);
        } else {
            storage.transactionsOffchainActions.get(transactionHash).push(OffChainActionNFT {
                imageLink: imageLink,
                description: description,
                transactionHash: transactionHash
            })
        }
    }

    #[storage(read)]
    fn get_tx_nfts(transactionHash: String) -> StorageVector<OffChainActionNFT> {
        storage.transactionsOffchainActions.get(transactionHash)
    }
}
