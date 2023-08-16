import '@mui/material/Typography';
import { Theme } from '@mui/material/styles';
import { CSSProperties } from '@mui/system';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    displayLarge: React.CSSProperties & TrackingProps;
    displaySmall: React.CSSProperties & TrackingProps;
  }

  interface TypographyVariantsOptions {
    displayLarge?: React.CSSProperties & TrackingProps;
    displaySmall?: React.CSSProperties & TrackingProps;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    displayLarge: true;
    displaySmall: true;
    h1: true;
    h2: true;
    h3: true;
    h4: true;
    h5: true;
    h6: true;
  }
}
