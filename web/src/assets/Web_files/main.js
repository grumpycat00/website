(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ 5875:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useGetBalance: () => (/* binding */ useGetBalance),
/* harmony export */   useGetSignatures: () => (/* binding */ useGetSignatures),
/* harmony export */   useGetTokenAccounts: () => (/* binding */ useGetTokenAccounts),
/* harmony export */   useRequestAirdrop: () => (/* binding */ useRequestAirdrop),
/* harmony export */   useTransferSol: () => (/* binding */ useTransferSol)
/* harmony export */ });
/* harmony import */ var _home_revoli_Desktop_SiteGrumpyCat_main_grumpy_web_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7507);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8268);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9493);
/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6482);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5812);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5803);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3902);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4450);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6124);
/* harmony import */ var _ui_ui_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9838);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(3300);
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(8070);
__webpack_require__.$Refresh$.runtime = __webpack_require__(3536);


var _s = __webpack_require__.$Refresh$.signature(),
  _s2 = __webpack_require__.$Refresh$.signature(),
  _s3 = __webpack_require__.$Refresh$.signature(),
  _s4 = __webpack_require__.$Refresh$.signature(),
  _s5 = __webpack_require__.$Refresh$.signature();






function useGetBalance({
  address
}) {
  _s();
  const {
    connection
  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useConnection)();
  return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)({
    queryKey: ['get-balance', {
      endpoint: connection.rpcEndpoint,
      address
    }],
    queryFn: () => connection.getBalance(address)
  });
}
_s(useGetBalance, "pGNB5X4mb7w14WzYfbeSFvRC6S8=", false, function () {
  return [_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useConnection, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery];
});
function useGetSignatures({
  address
}) {
  _s2();
  const {
    connection
  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useConnection)();
  return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)({
    queryKey: ['get-signatures', {
      endpoint: connection.rpcEndpoint,
      address
    }],
    queryFn: () => connection.getConfirmedSignaturesForAddress2(address)
  });
}
_s2(useGetSignatures, "pGNB5X4mb7w14WzYfbeSFvRC6S8=", false, function () {
  return [_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useConnection, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery];
});
function useGetTokenAccounts({
  address
}) {
  _s3();
  const {
    connection
  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useConnection)();
  return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)({
    queryKey: ['get-token-accounts', {
      endpoint: connection.rpcEndpoint,
      address
    }],
    queryFn: async () => {
      const [tokenAccounts, token2022Accounts] = await Promise.all([connection.getParsedTokenAccountsByOwner(address, {
        programId: _solana_spl_token__WEBPACK_IMPORTED_MODULE_5__.TOKEN_PROGRAM_ID
      }), connection.getParsedTokenAccountsByOwner(address, {
        programId: _solana_spl_token__WEBPACK_IMPORTED_MODULE_5__.TOKEN_2022_PROGRAM_ID
      })]);
      return [...tokenAccounts.value, ...token2022Accounts.value];
    }
  });
}
_s3(useGetTokenAccounts, "pGNB5X4mb7w14WzYfbeSFvRC6S8=", false, function () {
  return [_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useConnection, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery];
});
function useTransferSol({
  address
}) {
  _s4();
  const {
    connection
  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useConnection)();
  const transactionToast = (0,_ui_ui_layout__WEBPACK_IMPORTED_MODULE_2__.useTransactionToast)();
  const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.useWallet)();
  const client = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.useQueryClient)();
  return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useMutation)({
    mutationKey: ['transfer-sol', {
      endpoint: connection.rpcEndpoint,
      address
    }],
    mutationFn: async input => {
      let signature = '';
      try {
        const {
          transaction,
          latestBlockhash
        } = await createTransaction({
          publicKey: address,
          destination: input.destination,
          amount: input.amount,
          connection
        });

        // Send transaction and await for signature
        signature = await wallet.sendTransaction(transaction, connection);

        // Send transaction and await for signature
        await connection.confirmTransaction((0,_home_revoli_Desktop_SiteGrumpyCat_main_grumpy_web_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_9__["default"])({
          signature
        }, latestBlockhash), 'confirmed');
        console.log(signature);
        return signature;
      } catch (error) {
        console.log('error', `Transaction failed! ${error}`, signature);
        return;
      }
    },
    onSuccess: signature => {
      if (signature) {
        transactionToast(signature);
      }
      return Promise.all([client.invalidateQueries({
        queryKey: ['get-balance', {
          endpoint: connection.rpcEndpoint,
          address
        }]
      }), client.invalidateQueries({
        queryKey: ['get-signatures', {
          endpoint: connection.rpcEndpoint,
          address
        }]
      })]);
    },
    onError: error => {
      react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"].error(`Transaction failed! ${error}`);
    }
  });
}
_s4(useTransferSol, "iDaLUVf+7Vuq+aK8Ee9Yf5i/hRY=", false, function () {
  return [_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useConnection, _ui_ui_layout__WEBPACK_IMPORTED_MODULE_2__.useTransactionToast, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.useWallet, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.useQueryClient, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useMutation];
});
function useRequestAirdrop({
  address
}) {
  _s5();
  const {
    connection
  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useConnection)();
  const transactionToast = (0,_ui_ui_layout__WEBPACK_IMPORTED_MODULE_2__.useTransactionToast)();
  const client = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.useQueryClient)();
  return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useMutation)({
    mutationKey: ['airdrop', {
      endpoint: connection.rpcEndpoint,
      address
    }],
    mutationFn: async (amount = 1) => {
      const [latestBlockhash, signature] = await Promise.all([connection.getLatestBlockhash(), connection.requestAirdrop(address, amount * _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.LAMPORTS_PER_SOL)]);
      await connection.confirmTransaction((0,_home_revoli_Desktop_SiteGrumpyCat_main_grumpy_web_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_9__["default"])({
        signature
      }, latestBlockhash), 'confirmed');
      return signature;
    },
    onSuccess: signature => {
      transactionToast(signature);
      return Promise.all([client.invalidateQueries({
        queryKey: ['get-balance', {
          endpoint: connection.rpcEndpoint,
          address
        }]
      }), client.invalidateQueries({
        queryKey: ['get-signatures', {
          endpoint: connection.rpcEndpoint,
          address
        }]
      })]);
    }
  });
}
_s5(useRequestAirdrop, "Ji1Tvj9JXabF0mVVlN9RBfq9kJQ=", false, function () {
  return [_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useConnection, _ui_ui_layout__WEBPACK_IMPORTED_MODULE_2__.useTransactionToast, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.useQueryClient, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useMutation];
});
async function createTransaction({
  publicKey,
  destination,
  amount,
  connection
}) {
  // Get the latest blockhash to use in our transaction
  const latestBlockhash = await connection.getLatestBlockhash();

  // Create instructions to send, in this case a simple transfer
  const instructions = [_solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: destination,
    lamports: amount * _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.LAMPORTS_PER_SOL
  })];

  // Create a new TransactionMessage with version and compile it to legacy
  const messageLegacy = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.TransactionMessage({
    payerKey: publicKey,
    recentBlockhash: latestBlockhash.blockhash,
    instructions
  }).compileToLegacyMessage();

  // Create a new VersionedTransaction which supports legacy and v0
  const transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.VersionedTransaction(messageLegacy);
  return {
    transaction,
    latestBlockhash
  };
}

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ 5532:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountBalance: () => (/* binding */ AccountBalance),
/* harmony export */   AccountBalanceCheck: () => (/* binding */ AccountBalanceCheck),
/* harmony export */   AccountButtons: () => (/* binding */ AccountButtons),
/* harmony export */   AccountChecker: () => (/* binding */ AccountChecker),
/* harmony export */   AccountTokens: () => (/* binding */ AccountTokens),
/* harmony export */   AccountTransactions: () => (/* binding */ AccountTransactions)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9493);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5812);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9112);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3902);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(626);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_ui_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9838);
/* harmony import */ var _cluster_cluster_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4491);
/* harmony import */ var _cluster_cluster_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7396);
/* harmony import */ var _account_data_access__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5875);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(716);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(3300);
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(8070);
__webpack_require__.$Refresh$.runtime = __webpack_require__(3536);

