(self["webpackChunkweb3_dapp"] = self["webpackChunkweb3_dapp"] || []).push([[179],{

/***/ 69511:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en-US.js": [
		13075,
		75
	],
	"./pseudo.js": [
		99935,
		935
	],
	"./zh-CN.js": [
		95685,
		685
	],
	"./zh-TW.js": [
		23964,
		964
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 69511;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43011:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(11527);
// EXTERNAL MODULE: ./node_modules/.pnpm/@web3widgets+react@0.1.20_53vz4is3eayx3354p5m22dczlu/node_modules/@web3widgets/react/dist/index.js + 24 modules
var dist = __webpack_require__(60338);
;// CONCATENATED MODULE: ./src/web/components/Web3Provider/index.tsx


function Web3Provider({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Web3ProviderWidget */.dN, {
        theme: {
            accent: '#17849c'
        },
        children: children
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.9.0_react@18.2.0/node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__(1965);
// EXTERNAL MODULE: ./node_modules/.pnpm/@urql+core@3.2.2_graphql@16.6.0/node_modules/@urql/core/dist/urql-core.mjs
var urql_core = __webpack_require__(75991);
// EXTERNAL MODULE: ./node_modules/.pnpm/urql@3.0.4_onqnqwb3ubg5opvemcqf7c2qhy/node_modules/urql/dist/urql.es.js
var urql_es = __webpack_require__(56320);
// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/src/_async_to_generator.mjs
var _async_to_generator = __webpack_require__(64962);
;// CONCATENATED MODULE: ./src/web/constants/i18n.ts
const SUPPORTED_LOCALES = (/* unused pure expression or super */ null && ([
    'en-US',
    'zh-CN'
]));
const DEFAULT_LOCALE = 'en-US';
const DEFAULT_LOCALE1 = 'en-US';
const LOCALE_LABEL = {
    'en-US': 'English',
    'zh-CN': '简体中文'
};

// EXTERNAL MODULE: ./node_modules/.pnpm/@lingui+core@3.13.3/node_modules/@lingui/core/esm/index.js + 1 modules
var esm = __webpack_require__(4057);
// EXTERNAL MODULE: ./node_modules/.pnpm/@lingui+react@3.13.3_react@18.2.0/node_modules/@lingui/react/esm/index.js + 1 modules
var react_esm = __webpack_require__(95055);
// EXTERNAL MODULE: ./node_modules/.pnpm/jotai@1.13.1_ogvc6ewgr3qq5z6tmbtquhqyui/node_modules/jotai/esm/index.mjs + 1 modules
var jotai_esm = __webpack_require__(25754);
;// CONCATENATED MODULE: ./src/web/states/index.ts



const localeAtom = (0,jotai_esm/* atom */.cn)(DEFAULT_LOCALE);
const SearchContext = (0,react.createContext)({
    textValue: '',
    setTextValue: (text)=>{}
});

;// CONCATENATED MODULE: ./src/web/utils/events.ts
class Events {
    static setLocalStorage(event, data) {
        window.localStorage.setItem(event, data);
    }
    static getLocalStorage(event) {
        return window.localStorage.getItem(event) || '';
    }
    static removeLocalStorage(event) {
        window.localStorage.removeItem(event);
    }
}
(()=>{
    Events.LOCALE_LANG = 'LOCALE_LANG';
})();
(()=>{
    Events.CONNECT_WALLET_TYPE = 'CONNECT_WALLET_TYPE';
})();
(()=>{
    Events.TOKEN_PRICES = 'TOKEN_PRICES';
})();

// EXTERNAL MODULE: ./node_modules/.pnpm/make-plural@7.2.0/node_modules/make-plural/plurals.mjs
var plurals = __webpack_require__(92974);
;// CONCATENATED MODULE: ./src/web/lib/i18n.tsx
/* eslint-disable import/no-extraneous-dependencies */ 









const i18n_plurals = {
    'en-US': plurals.en,
    'zh-TW': plurals.zh
};
esm/* i18n.loadLocaleData */.ag.loadLocaleData('undefined', {
    plurals: ()=>i18n_plurals['en-US']
});
function dynamicActivate(locale) {
    return _dynamicActivate.apply(this, arguments);
}
function _dynamicActivate() {
    _dynamicActivate = (0,_async_to_generator/* default */.Z)(function*(locale) {
        esm/* i18n.loadLocaleData */.ag.loadLocaleData(locale, {
            plurals: ()=>i18n_plurals[locale]
        });
        const catalog = yield __webpack_require__(13268)(`./${locale}.json`);
        esm/* i18n.load */.ag.load(locale, catalog.messages);
        esm/* i18n.activate */.ag.activate(locale);
    });
    return _dynamicActivate.apply(this, arguments);
}
let i18nInit = false;
function I18nProvider({ children  }) {
    const [locale, setLocale] = (0,jotai_esm/* useAtom */.KO)(localeAtom);
    (0,react.useEffect)(()=>{
        dynamicActivate(locale).then(()=>{
            if (!i18nInit) {
                const localeLang = Events.getLocalStorage(Events.LOCALE_LANG) || DEFAULT_LOCALE;
                setLocale(localeLang);
            }
            Events.setLocalStorage(Events.LOCALE_LANG, locale);
            esm/* i18n.activate */.ag.activate(locale);
            i18nInit = true;
        }).catch((error)=>{});
    }, [
        locale,
        setLocale
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_esm/* I18nProvider */.bd, {
            i18n: esm/* i18n */.ag,
            forceRenderOnLocaleChange: false,
            children: children
        })
    });
}

;// CONCATENATED MODULE: ./src/web/components/Loading.tsx

function Loading() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: "...loading"
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-icons@4.8.0_react@18.2.0/node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(3648);
;// CONCATENATED MODULE: ./src/web/assets/images/metamask.png
const metamask_namespaceObject = __webpack_require__.p + "images/metamask.02e3e.png";
;// CONCATENATED MODULE: ./src/web/assets/images/icon/logo.svg
const logo_namespaceObject = __webpack_require__.p + "/images/logo.9f60c.svg";
// EXTERNAL MODULE: ./node_modules/.pnpm/@ethersproject+address@5.7.0/node_modules/@ethersproject/address/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(6353);
// EXTERNAL MODULE: ./node_modules/.pnpm/@date-io+dayjs@2.16.0_dayjs@1.11.7/node_modules/@date-io/dayjs/build/index.esm.js
var build_index_esm = __webpack_require__(74741);
// EXTERNAL MODULE: ./node_modules/.pnpm/imask@6.4.3/node_modules/imask/esm/index.js + 25 modules
var imask_esm = __webpack_require__(3866);
// EXTERNAL MODULE: ./node_modules/.pnpm/bignumber.js@9.1.1/node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(1232);
;// CONCATENATED MODULE: ./src/web/utils/index.ts






// returns the checksummed address if the address is valid, otherwise returns false
function isAddress(value) {
    try {
        return (0,lib_esm.getAddress)(value);
    } catch (e) {
        return false;
    }
}
// shorten the checksummed version of the input address to have 0x + 4 characters at start and end
function shortenAddress(address, chars = 4) {
    const parsed = isAddress(address);
    if (!parsed) {
        throw Error(`Invalid 'address' parameter '${address}'.`);
    }
    return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`;
}
function shortenTxHash(txHash, chars = 6) {
    return `${txHash.substring(0, chars)}...${txHash.slice(-chars)}`;
}
// account is not optional
function getSigner(provider, account) {
    return provider.getSigner(account).connectUnchecked();
}
// account is optional
function getProviderOrSigner(provider, account) {
    return account ? getSigner(provider, account) : provider;
}
// account is optional
function getContract(address, ABI, provider, account) {
    if (!isAddress(address) || address === AddressZero) {
        throw Error(`Invalid 'address' parameter '${address}'.`);
    }
    return new Contract(address, ABI, getProviderOrSigner(provider, account));
}
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
const Base64 = {
    encode (str) {
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
        }));
    },
    decode (str) {
        return decodeURIComponent(atob(str).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }
};
const dayJsAdapter = new build_index_esm/* default */.Z({
    formats: {
        normalDate: 'DD MMM YYYY'
    }
});
const getDayDiffs = (epoch)=>{
    return dayJsAdapter.getDiff(dayJsAdapter.date(new Date(Number(epoch) * 1000)).add(1, 'day'), dayJsAdapter.date(new Date(new Date().setHours(0, 0, 0, 0))), 'days'); // inclusive due date
};
const maskedABN = imask_esm/* default.createMask */.ZP.createMask({
    mask: '00 000 000 000'
});
const maskedCurrency = imask_esm/* default.createMask */.ZP.createMask({
    mask: '$num',
    lazy: true,
    blocks: {
        num: {
            lazy: true,
            mask: Number,
            scale: 2,
            signed: false,
            normalizeZeros: true,
            thousandsSeparator: ',',
            padFractionalZeros: true,
            radix: '.',
            mapToRadix: [
                '.'
            ]
        }
    }
});
const unmaskValue = (value)=>{
    const strVal = String(value);
    const retVal = strVal.startsWith('$') ? strVal.slice(1).replaceAll(',', '') : strVal.replaceAll(',', '');
    return Number(retVal);
};
const BigNumberInstance = bignumber/* default.clone */.Z.clone({
    ROUNDING_MODE: bignumber/* default.ROUND_HALF_UP */.Z.ROUND_HALF_UP,
    DECIMAL_PLACES: 2
});
const getExplorerLink = (txHash)=>`https://goerli.etherscan.io/tx/${txHash}`;

// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(84875);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/web/components/Input/index.tsx




const handleIntegerValue = (value)=>{
    if (value === 'NaN' || !value) {
        return '';
    }
    value = value.replace(/[^0-9]/g, '');
    const res = value ? new bignumber/* default */.Z(value).toString(10) : '';
    return res;
};
const roundList = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
];
const handleDecimalValue = (value, round, decimals)=>{
    value = value.replace(/。/, '.');
    value = value.replace(/[^\d.]/g, '');
    value = value.replace(/^\./g, '');
    value = value.replace(/\.{4,}/g, '.');
    value = value.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
    if (value.indexOf('.') > -1 && roundList.includes(round)) {
        if (value.split('.')[1] && value.split('.')[1].length > decimals) {
            value = new bignumber/* default */.Z(value).toFixed(decimals, 1);
        }
    } else {
        value = value.replace(new RegExp(`^(\\-)*(\\d+)\\.(${'\\d'.repeat(Number(decimals))}).*$`, 'g'), '$1$2.$3');
    }
    return value;
};
function Input({ type ='text' , mode , maxLength , decimals , prefix , suffix , onChange , value , warn , placeholder , className , full , size ='default' , border =true , onKeyUp  }) {
    let saveValue = '';
    const inputEl = (0,react.useRef)(null);
    const [showCleartext, setShowCleartext] = (0,react.useState)(false);
    const handleChange = (event)=>{
        if (mode === 'integer') {
            event.target.value = handleIntegerValue(event.target.value);
        }
        if (mode === 'decimal') {
            event.target.value = handleDecimalValue(event.target.value, 1, decimals || 0);
        }
        if (maxLength) {
            event.target.value = event.target.value.substring(0, maxLength);
        }
        if (saveValue != event.target.value || !event.target.value) {
            onChange == null ? void 0 : onChange(event.target.value, event);
        }
        saveValue = event.target.value;
    };
    (0,react.useEffect)(()=>{
        setShowCleartext(value ? true : false);
    }, [
        value
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classnames_default()('min-w-[120px] flex items-center', 'p-[0.75rem] bg-theme-[#ECEDEE]', {
            'border border-solid border-[#ECEDEE] rounded-[4px]': border,
            '!border-[#e83939]': warn
        }, {
            'w-full': full
        }, {
            'h-[3.75rem]': size === 'default',
            'h-[2.8rem] text-[0.8rem]': size === 'medium',
            'h-[2rem] text-[0.8rem]': size === 'small'
        }, className),
        children: [
            prefix && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "h-full pr-[0.75rem] flex items-center justify-start",
                children: prefix
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                className: "w-full flex-1 outline-none border-none bg-transparent placeholder-gray-400",
                type: type,
                value: value,
                placeholder: placeholder,
                onChange: handleChange,
                onKeyUp: onKeyUp,
                ref: inputEl
            }),
            showCleartext && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                onClick: ()=>{
                    if (inputEl.current) {
                        inputEl.current.value = '';
                        onChange == null ? void 0 : onChange('');
                    }
                },
                className: classnames_default()('opacity-[0.6] hover:opacity-[1] z-[-1] pl-[0.6rem]'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                    viewBox: "0 0 1024 1024",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "p-id": "2373",
                    width: "14",
                    height: "14",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M512 83.2c-234.666667 0-426.666667 192-426.666667 426.666667s192 426.666667 426.666667 426.666666 426.666667-192 426.666667-426.666666-192-426.666667-426.666667-426.666667z m0 810.666667c-211.2 0-384-172.8-384-384s172.8-384 384-384 384 172.8 384 384c0 213.333333-172.8 384-384 384z",
                            "p-id": "2374"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M674.133333 345.6c-8.533333-8.533333-21.333333-8.533333-29.866666 0l-134.4 134.4-134.4-134.4c-8.533333-8.533333-21.333333-8.533333-29.866667 0-8.533333 8.533333-8.533333 21.333333 0 29.866667l134.4 134.4-134.4 134.4c-8.533333 8.533333-8.533333 21.333333 0 29.866666 4.266667 4.266667 10.666667 6.4 14.933333 6.4 6.4 0 10.666667-2.133333 14.933334-6.4l136.533333-134.4 134.4 134.4c4.266667 4.266667 10.666667 6.4 14.933333 6.4 6.4 0 10.666667-2.133333 14.933334-6.4 8.533333-8.533333 8.533333-21.333333 0-29.866666l-134.4-134.4 134.4-134.4c6.4-8.533333 6.4-21.333333-2.133334-29.866667z",
                            "p-id": "2375"
                        })
                    ]
                })
            }),
            suffix && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "h-full pl-[0.75rem] flex items-center",
                children: suffix
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/web/components/Navbars/Topbar.tsx










function Topbar() {
    const { pathname  } = (0,react_router_dist/* useLocation */.TH)();
    const [searchValue, setSearchValue] = (0,react.useState)('');
    const { setTextValue  } = (0,react.useContext)(SearchContext);
    const { isActive , account , chainId , deactivate , connect , switchChain  } = (0,dist/* useWeb3Provider */.xo)();
    const { openModal: openWalletModel , disconnect , setConnections  } = (0,dist/* useConnectModal */.We)();
    const { openModal: openSwitchChainModel , setChainIds  } = (0,dist/* useSwitchChainModal */.CD)();
    (0,react.useEffect)(()=>{
        connect(dist/* ConnectionType.INJECTED */.Rj.INJECTED);
    }, [
        connect
    ]);
    const onOpenSwitchChainModel = (0,react.useCallback)(()=>{
        // setChainIds([SupportedChainId.GOERLI])
        // openSwitchChainModel();
        switchChain(dist/* SupportedChainId.GOERLI */.HL.GOERLI);
    }, []);
    const onWalletConnect = (0,react.useCallback)(()=>{
        if (isActive && account) {
            deactivate();
        } else {
            setConnections([
                dist/* connections.INJECTED */.I_.INJECTED,
                dist/* connections.WALLET_CONNECT */.I_.WALLET_CONNECT
            ]);
            openWalletModel();
        // connect(ConnectionType.INJECTED);
        }
    }, [
        isActive,
        account
    ]);
    const showSearchBar = pathname === '/pay' || pathname === '/get-paid' || pathname === '/activity';
    const handleKeyUp = (event)=>{
        if (event.key === 'Enter' || searchValue === '') {
            setTextValue(searchValue);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("nav", {
            className: "top-0 sticky z-20 w-screen items-center py-3 navbar-expand-lg bg-white shadow",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "px-8 mx-auto flex flex-wrap items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "relative lg:static lg:block",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            src: logo_namespaceObject,
                            className: "h-11"
                        })
                    }),
                    showSearchBar && /*#__PURE__*/ (0,jsx_runtime.jsx)(Input, {
                        value: searchValue,
                        onChange: (val)=>setSearchValue(val),
                        onKeyUp: handleKeyUp,
                        size: "small",
                        prefix: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* FaSearch */.U41, {
                            color: "gray"
                        }),
                        className: "w-[50%] border-transparent",
                        placeholder: "Search InvoiceID, Company Names, ABNs, and Items"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center border border-solid p-2 rounded border-slate-200 divide-x divide-slate-200",
                        children: [
                            isActive && account ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "pr-2",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                    src: metamask_namespaceObject,
                                    className: "h-6"
                                })
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "pr-2",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* FaWallet */.OZg, {
                                    size: 20
                                })
                            }),
                            isActive && account && (!chainId || chainId !== 5) ? /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                className: "pl-2 border-none",
                                onClick: ()=>onOpenSwitchChainModel(),
                                children: "Wrong Network"
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                className: "pl-2 border-none",
                                onClick: ()=>onWalletConnect(),
                                children: isActive && account ? `${shortenAddress(account, 6)}` : 'Connect Wallet'
                            })
                        ]
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-router-dom@6.9.0_biqbaboplfbrettd7655fr4n2y/node_modules/react-router-dom/dist/index.js
var react_router_dom_dist = __webpack_require__(75820);
;// CONCATENATED MODULE: ./src/web/components/Navbars/Sidebar.tsx


const Sidebar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "w-2/12 sticky top-20 h-min pt-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex flex-col pb-4 text-sm rounded-md",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                    className: "mt-5 flex-1 space-y-1 px-5",
                    "aria-label": "Sidebar",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router_dom_dist/* NavLink */.OL, {
                            to: '/',
                            className: ({ isActive  })=>isActive ? 'group flex items-center px-3 py-2 fill-primary text-primary bg-primary bg-opacity-[.04]' : 'group flex items-center px-3 py-2 fill-[#6E747A] hover:fill-primary hover:text-primary hover:bg-primary hover:bg-opacity-[.04]',
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                    className: "mr-3 flex-shrink-0 h-6 w-6",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                        d: "M12 7V3H2V21H22V7H12ZM6 19H4V17H6V19ZM6 15H4V13H6V15ZM6 11H4V9H6V11ZM6 7H4V5H6V7ZM10 19H8V17H10V19ZM10 15H8V13H10V15ZM10 11H8V9H10V11ZM10 7H8V5H10V7ZM20 19H12V17H14V15H12V13H14V11H12V9H20V19ZM18 11H16V13H18V11ZM18 15H16V17H18V15Z"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "flex-1",
                                    children: "Dashboard"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router_dom_dist/* NavLink */.OL, {
                            to: '/create',
                            className: ({ isActive  })=>isActive ? 'group flex items-center px-3 py-2 fill-primary text-primary bg-primary bg-opacity-[.04]' : 'group flex items-center px-3 py-2 fill-[#6E747A] hover:fill-primary hover:text-primary hover:bg-primary hover:bg-opacity-[.04]',
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                    className: "mr-3 flex-shrink-0 h-6 w-6",
                                    viewBox: "0 0 18 21",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                        d: "M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H6L9 21L12 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM10.88 10.88L9 15L7.12 10.88L3 9L7.12 7.12L9 3L10.88 7.12L15 9L10.88 10.88Z"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "flex-1",
                                    children: "Create Invoice"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router_dom_dist/* NavLink */.OL, {
                            to: '/pay',
                            className: ({ isActive  })=>isActive ? 'group flex items-center px-3 py-2 fill-primary text-primary bg-primary bg-opacity-[.04]' : 'group flex items-center px-3 py-2 fill-[#6E747A] hover:fill-primary hover:text-primary hover:bg-primary hover:bg-opacity-[.04]',
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                    className: "mr-3 flex-shrink-0 h-6 w-6",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM15 12H11V13H14C14.55 13 15 13.45 15 14V17C15 17.55 14.55 18 14 18H13V19H11V18H9V16H13V15H10C9.45 15 9 14.55 9 14V11C9 10.45 9.45 10 10 10H11V9H13V10H15V12ZM13 8V3.5L17.5 8H13Z"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "flex-1",
                                    children: "Pay"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router_dom_dist/* NavLink */.OL, {
                            to: '/get-paid',
                            className: ({ isActive  })=>isActive ? 'group flex items-center px-3 py-2 fill-primary text-primary bg-primary bg-opacity-[.04]' : 'group flex items-center px-3 py-2 fill-[#6E747A] hover:fill-primary hover:text-primary hover:bg-primary hover:bg-opacity-[.04]',
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                    className: "mr-3 flex-shrink-0 h-6 w-6",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                            d: "M8 8H6V15C6 16.1 6.9 17 8 17H17V15H8V8Z"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                            d: "M20 3H12C10.9 3 10 3.9 10 5V11C10 12.1 10.9 13 12 13H20C21.1 13 22 12.1 22 11V5C22 3.9 21.1 3 20 3ZM20 11H12V7H20V11Z"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                            d: "M4 12H2V19C2 20.1 2.9 21 4 21H13V19H4V12Z"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "flex-1",
                                    children: "Get Paid"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex flex-col flex-1 space-y-1 border-t border-slate-200 p-4 px-5 text-sm font-medium rounded-md",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router_dom_dist/* NavLink */.OL, {
                    to: '/activity',
                    className: ({ isActive  })=>isActive ? 'group flex items-center px-3 py-2 fill-primary text-primary bg-primary bg-opacity-[.04]' : 'group flex items-center px-3 py-2 fill-[#6E747A] hover:fill-primary hover:text-primary hover:bg-primary hover:bg-opacity-[.04]',
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                            className: "mr-3 flex-shrink-0 h-6 w-6",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
                                    clipPath: "url(#clip0_413_6290)",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                        d: "M18 17H6V15H18V17ZM18 13H6V11H18V13ZM18 9H6V7H18V9ZM3 22L4.5 20.5L6 22L7.5 20.5L9 22L10.5 20.5L12 22L13.5 20.5L15 22L16.5 20.5L18 22L19.5 20.5L21 22V2L19.5 3.5L18 2L16.5 3.5L15 2L13.5 3.5L12 2L10.5 3.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2V22Z"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("clipPath", {
                                        id: "clip0_413_6290",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                                            width: "24",
                                            height: "24",
                                            fill: "white"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "flex-1",
                            children: "Activity"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Navbars_Sidebar = (Sidebar);

;// CONCATENATED MODULE: ./src/web/components/Navbars/index.ts




;// CONCATENATED MODULE: ./src/web/layouts/Layout.tsx




const MainLayout = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Topbar, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
                className: "w-full h-screen",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex flex-1 divide-x divide-slate-200",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Navbars_Sidebar, {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "w-10/12 flex flex-1 min-h-screen px-3 pb-12 flex-col bg-[#EDEDED]",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_dist/* Outlet */.j3, {})
                        })
                    ]
                })
            })
        ]
    });
};
// MainLayout.whyDidYouRender = true;
/* harmony default export */ const Layout = (/*#__PURE__*/(0,react.memo)(MainLayout));

;// CONCATENATED MODULE: ./src/web/assets/images/activity-icon.png
const activity_icon_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARtSURBVHgBzZm/bxNJFMff/Fivs7FIpNhYRNydi9Dd0aS9SNfff3A0Vx3HSUcNFe5MjwSCnj8B/oHQ0hA6gggpHDl2pBg563h/De9tvLDYjr2/40+zO+u1/X3z3sy8ecMgAxQodncb5ObJgbjmSLY/0gU9ryjGgncGTKnrmuNBaeS1Nxru5ltwm8A8SAmDhJDo+1v7pQ1zVZiWJiABnnC9LzfrVhpjYhsQCHf7a1q4h9NiVKo2HIAV15BYAv7f+qBnLXyS4fqp9WT/1ijq+5GENEHxQb2zwl3BoQA8UfUqHRhG8cZCA/7ZVpo87Op59vosDBz00K2doxHOvPfmiqKQWTldL8EVsiikLjVgGcQHzDNiZkw3/1ByWcQTpOU5KG3WZ1MeoAF7XOsaRcf8IsZjwpwc2FMeWEbxhImaaCacfP6DART3RYoXsrQjpLET9X2axklj+JkMbih0zNNesXGvtL8wiH/Gu92oX9nAhRSzAYsBU9T+7oEGFCpeCvELariDVuz49xGhUKJUJmj7Bvi9P+hpUAAUNlwarxXT94JndC/E6rOo4TT2gh/qvgHtbUiUTSaFMfV56hlX6AUn0vfDXvDHwOYRaCYUg+tYFO+7TJZbHPh7euaB96uyzw/j/A6l8XSVfvhYvUI9QCgHBcvVXZzWD+OKJ2gPQmEkKXzWP0NspFh5iJ78D2/X4nwPl6OW55qti5b9GJSEpNAukP3d+FS+PqjEHsA44L5AIlTfdYY/QQYYlYHNG5aeQ46v9i7/jMXy2Dxo/82PbZm5AZ7H/8VLH3Kmbd/kPPPUgamXyjvbwx99CTlT8bos+95Xyh+gLnhPIWdoPcjKgD5Dwf587lxMiXSlNnkEcoT7eXYKMFTeYZr4p+OcPwjEB1DbtYf3HM/9Hei9HODHkA60/jaWEd5QLjOZlFFbSuOx5OIV0HsZQ9ULvqWPXMgCzCwpKQuMoCu10cDYi11UKuJI8XfSSRVCUzD9Hl0UlB9A3mCdlZew0AoZgvnJHcH12xe5fr7cOGi4/MXbiDlsZHCl5fwZFMARztacgtco2Um8MGelZb9BzlBlmyoU/jpwYpzFNgA3JUkWqj7uo1qQAbc6dcvXcdFUrFnrrpop0wqpYYqt2MOgTWI928xE8CRGr3r2zQMURidrfRtS4tjDFnrGF5yreDxLCApcoR7PxgsEbdzHW8dcCHqf7kO5UDZeIHIWPwqXF39I5qgCTKMblpQapg4o3go/m8pGK536MG2Clwek6QxPbSafz4x3KmV/rPbKsERg6AxnndbM3A/cBWZTrMGSMI77mRnD3BkHa0Yls9rT4QoZi7cu+3zhlNmkwk2tWzav4JCv3a2NXmA0zHtv4ZbSdx2ejBQ5sGs0E+J/LhJPxOrVvENqfIxkzQuZSWKHBdVS6Swhy3J8IPwR1hqDg4uoJI5rMqSNWcO1eqeU9ATfT+PbN5wkwgMyGZiBMZuNAwFYqqRqX7hgRj1MxQMd999ruIVt407qOeZ+SUWH+QpbV/yKkPZ5VQAAAABJRU5ErkJggg==";
;// CONCATENATED MODULE: ./src/web/components/PageHeader.tsx

const PageHeader = ({ title , children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex justify-between items-center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    className: "text-5xl",
                    children: title
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "hidden sm:block",
                    children: children
                })
            ]
        })
    });
};
/* harmony default export */ const components_PageHeader = (PageHeader);

// EXTERNAL MODULE: ./node_modules/.pnpm/@headlessui+react@1.7.13_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/components/listbox/listbox.js + 3 modules
var listbox = __webpack_require__(55902);
// EXTERNAL MODULE: ./node_modules/.pnpm/@headlessui+react@1.7.13_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/components/transitions/transition.js + 4 modules
var transition = __webpack_require__(11375);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-icons@4.8.0_react@18.2.0/node_modules/react-icons/io/index.esm.js
var io_index_esm = __webpack_require__(45809);
// EXTERNAL MODULE: ./node_modules/.pnpm/tailwind-merge@1.10.0/node_modules/tailwind-merge/dist/lib/tw-merge.mjs + 11 modules
var tw_merge = __webpack_require__(81667);
;// CONCATENATED MODULE: ./src/web/components/Selection/index.tsx






