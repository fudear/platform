contract;

use std::{identity::Identity};
use std::storage::storage_vec::*;
use string::String;

pub struct OffChainActionNFT {
    image_link: str[256],
    description: str[256],
    transaction_hash: str[256],
}


abi NFT {
    #[storage(read, write)]
    fn mint(image_link: str[256], transaction_hash: str[256], description: str[256]);

    #[storage(read)]
    fn get_tx_nfts(transaction_hash: str[256]) -> StorageVec<OffChainActionNFT>;
}

storage {
    transactionsOffchainActions: StorageMap<str[256], StorageVec<OffChainActionNFT>> = StorageMap {}
}

impl NFT for Contract {
    #[storage(read, write)]
    fn mint(imageLink: str[256], transaction_hash: str[256], description: str[256]) {
        if storage.transactionsOffchainActions.get(transaction_hash).try_read().is_none() {
            let v: StorageVec<OffChainActionNFT> = StorageVec {};
            
            v.insert(OffChainActionNFT {
                imageLink: imageLink,
                description: description,
                transaction_hash: transaction_hash
            });

            storage.transactionsOffchainActions.insert(transaction_hash, v);
        } else {
            storage.transactionsOffchainActions.get(transaction_hash).push(OffChainActionNFT {
                imageLink: imageLink,
                description: description,
                transaction_hash: transaction_hash
            })
        }
    }

    #[storage(read)]
    fn get_tx_nfts(transaction_hash: str[256]) -> StorageVec<OffChainActionNFT> {
        storage.transactionsOffchainActions.get(transaction_hash)
    }
}