var _jsxFileName = "/home/revoli/Desktop/SiteGrumpyCat-main/grumpy-web/web/src/app/account/account-ui.tsx",
  _s = __webpack_require__.$Refresh$.signature(),
  _s2 = __webpack_require__.$Refresh$.signature(),
  _s3 = __webpack_require__.$Refresh$.signature(),
  _s4 = __webpack_require__.$Refresh$.signature(),
  _s5 = __webpack_require__.$Refresh$.signature(),
  _s6 = __webpack_require__.$Refresh$.signature(),
  _s7 = __webpack_require__.$Refresh$.signature(),
  _s8 = __webpack_require__.$Refresh$.signature();










function AccountBalance({
  address
}) {
  _s();
  const query = (0,_account_data_access__WEBPACK_IMPORTED_MODULE_5__.useGetBalance)({
    address
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
      className: "text-5xl font-bold cursor-pointer",
      onClick: () => query.refetch(),
      children: [query.data ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(BalanceSol, {
        balance: query.data
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 23
      }, this) : '...', " SOL"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
}
_s(AccountBalance, "ypPPflMNwvUC8vfqBlP4BJLHW90=", false, function () {
  return [_account_data_access__WEBPACK_IMPORTED_MODULE_5__.useGetBalance];
});
_c = AccountBalance;
function AccountChecker() {
  _s2();
  const {
    publicKey
  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useWallet)();
  if (!publicKey) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(AccountBalanceCheck, {
    address: publicKey
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_s2(AccountChecker, "mzyxrHmpp4PnhNILMr6pKoSuMFs=", false, function () {
  return [_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useWallet];
});
_c2 = AccountChecker;
function AccountBalanceCheck({
  address
}) {
  _s3();
  const {
    cluster
  } = (0,_cluster_cluster_data_access__WEBPACK_IMPORTED_MODULE_3__.useCluster)();
  const mutation = (0,_account_data_access__WEBPACK_IMPORTED_MODULE_5__.useRequestAirdrop)({
    address
  });
  const query = (0,_account_data_access__WEBPACK_IMPORTED_MODULE_5__.useGetBalance)({
    address
  });
  if (query.isLoading) {
    return null;
  }
  if (query.isError || !query.data) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "alert alert-warning text-warning-content/80 rounded-none flex justify-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
        children: ["You are connected to ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("strong", {
          children: cluster.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 32
        }, this), " but your account is not found on this cluster."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
        className: "btn btn-xs btn-neutral",
        onClick: () => mutation.mutateAsync(1).catch(err => console.log(err)),
        children: "Request Airdrop"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this);
  }
  return null;
}
_s3(AccountBalanceCheck, "SJmDxXNEZYVnh7aCd3Ke5L/lsxo=", false, function () {
  return [_cluster_cluster_data_access__WEBPACK_IMPORTED_MODULE_3__.useCluster, _account_data_access__WEBPACK_IMPORTED_MODULE_5__.useRequestAirdrop, _account_data_access__WEBPACK_IMPORTED_MODULE_5__.useGetBalance];
});
_c3 = AccountBalanceCheck;
function AccountButtons({
  address
}) {
  _s4();
  var _cluster$network, _wallet$publicKey;
  const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useWallet)();
  const {
    cluster
  } = (0,_cluster_cluster_data_access__WEBPACK_IMPORTED_MODULE_3__.useCluster)();
  const [showAirdropModal, setShowAirdropModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [showReceiveModal, setShowReceiveModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [showSendModal, setShowSendModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(ModalAirdrop, {
      hide: () => setShowAirdropModal(false),
      address: address,
      show: showAirdropModal
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(ModalReceive, {
      address: address,
      show: showReceiveModal,
      hide: () => setShowReceiveModal(false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(ModalSend, {
      address: address,
      show: showSendModal,
      hide: () => setShowSendModal(false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "space-x-2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
        disabled: (_cluster$network = cluster.network) == null ? void 0 : _cluster$network.includes('mainnet'),
        className: "btn btn-xs lg:btn-md btn-outline",
        onClick: () => setShowAirdropModal(true),
        children: "Airdrop"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
        disabled: ((_wallet$publicKey = wallet.publicKey) == null ? void 0 : _wallet$publicKey.toString()) !== address.toString(),
        className: "btn btn-xs lg:btn-md btn-outline",
        onClick: () => setShowSendModal(true),
        children: "Send"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
        className: "btn btn-xs lg:btn-md btn-outline",
        onClick: () => setShowReceiveModal(true),
        children: "Receive"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 5
  }, this);
}
_s4(AccountButtons, "ZYn9MWNM3GsKLGtQN7D1q6eBlrI=", false, function () {
  return [_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useWallet, _cluster_cluster_data_access__WEBPACK_IMPORTED_MODULE_3__.useCluster];
});
_c4 = AccountButtons;
function AccountTokens({
  address
}) {
  _s5();
  var _query$error, _query$data$length, _query$data2;
  const [showAll, setShowAll] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const query = (0,_account_data_access__WEBPACK_IMPORTED_MODULE_5__.useGetTokenAccounts)({
    address
  });
  const client = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQueryClient)();
  const items = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _query$data;
    if (showAll) return query.data;
    return (_query$data = query.data) == null ? void 0 : _query$data.slice(0, 5);
  }, [query.data, showAll]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: "space-y-2",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "justify-between",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "flex justify-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
          className: "text-2xl font-bold",
          children: "Token Accounts"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "space-x-2",
          children: query.isLoading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            className: "loading loading-spinner"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 15
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            className: "btn btn-sm btn-outline",
            onClick: async () => {
              await query.refetch();
              await client.invalidateQueries({
                queryKey: ['getTokenAccountBalance']
              });
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
              size: 16
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, this), query.isError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("pre", {
      className: "alert alert-error",
      children: ["Error: ", (_query$error = query.error) == null ? void 0 : _query$error.message.toString()]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }, this), query.isSuccess && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: query.data.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        children: "No token accounts found."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 13
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("table", {
        className: "table border-4 rounded-lg border-separate border-base-300",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("thead", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
              children: "Public Key"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 19
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
              children: "Mint"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 19
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
              className: "text-right",
              children: "Balance"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tbody", {
          children: [items == null ? void 0 : items.map(({
            account,
            pubkey
          }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "flex space-x-2",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
                  className: "font-mono",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_cluster_cluster_ui__WEBPACK_IMPORTED_MODULE_4__.ExplorerLink, {
                    label: (0,_ui_ui_layout__WEBPACK_IMPORTED_MODULE_2__.ellipsify)(pubkey.toString()),
                    path: `account/${pubkey.toString()}`
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 174,
                    columnNumber: 27
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 25
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "flex space-x-2",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
                  className: "font-mono",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_cluster_cluster_ui__WEBPACK_IMPORTED_MODULE_4__.ExplorerLink, {
                    label: (0,_ui_ui_layout__WEBPACK_IMPORTED_MODULE_2__.ellipsify)(account.data.parsed.info.mint),
                    path: `account/${account.data.parsed.info.mint.toString()}`
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 184,
                    columnNumber: 27
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 183,
                  columnNumber: 25
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
              className: "text-right",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
                className: "font-mono",
                children: account.data.parsed.info.tokenAmount.uiAmount
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 21
            }, this)]
          }, pubkey.toString(), true, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 19
          }, this)), ((_query$data$length = (_query$data2 = query.data) == null ? void 0 : _query$data2.length) != null ? _query$data$length : 0) > 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
              colSpan: 4,
              className: "text-center",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                className: "btn btn-xs btn-outline",
                onClick: () => setShowAll(!showAll),
                children: showAll ? 'Show Less' : 'Show All'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 19
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 5
  }, this);
}
_s5(AccountTokens, "HN93MT9nOK2+wqJ6qr69yuAl1w8=", false, function () {
  return [_account_data_access__WEBPACK_IMPORTED_MODULE_5__.useGetTokenAccounts, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQueryClient];
});
_c5 = AccountTokens;
function AccountTransactions({
  address
}) {
  _s6();
  var _query$error2, _query$data$length2, _query$data4;
  const query = (0,_account_data_access__WEBPACK_IMPORTED_MODULE_5__.useGetSignatures)({
    address
  });
  const [showAll, setShowAll] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const items = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _query$data3;
    if (showAll) return query.data;
    return (_query$data3 = query.data) == null ? void 0 : _query$data3.slice(0, 5);
  }, [query.data, showAll]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: "space-y-2",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "flex justify-between",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
        className: "text-2xl font-bold",
        children: "Transaction History"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "space-x-2",
        children: query.isLoading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
          className: "loading loading-spinner"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 13
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
          className: "btn btn-sm btn-outline",
          onClick: () => query.refetch(),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
            size: 16
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 7
    }, this), query.isError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("pre", {
      className: "alert alert-error",
      children: ["Error: ", (_query$error2 = query.error) == null ? void 0 : _query$error2.message.toString()]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 9
    }, this), query.isSuccess && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: query.data.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        children: "No transactions found."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 13
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("table", {
        className: "table border-4 rounded-lg border-separate border-base-300",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("thead", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
              children: "Signature"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 259,
              columnNumber: 19
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
              className: "text-right",
              children: "Slot"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 19
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
              children: "Block Time"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 19
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
              className: "text-right",
              children: "Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 262,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tbody", {
          children: [items == null ? void 0 : items.map(item => {
            var _item$blockTime;
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                className: "font-mono",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_cluster_cluster_ui__WEBPACK_IMPORTED_MODULE_4__.ExplorerLink, {
                  path: `tx/${item.signature}`,
                  label: (0,_ui_ui_layout__WEBPACK_IMPORTED_MODULE_2__.ellipsify)(item.signature, 8)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 269,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 268,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                className: "font-mono text-right",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_cluster_cluster_ui__WEBPACK_IMPORTED_MODULE_4__.ExplorerLink, {
                  path: `block/${item.slot}`,
                  label: item.slot.toString()
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 275,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 274,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                children: new Date(((_item$blockTime = item.blockTime) != null ? _item$blockTime : 0) * 1000).toISOString()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 280,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                className: "text-right",
                children: item.err ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "badge badge-error",
                  title: JSON.stringify(item.err),
                  children: "Failed"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 285,
                  columnNumber: 25
                }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "badge badge-success",
                  children: "Success"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 292,
                  columnNumber: 25
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 283,
                columnNumber: 21
              }, this)]
            }, item.signature, true, {
              fileName: _jsxFileName,
              lineNumber: 267,
              columnNumber: 19
            }, this);
          }), ((_query$data$length2 = (_query$data4 = query.data) == null ? void 0 : _query$data4.length) != null ? _query$data$length2 : 0) > 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
              colSpan: 4,
              className: "text-center",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                className: "btn btn-xs btn-outline",
                onClick: () => setShowAll(!showAll),
                children: showAll ? 'Show Less' : 'Show All'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 300,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 299,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 19
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 230,
    columnNumber: 5
  }, this);
}
_s6(AccountTransactions, "9hT9QyJgFOJQL4TVxJfrhkmW/Qs=", false, function () {
  return [_account_data_access__WEBPACK_IMPORTED_MODULE_5__.useGetSignatures];
});
_c6 = AccountTransactions;
function BalanceSol({
  balance
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
    children: Math.round(balance / _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.LAMPORTS_PER_SOL * 100000) / 100000
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 320,
    columnNumber: 5
  }, this);
}
_c7 = BalanceSol;
function ModalReceive({
  hide,
  show,
  address
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_ui_ui_layout__WEBPACK_IMPORTED_MODULE_2__.AppModal, {
    title: "Receive",
    hide: hide,
    show: show,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
      children: "Receive assets by sending them to your public key:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("code", {
      children: address.toString()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 334,
    columnNumber: 5
  }, this);
}
_c8 = ModalReceive;
function ModalAirdrop({
  hide,
  show,
  address
}) {
  _s7();
  const mutation = (0,_account_data_access__WEBPACK_IMPORTED_MODULE_5__.useRequestAirdrop)({
    address
  });
  const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('2');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_ui_ui_layout__WEBPACK_IMPORTED_MODULE_2__.AppModal, {
    hide: hide,
    show: show,
    title: "Airdrop",
    submitDisabled: !amount || mutation.isPending,
    submitLabel: "Request Airdrop",
    submit: () => mutation.mutateAsync(parseFloat(amount)).then(() => hide()),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
      disabled: mutation.isPending,
      type: "number",
      step: "any",
      min: "1",
      placeholder: "Amount",
      className: "input input-bordered w-full",
      value: amount,
      onChange: e => setAmount(e.target.value)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 354,
    columnNumber: 5
  }, this);
}
_s7(ModalAirdrop, "kf4o8GPMMLR2DmKKNeP5QdYRtGE=", false, function () {
  return [_account_data_access__WEBPACK_IMPORTED_MODULE_5__.useRequestAirdrop];
});
_c9 = ModalAirdrop;
function ModalSend({
  hide,
  show,
  address
}) {
  _s8();
  const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useWallet)();
  const mutation = (0,_account_data_access__WEBPACK_IMPORTED_MODULE_5__.useTransferSol)({
    address
  });
  const [destination, setDestination] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('1');
  if (!address || !wallet.sendTransaction) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: "Wallet not connected"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 12
    }, this);
  }
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_ui_ui_layout__WEBPACK_IMPORTED_MODULE_2__.AppModal, {
    hide: hide,
    show: show,
    title: "Send",
    submitDisabled: !destination || !amount || mutation.isPending,
    submitLabel: "Send",
    submit: () => {
      mutation.mutateAsync({
        destination: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(destination),
        amount: parseFloat(amount)
      }).then(() => hide());
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
      disabled: mutation.isPending,
      type: "text",
      placeholder: "Destination",
      className: "input input-bordered w-full",
      value: destination,
      onChange: e => setDestination(e.target.value)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
      disabled: mutation.isPending,
      type: "number",
      step: "any",
      min: "1",
      placeholder: "Amount",
      className: "input input-bordered w-full",
      value: amount,
      onChange: e => setAmount(e.target.value)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 395,
    columnNumber: 5
  }, this);
}
_s8(ModalSend, "Py7KWHU1d99BwQ4UMGOki5WxmWY=", false, function () {
  return [_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useWallet, _account_data_access__WEBPACK_IMPORTED_MODULE_5__.useTransferSol];
});
_c10 = ModalSend;
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__webpack_require__.$Refresh$.register(_c, "AccountBalance");
__webpack_require__.$Refresh$.register(_c2, "AccountChecker");
__webpack_require__.$Refresh$.register(_c3, "AccountBalanceCheck");
__webpack_require__.$Refresh$.register(_c4, "AccountButtons");
__webpack_require__.$Refresh$.register(_c5, "AccountTokens");
__webpack_require__.$Refresh$.register(_c6, "AccountTransactions");
__webpack_require__.$Refresh$.register(_c7, "BalanceSol");
__webpack_require__.$Refresh$.register(_c8, "ModalReceive");
__webpack_require__.$Refresh$.register(_c9, "ModalAirdrop");
__webpack_require__.$Refresh$.register(_c10, "ModalSend");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ 2808:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutes: () => (/* binding */ AppRoutes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(626);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4001);
/* harmony import */ var _ui_ui_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9838);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(716);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(3300);
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(8070);
__webpack_require__.$Refresh$.runtime = __webpack_require__(3536);

