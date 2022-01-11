/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface AcceptEtherWithLogInterface extends utils.Interface {
  contractName: "AcceptEtherWithLog";
  functions: {
    "balance()": FunctionFragment;
    "deposit()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "balance", values?: undefined): string;
  encodeFunctionData(functionFragment: "deposit", values?: undefined): string;

  decodeFunctionResult(functionFragment: "balance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;

  events: {
    "Deposited(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposited"): EventFragment;
}

export type DepositedEvent = TypedEvent<
  [string, BigNumber],
  { _who: string; amount: BigNumber }
>;

export type DepositedEventFilter = TypedEventFilter<DepositedEvent>;

export interface AcceptEtherWithLog extends BaseContract {
  contractName: "AcceptEtherWithLog";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AcceptEtherWithLogInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    balance(overrides?: CallOverrides): Promise<[BigNumber]>;

    deposit(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  balance(overrides?: CallOverrides): Promise<BigNumber>;

  deposit(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    balance(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Deposited(address,uint256)"(
      _who?: string | null,
      amount?: null
    ): DepositedEventFilter;
    Deposited(_who?: string | null, amount?: null): DepositedEventFilter;
  };

  estimateGas: {
    balance(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}