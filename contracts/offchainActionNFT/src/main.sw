contract;

use std::{identity::Identity};
use string::String;

pub struct OffChainActionNFT {
    image_link: str[256],
    description: str[256],
    transaction_hash: b256,
}


abi NFT {
    #[storage(read, write)]
    fn mint(image_link: str[256], transaction_hash: b256, description: str[256]);

    #[storage(read)]
    fn get_tx_nfts(transaction_hash: b256) -> StorageVec<u32, OffChainActionNFT>;
}

storage {
    transactionsOffchainActions: StorageVec<OffChainActionNFT>> = StorageVec {}
}

impl NFT for Contract {
    #[storage(read, write)]
    fn mint(image_link: str[256], transaction_hash: b256, description: str[256]) {
        if storage.transactionsOffchainActions.get(transaction_hash).is_none() {
            let mut v: StorageMap<u32, OffChainActionNFT> = StorageMap {};
            
            v.insert(1, OffChainActionNFT {
                image_link: image_link,
                description: description,
                transaction_hash: transaction_hash
            });

            storage.transactionsOffchainActions.insert(transaction_hash, v);
        } else {
            let mut dict_value = storage.transactionsOffchainActions.get(transaction_hash).unwrap();
            
            dict_value.

            dict_value.insert(OffChainActionNFT {
                image_link: image_link,
                description: description,
                transaction_hash: transaction_hash 
                });            
        }
    }


    #[storage(read)]
    fn get_tx_nfts(transaction_hash: b256) -> StorageVec<OffChainActionNFT> {
        storage.transactionsOffchainActions.get(transaction_hash).unwrap()
    }
}
