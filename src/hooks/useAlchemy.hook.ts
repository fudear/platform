import { CustomTransaction, TransactionType } from "@/models/transaction.model";
import { Alchemy, AssetTransfersCategory, Network } from "alchemy-sdk";
import { SetterOrUpdater } from "recoil";

const useAlchemyTransactionsHistory = (
  setTxHistory: SetterOrUpdater<CustomTransaction[]>,
  transactionType: TransactionType
) => {
  const address = "0x59ec567e868b06b132f6d31f117795822beaa147";
  const config = {
    apiKey: "28V94dZPmWS1rhwqI8ULPt2SELEH7K8x",
    network: Network.MATIC_MAINNET,
  };

  const alchemy = new Alchemy(config);

  return () =>
    alchemy.core
      .getAssetTransfers({
        toAddress:
          transactionType === TransactionType.Incoming ? address : undefined,
        fromAddress:
          transactionType === TransactionType.Outgoing ? address : undefined,
        fromBlock: "0x0",
        category: [AssetTransfersCategory.ERC20],
        excludeZeroValue: true,
      })
      .then((res) => {
        setTxHistory(
          res.transfers.filter((tx) =>
            ["USDC", "USDT", "MATIC"].includes(tx.asset || "")
          )
        );
      });
};

export default useAlchemyTransactionsHistory;
