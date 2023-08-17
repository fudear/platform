import useCurrecyToUsd from "./useCurrecyToUsd.hook"
import { CustomTransaction } from "@/models/transaction.model"

const useGetTotalAmountCollected = (txArray:CustomTransaction[]) => {

    const currenciesValues = useCurrecyToUsd()
    console.log('currencies',currenciesValues)

    const curr: string[]  = ["USDC","USDT","MATIC","DAI"]

    const totalAmount: number = txArray.reduce((accumulator, tx) => {
        if (tx.asset && curr.includes(tx.asset.toUpperCase()) && tx.value !== null) {
            const conversionRate = currenciesValues[tx.asset.toLowerCase()];
            const total = accumulator + (tx.value.toFixed(2) * conversionRate);
            console.log('value',tx.value)
            console.log('acc',total)
            return total
        }
        return accumulator;
    }, 0);

    return totalAmount;
}

export default useGetTotalAmountCollected;