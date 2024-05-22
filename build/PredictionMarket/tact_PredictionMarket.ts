import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from '@ton/core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Cell;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw);
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw);
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwner = {
    $$type: 'ChangeOwner';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwner(src: ChangeOwner) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2174598809, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwner(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2174598809) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwner(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwner(source: ChangeOwner) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserChangeOwner(): DictionaryValue<ChangeOwner> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeChangeOwner(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwner(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwnerOk = {
    $$type: 'ChangeOwnerOk';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwnerOk(src: ChangeOwnerOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(846932810, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwnerOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 846932810) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwnerOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwnerOk(source: ChangeOwnerOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserChangeOwnerOk(): DictionaryValue<ChangeOwnerOk> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeChangeOwnerOk(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwnerOk(src.loadRef().beginParse());
        }
    }
}

export type EventConfigMessage = {
    $$type: 'EventConfigMessage';
    terms: string;
    prize_pool: bigint;
    resolutionTime: bigint;
    entries_limit: bigint;
}

export function storeEventConfigMessage(src: EventConfigMessage) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3442178650, 32);
        b_0.storeStringRefTail(src.terms);
        b_0.storeCoins(src.prize_pool);
        b_0.storeInt(src.resolutionTime, 32);
        b_0.storeInt(src.entries_limit, 16);
    };
}

export function loadEventConfigMessage(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3442178650) { throw Error('Invalid prefix'); }
    let _terms = sc_0.loadStringRefTail();
    let _prize_pool = sc_0.loadCoins();
    let _resolutionTime = sc_0.loadIntBig(32);
    let _entries_limit = sc_0.loadIntBig(16);
    return { $$type: 'EventConfigMessage' as const, terms: _terms, prize_pool: _prize_pool, resolutionTime: _resolutionTime, entries_limit: _entries_limit };
}

function loadTupleEventConfigMessage(source: TupleReader) {
    let _terms = source.readString();
    let _prize_pool = source.readBigNumber();
    let _resolutionTime = source.readBigNumber();
    let _entries_limit = source.readBigNumber();
    return { $$type: 'EventConfigMessage' as const, terms: _terms, prize_pool: _prize_pool, resolutionTime: _resolutionTime, entries_limit: _entries_limit };
}

function storeTupleEventConfigMessage(source: EventConfigMessage) {
    let builder = new TupleBuilder();
    builder.writeString(source.terms);
    builder.writeNumber(source.prize_pool);
    builder.writeNumber(source.resolutionTime);
    builder.writeNumber(source.entries_limit);
    return builder.build();
}

function dictValueParserEventConfigMessage(): DictionaryValue<EventConfigMessage> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeEventConfigMessage(src)).endCell());
        },
        parse: (src) => {
            return loadEventConfigMessage(src.loadRef().beginParse());
        }
    }
}

export type EventEntryMessage = {
    $$type: 'EventEntryMessage';
    address: Address;
    amount: bigint;
    prediction: bigint;
    name: string | null;
    message: string | null;
}

export function storeEventEntryMessage(src: EventEntryMessage) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(120378075, 32);
        b_0.storeAddress(src.address);
        b_0.storeInt(src.amount, 32);
        b_0.storeInt(src.prediction, 16);
        if (src.name !== null && src.name !== undefined) { b_0.storeBit(true).storeStringRefTail(src.name); } else { b_0.storeBit(false); }
        if (src.message !== null && src.message !== undefined) { b_0.storeBit(true).storeStringRefTail(src.message); } else { b_0.storeBit(false); }
    };
}

export function loadEventEntryMessage(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 120378075) { throw Error('Invalid prefix'); }
    let _address = sc_0.loadAddress();
    let _amount = sc_0.loadIntBig(32);
    let _prediction = sc_0.loadIntBig(16);
    let _name = sc_0.loadBit() ? sc_0.loadStringRefTail() : null;
    let _message = sc_0.loadBit() ? sc_0.loadStringRefTail() : null;
    return { $$type: 'EventEntryMessage' as const, address: _address, amount: _amount, prediction: _prediction, name: _name, message: _message };
}

