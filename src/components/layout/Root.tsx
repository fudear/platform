import createEmotionCache from '@/styles/createEmotionCache';
import theme from '@/styles/theme/theme.style';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Suspense } from 'react';
import Header from './Header';
import Layout from './Layout';

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
  return (
    <>
      <Header />

      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={createTheme(theme)}>
          <CssBaseline enableColorScheme />

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