var _jsxFileName = "/home/revoli/Desktop/SiteGrumpyCat-main/grumpy-web/web/src/app/app-routes.tsx",
  _s = __webpack_require__.$Refresh$.signature();




const AccountListFeature = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(_c = () => __webpack_require__.e(/* import() */ "src_app_account_account-list-feature_tsx").then(__webpack_require__.bind(__webpack_require__, 2139)));
_c2 = AccountListFeature;
const AccountDetailFeature = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(_c3 = () => __webpack_require__.e(/* import() */ "src_app_account_account-detail-feature_tsx").then(__webpack_require__.bind(__webpack_require__, 9792)));
_c4 = AccountDetailFeature;
const ClusterFeature = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(_c5 = () => __webpack_require__.e(/* import() */ "src_app_cluster_cluster-feature_tsx").then(__webpack_require__.bind(__webpack_require__, 6078)));
_c6 = ClusterFeature;
const DashboardFeature = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(_c7 = () => __webpack_require__.e(/* import() */ "src_app_dashboard_dashboard-feature_tsx").then(__webpack_require__.bind(__webpack_require__, 3374)));
_c8 = DashboardFeature;
const CounterFeature = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(_c9 = () => __webpack_require__.e(/* import() */ "src_app_counter_counter-feature_tsx").then(__webpack_require__.bind(__webpack_require__, 7094)));
_c10 = CounterFeature;
const links = [{
  label: 'Account',
  path: '/account'
}, {
  label: 'Clusters',
  path: '/clusters'
}, {
  label: 'Counter Program',
  path: '/counter'
}];
const routes = [{
  path: '/account/',
  element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(AccountListFeature, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 33
  }, undefined)
}, {
  path: '/account/:address',
  element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(AccountDetailFeature, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 41
  }, undefined)
}, {
  path: '/clusters',
  element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ClusterFeature, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 33
  }, undefined)
}, {
  path: 'counter/*',
  element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(CounterFeature, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 33
  }, undefined)
}];
function AppRoutes() {
  _s();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ui_ui_layout__WEBPACK_IMPORTED_MODULE_1__.UiLayout, {
    links: links,
    children: (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useRoutes)([{
      index: true,
      element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Navigate, {
        to: '/dashboard',
        replace: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 33
      }, this)
    }, {
      path: '/dashboard',
      element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(DashboardFeature, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 40
      }, this)
    }, ...routes, {
      path: '*',
      element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Navigate, {
        to: '/dashboard',
        replace: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 31
      }, this)
    }])
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
_s(AppRoutes, "mNBMh7IZrKf5fDyw9x3t8azefmI=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useRoutes];
});
_c11 = AppRoutes;
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__webpack_require__.$Refresh$.register(_c, "AccountListFeature$lazy");
__webpack_require__.$Refresh$.register(_c2, "AccountListFeature");
__webpack_require__.$Refresh$.register(_c3, "AccountDetailFeature$lazy");
__webpack_require__.$Refresh$.register(_c4, "AccountDetailFeature");
__webpack_require__.$Refresh$.register(_c5, "ClusterFeature$lazy");
__webpack_require__.$Refresh$.register(_c6, "ClusterFeature");
__webpack_require__.$Refresh$.register(_c7, "DashboardFeature$lazy");
__webpack_require__.$Refresh$.register(_c8, "DashboardFeature");
__webpack_require__.$Refresh$.register(_c9, "CounterFeature$lazy");
__webpack_require__.$Refresh$.register(_c10, "CounterFeature");
__webpack_require__.$Refresh$.register(_c11, "AppRoutes");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ 2767:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2808);
/* harmony import */ var _cluster_cluster_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4491);
/* harmony import */ var _solana_solana_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7863);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9433);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3902);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(716);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(3300);
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(8070);
__webpack_require__.$Refresh$.runtime = __webpack_require__(3536);

