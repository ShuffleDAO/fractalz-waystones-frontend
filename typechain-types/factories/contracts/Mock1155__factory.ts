/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Mock1155, Mock1155Interface } from "../../contracts/Mock1155";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060408051808201909152600f81526e697066733a2f2f616263646566672f60881b602082015262000043816200004a565b50620001cd565b600262000058828262000101565b5050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200008757607f821691505b602082108103620000a857634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620000fc57600081815260208120601f850160051c81016020861015620000d75750805b601f850160051c820191505b81811015620000f857828155600101620000e3565b5050505b505050565b81516001600160401b038111156200011d576200011d6200005c565b62000135816200012e845462000072565b84620000ae565b602080601f8311600181146200016d5760008415620001545750858301515b600019600386901b1c1916600185901b178555620000f8565b600085815260208120601f198616915b828110156200019e578886015182559484019460019091019084016200017d565b5085821015620001bd5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b611c5680620001dd6000396000f3fe608060405234801561001057600080fd5b50600436106100a25760003560e01c80634e1273f411610076578063a22cb4651161005b578063a22cb46514610158578063e985e9c51461016b578063f242432a146101b457600080fd5b80634e1273f414610125578063a0712d681461014557600080fd5b8062fdd58e146100a757806301ffc9a7146100cd5780630e89341c146100f05780632eb2c2d614610110575b600080fd5b6100ba6100b5366004611416565b6101c7565b6040519081526020015b60405180910390f35b6100e06100db36600461146e565b6102a7565b60405190151581526020016100c4565b6101036100fe366004611492565b61038a565b6040516100c4919061150f565b61012361011e3660046116c3565b61041e565b005b61013861013336600461176d565b6104e7565b6040516100c49190611873565b610123610153366004611492565b61063f565b610123610166366004611886565b61065e565b6100e06101793660046118c2565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205460ff1690565b6101236101c23660046118f5565b61066d565b600073ffffffffffffffffffffffffffffffffffffffff8316610271576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f455243313135353a2061646472657373207a65726f206973206e6f742061207660448201527f616c6964206f776e65720000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b5060008181526020818152604080832073ffffffffffffffffffffffffffffffffffffffff861684529091529020545b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fd9b67a2600000000000000000000000000000000000000000000000000000000148061033a57507fffffffff0000000000000000000000000000000000000000000000000000000082167f0e89341c00000000000000000000000000000000000000000000000000000000145b806102a157507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316146102a1565b6060600280546103999061195a565b80601f01602080910402602001604051908101604052809291908181526020018280546103c59061195a565b80156104125780601f106103e757610100808354040283529160200191610412565b820191906000526020600020905b8154815290600101906020018083116103f557829003601f168201915b50505050509050919050565b73ffffffffffffffffffffffffffffffffffffffff851633148061044757506104478533610179565b6104d3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206e6f7220617070726f76656400000000000000000000000000000000006064820152608401610268565b6104e0858585858561072f565b5050505050565b6060815183511461057a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e67746860448201527f206d69736d6174636800000000000000000000000000000000000000000000006064820152608401610268565b6000835167ffffffffffffffff81111561059657610596611522565b6040519080825280602002602001820160405280156105bf578160200160208202803683370190505b50905060005b84518110156106375761060a8582815181106105e3576105e36119ad565b60200260200101518583815181106105fd576105fd6119ad565b60200260200101516101c7565b82828151811061061c5761061c6119ad565b602090810291909101015261063081611a0b565b90506105c5565b509392505050565b61065b3360018360405180602001604052806000815250610a69565b50565b610669338383610bda565b5050565b73ffffffffffffffffffffffffffffffffffffffff851633148061069657506106968533610179565b610722576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206e6f7220617070726f76656400000000000000000000000000000000006064820152608401610268565b6104e08585858585610d2d565b81518351146107c0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060448201527f6d69736d617463680000000000000000000000000000000000000000000000006064820152608401610268565b73ffffffffffffffffffffffffffffffffffffffff8416610863576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610268565b3360005b84518110156109d4576000858281518110610884576108846119ad565b6020026020010151905060008583815181106108a2576108a26119ad565b6020908102919091018101516000848152808352604080822073ffffffffffffffffffffffffffffffffffffffff8e16835290935291909120549091508181101561096f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201527f72207472616e73666572000000000000000000000000000000000000000000006064820152608401610268565b60008381526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8e8116855292528083208585039055908b168252812080548492906109b9908490611a43565b92505081905550505050806109cd90611a0b565b9050610867565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610a4b929190611a56565b60405180910390a4610a61818787878787610f6b565b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610b0c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610268565b336000610b18856111f5565b90506000610b25856111f5565b905060008681526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8b16845290915281208054879290610b64908490611a43565b9091555050604080518781526020810187905273ffffffffffffffffffffffffffffffffffffffff808a1692600092918716917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4610bd183600089898989611240565b50505050505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610c95576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c2073746174757360448201527f20666f722073656c6600000000000000000000000000000000000000000000006064820152608401610268565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8416610dd0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610268565b336000610ddc856111f5565b90506000610de9856111f5565b905060008681526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8c16845290915290205485811015610ea9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201527f72207472616e73666572000000000000000000000000000000000000000000006064820152608401610268565b60008781526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8d8116855292528083208985039055908a16825281208054889290610ef3908490611a43565b9091555050604080518881526020810188905273ffffffffffffffffffffffffffffffffffffffff808b16928c821692918816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4610f60848a8a8a8a8a611240565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84163b15610a61576040517fbc197c8100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063bc197c8190610fe29089908990889088908890600401611a84565b6020604051808303816000875af192505050801561103b575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261103891810190611aef565b60015b61112457611047611b0c565b806308c379a00361109a575061105b611b28565b80611066575061109c565b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610268919061150f565b505b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e204552433131353560448201527f526563656976657220696d706c656d656e7465720000000000000000000000006064820152608401610268565b7fffffffff0000000000000000000000000000000000000000000000000000000081167fbc197c810000000000000000000000000000000000000000000000000000000014610bd1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a6563746560448201527f6420746f6b656e730000000000000000000000000000000000000000000000006064820152608401610268565b6040805160018082528183019092526060916000919060208083019080368337019050509050828160008151811061122f5761122f6119ad565b602090810291909101015292915050565b73ffffffffffffffffffffffffffffffffffffffff84163b15610a61576040517ff23a6e6100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063f23a6e61906112b79089908990889088908890600401611bd0565b6020604051808303816000875af1925050508015611310575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261130d91810190611aef565b60015b61131c57611047611b0c565b7fffffffff0000000000000000000000000000000000000000000000000000000081167ff23a6e610000000000000000000000000000000000000000000000000000000014610bd1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a6563746560448201527f6420746f6b656e730000000000000000000000000000000000000000000000006064820152608401610268565b803573ffffffffffffffffffffffffffffffffffffffff8116811461141157600080fd5b919050565b6000806040838503121561142957600080fd5b611432836113ed565b946020939093013593505050565b7fffffffff000000000000000000000000000000000000000000000000000000008116811461065b57600080fd5b60006020828403121561148057600080fd5b813561148b81611440565b9392505050565b6000602082840312156114a457600080fd5b5035919050565b6000815180845260005b818110156114d1576020818501810151868301820152016114b5565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152600061148b60208301846114ab565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116810181811067ffffffffffffffff8211171561159557611595611522565b6040525050565b600067ffffffffffffffff8211156115b6576115b6611522565b5060051b60200190565b600082601f8301126115d157600080fd5b813560206115de8261159c565b6040516115eb8282611551565b83815260059390931b850182019282810191508684111561160b57600080fd5b8286015b84811015611626578035835291830191830161160f565b509695505050505050565b600082601f83011261164257600080fd5b813567ffffffffffffffff81111561165c5761165c611522565b60405161169160207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8501160182611551565b8181528460208386010111156116a657600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a086880312156116db57600080fd5b6116e4866113ed565b94506116f2602087016113ed565b9350604086013567ffffffffffffffff8082111561170f57600080fd5b61171b89838a016115c0565b9450606088013591508082111561173157600080fd5b61173d89838a016115c0565b9350608088013591508082111561175357600080fd5b5061176088828901611631565b9150509295509295909350565b6000806040838503121561178057600080fd5b823567ffffffffffffffff8082111561179857600080fd5b818501915085601f8301126117ac57600080fd5b813560206117b98261159c565b6040516117c68282611551565b83815260059390931b85018201928281019150898411156117e657600080fd5b948201945b8386101561180b576117fc866113ed565b825294820194908201906117eb565b9650508601359250508082111561182157600080fd5b5061182e858286016115c0565b9150509250929050565b600081518084526020808501945080840160005b838110156118685781518752958201959082019060010161184c565b509495945050505050565b60208152600061148b6020830184611838565b6000806040838503121561189957600080fd5b6118a2836113ed565b9150602083013580151581146118b757600080fd5b809150509250929050565b600080604083850312156118d557600080fd5b6118de836113ed565b91506118ec602084016113ed565b90509250929050565b600080600080600060a0868803121561190d57600080fd5b611916866113ed565b9450611924602087016113ed565b93506040860135925060608601359150608086013567ffffffffffffffff81111561194e57600080fd5b61176088828901611631565b600181811c9082168061196e57607f821691505b6020821081036119a7577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611a3c57611a3c6119dc565b5060010190565b808201808211156102a1576102a16119dc565b604081526000611a696040830185611838565b8281036020840152611a7b8185611838565b95945050505050565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525060a06040830152611abd60a0830186611838565b8281036060840152611acf8186611838565b90508281036080840152611ae381856114ab565b98975050505050505050565b600060208284031215611b0157600080fd5b815161148b81611440565b600060033d1115611b255760046000803e5060005160e01c5b90565b600060443d1015611b365790565b6040517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc803d016004833e81513d67ffffffffffffffff8160248401118184111715611b8457505050505090565b8285019150815181811115611b9c5750505050505090565b843d8701016020828501011115611bb65750505050505090565b611bc560208286010187611551565b509095945050505050565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525084604083015283606083015260a06080830152611c1560a08301846114ab565b97965050505050505056fea2646970667358221220477e252a522db20e05937fe65e72407bdf7fc5c2d8273c5b767f92814ad3b05664736f6c63430008110033";

type Mock1155ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Mock1155ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Mock1155__factory extends ContractFactory {
  constructor(...args: Mock1155ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Mock1155> {
    return super.deploy(overrides || {}) as Promise<Mock1155>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Mock1155 {
    return super.attach(address) as Mock1155;
  }
  override connect(signer: Signer): Mock1155__factory {
    return super.connect(signer) as Mock1155__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Mock1155Interface {
    return new utils.Interface(_abi) as Mock1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Mock1155 {
    return new Contract(address, _abi, signerOrProvider) as Mock1155;
  }
}