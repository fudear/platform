import { ethers } from 'ethers';
import * as PushAPI from '@pushprotocol/restapi';

const PK = 'fa4dbe4f7a339ca81e93c6f0714036195289f29897bc5c656656acc46880a14b'; // channel private key
const Pkey = `0x${PK}`;
const _signer = new ethers.Wallet(Pkey);
console.log(_signer);

const sendNotification = async () => {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer: _signer,
      type: 1, // broadcast
      identityType: 2, // direct payload
      notification: {
        title: `DeFi Argentina`,
        body: `Donation Approved `,
      },
      payload: {
        title: `DeFi Argentina`,
        body: `A donation was made to the comedor in Tanti, Cordoba.\nYou can review the receipts in our page!\n\nThanks for your help!`,
        cta: 'defiargentina.org',
        img: '',
      },
      channel: 'eip155:5:0xa879FCBe4944d680d1982276ad86Ce5f42cCB58e', // Push Earn Channel
      env: 'staging' as PushAPI.ISendNotificationInputOptions['env'],
    });
  } catch (err) {
    console.error('Error: ', err);
  }
};

const useSendNotification = () => () => sendNotification();

export default useSendNotification;
