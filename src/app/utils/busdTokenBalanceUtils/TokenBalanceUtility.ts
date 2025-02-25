import busdContractInstance from "../busdContractHelper";

export const getBUSDTokenBalance = async (
  userAddress: string
): Promise<string | null> => {
  try {
    const balance: unknown = await busdContractInstance.methods
      .balanceOf(userAddress)
      .call();

    if (typeof balance === "bigint" || balance instanceof BigInt) {
      return balance.toString(); // Convert BigInt to string
    }

    console.warn("Unexpected balance type:", balance);
    return null;
  } catch (error) {
    console.error("Error fetching user balance:", error);
    return null;
  }
};
