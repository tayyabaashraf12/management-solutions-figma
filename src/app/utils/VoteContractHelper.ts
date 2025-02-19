import Web3 from "web3";
import VoteABI from "./VoteContractABI.json";

const web3 = new Web3(window.ethereum);
const voteContractAddress = "0x98b7c1f8B041994aFFD919006F1009e660f5449a";
const voteContractInstance = new web3.eth.Contract(
  VoteABI,
  voteContractAddress
);

export default voteContractInstance;

/**Vote Smart Contract instance is being  created here  */

/**and vote contract instance is created by connecting with contract and we connect by calling  Contract method in which we pass
 * VoteABI and Contract Address*/