var _jsxFileName = "/home/revoli/Desktop/SiteGrumpyCat-main/grumpy-web/web/src/app/app.tsx";





const client = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClient();
function App() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClientProvider, {
    client: client,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_cluster_cluster_data_access__WEBPACK_IMPORTED_MODULE_1__.ClusterProvider, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_solana_solana_provider__WEBPACK_IMPORTED_MODULE_2__.SolanaProvider, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_app_routes__WEBPACK_IMPORTED_MODULE_0__.AppRoutes, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
_c = App;
var _c;
__webpack_require__.$Refresh$.register(_c, "App");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ 4491:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClusterNetwork: () => (/* binding */ ClusterNetwork),
/* harmony export */   ClusterProvider: () => (/* binding */ ClusterProvider),
/* harmony export */   defaultClusters: () => (/* binding */ defaultClusters),
/* harmony export */   useCluster: () => (/* binding */ useCluster)
/* harmony export */ });
/* harmony import */ var _home_revoli_Desktop_SiteGrumpyCat_main_grumpy_web_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7507);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5812);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4945);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3689);
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6303);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(626);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6124);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(716);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(3300);
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(8070);
__webpack_require__.$Refresh$.runtime = __webpack_require__(3536);


var _jsxFileName = "/home/revoli/Desktop/SiteGrumpyCat-main/grumpy-web/web/src/app/cluster/cluster-data-access.tsx",
  _s = __webpack_require__.$Refresh$.signature(),
  _s2 = __webpack_require__.$Refresh$.signature();






let ClusterNetwork = /*#__PURE__*/function (ClusterNetwork) {
  ClusterNetwork["Mainnet"] = "mainnet-beta";
  ClusterNetwork["Testnet"] = "testnet";
  ClusterNetwork["Devnet"] = "devnet";
  ClusterNetwork["Custom"] = "custom";
  return ClusterNetwork;
}({});

