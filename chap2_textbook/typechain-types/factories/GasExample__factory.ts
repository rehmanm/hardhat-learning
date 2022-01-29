/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GasExample, GasExampleInterface } from "../GasExample";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600073c4fe5518f0168da7bbafe375cd84d30f64cda491905060006040518060400160405280600e81526020017f706172616d2d737472696e672d3100000000000000000000000000000000000081525090506000600a9050600060608473ffffffffffffffffffffffffffffffffffffffff166103e8858560405160240161009b929190610542565b6040516020818303038152906040527f4034131d000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051610125919061052b565b60006040518083038160008787f1925050503d8060008114610163576040519150601f19603f3d011682016040523d82523d6000602084013e610168565b606091505b5080925081935050508161017b57600080fd5b8473ffffffffffffffffffffffffffffffffffffffff166103e885856040516024016101a8929190610542565b6040516020818303038152906040527f4034131d000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051610232919061052b565b6000604051808303818686f4925050503d806000811461026e576040519150601f19603f3d011682016040523d82523d6000602084013e610273565b606091505b5080925081935050508161028657600080fd5b8473ffffffffffffffffffffffffffffffffffffffff166103e885856040516024016102b3929190610542565b6040516020818303038152906040527f4034131d000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505060405161033d919061052b565b60006040518083038185875af1925050503d806000811461037a576040519150601f19603f3d011682016040523d82523d6000602084013e61037f565b606091505b5080925081935050508161039257600080fd5b8473ffffffffffffffffffffffffffffffffffffffff166103e8670de0b6b3a764000086866040516024016103c8929190610542565b6040516020818303038152906040527f4034131d000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051610452919061052b565b600060405180830381858888f193505050503d8060008114610490576040519150601f19603f3d011682016040523d82523d6000602084013e610495565b606091505b508092508193505050816104a857600080fd5b50505050506105f2565b60006104bd82610572565b6104c78185610588565b93506104d78185602086016105ae565b80840191505092915050565b60006104ee8261057d565b6104f88185610593565b93506105088185602086016105ae565b610511816105e1565b840191505092915050565b610525816105a4565b82525050565b600061053782846104b2565b915081905092915050565b6000604082019050818103600083015261055c81856104e3565b905061056b602083018461051c565b9392505050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000819050919050565b60005b838110156105cc5780820151818401526020810190506105b1565b838111156105db576000848401525b50505050565b6000601f19601f8301169050919050565b603f806106006000396000f3fe6080604052600080fdfea264697066735822122009b91f93d751c84927aa056d413e16f4744ec1d57839157bdd997fc5a26e928864736f6c63430008040033";

type GasExampleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GasExampleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GasExample__factory extends ContractFactory {
  constructor(...args: GasExampleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "GasExample";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GasExample> {
    return super.deploy(overrides || {}) as Promise<GasExample>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GasExample {
    return super.attach(address) as GasExample;
  }
  connect(signer: Signer): GasExample__factory {
    return super.connect(signer) as GasExample__factory;
  }
  static readonly contractName: "GasExample";
  public readonly contractName: "GasExample";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GasExampleInterface {
    return new utils.Interface(_abi) as GasExampleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GasExample {
    return new Contract(address, _abi, signerOrProvider) as GasExample;
  }
}