const Selection = ({ selected , onSelected , options , className , disabled =false  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (0,tw_merge/* twMerge */.m)("form-select px-2 rounded-md", className),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(listbox/* Listbox */.R, {
            value: selected,
            onChange: onSelected,
            disabled: disabled,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative mt-1",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(listbox/* Listbox.Button */.R.Button, {
                        className: (0,tw_merge/* twMerge */.m)("relative w-full cursor-default border-0 rounded-lg bg-white py-3 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:text-sm", disabled && 'cursor-not-allowed'),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                className: "flex items-center justify-center px-2 gap-2 font-normal text-lg truncate",
                                children: [
                                    selected.icon,
                                    selected.label
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(io_index_esm/* IoMdArrowDropdown */.yQg, {
                                    className: "text-[#84818A]",
                                    size: "20"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(transition/* Transition */.u, {
                        as: react.Fragment,
                        leave: "transition ease-in duration-100",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(listbox/* Listbox.Options */.R.Options, {
                            className: "absolute mt-2 max-h-60 w-full overflow-auto rounded-md bg-white py-2 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
                            children: options.map((opt, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(listbox/* Listbox.Option */.R.Option, {
                                    className: ({ active  })=>`relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-primary bg-opacity-[.04] text-primary' : 'text-gray-900'}`,
                                    value: opt,
                                    children: ({ selected  })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: `block truncate ${selected ? 'font-medium' : 'font-normal'}`,
                                                    children: opt.label
                                                }),
                                                selected ? /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: "absolute inset-y-0 left-0 flex items-center pl-3 text-primary",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(io_index_esm/* IoMdCheckmark */.Gy1, {
                                                        size: 15
                                                    })
                                                }) : null
                                            ]
                                        })
                                }, idx))
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_Selection = (Selection);

;// CONCATENATED MODULE: ./src/web/assets/svg/plus-star.svg
const plus_star_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNCAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjQ1NDYgNS45MjA5OUwxMi4yNTAxIDQuMTcwOTlMMTQuMDAwMSAzLjM3NTUzTDEyLjI1MDEgMi41ODAwOEwxMS40NTQ2IDAuODMwMDc4TDEwLjY1OTIgMi41ODAwOEw4LjkwOTE4IDMuMzc1NTNMMTAuNjU5MiA0LjE3MDk5TDExLjQ1NDYgNS45MjA5OVoiIGZpbGw9IiM3OTE4RjUiLz4KPHBhdGggZD0iTTguNDg0ODUgNS4yODQxOEgxLjA2MDYxQzAuNDc3MjczIDUuMjg0MTggMCA1Ljc2MTQ1IDAgNi4zNDQ3OVYxMy43NjlDMCAxNC4zNTI0IDAuNDc3MjczIDE0LjgyOTYgMS4wNjA2MSAxNC44Mjk2SDMuMTgxODJMNC43NzI3MyAxNi40MjA1TDYuMzYzNjQgMTQuODI5Nkg4LjQ4NDg1QzkuMDY4MTggMTQuODI5NiA5LjU0NTQ1IDE0LjM1MjQgOS41NDU0NSAxMy43NjlWNi4zNDQ3OUM5LjU0NTQ1IDUuNzYxNDUgOS4wNjgxOCA1LjI4NDE4IDguNDg0ODUgNS4yODQxOFpNNS43Njk3IDExLjA1MzlMNC43NzI3MyAxMy4yMzg3TDMuNzc1NzYgMTEuMDUzOUwxLjU5MDkxIDEwLjA1NjlMMy43NzU3NiA5LjA1OTk0TDQuNzcyNzMgNi44NzUwOUw1Ljc2OTcgOS4wNTk5NEw3Ljk1NDU1IDEwLjA1NjlMNS43Njk3IDExLjA1MzlaIiBmaWxsPSIjNzkxOEY1Ii8+Cjwvc3ZnPgo=";
;// CONCATENATED MODULE: ./src/web/utils/constants.tsx



const activityStatuses = [
    {
        label: 'Invoicing',
        value: 'invoicing',
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
            src: plus_star_namespaceObject
        })
    }
];
const getPaidStatuses = [
    {
        label: 'All Status',
        value: ''
    },
    {
        label: 'Unpaid',
        value: '1'
    },
    {
        label: 'Paid',
        value: '2'
    },
    {
        label: 'Overdue',
        value: '0'
    },
    {
        label: 'Finalised',
        value: '3'
    }
];
const payStatuses = [
    {
        label: 'All Status',
        value: ''
    },
    {
        label: 'TBC',
        value: '1'
    },
    {
        label: 'Unpaid',
        value: '2'
    },
    {
        label: 'Finalised',
        value: '3'
    },
    {
        label: 'Overdue',
        value: '0'
    }
];
const dueDateFilterOptions = [
    {
        label: 'All Time',
        value: ''
    },
    {
        label: 'Next 5 days',
        value: '5'
    },
    {
        label: 'Next 10 days',
        value: '10'
    },
    {
        label: 'Next 15 days',
        value: '15'
    },
    {
        label: 'Next 30 days',
        value: '30'
    }
];
const dateFilterOptions = [
    {
        label: 'All Time',
        value: ''
    },
    {
        label: 'Next 5 days',
        value: '5'
    },
    {
        label: 'Next 10 days',
        value: '10'
    },
    {
        label: 'Next 15 days',
        value: '15'
    },
    {
        label: 'Next 30 days',
        value: '30'
    }
];
const activityDateFilterOptions = [
    {
        label: 'All Time',
        value: ''
    },
    {
        label: 'Past 5 days',
        value: '5'
    },
    {
        label: 'Past 10 days',
        value: '10'
    },
    {
        label: 'Past 15 days',
        value: '15'
    },
    {
        label: 'Past 30 days',
        value: '30'
    }
];
const invoiceDelegateAddress = '0x79087F3990E1011Fcffb3aaD7A1a8041C081f28C';
const receivableDelegateAddress = '0xa552793238f0D99E531c0CC1D75280F78425Bb35';
const weAUDAddress = '0xbb6c147329afb1c9799f4b13755991038e5b522d';
const erc20Abi = [
    'function allowance(address owner, address spender) external view returns (uint256)',
    'function balanceOf(address account) external view returns (uint256)',
    'function approve(address spender, uint256 amount) external returns (bool)'
];
const TIMER_INTERVAL = 12000;
const currDate = dayJsAdapter.date(new Date(new Date().setHours(0, 0, 0, 0)));

;// CONCATENATED MODULE: ./src/web/graphql/queries.ts
const InvoicesQuery = `
  query ($pageSize: Int!, $skip: Int!, $account: String, $sortBy: String, $sortDirection: String) {
    invoices(
      where: { buyerAddr: $account },
      first: $pageSize,
      skip: $skip,
      orderBy: $sortBy,
      orderDirection: $sortDirection
    ) {
      id
      sellerName
      sellerAbn
      sellerAddr
      buyerName
      buyerAbn
      buyerAddr
      invoiceLink
      subtotal
      totalGst
      totalValue
      invoiceDate
      dueDate
      confirmDate
      isValid
      state
      itemsDesc
      txHash
    }
  }
`;
const InvoiceSearch = `
  query ($searchText: String, $pageSize: Int!, $skip: Int!) {
    invoiceSearch(
      text: $searchText,
      first: $pageSize,
      skip: $skip
    ) {
      id
      sellerName
      sellerAbn
      sellerAddr
      buyerName
      buyerAbn
      buyerAddr
      invoiceLink
      subtotal
      totalGst
      totalValue
      invoiceDate
      dueDate
      confirmDate
      isValid
      state
      itemsDesc
      txHash
    }
  }
`;
const ReceivablesQuery = `
  query ($pageSize: Int!, $skip: Int!, $account: String, $sortBy: String, $sortDirection: String) {
    receivables(
      where: { owner: $account },
      first: $pageSize,
      skip: $skip,
      orderBy: $sortBy,
      orderDirection: $sortDirection
    ) {
      id
      owner
      state
      txHash
      amount
      invoiceNumber
      sellerName
      sellerAbn
      buyerName
      buyerAbn
      itemsDesc
      invoice {
        sellerName
        sellerAbn
        sellerAddr
        buyerName
        buyerAbn
        buyerAddr
        invoiceLink
        totalValue
        invoiceDate
        dueDate
        confirmDate
      }
    }
  }
`;
const ReceivablesSearch = `
  query ($searchText: String, $pageSize: Int!, $skip: Int!) {
    receiableSearch(
      text: $searchText,
      first: $pageSize,
      skip: $skip
    ) {
      id
      owner
      state
      amount
      txHash
      invoiceNumber
      sellerName
      sellerAbn
      buyerName
      buyerAbn
      itemsDesc
      invoice {
        sellerName
        sellerAbn
        sellerAddr
        buyerName
        buyerAbn
        buyerAddr
        invoiceLink
        totalValue
        invoiceDate
        dueDate
        confirmDate
      }
    }
  }
`;
const ActivitiesQuery = `
  query ($pageSize: Int!, $skip: Int!, $account: String, $sortBy: String, $sortDirection: String) {
    activities(
      where: { sellerAddr: $account },
      first: $pageSize,
      skip: $skip,
      orderBy: $sortBy,
      orderDirection: $sortDirection
    ) {
      id
      userWallet
      invoiceNumber
      type
      invoiceDate
      recipientAddress
      invoiceLink
      amount
      sellerName
      sellerAbn
      sellerAddr
      buyerName
      buyerAddr
      buyerAbn
      itemsDesc
      txHash
      dueDate
      invoice
    }
  }
`;
const ActivitiesSearch = `
  query ($searchText: String, $pageSize: Int!, $skip: Int!) {
    activitySearch(
      text: $searchText,
      first: $pageSize,
      skip: $skip
    ) {
      id
      userWallet
      invoiceNumber
      type
      invoiceDate
      recipientAddress
      invoiceLink
      amount
      sellerName
      sellerAbn
      sellerAddr
      buyerName
      buyerAddr
      buyerAbn
      itemsDesc
      txHash
      dueDate
      invoice
    }
  }
`;

// EXTERNAL MODULE: ./node_modules/.pnpm/@ethersproject+units@5.7.0/node_modules/@ethersproject/units/lib.esm/index.js + 2 modules
var units_lib_esm = __webpack_require__(88673);
;// CONCATENATED MODULE: ./src/web/components/SVGs.tsx

const SendIcon = ({ fillColour ='white'  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M10.7601 1.97336L4.74008 3.97336C0.693412 5.3267 0.693412 7.53336 4.74008 8.88003L6.52674 9.47336L7.12008 11.26C8.46674 15.3067 10.6801 15.3067 12.0267 11.26L14.0334 5.2467C14.9267 2.5467 13.4601 1.07336 10.7601 1.97336ZM10.9734 5.56003L8.44008 8.1067C8.34008 8.2067 8.21341 8.25336 8.08674 8.25336C7.96008 8.25336 7.83341 8.2067 7.73341 8.1067C7.54008 7.91336 7.54008 7.59336 7.73341 7.40003L10.2667 4.85336C10.4601 4.66003 10.7801 4.66003 10.9734 4.85336C11.1667 5.0467 11.1667 5.3667 10.9734 5.56003Z",
            fill: fillColour
        })
    });
};
const InvoiceFromToIcon = ({ fillColour ='white'  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: "83",
        height: "30",
        viewBox: "0 0 83 30",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M41 2.5C34.1 2.5 28.5 8.1 28.5 15C28.5 21.9 34.1 27.5 41 27.5C47.9 27.5 53.5 21.9 53.5 15C53.5 8.1 47.9 2.5 41 2.5ZM46.0375 15.6625L42.2875 19.4125C42.1 19.6 41.8625 19.6875 41.625 19.6875C41.3875 19.6875 41.15 19.6 40.9625 19.4125C40.6 19.05 40.6 18.45 40.9625 18.0875L43.1125 15.9375H36.625C36.1125 15.9375 35.6875 15.5125 35.6875 15C35.6875 14.4875 36.1125 14.0625 36.625 14.0625H43.1125L40.9625 11.9125C40.6 11.55 40.6 10.95 40.9625 10.5875C41.325 10.225 41.925 10.225 42.2875 10.5875L46.0375 14.3375C46.4 14.7 46.4 15.3 46.0375 15.6625Z",
                fill: fillColour
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M20 19C22.2091 19 24 17.2091 24 15C24 12.7909 22.2091 11 20 11C17.7909 11 16 12.7909 16 15C16 17.2091 17.7909 19 20 19ZM9 18C10.6569 18 12 16.6569 12 15C12 13.3431 10.6569 12 9 12C7.34315 12 6 13.3431 6 15C6 16.6569 7.34315 18 9 18ZM3 15.5C3 16.3284 2.32843 17 1.5 17C0.671573 17 0 16.3284 0 15.5C0 14.6716 0.671573 14 1.5 14C2.32843 14 3 14.6716 3 15.5ZM81.5 17C82.3284 17 83 16.3284 83 15.5C83 14.6716 82.3284 14 81.5 14C80.6716 14 80 14.6716 80 15.5C80 16.3284 80.6716 17 81.5 17ZM76 15C76 16.6569 74.6569 18 73 18C71.3431 18 70 16.6569 70 15C70 13.3431 71.3431 12 73 12C74.6569 12 76 13.3431 76 15ZM62 19C64.2091 19 66 17.2091 66 15C66 12.7909 64.2091 11 62 11C59.7909 11 58 12.7909 58 15C58 17.2091 59.7909 19 62 19Z",
                fill: "url(#paint0_linear_1095_43000)"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "paint0_linear_1095_43000",
                    x1: "-5.5",
                    y1: "15",
                    x2: "88.5",
                    y2: "15",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#597EFF",
                            stopOpacity: "0.1"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "0.493895",
                            stopColor: "#597EFF"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#597EFF",
                            stopOpacity: "0.1"
                        })
                    ]
                })
            })
        ]
    });
};
const CopyIcon = ({ fillColour ='#0D1821'  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M10.6673 8.55805V11.1627C10.6673 13.3332 9.73398 14.2015 7.40065 14.2015H4.60065C2.26732 14.2015 1.33398 13.3332 1.33398 11.1627V8.55805C1.33398 6.3875 2.26732 5.51929 4.60065 5.51929H7.40065C9.73398 5.51929 10.6673 6.3875 10.6673 8.55805Z",
                stroke: fillColour,
                strokeWidth: "1.2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M14.6673 4.83722V7.44187C14.6673 9.61242 13.734 10.4806 11.4007 10.4806H10.6673V8.55815C10.6673 6.38761 9.73398 5.51939 7.40065 5.51939H5.33398V4.83722C5.33398 2.66668 6.26732 1.79846 8.60065 1.79846H11.4007C13.734 1.79846 14.6673 2.66668 14.6673 4.83722Z",
                stroke: fillColour,
                strokeWidth: "1.2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/.pnpm/copy-to-clipboard@3.3.3/node_modules/copy-to-clipboard/index.js
var copy_to_clipboard = __webpack_require__(874);
var copy_to_clipboard_default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard);
;// CONCATENATED MODULE: ./src/web/hooks/useCopyClipboard.ts


// 文本复制
function useCopyClipboard(timeout = 500) {
    const [isCopied, setIsCopied] = (0,react.useState)(false);
    const staticCopy = (0,react.useCallback)((text)=>{
        const didCopy = copy_to_clipboard_default()(text);
        setIsCopied(didCopy);
    }, []);
    (0,react.useEffect)(()=>{
        if (isCopied) {
            const hide = setTimeout(()=>{
                setIsCopied(false);
            }, timeout);
            return ()=>{
                clearTimeout(hide);
            };
        }
        return undefined;
    }, [
        isCopied,
        setIsCopied,
        timeout
    ]);
    return [
        isCopied,
        staticCopy
    ];
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_biqbaboplfbrettd7655fr4n2y/node_modules/react-use/esm/useIdle.js + 1 modules
var useIdle = __webpack_require__(63472);
;// CONCATENATED MODULE: ./src/web/pages/Activity.tsx















const Activity = ()=>{
    const { account  } = (0,dist/* useWeb3Provider */.xo)();
    const [selectedStatus, setSelectedStatus] = (0,react.useState)(activityStatuses[0]);
    const [selectedTime, setSelectedTime] = (0,react.useState)(dateFilterOptions[0]);
    const [copiedText, setCopiedText] = (0,react.useState)('');
    const [isCopied, onCopy] = useCopyClipboard();
    const [skip] = (0,react.useState)(0);
    const [pageSize] = (0,react.useState)(50);
    const { textValue  } = (0,react.useContext)(SearchContext);
    const isIdle = (0,useIdle/* default */.Z)();
    const [queryResult, reexecuteQuery] = (0,urql_es/* useQuery */.aM)({
        query: ActivitiesQuery,
        variables: {
            pageSize,
            skip,
            account
        },
        requestPolicy: 'cache-and-network',
        pause: !!account || isIdle
    });
    const { data: activityList , fetching: isFetching  } = queryResult;
    const [searchResult, reexecuteSearch] = (0,urql_es/* useQuery */.aM)({
        query: ActivitiesSearch,
        variables: {
            pageSize,
            skip,
            searchText: `'${textValue}'`
        },
        requestPolicy: 'cache-and-network',
        pause: !!textValue || isIdle
    });
    const { data: activityData , fetching: isSearching  } = searchResult;
    const filteredActivities = (activities)=>{
        return activities == null ? void 0 : activities.filter((activity)=>{
            var _activity_sellerAddr;
            return (activity == null ? void 0 : (_activity_sellerAddr = activity.sellerAddr) == null ? void 0 : _activity_sellerAddr.toLowerCase()) === (account == null ? void 0 : account.toLowerCase());
        });
    };
    let activities = textValue ? filteredActivities(activityData == null ? void 0 : activityData.activitySearch) : activityList == null ? void 0 : activityList.activities;
    activities = activities == null ? void 0 : activities.filter((invoice)=>{
        if (selectedTime.value === '') return true;
        return Number(invoice == null ? void 0 : invoice.invoiceDate) < dayJsAdapter.addDays(currDate, Number(selectedTime.value)).unix();
    });
    (0,react.useEffect)(()=>{
        if (textValue) {
            reexecuteSearch({
                requestPolicy: 'network-only'
            });
        } else {
            reexecuteQuery({
                requestPolicy: 'network-only'
            });
        }
    }, [
        textValue
    ]);
    (0,react.useEffect)(()=>{
        if (isFetching) return;
        const timerId = setTimeout(()=>{
            if (isFetching || isIdle) return;
            reexecuteQuery({
                requestPolicy: 'network-only'
            });
        }, TIMER_INTERVAL);
        return ()=>clearTimeout(timerId);
    }, [
        isFetching,
        reexecuteQuery,
        isIdle
    ]);
    (0,react.useEffect)(()=>{
        if (isSearching) return;
        const timerId = setTimeout(()=>{
            if (isSearching || !textValue || isIdle) return;
            reexecuteSearch({
                requestPolicy: 'network-only'
            });
        }, TIMER_INTERVAL);
        return ()=>clearTimeout(timerId);
    }, [
        isSearching,
        reexecuteSearch,
        textValue,
        isIdle
    ]);
    const isCopiedAddr = isCopied && copiedText === 'addr';
    const isCopiedHash = isCopied && copiedText === 'hash';
    const handleCopy = (0,react.useCallback)((text, content)=>{
        setCopiedText(text);
        onCopy(content);
        setTimeout(()=>{
            setCopiedText('');
        }, 300);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "p-12",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_PageHeader, {
                title: "My Activity",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Selection, {
                            selected: selectedTime,
                            onSelected: setSelectedTime,
                            options: activityDateFilterOptions,
                            className: "min-w-[200px]"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Selection, {
                            selected: selectedStatus,
                            onSelected: setSelectedStatus,
                            options: activityStatuses
                        })
                    ]
                })
            }),
            activities == null ? void 0 : activities.map((activity, idx)=>{
                return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "my-8 bg-white p-5 rounded-md cursor-pointer",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "w-1/12",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                    src: activity_icon_namespaceObject
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "w-11/12 text-sm",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                className: "text-lg font-bold",
                                                children: [
                                                    "Tax Invoice #",
                                                    activity.invoiceNumber
                                                ]
                                            }),
                                            activity.invoiceLink && /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                href: activity.invoiceLink,
                                                target: "_blank",
                                                className: "font-semibold",
                                                children: "Invoice Link"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-1 text-[#959A9F]",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        children: "Invoice from"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "pl-3 text-[#0D1821]",
                                                        children: activity.sellerName
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "pl-5",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        children: "Invoice to"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "pl-3 text-[#0D1821]",
                                                        children: activity.buyerName
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-1 text-[#959A9F]",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: "Recipient's address"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "pl-4 text-[#0D1821]",
                                                children: activity.buyerAddr
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "cursor-pointer pl-1",
                                                onClick: ()=>handleCopy('addr', activity.buyerAddr),
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyIcon, {})
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex justify-between pt-5",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "text-[#959A9F]",
                                                                children: "Amount"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "pl-2 font-normal text-[#0D1821]",
                                                                children: maskedCurrency.resolve(units_lib_esm.formatEther(activity.amount))
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "pl-5",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "text-[#959A9F]",
                                                                children: "Due Date"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "pl-2 font-normal text-[#0D1821]",
                                                                children: dayJsAdapter.format(dayJsAdapter.date(Number(activity.dueDate) * 1000), 'normalDate')
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "pl-5 flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "text-[#959A9F]",
                                                                children: "Transaction Hash"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                                href: getExplorerLink(activity.txHash),
                                                                target: "_blank",
                                                                className: "pl-2 font-normal text-[#0D1821]",
                                                                children: shortenTxHash(activity.txHash)
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "cursor-pointer pl-1",
                                                                onClick: ()=>onCopy(activity.txHash),
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyIcon, {})
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-[#959A9F]",
                                                children: dayJsAdapter.format(dayJsAdapter.date(Number(activity.invoiceDate) * 1000), 'normalDate')
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }, idx);
            })
        ]
    });
};
/* harmony default export */ const pages_Activity = (Activity);

// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/src/_extends.mjs
var _extends = __webpack_require__(78933);
;// CONCATENATED MODULE: ./src/web/assets/svg/note-favorite.svg
const note_favorite_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuODEyNSAyLjYyNVYxLjVDNS44MTI1IDEuMTkyNSA1LjU1NzUgMC45Mzc1IDUuMjUgMC45Mzc1QzQuOTQyNSAwLjkzNzUgNC42ODc1IDEuMTkyNSA0LjY4NzUgMS41VjIuNjdDNC44NzUgMi42NDc1IDUuMDQ3NSAyLjYyNSA1LjI1IDIuNjI1SDUuODEyNVoiIGZpbGw9IiMwRDE4MjEiLz4KPHBhdGggZD0iTTExLjgxMjUgMi42N1YxLjVDMTEuODEyNSAxLjE5MjUgMTEuNTU3NSAwLjkzNzUgMTEuMjUgMC45Mzc1QzEwLjk0MjUgMC45Mzc1IDEwLjY4NzUgMS4xOTI1IDEwLjY4NzUgMS41VjIuNjI1SDExLjI1QzExLjQ1MjUgMi42MjUgMTEuNjI1IDIuNjQ3NSAxMS44MTI1IDIuNjdaIiBmaWxsPSIjMEQxODIxIi8+CjxwYXRoIGQ9Ik0xNS45Njc1IDExLjIyNzVDMTUuMzkgMTAuNzcgMTQuNjYyNSAxMC41IDEzLjg3NSAxMC41QzEzLjA4NzUgMTAuNSAxMi4zNDUgMTAuNzc3NSAxMS43Njc1IDExLjI0MjVDMTAuOTg3NSAxMS44NTc1IDEwLjUgMTIuODE3NSAxMC41IDEzLjg3NUMxMC41IDE0LjUwNSAxMC42OCAxNS4xMTI1IDEwLjk4NzUgMTUuNjA3NUMxMS4yMjc1IDE1Ljk5NzUgMTEuNTM1IDE2LjM0MjUgMTEuOTAyNSAxNi42MDVDMTIuNDU3NSAxNy4wMSAxMy4xMzI1IDE3LjI1IDEzLjg3NSAxNy4yNUMxNC43MyAxNy4yNSAxNS41MDI1IDE2LjkzNSAxNi4wOTUgMTYuNDFDMTYuMzU3NSAxNi4xOTI1IDE2LjU4MjUgMTUuOTIyNSAxNi43NjI1IDE1LjYxNUMxNy4wNyAxNS4xMTI1IDE3LjI1IDE0LjUwNSAxNy4yNSAxMy44NzVDMTcuMjUgMTIuODAyNSAxNi43NDc1IDExLjg0MjUgMTUuOTY3NSAxMS4yMjc1Wk0xMy44NzUgMTUuNDhDMTMuODc1IDE0LjU5NSAxMy4xNTUgMTMuODc1IDEyLjI3IDEzLjg3NUMxMy4xNTUgMTMuODc1IDEzLjg3NSAxMy4xNTUgMTMuODc1IDEyLjI3QzEzLjg3NSAxMy4xNTUgMTQuNTk1IDEzLjg3NSAxNS40OCAxMy44NzVDMTQuNTk1IDEzLjg3NSAxMy44NzUgMTQuNTk1IDEzLjg3NSAxNS40OFoiIGZpbGw9IiMwRDE4MjEiLz4KPHBhdGggZD0iTTExLjgxMjUgMi42N1YzLjc1QzExLjgxMjUgNC4wNTc1IDExLjU1NzUgNC4zMTI1IDExLjI1IDQuMzEyNUMxMC45NDI1IDQuMzEyNSAxMC42ODc1IDQuMDU3NSAxMC42ODc1IDMuNzVWMi42MjVINS44MTI1VjMuNzVDNS44MTI1IDQuMDU3NSA1LjU1NzUgNC4zMTI1IDUuMjUgNC4zMTI1QzQuOTQyNSA0LjMxMjUgNC42ODc1IDQuMDU3NSA0LjY4NzUgMy43NVYyLjY3QzIuNDc1IDIuODcyNSAxLjUgNC4yOTc1IDEuNSA2LjM3NVYxMi43NUMxLjUgMTUgMi42MjUgMTYuNSA1LjI1IDE2LjVIOC4zNDc1QzguOTE3NSAxNi41IDkuMyAxNS44NjI1IDkuMTU3NSAxNS4zMDc1QzkuMDUyNSAxNC45MDI1IDkgMTQuNDgyNSA5IDE0LjA2MjVDOSAxMi41MDI1IDkuNjk3NSAxMS4wNjI1IDEwLjkwNSAxMC4xMUMxMS43ODI1IDkuMzk3NSAxMi45MDc1IDkgMTQuMDYyNSA5SDE0LjA5MjVDMTQuNTY1IDkgMTUgOC42NTUgMTUgOC4xODI1VjYuMzc1QzE1IDQuMjk3NSAxNC4wMjUgMi44NzI1IDExLjgxMjUgMi42N1pNNi43NSAxMi41NjI1SDUuMjVDNC45NDI1IDEyLjU2MjUgNC42ODc1IDEyLjMwNzUgNC42ODc1IDEyQzQuNjg3NSAxMS42OTI1IDQuOTQyNSAxMS40Mzc1IDUuMjUgMTEuNDM3NUg2Ljc1QzcuMDU3NSAxMS40Mzc1IDcuMzEyNSAxMS42OTI1IDcuMzEyNSAxMkM3LjMxMjUgMTIuMzA3NSA3LjA1NzUgMTIuNTYyNSA2Ljc1IDEyLjU2MjVaTTkgOC44MTI1SDUuMjVDNC45NDI1IDguODEyNSA0LjY4NzUgOC41NTc1IDQuNjg3NSA4LjI1QzQuNjg3NSA3Ljk0MjUgNC45NDI1IDcuNjg3NSA1LjI1IDcuNjg3NUg5QzkuMzA3NSA3LjY4NzUgOS41NjI1IDcuOTQyNSA5LjU2MjUgOC4yNUM5LjU2MjUgOC41NTc1IDkuMzA3NSA4LjgxMjUgOSA4LjgxMjVaIiBmaWxsPSIjMEQxODIxIi8+Cjwvc3ZnPgo=";
;// CONCATENATED MODULE: ./src/web/assets/svg/card-pos.svg
const card_pos_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjUgMTUuOTM3NUMxNi41IDE2LjI0NSAxNi4yNDUgMTYuNSAxNS45Mzc1IDE2LjVIMi4wNjI1QzEuNzU1IDE2LjUgMS41IDE2LjI0NSAxLjUgMTUuOTM3NUMxLjUgMTUuNjMgMS43NTUgMTUuMzc1IDIuMDYyNSAxNS4zNzVIMTUuOTM3NUMxNi4yNDUgMTUuMzc1IDE2LjUgMTUuNjMgMTYuNSAxNS45Mzc1WiIgZmlsbD0iIzBEMTgyMSIvPgo8cGF0aCBkPSJNMTEuNTQyNiAzLjM5MDA3TDMuNDg3NTggMTEuNDQ1MUMzLjE4MDA4IDExLjc1MjYgMi42ODUwOCAxMS43NTI2IDIuMzg1MDggMTEuNDQ1MUgyLjM3NzU4QzEuMzM1MDggMTAuMzk1MSAxLjMzNTA4IDguNzAwMDcgMi4zNzc1OCA3LjY1NzU3TDcuNzQwMDggMi4yOTUwN0M4Ljc5MDA4IDEuMjQ1MDcgMTAuNDg1MSAxLjI0NTA3IDExLjUzNTEgMi4yOTUwN0MxMS44NDI2IDIuNTg3NTcgMTEuODQyNiAzLjA5MDA3IDExLjU0MjYgMy4zOTAwN1oiIGZpbGw9IiMwRDE4MjEiLz4KPHBhdGggZD0iTTE1LjYxNTEgNi4zNjc0OUwxMy4zMjc2IDQuMDc5OTlDMTMuMDIwMSAzLjc3MjQ5IDEyLjUyNTEgMy43NzI0OSAxMi4yMjUxIDQuMDc5OTlMNC4xNzAwOCAxMi4xMzVDMy44NjI1OCAxMi40MzUgMy44NjI1OCAxMi45MyA0LjE3MDA4IDEzLjIzNzVMNi40NTc1OCAxNS41MzI1QzcuNTA3NTggMTYuNTc1IDkuMjAyNTggMTYuNTc1IDEwLjI1MjYgMTUuNTMyNUwxNS42MDc2IDEwLjE3QzE2LjY3MjYgOS4xMTk5OSAxNi42NzI2IDcuNDE3NDkgMTUuNjE1MSA2LjM2NzQ5Wk05LjU3MDA4IDEzLjE0TDguNjYyNTggMTQuMDU1QzguNDc1MDggMTQuMjQyNSA4LjE2NzU4IDE0LjI0MjUgNy45NzI1OCAxNC4wNTVDNy43ODUwOCAxMy44Njc1IDcuNzg1MDggMTMuNTYgNy45NzI1OCAxMy4zNjVMOC44ODc1OCAxMi40NUM5LjA2NzU4IDEyLjI3IDkuMzgyNTggMTIuMjcgOS41NzAwOCAxMi40NUM5Ljc1NzU4IDEyLjYzNzUgOS43NTc1OCAxMi45NiA5LjU3MDA4IDEzLjE0Wk0xMi41NDc2IDEwLjE2MjVMMTAuNzE3NiAxMkMxMC41MzAxIDEyLjE4IDEwLjIyMjYgMTIuMTggMTAuMDI3NiAxMkM5Ljg0MDA4IDExLjgxMjUgOS44NDAwOCAxMS41MDUgMTAuMDI3NiAxMS4zMUwxMS44NjUxIDkuNDcyNDlDMTIuMDQ1MSA5LjI5MjQ5IDEyLjM2MDEgOS4yOTI0OSAxMi41NDc2IDkuNDcyNDlDMTIuNzM1MSA5LjY2NzQ5IDEyLjczNTEgOS45NzQ5OSAxMi41NDc2IDEwLjE2MjVaIiBmaWxsPSIjMEQxODIxIi8+Cjwvc3ZnPgo=";
;// CONCATENATED MODULE: ./src/web/assets/svg/box-tick.svg
const box_tick_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjIwMDEgMy45ODI0Nkw4Ljk2MjYxIDEuNzAyNDZDOC41MTI2MSAxLjQ2MjQ2IDcuOTgwMTEgMS40NjI0NiA3LjUzMDExIDEuNzAyNDZMMy4zMDAxMSAzLjk4MjQ2QzIuOTkyNjEgNC4xNTQ5NiAyLjc5NzYxIDQuNDg0OTYgMi43OTc2MSA0Ljg0NDk2QzIuNzk3NjEgNS4yMTI0NiAyLjk4NTExIDUuNTQyNDYgMy4zMDAxMSA1LjcwNzQ2TDcuNTM3NjEgNy45ODc0NkM3Ljc2MjYxIDguMTA3NDYgOC4wMTAxMSA4LjE2NzQ2IDguMjUwMTEgOC4xNjc0NkM4LjQ5MDExIDguMTY3NDYgOC43NDUxMSA4LjEwNzQ2IDguOTYyNjEgNy45ODc0NkwxMy4yMDAxIDUuNzA3NDZDMTMuNTA3NiA1LjU0MjQ2IDEzLjcwMjYgNS4yMTI0NiAxMy43MDI2IDQuODQ0OTZDMTMuNzAyNiA0LjQ4NDk2IDEzLjUwNzYgNC4xNTQ5NiAxMy4yMDAxIDMuOTgyNDZaIiBmaWxsPSIjMEQxODIxIi8+CjxwYXRoIGQ9Ik02Ljg0IDguNzgyNDVMMi45MDI1IDYuODE3NDVDMi41OTUgNi42NTk5NSAyLjI1IDYuNjgyNDUgMS45NTc1IDYuODU0OTVDMS42NzI1IDcuMDM0OTUgMS41IDcuMzQyNDUgMS41IDcuNjc5OTVWMTEuMzk5OUMxLjUgMTIuMDQ0OSAxLjg2IDEyLjYyMjQgMi40Mzc1IDEyLjkxNDlMNi4zNzUgMTQuODc5OUM2LjUxIDE0Ljk0NzQgNi42NiAxNC45ODQ5IDYuODEgMTQuOTg0OUM2Ljk4MjUgMTQuOTg0OSA3LjE2MjUgMTQuOTMyNCA3LjMyIDE0Ljg0MjRDNy42MDUgMTQuNjYyNCA3Ljc3NzUgMTQuMzU0OSA3Ljc3NzUgMTQuMDE3NFYxMC4yOTc0QzcuNzcgOS42NTI0NSA3LjQxIDkuMDc0OTUgNi44NCA4Ljc4MjQ1WiIgZmlsbD0iIzBEMTgyMSIvPgo8cGF0aCBkPSJNMTUgNy42Nzk5NVY5LjUyNDk1QzE0LjY0IDkuNDE5OTUgMTQuMjU3NSA5LjM3NDk1IDEzLjg3NSA5LjM3NDk1QzEyLjg1NSA5LjM3NDk1IDExLjg1NzUgOS43Mjc0NSAxMS4wNyAxMC4zNTc0QzkuOTg5OTggMTEuMjA0OSA5LjM3NDk4IDEyLjQ4NzQgOS4zNzQ5OCAxMy44NzQ5QzkuMzc0OTggMTQuMjQyNCA5LjQxOTk4IDE0LjYwOTkgOS41MTc0OCAxNC45NjI0QzkuNDA0OTggMTQuOTQ3NCA5LjI5MjQ4IDE0LjkwMjQgOS4xODc0OCAxNC44MzQ5QzguOTAyNDggMTQuNjYyNCA4LjcyOTk4IDE0LjM1NDkgOC43Mjk5OCAxNC4wMTc0VjEwLjI5NzRDOC43Mjk5OCA5LjY1MjQ1IDkuMDg5OTggOS4wNzQ5NSA5LjY1OTk4IDguNzgyNDVMMTMuNTk3NSA2LjgxNzQ1QzEzLjkwNSA2LjY1OTk1IDE0LjI1IDYuNjgyNDUgMTQuNTQyNSA2Ljg1NDk1QzE0LjgyNzUgNy4wMzQ5NSAxNSA3LjM0MjQ1IDE1IDcuNjc5OTVaIiBmaWxsPSIjMEQxODIxIi8+CjxwYXRoIGQ9Ik0xNi40ODUgMTEuNzUyNEMxNS44NyAxMC45OTQ5IDE0LjkzMjUgMTAuNTE0OSAxMy44NzUgMTAuNTE0OUMxMy4wOCAxMC41MTQ5IDEyLjM0NSAxMC43OTI0IDExLjc2NzUgMTEuMjU3NEMxMC45ODc1IDExLjg3MjQgMTAuNSAxMi44MjQ5IDEwLjUgMTMuODg5OUMxMC41IDE0LjUxOTkgMTAuNjggMTUuMTE5OSAxMC45ODc1IDE1LjYyOTlDMTEuMTkgMTUuOTY3NCAxMS40NDUgMTYuMjU5OSAxMS43NDUgMTYuNDk5OUgxMS43NTI1QzEyLjMzIDE2Ljk3OTkgMTMuMDcyNSAxNy4yNjQ5IDEzLjg3NSAxNy4yNjQ5QzE0LjczIDE3LjI2NDkgMTUuNTAyNSAxNi45NDk5IDE2LjA5NSAxNi40MjQ5QzE2LjM1NzUgMTYuMTk5OSAxNi41ODI1IDE1LjkyOTkgMTYuNzYyNSAxNS42Mjk5QzE3LjA3IDE1LjExOTkgMTcuMjUgMTQuNTE5OSAxNy4yNSAxMy44ODk5QzE3LjI1IDEzLjA3OTkgMTYuOTY1IDEyLjMyOTkgMTYuNDg1IDExLjc1MjRaTTE1LjU3IDEzLjQ2OTlMMTMuNzcgMTUuMTM0OUMxMy42NjUgMTUuMjMyNCAxMy41MjI1IDE1LjI4NDkgMTMuMzg3NSAxNS4yODQ5QzEzLjI0NSAxNS4yODQ5IDEzLjEwMjUgMTUuMjMyNCAxMi45OSAxNS4xMTk5TDEyLjE1NzUgMTQuMjg3NEMxMS45NCAxNC4wNjk5IDExLjk0IDEzLjcwOTkgMTIuMTU3NSAxMy40OTI0QzEyLjM3NSAxMy4yNzQ5IDEyLjczNSAxMy4yNzQ5IDEyLjk1MjUgMTMuNDkyNEwxMy40MDI1IDEzLjk0MjRMMTQuODA1IDEyLjY0NDlDMTUuMDMgMTIuNDM0OSAxNS4zOSAxMi40NDk5IDE1LjYgMTIuNjc0OUMxNS44MTc1IDEyLjkwNzQgMTUuODAyNSAxMy4yNTk5IDE1LjU3IDEzLjQ2OTlaIiBmaWxsPSIjMEQxODIxIi8+Cjwvc3ZnPgo=";
;// CONCATENATED MODULE: ./src/web/assets/svg/maximize.svg
const maximize_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguMjUgMTIuMTEyNVYxNC4xMzc1QzguMjUgMTUuODI1IDcuNTc1IDE2LjUgNS44ODc1IDE2LjVIMy44NjI1QzIuMTc1IDE2LjUgMS41IDE1LjgyNSAxLjUgMTQuMTM3NVYxMi4xMTI1QzEuNSAxMC40MjUgMi4xNzUgOS43NSAzLjg2MjUgOS43NUg1Ljg4NzVDNy41NzUgOS43NSA4LjI1IDEwLjQyNSA4LjI1IDEyLjExMjVaIiBmaWxsPSIjMEQxODIxIi8+CjxwYXRoIGQ9Ik0xMi4zNiAxLjVINi4zOUM0LjEwMjUgMS41IDIuMjUgMy4zNTI1IDIuMjUgNS42NFY3Ljg3NUMyLjI1IDguMjg3NSAyLjU4NzUgOC42MjUgMyA4LjYyNUg2LjM3NUM4LjAzMjUgOC42MjUgOS4zNzUgOS45Njc1IDkuMzc1IDExLjYyNVYxNUM5LjM3NSAxNS40MTI1IDkuNzEyNSAxNS43NSAxMC4xMjUgMTUuNzVIMTIuMzZDMTQuOTQ3NSAxNS43NSAxNi41IDE0LjIwNSAxNi41IDExLjYxVjUuNjRDMTYuNSAzLjM1MjUgMTQuNjQ3NSAxLjUgMTIuMzYgMS41Wk0xNC4wNyA3LjQ5MjVDMTQuMDcgNy44IDEzLjgxNSA4LjA1NSAxMy41MDc1IDguMDU1QzEzLjIgOC4wNTUgMTIuOTQ1IDcuOCAxMi45NDUgNy40OTI1VjUuODQyNUwxMC4xNDc1IDguNjQ3NUMxMC4wMzUgOC43NiA5Ljg5MjUgOC44MTI1IDkuNzUgOC44MTI1QzkuNjA3NSA4LjgxMjUgOS40NjUgOC43NiA5LjM1MjUgOC42NDc1QzkuMTM1IDguNDMgOS4xMzUgOC4wNyA5LjM1MjUgNy44NTI1TDEyLjE1IDUuMDRIMTAuNUMxMC4xODUgNS4wNCA5LjkzNzUgNC43OTI1IDkuOTM3NSA0LjQ3NzVDOS45Mzc1IDQuMTcgMTAuMTg1IDMuOTE1IDEwLjUgMy45MTVIMTMuNTA3NUMxMy41NzUgMy45MTUgMTMuNjQyNSAzLjkzNzUgMTMuNzAyNSAzLjk2QzEzLjcyNSAzLjk2NzUgMTMuNzQgMy45NzUgMTMuNzU1IDMuOTgyNUMxMy44IDQuMDA1IDEzLjgzNzUgNC4wMjc1IDEzLjg3NSA0LjA2NUMxMy44OSA0LjA3MjUgMTMuOTA1IDQuMDg3NSAxMy45MiA0LjEwMjVDMTMuOTU3NSA0LjE0NzUgMTMuOTg3NSA0LjE5MjUgMTQuMDE3NSA0LjI0NUMxNC4wMTc1IDQuMjUyNSAxNC4wMjUgNC4yNiAxNC4wMjUgNC4yNjc1QzE0LjA1NSA0LjMyNzUgMTQuMDYyNSA0LjM5NSAxNC4wNjI1IDQuNDYyNUMxNC4wNyA0LjQ3IDE0LjA3IDQuNDcgMTQuMDcgNC40Nzc1VjcuNDkyNVoiIGZpbGw9IiMwRDE4MjEiLz4KPC9zdmc+Cg==";
;// CONCATENATED MODULE: ./src/web/assets/svg/3square.svg
const _3square_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgMTMuODc1VjE0LjUzNUM5IDE1LjkzNzUgOC40Mzc1IDE2LjUgNy4wMjc1IDE2LjVIMy40NjVDMi4zNzc1IDE2LjUgMS41IDE1LjYyMjUgMS41IDE0LjUzNVYxMC45NzI1QzEuNSA5LjU2MjUgMi4wNjI1IDkgMy40NjUgOUg0LjEyNVYxMS42MjVDNC4xMjUgMTIuODcgNS4xMyAxMy44NzUgNi4zNzUgMTMuODc1SDlaIiBmaWxsPSIjMEQxODIxIi8+CjxwYXRoIGQ9Ik0xMi43NSAxMC4xMjVWMTAuNzc3NUMxMi43NSAxMS44NjUgMTEuODY1IDEyLjc1IDEwLjc3NzUgMTIuNzVINy4yMTVDNS44MTI1IDEyLjc1IDUuMjUgMTIuMTg3NSA1LjI1IDEwLjc3NzVWNy4yMTVDNS4yNSA2LjEyNzUgNi4xMjc1IDUuMjUgNy4yMTUgNS4yNUg3Ljg3NVY3Ljg3NUM3Ljg3NSA5LjEyIDguODggMTAuMTI1IDEwLjEyNSAxMC4xMjVIMTIuNzVaIiBmaWxsPSIjMEQxODIxIi8+CjxwYXRoIGQ9Ik0xNi41IDMuNDY1VjcuMDI3NUMxNi41IDguNDM3NSAxNS45Mzc1IDkgMTQuNTI3NSA5SDEwLjk2NUM5LjU2MjUgOSA5IDguNDM3NSA5IDcuMDI3NVYzLjQ2NUM5IDIuMDYyNSA5LjU2MjUgMS41IDEwLjk2NSAxLjVIMTQuNTI3NUMxNS45Mzc1IDEuNSAxNi41IDIuMDYyNSAxNi41IDMuNDY1WiIgZmlsbD0iIzBEMTgyMSIvPgo8L3N2Zz4K";
;// CONCATENATED MODULE: ./src/web/assets/svg/calendar.svg
const calendar_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjU2MjQgMi42N1YxLjVDMTIuNTYyNCAxLjE5MjUgMTIuMzA3NCAwLjkzNzUgMTEuOTk5OSAwLjkzNzVDMTEuNjkyNCAwLjkzNzUgMTEuNDM3NCAxLjE5MjUgMTEuNDM3NCAxLjVWMi42MjVINi41NjI0M1YxLjVDNi41NjI0MyAxLjE5MjUgNi4zMDc0MyAwLjkzNzUgNS45OTk5MyAwLjkzNzVDNS42OTI0MyAwLjkzNzUgNS40Mzc0MyAxLjE5MjUgNS40Mzc0MyAxLjVWMi42N0MzLjQxMjQzIDIuODU3NSAyLjQyOTkzIDQuMDY1IDIuMjc5OTMgNS44NTc1QzIuMjY0OTMgNi4wNzUgMi40NDQ5MyA2LjI1NSAyLjY1NDkzIDYuMjU1SDE1LjM0NDlDMTUuNTYyNCA2LjI1NSAxNS43NDI0IDYuMDY3NSAxNS43MTk5IDUuODU3NUMxNS41Njk5IDQuMDY1IDE0LjU4NzQgMi44NTc1IDEyLjU2MjQgMi42N1oiIGZpbGw9IiMwRDE4MjEiLz4KPHBhdGggZD0iTTE1IDcuMzhIM0MyLjU4NzUgNy4zOCAyLjI1IDcuNzE3NSAyLjI1IDguMTNWMTIuNzVDMi4yNSAxNSAzLjM3NSAxNi41IDYgMTYuNUgxMkMxNC42MjUgMTYuNSAxNS43NSAxNSAxNS43NSAxMi43NVY4LjEzQzE1Ljc1IDcuNzE3NSAxNS40MTI1IDcuMzggMTUgNy4zOFpNNi45MDc1IDEzLjY1NzVDNi44NyAxMy42ODc1IDYuODMyNSAxMy43MjUgNi43OTUgMTMuNzQ3NUM2Ljc1IDEzLjc3NzUgNi43MDUgMTMuOCA2LjY2IDEzLjgxNUM2LjYxNSAxMy44Mzc1IDYuNTcgMTMuODUyNSA2LjUyNSAxMy44NkM2LjQ3MjUgMTMuODY3NSA2LjQyNzUgMTMuODc1IDYuMzc1IDEzLjg3NUM2LjI3NzUgMTMuODc1IDYuMTggMTMuODUyNSA2LjA5IDEzLjgxNUM1Ljk5MjUgMTMuNzc3NSA1LjkxNzUgMTMuNzI1IDUuODQyNSAxMy42NTc1QzUuNzA3NSAxMy41MTUgNS42MjUgMTMuMzIgNS42MjUgMTMuMTI1QzUuNjI1IDEyLjkzIDUuNzA3NSAxMi43MzUgNS44NDI1IDEyLjU5MjVDNS45MTc1IDEyLjUyNSA1Ljk5MjUgMTIuNDcyNSA2LjA5IDEyLjQzNUM2LjIyNSAxMi4zNzUgNi4zNzUgMTIuMzYgNi41MjUgMTIuMzlDNi41NyAxMi4zOTc1IDYuNjE1IDEyLjQxMjUgNi42NiAxMi40MzVDNi43MDUgMTIuNDUgNi43NSAxMi40NzI1IDYuNzk1IDEyLjUwMjVDNi44MzI1IDEyLjUzMjUgNi44NyAxMi41NjI1IDYuOTA3NSAxMi41OTI1QzcuMDQyNSAxMi43MzUgNy4xMjUgMTIuOTMgNy4xMjUgMTMuMTI1QzcuMTI1IDEzLjMyIDcuMDQyNSAxMy41MTUgNi45MDc1IDEzLjY1NzVaTTYuOTA3NSAxMS4wMzI1QzYuNzY1IDExLjE2NzUgNi41NyAxMS4yNSA2LjM3NSAxMS4yNUM2LjE4IDExLjI1IDUuOTg1IDExLjE2NzUgNS44NDI1IDExLjAzMjVDNS43MDc1IDEwLjg5IDUuNjI1IDEwLjY5NSA1LjYyNSAxMC41QzUuNjI1IDEwLjMwNSA1LjcwNzUgMTAuMTEgNS44NDI1IDkuOTY3NUM2LjA1MjUgOS43NTc1IDYuMzgyNSA5LjY5IDYuNjYgOS44MUM2Ljc1NzUgOS44NDc1IDYuODQgOS45IDYuOTA3NSA5Ljk2NzVDNy4wNDI1IDEwLjExIDcuMTI1IDEwLjMwNSA3LjEyNSAxMC41QzcuMTI1IDEwLjY5NSA3LjA0MjUgMTAuODkgNi45MDc1IDExLjAzMjVaTTkuNTMyNSAxMy42NTc1QzkuMzkgMTMuNzkyNSA5LjE5NSAxMy44NzUgOSAxMy44NzVDOC44MDUgMTMuODc1IDguNjEgMTMuNzkyNSA4LjQ2NzUgMTMuNjU3NUM4LjMzMjUgMTMuNTE1IDguMjUgMTMuMzIgOC4yNSAxMy4xMjVDOC4yNSAxMi45MyA4LjMzMjUgMTIuNzM1IDguNDY3NSAxMi41OTI1QzguNzQ1IDEyLjMxNSA5LjI1NSAxMi4zMTUgOS41MzI1IDEyLjU5MjVDOS42Njc1IDEyLjczNSA5Ljc1IDEyLjkzIDkuNzUgMTMuMTI1QzkuNzUgMTMuMzIgOS42Njc1IDEzLjUxNSA5LjUzMjUgMTMuNjU3NVpNOS41MzI1IDExLjAzMjVDOS40OTUgMTEuMDYyNSA5LjQ1NzUgMTEuMDkyNSA5LjQyIDExLjEyMjVDOS4zNzUgMTEuMTUyNSA5LjMzIDExLjE3NSA5LjI4NSAxMS4xOUM5LjI0IDExLjIxMjUgOS4xOTUgMTEuMjI3NSA5LjE1IDExLjIzNUM5LjA5NzUgMTEuMjQyNSA5LjA1MjUgMTEuMjUgOSAxMS4yNUM4LjgwNSAxMS4yNSA4LjYxIDExLjE2NzUgOC40Njc1IDExLjAzMjVDOC4zMzI1IDEwLjg5IDguMjUgMTAuNjk1IDguMjUgMTAuNUM4LjI1IDEwLjMwNSA4LjMzMjUgMTAuMTEgOC40Njc1IDkuOTY3NUM4LjUzNSA5LjkgOC42MTc1IDkuODQ3NSA4LjcxNSA5LjgxQzguOTkyNSA5LjY5IDkuMzIyNSA5Ljc1NzUgOS41MzI1IDkuOTY3NUM5LjY2NzUgMTAuMTEgOS43NSAxMC4zMDUgOS43NSAxMC41QzkuNzUgMTAuNjk1IDkuNjY3NSAxMC44OSA5LjUzMjUgMTEuMDMyNVpNMTIuMTU3NSAxMy42NTc1QzEyLjAxNSAxMy43OTI1IDExLjgyIDEzLjg3NSAxMS42MjUgMTMuODc1QzExLjQzIDEzLjg3NSAxMS4yMzUgMTMuNzkyNSAxMS4wOTI1IDEzLjY1NzVDMTAuOTU3NSAxMy41MTUgMTAuODc1IDEzLjMyIDEwLjg3NSAxMy4xMjVDMTAuODc1IDEyLjkzIDEwLjk1NzUgMTIuNzM1IDExLjA5MjUgMTIuNTkyNUMxMS4zNyAxMi4zMTUgMTEuODggMTIuMzE1IDEyLjE1NzUgMTIuNTkyNUMxMi4yOTI1IDEyLjczNSAxMi4zNzUgMTIuOTMgMTIuMzc1IDEzLjEyNUMxMi4zNzUgMTMuMzIgMTIuMjkyNSAxMy41MTUgMTIuMTU3NSAxMy42NTc1Wk0xMi4xNTc1IDExLjAzMjVDMTIuMTIgMTEuMDYyNSAxMi4wODI1IDExLjA5MjUgMTIuMDQ1IDExLjEyMjVDMTIgMTEuMTUyNSAxMS45NTUgMTEuMTc1IDExLjkxIDExLjE5QzExLjg2NSAxMS4yMTI1IDExLjgyIDExLjIyNzUgMTEuNzc1IDExLjIzNUMxMS43MjI1IDExLjI0MjUgMTEuNjcgMTEuMjUgMTEuNjI1IDExLjI1QzExLjQzIDExLjI1IDExLjIzNSAxMS4xNjc1IDExLjA5MjUgMTEuMDMyNUMxMC45NTc1IDEwLjg5IDEwLjg3NSAxMC42OTUgMTAuODc1IDEwLjVDMTAuODc1IDEwLjMwNSAxMC45NTc1IDEwLjExIDExLjA5MjUgOS45Njc1QzExLjE2NzUgOS45IDExLjI0MjUgOS44NDc1IDExLjM0IDkuODFDMTEuNDc1IDkuNzUgMTEuNjI1IDkuNzM1MDEgMTEuNzc1IDkuNzY1MDFDMTEuODIgOS43NzI1MSAxMS44NjUgOS43ODc1IDExLjkxIDkuODFDMTEuOTU1IDkuODI1IDEyIDkuODQ3NSAxMi4wNDUgOS44Nzc1QzEyLjA4MjUgOS45MDc1IDEyLjEyIDkuOTM3NSAxMi4xNTc1IDkuOTY3NUMxMi4yOTI1IDEwLjExIDEyLjM3NSAxMC4zMDUgMTIuMzc1IDEwLjVDMTIuMzc1IDEwLjY5NSAxMi4yOTI1IDEwLjg5IDEyLjE1NzUgMTEuMDMyNVoiIGZpbGw9IiMwRDE4MjEiLz4KPC9zdmc+Cg==";
;// CONCATENATED MODULE: ./src/web/components/FloatingLabelInput/index.tsx



const FloatingLabelInput = (props)=>{
    const { label , value , onChange , type , name , disabled , hasError , errorMsg , children  } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative mt-5",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                        name: name,
                        type: type,
                        id: name,
                        className: (0,tw_merge/* twMerge */.m)("block px-4 pb-3.5 pt-4 w-full text-sm text-[#0D1821] outline-none border-solid bg-transparent rounded-lg border-t-0 border border-[#ECEDEE] appearance-none focus:outline-none focus:ring-0 focus:border-[#7918F5] peer", hasError ? 'border-red focus:border-red' : ''),
                        value: value,
                        disabled: disabled,
                        onChange: onChange,
                        placeholder: " "
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                        htmlFor: name,
                        className: (0,tw_merge/* twMerge */.m)("absolute text-sm text-[#959A9F] duration-300 transform -translate-y-4 scale-15 top-2 origin-[0] bg-white px-1.5 peer-focus:px-1.5 peer-focus:text-[#959A9F] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4", hasError ? 'text-red peer-focus:text-red' : ''),
                        children: label
                    })
                ]
            }),
            hasError && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "text-red mt-2 text-xs",
                children: errorMsg
            }),
            children && (0,_extends/* default */.Z)({}, children)
        ]
    });
};
/* harmony default export */ const components_FloatingLabelInput = (FloatingLabelInput);

