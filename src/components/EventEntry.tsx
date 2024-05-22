import { TonConnectButton } from "@tonconnect/ui-react";
import { usePredictionMarketContract } from "../hooks/usePredictionMarketContract";
import { useTonConnect } from "../hooks/useTonConnect";

import {
  Card,
  FlexBoxCol,
  Button,
} from "./styled/styled";

export function EventEntry() {
    const { connected } = useTonConnect();
    const { sendEntry } = usePredictionMarketContract();
  
    return (
      <div className="Container">
        <TonConnectButton />
  
        <Card>
          <FlexBoxCol>
            <h3>Enter Event</h3>
            <Button
              disabled={!connected}
              className={`Button ${connected ? "Active" : "Disabled"}`}
              onClick={() => {
                sendEntry();
              }}
            >
              Send Entry
            </Button>
          </FlexBoxCol>
        </Card>
      </div>
    )
}