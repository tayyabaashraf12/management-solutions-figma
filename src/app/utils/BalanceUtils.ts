import contractInstance from "./VoteContractHelper";

export const getUserBalance = async (
  connectedUserAccount: string
): Promise<string | null> => {
  try {
    const tokenBalance: unknown = await contractInstance.methods
      .balanceOf(connectedUserAccount)
      .call();

    if (typeof tokenBalance === "bigint" || tokenBalance instanceof BigInt) {
      return tokenBalance.toString(); // Convert BigInt to string
    }

    console.warn("Unexpected balance type:", tokenBalance);
    return null;
  } catch (error) {
    console.error("Error fetching user balance:", error);
    return null;
  }
};

/**User Balance represents the  Token Balance */

/**we have created getUserBalance arrow function in which we have called balanceOf method
 * of VoteContract ,and that method is present in Contract ABI (Application Binary Interface),
 * and this method will return user Balance
 */

/**---------Without .call() method--------
 *  Web3 has no way to know whether you're simply reading data or making a state-changing operation.*/

/** -------Adding .call() --------
 * adding of call method ensures the request is treated as a read-only query, which won't consume gas and will execute immediately. */

/**Quick Analogy
Imagine calling a pizza restaurant:

balanceOf(userAddress): You select the menu item (the function you want to use).
.call(): You tell the restaurant, "Just give me information about the pizza size," without ordering or changing anything.
.send(): You actually place the order for delivery, which requires payment and a wait time.
 */