// EXTERNAL MODULE: ./node_modules/.pnpm/react-icons@4.8.0_react@18.2.0/node_modules/react-icons/fi/index.esm.js
var fi_index_esm = __webpack_require__(84418);
;// CONCATENATED MODULE: ./src/web/components/DatePicker/Utils/date.ts
const firstDateOfMonth = (selectedYear, selectedMonth, date)=>{
    const newDate = new Date(0);
    newDate.setFullYear(selectedYear, selectedMonth, date);
    return newDate.setHours(0, 0, 0, 0);
};
const addDays = (date, amount)=>{
    const newDate = new Date(date);
    return newDate.setDate(newDate.getDate() + amount);
};
const dayDiff = (day, from)=>{
    return (day - from + 7) % 7;
};
const dayOfTheWeekOf = (baseDate, dayOfWeek, weekStart = 0)=>{
    const baseDay = new Date(baseDate).getDay();
    return addDays(baseDate, dayDiff(dayOfWeek, weekStart) - dayDiff(baseDay, weekStart));
};
const addMonths = (date, amount)=>{
    const newDate = date;
    const monthsToSet = newDate.getMonth() + amount;
    let expectedMonth = monthsToSet % 12;
    if (expectedMonth < 0) {
        expectedMonth += 12;
    }
    const time = newDate.setMonth(monthsToSet);
    return newDate.getMonth() !== expectedMonth ? newDate.setDate(0) : time;
};
const addYears = (date, amount)=>{
    const newDate = date;
    const expectedMonth = newDate.getMonth();
    const time = newDate.setFullYear(newDate.getFullYear() + amount);
    return expectedMonth === 1 && newDate.getMonth() === 2 ? newDate.setDate(0) : time;
};
const date_getFormattedDate = (language, date, options)=>{
    let defaultOptions = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };
    if (options) defaultOptions = options;
    return new Intl.DateTimeFormat(language, defaultOptions).format(date);
};
const goToPrevNext = (view, date, direction)=>{
    switch(view){
        case 'days':
            return addMonths(date, direction);
        case 'months':
            return addYears(date, direction);
        case 'years':
            return addYears(date, direction * 10);
        case 'decades':
            return addYears(date, direction * 100);
        default:
            return addYears(date, direction * 10);
    }
};
const startOfYearPeriod = (date, years)=>{
    const year = date.getFullYear();
    return Math.floor(year / years) * years;
};

;// CONCATENATED MODULE: ./src/web/components/DatePicker/Options.ts
const options = {
    autoHide: true,
    todayBtn: true,
    clearBtn: true,
    theme: {
        background: '',
        todayBtn: '',
        clearBtn: '',
        icons: '',
        text: '',
        disabledText: '',
        input: '',
        inputIcon: '',
        selected: ''
    },
    datepickerClassNames: '',
    // defaultDate: new Date(),
    language: 'en'
};
/* harmony default export */ const Options = (options);

;// CONCATENATED MODULE: ./src/web/components/DatePicker/Components/DatePickerProvider.tsx





const DatePickerContext = /*#__PURE__*/ (0,react.createContext)({
    options: Options,
    view: 'days',
    setView: ()=>{},
    show: false,
    setShow: ()=>{},
    selectedDate: new Date(),
    changeSelectedDate: ()=>{},
    showSelectedDate: true,
    setShowSelectedDate: ()=>{},
    selectedMonth: 0,
    selectedYear: 0,
    getFormattedDate: ()=>''
});
const DatePickerProvider = ({ children , options: customOptions , onChange , show , setShow , selectedDateState  })=>{
    const options = (0,_extends/* default */.Z)({}, Options, customOptions);
    const [view, setView] = (0,react.useState)('days');
    const [selectedDate, setSelectedDate] = selectedDateState || (0,react.useState)((options == null ? void 0 : options.defaultDate) || new Date(new Date().setHours(0, 0, 0, 0)));
    const [showSelectedDate, setShowSelectedDate] = (0,react.useState)(true);
    const selectedMonth = selectedDate.getMonth();
    const selectedYear = selectedDate.getFullYear();
    const changeSelectedDate = (action, date)=>{
        if ((options == null ? void 0 : options.maxDate) && date > options.maxDate) return;
        if ((options == null ? void 0 : options.minDate) && date < options.minDate) return;
        setSelectedDate(date);
        setShowSelectedDate(true);
        if ((options == null ? void 0 : options.autoHide) && view === 'days' && action === 'date') setShow(false);
        if (onChange) onChange(date);
    };
    const getFormattedDate = (date, formatOptions)=>{
        return date_getFormattedDate((options == null ? void 0 : options.language) ? options == null ? void 0 : options.language : 'en', date, formatOptions);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DatePickerContext.Provider, {
        value: {
            options,
            view,
            setView,
            show,
            setShow,
            selectedDate,
            changeSelectedDate,
            showSelectedDate,
            setShowSelectedDate,
            selectedMonth,
            selectedYear,
            getFormattedDate
        },
        children: children
    });
};
/* harmony default export */ const Components_DatePickerProvider = (DatePickerProvider);

;// CONCATENATED MODULE: ./src/web/components/DatePicker/Components/Buttons.tsx





const ButtonPrevMonth = ()=>{
    var _options_theme, _options_icons, _options_icons1;
    const { selectedDate , changeSelectedDate , view , options  } = (0,react.useContext)(DatePickerContext);
    const onPrevMonth = ()=>{
        if ((options == null ? void 0 : options.minDate) && selectedDate <= options.minDate) return;
        changeSelectedDate('prev', new Date(goToPrevNext(view, selectedDate, -1)));
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
        type: "button",
        className: (0,tw_merge/* twMerge */.m)("bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200", options == null ? void 0 : (_options_theme = options.theme) == null ? void 0 : _options_theme.icons),
        onClick: ()=>onPrevMonth(),
        children: (options == null ? void 0 : (_options_icons = options.icons) == null ? void 0 : _options_icons.prev) ? options == null ? void 0 : (_options_icons1 = options.icons) == null ? void 0 : _options_icons1.prev() : /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
            className: "w-4 h-4",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fillRule: "evenodd",
                d: "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",
                clipRule: "evenodd"
            })
        })
    });
};
const ButtonSelectMonth = ()=>{
    var _options_theme;
    const { selectedDate , view , setView , options , getFormattedDate  } = (0,react.useContext)(DatePickerContext);
    const calculateView = ()=>{
        if (view === 'days') return 'months';
        if (view === 'months') return 'years';
        if (view === 'years') return 'decades';
        return view;
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
        type: "button",
        className: (0,tw_merge/* twMerge */.m)("text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200", options == null ? void 0 : (_options_theme = options.theme) == null ? void 0 : _options_theme.icons),
        children: [
            view === 'days' && getFormattedDate(selectedDate, {
                month: 'long',
                year: 'numeric'
            }),
            view === 'months' && getFormattedDate(selectedDate, {
                year: 'numeric'
            }),
            view === 'years' && `${startOfYearPeriod(selectedDate, 10)}-${startOfYearPeriod(selectedDate, 10) + 9}`,
            view === 'decades' && `${startOfYearPeriod(selectedDate, 100)}-${startOfYearPeriod(selectedDate, 100) + 90}`
        ]
    });
};
const ButtonNextMonth = ()=>{
    var _options_theme, _options_icons, _options_icons1;
    const { selectedDate , changeSelectedDate , view , options  } = (0,react.useContext)(DatePickerContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
        type: "button",
        className: (0,tw_merge/* twMerge */.m)("bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200", options == null ? void 0 : (_options_theme = options.theme) == null ? void 0 : _options_theme.icons),
        onClick: ()=>changeSelectedDate('next', new Date(goToPrevNext(view, selectedDate, 1))),
        children: (options == null ? void 0 : (_options_icons = options.icons) == null ? void 0 : _options_icons.next) ? options == null ? void 0 : (_options_icons1 = options.icons) == null ? void 0 : _options_icons1.next() : /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
            className: "w-4 h-4",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fillRule: "evenodd",
                d: "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",
                clipRule: "evenodd"
            })
        })
    });
};
const ButtonToday = ()=>{
    var _options_theme;
    const { changeSelectedDate , setView , options  } = (0,react.useContext)(DatePickerContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
        type: "button",
        className: (0,tw_merge/* twMerge */.m)("w-full px-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300", options == null ? void 0 : (_options_theme = options.theme) == null ? void 0 : _options_theme.todayBtn),
        onClick: ()=>{
            changeSelectedDate('today', new Date());
            setView('days');
        },
        children: "Today"
    });
};
const ButtonClear = ()=>{
    var _options_theme;
    const { setShowSelectedDate , options  } = (0,react.useContext)(DatePickerContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
        type: "button",
        className: (0,tw_merge/* twMerge */.m)("w-full px-5 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg dark:text-white dark:bg-gray-700 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 focus:ring-4 focus:ring-blue-300", options == null ? void 0 : (_options_theme = options.theme) == null ? void 0 : _options_theme.clearBtn),
        onClick: ()=>setShowSelectedDate(false),
        children: "Clear"
    });
};

;// CONCATENATED MODULE: ./src/web/components/DatePicker/Components/Views/Days.tsx





const Days = ({ start  })=>{
    const weekDays = [
        'Mo',
        'Tu',
        'We',
        'Th',
        'Fr',
        'Sa',
        'Su'
    ];
    const { selectedDate , changeSelectedDate , showSelectedDate , getFormattedDate , options  } = (0,react.useContext)(DatePickerContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "grid grid-cols-7 mb-1",
                children: weekDays.map((day, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "h-6 text-sm font-medium leading-6 text-center text-gray-500 dow dark:text-gray-400",
                        children: day
                    }, index))
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "grid w-64 grid-cols-7",
                children: [
                    ...Array(42)
                ].map((_date, index)=>{
                    var _options_theme, _options_theme1, _options_theme2, _options_theme3, _options_theme4;
                    const current = addDays(start, index);
                    const day = getFormattedDate(current, {
                        day: 'numeric'
                    });
                    const month = getFormattedDate(current, {
                        month: 'long'
                    });
                    const year = getFormattedDate(current, {
                        year: 'numeric'
                    });
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: `hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center  dark:text-white font-semibold text-sm ${showSelectedDate && selectedDate.getTime() > 0 && getFormattedDate(selectedDate) === getFormattedDate(current) ? (0,tw_merge/* twMerge */.m)("bg-blue-700 text-white hover:bg-blue-600", options == null ? void 0 : (_options_theme = options.theme) == null ? void 0 : _options_theme.selected) : ""} ${month == getFormattedDate(selectedDate, {
                            month: "long"
                        }) && year == getFormattedDate(selectedDate, {
                            year: "numeric"
                        }) ? (0,tw_merge/* twMerge */.m)("text-gray-900", options == null ? void 0 : (_options_theme1 = options.theme) == null ? void 0 : _options_theme1.text) : (0,tw_merge/* twMerge */.m)("text-gray-500", options == null ? void 0 : (_options_theme2 = options.theme) == null ? void 0 : _options_theme2.disabledText)} ${(options == null ? void 0 : options.minDate) && new Date(current) < (options == null ? void 0 : options.minDate) ? (0,tw_merge/* twMerge */.m)("text-gray-500", options == null ? void 0 : (_options_theme3 = options.theme) == null ? void 0 : _options_theme3.disabledText) : ""} ${(options == null ? void 0 : options.maxDate) && new Date(current) > (options == null ? void 0 : options.maxDate) ? (0,tw_merge/* twMerge */.m)("text-gray-500", options == null ? void 0 : (_options_theme4 = options.theme) == null ? void 0 : _options_theme4.disabledText) : ""}
                            `,
                        onClick: ()=>{
                            changeSelectedDate('date', new Date(current));
                        },
                        children: day
                    }, index);
                })
            })
        ]
    });
};
/* harmony default export */ const Views_Days = (Days);

;// CONCATENATED MODULE: ./src/web/components/DatePicker/Components/Views/Decades.tsx





const Decades = ()=>{
    const { selectedDate , showSelectedDate , changeSelectedDate , setView , getFormattedDate , options  } = (0,react.useContext)(DatePickerContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "grid w-64 grid-cols-4",
        children: [
            ...Array(12)
        ].map((_year, index)=>{
            var _options_theme, _options_theme1, _options_theme2, _options_theme3, _options_theme4;
            const first = startOfYearPeriod(selectedDate, 100);
            const year = first - 10 + index * 10;
            return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: `hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center  dark:text-white font-semibold text-sm ${showSelectedDate && selectedDate.getTime() > 0 && Number(getFormattedDate(selectedDate, {
                    year: "numeric"
                })) === year ? (0,tw_merge/* twMerge */.m)("bg-blue-700 text-white hover:bg-blue-600", options == null ? void 0 : (_options_theme = options.theme) == null ? void 0 : _options_theme.selected) : ""} ${index == 0 || index == 11 ? (0,tw_merge/* twMerge */.m)("text-gray-500", options == null ? void 0 : (_options_theme1 = options.theme) == null ? void 0 : _options_theme1.disabledText) : (0,tw_merge/* twMerge */.m)("text-gray-900", options == null ? void 0 : (_options_theme2 = options.theme) == null ? void 0 : _options_theme2.text)}
                            ${(options == null ? void 0 : options.minDate) && year < Number(getFormattedDate(options == null ? void 0 : options.minDate, {
                    year: "numeric"
                })) ? (0,tw_merge/* twMerge */.m)("text-gray-500", options == null ? void 0 : (_options_theme3 = options.theme) == null ? void 0 : _options_theme3.disabledText) : ""}
                            ${(options == null ? void 0 : options.maxDate) && year > Number(getFormattedDate(options == null ? void 0 : options.maxDate, {
                    year: "numeric"
                })) ? (0,tw_merge/* twMerge */.m)("text-gray-500", options == null ? void 0 : (_options_theme4 = options.theme) == null ? void 0 : _options_theme4.disabledText) : ""}
                            `,
                onClick: ()=>{
                    changeSelectedDate('date', new Date(addYears(selectedDate, year - selectedDate.getFullYear())));
                    setView('years');
                },
                children: year
            }, index);
        })
    });
};
/* harmony default export */ const Views_Decades = (Decades);

;// CONCATENATED MODULE: ./src/web/components/DatePicker/Components/Views/Months.tsx





const Months = ()=>{
    const { selectedDate , showSelectedDate , changeSelectedDate , getFormattedDate , setView , options  } = (0,react.useContext)(DatePickerContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "grid w-64 grid-cols-4",
        children: [
            ...Array(12)
        ].map((_month, index)=>{
            var _options_theme;
            const month = getFormattedDate(new Date(selectedDate.getFullYear(), index), {
                month: 'short'
            });
            return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: `hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center  dark:text-white font-semibold text-sm text-gray-900 ${showSelectedDate && selectedDate.getTime() > 0 && getFormattedDate(selectedDate, {
                    month: "short"
                }) === month ? (0,tw_merge/* twMerge */.m)("bg-blue-700 text-white hover:bg-blue-600", options == null ? void 0 : (_options_theme = options.theme) == null ? void 0 : _options_theme.selected) : ""}`,
                onClick: ()=>{
                    changeSelectedDate('date', new Date(addMonths(selectedDate, index - selectedDate.getMonth())));
                    setView('days');
                },
                children: month
            }, index);
        })
    });
};
/* harmony default export */ const Views_Months = (Months);

;// CONCATENATED MODULE: ./src/web/components/DatePicker/Components/Views/Years.tsx





const Years = ()=>{
    const { selectedDate , showSelectedDate , changeSelectedDate , setView , getFormattedDate , options  } = (0,react.useContext)(DatePickerContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "grid w-64 grid-cols-4",
        children: [
            ...Array(12)
        ].map((_year, index)=>{
            var _options_theme, _options_theme1, _options_theme2;
            const first = startOfYearPeriod(selectedDate, 10);
            const year = first - 1 + index * 1;
            return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: `hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center  dark:text-white font-semibold text-sm ${showSelectedDate && selectedDate.getTime() > 0 && Number(getFormattedDate(selectedDate, {
                    year: "numeric"
                })) === year ? (0,tw_merge/* twMerge */.m)("bg-blue-700 text-white hover:bg-blue-600", options == null ? void 0 : (_options_theme = options.theme) == null ? void 0 : _options_theme.selected) : ""} ${index == 0 || index == 11 ? (0,tw_merge/* twMerge */.m)("text-gray-500", options == null ? void 0 : (_options_theme1 = options.theme) == null ? void 0 : _options_theme1.disabledText) : (0,tw_merge/* twMerge */.m)("text-gray-900", options == null ? void 0 : (_options_theme2 = options.theme) == null ? void 0 : _options_theme2.text)}`,
                onClick: ()=>{
                    changeSelectedDate('date', new Date(addYears(selectedDate, year - selectedDate.getFullYear())));
                    setView('months');
                },
                children: year
            }, index);
        })
    });
};
/* harmony default export */ const Views_Years = (Years);

;// CONCATENATED MODULE: ./src/web/components/DatePicker/Components/DatePickerPopup.tsx










const DatePickerPopup = /*#__PURE__*/ (0,react.forwardRef)((_props, ref)=>{
    var _options_theme, _options_theme1;
    const { selectedMonth , selectedYear , view , options  } = (0,react.useContext)(DatePickerContext);
    const firstOfMonth = firstDateOfMonth(selectedYear, selectedMonth, 1);
    const start = dayOfTheWeekOf(firstOfMonth, 1, 1);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ref: ref,
        className: (0,tw_merge/* twMerge */.m)("absolute z-10 block pt-2", options == null ? void 0 : options.datepickerClassNames),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (0,tw_merge/* twMerge */.m)("inline-block p-4 bg-white rounded-lg shadow-lg dark:bg-gray-700", options == null ? void 0 : (_options_theme = options.theme) == null ? void 0 : _options_theme.background),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        (options == null ? void 0 : options.title) && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: (0,tw_merge/* twMerge */.m)("px-2 py-3 font-semibold text-center text-gray-900 dark:text-white", options == null ? void 0 : (_options_theme1 = options.theme) == null ? void 0 : _options_theme1.text),
                            children: options == null ? void 0 : options.title
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex justify-between mb-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonPrevMonth, {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonSelectMonth, {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonNextMonth, {})
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "p-1",
                    children: [
                        view === 'days' && /*#__PURE__*/ (0,jsx_runtime.jsx)(Views_Days, {
                            start: start
                        }),
                        view === 'months' && /*#__PURE__*/ (0,jsx_runtime.jsx)(Views_Months, {}),
                        view === 'years' && /*#__PURE__*/ (0,jsx_runtime.jsx)(Views_Years, {}),
                        view === 'decades' && /*#__PURE__*/ (0,jsx_runtime.jsx)(Views_Decades, {})
                    ]
                }),
                ((options == null ? void 0 : options.todayBtn) || (options == null ? void 0 : options.clearBtn)) && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex mt-2 space-x-2",
                    children: [
                        (options == null ? void 0 : options.todayBtn) && /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonToday, {}),
                        (options == null ? void 0 : options.clearBtn) && /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonClear, {})
                    ]
                })
            ]
        })
    });
});
DatePickerPopup.displayName = 'DatePickerPopup';
/* harmony default export */ const Components_DatePickerPopup = (DatePickerPopup);

;// CONCATENATED MODULE: ./src/web/components/DatePicker/Components/DatePicker.tsx








const DatePicker = ({ children , options , onChange , classNames , show , setShow , selectedDateState  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (0,tw_merge/* twMerge */.m)('w-full', classNames),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Components_DatePickerProvider, {
            options: options,
            onChange: onChange,
            show: show,
            setShow: setShow,
            selectedDateState: selectedDateState,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DatePickerMain, {
                children: children
            })
        })
    });
const DatePickerMain = ({ children  })=>{
    const { setShow , show  } = (0,react.useContext)(DatePickerContext);
    const InputRef = (0,react.useRef)(null);
    const DatePickerRef = (0,react.useRef)(null);
    (0,react.useEffect)(()=>{
        const handleClickOutside = (event)=>{
            if (!((InputRef == null ? void 0 : InputRef.current) && (DatePickerRef == null ? void 0 : DatePickerRef.current))) return;
            if (!InputRef.current.contains(event.target) && !DatePickerRef.current.contains(event.target)) {
                setShow(false);
            }
        };
        document.addEventListener("mousedown", (event)=>handleClickOutside(event));
        return ()=>{
            document.removeEventListener("mousedown", (event)=>handleClickOutside(event));
        };
    }, [
        DatePickerRef,
        InputRef,
        setShow
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "relative",
        children: [
            children ? (0,_extends/* default */.Z)({}, children) : /*#__PURE__*/ (0,jsx_runtime.jsx)(DatePicker_Input, {
                ref: InputRef
            }),
            show && /*#__PURE__*/ (0,jsx_runtime.jsx)(Components_DatePickerPopup, {
                ref: DatePickerRef
            })
        ]
    });
};
const DatePicker_Input = /*#__PURE__*/ (0,react.forwardRef)((_props, ref)=>{
    const { setShow , selectedDate , showSelectedDate  } = (0,react.useContext)(DatePickerContext);
    const diff = dayJsAdapter.getDiff(dayJsAdapter.date(selectedDate), dayJsAdapter.date(new Date(new Date().setHours(0, 0, 0, 0))), 'days');
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "relative mt-5",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                ref: ref,
                type: "text",
                id: "dueDate",
                "datepicker-orientation": "bottom right",
                className: "block pb-3.5 pt-4 px-11 w-full border-solid text-sm text-[#0D1821] bg-transparent rounded-lg border border-[#ECEDEE] appearance-none focus:outline-none focus:ring-0 focus:border-[#7918F5] peer",
                value: diff > 0 && selectedDate.getTime() > 0 && showSelectedDate ? dayJsAdapter.format(dayJsAdapter.date(selectedDate), 'normalDate') : '',
                onFocus: ()=>setShow(true),
                readOnly: true,
                placeholder: " "
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "absolute inset-y-0 left-0 flex items-center pointer-events-none z-10 pl-4 peer-focus:text-[#7918F5]",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(fi_index_esm/* FiCalendar */.vlc, {
                    className: "h-5 w-5"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "absolute pr-28 hidden md:flex inset-y-0 right-0 text-[#ECEDEE] items-center pointer-events-none font-normal text-sm",
                children: "|"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "absolute pl-6 inset-y-0 right-0 flex items-center pointer-events-none pr-4 font-normal text-sm",
                children: [
                    `${diff > 0 ? diff : '-'}`,
                    " days"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                htmlFor: "dueDate",
                className: (0,tw_merge/* twMerge */.m)("absolute text-sm text-[#959A9F] duration-300 transform -translate-y-4 scale-75 top-2 z-1 origin-[0] bg-white px-1.5 peer-focus:px-1.5 peer-focus:text-[#959A9F] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4", diff === 0 ? 'pl-8' : ''),
                children: "Due date"
            })
        ]
    });
});
DatePicker_Input.displayName = 'Input';
/* harmony default export */ const Components_DatePicker = (DatePicker);

;// CONCATENATED MODULE: ./src/web/components/DatePicker/index.ts
// Forked from https://github.com/OMikkel/tailwind-datepicker-react
// Customized the input field to fit our UX design

/* harmony default export */ const components_DatePicker = (Components_DatePicker);

;// CONCATENATED MODULE: ./src/web/pages/CreateInvoice/SoldItems.tsx




const MAXITEMS = 3;
const SoldItems = ({ soldItems , setSoldItems , subtotal , gst , total  })=>{
    const handleFormChange = (event)=>{
        let data = [
            ...soldItems
        ];
        if (event && event.target) {
            const idx = event.target.dataset['idx'];
            const name = event.target.name;
            const value = event.target.value;
            // @ts-ignore
            data[idx][name] = value; //name === 'unitPrice' ? maskedCurrency.resolve(value) : value;
            setSoldItems(data);
        }
    };
    const formatUnitPrice = (event)=>{
        let data = [
            ...soldItems
        ];
        if (event && event.target) {
            const idx = event.target.dataset['idx'];
            const name = event.target.name;
            const value = event.target.value;
            // @ts-ignore
            data[idx][name] = maskedCurrency.resolve(value);
            setSoldItems(data);
        }
    };
    const caculateItemTotalPrice = (item, idx, event)=>{
        if (event) {
            formatUnitPrice(event);
        }
        let data = [
            ...soldItems
        ];
        data[idx].totalPrice = `$${item.quantity && item.unitPrice ? BigNumberInstance(item.quantity).times(unmaskValue(item.unitPrice)).toFormat(2) : '0.0'}`;
        setSoldItems(data);
    };
    const addItems = ()=>{
        let newItem = {
            description: '',
            quantity: undefined,
            unitPrice: undefined,
            totalPrice: '$0.0'
        };
        setSoldItems([
            ...soldItems,
            newItem
        ]);
    };
    const removeItems = (idx)=>{
        let data = [
            ...soldItems
        ];
        data.splice(idx, 1);
        setSoldItems(data);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "grid grid-cols-2 gap-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "col-span-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
                        className: "border-separate border border-solid border-[#ECEDEE] border-spacing-0 rounded mt-5 w-full",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("thead", {
                                className: "py-4 table-header-group items-center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                    className: "text-right py-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                            className: "text-left pl-3 py-4",
                                            children: "Items"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                            className: "pr-3",
                                            children: "QTY"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                            className: "pr-3",
                                            children: "Unit Price (in GST)"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                            className: "pr-3",
                                            children: "Total (in GST)"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
                                className: "text-right",
                                children: soldItems.map((item, idx)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                    type: "text",
                                                    className: "block px-3 pb-3.5 pt-4 w-full border border-solid border-[#ECEDEE] border-b-0 border-l-0 text-md text-[#0D1821] bg-transparent appearance-none outline-none focus:ring-0",
                                                    value: item.description,
                                                    name: "description",
                                                    "data-idx": idx,
                                                    placeholder: "Item description",
                                                    onChange: (e)=>handleFormChange(e)
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                    type: "number",
                                                    className: "block text-right px-3 pb-3.5 pt-4 w-full border border-solid border-[#ECEDEE] border-b-0 border-x-0 text-md text-[#0D1821] bg-transparent appearance-none outline-none focus:ring-0",
                                                    value: item.quantity || '',
                                                    name: "quantity",
                                                    "data-idx": idx,
                                                    min: 1,
                                                    step: "0.25",
                                                    placeholder: "Min 1",
                                                    onChange: (e)=>handleFormChange(e),
                                                    onBlur: ()=>caculateItemTotalPrice(item, idx)
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                    type: "text",
                                                    className: "block text-right px-3 border border-solid border-[#ECEDEE] border-b-0 border-r-0 pb-3.5 pt-4 w-full text-md text-[#0D1821] bg-transparent appearance-none focus:outline-none focus:ring-0",
                                                    value: item.unitPrice || '',
                                                    name: "unitPrice",
                                                    "data-idx": idx,
                                                    min: 0,
                                                    step: "0.25",
                                                    placeholder: "AUD",
                                                    onChange: (e)=>handleFormChange(e),
                                                    onBlur: (e)=>caculateItemTotalPrice(item, idx, e)
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                className: "pr-3 border border-solid border-[#ECEDEE] border-b-0",
                                                children: item.totalPrice
                                            })
                                        ]
                                    }, idx);
                                })
                            }),
                            soldItems.length < MAXITEMS && /*#__PURE__*/ (0,jsx_runtime.jsx)("tfoot", {
                                className: "text-center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("tr", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                        colSpan: 8,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "flex items-center justify-center py-4",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                className: "flex items-center cursor-pointer gap-2 text-[#7918F5]",
                                                onClick: addItems,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* FaPlus */.wEH, {}),
                                                    " Add a new item"
                                                ]
                                            })
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    soldItems.length === MAXITEMS && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "text-[#959A9F] pt-3",
                        children: "* Only three items are supported for now."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "col-span-1"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "col-span-1 md:pl-5",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex justify-between text-[#959A9F]",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: "Subtotal"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: maskedCurrency.resolve(`${subtotal}`)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex justify-between text-[#959A9F] mt-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: "GST (10%)"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: maskedCurrency.resolve(`${gst}`)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex justify-between mt-2 text-[#0D1821] font-semibold text-xl",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: "Total"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: maskedCurrency.resolve(`${total}`)
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const CreateInvoice_SoldItems = (SoldItems);

// EXTERNAL MODULE: ./node_modules/.pnpm/@ethersproject+abi@5.7.0/node_modules/@ethersproject/abi/lib.esm/abi-coder.js + 10 modules
var abi_coder = __webpack_require__(66608);
;// CONCATENATED MODULE: ./src/web/components/Button.tsx


const Button = ({ onClick , disabled , children , className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
        className: (0,tw_merge/* twMerge */.m)('rounded-full border-0', className),
        onClick: onClick,
        disabled: disabled,
        children: children
    });
};
/* harmony default export */ const components_Button = (Button);

