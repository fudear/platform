import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Alchemy, AssetTransfersCategory, Network } from "alchemy-sdk";
import { FC, useEffect, useState } from "react";

const Home: FC<{}> = () => {
  const [txHistory, setTxHistory] = useState<
    {
      uniqueId: string;
      asset: string | null;
      category: string;
      value: number | null;
      from: string;
    }[]
  >([]);

  const address = "0x5D039073fC3DD3d9c7Dbc9eC3409bA6957786Bf4";
  const config = {
    apiKey: "28V94dZPmWS1rhwqI8ULPt2SELEH7K8x",
    network: Network.MATIC_MAINNET,
  };

  const alchemy = new Alchemy(config);

  useEffect(() => {
    alchemy.core
      .getAssetTransfers({
        fromBlock: "0x0",
        toAddress: address,
        category: [AssetTransfersCategory.ERC20],
        excludeZeroValue: true,
      })
      .then((res) => {
        console.log(res.transfers);
        setTxHistory(
          res.transfers.filter((tx) =>
            ["USDC", "USDT", "MATIC"].includes(tx.asset || "")
          )
        );
      });
  }, []);

  return (
    <Typography variant="h3">
      <Stack gap={3} alignItems="center" marginY={2}>
        {txHistory.map((tx) => (
          <Card key={tx.uniqueId} variant="outlined" sx={{ width: 450 }}>
            <CardContent>
              <Typography>Asset: {tx.asset}</Typography>
              <Typography>Value: {tx.value}</Typography>
              <Typography>Category: {tx.category}</Typography>
              <Typography>From: {tx.from}</Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Typography>
  );
};

export default Home;
