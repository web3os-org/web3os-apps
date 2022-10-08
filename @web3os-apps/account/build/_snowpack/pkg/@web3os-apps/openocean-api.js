const $177371fd3c8a6f90$var$BaseURL = "https://open-api.openocean.finance/v1/cross";
async function $177371fd3c8a6f90$export$433ece0ffb4f36c7(chain = 1) {
  const result = await fetch(`${$177371fd3c8a6f90$var$BaseURL}/tokenList?chainId=${chain}`);
  const {code, data} = await result.json();
  if (code !== 200)
    throw new Error(result);
  return data;
}
async function $177371fd3c8a6f90$export$df96cd8d56be0ab1(chain = 1, account, inTokenAddress) {
  if (!account || !inTokenAddress)
    throw new Error("Account and inTokenAddress are required");
  const result = await fetch(`${$177371fd3c8a6f90$var$BaseURL}/getBalance?chainId=${chain}&account=${account}&inTokenAddress=${inTokenAddress}`);
  const {code, data} = await result.json();
  if (code !== 200)
    throw new Error(result);
  return data;
}

export { $177371fd3c8a6f90$export$df96cd8d56be0ab1 as getBalance, $177371fd3c8a6f90$export$433ece0ffb4f36c7 as tokenList };