// EXTERNAL MODULE: ./node_modules/.pnpm/@headlessui+react@1.7.13_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/components/dialog/dialog.js + 19 modules
var dialog = __webpack_require__(26537);
;// CONCATENATED MODULE: ./src/web/assets/svg/close-alt.svg
const close_alt_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi41OSAxNEwxNCAxMi41OUw4LjQxIDdMMTQgMS40MUwxMi41OSAwTDcgNS41OUwxLjQxIDBMMCAxLjQxTDUuNTkgN0wwIDEyLjU5TDEuNDEgMTRMNyA4LjQxTDEyLjU5IDE0WiIgZmlsbD0iIzZFNzQ3QSIvPgo8L3N2Zz4K";
;// CONCATENATED MODULE: ./src/web/components/Modal.tsx





const Modal = ({ isOpen , children , title , onClose , showCloseIcon , className , closeOnOverlayClick =false  })=>{
    const escFunction = (0,react.useCallback)((event)=>{
        if (event.key === 'Escape') {
            event.preventDefault();
        }
    }, []);
    (0,react.useEffect)(()=>{
        document.addEventListener('keydown', escFunction, false);
        return ()=>{
            document.removeEventListener('keydown', escFunction, false);
        };
    }, [
        escFunction
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* Dialog */.V, {
            open: isOpen,
            onClose: onClose,
            as: "div",
            className: "fixed inset-0 z-50 flex bg-[#000000]/40 items-center justify-center overflow-y-auto",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (0,tw_merge/* twMerge */.m)("flex flex-col bg-white text-black my-6 mt-16 py-6 px-6 rounded-lg max-w-xl min-w-[512px]", className || ''),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* Dialog.Overlay */.V.Overlay, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* Dialog.Title */.V.Title, {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "text-black font-semibold text-2xl",
                                children: title
                            }),
                            showCloseIcon && onClose && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "cursor-pointer",
                                onClick: onClose,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                    src: close_alt_namespaceObject
                                })
                            })
                        ]
                    }),
                    closeOnOverlayClick ? /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* Dialog.Panel */.V.Panel, {
                        children: children
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                        children: children
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_Modal = (Modal);

;// CONCATENATED MODULE: ./src/web/abi/InvoiceDelegate.json
const InvoiceDelegate_namespaceObject = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":false,"internalType":"bool","name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"ApprovalValue","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"recvTokenId","type":"uint256"}],"name":"Confirm","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_slot","type":"uint256"},{"indexed":true,"internalType":"address","name":"_creator","type":"address"},{"indexed":false,"internalType":"bytes","name":"_slotInfo","type":"bytes"}],"name":"CreateSlot","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"_slot","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"MintValue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"old_","type":"address"},{"indexed":false,"internalType":"address","name":"new_","type":"address"}],"name":"NewConcrete","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"NewOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldPendingAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newPendingAdmin","type":"address"}],"name":"NewPendingAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"payer","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"payment","type":"uint256"}],"name":"Pay","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"metadataDescriptor","type":"address"}],"name":"SetMetadataDescriptor","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"_oldSlot","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"_newSlot","type":"uint256"}],"name":"SlotChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_fromTokenId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"_toTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"TransferValue","type":"event"},{"inputs":[],"name":"acceptAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"},{"internalType":"address","name":"operator_","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"value_","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"concrete","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"confirm","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currency","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"data","type":"bytes"}],"name":"delegateToConcreteView","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint8","name":"decimals_","type":"uint8"},{"internalType":"address","name":"concrete_","type":"address"},{"internalType":"address","name":"descriptor_","type":"address"},{"internalType":"address","name":"owner_","type":"address"},{"internalType":"address","name":"recvSft_","type":"address"},{"internalType":"address","name":"currency_","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"address","name":"operator_","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"metadataDescriptor","outputs":[{"internalType":"contract IERC3525MetadataDescriptorUpgradeable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"mintTo_","type":"address"},{"internalType":"uint256","name":"mintValue_","type":"uint256"},{"internalType":"bytes","name":"inputSlotInfo_","type":"bytes"}],"name":"mint","outputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"owner_","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"pay","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pendingAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"recvSft","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"revoke","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"},{"internalType":"bytes","name":"data_","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"operator_","type":"address"},{"internalType":"bool","name":"approved_","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newConcrete_","type":"address"}],"name":"setConcreteOnlyAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner_","type":"address"}],"name":"setOwnerOnlyAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newPendingAdmin_","type":"address"}],"name":"setPendingAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"slotByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"slotCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"slotOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"slot_","type":"uint256"}],"name":"slotURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"slot_","type":"uint256"},{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"tokenInSlotByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"slot_","type":"uint256"}],"name":"tokenSupplyInSlot","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"fromTokenId_","type":"uint256"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"value_","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"uint256","name":"newTokenId","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fromTokenId_","type":"uint256"},{"internalType":"uint256","name":"toTokenId_","type":"uint256"},{"internalType":"uint256","name":"value_","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"valueDecimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"}]');
;// CONCATENATED MODULE: ./src/web/assets/svg/waiting.svg
const waiting_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDE4MCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxODAiIGhlaWdodD0iMTgwIiBmaWxsPSIjRkZGRUZFIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTM0Ljc5MyAzNS42MTczSDQ4LjkxMDJWMTQyLjk3MUgxMzQuNzkzVjM1LjYxNzNaTTM4LjE3NDggMjQuODgxOVYxNTMuNzA2SDE0NS41MjhWMjQuODgxOUgzOC4xNzQ4WiIgZmlsbD0iI0Q4RENERSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTkxLjg1MzMgMTA5Ljg3M0MxMDMuMjE5IDEwOS44NzMgMTEyLjQzMiAxMDAuNjYgMTEyLjQzMiA4OS4yOTQzQzExMi40MzIgNzcuOTI4NyAxMDMuMjE5IDY4LjcxNTEgOTEuODUzMyA2OC43MTUxQzgwLjQ4NzcgNjguNzE1MSA3MS4yNzQxIDc3LjkyODcgNzEuMjc0MSA4OS4yOTQzQzcxLjI3NDEgMTAwLjY2IDgwLjQ4NzcgMTA5Ljg3MyA5MS44NTMzIDEwOS44NzNaTTkxLjg1MzMgMTIwLjQyN0MxMDkuMDQ3IDEyMC40MjcgMTIyLjk4NiAxMDYuNDg4IDEyMi45ODYgODkuMjk0M0MxMjIuOTg2IDcyLjEwMDMgMTA5LjA0NyA1OC4xNjE3IDkxLjg1MzMgNTguMTYxN0M3NC42NTkyIDU4LjE2MTcgNjAuNzIwNyA3Mi4xMDAzIDYwLjcyMDcgODkuMjk0M0M2MC43MjA3IDEwNi40ODggNzQuNjU5MiAxMjAuNDI3IDkxLjg1MzMgMTIwLjQyN1oiIGZpbGw9IiM3OTE4RjUiLz4KPHBhdGggZD0iTTExOS43NjUgMTJIMTU5LjQ4NlY0OC41MDAySDExOS43NjVWMTJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzNi45NCAzNS43OTU3QzEzOS43OTggMzUuNzk1NyAxNDEuNjc0IDMzLjU0NDUgMTQxLjY3NCAzMS4zMjI2QzE0MS42NzQgMjkuMTAwNyAxMzkuNzk4IDI2Ljg0OTUgMTM2Ljk0IDI2Ljg0OTVDMTM0LjA4MyAyNi44NDk1IDEzMi4yMDYgMjkuMTAwNyAxMzIuMjA2IDMxLjMyMjZDMTMyLjIwNiAzMy41NDQ1IDEzNC4wODMgMzUuNzk1NyAxMzYuOTQgMzUuNzk1N1pNMTM2Ljk0IDQyLjA1OEMxNDIuODY5IDQyLjA1OCAxNDcuNjc2IDM3LjI1MTYgMTQ3LjY3NiAzMS4zMjI2QzE0Ny42NzYgMjUuMzkzNiAxNDIuODY5IDIwLjU4NzIgMTM2Ljk0IDIwLjU4NzJDMTMxLjAxMSAyMC41ODcyIDEyNi4yMDUgMjUuMzkzNiAxMjYuMjA1IDMxLjMyMjZDMTI2LjIwNSAzNy4yNTE2IDEzMS4wMTEgNDIuMDU4IDEzNi45NCA0Mi4wNThaIiBmaWxsPSIjMEQxODIxIi8+CjxwYXRoIGQ9Ik02MC43MjA3IDE2OC43MzdMMjAuOTk5OSAxNjguNzM3TDIwLjk5OTggMTMwLjA5TDYwLjcyMDcgMTMwLjA5TDYwLjcyMDcgMTY4LjczN1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDEuMzk4NCAxNDIuNzkzQzM4LjkyOCAxNDIuNzkzIDM2LjkyNTQgMTQ0Ljc5NSAzNi45MjU0IDE0Ny4yNjZDMzYuOTI1NCAxNDkuNzM2IDM4LjkyOCAxNTEuNzM5IDQxLjM5ODQgMTUxLjczOUM0My44Njg4IDE1MS43MzkgNDUuODcxNSAxNDkuNzM2IDQ1Ljg3MTUgMTQ3LjI2NkM0NS44NzE1IDE0NC43OTUgNDMuODY4OCAxNDIuNzkzIDQxLjM5ODQgMTQyLjc5M1pNNDEuMzk4NCAxMzYuNTNDMzUuNDY5NCAxMzYuNTMgMzAuNjYzMSAxNDEuMzM3IDMwLjY2MzEgMTQ3LjI2NkMzMC42NjMxIDE1My4xOTUgMzUuNDY5NCAxNTguMDAxIDQxLjM5ODQgMTU4LjAwMUM0Ny4zMjc0IDE1OC4wMDEgNTIuMTMzOCAxNTMuMTk1IDUyLjEzMzggMTQ3LjI2NkM1Mi4xMzM4IDE0MS4zMzcgNDcuMzI3NCAxMzYuNTMgNDEuMzk4NCAxMzYuNTNaIiBmaWxsPSIjMEQxODIxIi8+Cjwvc3ZnPgo=";
;// CONCATENATED MODULE: ./src/web/assets/svg/success.svg
const success_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDE4MCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxODAiIGhlaWdodD0iMTgwIiBmaWxsPSIjRkZGRUZFIi8+CjxjaXJjbGUgY3g9IjkwLjUiIGN5PSI5MC41IiByPSI2OC41IiBmaWxsPSIjRkJGN0ZFIi8+CjxjaXJjbGUgY3g9IjkwLjQ5OTciIGN5PSI5MC41MDAyIiByPSI1MS44NTUxIiBmaWxsPSIjRjJFN0ZEIi8+CjxjaXJjbGUgY3g9IjkxLjA1MDYiIGN5PSI5MS4wNSIgcj0iMzkuNjAxNCIgZmlsbD0iIzc5MThGNSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExNS4yMTYgNzcuNDk4N0w4My40MjMgMTA4LjQxNkw2Ni44MTQ1IDkyLjI2NTFMNzEuMjE5NSA4Ny45ODE1TDgzLjQyMyA5OS44NDg5TDExMC44MTEgNzMuMjE1TDExNS4yMTYgNzcuNDk4N1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=";
;// CONCATENATED MODULE: ./src/web/assets/svg/failure.svg
const failure_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM3IiBoZWlnaHQ9IjEzNyIgdmlld0JveD0iMCAwIDEzNyAxMzciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjY4LjUiIGN5PSI2OC41IiByPSI2OC41IiBmaWxsPSIjRkVGNkY3Ii8+CjxjaXJjbGUgY3g9IjY4LjQ5OTciIGN5PSI2OC40OTk3IiByPSI1MS44NTUxIiBmaWxsPSIjRkRFQkVEIi8+CjxjaXJjbGUgY3g9IjY5LjA1MDYiIGN5PSI2OS4wNDk3IiByPSIzOS42MDE0IiBmaWxsPSIjRUMzNjRDIi8+CjxwYXRoIGQ9Ik04NiA1Mkw1MSA4NiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI3Ii8+CjxwYXRoIGQ9Ik01MiA1Mkw4NSA4NiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI3Ii8+Cjwvc3ZnPgo=";
// EXTERNAL MODULE: ./node_modules/.pnpm/react-icons@4.8.0_react@18.2.0/node_modules/react-icons/ai/index.esm.js
var ai_index_esm = __webpack_require__(63234);
;// CONCATENATED MODULE: ./src/web/components/WithTxConfirmation.tsx











const WithTxConfirmation = (props)=>{
    const { txHash , closeTxConfirmation , className , showCloseIcon , failureText , successText , defaultText , children , invoiceNumber  } = props;
    const [isCopied, onCopy] = useCopyClipboard();
    const renderFailureContent = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex flex-col gap-8",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    src: failure_namespaceObject,
                    className: "mx-auto"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "text-[#EC364C]",
                    children: failureText
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "text-[#6E747A] text-xs flex items-center justify-center",
                    children: [
                        "Something went wrong.",
                        txHash && /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                            href: getExplorerLink(txHash != null ? txHash : ''),
                            className: "text-[#7918F5] pl-1",
                            target: "_blank",
                            children: "View on Etherscan"
                        })
                    ]
                })
            ]
        });
    };
    const renderSuccessContent = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex flex-col gap-8",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    src: success_namespaceObject,
                    className: "mx-auto"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "text-[#6E747A] mt-3",
                    children: successText
                })
            ]
        });
    };
    const renderDefaultContent = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex flex-col gap-8",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    src: waiting_namespaceObject,
                    className: "mx-auto"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "text-[#6E747A] mt-3",
                    children: defaultText
                }),
                txHash && /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                    href: getExplorerLink(txHash != null ? txHash : ''),
                    className: "text-[#7918F5] pl-1",
                    target: "_blank",
                    children: "View on Etherscan"
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "container",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Modal, {
            isOpen: true,
            onClose: closeTxConfirmation,
            className: className,
            showCloseIcon: showCloseIcon || !!failureText,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex flex-col text-center gap-6 mt-6",
                    children: [
                        failureText ? renderFailureContent() : successText ? renderSuccessContent() : renderDefaultContent(),
                        !children && txHash && (!!successText || !!failureText) && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "mt-3",
                            children: [
                                invoiceNumber && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex justify-between mb-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: "Invoice ID"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            className: "flex justify-center text-sm text-gray-500",
                                            children: [
                                                "#",
                                                invoiceNumber
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: "Hash"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex justify-center text-sm text-gray-500",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                    href: getExplorerLink(txHash != null ? txHash : ''),
                                                    target: '_blank',
                                                    children: shortenTxHash(txHash)
                                                }),
                                                isCopied ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ai_index_esm/* AiOutlineCheck */.bzc, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: "cursor-pointer pl-1",
                                                    onClick: ()=>onCopy(txHash),
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyIcon, {})
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        !children && (showCloseIcon || !failureText) && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex justify-center w-full",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Button, {
                                onClick: closeTxConfirmation,
                                disabled: !txHash || !!txHash && !successText,
                                className: (0,tw_merge/* twMerge */.m)('w-full py-2 inline-flex justify-center rounded-2xl items-center px-4 bg-[#ECEDEE] font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2', (!txHash || !!txHash && !successText) && 'cursor-not-allowed'),
                                children: txHash && successText ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(SendIcon, {
                                            fillColour: "black"
                                        }),
                                        " Close"
                                    ]
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "inline-block h-6 w-6 animate-spin rounded-full text-[#6E747A] border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
                                    role: "status",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0",
                                        children: "Loading..."
                                    })
                                })
                            })
                        })
                    ]
                }),
                children
            ]
        })
    });
};
/* harmony default export */ const components_WithTxConfirmation = (WithTxConfirmation);

;// CONCATENATED MODULE: ./src/web/assets/svg/PayCard.svg
const PayCard_namespaceObject = __webpack_require__.p + "images/PayCard.7e93e.svg";
;// CONCATENATED MODULE: ./src/web/pages/CreateInvoice/ConfirmModal.tsx

















