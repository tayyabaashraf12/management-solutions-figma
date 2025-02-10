import VoteABI from "./VoteContractABI.json";
import web3 from "./Web3Helper";

if (!web3) {
  throw new Error(
    "Web3 is not initialized. Please check your Web3 connection."
  );
}
const voteContractAddress = "0x98b7c1f8B041994aFFD919006F1009e660f5449a";
const voteContractInstance = new web3.eth.Contract(
  VoteABI,
  voteContractAddress
);

export default voteContractInstance;

/**Vote Smart Contract instance is being  created here  */

/**and vote contract instance is created by connecting with contract and we connect by calling  Contract method in which we pass
 * VoteABI and Contract Address*/