// By default, we don't configure the mainnet-beta cluster
// The endpoint provided by clusterApiUrl('mainnet-beta') does not allow access from the browser due to CORS restrictions
// To use the mainnet-beta cluster, provide a custom endpoint
const defaultClusters = [{
  name: 'devnet',
  endpoint: (0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.clusterApiUrl)('devnet'),
  network: ClusterNetwork.Devnet
}, {
  name: 'local',
  endpoint: 'http://localhost:8899'
}, {
  name: 'testnet',
  endpoint: (0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.clusterApiUrl)('testnet'),
  network: ClusterNetwork.Testnet
}];
const clusterAtom = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_4__.atomWithStorage)('solana-cluster', defaultClusters[0]);
const clustersAtom = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_4__.atomWithStorage)('solana-clusters', defaultClusters);
const activeClustersAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_5__.atom)(get => {
  const clusters = get(clustersAtom);
  const cluster = get(clusterAtom);
  return clusters.map(item => (0,_home_revoli_Desktop_SiteGrumpyCat_main_grumpy_web_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_6__["default"])({}, item, {
    active: item.name === cluster.name
  }));
});
const activeClusterAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_5__.atom)(get => {
  const clusters = get(activeClustersAtom);
  return clusters.find(item => item.active) || clusters[0];
});
const Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
function ClusterProvider({
  children
}) {
  _s();
  const cluster = (0,jotai__WEBPACK_IMPORTED_MODULE_7__.useAtomValue)(activeClusterAtom);
  const clusters = (0,jotai__WEBPACK_IMPORTED_MODULE_7__.useAtomValue)(activeClustersAtom);
  const setCluster = (0,jotai__WEBPACK_IMPORTED_MODULE_7__.useSetAtom)(clusterAtom);
  const setClusters = (0,jotai__WEBPACK_IMPORTED_MODULE_7__.useSetAtom)(clustersAtom);
  const value = {
    cluster,
    clusters: clusters.sort((a, b) => a.name > b.name ? 1 : -1),
    addCluster: cluster => {
      try {
        new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.Connection(cluster.endpoint);
        setClusters([...clusters, cluster]);
      } catch (err) {
        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"].error(`${err}`);
      }
    },
    deleteCluster: cluster => {
      setClusters(clusters.filter(item => item.name !== cluster.name));
    },
    setCluster: cluster => setCluster(cluster),
    getExplorerUrl: path => `https://explorer.solana.com/${path}${getClusterUrlParam(cluster)}`
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Context.Provider, {
    value: value,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 10
  }, this);
}
_s(ClusterProvider, "KRrQfOuyLcsh3+nb1IPzX/AxgK4=", false, function () {
  return [jotai__WEBPACK_IMPORTED_MODULE_7__.useAtomValue, jotai__WEBPACK_IMPORTED_MODULE_7__.useAtomValue, jotai__WEBPACK_IMPORTED_MODULE_7__.useSetAtom, jotai__WEBPACK_IMPORTED_MODULE_7__.useSetAtom];
});
_c = ClusterProvider;
function useCluster() {
  _s2();
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context);
}
_s2(useCluster, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function getClusterUrlParam(cluster) {
  let suffix = '';
  switch (cluster.network) {
    case ClusterNetwork.Devnet:
      suffix = 'devnet';
      break;
    case ClusterNetwork.Mainnet:
      suffix = '';
      break;
    case ClusterNetwork.Testnet:
      suffix = 'testnet';
      break;
    default:
      suffix = `custom&customUrl=${encodeURIComponent(cluster.endpoint)}`;
      break;
  }
  return suffix.length ? `?cluster=${suffix}` : '';
}
var _c;
__webpack_require__.$Refresh$.register(_c, "ClusterProvider");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ 7396:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClusterChecker: () => (/* binding */ ClusterChecker),
/* harmony export */   ClusterUiModal: () => (/* binding */ ClusterUiModal),
/* harmony export */   ClusterUiSelect: () => (/* binding */ ClusterUiSelect),
/* harmony export */   ClusterUiTable: () => (/* binding */ ClusterUiTable),
/* harmony export */   ExplorerLink: () => (/* binding */ ExplorerLink)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8268);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5511);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5803);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(626);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_ui_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9838);
/* harmony import */ var _cluster_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4491);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5812);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(716);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(3300);
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(8070);
__webpack_require__.$Refresh$.runtime = __webpack_require__(3536);

var _jsxFileName = "/home/revoli/Desktop/SiteGrumpyCat-main/grumpy-web/web/src/app/cluster/cluster-ui.tsx",
  _s = __webpack_require__.$Refresh$.signature(),
  _s2 = __webpack_require__.$Refresh$.signature(),
  _s3 = __webpack_require__.$Refresh$.signature(),
  _s4 = __webpack_require__.$Refresh$.signature(),
  _s5 = __webpack_require__.$Refresh$.signature();








function ExplorerLink({
  path,
  label,
  className
}) {
  _s();
  const {
    getExplorerUrl
  } = (0,_cluster_data_access__WEBPACK_IMPORTED_MODULE_2__.useCluster)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
    href: getExplorerUrl(path),
    target: "_blank",
    rel: "noopener noreferrer",
    className: className ? className : `link font-mono`,
    children: label
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
_s(ExplorerLink, "9soU83/T5bbe7SX8L4KVPdvZRqA=", false, function () {
  return [_cluster_data_access__WEBPACK_IMPORTED_MODULE_2__.useCluster];
});
_c = ExplorerLink;
function ClusterChecker({
  children
}) {
  _s2();
  const {
    cluster
  } = (0,_cluster_data_access__WEBPACK_IMPORTED_MODULE_2__.useCluster)();
  const {
    connection
  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useConnection)();
  const query = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useQuery)({
    queryKey: ['version', {
      cluster,
      endpoint: connection.rpcEndpoint
    }],
    queryFn: () => connection.getVersion(),
    retry: 1
  });
  if (query.isLoading) {
    return null;
  }
  if (query.isError || !query.data) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "alert alert-warning text-warning-content/80 rounded-none flex justify-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
        children: ["Error connecting to cluster ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("strong", {
          children: cluster.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 39
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        className: "btn btn-xs btn-neutral",
        onClick: () => query.refetch(),
        children: "Refresh"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this);
  }
  return children;
}
_s2(ClusterChecker, "fyUXROLmAD43hAlyoP/kenUpOaE=", false, function () {
  return [_cluster_data_access__WEBPACK_IMPORTED_MODULE_2__.useCluster, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useConnection, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useQuery];
});
_c2 = ClusterChecker;
function ClusterUiSelect() {
  _s3();
  const {
    clusters,
    setCluster,
    cluster
  } = (0,_cluster_data_access__WEBPACK_IMPORTED_MODULE_2__.useCluster)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "dropdown dropdown-end",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
      tabIndex: 0,
      className: "btn btn-primary rounded-btn",
      children: cluster.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
      tabIndex: 0,
      className: "menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4",
      children: clusters.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
          className: `btn btn-sm ${item.active ? 'btn-primary' : 'btn-ghost'}`,
          onClick: () => setCluster(item),
          children: item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, this)
      }, item.name, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, this);
}
_s3(ClusterUiSelect, "hGvRlWaWTFEN4PUSZD0VIGe4es8=", false, function () {
  return [_cluster_data_access__WEBPACK_IMPORTED_MODULE_2__.useCluster];
});
_c3 = ClusterUiSelect;
function ClusterUiModal({
  hideModal,
  show
}) {
  _s4();
  const {
    addCluster
  } = (0,_cluster_data_access__WEBPACK_IMPORTED_MODULE_2__.useCluster)();
  const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [network, setNetwork] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [endpoint, setEndpoint] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ui_ui_layout__WEBPACK_IMPORTED_MODULE_1__.AppModal, {
    title: 'Add Cluster',
    hide: hideModal,
    show: show,
    submit: () => {
      try {
        new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.Connection(endpoint);
        if (name) {
          addCluster({
            name,
            network,
            endpoint
          });
          hideModal();
        } else {
          console.log('Invalid cluster name');
        }
      } catch (_unused) {
        console.log('Invalid cluster endpoint');
      }
    },
    submitLabel: "Save",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
      type: "text",
      placeholder: "Name",
      className: "input input-bordered w-full",
      value: name,
      onChange: e => setName(e.target.value)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
      type: "text",
      placeholder: "Endpoint",
      className: "input input-bordered w-full",
      value: endpoint,
      onChange: e => setEndpoint(e.target.value)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("select", {
      className: "select select-bordered w-full",
      value: network,
      onChange: e => setNetwork(e.target.value),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
        value: undefined,
        children: "Select a network"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
        value: _cluster_data_access__WEBPACK_IMPORTED_MODULE_2__.ClusterNetwork.Devnet,
        children: "Devnet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
        value: _cluster_data_access__WEBPACK_IMPORTED_MODULE_2__.ClusterNetwork.Testnet,
        children: "Testnet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
        value: _cluster_data_access__WEBPACK_IMPORTED_MODULE_2__.ClusterNetwork.Mainnet,
        children: "Mainnet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 5
  }, this);
}
_s4(ClusterUiModal, "MIV9CQ/N8iA3xo7Mfy5T72sZbUk=", false, function () {
  return [_cluster_data_access__WEBPACK_IMPORTED_MODULE_2__.useCluster];
});
_c4 = ClusterUiModal;
function ClusterUiTable() {
  _s5();
  const {
    clusters,
    setCluster,
    deleteCluster
  } = (0,_cluster_data_access__WEBPACK_IMPORTED_MODULE_2__.useCluster)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "overflow-x-auto",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("table", {
      className: "table border-4 border-separate border-base-300",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("thead", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
            children: "Name/ Network / Endpoint"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
            className: "text-center",
            children: "Actions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tbody", {
        children: clusters.map(item => {
          var _item$network;
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tr", {
            className: item != null && item.active ? 'bg-base-200' : '',
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
              className: "space-y-2",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "whitespace-nowrap space-x-2",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                  className: "text-xl",
                  children: item != null && item.active ? item.name : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
                    title: "Select cluster",
                    className: "link link-secondary",
                    onClick: () => setCluster(item),
                    children: item.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 169,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                className: "text-xs",
                children: ["Network: ", (_item$network = item.network) != null ? _item$network : 'custom']
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "whitespace-nowrap text-gray-500 text-xs",
                children: item.endpoint
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
              className: "space-x-2 whitespace-nowrap text-center",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
                disabled: item == null ? void 0 : item.active,
                className: "btn btn-xs btn-default btn-outline",
                onClick: () => {
                  if (!window.confirm('Are you sure?')) return;
                  deleteCluster(item);
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  size: 16
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 15
            }, this)]
          }, item.name, true, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 152,
    columnNumber: 5
  }, this);
}
_s5(ClusterUiTable, "nvxsQjpEhakUcOE9dtz1jXtmSv0=", false, function () {
  return [_cluster_data_access__WEBPACK_IMPORTED_MODULE_2__.useCluster];
});
_c5 = ClusterUiTable;
var _c, _c2, _c3, _c4, _c5;
__webpack_require__.$Refresh$.register(_c, "ExplorerLink");
__webpack_require__.$Refresh$.register(_c2, "ClusterChecker");
__webpack_require__.$Refresh$.register(_c3, "ClusterUiSelect");
__webpack_require__.$Refresh$.register(_c4, "ClusterUiModal");
__webpack_require__.$Refresh$.register(_c5, "ClusterUiTable");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ 7863:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SolanaProvider: () => (/* binding */ SolanaProvider),
/* harmony export */   WalletButton: () => (/* binding */ WalletButton),
/* harmony export */   useAnchorProvider: () => (/* binding */ useAnchorProvider)
/* harmony export */ });
/* harmony import */ var _coral_xyz_anchor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(996);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6186);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6839);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8268);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9493);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1686);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4919);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(626);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cluster_cluster_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4491);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(716);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(3300);
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(8070);
__webpack_require__.$Refresh$.runtime = __webpack_require__(3536);

