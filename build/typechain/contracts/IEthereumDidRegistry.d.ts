/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IEthereumDidRegistryInterface extends ethers.utils.Interface {
  functions: {
    "identityOwner(address)": FunctionFragment;
    "setAttribute(address,bytes32,bytes,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "identityOwner",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setAttribute",
    values: [string, BytesLike, BytesLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "identityOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAttribute",
    data: BytesLike
  ): Result;

  events: {};
}

export class IEthereumDidRegistry extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IEthereumDidRegistryInterface;

  functions: {
    identityOwner(
      identity: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "identityOwner(address)"(
      identity: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    setAttribute(
      identity: string,
      name: BytesLike,
      value: BytesLike,
      validity: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setAttribute(address,bytes32,bytes,uint256)"(
      identity: string,
      name: BytesLike,
      value: BytesLike,
      validity: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  identityOwner(identity: string, overrides?: CallOverrides): Promise<string>;

  "identityOwner(address)"(
    identity: string,
    overrides?: CallOverrides
  ): Promise<string>;

  setAttribute(
    identity: string,
    name: BytesLike,
    value: BytesLike,
    validity: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setAttribute(address,bytes32,bytes,uint256)"(
    identity: string,
    name: BytesLike,
    value: BytesLike,
    validity: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    identityOwner(identity: string, overrides?: CallOverrides): Promise<string>;

    "identityOwner(address)"(
      identity: string,
      overrides?: CallOverrides
    ): Promise<string>;

    setAttribute(
      identity: string,
      name: BytesLike,
      value: BytesLike,
      validity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setAttribute(address,bytes32,bytes,uint256)"(
      identity: string,
      name: BytesLike,
      value: BytesLike,
      validity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    identityOwner(
      identity: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "identityOwner(address)"(
      identity: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAttribute(
      identity: string,
      name: BytesLike,
      value: BytesLike,
      validity: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setAttribute(address,bytes32,bytes,uint256)"(
      identity: string,
      name: BytesLike,
      value: BytesLike,
      validity: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    identityOwner(
      identity: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "identityOwner(address)"(
      identity: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAttribute(
      identity: string,
      name: BytesLike,
      value: BytesLike,
      validity: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setAttribute(address,bytes32,bytes,uint256)"(
      identity: string,
      name: BytesLike,
      value: BytesLike,
      validity: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}