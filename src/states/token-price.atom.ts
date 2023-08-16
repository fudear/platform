import { atom } from "recoil";

const tokensPriceStateKey = 'tokensPriceState'

export const tokensPricesState = atom({
    key:tokensPriceStateKey,
    default: {
        usdt:'',
        matic:'',
        eth:'',
        usdc:'',
    },
})