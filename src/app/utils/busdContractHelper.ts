import Web3 from "web3";
import busdABI from "./busdContractABI.json";

const web3 = new Web3(window.ethereum);
const busdContractAddress = "0x8516Fc284AEEaa0374E66037BD2309349FF728eA";
const busdContractInstance = new web3.eth.Contract(
  busdABI,
  busdContractAddress
);

export default busdContractInstance;

/**Vote Smart Contract instance is being  created here  */

/**and vote contract instance is created by connecting with contract and we connect by calling  Contract method in which we pass
 * VoteABI and Contract Address*/