var _jsxFileName = "/home/revoli/Desktop/SiteGrumpyCat-main/grumpy-web/web/src/app/solana/solana-provider.tsx",
  _s = __webpack_require__.$Refresh$.signature(),
  _s2 = __webpack_require__.$Refresh$.signature();






__webpack_require__(1537);
const WalletButton = _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_4__.WalletMultiButton;
function SolanaProvider({
  children
}) {
  _s();
  const {
    cluster
  } = (0,_cluster_cluster_data_access__WEBPACK_IMPORTED_MODULE_2__.useCluster)();
  const endpoint = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => cluster.endpoint, [cluster]);
  const onError = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(error => {
    console.error(error);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.ConnectionProvider, {
    endpoint: endpoint,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.WalletProvider, {
      wallets: [],
      onError: onError,
      autoConnect: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_7__.WalletModalProvider, {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this);
}
_s(SolanaProvider, "zqQgG5cYYQ0FaNI9aL8XFM8MrOA=", false, function () {
  return [_cluster_cluster_data_access__WEBPACK_IMPORTED_MODULE_2__.useCluster];
});
_c = SolanaProvider;
function useAnchorProvider() {
  _s2();
  const {
    connection
  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_8__.useConnection)();
  const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__.useWallet)();
  return new _coral_xyz_anchor__WEBPACK_IMPORTED_MODULE_0__.AnchorProvider(connection, wallet, {
    commitment: 'confirmed'
  });
}
_s2(useAnchorProvider, "hL6NYcRiqw723iT8fMaPriY44LQ=", false, function () {
  return [_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_8__.useConnection, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__.useWallet];
});
var _c;
__webpack_require__.$Refresh$.register(_c, "SolanaProvider");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ 6926:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Article)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(626);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(716);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(3300);
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(8070);
__webpack_require__.$Refresh$.runtime = __webpack_require__(3536);

var _jsxFileName = "/home/revoli/Desktop/SiteGrumpyCat-main/grumpy-web/web/src/app/ui/article/Article.tsx";


function Article() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "flex flex-col md:flex-row justify-around items-stretch bg-aquamarine w-full py-8 text-aero",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "bg-grey/25 flex-1 flex flex-col items-center p-4 m-4 md:m-4 border-2 border-bckgd rounded space-y-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
        className: "text-3xl font-bold mb-8 text-white text-center",
        children: "Connect with Us \u2013 Because Why Not?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: "text-white",
        children: ["Join the Grumpy Cat fan club on social media \u2013 if you feel like it.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 84
        }, this), "Follow us on Twitter for a daily dose of snark, check out our Pinksale page for the latest in reluctant investment opportunities, and hop onto our Telegram for all the grumpy gossip. ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 200
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: "text-white",
        children: ["We're practically everywhere, sharing our discontent with the world. ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 112
        }, this), "So, hit those follow buttons and join the ranks of the unimpressed. Or don't. ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 95
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
        className: "text-fear text-2xl",
        children: "We\u2019re too grumpy to care."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "flex space-x-4 my-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
          href: "https://x.com/grumpycoincat",
          target: "_blank",
          rel: "noopener noreferrer",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            src: __webpack_require__(4826),
            alt: "Twitter Logo",
            className: "w-8 h-8 md:w-10 md:h-10"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
          href: "https://www.pinksale.finance/",
          target: "_blank",
          rel: "noopener noreferrer",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            src: __webpack_require__(5165),
            alt: "Pinksale Logo",
            className: "w-8 h-8 md:w-10 md:h-10"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
          href: "https://tr.ee/6zcKj0wXOn",
          target: "_blank",
          rel: "noopener noreferrer",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            src: __webpack_require__(4509),
            alt: "Telegram Logo",
            className: "w-8 h-8 md:w-10 md:h-10"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
        src: __webpack_require__(484),
        alt: "Grumpy with red chart on background",
        className: "w-full h-auto  "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "bg-grey/25 flex-1 flex flex-col items-center p-4 m-4 md:m-4 border-2 border-grey rounded space-y-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
        className: "text-3xl font-bold mb-8 text-white text-center",
        children: "Discover the Phenomenon: Grumpy Cat's Rise to Fame"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: " text-white",
        children: ["In a world where celebrity status can be achieved by looking perpetually annoyed, Grumpy Cat reigns supreme.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 125
        }, this), "This CNN article chronicles the meteoric rise of the internet's favorite feline sourpuss.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 106
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 112
        }, this), "From meme stardom to a multi-million dollar empire, Grumpy Cat\u2019s journey is a testament to the power of a good frown.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 134
        }, this), "Perfect for those who believe the secret to success lies in mastering the art of looking unimpressed.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 118
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 124
        }, this), "Dive in to learn how this grumpy kitty clawed her way to the top, one disdainful glare at a time."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
        href: " https://edition.cnn.com/2019/05/17/business/grumpy-cat-pet-celebrities-memes-influencer/index.html",
        target: "_blank",
        rel: "noopener noreferrer",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
          src: __webpack_require__(2149),
          alt: "Illustration 2",
          className: "w-full h-auto"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "bg-grey/25 flex-1 flex flex-col items-center p-4 m-4 md:m-4 border-2 border-midFear rounded space-y-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
        className: "text-3xl font-bold mb-8 text-white text-center",
        children: "I'm not a fucking crook"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: " text-white font-bold",
        children: ["\uD83D\uDE3B  0% Tax", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 27
        }, this), "\uD83D\uDE40  Metadata Authority Revoked", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 47
        }, this), "\uD83D\uDE3D  Mint Authority Revoked", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 43
        }, this), "\uD83D\uDE3E  Freeze Authority Revoked", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 45
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: " text-white",
        children: ["We've permanently revoked the minting authority to prevent any unexpected increases in token supply, protecting your investment from inflation and dilution.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 177
        }, this), "We've also revoked the freeze authority, ensuring that your assets are always accessible and never subject to sudden restrictions.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 151
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: " text-white",
        children: ["Security and Trust", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 39
        }, this), "By implementing these measures, we aim to provide a secure and trustworthy environment for your investments, ensuring peace of mind and confidence in our project."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
        src: __webpack_require__(169),
        alt: "grumpy with green chart on background",
        className: "w-full h-auto"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}
