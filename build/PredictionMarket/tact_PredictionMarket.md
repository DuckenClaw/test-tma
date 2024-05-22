# TACT Compilation Report
Contract: PredictionMarket
BOC Size: 1510 bytes

# Types
Total Types: 12

## StateInit
TLB: `_ code:^cell data:^cell = StateInit`
Signature: `StateInit{code:^cell,data:^cell}`

## Context
TLB: `_ bounced:bool sender:address value:int257 raw:^slice = Context`
Signature: `Context{bounced:bool,sender:address,value:int257,raw:^slice}`

## SendParameters
TLB: `_ bounce:bool to:address value:int257 mode:int257 body:Maybe ^cell code:Maybe ^cell data:Maybe ^cell = SendParameters`
Signature: `SendParameters{bounce:bool,to:address,value:int257,mode:int257,body:Maybe ^cell,code:Maybe ^cell,data:Maybe ^cell}`

## Deploy
TLB: `deploy#946a98b6 queryId:uint64 = Deploy`
Signature: `Deploy{queryId:uint64}`

## DeployOk
TLB: `deploy_ok#aff90f57 queryId:uint64 = DeployOk`
Signature: `DeployOk{queryId:uint64}`

## FactoryDeploy
TLB: `factory_deploy#6d0ff13b queryId:uint64 cashback:address = FactoryDeploy`
Signature: `FactoryDeploy{queryId:uint64,cashback:address}`

## ChangeOwner
TLB: `change_owner#819dbe99 queryId:uint64 newOwner:address = ChangeOwner`
Signature: `ChangeOwner{queryId:uint64,newOwner:address}`

## ChangeOwnerOk
TLB: `change_owner_ok#327b2b4a queryId:uint64 newOwner:address = ChangeOwnerOk`
Signature: `ChangeOwnerOk{queryId:uint64,newOwner:address}`

## EventConfigMessage
TLB: `event_config_message#cd2b7a5a terms:^string prize_pool:coins resolutionTime:int32 entries_limit:int16 = EventConfigMessage`
Signature: `EventConfigMessage{terms:^string,prize_pool:coins,resolutionTime:int32,entries_limit:int16}`

## EventEntryMessage
TLB: `event_entry_message#072cd2db address:address amount:int32 prediction:int16 name:Maybe ^string message:Maybe ^string = EventEntryMessage`
Signature: `EventEntryMessage{address:address,amount:int32,prediction:int16,name:Maybe ^string,message:Maybe ^string}`

## EventEntry
TLB: `_ address:address amount:int32 prediction:int16 timestamp:int32 name:Maybe ^string message:Maybe ^string = EventEntry`
Signature: `EventEntry{address:address,amount:int32,prediction:int16,timestamp:int32,name:Maybe ^string,message:Maybe ^string}`

## EventStats
TLB: `_ created_at:int32 owner:address terms:^string resolutionTime:Maybe int32 entries_limit:int16 pool_locked:bool event_entries:dict<address, ^EventEntry{address:address,amount:int32,prediction:int16,timestamp:int32,name:Maybe ^string,message:Maybe ^string}> prize_pool:coins lockTime:Maybe int32 = EventStats`
Signature: `EventStats{created_at:int32,owner:address,terms:^string,resolutionTime:Maybe int32,entries_limit:int16,pool_locked:bool,event_entries:dict<address, ^EventEntry{address:address,amount:int32,prediction:int16,timestamp:int32,name:Maybe ^string,message:Maybe ^string}>,prize_pool:coins,lockTime:Maybe int32}`

# Get Methods
Total Get Methods: 4

## balance

## prize_pool

## owner

## full_stats

# Error Codes
2: Stack undeflow
3: Stack overflow
4: Integer overflow
5: Integer out of expected range
6: Invalid opcode
7: Type check error
8: Cell overflow
9: Cell underflow
10: Dictionary error
13: Out of gas error
32: Method ID not found
34: Action is invalid or not supported
37: Not enough TON
38: Not enough extra-currencies
128: Null reference exception
129: Invalid serialization prefix
130: Invalid incoming message
131: Constraints error
132: Access denied
133: Contract stopped
134: Invalid argument
135: Code of a contract was not found
136: Invalid address
137: Masterchain support is not enabled for this contract
32619: You must be owner to lock the pool
35641: Not enough value to accept prize pool
56666: You must be owner to cancel event and destroy contract