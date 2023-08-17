import useAlchemyTransactionsHistory from '@/hooks/useAlchemy.hook';
import { TransactionType } from '@/models/transaction.model';
import { incomingTransactionsState } from '@/states/incoming-transactions.atom';
import { outgoingTransactionsState } from '@/states/outgoing-transactions.atom';
import createEmotionCache from '@/styles/createEmotionCache';
import theme from '@/styles/theme/theme.style';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './Header';
import Layout from './Layout';
import { Suspense, useEffect } from 'react';
import { useRecoilState } from 'recoil';

interface RootProps {
  Component: any;
  pageProps: any;
  emotionCache?: EmotionCache;
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const Root: React.FC<RootProps> = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) => {
  const [incomingTxState, setIncomingTxState] = useRecoilState(
    incomingTransactionsState
  );
  const [outgoingTxState, setOutgoingTxState] = useRecoilState(
    outgoingTransactionsState
  );

  const outgoingTxFn = useAlchemyTransactionsHistory(
    setOutgoingTxState,
    TransactionType.Outgoing
  );
  const incomingTxFn = useAlchemyTransactionsHistory(
    setIncomingTxState,
    TransactionType.Incoming
  );

  useEffect(() => {
    incomingTxFn();
    outgoingTxFn();
  }, []);
  return (
    <>
      <Header />

      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={createTheme(theme)}>
          <Layout>
            <Suspense fallback={'Loading...'}>
              <Component {...pageProps} />
            </Suspense>
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default Root;
