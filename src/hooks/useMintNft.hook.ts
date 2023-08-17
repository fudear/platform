import { useEffect, useState } from 'react';

const useMintNft = () => {
  const CONTRACT_ID = '';

  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState('');
  const [loaded, setLoaded] = useState(false);

  async function connect() {
    if ((window as any).fuel) {
      try {
        await (window as any).fuel.connect();
        const [account] = await (window as any).fuel.accounts();
        setAccount(account);
        setConnected(true);
      } catch (err) {
        console.log(err);
      }
    }
  }

  async function checkConnection() {
    if ((window as any).fuel) {
      const isConnected = await (window as any).fuel.isConnected();
      if (isConnected) {
        const [account] = await (window as any).fuel.accounts();
        setAccount(account);
        setConnected(true);
      }
    }
  }
};
