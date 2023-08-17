import { Global, css } from '@emotion/react';
import { FC } from 'react';

const GlobalStyles: FC<{}> = () => {
  return (
    <Global
      styles={css`
        html,
        body,
        body > div,
        main,
        main > div {
          min-height: 100%;
          height: 100%;
        }

        body {
          margin: 0;
        }
      `}
    />
  );
};

export default GlobalStyles;