function loadTupleEventEntryMessage(source: TupleReader) {
    let _address = source.readAddress();
    let _amount = source.readBigNumber();
    let _prediction = source.readBigNumber();
    let _name = source.readStringOpt();
    let _message = source.readStringOpt();
    return { $$type: 'EventEntryMessage' as const, address: _address, amount: _amount, prediction: _prediction, name: _name, message: _message };
}

function storeTupleEventEntryMessage(source: EventEntryMessage) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.address);
    builder.writeNumber(source.amount);
    builder.writeNumber(source.prediction);
    builder.writeString(source.name);
    builder.writeString(source.message);
    return builder.build();
}

function dictValueParserEventEntryMessage(): DictionaryValue<EventEntryMessage> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeEventEntryMessage(src)).endCell());
        },
        parse: (src) => {
            return loadEventEntryMessage(src.loadRef().beginParse());
        }
    }
}

export type EventEntry = {
    $$type: 'EventEntry';
    address: Address;
    amount: bigint;
    prediction: bigint;
    timestamp: bigint;
    name: string | null;
    message: string | null;
}

export function storeEventEntry(src: EventEntry) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.address);
        b_0.storeInt(src.amount, 32);
        b_0.storeInt(src.prediction, 16);
        b_0.storeInt(src.timestamp, 32);
        if (src.name !== null && src.name !== undefined) { b_0.storeBit(true).storeStringRefTail(src.name); } else { b_0.storeBit(false); }
        if (src.message !== null && src.message !== undefined) { b_0.storeBit(true).storeStringRefTail(src.message); } else { b_0.storeBit(false); }
    };
}

export function loadEventEntry(slice: Slice) {
    let sc_0 = slice;
    let _address = sc_0.loadAddress();
    let _amount = sc_0.loadIntBig(32);
    let _prediction = sc_0.loadIntBig(16);
    let _timestamp = sc_0.loadIntBig(32);
    let _name = sc_0.loadBit() ? sc_0.loadStringRefTail() : null;
    let _message = sc_0.loadBit() ? sc_0.loadStringRefTail() : null;
    return { $$type: 'EventEntry' as const, address: _address, amount: _amount, prediction: _prediction, timestamp: _timestamp, name: _name, message: _message };
}

function loadTupleEventEntry(source: TupleReader) {
    let _address = source.readAddress();
    let _amount = source.readBigNumber();
    let _prediction = source.readBigNumber();
    let _timestamp = source.readBigNumber();
    let _name = source.readStringOpt();
    let _message = source.readStringOpt();
    return { $$type: 'EventEntry' as const, address: _address, amount: _amount, prediction: _prediction, timestamp: _timestamp, name: _name, message: _message };
}

function storeTupleEventEntry(source: EventEntry) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.address);
    builder.writeNumber(source.amount);
    builder.writeNumber(source.prediction);
    builder.writeNumber(source.timestamp);
    builder.writeString(source.name);
    builder.writeString(source.message);
    return builder.build();
}

function dictValueParserEventEntry(): DictionaryValue<EventEntry> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeEventEntry(src)).endCell());
        },
        parse: (src) => {
            return loadEventEntry(src.loadRef().beginParse());
        }
    }
}

export type EventStats = {
    $$type: 'EventStats';
    created_at: bigint;
    owner: Address;
    terms: string;
    resolutionTime: bigint | null;
    entries_limit: bigint;
    pool_locked: boolean;
    event_entries: Dictionary<Address, EventEntry>;
    prize_pool: bigint;
    lockTime: bigint | null;
}