const ConfirmModal = (props)=>{
    const { invoice , soldItems , subtotal , gst , total , isOpenConfirmModal , onModalClose  } = props;
    const [isCopied, onCopy] = useCopyClipboard();
    const [isLoading, setLoading] = (0,react.useState)(false);
    const [txHash, setTxHash] = (0,react.useState)('');
    const [successText, setSuccessText] = (0,react.useState)('');
    const [failureText, setFailureText] = (0,react.useState)('');
    const [copiedText, setCopiedText] = (0,react.useState)('');
    const [invoiceNumber, setInvoiceNumber] = (0,react.useState)('');
    const { account  } = (0,dist/* useWeb3Provider */.xo)();
    const contract = (0,dist/* useContract */.cq)(invoiceDelegateAddress, InvoiceDelegate_namespaceObject, true);
    const getInvoiceInfo = ()=>{
        return abi_coder/* defaultAbiCoder.encode */.$.encode([
            'tuple(tuple(string,string,address),tuple(string,string,address),tuple(string,string,string,string,string)[],string,string,string,uint64,uint64)'
        ], [
            [
                [
                    invoice.sellerName,
                    invoice.sellerAbn,
                    account
                ],
                [
                    invoice.buyerName,
                    invoice.buyerAbn,
                    invoice.buyerAddr
                ],
                [
                    ...soldItems
                ],
                invoice.invoiceLink,
                subtotal,
                gst,
                dayJsAdapter == null ? void 0 : dayJsAdapter.date(invoice.invoiceDate).unix(),
                dayJsAdapter == null ? void 0 : dayJsAdapter.date(invoice.dueDate).unix()
            ]
        ]);
    };
    const isCopiedAddr = isCopied && copiedText === 'addr';
    const isCopiedHash = isCopied && copiedText === 'hash';
    const handleCopy = (0,react.useCallback)((text, content)=>{
        setCopiedText(text);
        onCopy(content);
        setTimeout(()=>{
            setCopiedText('');
        }, 300);
    }, []);
    const onCreatingInvoice = (0,react.useCallback)(/*#__PURE__*/ (0,_async_to_generator/* default */.Z)(function*() {
        if (!contract || !account) return;
        try {
            var _txReceipt_events;
            setLoading(true);
            const invoiceInfo = getInvoiceInfo();
            const tx = yield contract == null ? void 0 : contract.mint(invoice.buyerAddr, units_lib_esm.parseEther(`${total}`), invoiceInfo);
            setTxHash(tx.hash);
            const txReceipt = yield tx.wait();
            (_txReceipt_events = txReceipt.events) == null ? void 0 : _txReceipt_events.forEach((event)=>{
                if ((event == null ? void 0 : event.event) !== 'MintValue' || !(event == null ? void 0 : event.args)) return;
                const invoiceNo = event.args._tokenId;
                setInvoiceNumber(invoiceNo.toString());
            });
            setSuccessText('You have successfully issued.');
        } catch (err) {
            setFailureText('Your confirm failed');
        }
    }), [
        invoice,
        account,
        contract,
        total
    ]);
    const onCloseTxConfirmation = (0,react.useCallback)(()=>{
        const isSucceeded = successText ? true : false;
        setLoading(false);
        setTxHash('');
        setSuccessText('');
        setFailureText('');
        if (isSucceeded) {
            onModalClose(true);
        }
    }, [
        successText
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Modal, {
                isOpen: isOpenConfirmModal,
                onClose: ()=>onModalClose(false),
                title: "Issue the invoice",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex justify-center text-sm text-gray-500 pt-6",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            src: PayCard_namespaceObject
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "text-[#959A9F] pt-6 text-center",
                        children: "I confirm that the contents of this invoice are correct."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex justify-between mt-6 w-full",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Button, {
                                onClick: ()=>onModalClose(false),
                                className: "w-[45%] gap-2 inline-flex justify-center rounded-2xl items-center px-4 py-2 bg-[#ECEDEE] font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SendIcon, {
                                        fillColour: "black"
                                    }),
                                    " Close"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Button, {
                                onClick: onCreatingInvoice,
                                className: (0,tw_merge/* twMerge */.m)('w-[45%] gap-2 fill-white inline-flex items-center justify-center px-4 py-2 bg-[#7918F5] text-base font-medium text-white hover:bg-#7918F5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7918F5]'),
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SendIcon, {}),
                                    " Confirm"
                                ]
                            })
                        ]
                    })
                ]
            }),
            isLoading && /*#__PURE__*/ (0,jsx_runtime.jsx)(components_WithTxConfirmation, {
                txHash: txHash,
                closeTxConfirmation: onCloseTxConfirmation,
                className: "min-w-[360px]",
                successText: successText,
                failureText: failureText,
                defaultText: "You are issing...",
                children: successText && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "mt-5",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex justify-between items-center mb-[8px]",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-[#6E747A]",
                                    children: "Invoice ID"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                    className: "flex justify-center text-[14px] text-[#0D1821]",
                                    children: [
                                        "#",
                                        invoiceNumber
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex justify-between items-center mb-[8px]",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-[#6E747A]",
                                    children: "Contract address"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex justify-center items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "text-[14px] text-[#0D1821]",
                                            children: shortenAddress(invoiceDelegateAddress)
                                        }),
                                        isCopiedAddr ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ai_index_esm/* AiOutlineCheck */.bzc, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "cursor-pointer",
                                            onClick: ()=>handleCopy('addr', invoiceDelegateAddress),
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyIcon, {})
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex justify-between items-center mb-[8px]",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-[#6E747A]",
                                    children: "Hash"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex justify-center items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            href: getExplorerLink(txHash != null ? txHash : ''),
                                            target: '_blank',
                                            className: "text-[14px] text-[#0D1821]",
                                            children: shortenTxHash(txHash)
                                        }),
                                        isCopiedHash ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ai_index_esm/* AiOutlineCheck */.bzc, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "cursor-pointer",
                                            onClick: ()=>handleCopy('hash', txHash),
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyIcon, {})
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            onClick: ()=>onModalClose(true),
                            className: (0,tw_merge/* twMerge */.m)('w-full gap-2 fill-white border-0 inline-flex items-center justify-center px-4 py-2 bg-[#7918F5] text-base font-medium text-white hover:bg-#7918F5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7918F5]', 'rounded-2xl my-[8px]'),
                            children: "Issue a new invoice"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_dom_dist/* Link */.rU, {
                            to: "/activity",
                            className: (0,tw_merge/* twMerge */.m)('w-full gap-2 fill-white inline-flex items-center justify-center px-4 py-2 border border-[#7918F5] text-base font-medium text-white hover:bg-#7918F5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7918F5]', 'rounded-2xl mt-[8px] text-[#7918F5]'),
                            children: "View my issued activity"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const CreateInvoice_ConfirmModal = (ConfirmModal);

;// CONCATENATED MODULE: ./src/web/pages/CreateInvoice/index.tsx


















const datePickerOptions = {
    autoHide: true,
    todayBtn: false,
    clearBtn: false,
    maxDate: new Date('2030-01-01'),
    minDate: new Date(),
    // defaultDate: new Date(currentDate.add(7, 'day').toString()),
    language: 'en'
};
const initSoldItem = {
    description: '',
    quantity: undefined,
    unitPrice: undefined,
    gst: undefined,
    totalPrice: '$0.0'
};
const initInvoice = {
    invoiceDate: dayJsAdapter == null ? void 0 : dayJsAdapter.format(currDate, 'normalDate'),
    dueDate: '',
    sellerName: '',
    sellerAbn: '',
    buyerName: '',
    buyerAbn: '',
    buyerAddr: '',
    invoiceLink: '',
    items: []
};
const CreateInvoice = ()=>{
    const [items, setSoldItems] = (0,react.useState)([
        initSoldItem
    ]);
    const [invoice, setInvoice] = (0,react.useState)(initInvoice);
    const [showDatepicker, setShowDatepicker] = (0,react.useState)(false);
    const [isOpenConfirmModal, setOpenConfirmModal] = (0,react.useState)(false);
    const { invoiceDate , dueDate , sellerName , sellerAbn , buyerName , buyerAbn , buyerAddr , invoiceLink  } = invoice;
    const formattedSellerABN = maskedABN.resolve(sellerAbn);
    const formattedBuyerABN = maskedABN.resolve(buyerAbn);
    const onChangeInput = (0,react.useCallback)((e)=>{
        const { name , value  } = e.target;
        if ((name === 'sellerAbn' || name === 'buyerAbn') && value.length > 14) {
            return;
        }
        setInvoice((0,_extends/* default */.Z)({}, invoice, {
            [name]: value
        }));
    }, [
        invoice
    ]);
    const totalInGst = items.map((item)=>{
        return item.quantity && item.unitPrice ? BigNumberInstance(item.quantity).times(unmaskValue(item.unitPrice)).toNumber() : 0;
    }).reduce((a, b)=>a + b, 0);
    const subtotal = BigNumberInstance(totalInGst).div(1.1).toNumber();
    const gst = BigNumberInstance(totalInGst).div(11).toNumber();
    const total = BigNumberInstance(subtotal).plus(gst).toNumber();
    const soldItems = items.map((item)=>[
            item.description,
            item.quantity,
            item.unitPrice,
            '',
            item.totalPrice
        ]);
    const handleDateChange = (selectedDate)=>{
        const formattedDate = dayJsAdapter == null ? void 0 : dayJsAdapter.format(dayJsAdapter.date(selectedDate), 'normalDate');
        setInvoice((0,_extends/* default */.Z)({}, invoice, {
            dueDate: formattedDate
        }));
    };
    const handleDatepickerClose = (state)=>{
        setShowDatepicker(state);
    };
    const onModalClose = (succeeded)=>{
        if (succeeded) {
            setInvoice(initInvoice);
            setSoldItems(()=>[
                    {
                        description: '',
                        quantity: undefined,
                        unitPrice: undefined,
                        gst: undefined,
                        totalPrice: '$0.0'
                    }
                ]);
        }
        setOpenConfirmModal(false);
    };
    const isValidAbn = (abn)=>abn.length === 14; // formatted abn length is 14
    const isValidWalletAddress = !buyerAddr || !!buyerAddr && lib_esm.isAddress(buyerAddr);
    const isValidItems = items.every((item)=>{
        var _item_description;
        return !!((_item_description = item.description) == null ? void 0 : _item_description.trim()) && !!item.quantity && !!item.unitPrice;
    });
    const isValidInvoiceForm = !!invoiceDate && !!dueDate && !!sellerName && !!sellerAbn && isValidAbn(sellerAbn) && !!buyerName && !!buyerAddr && !!buyerAbn && isValidAbn(buyerAbn) && isValidWalletAddress && isValidItems;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "p-12 overflow-auto scrollbar-hide [&::-webkit-scrollbar]:hidden",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_PageHeader, {
                title: "Issue an invoice"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid grid-cols-3 gap-4 my-12",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "col-span-2",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "flex items-center justify-end h-6 bg-[#D8DCDE] font-semibold text-black",
                                    style: {
                                        background: 'linear-gradient(90deg, #B659FF 0%, #1ADA89 33.97%, #FFAD32 66.99%, #EC364C 99.16%)'
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "px-3 text-white uppercase text-[12px]",
                                        children: "issuing"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "p-16 bg-white text-[#0D1821]",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center text-sm font-normal gap-1",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                    src: calendar_namespaceObject
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: "font-medium text-sm",
                                                    children: "Date"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "grid grid-cols-4 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "col-span-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(components_FloatingLabelInput, {
                                                            type: "text",
                                                            name: "invoiceDate",
                                                            label: "Invoice date",
                                                            onChange: ()=>void 0,
                                                            value: invoiceDate,
                                                            disabled: true
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(components_DatePicker, {
                                                            options: datePickerOptions,
                                                            onChange: handleDateChange,
                                                            show: showDatepicker,
                                                            setShow: handleDatepickerClose
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "col-span-2"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "col-span-2 mt-12",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center text-sm font-normal gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                                    src: note_favorite_namespaceObject
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                    className: "font-medium text-sm",
                                                                    children: "Invoice From"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(components_FloatingLabelInput, {
                                                            type: "text",
                                                            name: "sellerName",
                                                            label: "Legal entity name",
                                                            onChange: onChangeInput,
                                                            value: sellerName
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(components_FloatingLabelInput, {
                                                            type: "text",
                                                            name: "sellerAbn",
                                                            label: "ABN",
                                                            onChange: onChangeInput,
                                                            value: formattedSellerABN
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "col-span-2 mt-12",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center text-sm font-normal gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                                    src: card_pos_namespaceObject
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                    className: "font-medium text-sm",
                                                                    children: "Invoice To"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(components_FloatingLabelInput, {
                                                            type: "text",
                                                            name: "buyerName",
                                                            label: "Legal entity name",
                                                            onChange: onChangeInput,
                                                            value: buyerName
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(components_FloatingLabelInput, {
                                                            type: "text",
                                                            name: "buyerAbn",
                                                            label: "ABN",
                                                            onChange: onChangeInput,
                                                            value: formattedBuyerABN
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "col-span-4 mt-12",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center text-sm font-normal gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                                    src: box_tick_namespaceObject
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                    className: "font-medium text-sm",
                                                                    children: "Items Sold"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CreateInvoice_SoldItems, {
                                                            setSoldItems: setSoldItems,
                                                            soldItems: items,
                                                            subtotal: subtotal,
                                                            gst: gst,
                                                            total: total
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "col-span-2 mt-12",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center text-sm font-normal gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                                    src: maximize_namespaceObject
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                    className: "font-medium text-sm",
                                                                    children: "Invoice to"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(components_FloatingLabelInput, {
                                                            type: "text",
                                                            name: "buyerAddr",
                                                            label: "Recipient's address",
                                                            hasError: !isValidWalletAddress,
                                                            errorMsg: "Invalid wallet address",
                                                            onChange: onChangeInput,
                                                            value: buyerAddr
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "col-span-2 mt-12",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center text-sm font-normal gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                                    src: _3square_namespaceObject
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                    className: "font-medium text-sm",
                                                                    children: "Attachments"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(components_FloatingLabelInput, {
                                                            type: "text",
                                                            name: "invoiceLink",
                                                            label: "Invoice link (optional)",
                                                            onChange: onChangeInput,
                                                            value: invoiceLink
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex items-end justify-center pb-12",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            className: (0,tw_merge/* twMerge */.m)('bg-[#7918F5] rounded text-[#FBFAFC] text-sm font-semibold p-4 w-40', !isValidInvoiceForm && 'opacity-50 cursor-not-allowed'),
                            onClick: ()=>setOpenConfirmModal(true),
                            disabled: !isValidInvoiceForm,
                            children: "Issue the invoice"
                        })
                    })
                ]
            }),
            isOpenConfirmModal && /*#__PURE__*/ (0,jsx_runtime.jsx)(CreateInvoice_ConfirmModal, {
                isOpenConfirmModal: isOpenConfirmModal,
                onModalClose: onModalClose,
                subtotal: subtotal,
                gst: gst,
                total: total,
                invoice: invoice,
                soldItems: soldItems
            })
        ]
    });
};
/* harmony default export */ const pages_CreateInvoice = (CreateInvoice);

;// CONCATENATED MODULE: ./src/web/assets/svg/RecvCard.svg
const RecvCard_namespaceObject = __webpack_require__.p + "images/RecvCard.df4d9.svg";
;// CONCATENATED MODULE: ./src/web/pages/GetPaid/Transfer.tsx















const Transfer = ({ onClose , isPreview , recvId , amount  })=>{
    const { account  } = (0,dist/* useWeb3Provider */.xo)();
    const recvDelegateContract = (0,dist/* useContract */.cq)(receivableDelegateAddress, [
        'function transferFrom(uint256 _fromTokenId, address _to, uint256 _value) external payable returns (uint256)'
    ], true);
    const [isLoading, setLoading] = (0,react.useState)(false);
    const [successText, setSuccessText] = (0,react.useState)('');
    const [failureText, setFailureText] = (0,react.useState)('');
    const [txHash, setTxHash] = (0,react.useState)('');
    const [amountToTransfer, setAmountToTransfer] = (0,react.useState)('');
    const [recipientAddress, setRecipientAddress] = (0,react.useState)('');
    const [isCopied, onCopy] = useCopyClipboard();
    const formattedAmount = maskedCurrency.resolve(units_lib_esm.formatEther(amount || '0'));
    const formattedAmountToTransfer = maskedCurrency.resolve(amountToTransfer);
    const onCloseTxConfirmation = ()=>{
        setTxHash('');
        setSuccessText('');
        setFailureText('');
        setLoading(false);
        setAmountToTransfer('');
        setRecipientAddress('');
        onClose();
    };
    const handleTransfer = (0,react.useCallback)(/*#__PURE__*/ (0,_async_to_generator/* default */.Z)(function*() {
        if (!recipientAddress || !recvDelegateContract || !account || !amountToTransfer) return;
        try {
            setLoading(true);
            const tx = yield recvDelegateContract.transferFrom(recvId, recipientAddress, units_lib_esm.parseEther(amountToTransfer));
            setTxHash(tx.hash);
            yield tx.wait();
            setSuccessText('You have successfully transferred.');
        } catch (err) {
            setFailureText('Your transfer failed');
        }
    }), [
        recipientAddress,
        recvDelegateContract,
        account,
        recvId,
        amountToTransfer
    ]);
    const setTransferAll = ()=>{
        setAmountToTransfer(units_lib_esm.formatEther(amount || '0'));
    };
    const changeAmount = (val)=>{
        setAmountToTransfer(val);
    };
    const changeRecipientAddress = (val)=>{
        setRecipientAddress(val);
    };
    const isValidAmount = !amountToTransfer || !!amountToTransfer && units_lib_esm.parseEther(amountToTransfer).lte(amount || '0');
    const isValidReceipientAddress = !recipientAddress || !!recipientAddress && lib_esm.isAddress(recipientAddress);
    const canTransfer = !!amountToTransfer && !!recipientAddress && isValidAmount && isValidReceipientAddress;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            !isPreview && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex justify-center text-sm text-gray-500 pt-6",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    src: RecvCard_namespaceObject
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col text-[#6E747A] py-6",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex justify-between items-center pt-2 gap-3",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "font-normal text-md",
                                        children: "Amount"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex justify-end items-center pt-2 gap-3 text-[12px]",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                children: [
                                                    "Total Amount: ",
                                                    formattedAmount
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-[#7918F5] font-medium cursor-pointer",
                                                onClick: setTransferAll,
                                                children: "Entire transfer"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Input, {
                                type: "number",
                                value: amountToTransfer,
                                warn: !isValidAmount,
                                prefix: "$",
                                className: "mt-3",
                                placeholder: "0.0",
                                onChange: changeAmount
                            }),
                            !isValidAmount && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-red mt-2 text-xs",
                                children: "Exceeded the maximum amount"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "mt-6",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "font-normal text-md",
                                children: "Recipient's address"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Input, {
                                type: "text",
                                value: recipientAddress,
                                warn: !isValidReceipientAddress,
                                className: "mt-3",
                                placeholder: "Recipient's address",
                                onChange: changeRecipientAddress
                            }),
                            !isValidReceipientAddress && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-red mt-2 text-xs",
                                children: "Invalid receipient address"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex justify-between mt-6 w-full",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Button, {
                        onClick: onCloseTxConfirmation,
                        className: "w-[45%] gap-2 inline-flex justify-center items-center px-4 py-2 bg-[#ECEDEE] font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SendIcon, {
                                fillColour: "black"
                            }),
                            " Close"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Button, {
                        disabled: !canTransfer,
                        onClick: handleTransfer,
                        className: (0,tw_merge/* twMerge */.m)('w-[45%] gap-2 fill-white inline-flex items-center justify-center px-4 py-2 bg-[#7918F5] text-base font-medium text-white hover:bg-#7918F5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7918F5]', !canTransfer && 'opacity-50 cursor-not-allowed'),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SendIcon, {}),
                            " Confirm"
                        ]
                    })
                ]
            }),
            isLoading && /*#__PURE__*/ (0,jsx_runtime.jsx)(components_WithTxConfirmation, {
                txHash: txHash,
                closeTxConfirmation: onCloseTxConfirmation,
                className: "min-w-[360px]",
                successText: successText,
                failureText: failureText,
                defaultText: "You are transferring...",
                children: successText && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "mt-5",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex justify-between items-center mb-[8px]",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-[#6E747A]",
                                    children: "Amount"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "flex justify-center text-[14px] text-[#0D1821]",
                                    children: formattedAmountToTransfer
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex justify-between items-center mb-[8px]",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-[#6E747A]",
                                    children: "Hash"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex justify-center items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            href: getExplorerLink(txHash != null ? txHash : ''),
                                            target: '_blank',
                                            className: "text-[14px] text-[#0D1821]",
                                            children: shortenTxHash(txHash)
                                        }),
                                        isCopied ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ai_index_esm/* AiOutlineCheck */.bzc, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "cursor-pointer",
                                            onClick: ()=>onCopy(txHash),
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyIcon, {})
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            onClick: onCloseTxConfirmation,
                            className: (0,tw_merge/* twMerge */.m)('w-full gap-2 fill-white inline-flex border-0 items-center justify-center px-4 py-2 bg-[#7918F5] text-base font-medium text-white hover:bg-#7918F5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7918F5]', 'rounded-2xl my-[8px]'),
                            children: "Confirm"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const GetPaid_Transfer = (Transfer);

;// CONCATENATED MODULE: ./src/web/abi/RecvDelegate.json
const RecvDelegate_namespaceObject = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":false,"internalType":"bool","name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"ApprovalValue","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_slot","type":"uint256"},{"indexed":true,"internalType":"address","name":"_creator","type":"address"},{"indexed":false,"internalType":"bytes","name":"_slotInfo","type":"bytes"}],"name":"CreateSlot","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"_slot","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"MintValue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"old_","type":"address"},{"indexed":false,"internalType":"address","name":"new_","type":"address"}],"name":"NewConcrete","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"NewOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldPendingAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newPendingAdmin","type":"address"}],"name":"NewPendingAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"slot","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"payment","type":"uint256"}],"name":"Pay","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"metadataDescriptor","type":"address"}],"name":"SetMetadataDescriptor","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"_oldSlot","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"_newSlot","type":"uint256"}],"name":"SlotChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_fromTokenId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"_toTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"TransferValue","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"withdrawValue","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"acceptAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"},{"internalType":"address","name":"operator_","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"value_","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"concrete","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currency","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"data","type":"bytes"}],"name":"delegateToConcreteView","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint8","name":"decimals_","type":"uint8"},{"internalType":"address","name":"concrete_","type":"address"},{"internalType":"address","name":"descriptor_","type":"address"},{"internalType":"address","name":"owner_","type":"address"},{"internalType":"address","name":"currency_","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"invoiceSft","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"address","name":"operator_","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"isWithdrawn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"metadataDescriptor","outputs":[{"internalType":"contract IERC3525MetadataDescriptorUpgradeable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"slot_","type":"uint256"},{"internalType":"bytes","name":"inputSlotInfo_","type":"bytes"}],"name":"mint","outputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"owner_","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"slot_","type":"uint256"},{"internalType":"uint256","name":"payment_","type":"uint256"}],"name":"pay","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pendingAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"},{"internalType":"bytes","name":"data_","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"operator_","type":"address"},{"internalType":"bool","name":"approved_","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newConcrete_","type":"address"}],"name":"setConcreteOnlyAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"invoiceSft_","type":"address"}],"name":"setInvoiceSft","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner_","type":"address"}],"name":"setOwnerOnlyAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newPendingAdmin_","type":"address"}],"name":"setPendingAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"slotByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"slotCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"slotOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"slot_","type":"uint256"}],"name":"slotURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"slot_","type":"uint256"},{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"tokenInSlotByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"slot_","type":"uint256"}],"name":"tokenSupplyInSlot","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"fromTokenId_","type":"uint256"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"value_","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"uint256","name":"newTokenId","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fromTokenId_","type":"uint256"},{"internalType":"uint256","name":"toTokenId_","type":"uint256"},{"internalType":"uint256","name":"value_","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"valueDecimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
;// CONCATENATED MODULE: ./src/web/pages/GetPaid/Claim.tsx















const Claim = ({ isPreview , recvId , claimAmount , onClose  })=>{
    const { account  } = (0,dist/* useWeb3Provider */.xo)();
    const recvDelegateContract = (0,dist/* useContract */.cq)(receivableDelegateAddress, RecvDelegate_namespaceObject, true);
    const [isCopied, onCopy] = useCopyClipboard();
    const [isLoading, setLoading] = (0,react.useState)(false);
    const [successText, setSuccessText] = (0,react.useState)('');
    const [failureText, setFailureText] = (0,react.useState)('');
    const [txHash, setTxHash] = (0,react.useState)('');
    const formattedAmount = maskedCurrency.resolve(units_lib_esm.formatEther(claimAmount || '0'));
    const onCloseTxConfirmation = ()=>{
        setTxHash('');
        setSuccessText('');
        setFailureText('');
        setLoading(false);
        onClose();
    };
    const handleClaim = (0,react.useCallback)(/*#__PURE__*/ (0,_async_to_generator/* default */.Z)(function*() {
        if (!account || !recvDelegateContract || !recvId) return;
        try {
            setLoading(true);
            const tx = yield recvDelegateContract.withdraw(account, recvId);
            setTxHash(tx.hash);
            yield tx.wait();
            setSuccessText('You have successfully claimed.');
        } catch (err) {
            setFailureText('Your claim failed');
        }
    }), [
        account,
        recvDelegateContract,
        recvId
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            !isPreview && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex justify-center text-sm text-gray-500 pt-6",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    src: RecvCard_namespaceObject
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col items-center justify-center py-[24px]",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "text-[#6E747A] font-normal text-md",
                        children: "Claimable Amount"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "text-black font-medium text-[24px] pt-1",
                        children: formattedAmount
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex justify-between w-full",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Button, {
                        onClick: onCloseTxConfirmation,
                        className: "w-[45%] gap-2 inline-flex justify-center rounded-2xl items-center px-4 py-2 bg-[#ECEDEE] font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SendIcon, {
                                fillColour: "black"
                            }),
                            " Close"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Button, {
                        onClick: handleClaim,
                        className: "w-[45%] gap-2 fill-white inline-flex items-center justify-center px-4 py-2 bg-[#7918F5] text-base font-medium text-white hover:bg-#7918F5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7918F5]",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SendIcon, {}),
                            " Confirm"
                        ]
                    })
                ]
            }),
            isLoading && /*#__PURE__*/ (0,jsx_runtime.jsx)(components_WithTxConfirmation, {
                txHash: txHash,
                closeTxConfirmation: onCloseTxConfirmation,
                className: "min-w-[360px]",
                successText: successText,
                failureText: failureText,
                defaultText: "You are claiming...",
                children: successText && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "mt-5",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex justify-between items-center mb-[8px]",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-[#6E747A]",
                                    children: "Amount"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "flex justify-center text-[14px] text-[#0D1821]",
                                    children: formattedAmount
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex justify-between items-center mb-[8px]",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-[#6E747A]",
                                    children: "Hash"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex justify-center items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            href: getExplorerLink(txHash != null ? txHash : ''),
                                            target: '_blank',
                                            className: "text-[14px] text-[#0D1821]",
                                            children: shortenTxHash(txHash)
                                        }),
                                        isCopied ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ai_index_esm/* AiOutlineCheck */.bzc, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "cursor-pointer",
                                            onClick: ()=>onCopy(txHash),
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyIcon, {})
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            onClick: onCloseTxConfirmation,
                            className: (0,tw_merge/* twMerge */.m)('w-full gap-2 fill-white inline-flex border-0 items-center justify-center px-4 py-2 bg-[#7918F5] text-base font-medium text-white hover:bg-#7918F5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7918F5]', 'rounded-2xl my-[8px]'),
                            children: "Confirm"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const GetPaid_Claim = (Claim);

;// CONCATENATED MODULE: ./src/web/assets/images/no-data.png
const no_data_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMcAAACoCAYAAABUp/pJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQ4SURBVHgB7Z1NbFxHcoCr+kmUbMsO44vp/GnGQ/1QF40v6wBBotEhWewiWUtINoccImpPOYXSbS1gIQoJjEVykLTHHEwqhxycLCRfckgOHCUIECMHUTmYPxpqqGCDlQ9r02vKIiVN13b18FH85/x09+vXrz/AIk2LtsWZ71VVd3U1QsGZaTZLotWqSgmDgFgSQhwlkvpzIPW1NqWdvhcRlohgCdRH9XuXEHFRSvkIhfq6FNOJ+trx4+VpiOQShAIxP9+sykTWEMRpAqqqP3yJXgpgD4RpIFpUH++yNCPHynWIeE/QcqQyAOH76ilfdSJC59SJ6C6AqEdZOoOjfCLh/eOV8k1wQHByzDxo1hIB76vIMOqZDLuCOi2jOwD0yUCS1Mvl8hJENsFioKQplb6WVPo6fqJSvgaWCUKOPAqxGxtFOTE8fAcim8RIv+ZCkNzK0Ww2B59JGFNCnFM/tCqECMIiEtVlIq6NlMuLUEB2EiPFtiC5k2O+2ayChAshRIluQKBJSeJWkeqTvcRIsSlIbuTg1AmRrqpPa1Bs6gTy1sjw8CQETCdipNgSxHs5ohS7oFMueTnEuqQbMVJsCOKtHO3NOXmVAEchshd1SvBiKDVJL2KkmBbEOznSQlut1lwqUk3RL7omyXnh3o8YKSYF8UoOnUIJmujnh1NoVKpFJK/lsR4xIUaKKUG8kIOjxXMJVyXRJYiYIFeplkkxUkwIkrkcMVrYQb2wS0R07eSxyg3wGBtipPQrSGZyxGjhBp9rEZtipPQjSCZyrP1Qbge7s+0bqhYRLTzvU/u8CzFSehVEgGM4jRKS7kUxHKLegFLQvbmF5lXwAJdiMFLKnoKAUzn4xVEbelNxiTYbVA0yPv9g4TpkiGsxuO4aOVYZhx5wllbNLzSvx/rCExCmSeB513VInsRgrMvBhfdqS9UX+Wr/4FN7S0ioP6q9g6/0cdgNIMIgovg1PkpLwJGQSgA5WnHjPRGBZ10JkjcxGKty+F54t89OYF2SvC9QTMsEpvt9s3DXcOuFEkdAFQnOEFLV22Vqh4LMNhbUAxLPgQNMiMFYk8P1k6ITUhmIz3ILuOPyqQmtVg2kqGECZ7ySxZEgOoNovx+sPihNicFYkcMnMbQQgHekhFuHD8C0D0dQecVOvYqj3ogSiCAmxWCMy+GRGHVlxieHBEz6IMRuzDWanGpc0CcasyTngpgWgzEqh6vQuRcIOCkJcndiTqdez2lc1SoXICtyKogNMRijcsw2Hk5BRqtSWooEcn/WWkvyQo4KgWOZ7AcpQQ4JfNd2tDUliC0xGGNyZLiPEdRhn5RMI4naB1GCnPVdEJtiMEbk4J1v3n0Fl3AKIJUUgQ8c0DVcCybUW6EGDuGGxRPDlYtgmV4FsS0G07ccc43GOQJxGxzBq09S0k3bPxjfmGk0RtWm41WnCx1El120vHcriAsxmL7kcL4ylVHbgy9kkWoRqQLdQXTuXBC6eXK44iR970uO2YWHTXdPMnc/FN+ZebAwjohuOmwd7qKzICvPWzdQiB3lJylvjRwfHgVH9CyHqzqjvastL8bRmJtxHLXrJ4ffOQuOmJlvTG4VxLUYTE9y6PwXxATYxnFzXN5w2rvmqP5I2ShIFmIwXcvh7InlaDkxBGYbC+pNi2NgET6TjhLPujxNyILwxyzEYLqWY66xMGF70Bo/KQ4fTC5FMTrHUR3iNL3Kmq7kcJFOZRVCQ8CJII7TqyzpSg7bq1NRjP6xLQinVzLBd4tQB3Z8hlwfzo9ieA9vjvEmGViCTz1ii+wvxnhAR5Gj3cJATbBFLL6NY7tId7U5mCUdRQ6edg62aC/Xno9imKW9YYp1sMTatRBBs68cHDVsrU7pe7zjPoY1DiVwnh8+YIcaL9BAwOwrh82oIQkvRzHswdGYHz7to8Lm0Y2QAbOnHDajhu6sHC5PQsQq/PAhsFSgqwWakKPHnnJYixoq1Bet5TxLTlYqN3g1ECwQcvTYVQ6rUUOFeog4hTsOrNQfHD14mkqA7CqHraih06lYZzhH1x8SrZzsC3Xlasd9Dmv7GurJdbLyThkimTHbaE7ZOHLb776HPsjlGQd2/CpP57MwgJ2vBoZIplACF4WEe6YnmyBKnrtVhx6wvsncIzsaYKPI4tE58cBS9nBKy2fwwTDq9b3AJ/kgILbJ0R5Vab6HimdKQcQLDh8QN0zvfXDP1eoLOQoBsU0OgdL44X2OGrEI9wcuzm1ED5VyvA8BsU0OQqyBYWLU8A8b0UNRCym12iSHjZQqRg0/sRU9QkqtNslhJaWSYD58R4xgJXoElFptksNCSlX36XrfyGb0xiCR6baSYFKrdTn4ui7TKRUBWunniZiDSBhfXl9ptbK9a8QQ63JIKWtgED5rHLtu/ae9q232UJTA5AwEwMu0ioThXBHjhl9OIJJ3wSAqVatBAKzLgXzrqVk+gUgu4MIczFLysVeqW7QcXG+Y7LXhlOrEcDlGjpzQPr9v+Ly57s/LN1qOVqtlNGq0CIyG6Yh9TKdWan8rs3shTaHlMP0HQYz1Rv4QdTAJYu6L8rWaQ5wGgyQS4t5GzuBVK5MbgujD/ep90o4cBotxrjfixl8+IUJjrxt36ea9KBemi/FYb+QZeR8MIlqQ67pDtF4YPhEGFKNGTlGvXR0Moor8EuSYAyhkFcjYdeRqd1R0JMd4iQZhZWXwhVoTl9Aqqf+FQSRkUY/u862PCGlJ5bRLApJFmSRLH/7/QBTSAOpnOY0q9BsDO6s7DqtUfEVK69c6d8sBkupNac4N7sJd3Pq18aGnpWfQqhHqwr+kHinV1ZVvShu+SyepHb8syiT+vS2Q6hcJHww90cOo1deX9Eeku4gHF6M03cFHC+YWHi6ZSrMlYamT37c2J3kSPOMA8B/AoBxcjLMMq8jNZ+IMgqytkhxsC2DwqbQVfS+eNozPpFwieA5X3l5eIr1EKe+iGKhHWfZHvUT8RjUihxD7ZgFeo9IqPNrFM3tPnn0tltQb8kstg07ViDtzIStIp2mkJMVz1HrOEWZR/d/UBYhbf/v4lTpEdoBrRiyBCQxPOHHNATDIF41kkCg7GTqgpB4DoyodG01FgeTgzRhRXkISv0JzU5lKkGPUj4FKUEy0KCqi3FOiNK8MLY/qRYKig7QIEY3RyW3LjxPIKTwXeEItEty7MvRk4oeqZoKCoqKG0WOzed4IZDlKYAhVc0DO0dFELSI0iyoJtSjesLWG0Xfzs2Wv642uKLokERsDcQNjTZKpK0NPg78DL7KZKEdnqHRLjqeFO0QKQZSjO3ThHlOtYmBUjoEjFnfAPeJlqhWjSMiwHItgiIHXJRQIHUU+ePub6xAQmGDc61kjplX9QnSJa5FQ0ixuRAWD5HlOsgCDRyOPDLWgoJQQ5b0PfuNJ7if9Iea7H8okQrd5G+LIUKHSqs1wk52E2wEs+ZrspF2EHCNI0iMwxJG3Cxs51tFLvnmuQxBLYArz9384RaAw2y4QBYF2HfL2N7fHS1/mLkVBk520lHM5TF/c/uax5xABFuTc6urAVJ4E4SZBs7fMktGBDa4RSGZblF8rct2xFYJqrgR5YfgKirxHDj5UDwaJkWMLuRLE7DUUnQ7b8BVheh16qBrl2EZOBFHLuEYnX+40bCNPtDcB0dz4Ti7IY1G+A0qQZysDXq9ioeFr7/I++VLLQS0wWji99e4ziGyHe7J83QcxPfnS5AM3K9qzchOzUwqHohy7srYPcgk8w/i1dwbn7mZFO3JIs4XT7/z+KkT2gOj6D4ee1sAnDF97p9Yscz8zWctx+ABMmxw/z63rMXrsDYL05kxIewiC2Xv8QriGQsvRvo/abBj87Rg99qOEQBPgA4avKAvlGor1lnXT114Nf/cpRPaDaj7UHwjJBTBIKNdQbDjPYfbaq5hadYiqP6785nIVMsJGShXKtXfrcpi+9oo5/YMnENkfkphZeiVa0vzScgJ1CIBNJwFly+zd4Rw54oZgB6gNwitDT8YhA8jwxh/vb+T59N9GNh+TRZwEw1S+E2uPTiCEMderVzONxiiYvtiSKJhr7zbJYXpJlzn159+o+iN26u6L2p12vXqFKIynVEKKSQiEbfM7Z+YfTqIAo6sX0x+9Bvc/OgIh8NYptQb7HsChN9p/v/pLgMVPAT7/DIxAIM7+2MHdIRw1EIRZGREWT1beKUMgbL+fQ6dWZFQOjh4zH78Kz5bzO+zk6O8CnBlDOPrezv986WcA/3GT4P5PoS94c1B9sP4G01HD8JgxtVd2DQJi27vVxqoVL+vmeeXq2z9C+Mt/2l0MZvC3AL739wh/9KO+h2mXbA+Ls1JrMIGsUqXs+CiXkm6CYTh65HHlisX4Vhf3nL6nfu/3/q4/QQjQWucu72vYqDUkwSehrFKl7CjH4QPiBljg9678EvLE6T+FrsRY/74/a0vSB9aiRyJhzEbUQEAr75ks2VGO9tW3WAfD8L7HiIogeeEPxnqPAPy9adHeCzaiB0cNSWS+XUUV4pyOQ2DsWiETgZXiqvqD5VykVyf+sF1H9MrhN9r/jj4omW5rR0lTYIHQCvGUXeVoPwnMRw8uzvOQXvHqVL+U+vx3qH0PY9FjbqF51UoRzlFjuDwJAbLn2qqt6JGH9GroVP9XuPUTedpQzUT0mHnQrBHROFgg1KjB7CmHrejBcHr15rEXENkHbPU1nFqvTglLO+88EDCw5duN7LsrZyt6cHp19sMlb+uPpZ/5cRGPWgW60M9IH1Vn3LaSTkE7aoS2fLuRfeWwGT1YDBbERz6fgb5Z/G/oH4LBlZXDPZ33mF9oXueOX7BBwLVGSkf9HLaiB8OplY8F+v1/gb753z5bSVLUi9R1Ow8X4FaWbdcIudZI6UiOdvQwv2uewkdqfWsvWVG+zv079Mz9n5LutzIBoTzXTWo132yO2SrANQWIGkzHnYCHEjGOFu9b4ALdN0H+7W8IvurhDf6VbkIEc3SRWs01mxdki6zuVpPAs1AAOpZDTygBshpKfROEn/wf/1V3gnALO3+PqaixTgerViwGtWgSrEI3Qy7CN9JVD/nJSuWGreI8xTdBHn8G8I9/QR2d13j0KcE//DHp7zENEu45dE2nUrbFUOkUZxBQELre6eJ1cyHpntlLTrbz2cevwv/85HXwCd4152bEoVMAb420f3S85PvoU9DnOB6ZWJ3aAwJR/vHjVxa3fp2Lb6s1RvrfJzwbYg/VbvS0DTy7sHBJVYnWJ4Y/vjcA//XhG7D88wQiup3k4oePj0xu/Bov19pclXoJ3Tw5XPFuxq9Nejqa5yK9YrjN5Ns/+TJOMFknOZN+xhF8tvFwyokYBUunUno+t3oogfOm7xPcCRbjTyZ+katWd1uoJV29YsW9UmsdtjVwAK9OtY8xFIue5dCrVxL7O9LTIdxq8q2//lpvFhY6iqjdbk6jEJUYllpCtv0niYJuEdmLvltPXdUfKVx/TE+8Bgv/+goUCb4QiB8Qrps1eSg0SjwbwmDobum/L1sx21jgGmQMHNJQctxXkoRerA+8LuH0xSf6DH5WFFUQI3Iws43mlOmBxJ0w/dERmPn4lVyP/dkNrrOqF5eVINl3CBdREGNyNJvNwVW1/+EqF95IaKlW5btPlRRPvKyvMElGT5SP3oICYEwORh+ske6Kxa2kknyu9kfylm5x+lT5zgqc+r7/I4yKIohROZisBUnhmuSzf34VvnxwAHyGpRj5/lMlxRMv0qdOKYIgxuVgfBGE+ULJwZL4FE3SKMEXi+b5gp/QBbEiB+OTICksCrek/N9/HtKyuOTX1RIsi5B3IbYSsiDW5GB8FCTl2dcIXzQOKlkOKmkOwvLjxFgK9pqqGd4cfqFrBxZhqPosVylTtyDi+IlKObiTgVblYHwWZCc4uvCyMMuy/HOhP2eRdoLf8Hz3yJG3ZfvjUEv/FbIIuxGiINblYNYEuW3tsH/EC0ITxIkcKVnspEfcEpIgTreV+TwAN7JBJFj40JUePRoAznsuRo5VxvlEmYt290gbHoyB4O5u8FAEyaQhiY9atidY2D8wVXjUQwjVz/rEcPm8y6gdgiBOa46dmHmwMK7y1CDCsH/QTT7Bt/GgkusjBnmuQTKXg8nbcq/3qGjBB9F2G4Yw02iOurzWOa+CeCFHCkcRIXDM9mSTsNkeLXYiCrI/XsnBcBSB5zRu+i70AlDXU8+7GJ3jXBCgyRPDFSdHq03gnRwpeogA3ysRU6294RSKpehxdm0UZHe8lSOF78xeu1C+BJF1eHmWr8Tmm3/7nQwy12ieA6QJV+lsXgTxXo6UKEkbk1JsZL7ZrJJaFImCvCQ3cqRoSSC5kMV59UxBmFa/3DokYLJsaYZUFoIMJOJy2dOZWLmTI4VfyNZzulSAwr3rQrsfXAvC0h/ydGhcbuVI0atbrVYtsGiihKC7plOnTomCtMm9HBvJuShaCABR92GSufONWQ8FCUqOjaSigBQ1TOCMb4W8viWLsE4Id0nAHR9HbhZdkGDl2Iq+V6QFVQJZU0/n04hUdboTr154BJwmgPtCQP14OR/D0bIQhASe9+FhURg5dkIX9S9gUBX1VSBZYmna/4TU512/GRb5FxZA/bLEElCrtQQHk3reBzFnIMgid21n/XMrtBydoNOzPTgMsOTrUqRJiihIlCPSMVkIcrLyThkyIrzpyxFr8FNcH1JzdIqTSGbaxRsjR6RrXEQQtXBycWR4eBIyJMoR6QmbgvggBhPliPSMDUF8EYOJNUekZzbUIGb2bIgu+yIGEyNHpG/WLi6a6meipb6Y81hlHDwiyhExQj+C+CgGE+WIGKMXQXwVg4lyRIzSjSA+i8FEOSJWmJlvTKIQux5E810MJsoRscZuguRBDCbKEbHKVkHyIkYk4gQWZLbxkHiiJUQikc3MNRrnIGf8Cst53SPNgl1XAAAAAElFTkSuQmCC";
// EXTERNAL MODULE: ./node_modules/.pnpm/@headlessui-float+react@0.11.0_6ua77m5y4f7boyepigndzh7zzy/node_modules/@headlessui-float/react/dist/headlessui-float.mjs + 4 modules
var headlessui_float = __webpack_require__(5081);
// EXTERNAL MODULE: ./node_modules/.pnpm/@headlessui+react@1.7.13_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/components/menu/menu.js + 1 modules
var menu = __webpack_require__(79883);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-icons@4.8.0_react@18.2.0/node_modules/react-icons/hi/index.esm.js
var hi_index_esm = __webpack_require__(55117);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-icons@4.8.0_react@18.2.0/node_modules/react-icons/io5/index.esm.js
var io5_index_esm = __webpack_require__(52956);
;// CONCATENATED MODULE: ./src/web/components/PreviewBox.tsx











