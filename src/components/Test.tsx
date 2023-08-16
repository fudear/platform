import {useEffect,useState} from 'react'
import { useQuery } from 'react-query'


const Test = () => {
  const [currency, setCurrency] = useState<string>('')
  const {isLoading,error,data} = useQuery('data', () => 
    fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eth.json').then(res => res.json())
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error

     console.log(data.eth.usdt)

    return (
      <div>
        price eth en ${data.eth.usd.toFixed(2)} usdt
      </div>
    )
}

export default Test;