import { CustomTransaction, TransactionType } from "@/models/transaction.model";
import { Alchemy, AssetTransfersCategory, Network } from "alchemy-sdk";
import { SetterOrUpdater } from "recoil";

const useAlchemyTransactionsHistory = (
  setTxHistory: SetterOrUpdater<CustomTransaction[]>,
  transactionType: TransactionType
) => {
  const polygonAddress1 = "0x5D039073fC3DD3d9c7Dbc9eC3409bA6957786Bf4";
  const polygonAddress2 = "0x59ec567e868b06b132f6d31f117795822beaa147";
  const polygonConfig = {
    apiKey: "28V94dZPmWS1rhwqI8ULPt2SELEH7K8x",
    network: Network.MATIC_MAINNET,
  };

  const polygonAlchemy = new Alchemy(polygonConfig);

  const etehereumAddress = "0xe576d24c6AA0E6A2cb3f30A5C18A636bba54FfaE";
  const etehereumConfig = {
    apiKey: "28V94dZPmWS1rhwqI8ULPt2SELEH7K8x",
    network: Network.ETH_MAINNET,
  };

  const etehereumAlchemy = new Alchemy(etehereumConfig);

  return () => {
    getAssetTransfers(
      setTxHistory,
      transactionType,
      polygonAlchemy,
      polygonAddress1,
      Network.MATIC_MAINNET
    );

    getAssetTransfers(
      setTxHistory,
      transactionType,
      polygonAlchemy,
      polygonAddress2,
      Network.MATIC_MAINNET
    );

    getAssetTransfers(
      setTxHistory,
      transactionType,
      etehereumAlchemy,
      etehereumAddress,
      Network.ETH_MAINNET
    );
  };
};

const getAssetTransfers = (
  setTxHistory: SetterOrUpdater<CustomTransaction[]>,
  transactionType: TransactionType,
  alchemyInstance: Alchemy,
  address: string,
  network: Network
) => {
  alchemyInstance.core
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
      console.log(res.transfers);
      setTxHistory((current) => [
        ...current,
        ...res.transfers.filter((tx) =>
          ["USDC", "USDT", "MATIC"].includes(tx.asset || "")
        ).map((tx) => ({  ...tx, network: network })),
      ]);
    });
};

export default useAlchemyTransactionsHistory;