_c = Article;
var _c;
__webpack_require__.$Refresh$.register(_c, "Article");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ 2067:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Grumpgames)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(626);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(716);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(3300);
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(8070);
__webpack_require__.$Refresh$.runtime = __webpack_require__(3536);

var _jsxFileName = "/home/revoli/Desktop/SiteGrumpyCat-main/grumpy-web/web/src/app/ui/grumpgame/Grumpgames.tsx";


function Grumpgames() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "flex flex-col md:flex-row items-center justify-center md:space-x-4 p-4 text-aero",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "md:w-1/2 w-full mb-6 md:mb-0  mx-3 bgRoad  ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
        className: "text-2xl text-white mb-5 md:mb-5 text-center",
        children: "Grumpy Road"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
        className: "list-disc flex flex-col gap-y-5 px-14",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
          children: "Q3 2024: Fair Launch, Token Launch, Initial DEX Offering (IDO) on Raydium, V2 website, Introduction of GrumpyCat Game( alpha), first ama, promotional vid\xE9o"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 29
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
          children: " Q4 2024: Staking Platform Launch, Major Partnerships Announcements, First Community Event, GrumpyCat Game release, Live Staking & DApp: Stake GRUMP tokens and use the decentralized application, promotional movies (launch of the grumpflix)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 29
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
          children: " Q1 2025: Expansion of Ecosystem, , Enhanced Marketing Campaigns, Exchange Listings"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 29
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
          children: " Q2 2025: Additional Exchange Listings, Further Development of DApp, Community-driven Projects Funding."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 29
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 25
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "md:w-1/2 w-full h-80 relative",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
        className: "absolute right-14 bottom-5",
        children: "Grumpy game in Coming ..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: "absolute right-0 top-0",
        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, doloremque laborum accusamus dicta voluptatem mollitia expedita deserunt natus fugit error sit ea numquam itaque, recusandae molestias quae non exercitationem nesciunt?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
        src: __webpack_require__(3174),
        alt: "Tokenomics Image",
        className: "w-full h-full object-contain"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 17
  }, this);
}
_c = Grumpgames;
var _c;
__webpack_require__.$Refresh$.register(_c, "Grumpgames");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ 6854:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Grumpnomics)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(716);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(3300);
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(8070);
__webpack_require__.$Refresh$.runtime = __webpack_require__(3536);

var _jsxFileName = "/home/revoli/Desktop/SiteGrumpyCat-main/grumpy-web/web/src/app/ui/grumpnomics/Grumpnomics.tsx";

function Grumpnomics() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex flex-col md:flex-row items-center justify-center md:space-x-4 p-4 text-aero",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "md:w-1/2 w-full mb-6 md:mb-0 text-center mx-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "list-none flex flex-col gap-y-5 px-14 text-left pl-20 ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: " Fair Launch: 40% (39,800,000 GRUMP)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: " Team & Reserve and Burn: 20% (19,900,000 GRUMP)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: " Marketing & Partnerships: 10% (9,950,000 GRUMP)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: " Community Rewards & Ecosystem Development: 10% (9,950,000 GRUMP)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: " Liquidity: 20% (19,900,000 GRUMP)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "md:w-1/2 w-full mb-6 md:mb-0 text-center mx-3",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "text-2xl text-gread mb-5 md:mb-5",
        children: "Pre-launch Grumpy !"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-white mb-2 md:mb-2",
        children: "Hello, watch our tokenomic about your favorite GrumpMeme! And get pre-laynch "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "list-none flex flex-col gap-y-5 px-14 text-left pl-20 ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "Status Ended"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 29
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: " Min buy 0.25 BNB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 29
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "Max buy 0.5 BNB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 29
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: " Current raised 60 BNB (100.00%)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 29
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: " Total contributors  120"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 29
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}
_c = Grumpnomics;
var _c;
__webpack_require__.$Refresh$.register(_c, "Grumpnomics");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ 9199:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pricebar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(626);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(716);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(3300);
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(8070);
__webpack_require__.$Refresh$.runtime = __webpack_require__(3536);

var _jsxFileName = "/home/revoli/Desktop/SiteGrumpyCat-main/grumpy-web/web/src/app/ui/price/Pricebar.tsx",
  _s = __webpack_require__.$Refresh$.signature();


// Générer des prix et pourcentages aléatoires pour les cryptomonnaies

const generateCryptoData = () => {
  const cryptos = ['BTC', 'ETH', 'XRP', 'LTC', 'BCH', 'ADA', 'DOT', 'LINK'];
  return cryptos.map(crypto => ({
    name: crypto,
    price: (Math.random() * 0.0000005 + 0.0000002).toFixed(9),
    change: (Math.random() * 50 - 25).toFixed(2)
  }));
};
function Pricebar() {
  _s();
  const [cryptoData, setCryptoData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(generateCryptoData());
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "relative w-full overflow-hidden bg-bckgd",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "slide-track flex whitespace-nowrap",
      children: cryptoData.concat(cryptoData).map((crypto, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: "inline-block px-8 text-white text-sm leading-8",
        children: [crypto.name, " : ", crypto.price, " USD |", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          className: crypto.change.startsWith('-') ? 'text-fear' : 'text-gread',
          children: [crypto.change, "%"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
_s(Pricebar, "GgOmmnGlJPO+5+s9KZ2rCob9XvE=");
_c = Pricebar;
var _c;
__webpack_require__.$Refresh$.register(_c, "Pricebar");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ 6786:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Teams)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(626);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(716);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(3300);
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(8070);
__webpack_require__.$Refresh$.runtime = __webpack_require__(3536);

var _jsxFileName = "/home/revoli/Desktop/SiteGrumpyCat-main/grumpy-web/web/src/app/ui/teams/Teams.tsx";


function Teams() {
  // Tableau avec les URLs des images et les titres
  const imageUrls = [{
    title: "The Original",
    url: __webpack_require__(9294)
  }, {
    title: "Mini Grumpy",
    url: __webpack_require__(2305)
  }, {
    title: "Grumpy Dev",
    url: __webpack_require__(5488)
  }, {
    title: "Second Boss",
    url: __webpack_require__(5123)
  }, {
    title: "Grump Market",
    url: __webpack_require__(3507)
  }, {
    title: "GrumpTective",
    url: __webpack_require__(1981)
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "flex flex-col items-center text-center p-4 m-4 text-aero border-4 border-gread rounded-lg ",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
      className: "text-2xl text-white mb-4",
      children: "Team Grumpy"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      className: "text-3xl text-fear",
      children: "Join us, or don't. We honestly couldn't care less."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      className: "text-white m-8 text-left",
      children: ["Meet the masterminds behind the legend! ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 53
      }, this), "The Grumpy Team is a collection of highly unimpressed individuals who reluctantly drag themselves to work every day to keep the Grumpy Cat empire running.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 167
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 173
      }, this), "They possess an unmatched talent for eye-rolling and sarcasm, which they expertly channel into making Grumpy Cat the global phenomenon it is today.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 160
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 166
      }, this), "Whether it\u2019s the stern-faced Original, the ever-grouchy Mini Grumpy, or the perpetually exasperated Grumpy Dev, rest assured, our team is dedicated to achieving greatness \u2013 one annoyed sigh at a time.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 213
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 219
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "grid grid-cols-1 md:grid-cols-3 gap-4",
      children: imageUrls.map(({
        title,
        url
      }, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "flex flex-col items-center bg-grey/25  border-0 rounded-lg",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
          src: url,
          alt: title,
          className: "w-full max-w-xs h-auto mb-2 border-0 rounded-lg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
          className: "text-white mb-2",
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 25
        }, this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, this);
}
_c = Teams;
var _c;
__webpack_require__.$Refresh$.register(_c, "Teams");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ 9838:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppHero: () => (/* binding */ AppHero),
/* harmony export */   AppModal: () => (/* binding */ AppModal),
/* harmony export */   UiLayout: () => (/* binding */ UiLayout),
/* harmony export */   ellipsify: () => (/* binding */ ellipsify),
/* harmony export */   useTransactionToast: () => (/* binding */ useTransactionToast)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(626);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4001);
/* harmony import */ var _price_Pricebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9199);
/* harmony import */ var _grumpnomics_Grumpnomics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6854);
/* harmony import */ var _grumpgame_Grumpgames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2067);
/* harmony import */ var _teams_Teams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6786);
/* harmony import */ var _article_Article__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6926);
/* harmony import */ var _account_account_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5532);
/* harmony import */ var _cluster_cluster_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7396);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6124);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(716);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(3300);
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(8070);
__webpack_require__.$Refresh$.runtime = __webpack_require__(3536);

