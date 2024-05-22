import { useEffect, useState } from "react";
import { Address, OpenedContract, toNano } from "@ton/core";
import { PredictionMarket, EventEntryMessage } from "../wrappers/PredictionMarket";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonClient } from "./useTonClient";
import { useTonConnect } from "./useTonConnect";

const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time))


export function usePredictionMarketContract() {
    const {client} = useTonClient()
    const {wallet, sender} = useTonConnect()

    const pmContract = useAsyncInitialize(async()=>{
        if(!client || !wallet) return;

        const contract = PredictionMarket.fromAddress(Address.parse(import.meta.env.VITE_TESTNET_CONTRACT))

        return client.open(contract) as OpenedContract<PredictionMarket>
    }, [client, wallet])


    const entryAmount= "0.05"
    const prediction = 200
    const transactionFee = "1.5"


    return {
        sendEntry: () => {
          const entryMessage: EventEntryMessage = {
            $$type: "EventEntryMessage",
            address: sender?.address!,
            amount: toNano(entryAmount),
            prediction: BigInt(prediction),
            name: "testUser",
            message: "This is a test entry"
          };

          pmContract?.send(sender, {
              value: entryMessage.amount + toNano(transactionFee)
          }, entryMessage)
        }
    }
}