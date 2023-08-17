import Image from 'next/image';
import { FC } from 'react';

const Banner: FC<{}> = () => {
  return (
    <Image
      src="/defi-argentina-banner.png"
      alt="DeFi Argentina Banner"
      width={1500}
      height={1500}
      style={{
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
      }}
    />
  );
};

export default Banner;
