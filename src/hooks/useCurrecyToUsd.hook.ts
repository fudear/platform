import {useEffect} from 'react'
import { useRecoilState } from 'recoil'
import { tokensPricesState } from '@/states/token-price.atom'

const useCurrecyToUsd = () => {
    const [tokensPrice, setTokensPrice] = useRecoilState(tokensPricesState);

    const updatePrices = async () => {
        try {
            const responses = await Promise.all([
                fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eth.json'),
                fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/matic.json'),
                fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usdc.json'),
                fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usdt.json')
            ]);

            const data = await Promise.all(responses.map(response => response.json()));

            setTokensPrice({
                ...tokensPrice,
                eth: data[0].eth.usd,
                matic: data[1].matic.usd,
                usdc: data[2].usdc.usd,
                usdt: data[3].usdt.usd
            });
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        updatePrices();
    }, []);

    return tokensPrice;
};


export default useCurrecyToUsd;