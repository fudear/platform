import createEmotionCache from "@/styles/createEmotionCache";
import theme from "@/styles/theme/theme.style";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Suspense } from "react";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

interface RootProps {
  Component: any;
  pageProps: any;
  emotionCache?: EmotionCache;
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const queryClient = new QueryClient()


const Root: React.FC<RootProps> = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) => {
  return (
    <>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={createTheme(theme)}>
          <CssBaseline enableColorScheme />
          <Suspense fallback={"Loading..."}>
            <QueryClientProvider client={queryClient}>
              <Component {...pageProps} />
            </QueryClientProvider>
          </Suspense>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default Root;