var _jsxFileName = "/home/revoli/Desktop/SiteGrumpyCat-main/grumpy-web/web/src/app/ui/ui-layout.tsx",
  _s = __webpack_require__.$Refresh$.signature(),
  _s2 = __webpack_require__.$Refresh$.signature();




// my import









function UiLayout({
  children,
  links
}) {
  _s();
  const {
    pathname
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useLocation)();

  //   Deco frise %
  // Navbar (logo - Grunpy ? - Grumpynomic & presale -  - Connect)
  // who I am? (description/story grumpy) (info important, sociaux et address contract)
  // Grumpnomics + presale OK
  // Grumpy Game + Roadmap OK
  // Team OK
  // Footer OK

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
    className: " flex flex-col bg-prussian ",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_price_Pricebar__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      className: " flex  justify-items-center  overflow-hidden max-h-60",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("img", {
        className: " w-full h-full   ",
        alt: "Logo",
        src: "/assets/logo.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_cluster_cluster_ui__WEBPACK_IMPORTED_MODULE_7__.ClusterChecker, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_account_account_ui__WEBPACK_IMPORTED_MODULE_6__.AccountChecker, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_article_Article__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_grumpnomics_Grumpnomics__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_grumpgame_Grumpgames__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_teams_Teams__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("footer", {
      className: "footer footer-center p-4 bg-base-300 text-base-content",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("aside", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
          children: "dontcontactme@grumpy.coin"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
          children: "Created with meprise by the Grumpy team"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
          children: "The content on this website is for informational purposes only and is not intended as financial advice. Cryptocurrency investments are subject to high market risks and volatility. we does not endorse or recommend purchasing any cryptocurrencies mentioned on this website. Readers are advised to conduct their own research or consult with a professional financial advisor before making any investment decisions. Grumpycoin will not be liable for any financial losses incurred based on information presented here."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
}
_s(UiLayout, "qVMqkCpYCjknUqSjfMln5RFSkbo=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useLocation];
});
_c = UiLayout;
function AppModal({
  children,
  title,
  hide,
  show,
  submit,
  submitDisabled,
  submitLabel
}) {
  _s2();
  const dialogRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!dialogRef.current) return;
    if (show) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [show, dialogRef]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("dialog", {
    className: "modal",
    ref: dialogRef,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      className: "modal-box space-y-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h3", {
        className: "font-bold text-lg",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, this), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "modal-action",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          className: "join space-x-2",
          children: [submit ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
            className: "btn btn-xs lg:btn-md btn-primary",
            onClick: submit,
            disabled: submitDisabled,
            children: submitLabel || 'Save'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 15
          }, this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
            onClick: hide,
            className: "btn",
            children: "Close"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 5
  }, this);
}
_s2(AppModal, "9PxoOcTjzEwd023cmhgaBdjzFyE=");
_c2 = AppModal;
function AppHero({
  children,
  title,
  subtitle
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
    className: "hero py-[64px]",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      className: "hero-content text-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "max-w-2xl",
        children: [typeof title === 'string' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h1", {
          className: "text-5xl font-bold",
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 13
        }, this) : title, typeof subtitle === 'string' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
          className: "py-6",
          children: subtitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 13
        }, this) : subtitle, children]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 143,
    columnNumber: 5
  }, this);
}
_c3 = AppHero;
function ellipsify(str = '', len = 4) {
  if (str.length > 30) {
    return str.substring(0, len) + '..' + str.substring(str.length - len, str.length);
  }
  return str;
}
function useTransactionToast() {
  return signature => {
    react_hot_toast__WEBPACK_IMPORTED_MODULE_8__["default"].success( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      className: 'text-center',
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "text-lg",
        children: "Transaction sent"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_cluster_cluster_ui__WEBPACK_IMPORTED_MODULE_7__.ExplorerLink, {
        path: `tx/${signature}`,
        label: 'View Transaction',
        className: "btn btn-xs btn-primary"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }, this));
  };
}
var _c, _c2, _c3;
__webpack_require__.$Refresh$.register(_c, "UiLayout");
__webpack_require__.$Refresh$.register(_c2, "AppModal");
__webpack_require__.$Refresh$.register(_c3, "AppHero");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ 4895:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(626);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4844);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9886);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(706);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2767);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(716);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(3300);
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(8070);
__webpack_require__.$Refresh$.runtime = __webpack_require__(3536);

var _jsxFileName = "/home/revoli/Desktop/SiteGrumpyCat-main/grumpy-web/web/src/main.tsx";






const root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_app_app__WEBPACK_IMPORTED_MODULE_3__.App, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 12,
  columnNumber: 3
}, undefined));

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ 706:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4761);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(3300);
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(8070);
__webpack_require__.$Refresh$.runtime = __webpack_require__(3536);


window.Buffer = buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer;

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ 3174:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bg-website.webp";

/***/ }),

/***/ 2149:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cnn.png";

/***/ }),

/***/ 1981:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "detectiv.webp";

/***/ }),

/***/ 5488:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "dev.webp";

/***/ }),

/***/ 169:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "greenGrump.webp";

/***/ }),

/***/ 9294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "king.webp";

/***/ }),

/***/ 3507:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "marketing.webp";

/***/ }),

/***/ 5123:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "mini boss.webp";

/***/ }),

/***/ 2305:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "mini.png";

/***/ }),

/***/ 5165:
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ }),

/***/ 484:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "redgrumpy.webp";

/***/ }),

/***/ 4509:
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ }),

/***/ 4826:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "x.png";

/***/ }),

/***/ 5066:
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(7455), __webpack_exec__(3862), __webpack_exec__(7009), __webpack_exec__(1598), __webpack_exec__(4895)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map