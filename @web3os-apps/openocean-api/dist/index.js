function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "tokenList", () => $5a7f45bc7ff73f7a$export$433ece0ffb4f36c7);
$parcel$export(module.exports, "getBalance", () => $5a7f45bc7ff73f7a$export$df96cd8d56be0ab1);
const $5a7f45bc7ff73f7a$var$BaseURL = "https://open-api.openocean.finance/v1/cross";
async function $5a7f45bc7ff73f7a$export$433ece0ffb4f36c7(chain = 1) {
    const result = await fetch(`${$5a7f45bc7ff73f7a$var$BaseURL}/tokenList?chainId=${chain}`);
    const { code: code , data: data  } = await result.json();
    if (code !== 200) throw new Error(result);
    return data;
}
async function $5a7f45bc7ff73f7a$export$df96cd8d56be0ab1(chain = 1, account, inTokenAddress) {
    if (!account || !inTokenAddress) throw new Error("Account and inTokenAddress are required");
    const result = await fetch(`${$5a7f45bc7ff73f7a$var$BaseURL}/getBalance?chainId=${chain}&account=${account}&inTokenAddress=${inTokenAddress}`);
    const { code: code , data: data  } = await result.json();
    if (code !== 200) throw new Error(result);
    return data;
}


//# sourceMappingURL=index.js.map