const PreviewBox = (props)=>{
    const { title , data , handlePreview , state , btnIcon , btnAction , btnText , btnDisabled =false , contractAddr , showInvoiceImage  } = props;
    const invoice = title === 'receivable' ? data == null ? void 0 : data.invoice : data;
    const lState = state.toLowerCase();
    const stateTextColor = lState === 'tbc' ? '#597EFF' : lState === 'finalised' ? '#6E747A' : lState === 'overdue' ? '#EC364C' : lState === 'paid' ? '#13C57B' : '#FFAD32';
    const [isCopied, onCopy] = useCopyClipboard();
    const totalPrice = title === 'receivable' ? data == null ? void 0 : data.amount : invoice == null ? void 0 : invoice.totalValue;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "bg-white p-5 rounded-md w-full",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "rounded-md bg-[#F8F8F9] cursor-pointer w-full",
                    onClick: ()=>handlePreview(data),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: (0,tw_merge/* twMerge */.m)('flex justify-end h-6 items-center rounded-t-md bg-[#FFAD32]', lState === 'tbc' && `bg-[#597EFF]`, lState === 'finalised' && `bg-[#6E747A]`, lState === 'paid' && `bg-[#13C57B]`, lState === 'overdue' && `bg-[#EC364C]`),
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "pr-3 font-semibold text-[12px] text-white uppercase",
                                children: state
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "py-10 pl-5",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "flex items-center gap-2.5",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: "text-black font-semibold text-lg uppercase",
                                        children: [
                                            title,
                                            " ",
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                className: "font-normal",
                                                children: [
                                                    "#",
                                                    invoice.id || data.id
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex gap-5 pt-10 font-semibold items-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "text-[#BCC1C5] text-[12px] mb-1",
                                                    children: "Invoice from"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "text-black text-lg",
                                                    children: invoice.sellerName
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "text-[#BCC1C5] text-[12px] uppercase mb-1",
                                                    children: [
                                                        "ABN: ",
                                                        invoice.sellerAbn
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InvoiceFromToIcon, {
                                                fillColour: stateTextColor
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "text-[#BCC1C5] text-[12px] mb-1",
                                                    children: "Invoice To"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "text-black text-[18px]",
                                                    children: invoice.buyerName
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "text-[#BCC1C5] text-[12px] uppercase mb-1",
                                                    children: [
                                                        "ABN: ",
                                                        invoice.sellerAbn
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "pt-7 flex gap-[18px] items-center font-semibold",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "text-[#BCC1C5] text-[12px] uppercase",
                                            children: "Invoice date"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "text-black text-[18px]",
                                            children: dayJsAdapter == null ? void 0 : dayJsAdapter.format(dayJsAdapter.date(new Date(Number(invoice.invoiceDate) * 1000)), 'normalDate')
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "pt-7 flex gap-[40px] items-center font-semibold",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "text-[#BCC1C5] text-[12px] uppercase",
                                            children: "Due date"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            className: "text-black text-[18px] flex-1",
                                            children: [
                                                dayJsAdapter == null ? void 0 : dayJsAdapter.format(dayJsAdapter.date(new Date(Number(invoice.dueDate) * 1000)), 'normalDate'),
                                                lState === 'finalised' || lState === 'paid' ? '' : getDayDiffs(invoice.dueDate) > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "text-[#D8DCDE] pl-2",
                                                            children: "I"
                                                        }),
                                                        " due in ",
                                                        getDayDiffs(invoice.dueDate),
                                                        " days"
                                                    ]
                                                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "text-[#D8DCDE] pl-2",
                                                            children: "I"
                                                        }),
                                                        " Overdue ",
                                                        getDayDiffs(invoice.dueDate),
                                                        " days"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "pt-7 flex gap-[20px] items-center font-semibold",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "text-[#BCC1C5] text-[12px] uppercase",
                                            children: "total price"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "text-black text-[18px]",
                                            children: maskedCurrency.resolve(units_lib_esm.formatEther(totalPrice || '0'))
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                lState === 'finalised' ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "mt-5 flex justify-center gap-5",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* FaExternalLinkAlt */.CkN, {
                            className: "cursor-pointer"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(io5_index_esm/* IoCopyOutline */.mcF, {
                            className: "cursor-pointer"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* FaExternalLinkAlt */.CkN, {
                            className: "cursor-pointer"
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "pt-2 flex justify-between",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                            disabled: btnDisabled,
                            className: (0,tw_merge/* twMerge */.m)('h-9 w-[90%] fill-white border-0 flex items-center justify-center gap-2 rounded-2xl bg-[#7918F5] text-white text-sm font-medium', btnDisabled && 'cursor-not-allowed opacity-50'),
                            onClick: ()=>btnAction(data),
                            children: [
                                btnIcon,
                                " ",
                                btnText
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(menu/* Menu */.v, {
                            children: ({ open  })=>{
                                /*#__PURE__*/ return (0,jsx_runtime.jsxs)(headlessui_float/* Float */.bv, {
                                    placement: "top-end",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(menu/* Menu.Button */.v.Button, {
                                            className: (0,tw_merge/* twMerge */.m)('bg-[#ECEDEE] rounded-full flex border-0 items-center h-9 p-2.5 cursor-pointer', 'hover:bg-[#7918F5] hover:text-white', open && 'text-white bg-[#7918F5]'),
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(hi_index_esm/* HiOutlineDotsHorizontal */.Ws$, {})
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(menu/* Menu.Items */.v.Items, {
                                            className: "mb-2 w-56 px-1 py-2 flex flex-col gap-2 text-[#6E747A] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                                            children: [
                                                title === 'receivable' ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(menu/* Menu.Item */.v.Item, {
                                                            children: ({ active  })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                                    className: `${active ? 'bg-violet-500 text-white' : ''} group flex w-full border-0 items-center rounded-md px-2 py-2 text-sm`,
                                                                    onClick: showInvoiceImage,
                                                                    children: [
                                                                        active ? /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* FaExternalLinkAlt */.CkN, {
                                                                            className: "mr-2 h-5 w-5",
                                                                            "aria-hidden": "true"
                                                                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* FaExternalLinkAlt */.CkN, {
                                                                            className: "mr-2 h-5 w-5",
                                                                            "aria-hidden": "true"
                                                                        }),
                                                                        "Invoice Image"
                                                                    ]
                                                                })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("hr", {
                                                            className: "w-full px-0 text-[#ECEDEE]"
                                                        })
                                                    ]
                                                }) : (invoice == null ? void 0 : invoice.invoiceLink) && /*#__PURE__*/ (0,jsx_runtime.jsx)(menu/* Menu.Item */.v.Item, {
                                                    children: ({ active  })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                            className: `${active ? 'bg-violet-500 text-white' : ''} group flex w-full border-0 items-center rounded-md px-2 py-2 text-sm cursor-pointer`,
                                                            href: invoice.invoiceLink,
                                                            children: [
                                                                active ? /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* FaExternalLinkAlt */.CkN, {
                                                                    className: "mr-2 h-5 w-5",
                                                                    "aria-hidden": "true"
                                                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* FaExternalLinkAlt */.CkN, {
                                                                    className: "mr-2 h-5 w-5",
                                                                    "aria-hidden": "true"
                                                                }),
                                                                "Invoice Link"
                                                            ]
                                                        })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(menu/* Menu.Item */.v.Item, {
                                                    children: ({ active  })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                            className: `${active ? 'bg-violet-500 text-white' : ''} group flex w-full border-0 items-center rounded-md px-2 py-2 text-sm`,
                                                            onClick: ()=>onCopy(contractAddr),
                                                            children: [
                                                                active ? /*#__PURE__*/ (0,jsx_runtime.jsx)(io5_index_esm/* IoCopyOutline */.mcF, {
                                                                    className: "mr-2 h-5 w-5",
                                                                    "aria-hidden": "true"
                                                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(io5_index_esm/* IoCopyOutline */.mcF, {
                                                                    className: "mr-2 h-5 w-5",
                                                                    "aria-hidden": "true"
                                                                }),
                                                                "Copy Address"
                                                            ]
                                                        })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("hr", {
                                                    className: "w-full px-0 text-[#ECEDEE] bg-[#ECEDEE]"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(menu/* Menu.Item */.v.Item, {
                                                    children: ({ active  })=>{
                                                        /*#__PURE__*/ return (0,jsx_runtime.jsxs)("a", {
                                                            href: getExplorerLink((data == null ? void 0 : data.txHash) || (invoice == null ? void 0 : invoice.txHash) || ''),
                                                            target: "_blank",
                                                            className: `${active ? 'bg-violet-500 text-white' : ''} group flex w-full items-center rounded-md px-2 py-2 text-sm cursor-pointer`,
                                                            children: [
                                                                active ? /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* FaExternalLinkAlt */.CkN, {
                                                                    className: "mr-2 h-5 w-5",
                                                                    "aria-hidden": "true"
                                                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* FaExternalLinkAlt */.CkN, {
                                                                    className: "mr-2 h-5 w-5",
                                                                    "aria-hidden": "true"
                                                                }),
                                                                "Etherscan"
                                                            ]
                                                        });
                                                    }
                                                })
                                            ]
                                        })
                                    ]
                                });
                            }
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_PreviewBox = (PreviewBox);

;// CONCATENATED MODULE: ./src/web/pages/GetPaid/ViewBox.tsx






const ViewBox = ({ showInvoiceImage  })=>{
    const [isCopied, onCopy] = useCopyClipboard();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "flex items-center justify-center py-[24px] w-full",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "text-[14px] gap-[5px] w-[80%]",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center justify-between mb-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "text-[#6E747A]",
                            children: "Invoice link"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "text-[#0D1821] cursor-pointer",
                            onClick: showInvoiceImage,
                            children: "Click to check"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex flex-row items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "text-[#6E747A]",
                            children: "Contract Address"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-[#0D1821] mr-2",
                                    children: shortenAddress(receivableDelegateAddress)
                                }),
                                isCopied ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ai_index_esm/* AiOutlineCheck */.bzc, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "cursor-pointer",
                                    onClick: ()=>onCopy(receivableDelegateAddress),
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyIcon, {})
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const GetPaid_ViewBox = (ViewBox);

;// CONCATENATED MODULE: ./src/web/assets/svg/arrow-left.svg
const arrow_left_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjE4NzM0IDEyLjk5OThMMTAuODQzMiAxNy42NTU3TDkuNDI4OTQgMTkuMDY5OUwyLjM1Nzg3IDExLjk5ODhMOS40Mjg5NCA0LjkyNzczTDEwLjg0MzIgNi4zNDE5NUw2LjE4NTI2IDEwLjk5OThMMjEuNSAxMC45OTk4TDIxLjUgMTIuOTk5OEw2LjE4NzM0IDEyLjk5OThaIiBmaWxsPSIjNkU3NDdBIi8+Cjwvc3ZnPgo=";
;// CONCATENATED MODULE: ./src/web/pages/GetPaid/InvoiceImageModal.tsx




const InvoiceImageModal = ({ onModalClose  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* Dialog */.V, {
            open: true,
            onClose: onModalClose,
            as: "div",
            className: "fixed inset-0 z-50 flex bg-[#000000]/40 items-center justify-center overflow-y-auto",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col bg-white text-black my-6 mt-16 py-6 px-6 rounded-lg max-w-xl min-w-[512px]",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* Dialog.Title */.V.Title, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            src: arrow_left_namespaceObject,
                            className: "cursor-pointer",
                            onClick: onModalClose
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex justify-center text-sm text-gray-500 pt-6 overflow-y-auto",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            src: PayCard_namespaceObject
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const GetPaid_InvoiceImageModal = (InvoiceImageModal);

;// CONCATENATED MODULE: ./src/web/pages/GetPaid/index.tsx






















const GetPaid = ()=>{
    const { account  } = (0,dist/* useWeb3Provider */.xo)();
    const isIdle = (0,useIdle/* default */.Z)(); // default one minute
    const [isOpenClaimModal, setOpenClaimModal] = (0,react.useState)(false);
    const [isOpenTransferModal, setOpenTransferModal] = (0,react.useState)(false);
    const [showInvoiceImageModal, setShowInvoiceImageModal] = (0,react.useState)(false);
    const [isPreview, setIsPreview] = (0,react.useState)(false);
    const [selectedStatus, setSelectedStatus] = (0,react.useState)(getPaidStatuses[0]);
    const [selectedTime, setSelectedTime] = (0,react.useState)(dateFilterOptions[0]);
    const [selectedReceivable, setSelectedReceivable] = (0,react.useState)();
    const [skip] = (0,react.useState)(0);
    const [pageSize] = (0,react.useState)(50);
    const { textValue  } = (0,react.useContext)(SearchContext);
    const [queryResult, reexecuteQuery] = (0,urql_es/* useQuery */.aM)({
        query: ReceivablesQuery,
        variables: {
            pageSize,
            skip,
            account
        },
        requestPolicy: 'cache-and-network',
        pause: !!textValue
    });
    const { data: receivableList , fetching: isFetching  } = queryResult;
    const [searchResult, reexecuteSearch] = (0,urql_es/* useQuery */.aM)({
        query: ReceivablesSearch,
        variables: {
            pageSize,
            skip,
            searchText: `'${textValue}'`
        },
        requestPolicy: 'cache-and-network',
        pause: !!textValue
    });
    const { data: receivableData , fetching: isSearching  } = searchResult;
    const filteredReceivables = (receivables)=>{
        return receivables == null ? void 0 : receivables.filter((recv)=>{
            var _recv_owner;
            return (recv == null ? void 0 : (_recv_owner = recv.owner) == null ? void 0 : _recv_owner.toLowerCase()) === (account == null ? void 0 : account.toLowerCase());
        });
    };
    let receivables = textValue ? filteredReceivables(receivableData == null ? void 0 : receivableData.receiableSearch) : receivableList == null ? void 0 : receivableList.receivables;
    receivables = receivables == null ? void 0 : receivables.map((recv)=>{
        const status = recv.state === '0' ? 1 : recv.state === '1' ? getDayDiffs(recv.invoice.dueDate) < 1 ? 0 : 2 : 3;
        return (0,_extends/* default */.Z)({}, recv, {
            status
        });
    }).filter((recv)=>{
        if (selectedStatus.value === '') return true;
        return (recv == null ? void 0 : recv.status) === Number(selectedStatus.value);
    }).filter((recv)=>{
        if (selectedTime.value === '') return true;
        return Number(recv == null ? void 0 : recv.invoice.dueDate) >= currDate.unix() && Number(recv == null ? void 0 : recv.invoice.dueDate) < dayJsAdapter.addDays(currDate, Number(selectedTime.value)).unix();
    });
    var _receivables_filter;
    const activeReceivables = (_receivables_filter = receivables == null ? void 0 : receivables.filter((recv)=>{
        return (recv == null ? void 0 : recv.state) !== '2';
    })) != null ? _receivables_filter : [];
    var _receivables_filter1;
    const finalisedReceivables = (_receivables_filter1 = receivables == null ? void 0 : receivables.filter((recv)=>{
        return (recv == null ? void 0 : recv.state) === '2';
    })) != null ? _receivables_filter1 : [];
    (0,react.useEffect)(()=>{
        if (textValue) {
            reexecuteSearch({
                requestPolicy: 'network-only'
            });
        } else {
            reexecuteQuery({
                requestPolicy: 'network-only'
            });
        }
    }, [
        textValue
    ]);
    (0,react.useEffect)(()=>{
        if (isFetching) return;
        const timerId = setTimeout(()=>{
            if (isFetching || isIdle) return;
            reexecuteQuery({
                requestPolicy: 'network-only'
            });
        }, TIMER_INTERVAL);
        return ()=>clearTimeout(timerId);
    }, [
        isFetching,
        reexecuteQuery,
        isIdle
    ]);
    (0,react.useEffect)(()=>{
        if (isSearching) return;
        const timerId = setTimeout(()=>{
            if (isSearching || !textValue || isIdle) return;
            reexecuteSearch({
                requestPolicy: 'network-only'
            });
        }, TIMER_INTERVAL);
        return ()=>clearTimeout(timerId);
    }, [
        isSearching,
        reexecuteSearch,
        textValue,
        isIdle
    ]);
    const handlePreview = (recv)=>{
        setIsPreview(true);
        setSelectedReceivable(recv);
    };
    const handlePreviewClose = ()=>{
        setIsPreview(false);
        setOpenClaimModal(false);
        setOpenTransferModal(false);
        setSelectedReceivable(undefined);
    };
    const handleClaim = (recv)=>{
        setSelectedReceivable(recv);
        setOpenClaimModal(true);
    };
    const handleTransfer = (recv)=>{
        setSelectedReceivable(recv);
        setOpenTransferModal(true);
    };
    const stateConverter = (state, dueDate)=>{
        return state === '0' ? getDayDiffs(dueDate) > 0 ? 'unpaid' : 'overdue' : state === '1' ? 'paid' : 'finalised';
    };
    const toggleInvoiceImageDisplay = ()=>{
        setShowInvoiceImageModal(!showInvoiceImageModal);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "p-12",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_PageHeader, {
                title: "Get paid",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Selection, {
                            selected: selectedTime,
                            onSelected: setSelectedTime,
                            options: dateFilterOptions,
                            className: "min-w-[200px]"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Selection, {
                            selected: selectedStatus,
                            onSelected: setSelectedStatus,
                            options: getPaidStatuses,
                            className: "min-w-[150px]"
                        })
                    ]
                })
            }),
            (activeReceivables == null ? void 0 : activeReceivables.length) === 0 && (finalisedReceivables == null ? void 0 : finalisedReceivables.length) === 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "text-[#6E747A] flex flex-col h-full items-center justify-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        src: no_data_namespaceObject
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: "No data ."
                    })
                ]
            }),
            (activeReceivables == null ? void 0 : activeReceivables.length) > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                id: "active",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "py-8",
                        children: [
                            "Active (",
                            activeReceivables == null ? void 0 : activeReceivables.length,
                            ")"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "grid grid-cols-2 2xl:grid-cols-3 4xl:grid-cols-4 gap-4",
                        children: activeReceivables == null ? void 0 : activeReceivables.sort((a, b)=>{
                            if (!a.status || !b.status) return 0;
                            return a.status - b.status || Number(a.invoice.dueDate) - Number(b.invoice.dueDate);
                        }).map((recv, idx)=>{
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(components_PreviewBox, {
                                title: "receivable",
                                data: recv,
                                handlePreview: handlePreview,
                                btnAction: recv.state === '1' ? handleClaim : handleTransfer,
                                btnText: recv.state === '1' ? 'Claim' : 'Transfer',
                                state: stateConverter(recv.state || '0', recv.invoice.dueDate),
                                btnIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SendIcon, {}),
                                contractAddr: receivableDelegateAddress,
                                showInvoiceImage: toggleInvoiceImageDisplay
                            }, idx);
                        })
                    })
                ]
            }),
            (finalisedReceivables == null ? void 0 : finalisedReceivables.length) > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                id: "archived",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "py-8",
                        children: [
                            "Archived (",
                            finalisedReceivables == null ? void 0 : finalisedReceivables.length,
                            ")"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "grid grid-cols-2 2xl:grid-cols-3 4xl:grid-cols-4 gap-4",
                        children: finalisedReceivables == null ? void 0 : finalisedReceivables.sort((a, b)=>{
                            if (!a.status || !b.status) return 0;
                            return a.status - b.status || Number(a.invoice.dueDate) - Number(b.invoice.dueDate);
                        }).map((recv, idx)=>{
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(components_PreviewBox, {
                                title: "receivable",
                                data: recv,
                                handlePreview: handlePreview,
                                btnAction: recv.state === '1' ? handleClaim : handleTransfer,
                                btnText: recv.state === '1' ? 'Claim' : 'Transfer',
                                state: stateConverter(recv.state || '0', recv.invoice.dueDate),
                                btnIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SendIcon, {}),
                                contractAddr: receivableDelegateAddress,
                                showInvoiceImage: toggleInvoiceImageDisplay
                            }, idx);
                        })
                    })
                ]
            }),
            isPreview && /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Modal, {
                isOpen: isPreview,
                onClose: handlePreviewClose,
                showCloseIcon: true,
                title: '',
                closeOnOverlayClick: true,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex justify-center text-sm text-gray-500 pt-6",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            src: RecvCard_namespaceObject
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(GetPaid_ViewBox, {
                        showInvoiceImage: toggleInvoiceImageDisplay
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex justify-between w-full",
                        children: [
                            (selectedReceivable == null ? void 0 : selectedReceivable.state) === '1' && /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Button, {
                                onClick: handlePreviewClose,
                                className: "w-full gap-2 fill-white inline-flex items-center justify-center px-4 py-2 bg-[#7918F5] text-base font-medium text-white hover:bg-#7918F5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7918F5]",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SendIcon, {}),
                                    " Claim ",
                                    maskedCurrency.resolve((selectedReceivable == null ? void 0 : selectedReceivable.amount) || '')
                                ]
                            }),
                            (selectedReceivable == null ? void 0 : selectedReceivable.state) === '0' && /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Button, {
                                onClick: ()=>setOpenTransferModal(true),
                                className: "w-full gap-2 fill-white inline-flex items-center justify-center px-4 py-2 bg-[#7918F5] text-base font-medium text-white hover:bg-#7918F5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7918F5]",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SendIcon, {}),
                                    " Transfer ",
                                    `${showInvoiceImageModal}`
                                ]
                            })
                        ]
                    })
                ]
            }),
            isOpenClaimModal && /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Modal, {
                isOpen: isOpenClaimModal,
                onClose: ()=>setOpenClaimModal(false),
                title: 'Claim',
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GetPaid_Claim, {
                    isPreview: isPreview,
                    claimAmount: selectedReceivable == null ? void 0 : selectedReceivable.amount,
                    onClose: ()=>setOpenClaimModal(false),
                    recvId: selectedReceivable == null ? void 0 : selectedReceivable.id
                })
            }),
            isOpenTransferModal && /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Modal, {
                isOpen: isOpenTransferModal,
                onClose: handlePreviewClose,
                title: 'Transfer',
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GetPaid_Transfer, {
                    isPreview: isPreview,
                    onClose: ()=>setOpenTransferModal(false),
                    recvId: selectedReceivable == null ? void 0 : selectedReceivable.id,
                    amount: selectedReceivable == null ? void 0 : selectedReceivable.amount
                })
            }),
            showInvoiceImageModal && /*#__PURE__*/ (0,jsx_runtime.jsx)(GetPaid_InvoiceImageModal, {
                onModalClose: toggleInvoiceImageDisplay
            })
        ]
    });
};
/* harmony default export */ const pages_GetPaid = (GetPaid);