export function storeEventStats(src: EventStats) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.created_at, 32);
        b_0.storeAddress(src.owner);
        b_0.storeStringRefTail(src.terms);
        if (src.resolutionTime !== null && src.resolutionTime !== undefined) { b_0.storeBit(true).storeInt(src.resolutionTime, 32); } else { b_0.storeBit(false); }
        b_0.storeInt(src.entries_limit, 16);
        b_0.storeBit(src.pool_locked);
        b_0.storeDict(src.event_entries, Dictionary.Keys.Address(), dictValueParserEventEntry());
        b_0.storeCoins(src.prize_pool);
        if (src.lockTime !== null && src.lockTime !== undefined) { b_0.storeBit(true).storeInt(src.lockTime, 32); } else { b_0.storeBit(false); }
    };
}

export function loadEventStats(slice: Slice) {
    let sc_0 = slice;
    let _created_at = sc_0.loadIntBig(32);
    let _owner = sc_0.loadAddress();
    let _terms = sc_0.loadStringRefTail();
    let _resolutionTime = sc_0.loadBit() ? sc_0.loadIntBig(32) : null;
    let _entries_limit = sc_0.loadIntBig(16);
    let _pool_locked = sc_0.loadBit();
    let _event_entries = Dictionary.load(Dictionary.Keys.Address(), dictValueParserEventEntry(), sc_0);
    let _prize_pool = sc_0.loadCoins();
    let _lockTime = sc_0.loadBit() ? sc_0.loadIntBig(32) : null;
    return { $$type: 'EventStats' as const, created_at: _created_at, owner: _owner, terms: _terms, resolutionTime: _resolutionTime, entries_limit: _entries_limit, pool_locked: _pool_locked, event_entries: _event_entries, prize_pool: _prize_pool, lockTime: _lockTime };
}

function loadTupleEventStats(source: TupleReader) {
    let _created_at = source.readBigNumber();
    let _owner = source.readAddress();
    let _terms = source.readString();
    let _resolutionTime = source.readBigNumberOpt();
    let _entries_limit = source.readBigNumber();
    let _pool_locked = source.readBoolean();
    let _event_entries = Dictionary.loadDirect(Dictionary.Keys.Address(), dictValueParserEventEntry(), source.readCellOpt());
    let _prize_pool = source.readBigNumber();
    let _lockTime = source.readBigNumberOpt();
    return { $$type: 'EventStats' as const, created_at: _created_at, owner: _owner, terms: _terms, resolutionTime: _resolutionTime, entries_limit: _entries_limit, pool_locked: _pool_locked, event_entries: _event_entries, prize_pool: _prize_pool, lockTime: _lockTime };
}

function storeTupleEventStats(source: EventStats) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.created_at);
    builder.writeAddress(source.owner);
    builder.writeString(source.terms);
    builder.writeNumber(source.resolutionTime);
    builder.writeNumber(source.entries_limit);
    builder.writeBoolean(source.pool_locked);
    builder.writeCell(source.event_entries.size > 0 ? beginCell().storeDictDirect(source.event_entries, Dictionary.Keys.Address(), dictValueParserEventEntry()).endCell() : null);
    builder.writeNumber(source.prize_pool);
    builder.writeNumber(source.lockTime);
    return builder.build();
}

function dictValueParserEventStats(): DictionaryValue<EventStats> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeEventStats(src)).endCell());
        },
        parse: (src) => {
            return loadEventStats(src.loadRef().beginParse());
        }
    }
}

 type PredictionMarket_init_args = {
    $$type: 'PredictionMarket_init_args';
    owner: Address;
    config: EventConfigMessage;
}

function initPredictionMarket_init_args(src: PredictionMarket_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.owner);
        b_0.store(storeEventConfigMessage(src.config));
    };
}

async function PredictionMarket_init(owner: Address, config: EventConfigMessage) {
    const __code = Cell.fromBase64('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');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initPredictionMarket_init_args({ $$type: 'PredictionMarket_init_args', owner, config })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const PredictionMarket_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack undeflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
    32619: { message: `You must be owner to lock the pool` },
    35641: { message: `Not enough value to accept prize pool` },
    56666: { message: `You must be owner to cancel event and destroy contract` },
}

