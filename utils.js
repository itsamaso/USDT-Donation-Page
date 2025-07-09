// Hardcoded exchange rates for demo purposes
const chainToUsdRate = {
  "0x1": 3200,     // Ethereum Mainnet (ETH to USD)
  "0x38": 600,     // Binance Smart Chain (BNB to USD)
  "0x89": 0.7,     // Polygon (MATIC to USD)
  "0xa86a": 30,    // Avalanche (AVAX to USD)
  "0xfa": 0.5,     // Fantom (FTM to USD)
  // Add other networks if needed
};

/**
 * Converts a crypto amount to USD
 */
export async function convertToUsd(amount, chainId) {
  const rate = chainToUsdRate[chainId];
  if (!rate || isNaN(amount)) return "0.00";
  const usd = parseFloat(amount) * rate;
  return usd.toFixed(2);
}

/**
 * Converts a USD amount to crypto
 */
export async function convertToCurrency(usd, chainId) {
  const rate = chainToUsdRate[chainId];
  if (!rate || isNaN(usd)) return "0.00";
  const crypto = parseFloat(usd) / rate;
  return crypto.toFixed(6);
}

/**
 * Maps chainId to the currency symbol
 */
export function chainIdToCurrencyCode(chainId) {
  const map = {
    "0x1": "ETH",
    "0x38": "BNB",
    "0x89": "MATIC",
    "0xa86a": "AVAX",
    "0xfa": "FTM",
    // Add more if needed
  };
  return map[chainId] || "NATIVE";
}