// EXTERNAL MODULE: ./node_modules/.pnpm/ethereum-multicall@2.16.1/node_modules/ethereum-multicall/dist/esm/index.js + 6 modules
var dist_esm = __webpack_require__(2691);
;// CONCATENATED MODULE: ./src/web/pages/Pay/ViewBox.tsx






const ViewBox_ViewBox = ({ invoice  })=>{
    const [isCopied, onCopy] = useCopyClipboard();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "text-[14px] gap-[5px] w-[80%]",
        children: [
            (invoice == null ? void 0 : invoice.invoiceLink) && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-between mb-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "text-[#6E747A]",
                        children: "Invoice link"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                        href: invoice == null ? void 0 : invoice.invoiceLink,
                        target: "_blank",
                        className: "text-[#0D1821]",
                        children: invoice == null ? void 0 : invoice.invoiceLink
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-row items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "text-[#6E747A]",
                        children: "Contract Address"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "text-[#0D1821] mr-2",
                                children: shortenAddress(invoiceDelegateAddress)
                            }),
                            isCopied ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ai_index_esm/* AiOutlineCheck */.bzc, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "cursor-pointer",
                                onClick: ()=>onCopy(invoiceDelegateAddress),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyIcon, {})
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Pay_ViewBox = (ViewBox_ViewBox);

;// CONCATENATED MODULE: ./src/web/pages/Pay/ConfirmModal.tsx













const ConfirmModal_ConfirmModal = (props)=>{
    const { isOpenConfirmModal , onConfirmModalClose , isPreview , invoice , state  } = props;
    const [isLoading, setLoading] = (0,react.useState)(false);
    const [txHash, setTxHash] = (0,react.useState)('');
    const [successText, setSuccessText] = (0,react.useState)('');
    const [failureText, setFailureText] = (0,react.useState)('');
    const { account  } = (0,dist/* useWeb3Provider */.xo)();
    const invoiceDelegatecontract = (0,dist/* useContract */.cq)(invoiceDelegateAddress, InvoiceDelegate_namespaceObject, true);
    const onConfirming = (0,react.useCallback)(/*#__PURE__*/ (0,_async_to_generator/* default */.Z)(function*() {
        if (!invoiceDelegatecontract || !account) return;
        try {
            setLoading(true);
            const tx = yield invoiceDelegatecontract.confirm(invoice == null ? void 0 : invoice.id);
            setTxHash(tx.hash);
            yield tx.wait();
            setSuccessText('You have successfully confirmed');
        } catch (err) {
            setFailureText('Your confirm failed');
        }
    }), [
        invoiceDelegatecontract,
        invoice
    ]);
    const onCloseTxConfirmation = (0,react.useCallback)(()=>{
        setLoading(false);
        setTxHash('');
        setSuccessText('');
        setFailureText('');
    // onConfirmModalClose();
    }, [
        successText
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Modal, {
                isOpen: isOpenConfirmModal,
                onClose: onConfirmModalClose,
                showCloseIcon: isPreview,
                closeOnOverlayClick: isPreview,
                title: isPreview ? '' : 'Confirm',
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex justify-center text-sm text-gray-500 pt-6 overflow-y-auto",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            src: PayCard_namespaceObject
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex items-center justify-center py-[24px] w-full",
                        children: !isPreview ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "text-[#959A9F] w-full",
                            children: "I confirm that the contents of this invoice are correct. I will repay the payment on schedule."
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Pay_ViewBox, {
                            invoice: invoice
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex justify-between w-full",
                        children: [
                            !isPreview && /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Button, {
                                onClick: onConfirmModalClose,
                                className: "w-[45%] gap-2 inline-flex justify-center rounded-2xl items-center px-4 py-2 bg-[#ECEDEE] font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SendIcon, {
                                        fillColour: "black"
                                    }),
                                    " Close"
                                ]
                            }),
                            state && state === 'finalised' ? '' : /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Button, {
                                onClick: onConfirming,
                                className: (0,tw_merge/* twMerge */.m)('w-[45%] gap-2 fill-white inline-flex items-center justify-center px-4 py-2 bg-[#7918F5] text-base font-medium text-white hover:bg-#7918F5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7918F5]', isPreview && 'w-full'),
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SendIcon, {}),
                                    " Confirm"
                                ]
                            })
                        ]
                    })
                ]
            }),
            isLoading && /*#__PURE__*/ (0,jsx_runtime.jsx)(components_WithTxConfirmation, {
                invoiceNumber: invoice == null ? void 0 : invoice.id,
                txHash: txHash,
                closeTxConfirmation: onCloseTxConfirmation,
                className: "min-w-[256px]",
                successText: successText,
                failureText: failureText,
                defaultText: "You are confirming..."
            })
        ]
    });
};
/* harmony default export */ const Pay_ConfirmModal = (ConfirmModal_ConfirmModal);

;// CONCATENATED MODULE: ./src/web/pages/Pay/PaymentModal.tsx

















const PaymentModal = (props)=>{
    const { isOpenPayModal , handlePreviewClose , setOpenPayModal , invoice , weAudBalance , weAudAllowance , isPreview  } = props;
    const { account  } = (0,dist/* useWeb3Provider */.xo)();
    const erc20Contract = (0,dist/* useContract */.cq)(weAUDAddress, erc20Abi, true);
    const invoiceDelegatecontract = (0,dist/* useContract */.cq)(invoiceDelegateAddress, InvoiceDelegate_namespaceObject, true);
    const [isLoading, setLoading] = (0,react.useState)(false);
    const [successText, setSuccessText] = (0,react.useState)('');
    const [failureText, setFailureText] = (0,react.useState)('');
    const [txHash, setTxHash] = (0,react.useState)('');
    const amount = (invoice == null ? void 0 : invoice.totalValue) || '0';
    const formattedAmount = maskedCurrency.resolve(units_lib_esm.formatEther(amount));
    const hasAvaliableAUD = weAudBalance && Number(weAudBalance) > 0;
    const canPay = Number(weAudAllowance) >= Number(amount);
    const handleApprove = (0,react.useCallback)(/*#__PURE__*/ (0,_async_to_generator/* default */.Z)(function*() {
        if (!account || !erc20Contract || !amount) return;
        try {
            setLoading(true);
            const tx = yield erc20Contract.approve(invoiceDelegateAddress, amount);
            setTxHash(tx.hash);
            yield tx.wait();
            setSuccessText('You have successfully approved.');
        } catch (err) {
            setFailureText('Your approval failed');
        }
    }), [
        account,
        erc20Contract,
        amount
    ]);
    const handlePay = (0,react.useCallback)(/*#__PURE__*/ (0,_async_to_generator/* default */.Z)(function*() {
        if (!account || !invoiceDelegatecontract || !amount) return;
        try {
            setLoading(true);
            const tx = yield invoiceDelegatecontract.pay(invoice == null ? void 0 : invoice.id);
            setTxHash(tx.hash);
            yield tx.wait();
            setSuccessText('You have successfully approved.');
        } catch (err) {
            setFailureText('Your approval failed');
        }
    }), [
        account,
        invoiceDelegatecontract,
        amount
    ]);
    const onCloseTxConfirmation = ()=>{
        setTxHash('');
        setLoading(false);
        setSuccessText('');
        setFailureText('');
        setOpenPayModal(false);
    };
    const [isCopied, onCopy] = useCopyClipboard();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Modal, {
                isOpen: isOpenPayModal,
                onClose: handlePreviewClose,
                showCloseIcon: isPreview,
                closeOnOverlayClick: isPreview,
                title: isPreview ? '' : 'Pay',
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex justify-center text-sm text-gray-500 pt-6 overflow-y-auto",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            src: PayCard_namespaceObject
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex items-center justify-center py-[24px] w-full",
                        children: isPreview ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Pay_ViewBox, {}) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex flex-col justify-center items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-[#6E747A] font-normal text-md",
                                    children: "You neet to pay"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-black font-medium text-[24px] pt-1",
                                    children: formattedAmount
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex justify-between w-full",
                        children: !isPreview ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Button, {
                                    onClick: ()=>setOpenPayModal(false),
                                    className: "w-[45%] gap-2 inline-flex justify-center rounded-2xl items-center px-4 py-2 bg-[#ECEDEE] font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(SendIcon, {
                                            fillColour: "black"
                                        }),
                                        " Close"
                                    ]
                                }),
                                !canPay ? /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Button, {
                                    onClick: handleApprove,
                                    disabled: !hasAvaliableAUD,
                                    className: (0,tw_merge/* twMerge */.m)('w-[45%] gap-2 fill-white inline-flex items-center justify-center px-4 py-2 bg-[#7918F5] text-base font-medium text-white hover:bg-#7918F5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7918F5]', isPreview && 'w-full', !hasAvaliableAUD && 'cursor-not-allowed opacity-50'),
                                    children: !hasAvaliableAUD ? /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                                        children: "No Available weAUD in your wallet"
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SendIcon, {}),
                                            " Approve"
                                        ]
                                    })
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Button, {
                                    onClick: handlePay,
                                    disabled: !hasAvaliableAUD,
                                    className: (0,tw_merge/* twMerge */.m)('w-[45%] gap-2 fill-white inline-flex items-center justify-center px-4 py-2 bg-[#7918F5] text-base font-medium text-white hover:bg-#7918F5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7918F5]', isPreview && 'w-full'),
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(SendIcon, {}),
                                        " Confirm"
                                    ]
                                })
                            ]
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Button, {
                            onClick: canPay ? handlePay : handleApprove,
                            disabled: !hasAvaliableAUD,
                            className: (0,tw_merge/* twMerge */.m)('w-full gap-2 fill-white inline-flex items-center justify-center px-4 py-2 bg-[#7918F5] text-base font-medium text-white hover:bg-#7918F5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7918F5]'),
                            children: !hasAvaliableAUD ? /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                                children: "No Available weAUD in your wallet"
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SendIcon, {}),
                                    " ",
                                    !canPay ? 'Approve' : 'Confirm',
                                    " to pay ",
                                    formattedAmount
                                ]
                            })
                        })
                    })
                ]
            }),
            isLoading && /*#__PURE__*/ (0,jsx_runtime.jsx)(components_WithTxConfirmation, {
                txHash: txHash,
                closeTxConfirmation: onCloseTxConfirmation,
                className: "min-w-[360px]",
                successText: successText,
                failureText: failureText,
                defaultText: `You are ${canPay ? 'paying' : 'approving'}...`,
                children: successText && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "mt-5",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex justify-between items-center mb-[8px]",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-[#6E747A]",
                                    children: "Amount"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                    className: "flex justify-center text-[14px] text-[#0D1821]",
                                    children: [
                                        "#",
                                        formattedAmount
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex justify-between items-center mb-[8px]",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-[#6E747A]",
                                    children: "Hash"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex justify-center items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            href: getExplorerLink(txHash != null ? txHash : ''),
                                            target: '_blank',
                                            className: "text-[14px] text-[#0D1821]",
                                            children: shortenTxHash(txHash)
                                        }),
                                        isCopied ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ai_index_esm/* AiOutlineCheck */.bzc, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "cursor-pointer",
                                            onClick: ()=>onCopy(txHash),
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyIcon, {})
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            onClick: onCloseTxConfirmation,
                            className: (0,tw_merge/* twMerge */.m)('w-full gap-2 fill-white inline-flex items-center justify-center px-4 py-2 bg-[#7918F5] text-base font-medium text-white hover:bg-#7918F5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7918F5]', 'rounded-2xl my-[8px]'),
                            children: "Confirm"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Pay_PaymentModal = (PaymentModal);

// EXTERNAL MODULE: ./node_modules/.pnpm/@ethersproject+providers@5.7.2/node_modules/@ethersproject/providers/lib.esm/index.js + 13 modules
var providers_lib_esm = __webpack_require__(4956);
;// CONCATENATED MODULE: ./src/web/pages/Pay/index.tsx




















const Pay = ()=>{
    const { account , provider  } = (0,dist/* useWeb3Provider */.xo)();
    const [isOpenConfirmModal, setOpenConfirmModal] = (0,react.useState)(false);
    const [isOpenPayModal, setOpenPayModal] = (0,react.useState)(false);
    const [isPreview, setIsPreview] = (0,react.useState)(false);
    const [selectedStatus, setSelectedStatus] = (0,react.useState)(payStatuses[0]);
    const [selectedTime, setSelectedTime] = (0,react.useState)(dueDateFilterOptions[0]);
    const [selectedInvoice, setSelectedInvoice] = (0,react.useState)();
    const [weAudBalance, setWeAudBalance] = (0,react.useState)('');
    const [weAudAllowance, setWeAudAllowance] = (0,react.useState)('');
    const [skip] = (0,react.useState)(0);
    const [pageSize] = (0,react.useState)(50);
    const p = providers_lib_esm/* getDefaultProvider */.yl();
    const multicall = new dist_esm/* Multicall */.m({
        ethersProvider: provider || p,
        tryAggregate: true
    });
    const isIdle = (0,useIdle/* default */.Z)();
    const contractCallContext = [
        {
            reference: 'balance',
            contractAddress: weAUDAddress,
            abi: erc20Abi,
            calls: [
                {
                    reference: 'balanceCall',
                    methodName: 'balanceOf',
                    methodParameters: [
                        account
                    ]
                }
            ]
        },
        {
            reference: 'allowance',
            contractAddress: weAUDAddress,
            abi: erc20Abi,
            calls: [
                {
                    reference: 'allowanceCall',
                    methodName: 'allowance',
                    methodParameters: [
                        account,
                        invoiceDelegateAddress
                    ]
                }
            ]
        }
    ];
    (0,react.useEffect)(()=>{
        if (!account) return;
        function mcall() {
            return _mcall.apply(this, arguments);
        }
        function _mcall() {
            _mcall = (0,_async_to_generator/* default */.Z)(function*() {
                const results = yield multicall.call(contractCallContext);
                const { balance , allowance  } = results.results;
                const a = BigInt(allowance.callsReturnContext[0].returnValues.toString()).toString();
                const b = BigInt(balance.callsReturnContext[0].returnValues.toString()).toString();
                setWeAudAllowance(a);
                setWeAudBalance(b);
            });
            return _mcall.apply(this, arguments);
        }
        mcall();
        const timerId = setInterval(()=>{
            if (!account || isIdle) return;
            mcall();
        }, TIMER_INTERVAL);
        return ()=>clearTimeout(timerId);
    }, [
        account,
        isIdle
    ]);
    const { textValue  } = (0,react.useContext)(SearchContext);
    const [queryResult, reexecuteQuery] = (0,urql_es/* useQuery */.aM)({
        query: InvoicesQuery,
        variables: {
            pageSize,
            skip,
            account
        },
        requestPolicy: 'cache-and-network',
        pause: !!textValue || isIdle
    });
    const { data: invoiceList , fetching: isFetching  } = queryResult;
    const [searchResult, reexecuteSearch] = (0,urql_es/* useQuery */.aM)({
        query: InvoiceSearch,
        variables: {
            pageSize,
            skip,
            searchText: `'${textValue}'`
        },
        requestPolicy: 'cache-and-network',
        pause: !!textValue || isIdle
    });
    const { data: invoiceData , fetching: isSearching  } = searchResult;
    const filteredInvoices = (invoices)=>{
        return invoices == null ? void 0 : invoices.filter((invoice)=>{
            var _invoice_buyerAddr;
            return (invoice == null ? void 0 : (_invoice_buyerAddr = invoice.buyerAddr) == null ? void 0 : _invoice_buyerAddr.toLowerCase()) === (account == null ? void 0 : account.toLowerCase());
        });
    };
    let invoices = textValue ? filteredInvoices(invoiceData == null ? void 0 : invoiceData.invoiceSearch) : invoiceList == null ? void 0 : invoiceList.invoices;
    invoices = invoices == null ? void 0 : invoices.map((invoice)=>{
        const status = invoice.state === '0' ? 0 : invoice.state === '1' ? getDayDiffs(invoice.dueDate) < 1 ? 1 : 2 : 3;
        return (0,_extends/* default */.Z)({}, invoice, {
            status
        });
    }).filter((invoice)=>{
        if (selectedStatus.value === '') return true;
        return (invoice == null ? void 0 : invoice.status) === Number(selectedStatus.value);
    }).filter((invoice)=>{
        if (selectedTime.value === '') return true;
        return Number(invoice == null ? void 0 : invoice.dueDate) >= currDate.unix() && Number(invoice == null ? void 0 : invoice.dueDate) < dayJsAdapter.addDays(currDate, Number(selectedTime.value)).unix();
    });
    var _invoices_filter;
    const activeInvoices = (_invoices_filter = invoices == null ? void 0 : invoices.filter((invoice)=>{
        return (invoice == null ? void 0 : invoice.state) !== '2';
    })) != null ? _invoices_filter : [];
    var _invoices_filter1;
    const finalisedInvoices = (_invoices_filter1 = invoices == null ? void 0 : invoices.filter((invoice)=>{
        return (invoice == null ? void 0 : invoice.state) === '2';
    })) != null ? _invoices_filter1 : [];
    (0,react.useEffect)(()=>{
        if (textValue) {
            reexecuteSearch({
                requestPolicy: 'network-only'
            });
        } else {
            reexecuteQuery({
                requestPolicy: 'network-only'
            });
        }
    }, [
        textValue
    ]);
    (0,react.useEffect)(()=>{
        if (isFetching) return;
        const timerId = setTimeout(()=>{
            if (isFetching || isIdle) return;
            reexecuteQuery({
                requestPolicy: 'network-only'
            });
        }, TIMER_INTERVAL);
        return ()=>clearTimeout(timerId);
    }, [
        isFetching,
        reexecuteQuery,
        isIdle
    ]);
    (0,react.useEffect)(()=>{
        if (isSearching) return;
        const timerId = setTimeout(()=>{
            if (isSearching || !textValue || isIdle) return;
            reexecuteSearch({
                requestPolicy: 'network-only'
            });
        }, TIMER_INTERVAL);
        return ()=>clearTimeout(timerId);
    }, [
        isSearching,
        reexecuteSearch,
        textValue,
        isIdle
    ]);
    const handlePreview = (invoice)=>{
        setIsPreview(true);
        if (invoice.state === '0') {
            setOpenConfirmModal(true);
        } else if (invoice.state === '1') {
            setOpenPayModal(true);
        }
        setSelectedInvoice(invoice);
    };
    const handlePreviewClose = ()=>{
        setIsPreview(false);
        setOpenConfirmModal(false);
        setOpenPayModal(false);
    };
    const handleConfirm = (invoice)=>{
        setSelectedInvoice(invoice);
        setOpenConfirmModal(true);
    };
    const handlePay = (invoice)=>{
        setSelectedInvoice(invoice);
        setOpenPayModal(true);
    };
    const stateConverter = (state, dueDate)=>{
        return state === '0' ? 'tbc' : state === '1' ? getDayDiffs(dueDate) > 0 ? 'unpaid' : 'overdue' : state === '2' ? 'finalised' : '';
    };
    const onConfirmModalClose = ()=>{
        setIsPreview(false);
        setOpenConfirmModal(false);
        setOpenPayModal(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "p-12 z-10 h-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_PageHeader, {
                title: "Pay",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Selection, {
                            selected: selectedTime,
                            onSelected: setSelectedTime,
                            options: dueDateFilterOptions,
                            className: "min-w-[200px]"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Selection, {
                            selected: selectedStatus,
                            onSelected: setSelectedStatus,
                            options: payStatuses,
                            className: "min-w-[150px]"
                        })
                    ]
                })
            }),
            (activeInvoices == null ? void 0 : activeInvoices.length) === 0 && (finalisedInvoices == null ? void 0 : finalisedInvoices.length) === 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "text-[#6E747A] flex flex-col h-full items-center justify-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        src: no_data_namespaceObject
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: "No data ."
                    })
                ]
            }),
            (activeInvoices == null ? void 0 : activeInvoices.length) > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                id: "active",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "py-8",
                        children: [
                            "Active (",
                            activeInvoices == null ? void 0 : activeInvoices.length,
                            ")"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "grid grid-cols-2 2xl:grid-cols-3 4xl:grid-cols-4 gap-4",
                        children: activeInvoices == null ? void 0 : activeInvoices.sort((a, b)=>{
                            if (!a.status || !b.status) return 0;
                            return a.status - b.status || Number(a.dueDate) - Number(b.dueDate);
                        }).map((invoice, idx)=>{
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(components_PreviewBox, {
                                title: "tax invoice",
                                data: invoice,
                                handlePreview: handlePreview,
                                btnAction: invoice.state === '1' ? handlePay : handleConfirm,
                                btnText: invoice.state === '1' ? 'Pay' : 'Confirm',
                                state: stateConverter(invoice.state || '0', invoice.dueDate),
                                btnIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SendIcon, {}),
                                contractAddr: invoiceDelegateAddress
                            }, idx);
                        })
                    })
                ]
            }),
            (finalisedInvoices == null ? void 0 : finalisedInvoices.length) > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                id: "archived",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "pb-8 pt-12",
                        children: [
                            "Archived (",
                            finalisedInvoices == null ? void 0 : finalisedInvoices.length,
                            ")"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "grid grid-cols-2 2xl:grid-cols-3 4xl:grid-cols-4 gap-4",
                        children: finalisedInvoices == null ? void 0 : finalisedInvoices.map((invoice)=>{
                            const status = invoice.state === '0' ? 1 : invoice.state === '1' ? getDayDiffs(invoice.dueDate) < 0 ? 0 : 2 : 3;
                            return (0,_extends/* default */.Z)({}, invoice, {
                                status
                            });
                        }).sort((a, b)=>a.status - b.status || a.dueDate - b.dueDate).map((invoice, idx)=>{
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(components_PreviewBox, {
                                title: "tax invoice",
                                data: invoice,
                                handlePreview: handlePreview,
                                btnAction: ()=>void 0,
                                btnText: "",
                                state: "finalised",
                                btnIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SendIcon, {}),
                                contractAddr: invoiceDelegateAddress
                            }, idx);
                        })
                    })
                ]
            }),
            isOpenConfirmModal && /*#__PURE__*/ (0,jsx_runtime.jsx)(Pay_ConfirmModal, {
                invoice: selectedInvoice,
                isPreview: isPreview,
                isOpenConfirmModal: isOpenConfirmModal,
                onConfirmModalClose: onConfirmModalClose
            }),
            isOpenPayModal && /*#__PURE__*/ (0,jsx_runtime.jsx)(Pay_PaymentModal, {
                handlePreviewClose: handlePreviewClose,
                isOpenPayModal: isOpenPayModal,
                setOpenPayModal: setOpenPayModal,
                weAudBalance: weAudBalance,
                weAudAllowance: weAudAllowance,
                invoice: selectedInvoice,
                isPreview: isPreview
            })
        ]
    });
};
/* harmony default export */ const pages_Pay = (Pay);

;// CONCATENATED MODULE: ./src/web/pages/Dashboard.tsx


const simpleStats = [
    {
        name: 'Total Subscribers',
        stat: '71,897'
    },
    {
        name: 'Avg. Open Rate',
        stat: '58.16%'
    },
    {
        name: 'Avg. Click Rate',
        stat: '24.57%'
    }
];
function Dashboard() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "p-12",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(components_PageHeader, {
                    title: "Dashboard"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                    id: "simple-stats",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                            className: "text-lg font-medium leading-6 text-gray-900 mt-8",
                            children: "Last 30 days"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("dl", {
                            className: "mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3",
                            children: simpleStats.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("dt", {
                                            className: "truncate text-sm font-medium text-gray-500",
                                            children: item.name
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("dd", {
                                            className: "mt-1 text-3xl font-semibold tracking-tight text-gray-900",
                                            children: item.stat
                                        })
                                    ]
                                }, item.name))
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/web/routes/index.tsx









const LayoutDom = ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
        fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)(Loading, {}),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Layout, {})
    });
const Routes = [];
const mainRoutes = {
    path: '/',
    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(LayoutDom, {}),
    children: [
        {
            index: true,
            path: '/',
            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Dashboard, {})
        },
        {
            path: '/create',
            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(pages_CreateInvoice, {})
        },
        {
            path: '/pay',
            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(pages_Pay, {})
        },
        {
            path: '/get-paid',
            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(pages_GetPaid, {})
        },
        {
            path: '/activity',
            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(pages_Activity, {})
        }
    ]
};
Routes.push(mainRoutes);
/* harmony default export */ const routes = (Routes);

;// CONCATENATED MODULE: ./src/web/pages/App.tsx








const client = (0,urql_core/* createClient */.eI)({
    url: "https://api.thegraph.com/subgraphs/name/solv-victor/ubt-subgraph-v1" || 0,
    exchanges: [
        urql_core/* dedupExchange */.B5,
        urql_core/* cacheExchange */.HG,
        urql_core/* fetchExchange */.Ek
    ]
});
const App = ()=>{
    const routing = (0,react_router_dist/* useRoutes */.V$)(routes);
    const [textValue, setTextValue] = (0,react.useState)('');
    const { pathname  } = (0,react_router_dist/* useLocation */.TH)();
    const navigate = (0,react_router_dist/* useNavigate */.s0)();
    const { account , chainId  } = (0,dist/* useWeb3Provider */.xo)();
    (0,react.useEffect)(()=>{
        if ((!account || !chainId || chainId !== 5) && pathname !== '/') {
            navigate('/');
        }
    }, [
        account,
        chainId,
        pathname
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(urql_es/* Provider */.zt, {
            value: client,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(I18nProvider, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchContext.Provider, {
                    value: {
                        textValue,
                        setTextValue
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "app",
                        children: routing
                    })
                })
            })
        })
    });
};
/* harmony default export */ const pages_App = (/*#__PURE__*/(0,react.memo)(App));

// EXTERNAL MODULE: ./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js
var react_dom_client = __webpack_require__(44478);
;// CONCATENATED MODULE: ./src/web/wdyr.tsx
/// <reference types="@welldone-software/why-did-you-render" />

if (false) {}

;// CONCATENATED MODULE: ./src/web/index.tsx








// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById('app');
const root = (0,react_dom_client/* createRoot */.s)(container);
root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Web3Provider, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_dom_dist/* BrowserRouter */.VK, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(pages_App, {})
        })
    })
}));


/***/ }),

/***/ 13268:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en-US.json": [
		82596,
		596
	],
	"./zh-TW.json": [
		89994,
		994
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 7 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 13268;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 11674:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 79391:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 57002:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 87942:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 82880:
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [589,986,998], () => (__webpack_exec__(43011)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);