const PredictionMarket_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwner","header":2174598809,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwnerOk","header":846932810,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"EventConfigMessage","header":3442178650,"fields":[{"name":"terms","type":{"kind":"simple","type":"string","optional":false}},{"name":"prize_pool","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"resolutionTime","type":{"kind":"simple","type":"int","optional":false,"format":32}},{"name":"entries_limit","type":{"kind":"simple","type":"int","optional":false,"format":16}}]},
    {"name":"EventEntryMessage","header":120378075,"fields":[{"name":"address","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":32}},{"name":"prediction","type":{"kind":"simple","type":"int","optional":false,"format":16}},{"name":"name","type":{"kind":"simple","type":"string","optional":true}},{"name":"message","type":{"kind":"simple","type":"string","optional":true}}]},
    {"name":"EventEntry","header":null,"fields":[{"name":"address","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":32}},{"name":"prediction","type":{"kind":"simple","type":"int","optional":false,"format":16}},{"name":"timestamp","type":{"kind":"simple","type":"int","optional":false,"format":32}},{"name":"name","type":{"kind":"simple","type":"string","optional":true}},{"name":"message","type":{"kind":"simple","type":"string","optional":true}}]},
    {"name":"EventStats","header":null,"fields":[{"name":"created_at","type":{"kind":"simple","type":"int","optional":false,"format":32}},{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"terms","type":{"kind":"simple","type":"string","optional":false}},{"name":"resolutionTime","type":{"kind":"simple","type":"int","optional":true,"format":32}},{"name":"entries_limit","type":{"kind":"simple","type":"int","optional":false,"format":16}},{"name":"pool_locked","type":{"kind":"simple","type":"bool","optional":false}},{"name":"event_entries","type":{"kind":"dict","key":"address","value":"EventEntry","valueFormat":"ref"}},{"name":"prize_pool","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"lockTime","type":{"kind":"simple","type":"int","optional":true,"format":32}}]},
]

const PredictionMarket_getters: ABIGetter[] = [
    {"name":"balance","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"prize_pool","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"owner","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
    {"name":"full_stats","arguments":[],"returnType":{"kind":"simple","type":"EventStats","optional":false}},
]

const PredictionMarket_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"empty"}},
    {"receiver":"internal","message":{"kind":"typed","type":"EventConfigMessage"}},
    {"receiver":"internal","message":{"kind":"text","text":"lockPool"}},
    {"receiver":"internal","message":{"kind":"text","text":"cancelEvent"}},
    {"receiver":"internal","message":{"kind":"typed","type":"EventEntryMessage"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class PredictionMarket implements Contract {
    
    static async init(owner: Address, config: EventConfigMessage) {
        return await PredictionMarket_init(owner, config);
    }
    
    static async fromInit(owner: Address, config: EventConfigMessage) {
        const init = await PredictionMarket_init(owner, config);
        const address = contractAddress(0, init);
        return new PredictionMarket(address, init);
    }
    
    static fromAddress(address: Address) {
        return new PredictionMarket(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  PredictionMarket_types,
        getters: PredictionMarket_getters,
        receivers: PredictionMarket_receivers,
        errors: PredictionMarket_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: null | EventConfigMessage | 'lockPool' | 'cancelEvent' | EventEntryMessage | Deploy) {
        
        let body: Cell | null = null;
        if (message === null) {
            body = new Cell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'EventConfigMessage') {
            body = beginCell().store(storeEventConfigMessage(message)).endCell();
        }
        if (message === 'lockPool') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message === 'cancelEvent') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'EventEntryMessage') {
            body = beginCell().store(storeEventEntryMessage(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getBalance(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('balance', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getPrizePool(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('prize_pool', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getOwner(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('owner', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
    async getFullStats(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('full_stats', builder.build())).stack;
        const result = loadTupleEventStats(source);
        return result;
    }
    
}