/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CallExample, CallExampleInterface } from "../CallExample";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600073c4fe5518f0168da7bbafe375cd84d30f64cda491905060006040518060400160405280600e81526020017f706172616d2d737472696e672d3100000000000000000000000000000000000081525090506000600a9050600060608473ffffffffffffffffffffffffffffffffffffffff168484604051602401610098929190610318565b6040516020818303038152906040527f4034131d000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040516101229190610301565b6000604051808303816000865af19150503d806000811461015f576040519150601f19603f3d011682016040523d82523d6000602084013e610164565b606091505b5080925081935050508161017757600080fd5b8473ffffffffffffffffffffffffffffffffffffffff1684846040516024016101a1929190610318565b6040516020818303038152906040527f4034131d000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505060405161022b9190610301565b600060405180830381855af49150503d8060008114610266576040519150601f19603f3d011682016040523d82523d6000602084013e61026b565b606091505b5080925081935050508161027e57600080fd5b50505050506103c8565b600061029382610348565b61029d818561035e565b93506102ad818560208601610384565b80840191505092915050565b60006102c482610353565b6102ce8185610369565b93506102de818560208601610384565b6102e7816103b7565b840191505092915050565b6102fb8161037a565b82525050565b600061030d8284610288565b915081905092915050565b6000604082019050818103600083015261033281856102b9565b905061034160208301846102f2565b9392505050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000819050919050565b60005b838110156103a2578082015181840152602081019050610387565b838111156103b1576000848401525b50505050565b6000601f19601f8301169050919050565b603f806103d66000396000f3fe6080604052600080fdfea2646970667358221220cfd3a8abe08917e51c9e5b2c9bb8a48d0e78e2c659509d42fb123210619774e464736f6c63430008040033";

type CallExampleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CallExampleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CallExample__factory extends ContractFactory {
  constructor(...args: CallExampleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "CallExample";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CallExample> {
    return super.deploy(overrides || {}) as Promise<CallExample>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CallExample {
    return super.attach(address) as CallExample;
  }
  connect(signer: Signer): CallExample__factory {
    return super.connect(signer) as CallExample__factory;
  }
  static readonly contractName: "CallExample";
  public readonly contractName: "CallExample";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CallExampleInterface {
    return new utils.Interface(_abi) as CallExampleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CallExample {
    return new Contract(address, _abi, signerOrProvider) as CallExample;
  }
}
