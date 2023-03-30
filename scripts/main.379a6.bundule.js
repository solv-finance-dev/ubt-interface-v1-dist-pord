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

/***/ 30347:
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

;// CONCATENATED MODULE: ./src/web/assets/images/icon/logo.svg
const logo_namespaceObject = __webpack_require__.p + "images/logo.9f60c.svg";
// EXTERNAL MODULE: ./node_modules/.pnpm/@ethersproject+address@5.7.0/node_modules/@ethersproject/address/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(6353);
// EXTERNAL MODULE: ./node_modules/.pnpm/@date-io+dayjs@2.16.0_dayjs@1.11.7/node_modules/@date-io/dayjs/build/index.esm.js
var index_esm = __webpack_require__(74741);
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
const toBase64 = (svg)=>{
    const decodedStr = Base64.encode(svg); // btoa(svg);
    return `data:image/svg+xml;base64,${decodedStr}`;
};
const dayJsAdapter = new index_esm/* default */.Z({
    formats: {
        normalDate: 'DD MMM YYYY'
    }
});
const defaultDate = new Date(new Date()).setHours(0, 0, 0, 0);
const getDayDiffs = (epoch, dd = defaultDate)=>{
    return dayJsAdapter.getDiff(dayJsAdapter.date(new Date(Number(epoch) * 1000)).add(1, 'day'), dayJsAdapter.date(dd), 'days'); // inclusive due date
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
                className: "w-full flex-1 outline-none border-none bg-transparent placeholder-[#959A9F]",
                type: type,
                value: value,
                min: 0,
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

;// CONCATENATED MODULE: ./src/web/components/SVGs.tsx

const LoadingIcon = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        "aria-hidden": "true",
        className: "w-8 h-8 mr-2 text-gray-200 animate-spin",
        viewBox: "0 0 100 101",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                fill: "currentFill"
            })
        ]
    });
};
const SearchIcon = ({ fillColour ='white' , h =16 , w =16  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        width: w,
        height: h,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M16.5 14H15.71L15.43 13.73C16.41 12.59 17 11.11 17 9.5C17 5.91 14.09 3 10.5 3C6.91 3 4 5.91 4 9.5C4 13.09 6.91 16 10.5 16C12.11 16 13.59 15.41 14.73 14.43L15 14.71V15.5L20 20.49L21.49 19L16.5 14ZM10.5 14C8.01 14 6 11.99 6 9.5C6 7.01 8.01 5 10.5 5C12.99 5 15 7.01 15 9.5C15 11.99 12.99 14 10.5 14Z",
            fill: fillColour
        })
    });
};
const ClaimIcon = ({ fillColour ='white'  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M4.28572 7.94286L4.28551 7.94286C3.89165 7.94327 3.51405 8.09991 3.23555 8.3784C2.95706 8.6569 2.80041 9.03451 2.8 9.42836L2.8 9.42857L2.8 19.7143L2.8 19.7145C2.80041 20.1083 2.95705 20.486 3.23555 20.7644C3.51405 21.0429 3.89165 21.1996 4.28551 21.2L4.28572 21.2L19.7143 21.2L19.7145 21.2C20.1083 21.1996 20.486 21.0429 20.7644 20.7644C21.0429 20.486 21.1996 20.1083 21.2 19.7145L21.2 19.7143L21.2 9.42857L21.2 9.42836C21.1996 9.03451 21.0429 8.6569 20.7645 8.37841C20.486 8.09991 20.1084 7.94327 19.7145 7.94286L19.7143 7.94286L17.1429 7.94286L16.9429 7.94286L16.9429 8.14286L16.9429 9.42857L16.9429 9.62857L17.1429 9.62857L19.5143 9.62857L19.5143 19.5143L4.48572 19.5143L4.48572 9.62857L6.85714 9.62857L7.05714 9.62857L7.05714 9.42857L7.05714 8.14286L7.05714 7.94286L6.85714 7.94286L4.28572 7.94286Z",
                fill: fillColour,
                stroke: fillColour,
                strokeWidth: "0.4"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M12.0017 10.9143L12.0019 10.9143C13.0775 10.9131 14.1087 10.4852 14.8692 9.72468C15.6298 8.96413 16.0576 7.93296 16.0588 6.85737V6.85714C16.0588 6.05472 15.8209 5.27031 15.3751 4.60312C14.9293 3.93592 14.2956 3.41591 13.5543 3.10883C12.8129 2.80176 11.9972 2.72141 11.2102 2.87796C10.4232 3.0345 9.70024 3.42091 9.13284 3.98831C8.56544 4.55571 8.17904 5.27863 8.02249 6.06564C7.86594 6.85264 7.94629 7.6684 8.25336 8.40975C8.56044 9.15109 9.08046 9.78473 9.74765 10.2305C10.4148 10.6763 11.1992 10.9143 12.0017 10.9143ZM10.6842 4.88537C11.0741 4.62482 11.5326 4.48574 12.0016 4.48572C12.6303 4.48645 13.2331 4.73654 13.6777 5.18114C14.1223 5.62576 14.3724 6.22858 14.3731 6.85737C14.3731 7.32632 14.234 7.78472 13.9734 8.17464C13.7129 8.56462 13.3425 8.86857 12.9092 9.04806C12.4759 9.22755 11.999 9.27451 11.539 9.18301C11.079 9.09151 10.6565 8.86565 10.3248 8.534C9.99317 8.20235 9.76732 7.7798 9.67581 7.31979C9.58431 6.85978 9.63127 6.38296 9.81076 5.94964C9.99025 5.51632 10.2942 5.14595 10.6842 4.88537Z",
                fill: fillColour,
                stroke: fillColour,
                strokeWidth: "0.4"
            })
        ]
    });
};
const TransferIcon = ({ fillColour ='white'  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M8.08896 6.46072H15.1408C15.3385 7.31042 15.814 8.06379 16.4887 8.58636C17.201 9.13801 18.084 9.39262 18.9664 9.29879C19.8488 9.20498 20.6646 8.76984 21.2566 8.08057C21.8485 7.39153 22.175 6.49729 22.175 5.57143C22.175 4.64558 21.8485 3.75134 21.2566 3.0623C20.6646 2.37303 19.8488 1.93789 18.9664 1.84407C18.084 1.75025 17.201 2.00486 16.4887 2.55651C15.814 3.07908 15.3385 3.83244 15.1408 4.68215H8.08896C7.04968 4.68215 6.05489 5.11678 5.32288 5.88726C4.59116 6.65744 4.18155 7.70019 4.18155 8.78572C4.18155 9.87124 4.59116 10.914 5.32288 11.6842C6.05489 12.4547 7.04968 12.8893 8.08896 12.8893H15.5538C16.1343 12.8893 16.693 13.1319 17.1064 13.5671C17.5201 14.0025 17.754 14.5948 17.754 15.2143C17.754 15.8337 17.5201 16.4261 17.1064 16.8615C16.693 17.2966 16.1343 17.5393 15.5538 17.5393H9.85924C9.66154 16.6896 9.18598 15.9362 8.51128 15.4136C7.79903 14.862 6.91599 14.6074 6.03356 14.7012C5.15123 14.795 4.33541 15.2302 3.74338 15.9194C3.15154 16.6085 2.825 17.5027 2.825 18.4286C2.825 19.3544 3.15154 20.2487 3.74338 20.9377C4.33541 21.627 5.15123 22.0621 6.03356 22.1559C6.91599 22.2498 7.79903 21.9951 8.51128 21.4435C9.18598 20.9209 9.66154 20.1676 9.85924 19.3179H15.5538C16.5931 19.3179 17.5879 18.8832 18.3199 18.1127C19.0516 17.3426 19.4612 16.2998 19.4612 15.2143C19.4612 14.1288 19.0516 13.086 18.3199 12.3158C17.5879 11.5454 16.5931 11.1107 15.5538 11.1107H8.08896C7.50842 11.1107 6.94972 10.8681 6.53633 10.4329C6.12266 9.99753 5.88879 9.40516 5.88879 8.78572C5.88879 8.16628 6.12266 7.5739 6.53633 7.13849C6.94972 6.70338 7.50842 6.46072 8.08896 6.46072ZM18.6076 3.60358C18.9736 3.60358 19.3321 3.71776 19.638 3.93286C19.9439 4.14804 20.1837 4.45485 20.3256 4.81548C20.4676 5.17617 20.5048 5.57354 20.4324 5.95699C20.3599 6.34041 20.1813 6.69144 19.9203 6.96613C19.6594 7.24072 19.3281 7.42662 18.9689 7.50183C18.6097 7.57702 18.2374 7.53852 17.8984 7.39076C17.5594 7.24294 17.2681 6.99196 17.0626 6.66815C16.857 6.34426 16.7467 5.96258 16.7467 5.57143C16.7467 5.04672 16.9448 4.54518 17.2949 4.17674C17.6446 3.80861 18.117 3.60358 18.6076 3.60358ZM6.39241 20.3964C6.02642 20.3964 5.66786 20.2822 5.36202 20.0671C5.05606 19.852 4.81629 19.5452 4.67436 19.1845C4.53242 18.8238 4.49516 18.4265 4.56762 18.043C4.64008 17.6596 4.81874 17.3086 5.07971 17.0339C5.34059 16.7593 5.67186 16.5734 6.0311 16.4982C6.39025 16.423 6.76264 16.4615 7.10156 16.6092C7.44061 16.7571 7.73186 17.008 7.93743 17.3319C8.14304 17.6557 8.25327 18.0374 8.25327 18.4286C8.25327 18.9533 8.05516 19.4548 7.70511 19.8233C7.35536 20.1914 6.88297 20.3964 6.39241 20.3964Z",
            fill: fillColour,
            stroke: fillColour,
            strokeWidth: "0.35"
        })
    });
};
const EtherscanIcon = ({ fillColour ='white'  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M21.6828 2.31718C22.0064 2.64075 22.0916 3.13281 21.8957 3.54636L13.4479 21.3807C13.2521 21.794 12.8177 22.0398 12.3626 21.9947C11.9075 21.9496 11.5298 21.6235 11.4189 21.1798L9.69912 14.3009L2.82021 12.5811C2.37652 12.4702 2.05036 12.0925 2.0053 11.6374C1.96023 11.1823 2.20597 10.7479 2.61929 10.5521L20.4536 2.10426C20.8672 1.90837 21.3592 1.9936 21.6828 2.31718ZM6.28071 11.214L10.8546 12.3575C11.2426 12.4545 11.5455 12.7574 11.6425 13.1454L12.786 17.7193L18.6407 5.35929L6.28071 11.214Z",
            fill: fillColour,
            stroke: fillColour,
            strokeWidth: "0.1",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    });
};
const InvoiceImageIcon = ({ fillColour ='white'  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 23 23",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                width: "23",
                height: "23",
                fill: "white",
                style: {
                    mixBlendMode: 'multiply'
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M19.4062 2.10625H3.59375C3.19924 2.10625 2.82089 2.26297 2.54193 2.54193C2.26297 2.82089 2.10625 3.19924 2.10625 3.59375V19.4062C2.10625 19.8008 2.26297 20.1791 2.54193 20.4581C2.82089 20.737 3.19924 20.8937 3.59375 20.8937H19.4062C19.8008 20.8937 20.1791 20.737 20.4581 20.4581C20.737 20.1791 20.8937 19.8008 20.8937 19.4062V3.59375C20.8937 3.19924 20.737 2.82089 20.4581 2.54193C20.1791 2.26297 19.8008 2.10625 19.4062 2.10625ZM3.64375 3.64375H19.3563V6.41875H3.64375V3.64375ZM3.64375 19.3563V7.95625H19.3563V19.3563H3.64375Z",
                fill: fillColour,
                stroke: fillColour,
                strokeWidth: "0.1"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M11.5 15.0938C12.2939 15.0938 12.9375 14.4502 12.9375 13.6562C12.9375 12.8623 12.2939 12.2188 11.5 12.2188C10.7061 12.2188 10.0625 12.8623 10.0625 13.6562C10.0625 14.4502 10.7061 15.0938 11.5 15.0938Z",
                fill: fillColour
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M17.0896 13.2814C16.6455 12.1501 15.8791 11.174 14.8855 10.474C13.8919 9.7741 12.7148 9.3811 11.5 9.34375C10.2852 9.3811 9.10805 9.7741 8.11446 10.474C7.12087 11.174 6.3545 12.1501 5.91035 13.2814L5.75 13.6562L5.91035 14.0311C6.3545 15.1624 7.12087 16.1385 8.11446 16.8385C9.10805 17.5384 10.2852 17.9314 11.5 17.9688C12.7148 17.9314 13.8919 17.5384 14.8855 16.8385C15.8791 16.1385 16.6455 15.1624 17.0896 14.0311L17.25 13.6562L17.0896 13.2814ZM11.5 16.5312C10.9314 16.5312 10.3755 16.3626 9.90274 16.0467C9.42994 15.7308 9.06145 15.2818 8.84385 14.7565C8.62624 14.2311 8.56931 13.6531 8.68024 13.0954C8.79117 12.5377 9.06499 12.0254 9.46707 11.6233C9.86914 11.2212 10.3814 10.9474 10.9391 10.8365C11.4968 10.7256 12.0749 10.7825 12.6002 11.0001C13.1256 11.2177 13.5746 11.5862 13.8905 12.059C14.2064 12.5318 14.375 13.0876 14.375 13.6562C14.3741 14.4185 14.071 15.1493 13.532 15.6882C12.993 16.2272 12.2622 16.5304 11.5 16.5312Z",
                fill: fillColour
            })
        ]
    });
};
const InvoiceLinkIcon = ({ fillColour ='white'  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 23 23",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                width: "23",
                height: "23",
                fill: "white",
                style: {
                    mixBlendMode: 'multiply'
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M8.58705 13.7063C9.06096 13.7076 9.53043 13.6149 9.96828 13.4336C10.4061 13.2524 10.8037 12.986 11.138 12.6501L11.1732 12.6147L11.1379 12.5795L10.1214 11.5628L10.0868 11.5283L10.0515 11.562C9.65701 11.9384 9.13269 12.1485 8.58741 12.1485C8.04232 12.1485 7.51817 11.9386 7.12375 11.5624C6.93177 11.3704 6.77947 11.1425 6.67554 10.8916C6.57153 10.6406 6.518 10.3716 6.518 10.0998C6.518 9.82814 6.57153 9.55909 6.67554 9.30807C6.77955 9.05706 6.93199 8.82899 7.12416 8.63691L7.12417 8.6369L10.7923 4.96921C10.7925 4.96908 10.7926 4.96895 10.7927 4.96882C11.1872 4.59261 11.7113 4.38271 12.2564 4.38271C12.8015 4.38271 13.3256 4.5926 13.7201 4.9688C14.107 5.35646 14.3245 5.88167 14.3251 6.42942C14.3256 6.97736 14.1088 7.50316 13.7224 7.89159L13.3216 8.29249L13.2862 8.32789L13.3216 8.36323L14.3392 9.37876L14.3746 9.41405L14.4099 9.37871L14.8069 8.98154C14.8069 8.98154 14.8069 8.98153 14.8069 8.98153C15.4832 8.30515 15.8632 7.3878 15.8631 6.43129C15.8631 5.47478 15.4831 4.55746 14.8067 3.88112C14.1303 3.20479 13.213 2.82485 12.2565 2.82488C11.2999 2.82492 10.3826 3.20492 9.7063 3.8813L6.03686 7.55001C5.53241 8.05435 5.18886 8.69696 5.04968 9.39656C4.91049 10.0962 4.98192 10.8213 5.25492 11.4803C5.52792 12.1394 5.99024 12.7026 6.5834 13.0988C7.17651 13.495 7.87379 13.7064 8.58705 13.7063ZM8.58705 13.7063L8.58719 13.6563L8.5872 13.7063C8.58715 13.7063 8.5871 13.7063 8.58705 13.7063ZM14.3371 12.2688C14.8111 12.2701 15.2807 12.1773 15.7187 11.9959C16.1566 11.8146 16.5543 11.5482 16.8886 11.2121C17.0753 11.0248 20.2863 7.81432 20.5569 7.54406L20.5569 7.54401C21.2322 6.86741 21.6113 5.95038 21.6109 4.99443C21.6104 4.03848 21.2304 3.12181 20.5545 2.44587C19.8785 1.76992 18.9618 1.39 18.0059 1.38958C17.0499 1.38916 16.1329 1.76828 15.4563 2.44363L15.4209 2.47898L15.4563 2.51437L16.4728 3.53104L16.5074 3.56558L16.5427 3.53186C16.9372 3.1554 17.4615 2.94536 18.0068 2.94536C18.5518 2.94536 19.076 3.15524 19.4704 3.53142C19.8575 3.91964 20.0749 4.44554 20.0749 4.99381C20.0749 5.54225 19.8574 6.06829 19.47 6.45655C19.2058 6.72021 16.1297 9.79636 15.8176 10.1084L15.8014 10.1246C15.8013 10.1248 15.8011 10.1249 15.801 10.125C15.4066 10.5012 14.8824 10.7111 14.3373 10.7111C13.7922 10.7111 13.2681 10.5012 12.8737 10.125C12.6817 9.93301 12.5295 9.7051 12.4256 9.4543C12.3216 9.2033 12.2681 8.93428 12.2681 8.6626C12.2681 8.39092 12.3216 8.1219 12.4256 7.8709C12.5296 7.61991 12.682 7.39186 12.8741 7.19977C12.8741 7.19977 12.8741 7.19976 12.8741 7.19976L13.2713 6.8028L13.3066 6.76745L13.2713 6.73208L12.2548 5.71534L12.2194 5.67998L12.184 5.71534L11.7869 6.11251C11.2824 6.61685 10.9389 7.25946 10.7997 7.95906C10.6605 8.65867 10.7319 9.38384 11.0049 10.0428C11.2779 10.7019 11.7402 11.2651 12.3334 11.6613C12.9265 12.0575 13.6238 12.2689 14.3371 12.2688ZM14.3371 12.2688L14.3372 12.2188M14.3371 12.2688C14.3371 12.2688 14.3372 12.2688 14.3372 12.2688L14.3372 12.2188M14.3372 12.2188C13.6338 12.2189 12.9461 12.0105 12.3612 11.6197C11.7762 11.229 11.3203 10.6736 11.0511 10.0237C10.7819 9.37384 10.7115 8.65873 10.8487 7.96882C10.986 7.27891 11.3248 6.64521 11.8222 6.14787L20.5215 7.50868C20.2509 7.77893 17.0399 10.9894 16.8532 11.1768C16.5235 11.5082 16.1314 11.7709 15.6995 11.9497C15.2677 12.1286 14.8046 12.22 14.3372 12.2188ZM17.25 21.6125H17.2501C17.6444 21.6121 18.0225 21.4553 18.3014 21.1764C18.5802 20.8976 18.7371 20.5195 18.7375 20.1251V20.125V12.9375V12.8875H18.6875H17.25H17.2V12.9375V20.075H2.925V5.80005H5.75H5.8V5.75005V4.31255V4.26255H5.75H2.875H2.87495C2.48058 4.26296 2.10248 4.41981 1.82362 4.69867C1.54476 4.97753 1.38791 5.35562 1.3875 5.74999V5.75005L1.3875 20.125L1.3875 20.1251C1.38791 20.5195 1.54476 20.8976 1.82362 21.1764C2.10248 21.4553 2.48058 21.6121 2.87495 21.6125H2.875H17.25Z",
                fill: fillColour,
                stroke: fillColour,
                strokeWidth: "0.1"
            })
        ]
    });
};
const PayIcon = ({ fillColour ='white'  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M12 16.65L12.0002 16.65C13.233 16.6486 14.4148 16.1582 15.2865 15.2865C16.1582 14.4148 16.6486 13.2329 16.65 12.0002V12C16.65 11.0803 16.3773 10.1813 15.8663 9.4166C15.3554 8.65191 14.6292 8.05591 13.7795 7.70396C12.9298 7.35201 11.9948 7.25993 11.0928 7.43935C10.1908 7.61877 9.36227 8.06164 8.71195 8.71195C8.06164 9.36227 7.61877 10.1908 7.43935 11.0928C7.25993 11.9948 7.35201 12.9298 7.70396 13.7795C8.05591 14.6292 8.65191 15.3554 9.4166 15.8663C10.1813 16.3773 11.0803 16.65 12 16.65ZM10.4166 9.63031C10.8853 9.31716 11.4363 9.15001 11.9999 9.15C12.7556 9.15088 13.48 9.45143 14.0143 9.98573C14.5486 10.5201 14.8492 11.2445 14.85 12.0002C14.85 12.5638 14.6828 13.1147 14.3697 13.5834C14.0565 14.0521 13.6114 14.4173 13.0906 14.6331C12.5699 14.8488 11.9968 14.9052 11.444 14.7952C10.8911 14.6853 10.3833 14.4138 9.98475 14.0153C9.58617 13.6167 9.31473 13.1089 9.20476 12.556C9.0948 12.0032 9.15124 11.4301 9.36695 10.9094C9.58266 10.3886 9.94795 9.94348 10.4166 9.63031Z",
                fill: fillColour,
                stroke: fillColour,
                strokeWidth: "0.3"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M4.49983 21.15H4.5H19.5H19.5002C19.9376 21.1495 20.3569 20.9755 20.6662 20.6662C20.9755 20.3569 21.1495 19.9376 21.15 19.5002V19.5V4.5V4.49983C21.1495 4.06242 20.9755 3.64307 20.6662 3.33378C20.3569 3.02448 19.9376 2.8505 19.5002 2.85H19.5L4.5 2.85L4.49983 2.85C4.06242 2.8505 3.64307 3.02448 3.33378 3.33378C3.02448 3.64307 2.8505 4.06242 2.85 4.49983V4.5L2.85 19.5L2.85 19.5002C2.8505 19.9376 3.02448 20.3569 3.33378 20.6662C3.64307 20.9755 4.06242 21.1495 4.49983 21.15ZM19.3509 19.35H4.65V4.65H19.35L19.3509 19.35Z",
                fill: fillColour,
                stroke: fillColour,
                strokeWidth: "0.3"
            })
        ]
    });
};
const ConfirmIcon = ({ fillColour ='white'  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                width: "24",
                height: "24",
                fill: "white",
                style: {
                    mixBlendMode: 'multiply'
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M9.24286 15.2238V15.1238H9.14286H4.85714H4.75714V15.2238V16.6986V16.7986H4.85714H9.14286H9.24286V16.6986V15.2238ZM12.1 11.1492V11.0492H12H4.85714H4.75714V11.1492V12.624V12.724H4.85714H12H12.1V12.624V11.1492ZM12.1 7.07461V6.97461H12H4.85714H4.75714V7.07461V8.54942V8.64942H4.85714H12H12.1V8.54942V7.07461ZM10.6714 19.2229V19.1229H10.5714H3.52857V4.57481H20.4714V11.8488V11.9488H20.5714H22H22.1V11.8488V4.47481C22.1 4.05815 21.9397 3.65794 21.6534 3.36238C21.367 3.06672 20.9779 2.9 20.5714 2.9H3.42857C3.02212 2.9 2.63299 3.06672 2.34659 3.36238C2.0603 3.65794 1.9 4.05815 1.9 4.47481V19.2229C1.9 19.6395 2.0603 20.0397 2.34659 20.3353C2.63299 20.6309 3.02212 20.7977 3.42857 20.7977H10.5714H10.6714V20.6977V19.2229ZM16.2857 18.7768L14.5075 16.9411L14.4357 16.8669L14.3639 16.9411L13.3567 17.9808L13.2893 18.0504L13.3567 18.12L16.2139 21.0696L16.2857 21.1437L16.3575 21.0696L22.0718 15.1704L22.1392 15.1008L22.0718 15.0312L21.0647 13.9915L20.9929 13.9173L20.921 13.9915L16.2857 18.7768Z",
                fill: fillColour,
                stroke: "black",
                strokeWidth: "0.2"
            })
        ]
    });
};
const InvoiceFromToIcon = ({ fillColour ='white'  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: "53",
        height: "20",
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
const CheckIcon = ({ fillColour ='#0D1821'  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9.52419 15.4246L20.1308 4.81799L21.545 6.23221L9.52419 18.253L2.45312 11.182L3.86734 9.76774L9.52419 15.4246Z",
            fill: fillColour
        })
    });
};
const CopyIcon = ({ fillColour ='#0D1821'  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10.6034 10.3233C10.1735 10.3233 9.82499 10.6718 9.82499 11.1017V19.1855C9.82499 19.6155 10.1735 19.964 10.6034 19.964H18.6872C19.1172 19.964 19.4657 19.6155 19.4657 19.1855V11.1017C19.4657 10.6718 19.1172 10.3233 18.6872 10.3233H10.6034ZM7.78906 11.1017C7.78906 9.54739 9.0491 8.28735 10.6034 8.28735H18.6872C20.2416 8.28735 21.5016 9.54739 21.5016 11.1017V19.1855C21.5016 20.7399 20.2416 21.9999 18.6872 21.9999H10.6034C9.0491 21.9999 7.78906 20.7399 7.78906 19.1855V11.1017Z",
                fill: fillColour
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.31632 4.03592C4.10986 4.03592 3.91186 4.11794 3.76588 4.26392C3.61989 4.40991 3.53788 4.60791 3.53788 4.81437V12.8982C3.53788 13.1046 3.61989 13.3026 3.76588 13.4486C3.91186 13.5946 4.10986 13.6766 4.31632 13.6766H5.21452C5.77672 13.6766 6.23248 14.1324 6.23248 14.6946C6.23248 15.2568 5.77672 15.7125 5.21452 15.7125H4.31632C3.5699 15.7125 2.85406 15.416 2.32626 14.8882C1.79847 14.3604 1.50195 13.6446 1.50195 12.8982V4.81437C1.50195 4.06795 1.79847 3.3521 2.32626 2.82431C2.85406 2.29651 3.5699 2 4.31632 2H12.4001C13.1466 2 13.8624 2.29651 14.3902 2.82431C14.918 3.3521 15.2145 4.06795 15.2145 4.81437V5.71257C15.2145 6.27477 14.7587 6.73053 14.1965 6.73053C13.6343 6.73053 13.1786 6.27477 13.1786 5.71257V4.81437C13.1786 4.60791 13.0966 4.40991 12.9506 4.26392C12.8046 4.11794 12.6066 4.03592 12.4001 4.03592H4.31632Z",
                fill: fillColour
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/web/components/Navbars/Topbar.tsx









function Topbar() {
    const { pathname  } = (0,react_router_dist/* useLocation */.TH)();
    const [searchValue, setSearchValue] = (0,react.useState)('');
    const { setTextValue  } = (0,react.useContext)(SearchContext);
    const { isActive , account , chainId , switchChain , connect  } = (0,dist/* useWeb3Provider */.xo)();
    const { openModal: openWalletModel , disconnect , setConnections  } = (0,dist/* useConnectModal */.We)();
    const { openModal: openSwitchChainModel , setChainIds  } = (0,dist/* useSwitchChainModal */.CD)();
    (0,react.useEffect)(()=>{
        connect(dist/* ConnectionType.INJECTED */.Rj.INJECTED);
    }, [
        connect
    ]);
    (0,react.useEffect)(()=>{
        if (isActive && account && (!chainId || chainId !== 5)) {
            onOpenSwitchChainModel();
        }
    }, [
        chainId,
        isActive,
        account
    ]);
    const onOpenSwitchChainModel = (0,react.useCallback)(()=>{
        // setChainIds([SupportedChainId.GOERLI])
        // openSwitchChainModel();
        switchChain(dist/* SupportedChainId.GOERLI */.HL.GOERLI);
    }, []);
    const onWalletConnect = (0,react.useCallback)(()=>{
        setConnections([
            dist/* connections.INJECTED */.I_.INJECTED,
            dist/* connections.WALLET_CONNECT */.I_.WALLET_CONNECT
        ]);
        openWalletModel();
    // connect(ConnectionType.INJECTED);
    }, []);
    const showSearchBar = account && chainId === 5 && (pathname === '/pay' || pathname === '/get-paid' || pathname === '/activity');
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
                        prefix: /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchIcon, {
                            fillColour: "#959A9F"
                        }),
                        className: "w-[50%] border-transparent",
                        placeholder: "Search InvoiceID, Company Names, ABNs, and Items"
                    }),
                    isActive && account && (!chainId || chainId !== 5) ? /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        className: "border-none px-3.5 h-10 text-white text-base font-semibold flex rounded items-center justify-center bg-[#7918F5]",
                        onClick: ()=>onOpenSwitchChainModel(),
                        children: "Wrong Network"
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        className: "border-none px-3.5 h-10 text-white text-base font-semibold flex rounded items-center justify-center bg-[#7918F5]",
                        onClick: ()=>onWalletConnect(),
                        children: isActive && account ? `${shortenAddress(account, 6)}` : 'Connect Wallet'
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
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "w-2/12 sticky top-20 h-min pt-6",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "flex flex-col pb-4 rounded-md",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                className: "mt-5 flex-1 space-y-1 px-5 gap-[4px] text-[16px]",
                "aria-label": "Sidebar",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router_dom_dist/* NavLink */.OL, {
                        to: '/',
                        className: ({ isActive  })=>isActive ? 'group flex items-center h-[48px] px-3 py-[12px] fill-primary text-primary bg-primary bg-opacity-[.04]' : 'group flex items-center px-3 py-[12px] fill-[#6E747A] hover:fill-primary hover:text-primary hover:bg-primary hover:bg-opacity-[.04]',
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
                        className: ({ isActive  })=>isActive ? 'group flex items-center px-3 py-[12px] fill-primary text-primary bg-primary bg-opacity-[.04]' : 'group flex items-center px-3 py-[12px] fill-[#6E747A] hover:fill-primary hover:text-primary hover:bg-primary hover:bg-opacity-[.04]',
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
                        className: ({ isActive  })=>isActive ? 'group flex items-center px-3 py-[12px] fill-primary text-primary bg-primary bg-opacity-[.04]' : 'group flex items-center px-3 py-[12px] fill-[#6E747A] hover:fill-primary hover:text-primary hover:bg-primary hover:bg-opacity-[.04]',
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
                        className: ({ isActive  })=>isActive ? 'group flex items-center px-3 py-[12px] fill-primary text-primary bg-primary bg-opacity-[.04]' : 'group flex items-center px-3 py-[12px] fill-[#6E747A] hover:fill-primary hover:text-primary hover:bg-primary hover:bg-opacity-[.04]',
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
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router_dom_dist/* NavLink */.OL, {
                        to: '/activity',
                        className: ({ isActive  })=>isActive ? 'group flex items-center px-3 py-[12px] fill-primary text-primary bg-primary bg-opacity-[.04]' : 'group flex items-center px-3 py-[12px] fill-[#6E747A] hover:fill-primary hover:text-primary hover:bg-primary hover:bg-opacity-[.04]',
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
                ]
            })
        })
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
                            className: "w-10/12 flex flex-1 min-h-screen px-3 pb-12 flex-col bg-[#F8F8F9]",
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
                    className: "text-3xl",
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
        value: '0'
    },
    {
        label: 'Paid',
        value: '2'
    },
    {
        label: 'Overdue',
        value: '1'
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
        value: '0'
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
        value: '1'
    }
];
const dueDateFilterOptions = [
    {
        label: 'All Time',
        value: ''
    },
    {
        label: 'Due in 5 days',
        value: '5'
    },
    {
        label: 'Due in 10 days',
        value: '10'
    },
    {
        label: 'Due in 15 days',
        value: '15'
    },
    {
        label: 'Due in 30 days',
        value: '30'
    }
];
const dateFilterOptions = [
    {
        label: 'All Time',
        value: ''
    },
    {
        label: 'Due in 5 days',
        value: '5'
    },
    {
        label: 'Due in 10 days',
        value: '10'
    },
    {
        label: 'Due in 15 days',
        value: '15'
    },
    {
        label: 'Due in 30 days',
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
const invoiceDelegateAddress = '0x65F7307f0036D7e68aa792129c7D289f09327de0'; //'0x79087F3990E1011Fcffb3aaD7A1a8041C081f28C';
const invoiceSvgAddress = '0x367442d549B9A78D7B83Cf21AeF6Bf7058a44AB3'; // '0xc1381A45E2f2F9BC0Ed881406580a29144A6A895';
const receivableDelegateAddress = '0x2eceE1D2088141B93bf276758914Be4f9818B8aF'; //'0xa552793238f0D99E531c0CC1D75280F78425Bb35';
const receivableSvgAddress = '0x5dE7fAD7FE8E2b67CB5D376B574f403b00c0eE62'; // '0xc114218D9bd64bdbEa9aD9e7509ccA74EF005e7f';
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
        id
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
        id
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
const StatsQuery = `
  query ($account: String) {
    invoices(where: {buyerAddr: $account}) {
      totalValue
      state
    }
    receivables(where: {owner: $account}) {
      amount
      state
    }
  }
`;

// EXTERNAL MODULE: ./node_modules/.pnpm/@ethersproject+units@5.7.0/node_modules/@ethersproject/units/lib.esm/index.js + 2 modules
var units_lib_esm = __webpack_require__(88673);
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
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* Dialog */.V, {
            open: isOpen,
            onClose: onClose,
            className: "fixed z-50",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "fixed inset-0 bg-black/30",
                    "aria-hidden": "true"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "fixed inset-0 overflow-y-auto",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex min-h-full items-center justify-center p-4",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (0,tw_merge/* twMerge */.m)("flex flex-col bg-white text-black my-6 mt-16 p-6 rounded-lg max-w-2xl", className || ''),
                            children: [
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
                })
            ]
        })
    });
};
/* harmony default export */ const components_Modal = (Modal);

;// CONCATENATED MODULE: ./src/web/hooks/useFetchingSvg.ts




function useFetchingSvg(svgContractAddr, delegateAddr, invoiceId) {
    const [svg, setSvg] = (0,react.useState)();
    const svgContract = (0,dist/* useContract */.cq)(svgContractAddr, [
        'function generateSVG(address invoice, uint256 tokenId) external view returns (string memory)'
    ], true);
    const key = `${delegateAddr}-${invoiceId}`;
    function getSvgByTokenId() {
        return _getSvgByTokenId.apply(this, arguments);
    }
    function _getSvgByTokenId() {
        _getSvgByTokenId = (0,_async_to_generator/* default */.Z)(function*() {
            if (!svgContract || !invoiceId) return;
            const ret = yield svgContract.generateSVG(delegateAddr, invoiceId);
            const base64Svg = toBase64(ret);
            setSvg(base64Svg);
        // localStorage.setItem(key, base64Svg);
        });
        return _getSvgByTokenId.apply(this, arguments);
    }
    (0,react.useEffect)(()=>{
        setSvg('');
        if (!invoiceId) return;
        // const cachedSvg = localStorage.getItem(key);
        // if (cachedSvg) {
        //   setSvg(cachedSvg);
        // } else {
        // }
        getSvgByTokenId();
    }, [
        invoiceId
    ]);
    return {
        svg,
        setSvg
    };
}

;// CONCATENATED MODULE: ./src/web/components/SvgBox.tsx



const SvgBox = ({ svg , className  })=>{
    return(// <div className="flex justify-center text-sm text-gray-500 pt-4 overflow-y-auto">842px
    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (0,tw_merge/* twMerge */.m)("flex justify-center pt-4 min-h-[490px] h-[85%]", className),
        children: !!svg ? /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
            src: svg,
            className: "w-full"
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            role: "status",
            className: "flex justify-center items-center text-[#ECEDEE] fill-[#7918F5]",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingIcon, {})
        })
    }));
};
/* harmony default export */ const components_SvgBox = (SvgBox);

;// CONCATENATED MODULE: ./src/web/pages/Activity.tsx


















const Activity = ()=>{
    const { account  } = (0,dist/* useWeb3Provider */.xo)();
    const [selectedStatus, setSelectedStatus] = (0,react.useState)(activityStatuses[0]);
    const [selectedTime, setSelectedTime] = (0,react.useState)(dateFilterOptions[0]);
    const [copiedText, setCopiedText] = (0,react.useState)('');
    const [copiedIdx, setCopiedIdx] = (0,react.useState)(-1);
    const [isPreview, setIsPreview] = (0,react.useState)(false);
    const [selectedInvoiceId, setSelectedInvoiceId] = (0,react.useState)();
    const { svg , setSvg  } = useFetchingSvg(invoiceSvgAddress, invoiceDelegateAddress, selectedInvoiceId);
    const [isCopied, onCopy] = useCopyClipboard();
    const [skip] = (0,react.useState)(0);
    const [pageSize] = (0,react.useState)(50);
    const { textValue  } = (0,react.useContext)(SearchContext);
    const isIdle = (0,useIdle/* default */.Z)();
    const handlePreview = (id)=>{
        setSelectedInvoiceId(id);
        setIsPreview(true);
    };
    const [queryResult, reexecuteQuery] = (0,urql_es/* useQuery */.aM)({
        query: ActivitiesQuery,
        variables: {
            pageSize,
            skip,
            account,
            sortBy: 'invoiceDate',
            sortDirection: 'desc'
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
            searchText: `'${textValue}'`,
            sortBy: 'invoiceDate',
            sortDirection: 'DESC'
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
    const handleCopy = (0,react.useCallback)((e, text, content, idx)=>{
        e.stopPropagation();
        setCopiedText(text);
        onCopy(content);
        setCopiedIdx(idx);
        setTimeout(()=>{
            setCopiedText('');
            setCopiedIdx(-1);
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
                    className: "my-[12px] bg-white ounded-md cursor-pointer h-[165px]",
                    onClick: ()=>handlePreview(activity.invoiceNumber || activity.invoice),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "w-1/12 p-[24px]",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                    src: activity_icon_namespaceObject
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "w-11/12 text-[14px] pt-[24px]",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                className: "text-[18px] font-[500] leading-[21px]",
                                                children: [
                                                    "Tax Invoice #",
                                                    activity.invoiceNumber
                                                ]
                                            }),
                                            activity.invoiceLink && /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                href: activity.invoiceLink,
                                                target: "_blank",
                                                className: "font-[400px] pr-[20px]",
                                                children: "Invoice Link"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-1 mt-[8px] text-[#959A9F]",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        children: "Invoice from"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "pl-[4px] text-[#0D1821]",
                                                        children: activity.sellerName
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "pl-[24px]",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        children: "Invoice to"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "pl-[4px] text-[#0D1821]",
                                                        children: activity.buyerName
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-1 mt-[4px] text-[#959A9F]",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: "Recipient's address"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "pl-[4px] pr-[8px] text-[#0D1821]",
                                                children: activity.buyerAddr
                                            }),
                                            isCopiedAddr && copiedIdx === idx ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckIcon, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "cursor-pointer",
                                                onClick: (e)=>handleCopy(e, 'addr', activity.buyerAddr, idx),
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyIcon, {})
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex justify-between pt-[24px]",
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
                                                                className: "pl-[4px] font-normal text-[#0D1821]",
                                                                children: maskedCurrency.resolve(units_lib_esm.formatEther(activity.amount))
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "pl-[24px]",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "text-[#959A9F]",
                                                                children: "Due Date"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "pl-[4px] font-normal text-[#0D1821]",
                                                                children: dayJsAdapter.format(dayJsAdapter.date(Number(activity.dueDate) * 1000), 'normalDate')
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "pl-[24px] flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "text-[#959A9F]",
                                                                children: "Transaction Hash"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                                href: getExplorerLink(activity.txHash),
                                                                target: "_blank",
                                                                className: "pl-[4px] pr-[5px] font-normal text-[#0D1821]",
                                                                children: shortenTxHash(activity.txHash)
                                                            }),
                                                            isCopiedHash && copiedIdx === idx ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckIcon, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "cursor-pointer",
                                                                onClick: (e)=>handleCopy(e, 'hash', activity.txHash, idx),
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyIcon, {})
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-[#959A9F] pr-[16px]",
                                                children: dayJsAdapter.format(dayJsAdapter.date(Number(activity.invoiceDate) * 1000), 'normalDate')
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }, idx);
            }),
            isPreview && /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Modal, {
                isOpen: isPreview,
                onClose: ()=>{
                    setSvg('');
                    setIsPreview(false);
                    setSelectedInvoiceId('');
                },
                showCloseIcon: true,
                title: '',
                closeOnOverlayClick: true,
                className: "min-w-[512px]",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(components_SvgBox, {
                    svg: svg
                })
            })
        ]
    });
};
/* harmony default export */ const pages_Activity = (Activity);

// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/src/_extends.mjs
var _extends = __webpack_require__(78933);
;// CONCATENATED MODULE: ./src/web/assets/svg/date.svg
const date_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjY2NjcgMi42NjY2M0gzLjMzMzMzQzIuNTk2OTUgMi42NjY2MyAyIDMuMjYzNTggMiAzLjk5OTk2VjEzLjMzMzNDMiAxNC4wNjk3IDIuNTk2OTUgMTQuNjY2NiAzLjMzMzMzIDE0LjY2NjZIMTIuNjY2N0MxMy40MDMgMTQuNjY2NiAxNCAxNC4wNjk3IDE0IDEzLjMzMzNWMy45OTk5NkMxNCAzLjI2MzU4IDEzLjQwMyAyLjY2NjYzIDEyLjY2NjcgMi42NjY2M1oiIHN0cm9rZT0iIzBEMTgyMSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTAuNjY2IDEuMzMzMzdWNC4wMDAwNCIgc3Ryb2tlPSIjMEQxODIxIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik01LjMzMzk4IDEuMzMzMzdWNC4wMDAwNCIgc3Ryb2tlPSIjMEQxODIxIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yIDYuNjY2NjNIMTQiIHN0cm9rZT0iIzBEMTgyMSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K";
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
        className: (0,tw_merge/* twMerge */.m)("bg-white rounded-lg border-none text-gray-500 hover:bg-gray-100 hover:text-gray-900 text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200", options == null ? void 0 : (_options_theme = options.theme) == null ? void 0 : _options_theme.icons),
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
        className: (0,tw_merge/* twMerge */.m)("text-sm rounded-lg border-none text-gray-900 bg-white font-semibold py-2.5 px-5 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200", options == null ? void 0 : (_options_theme = options.theme) == null ? void 0 : _options_theme.icons),
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
        className: (0,tw_merge/* twMerge */.m)("bg-white rounded-lg border-none text-gray-500 hover:bg-gray-100 hover:text-gray-900 text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200", options == null ? void 0 : (_options_theme = options.theme) == null ? void 0 : _options_theme.icons),
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
        className: (0,tw_merge/* twMerge */.m)("w-full px-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300", options == null ? void 0 : (_options_theme = options.theme) == null ? void 0 : _options_theme.todayBtn),
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
        className: (0,tw_merge/* twMerge */.m)("w-full px-5 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-solid border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-blue-300", options == null ? void 0 : (_options_theme = options.theme) == null ? void 0 : _options_theme.clearBtn),
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
                        className: "h-6 text-sm font-medium leading-6 text-center text-gray-500 dow",
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
                        className: `hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center font-semibold text-sm ${showSelectedDate && selectedDate.getTime() > 0 && getFormattedDate(selectedDate) === getFormattedDate(current) ? (0,tw_merge/* twMerge */.m)("bg-blue-700 text-white hover:bg-blue-600", options == null ? void 0 : (_options_theme = options.theme) == null ? void 0 : _options_theme.selected) : ""} ${month == getFormattedDate(selectedDate, {
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
                className: `hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center font-semibold text-sm ${showSelectedDate && selectedDate.getTime() > 0 && Number(getFormattedDate(selectedDate, {
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
                className: `hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center font-semibold text-sm text-gray-900 ${showSelectedDate && selectedDate.getTime() > 0 && getFormattedDate(selectedDate, {
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
                className: `hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center font-semibold text-sm ${showSelectedDate && selectedDate.getTime() > 0 && Number(getFormattedDate(selectedDate, {
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
            className: (0,tw_merge/* twMerge */.m)("inline-block p-4 bg-white rounded-lg shadow-lg", options == null ? void 0 : (_options_theme = options.theme) == null ? void 0 : _options_theme.background),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        (options == null ? void 0 : options.title) && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: (0,tw_merge/* twMerge */.m)("px-2 py-3 font-semibold text-center text-gray-900", options == null ? void 0 : (_options_theme1 = options.theme) == null ? void 0 : _options_theme1.text),
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

// EXTERNAL MODULE: ./node_modules/.pnpm/react-icons@4.8.0_react@18.2.0/node_modules/react-icons/fa/index.esm.js
var fa_index_esm = __webpack_require__(3648);
;// CONCATENATED MODULE: ./src/web/assets/images/trash.png
const trash_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEhSURBVHgB7ZRNTsMwEIVnGpDMn2R2ZQXcIEeAE5AjwBG6rViUDbDkBoUb9AbADXwDskHqjiBVIkKKXz12WyWtI3VRqZuOMvKbGc/neOEh2qBxW6F/NnkB+CZWexofXcbye9RiAGl3lGbQaJFjTl0hbevxsMHFj/4v97MGjOh8pj5rae087Xcntw1KQubx+9h4WFkqzWSHK0dBPh7W47BwYy9X9OAW05FAqbIA2WtxF+byN6KZeeSuWoQ83gLIaUYvUNCT2FLnVUIPG+SnxfP45EPc76HkSzRgf123rzFxLjXRCWA8GIkJfQf5ArYp28F2sK3BwND33b8rmj32ZV3J9IhYfAQBWUXI5uOuIvs+L3mN+BhcgbmHe0drmlKHph5PAT8LdQIpHlgeAAAAAElFTkSuQmCC";
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
                                            className: "text-left pl-3 py-4 w-[50%]",
                                            colSpan: 2,
                                            children: "Items"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                            className: "pr-3 w-[10%]",
                                            children: "QTY"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                            className: "pr-3 w-[20%]",
                                            children: "Unit Price (in GST)"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                            colSpan: 2,
                                            className: "pr-8 w-[20%]",
                                            children: "Total (in GST)"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
                                className: "text-right",
                                children: soldItems.map((item, idx)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                        className: "group hover:bg-[#7918F50D] hover:bg-opacity-5",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                colSpan: 2,
                                                className: "w-[50%]",
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
                                                className: "w-[10%]",
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
                                                className: "w-[20%]",
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
                                                colSpan: 2,
                                                className: "pr-3 static border border-solid border-[#ECEDEE] w-[20%] border-b-0 border-r-0",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center justify-end gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            children: item.totalPrice
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: (0,tw_merge/* twMerge */.m)('invisible', idx > 0 && 'group-hover:visible'),
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                                src: trash_namespaceObject,
                                                                className: "cursor-pointer",
                                                                onClick: ()=>removeItems(idx)
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }, idx);
                                })
                            }),
                            soldItems.length < MAXITEMS && /*#__PURE__*/ (0,jsx_runtime.jsx)("tfoot", {
                                className: "text-center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("tr", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                        colSpan: 5,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "flex items-center justify-center py-4",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                className: "flex items-center cursor-pointer gap-2 text-[#7918F5]",
                                                onClick: addItems,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(fa_index_esm/* FaPlus */.wEH, {}),
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

;// CONCATENATED MODULE: ./src/web/abi/InvoiceDelegate.json
const InvoiceDelegate_namespaceObject = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":false,"internalType":"bool","name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"ApprovalValue","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"recvTokenId","type":"uint256"}],"name":"Confirm","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_slot","type":"uint256"},{"indexed":true,"internalType":"address","name":"_creator","type":"address"},{"indexed":false,"internalType":"bytes","name":"_slotInfo","type":"bytes"}],"name":"CreateSlot","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"_slot","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"MintValue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"old_","type":"address"},{"indexed":false,"internalType":"address","name":"new_","type":"address"}],"name":"NewConcrete","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"NewOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldPendingAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newPendingAdmin","type":"address"}],"name":"NewPendingAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"payer","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"payment","type":"uint256"}],"name":"Pay","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"metadataDescriptor","type":"address"}],"name":"SetMetadataDescriptor","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"_oldSlot","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"_newSlot","type":"uint256"}],"name":"SlotChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_fromTokenId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"_toTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"TransferValue","type":"event"},{"inputs":[],"name":"acceptAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"},{"internalType":"address","name":"operator_","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"value_","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"concrete","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"confirm","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currency","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"data","type":"bytes"}],"name":"delegateToConcreteView","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint8","name":"decimals_","type":"uint8"},{"internalType":"address","name":"concrete_","type":"address"},{"internalType":"address","name":"descriptor_","type":"address"},{"internalType":"address","name":"owner_","type":"address"},{"internalType":"address","name":"recvSft_","type":"address"},{"internalType":"address","name":"currency_","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"address","name":"operator_","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"metadataDescriptor","outputs":[{"internalType":"contract IERC3525MetadataDescriptorUpgradeable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"mintTo_","type":"address"},{"internalType":"uint256","name":"mintValue_","type":"uint256"},{"internalType":"bytes","name":"inputSlotInfo_","type":"bytes"}],"name":"mint","outputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"owner_","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"pay","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pendingAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"recvSft","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"revoke","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"},{"internalType":"bytes","name":"data_","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"operator_","type":"address"},{"internalType":"bool","name":"approved_","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newConcrete_","type":"address"}],"name":"setConcreteOnlyAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner_","type":"address"}],"name":"setOwnerOnlyAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newPendingAdmin_","type":"address"}],"name":"setPendingAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"slotByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"slotCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"slotOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"slot_","type":"uint256"}],"name":"slotURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"slot_","type":"uint256"},{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"tokenInSlotByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"slot_","type":"uint256"}],"name":"tokenSupplyInSlot","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"fromTokenId_","type":"uint256"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"value_","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"uint256","name":"newTokenId","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fromTokenId_","type":"uint256"},{"internalType":"uint256","name":"toTokenId_","type":"uint256"},{"internalType":"uint256","name":"value_","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"valueDecimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"}]');
;// CONCATENATED MODULE: ./src/web/abi/InvoiceSVG.json
const InvoiceSVG_namespaceObject = JSON.parse('[{"inputs":[{"components":[{"internalType":"address","name":"invoiceAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint8","name":"valueDecimals","type":"uint8"},{"components":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"abn","type":"string"},{"internalType":"address","name":"addr","type":"address"}],"internalType":"struct InvoiceConcrete.AccountInfo","name":"seller","type":"tuple"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"abn","type":"string"},{"internalType":"address","name":"addr","type":"address"}],"internalType":"struct InvoiceConcrete.AccountInfo","name":"buyer","type":"tuple"},{"components":[{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"quantity","type":"string"},{"internalType":"string","name":"unitPrice","type":"string"},{"internalType":"string","name":"gst","type":"string"},{"internalType":"string","name":"totalPrice","type":"string"}],"internalType":"struct InvoiceConcrete.InvoiceItem[]","name":"items","type":"tuple[]"},{"internalType":"string","name":"invoiceLink","type":"string"},{"internalType":"string","name":"subtotal","type":"string"},{"internalType":"string","name":"totalGst","type":"string"},{"internalType":"uint256","name":"totalValue","type":"uint256"},{"internalType":"uint64","name":"invoiceDate","type":"uint64"},{"internalType":"uint64","name":"confirmDate","type":"uint64"},{"internalType":"uint64","name":"dueDate","type":"uint64"},{"internalType":"enum InvoiceConcrete.InvoiceState","name":"state","type":"uint8"},{"internalType":"bool","name":"isValid","type":"bool"}],"internalType":"struct InvoiceConcrete.SlotInfo","name":"slotInfo","type":"tuple"}],"internalType":"struct InvoiceSVG.SVGParams","name":"params","type":"tuple"}],"name":"generateSVG","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]');
;// CONCATENATED MODULE: ./src/web/assets/svg/waiting.svg
const waiting_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDE4MCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxODAiIGhlaWdodD0iMTgwIiBmaWxsPSIjRkZGRUZFIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTM0Ljc5MyAzNS42MTczSDQ4LjkxMDJWMTQyLjk3MUgxMzQuNzkzVjM1LjYxNzNaTTM4LjE3NDggMjQuODgxOVYxNTMuNzA2SDE0NS41MjhWMjQuODgxOUgzOC4xNzQ4WiIgZmlsbD0iI0Q4RENERSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTkxLjg1MzMgMTA5Ljg3M0MxMDMuMjE5IDEwOS44NzMgMTEyLjQzMiAxMDAuNjYgMTEyLjQzMiA4OS4yOTQzQzExMi40MzIgNzcuOTI4NyAxMDMuMjE5IDY4LjcxNTEgOTEuODUzMyA2OC43MTUxQzgwLjQ4NzcgNjguNzE1MSA3MS4yNzQxIDc3LjkyODcgNzEuMjc0MSA4OS4yOTQzQzcxLjI3NDEgMTAwLjY2IDgwLjQ4NzcgMTA5Ljg3MyA5MS44NTMzIDEwOS44NzNaTTkxLjg1MzMgMTIwLjQyN0MxMDkuMDQ3IDEyMC40MjcgMTIyLjk4NiAxMDYuNDg4IDEyMi45ODYgODkuMjk0M0MxMjIuOTg2IDcyLjEwMDMgMTA5LjA0NyA1OC4xNjE3IDkxLjg1MzMgNTguMTYxN0M3NC42NTkyIDU4LjE2MTcgNjAuNzIwNyA3Mi4xMDAzIDYwLjcyMDcgODkuMjk0M0M2MC43MjA3IDEwNi40ODggNzQuNjU5MiAxMjAuNDI3IDkxLjg1MzMgMTIwLjQyN1oiIGZpbGw9IiM3OTE4RjUiLz4KPHBhdGggZD0iTTExOS43NjUgMTJIMTU5LjQ4NlY0OC41MDAySDExOS43NjVWMTJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzNi45NCAzNS43OTU3QzEzOS43OTggMzUuNzk1NyAxNDEuNjc0IDMzLjU0NDUgMTQxLjY3NCAzMS4zMjI2QzE0MS42NzQgMjkuMTAwNyAxMzkuNzk4IDI2Ljg0OTUgMTM2Ljk0IDI2Ljg0OTVDMTM0LjA4MyAyNi44NDk1IDEzMi4yMDYgMjkuMTAwNyAxMzIuMjA2IDMxLjMyMjZDMTMyLjIwNiAzMy41NDQ1IDEzNC4wODMgMzUuNzk1NyAxMzYuOTQgMzUuNzk1N1pNMTM2Ljk0IDQyLjA1OEMxNDIuODY5IDQyLjA1OCAxNDcuNjc2IDM3LjI1MTYgMTQ3LjY3NiAzMS4zMjI2QzE0Ny42NzYgMjUuMzkzNiAxNDIuODY5IDIwLjU4NzIgMTM2Ljk0IDIwLjU4NzJDMTMxLjAxMSAyMC41ODcyIDEyNi4yMDUgMjUuMzkzNiAxMjYuMjA1IDMxLjMyMjZDMTI2LjIwNSAzNy4yNTE2IDEzMS4wMTEgNDIuMDU4IDEzNi45NCA0Mi4wNThaIiBmaWxsPSIjMEQxODIxIi8+CjxwYXRoIGQ9Ik02MC43MjA3IDE2OC43MzdMMjAuOTk5OSAxNjguNzM3TDIwLjk5OTggMTMwLjA5TDYwLjcyMDcgMTMwLjA5TDYwLjcyMDcgMTY4LjczN1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDEuMzk4NCAxNDIuNzkzQzM4LjkyOCAxNDIuNzkzIDM2LjkyNTQgMTQ0Ljc5NSAzNi45MjU0IDE0Ny4yNjZDMzYuOTI1NCAxNDkuNzM2IDM4LjkyOCAxNTEuNzM5IDQxLjM5ODQgMTUxLjczOUM0My44Njg4IDE1MS43MzkgNDUuODcxNSAxNDkuNzM2IDQ1Ljg3MTUgMTQ3LjI2NkM0NS44NzE1IDE0NC43OTUgNDMuODY4OCAxNDIuNzkzIDQxLjM5ODQgMTQyLjc5M1pNNDEuMzk4NCAxMzYuNTNDMzUuNDY5NCAxMzYuNTMgMzAuNjYzMSAxNDEuMzM3IDMwLjY2MzEgMTQ3LjI2NkMzMC42NjMxIDE1My4xOTUgMzUuNDY5NCAxNTguMDAxIDQxLjM5ODQgMTU4LjAwMUM0Ny4zMjc0IDE1OC4wMDEgNTIuMTMzOCAxNTMuMTk1IDUyLjEzMzggMTQ3LjI2NkM1Mi4xMzM4IDE0MS4zMzcgNDcuMzI3NCAxMzYuNTMgNDEuMzk4NCAxMzYuNTNaIiBmaWxsPSIjMEQxODIxIi8+Cjwvc3ZnPgo=";
;// CONCATENATED MODULE: ./src/web/assets/svg/success.svg
const success_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDE4MCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxODAiIGhlaWdodD0iMTgwIiBmaWxsPSIjRkZGRUZFIi8+CjxjaXJjbGUgY3g9IjkwLjUiIGN5PSI5MC41IiByPSI2OC41IiBmaWxsPSIjRkJGN0ZFIi8+CjxjaXJjbGUgY3g9IjkwLjQ5OTciIGN5PSI5MC41MDAyIiByPSI1MS44NTUxIiBmaWxsPSIjRjJFN0ZEIi8+CjxjaXJjbGUgY3g9IjkxLjA1MDYiIGN5PSI5MS4wNSIgcj0iMzkuNjAxNCIgZmlsbD0iIzc5MThGNSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExNS4yMTYgNzcuNDk4N0w4My40MjMgMTA4LjQxNkw2Ni44MTQ1IDkyLjI2NTFMNzEuMjE5NSA4Ny45ODE1TDgzLjQyMyA5OS44NDg5TDExMC44MTEgNzMuMjE1TDExNS4yMTYgNzcuNDk4N1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=";
;// CONCATENATED MODULE: ./src/web/assets/svg/failure.svg
const failure_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM3IiBoZWlnaHQ9IjEzNyIgdmlld0JveD0iMCAwIDEzNyAxMzciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjY4LjUiIGN5PSI2OC41IiByPSI2OC41IiBmaWxsPSIjRkVGNkY3Ii8+CjxjaXJjbGUgY3g9IjY4LjQ5OTciIGN5PSI2OC40OTk3IiByPSI1MS44NTUxIiBmaWxsPSIjRkRFQkVEIi8+CjxjaXJjbGUgY3g9IjY5LjA1MDYiIGN5PSI2OS4wNDk3IiByPSIzOS42MDE0IiBmaWxsPSIjRUMzNjRDIi8+CjxwYXRoIGQ9Ik04NiA1Mkw1MSA4NiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI3Ii8+CjxwYXRoIGQ9Ik01MiA1Mkw4NSA4NiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI3Ii8+Cjwvc3ZnPgo=";
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
        className: "container w-[360px]",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Modal, {
            isOpen: true,
            onClose: closeTxConfirmation,
            className: (0,tw_merge/* twMerge */.m)('w-[360px]', className),
            showCloseIcon: showCloseIcon || !!failureText,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex flex-col text-center gap-6 mt-6 w-full",
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
                                                isCopied ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckIcon, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
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
                                className: (0,tw_merge/* twMerge */.m)('w-full py-2 inline-flex justify-center rounded-2xl items-center px-4 bg-[#ECEDEE] font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2', (!txHash || !!txHash && !successText) && 'cursor-not-allowed', txHash && successText && 'bg-[#7918F5] text-white'),
                                children: txHash && successText ? /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                                    children: "Confirm"
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

;// CONCATENATED MODULE: ./src/web/assets/svg/ic_close.svg
const ic_close_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy41OSAxOUwxOSAxNy41OUwxMy40MSAxMkwxOSA2LjQxTDE3LjU5IDVMMTIgMTAuNTlMNi40MSA1TDUgNi40MUwxMC41OSAxMkw1IDE3LjU5TDYuNDEgMTlMMTIgMTMuNDFMMTcuNTkgMTlaIiBmaWxsPSIjMEQxODIxIi8+Cjwvc3ZnPgo=";
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
    const [svg, setSvg] = (0,react.useState)('');
    const { account  } = (0,dist/* useWeb3Provider */.xo)();
    const contract = (0,dist/* useContract */.cq)(invoiceDelegateAddress, InvoiceDelegate_namespaceObject, true);
    const svgContract = (0,dist/* useContract */.cq)(invoiceSvgAddress, InvoiceSVG_namespaceObject, true);
    const unixInvoiceDate = dayJsAdapter == null ? void 0 : dayJsAdapter.date(invoice.invoiceDate).unix();
    const unixDueDate = dayJsAdapter == null ? void 0 : dayJsAdapter.date(invoice.dueDate).unix();
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
                maskedCurrency.resolve(`${subtotal}`),
                maskedCurrency.resolve(`${gst}`),
                unixInvoiceDate,
                unixDueDate
            ]
        ]);
    };
    (0,react.useEffect)(()=>{
        function getPreviewSvg() {
            return _getPreviewSvg.apply(this, arguments);
        }
        function _getPreviewSvg() {
            _getPreviewSvg = (0,_async_to_generator/* default */.Z)(function*() {
                if (!svgContract || !account) return;
                const params = {
                    invoiceAddress: invoiceSvgAddress,
                    tokenId: '35250000',
                    valueDecimals: '18',
                    slotInfo: {
                        seller: {
                            name: invoice.sellerName,
                            abn: invoice.sellerAbn,
                            addr: account
                        },
                        buyer: {
                            name: invoice.buyerName,
                            abn: invoice.buyerAbn,
                            addr: invoice.buyerAddr
                        },
                        items: [
                            ...soldItems
                        ],
                        invoiceLink: invoice.invoiceLink,
                        subtotal: maskedCurrency.resolve(`${subtotal}`),
                        totalGst: maskedCurrency.resolve(`${gst}`),
                        totalValue: units_lib_esm.parseEther(`${total}`),
                        invoiceDate: unixInvoiceDate,
                        confirmDate: 0,
                        dueDate: unixDueDate,
                        state: 0,
                        isValid: true
                    }
                };
                const svg = yield svgContract.generateSVG(params);
                setSvg(toBase64(svg));
            });
            return _getPreviewSvg.apply(this, arguments);
        }
        getPreviewSvg();
    }, [
        svgContract,
        account
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
    const onCreatingInvoice = (0,react.useCallback)(/*#__PURE__*/ (0,_async_to_generator/* default */.Z)(function*() {
        if (!contract || !account) return;
        setSuccessText('');
        setFailureText('');
        try {
            var _txReceipt_events;
            setLoading(true);
            const invoiceInfo = getInvoiceInfo();
            const gasEstimated = yield contract == null ? void 0 : contract.estimateGas.mint(invoice.buyerAddr, units_lib_esm.parseEther(`${total}`), invoiceInfo);
            const tx = yield contract == null ? void 0 : contract.mint(invoice.buyerAddr, units_lib_esm.parseEther(`${total}`), invoiceInfo, {
                gasLimit: gasEstimated == null ? void 0 : gasEstimated.mul(110).div(100)
            });
            setTxHash(tx.hash);
            const txReceipt = yield tx.wait();
            (_txReceipt_events = txReceipt.events) == null ? void 0 : _txReceipt_events.forEach((event)=>{
                if ((event == null ? void 0 : event.event) !== 'MintValue' || !(event == null ? void 0 : event.args)) return;
                const invoiceNo = event.args._tokenId;
                setInvoiceNumber(invoiceNo.toString());
            });
            if (txReceipt.status === 1) {
                setSuccessText('You have successfully issued.');
            } else {
                setFailureText('Your confirm failed');
            }
        } catch (err) {
            setFailureText('Your confirm failed');
        }
    }), [
        invoice,
        account,
        contract,
        total
    ]);
    const handleReset = (0,react.useCallback)(()=>{
        setLoading(false);
        setTxHash('');
        setSuccessText('');
        setFailureText('');
        onModalClose(true);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            !isLoading && /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Modal, {
                isOpen: isOpenConfirmModal,
                className: "w-fit h-full min-w-[595px]",
                onClose: ()=>onModalClose(false),
                title: "Issue the invoice",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(components_SvgBox, {
                        svg: svg
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "text-[#959A9F] pt-6 text-center",
                        children: "I confirm that the contents of this invoice are correct."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex justify-between my-4 w-full",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Button, {
                                onClick: ()=>onModalClose(false),
                                className: "w-[45%] gap-2 inline-flex justify-center rounded-2xl items-center px-4 py-2 bg-[#ECEDEE] font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: ic_close_namespaceObject
                                    }),
                                    " Close"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Button, {
                                onClick: onCreatingInvoice,
                                className: (0,tw_merge/* twMerge */.m)('w-[45%] gap-2 fill-white inline-flex items-center justify-center px-4 py-2 bg-[#7918F5] text-base font-medium text-white hover:bg-#7918F5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7918F5]'),
                                children: "Confirm"
                            })
                        ]
                    })
                ]
            }),
            isLoading && /*#__PURE__*/ (0,jsx_runtime.jsx)(components_WithTxConfirmation, {
                txHash: txHash,
                closeTxConfirmation: handleReset,
                successText: successText,
                failureText: failureText,
                defaultText: "You are issuing...",
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
                                        isCopiedAddr ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckIcon, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
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
                                        isCopiedHash ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckIcon, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
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

;// CONCATENATED MODULE: ./src/web/assets/svg/invoiceFrom.svg
const invoiceFrom_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguNjY2MDIgMS4zMzMzN0gzLjk5OTM1QzMuNjQ1NzMgMS4zMzMzNyAzLjMwNjU5IDEuNDczODUgMy4wNTY1NCAxLjcyMzlDMi44MDY0OSAxLjk3Mzk1IDIuNjY2MDIgMi4zMTMwOSAyLjY2NjAyIDIuNjY2NzFWMTMuMzMzNEMyLjY2NjAyIDEzLjY4NyAyLjgwNjQ5IDE0LjAyNjEgMy4wNTY1NCAxNC4yNzYyQzMuMzA2NTkgMTQuNTI2MiAzLjY0NTczIDE0LjY2NjcgMy45OTkzNSAxNC42NjY3SDExLjk5OTNDMTIuMzUzIDE0LjY2NjcgMTIuNjkyMSAxNC41MjYyIDEyLjk0MjIgMTQuMjc2MkMxMy4xOTIyIDE0LjAyNjEgMTMuMzMyNyAxMy42ODcgMTMuMzMyNyAxMy4zMzM0VjYuMDAwMDRMOC42NjYwMiAxLjMzMzM3WiIgc3Ryb2tlPSIjMEQxODIxIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik04LjY2NjAyIDEuMzMzMzdWNi4wMDAwNEgxMy4zMzI3IiBzdHJva2U9IiMwRDE4MjEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==";
;// CONCATENATED MODULE: ./src/web/assets/svg/invoiceTo.svg
const invoiceTo_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE0NzlfNTA1ODUpIj4KPHBhdGggZD0iTTEzLjk5OTMgMi42NjY2M0gxLjk5OTM1QzEuMjYyOTcgMi42NjY2MyAwLjY2NjAxNiAzLjI2MzU4IDAuNjY2MDE2IDMuOTk5OTZWMTJDMC42NjYwMTYgMTIuNzM2MyAxLjI2Mjk3IDEzLjMzMzMgMS45OTkzNSAxMy4zMzMzSDEzLjk5OTNDMTQuNzM1NyAxMy4zMzMzIDE1LjMzMjcgMTIuNzM2MyAxNS4zMzI3IDEyVjMuOTk5OTZDMTUuMzMyNyAzLjI2MzU4IDE0LjczNTcgMi42NjY2MyAxMy45OTkzIDIuNjY2NjNaIiBzdHJva2U9IiMwRDE4MjEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTAuNjY2MDE2IDYuNjY2NjNIMTUuMzMyNyIgc3Ryb2tlPSIjMEQxODIxIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTQ3OV81MDU4NSI+CjxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K";
;// CONCATENATED MODULE: ./src/web/assets/svg/itemSold.svg
const itemSold_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExIDYuMjY2NjRMNSAyLjgwNjY0IiBzdHJva2U9IiMwRDE4MjEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE0IDEwLjY2NjdWNS4zMzMzNUMxMy45OTk4IDUuMDk5NTMgMTMuOTM4IDQuODY5ODkgMTMuODIxIDQuNjY3NDZDMTMuNzA0IDQuNDY1MDMgMTMuNTM1OCA0LjI5NjkyIDEzLjMzMzMgNC4xODAwMkw4LjY2NjY3IDEuNTEzMzVDOC40NjM5NyAxLjM5NjMzIDguMjM0MDUgMS4zMzQ3MiA4IDEuMzM0NzJDNy43NjU5NSAxLjMzNDcyIDcuNTM2MDMgMS4zOTYzMyA3LjMzMzMzIDEuNTEzMzVMMi42NjY2NyA0LjE4MDAyQzIuNDY0MTggNC4yOTY5MiAyLjI5NTk5IDQuNDY1MDMgMi4xNzg5NyA0LjY2NzQ2QzIuMDYxOTYgNC44Njk4OSAyLjAwMDI0IDUuMDk5NTMgMiA1LjMzMzM1VjEwLjY2NjdDMi4wMDAyNCAxMC45MDA1IDIuMDYxOTYgMTEuMTMwMSAyLjE3ODk3IDExLjMzMjZDMi4yOTU5OSAxMS41MzUgMi40NjQxOCAxMS43MDMxIDIuNjY2NjcgMTEuODJMNy4zMzMzMyAxNC40ODY3QzcuNTM2MDMgMTQuNjAzNyA3Ljc2NTk1IDE0LjY2NTMgOCAxNC42NjUzQzguMjM0MDUgMTQuNjY1MyA4LjQ2Mzk3IDE0LjYwMzcgOC42NjY2NyAxNC40ODY3TDEzLjMzMzMgMTEuODJDMTMuNTM1OCAxMS43MDMxIDEzLjcwNCAxMS41MzUgMTMuODIxIDExLjMzMjZDMTMuOTM4IDExLjEzMDEgMTMuOTk5OCAxMC45MDA1IDE0IDEwLjY2NjdaIiBzdHJva2U9IiMwRDE4MjEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIuMTc5NjkgNC42NDAwMUw3Ljk5OTY5IDguMDA2NjhMMTMuODE5NyA0LjY0MDAxIiBzdHJva2U9IiMwRDE4MjEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTggMTQuNzJWOCIgc3Ryb2tlPSIjMEQxODIxIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=";
;// CONCATENATED MODULE: ./src/web/assets/svg/recipient.svg
const recipient_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguMDAxMDQgOS4wODk2QzguNjYzOTIgOS4wODk2IDkuMjAxMjkgOC41NTIyMyA5LjIwMTI5IDcuODg5MzRDOS4yMDEyOSA3LjIyNjQ2IDguNjYzOTIgNi42ODkwOSA4LjAwMTA0IDYuNjg5MDlDNy4zMzgxNSA2LjY4OTA5IDYuODAwNzggNy4yMjY0NiA2LjgwMDc4IDcuODg5MzRDNi44MDA3OCA4LjU1MjIzIDcuMzM4MTUgOS4wODk2IDguMDAxMDQgOS4wODk2WiIgc3Ryb2tlPSIjMEQxODIxIiBzdHJva2Utd2lkdGg9IjEuMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMC41NDQ1IDUuMzQ0ODVDMTAuODc5MyA1LjY3OTI2IDExLjE0NDkgNi4wNzYzOCAxMS4zMjYxIDYuNTEzNTFDMTEuNTA3MyA2Ljk1MDY0IDExLjYwMDYgNy40MTkxOSAxMS42MDA2IDcuODkyMzlDMTEuNjAwNiA4LjM2NTU5IDExLjUwNzMgOC44MzQxNCAxMS4zMjYxIDkuMjcxMjdDMTEuMTQ0OSA5LjcwODQgMTAuODc5MyAxMC4xMDU1IDEwLjU0NDUgMTAuNDM5OU01LjQ1NTQ2IDEwLjQzMzlDNS4xMjA2NyAxMC4wOTk1IDQuODU1MDggOS43MDI0IDQuNjczODcgOS4yNjUyN0M0LjQ5MjY3IDguODI4MTQgNC4zOTk0IDguMzU5NTkgNC4zOTk0IDcuODg2MzlDNC4zOTk0IDcuNDEzMTkgNC40OTI2NyA2Ljk0NDY0IDQuNjczODcgNi41MDc1MUM0Ljg1NTA4IDYuMDcwMzggNS4xMjA2NyA1LjY3MzI2IDUuNDU1NDYgNS4zMzg4NU0xMi4yNDI5IDMuNjQ2NDhDMTMuMzY4IDQuNzcxODkgMTQgNi4yOTgwNyAxNCA3Ljg4OTM5QzE0IDkuNDgwNzIgMTMuMzY4IDExLjAwNjkgMTIuMjQyOSAxMi4xMzIzTTMuNzU3MDkgMTIuMTMyM0MyLjYzMjAzIDExLjAwNjkgMiA5LjQ4MDcyIDIgNy44ODkzOUMyIDYuMjk4MDcgMi42MzIwMyA0Ljc3MTg5IDMuNzU3MDkgMy42NDY0OCIgc3Ryb2tlPSIjMEQxODIxIiBzdHJva2Utd2lkdGg9IjEuMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=";
;// CONCATENATED MODULE: ./src/web/assets/svg/attachments.svg
const attachments_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuNjM2MzYgNUgxMS4yNzI3QzExLjYzMDkgNSAxMS45ODU1IDUuMDcwNTQgMTIuMzE2NCA1LjIwNzZDMTIuNjQ3MyA1LjM0NDY2IDEyLjk0NzkgNS41NDU1NSAxMy4yMDEyIDUuNzk4OEMxMy40NTQ1IDYuMDUyMDUgMTMuNjU1MyA2LjM1MjcgMTMuNzkyNCA2LjY4MzU5QzEzLjkyOTUgNy4wMTQ0OCAxNCA3LjM2OTEyIDE0IDcuNzI3MjdDMTQgOC4wODU0MiAxMy45Mjk1IDguNDQwMDcgMTMuNzkyNCA4Ljc3MDk2QzEzLjY1NTMgOS4xMDE4NCAxMy40NTQ1IDkuNDAyNSAxMy4yMDEyIDkuNjU1NzVDMTIuOTQ3OSA5LjkwOSAxMi42NDczIDEwLjEwOTkgMTIuMzE2NCAxMC4yNDY5QzExLjk4NTUgMTAuMzg0IDExLjYzMDkgMTAuNDU0NSAxMS4yNzI3IDEwLjQ1NDVIOS42MzYzNk02LjM2MzY0IDEwLjQ1NDVINC43MjcyN0M0LjM2OTEyIDEwLjQ1NDUgNC4wMTQ0OCAxMC4zODQgMy42ODM1OSAxMC4yNDY5QzMuMzUyNyAxMC4xMDk5IDMuMDUyMDUgOS45MDkgMi43OTg4IDkuNjU1NzVDMi4yODczNCA5LjE0NDI4IDIgOC40NTA1OSAyIDcuNzI3MjdDMiA3LjAwMzk2IDIuMjg3MzQgNi4zMTAyNiAyLjc5ODggNS43OTg4QzMuMzEwMjYgNS4yODczNCA0LjAwMzk2IDUgNC43MjcyNyA1SDYuMzYzNjQiIHN0cm9rZT0iIzBEMTgyMSIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNS44MTgzNiA3LjcyNzI5SDEwLjE4MiIgc3Ryb2tlPSIjMEQxODIxIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=";
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
                                    className: "p-[37px] bg-white text-[#0D1821]",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "font-[600px] text-[32px] pb-[53px]",
                                            children: "Tax Invoice"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center text-sm font-normal gap-1",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                    src: date_namespaceObject
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
                                                                    src: invoiceFrom_namespaceObject
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
                                                                    src: invoiceTo_namespaceObject
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
                                                                    src: itemSold_namespaceObject
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
                                                                    src: recipient_namespaceObject
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
                                                                    src: attachments_namespaceObject
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
                        className: "flex flex-col fixed right-80 bottom-0 justify-center pb-12",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            className: (0,tw_merge/* twMerge */.m)('bg-[#7918F5] rounded text-[#FBFAFC] border-none text-sm font-semibold p-4 w-[166px]', !isValidInvoiceForm && 'opacity-50 cursor-not-allowed'),
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
        setSuccessText('');
        setFailureText('');
        try {
            setLoading(true);
            const gasEstimated = yield recvDelegateContract.estimateGas.transferFrom(recvId, recipientAddress, units_lib_esm.parseEther(amountToTransfer));
            const tx = yield recvDelegateContract.transferFrom(recvId, recipientAddress, units_lib_esm.parseEther(amountToTransfer), {
                gasLimit: gasEstimated == null ? void 0 : gasEstimated.mul(110).div(100)
            });
            setTxHash(tx.hash);
            const receipt = yield tx.wait();
            if (receipt.status === 1) {
                setSuccessText('You have successfully transferred.');
            } else {
                setFailureText('Your transfer failed');
            }
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
    const { svg  } = useFetchingSvg(receivableSvgAddress, receivableDelegateAddress, recvId);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            !isLoading && /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Modal, {
                isOpen: true,
                onClose: onClose,
                title: 'Transfer',
                className: "min-w-[595px] w-full",
                children: [
                    !isPreview && /*#__PURE__*/ (0,jsx_runtime.jsx)(components_SvgBox, {
                        svg: svg
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
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: ic_close_namespaceObject
                                    }),
                                    " Close"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Button, {
                                disabled: !canTransfer,
                                onClick: handleTransfer,
                                className: (0,tw_merge/* twMerge */.m)('w-[45%] gap-2 fill-white inline-flex items-center justify-center px-4 py-2 bg-[#7918F5] text-base font-medium text-white hover:bg-#7918F5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7918F5]', !canTransfer && 'opacity-50 cursor-not-allowed'),
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TransferIcon, {}),
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
                                        isCopied ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckIcon, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
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
                                isCopied ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckIcon, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
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

;// CONCATENATED MODULE: ./src/web/pages/GetPaid/Claim.tsx


















const Claim = ({ isPreview , recvId , claimAmount , onClose , toggleInvoiceImageDisplay  })=>{
    const { account  } = (0,dist/* useWeb3Provider */.xo)();
    const recvDelegateContract = (0,dist/* useContract */.cq)(receivableDelegateAddress, RecvDelegate_namespaceObject, true);
    const [isCopied, onCopy] = useCopyClipboard();
    const [isLoading, setLoading] = (0,react.useState)(false);
    const [successText, setSuccessText] = (0,react.useState)('');
    const [failureText, setFailureText] = (0,react.useState)('');
    const [txHash, setTxHash] = (0,react.useState)('');
    const formattedAmount = maskedCurrency.resolve(units_lib_esm.formatEther(claimAmount || '0'));
    const { svg  } = useFetchingSvg(receivableSvgAddress, receivableDelegateAddress, recvId);
    const onCloseTxConfirmation = ()=>{
        setTxHash('');
        setSuccessText('');
        setFailureText('');
        setLoading(false);
        onClose();
    };
    const handleClaim = (0,react.useCallback)(/*#__PURE__*/ (0,_async_to_generator/* default */.Z)(function*() {
        if (!account || !recvDelegateContract || !recvId) return;
        setSuccessText('');
        setFailureText('');
        try {
            setLoading(true);
            const gasEstimated = yield recvDelegateContract.estimateGas.withdraw(account, recvId);
            const tx = yield recvDelegateContract.withdraw(account, recvId, {
                gasLimit: gasEstimated == null ? void 0 : gasEstimated.mul(110).div(100)
            });
            setTxHash(tx.hash);
            const receipt = yield tx.wait();
            if (receipt.status === 1) {
                setSuccessText('You have successfully claimed.');
            } else {
                setFailureText('Your claim failed');
            }
        } catch (err) {
            setFailureText('Your claim failed');
        }
    }), [
        account,
        recvDelegateContract,
        recvId
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(components_WithTxConfirmation, {
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
                                    isCopied ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckIcon, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
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
        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Modal, {
            isOpen: true,
            showCloseIcon: isPreview,
            closeOnOverlayClick: isPreview,
            onClose: onClose,
            title: isPreview ? '' : 'Claim',
            className: "min-w-[595px] w-full",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(components_SvgBox, {
                    svg: svg
                }),
                isPreview && !isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(GetPaid_ViewBox, {
                            showInvoiceImage: toggleInvoiceImageDisplay
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex justify-between w-full",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Button, {
                                onClick: handleClaim,
                                className: "w-full gap-2 fill-white inline-flex items-center justify-center px-4 py-2 bg-[#7918F5] text-base font-medium text-white hover:bg-#7918F5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7918F5]",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ClaimIcon, {}),
                                    " Claim ",
                                    maskedCurrency.resolve(units_lib_esm.formatEther(claimAmount || ''))
                                ]
                            })
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
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
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                            src: ic_close_namespaceObject
                                        }),
                                        " Close"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Button, {
                                    onClick: handleClaim,
                                    className: "w-[45%] gap-2 fill-white inline-flex items-center justify-center px-4 py-2 bg-[#7918F5] text-base font-medium text-white hover:bg-[#7918F5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7918F5]",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ClaimIcon, {}),
                                        " Confirm"
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
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
;// CONCATENATED MODULE: ./src/web/components/PreviewBox.tsx









const PreviewBox = (props)=>{
    const { title , data , handlePreview , state , btnIcon , btnAction , btnText , btnDisabled =false , contractAddr , showInvoiceImage  } = props;
    const invoice = title === 'receivable' ? data == null ? void 0 : data.invoice : data;
    const lState = state.toLowerCase();
    const stateTextColor = lState === 'tbc' ? '#597EFF' : lState === 'finalised' ? '#6E747A' : lState === 'overdue' ? '#EC364C' : lState === 'paid' ? '#13C57B' : '#FFAD32';
    const [isCopied, onCopy] = useCopyClipboard();
    const totalPrice = title === 'receivable' ? data == null ? void 0 : data.amount : invoice == null ? void 0 : invoice.totalValue;
    const handleHoverEvent = (target, isOpen)=>{
        if ((target == null ? void 0 : target.type) === 'button') {
            target == null ? void 0 : target.click();
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "bg-white rounded-md flex flex-col p-[0.85714rem] w-[24.5rem] h-[20.07143rem]",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "rounded-md bg-[#F8F8F9] cursor-pointer w-[22.785714285714286rem] h-[14.928571428571429rem]",
                onClick: ()=>handlePreview(data),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (0,tw_merge/* twMerge */.m)('flex h-[0.92857rem] justify-end items-center rounded-t-md bg-[#FFAD32]', lState === 'tbc' && `bg-[#597EFF]`, lState === 'finalised' && `bg-[#6E747A]`, lState === 'paid' && `bg-[#13C57B]`, lState === 'overdue' && `bg-[#EC364C]`),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "pr-[0.85714rem] font-semibold text-[0.64286rem] text-white uppercase",
                            children: state
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "px-[1.42857rem]",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex items-center pt-[1.14286rem]",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                    className: "text-black font-semibold h-[0.64286rem] text-[0.785712rem] uppercase",
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
                                className: "flex pt-[1.14286rem] justify-start font-semibold items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "text-[#BCC1C5] text-[0.64286rem] tracking-[0.5px] h-[0.785712rem] mb-[0.285712rem]",
                                                children: "Invoice from"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: "text-black text-[0.785712rem] w-[8rem] h-[2.142856rem] line-clamp-2",
                                                title: invoice.sellerName,
                                                children: invoice.sellerName
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "text-[#BCC1C5] text-[0.64286rem] mt-[0.57143rem] h-[0.785712rem] uppercase",
                                                children: [
                                                    "ABN: ",
                                                    invoice.sellerAbn
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "px-[0.14286rem]",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InvoiceFromToIcon, {
                                            fillColour: stateTextColor
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "text-[#BCC1C5] text-[0.64286rem] tracking-[0.5px] h-[0.785712rem] mb-[0.285712rem]",
                                                children: "Invoice To"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "text-black text-[0.785712rem] w-[8rem] h-[2.142856rem] line-clamp-2",
                                                title: invoice.buyerName,
                                                children: invoice.buyerName
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "text-[#BCC1C5] text-[0.64286rem] mt-[0.57143rem] h-[0.7857rem] uppercase",
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
                                className: "mt-[1.42857rem] flex items-center font-semibold h-[0.92857rem]",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-[#BCC1C5] text-[0.64286rem] uppercase",
                                        children: "Invoice date"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-black text-[0.785712rem] pl-[2.42857rem]",
                                        children: dayJsAdapter == null ? void 0 : dayJsAdapter.format(dayJsAdapter.date(new Date(Number(invoice.invoiceDate) * 1000)), 'normalDate')
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mt-[0.64286rem] flex items-center font-semibold h-[0.92857rem]",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-[#BCC1C5] text-[0.64286rem] uppercase",
                                        children: "Due date"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: "text-black text-[0.785712rem] flex-1 pl-[3.8rem]",
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
                                                    "d"
                                                ]
                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "text-[#D8DCDE] px-2",
                                                        children: "I"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                        className: "text-red",
                                                        children: [
                                                            "Overdue ",
                                                            `${-getDayDiffs(invoice.dueDate) + 1}`,
                                                            " days"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mt-[0.64286rem] flex items-center font-semibold h-[0.92857rem]",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-[#BCC1C5] text-[0.64286rem] uppercase",
                                        children: "total price"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-black text-[0.785712rem] pl-[2.785711rem]",
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
                    title === 'receivable' ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "cursor-pointer gap-2 flex items-center",
                        onClick: ()=>showInvoiceImage(data),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(InvoiceImageIcon, {
                                fillColour: "#6E747A",
                                "aria-hidden": "true"
                            }),
                            "Invoice Image"
                        ]
                    }) : (invoice == null ? void 0 : invoice.invoiceLink) && /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                        href: invoice.invoiceLink,
                        target: "_blank",
                        className: "cursor-pointer gap-2 flex items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(InvoiceLinkIcon, {
                                fillColour: "#6E747A",
                                "aria-hidden": "true"
                            }),
                            "Invoice Link"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                        href: getExplorerLink((data == null ? void 0 : data.txHash) || (invoice == null ? void 0 : invoice.txHash) || ''),
                        target: "_blank",
                        className: "cursor-pointer flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(EtherscanIcon, {
                                fillColour: "#6E747A"
                            }),
                            "Etherscan"
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "pt-[0.85714rem] flex items-center justify-between gap-[0.57143rem]",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                        disabled: btnDisabled,
                        className: (0,tw_merge/* twMerge */.m)('h-[2.57143rem] w-[19.64286rem] fill-white border-0 flex items-center justify-center gap-[0.57143rem] rounded-[1.42857rem] bg-[#7918F5] text-white text-[1rem] font-medium', btnDisabled && 'cursor-not-allowed opacity-50'),
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
                                                                className: `${active ? 'bg-violet-500 text-white' : ''} group flex w-full border-0 items-center gap-1 rounded-md px-2 py-2 text-sm`,
                                                                onClick: ()=>showInvoiceImage(data),
                                                                children: [
                                                                    active ? /*#__PURE__*/ (0,jsx_runtime.jsx)(InvoiceImageIcon, {
                                                                        "aria-hidden": "true"
                                                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(InvoiceImageIcon, {
                                                                        fillColour: "#6E747A",
                                                                        "aria-hidden": "true"
                                                                    }),
                                                                    "Invoice Image"
                                                                ]
                                                            })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("hr", {
                                                        className: "w-full outline-none border-1 border-solid border-[#ECEDEE] mx-auto px-0 bg-[#ECEDEE]"
                                                    })
                                                ]
                                            }) : (invoice == null ? void 0 : invoice.invoiceLink) && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(menu/* Menu.Item */.v.Item, {
                                                        children: ({ active  })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                className: `${active ? 'bg-violet-500 text-white' : ''} group flex w-full border-0 items-center gap-1 rounded-md px-2 py-2 text-sm cursor-pointer`,
                                                                href: invoice.invoiceLink,
                                                                target: "_blank",
                                                                children: [
                                                                    active ? /*#__PURE__*/ (0,jsx_runtime.jsx)(InvoiceLinkIcon, {
                                                                        "aria-hidden": "true"
                                                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(InvoiceLinkIcon, {
                                                                        fillColour: "#6E747A",
                                                                        "aria-hidden": "true"
                                                                    }),
                                                                    "Invoice Link"
                                                                ]
                                                            })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("hr", {
                                                        className: "w-full outline-none border-1 border-solid border-[#ECEDEE] mx-auto px-0 bg-[#ECEDEE]"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(menu/* Menu.Item */.v.Item, {
                                                children: ({ active  })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                        className: `${active ? 'bg-violet-500 text-white' : ''} group flex w-full border-0 items-center gap-1 rounded-md px-2 py-2 text-sm`,
                                                        onClick: ()=>onCopy(contractAddr),
                                                        children: [
                                                            active ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyIcon, {
                                                                fillColour: "white",
                                                                "aria-hidden": "true"
                                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyIcon, {
                                                                fillColour: "#6E747A",
                                                                "aria-hidden": "true"
                                                            }),
                                                            "Copy Address"
                                                        ]
                                                    })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("hr", {
                                                className: "w-full outline-none border-1 border-solid border-[#ECEDEE] mx-auto px-0 bg-[#ECEDEE]"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(menu/* Menu.Item */.v.Item, {
                                                children: ({ active  })=>{
                                                    /*#__PURE__*/ return (0,jsx_runtime.jsxs)("a", {
                                                        href: getExplorerLink((data == null ? void 0 : data.txHash) || (invoice == null ? void 0 : invoice.txHash) || ''),
                                                        target: "_blank",
                                                        className: `${active ? 'bg-violet-500 text-white' : ''} group flex w-full items-center rounded-md gap-1 px-2 py-2 text-sm cursor-pointer`,
                                                        children: [
                                                            active ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EtherscanIcon, {
                                                                "aria-hidden": "true"
                                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(EtherscanIcon, {
                                                                fillColour: "#6E747A",
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
    });
};
/* harmony default export */ const components_PreviewBox = (PreviewBox);

;// CONCATENATED MODULE: ./src/web/assets/svg/arrow-left.svg
const arrow_left_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjE4NzM0IDEyLjk5OThMMTAuODQzMiAxNy42NTU3TDkuNDI4OTQgMTkuMDY5OUwyLjM1Nzg3IDExLjk5ODhMOS40Mjg5NCA0LjkyNzczTDEwLjg0MzIgNi4zNDE5NUw2LjE4NTI2IDEwLjk5OThMMjEuNSAxMC45OTk4TDIxLjUgMTIuOTk5OEw2LjE4NzM0IDEyLjk5OThaIiBmaWxsPSIjNkU3NDdBIi8+Cjwvc3ZnPgo=";
;// CONCATENATED MODULE: ./src/web/pages/GetPaid/InvoiceImageModal.tsx






const InvoiceImageModal = ({ onModalClose , invoiceId  })=>{
    const { svg  } = useFetchingSvg(invoiceSvgAddress, invoiceDelegateAddress, invoiceId);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* Dialog */.V, {
            open: true,
            onClose: onModalClose,
            as: "div",
            className: "fixed inset-0 z-50 flex bg-[#000000]/40 items-center justify-center overflow-y-auto",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "fixed inset-0 overflow-y-auto",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "flex min-h-full items-center justify-center p-4",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col bg-white text-black my-6 mt-16 py-6 px-6 rounded-lg max-w-xl min-w-[595px]",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* Dialog.Title */.V.Title, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                    src: arrow_left_namespaceObject,
                                    className: "cursor-pointer",
                                    onClick: onModalClose
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_SvgBox, {
                                svg: svg
                            })
                        ]
                    })
                })
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
    const { svg  } = useFetchingSvg(receivableSvgAddress, receivableDelegateAddress, selectedReceivable == null ? void 0 : selectedReceivable.id);
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
        const status = recv.state === '0' ? 1 : recv.state === '1' ? getDayDiffs(recv.invoice.dueDate) < 0 ? 0 : 2 : 3;
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
        if ((recv == null ? void 0 : recv.state) === '1') {
            setOpenClaimModal(true);
        }
        setSelectedReceivable(recv);
        setIsPreview(true);
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
    const toggleInvoiceImageDisplay = (recv)=>{
        setSelectedReceivable(recv);
        setShowInvoiceImageModal(!showInvoiceImageModal);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "p-12 h-full w-full",
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
                        className: "flex flex-wrap gap-[1.785712rem]",
                        children: activeReceivables == null ? void 0 : activeReceivables.sort((a, b)=>{
                            return a.status - b.status || Number(a.invoice.dueDate) - Number(b.invoice.dueDate);
                        }).map((recv, idx)=>{
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(components_PreviewBox, {
                                title: "receivable",
                                data: recv,
                                handlePreview: handlePreview,
                                btnAction: recv.state === '1' ? handleClaim : handleTransfer,
                                btnText: recv.state === '1' ? 'Claim' : 'Transfer',
                                state: stateConverter(recv.state || '0', recv.invoice.dueDate),
                                btnIcon: recv.state === '1' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ClaimIcon, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(TransferIcon, {}),
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
                        className: "flex flex-wrap gap-[1.785712rem]",
                        children: finalisedReceivables == null ? void 0 : finalisedReceivables.sort((a, b)=>{
                            return Number(a.invoice.dueDate) - Number(b.invoice.dueDate);
                        }).map((recv, idx)=>{
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(components_PreviewBox, {
                                title: "receivable",
                                data: recv,
                                handlePreview: handlePreview,
                                btnAction: recv.state === '1' ? handleClaim : handleTransfer,
                                btnText: '',
                                state: stateConverter(recv.state || '0', recv.invoice.dueDate),
                                btnIcon: recv.state === '1' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ClaimIcon, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(TransferIcon, {}),
                                contractAddr: receivableDelegateAddress,
                                showInvoiceImage: toggleInvoiceImageDisplay
                            }, idx);
                        })
                    })
                ]
            }),
            isPreview && !isOpenTransferModal && !isOpenClaimModal && /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Modal, {
                isOpen: isPreview,
                onClose: handlePreviewClose,
                showCloseIcon: true,
                title: '',
                closeOnOverlayClick: true,
                className: "min-w-[595px] w-full",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(components_SvgBox, {
                        svg: svg
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(GetPaid_ViewBox, {
                        showInvoiceImage: ()=>setShowInvoiceImageModal(!showInvoiceImageModal)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex justify-between w-full",
                        children: [
                            (selectedReceivable == null ? void 0 : selectedReceivable.state) === '1' && /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Button, {
                                onClick: ()=>handleClaim(selectedReceivable),
                                className: "w-full gap-2 fill-white inline-flex items-center justify-center px-4 py-2 bg-[#7918F5] text-base font-medium text-white hover:bg-#7918F5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7918F5]",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ClaimIcon, {}),
                                    " Claim ",
                                    maskedCurrency.resolve(units_lib_esm.formatEther((selectedReceivable == null ? void 0 : selectedReceivable.amount) || ''))
                                ]
                            }),
                            (selectedReceivable == null ? void 0 : selectedReceivable.state) === '0' && /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Button, {
                                onClick: ()=>setOpenTransferModal(true),
                                className: "w-full gap-2 fill-white inline-flex items-center justify-center px-4 py-2 bg-[#7918F5] text-base font-medium text-white hover:bg-#7918F5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7918F5]",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TransferIcon, {}),
                                    " Transfer"
                                ]
                            })
                        ]
                    })
                ]
            }),
            isOpenClaimModal && /*#__PURE__*/ (0,jsx_runtime.jsx)(GetPaid_Claim, {
                isPreview: isPreview,
                claimAmount: selectedReceivable == null ? void 0 : selectedReceivable.amount,
                onClose: handlePreviewClose,
                recvId: selectedReceivable == null ? void 0 : selectedReceivable.id,
                toggleInvoiceImageDisplay: ()=>setShowInvoiceImageModal(!showInvoiceImageModal)
            }),
            isOpenTransferModal && /*#__PURE__*/ (0,jsx_runtime.jsx)(GetPaid_Transfer, {
                isPreview: isPreview,
                onClose: handlePreviewClose,
                recvId: selectedReceivable == null ? void 0 : selectedReceivable.id,
                amount: selectedReceivable == null ? void 0 : selectedReceivable.amount
            }),
            showInvoiceImageModal && /*#__PURE__*/ (0,jsx_runtime.jsx)(GetPaid_InvoiceImageModal, {
                onModalClose: ()=>setShowInvoiceImageModal(!showInvoiceImageModal),
                invoiceId: (selectedReceivable == null ? void 0 : selectedReceivable.invoiceNumber) || (selectedReceivable == null ? void 0 : selectedReceivable.invoice.id)
            })
        ]
    });
};
/* harmony default export */ const pages_GetPaid = (GetPaid);

// EXTERNAL MODULE: ./node_modules/.pnpm/ethereum-multicall@2.16.1/node_modules/ethereum-multicall/dist/esm/index.js + 6 modules
var dist_esm = __webpack_require__(2691);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ethersproject+providers@5.7.2/node_modules/@ethersproject/providers/lib.esm/index.js + 13 modules
var providers_lib_esm = __webpack_require__(4956);
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
                            isCopied ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckIcon, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
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
    const { svg  } = useFetchingSvg(invoiceSvgAddress, invoiceDelegateAddress, invoice == null ? void 0 : invoice.id);
    const onConfirming = (0,react.useCallback)(/*#__PURE__*/ (0,_async_to_generator/* default */.Z)(function*() {
        if (!invoiceDelegatecontract || !account) return;
        setSuccessText('');
        setFailureText('');
        try {
            setLoading(true);
            const gasEstimated = yield invoiceDelegatecontract.estimateGas.confirm(invoice == null ? void 0 : invoice.id);
            const tx = yield invoiceDelegatecontract.confirm(invoice == null ? void 0 : invoice.id, {
                gasLimit: gasEstimated == null ? void 0 : gasEstimated.mul(110).div(100)
            });
            setTxHash(tx.hash);
            const receipt = yield tx.wait();
            if (receipt.status === 1) {
                setSuccessText('You have successfully confirmed');
            } else {
                setFailureText('Your confirm failed');
            }
        } catch (err) {
            setFailureText('Your confirm failed');
        }
    }), [
        invoiceDelegatecontract,
        invoice
    ]);
    const handleReset = (0,react.useCallback)(()=>{
        setLoading(false);
        setTxHash('');
        setSuccessText('');
        setFailureText('');
        onConfirmModalClose();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            !isLoading && /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Modal, {
                isOpen: isOpenConfirmModal,
                onClose: handleReset,
                showCloseIcon: isPreview,
                closeOnOverlayClick: isPreview,
                title: isPreview ? '' : 'Confirm',
                className: "min-w-[595px] w-full",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(components_SvgBox, {
                        svg: svg
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
                                className: "w-[45%] gap-1 inline-flex justify-center rounded-2xl items-center px-4 py-2 bg-[#ECEDEE] font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: ic_close_namespaceObject
                                    }),
                                    " Close"
                                ]
                            }),
                            state && state === 'finalised' ? '' : /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Button, {
                                onClick: onConfirming,
                                className: (0,tw_merge/* twMerge */.m)('w-[45%] gap-2 fill-white inline-flex items-center justify-center px-4 py-2 bg-[#7918F5] text-base font-medium text-white hover:bg-#7918F5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7918F5]', isPreview && 'w-full'),
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ConfirmIcon, {}),
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
                closeTxConfirmation: handleReset,
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
    const [isWaiting, setWaiting] = (0,react.useState)(false);
    const amount = (invoice == null ? void 0 : invoice.totalValue) || '0';
    const formattedAmount = maskedCurrency.resolve(units_lib_esm.formatEther(amount));
    const hasSufficientAUD = weAudBalance && Number(weAudBalance) >= Number(amount);
    const canPay = Number(weAudAllowance) >= Number(amount) && hasSufficientAUD;
    const { svg  } = useFetchingSvg(invoiceSvgAddress, invoiceDelegateAddress, invoice == null ? void 0 : invoice.id);
    const handleApprove = (0,react.useCallback)(/*#__PURE__*/ (0,_async_to_generator/* default */.Z)(function*() {
        if (!account || !erc20Contract || !amount) return;
        setSuccessText('');
        setFailureText('');
        try {
            setLoading(true);
            const gasEstimated = yield erc20Contract.estimateGas.approve(invoiceDelegateAddress, amount);
            const tx = yield erc20Contract.approve(invoiceDelegateAddress, amount, {
                gasLimit: gasEstimated == null ? void 0 : gasEstimated.mul(110).div(100)
            });
            setTxHash(tx.hash);
            const receipt = yield tx.wait();
            if (receipt.status === 1) {
                setSuccessText('You have successfully approved.');
                setWaiting(true);
                setTimeout(()=>{
                    setWaiting(false);
                }, 3000);
            } else {
                setFailureText('Your approval failed');
            }
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
        setSuccessText('');
        setFailureText('');
        try {
            setLoading(true);
            const gasEstimated = yield invoiceDelegatecontract.estimateGas.pay(invoice == null ? void 0 : invoice.id);
            const tx = yield invoiceDelegatecontract.pay(invoice == null ? void 0 : invoice.id, {
                gasLimit: gasEstimated == null ? void 0 : gasEstimated.mul(110).div(100)
            });
            setTxHash(tx.hash);
            const receipt = yield tx.wait();
            if (receipt.status === 1) {
                setSuccessText('You have successfully paid.');
                localStorage.setItem(`${invoice == null ? void 0 : invoice.id}paid`, 'true');
            } else {
                setFailureText('Your payment failed');
            }
        } catch (err) {
            setFailureText('Your payment failed');
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
        const isPaid = localStorage.getItem(`${invoice == null ? void 0 : invoice.id}paid`);
        if (!!isPaid) {
            setOpenPayModal(false);
        }
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
                className: "min-w-[595px] w-full",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(components_SvgBox, {
                        svg: svg
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
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                            src: ic_close_namespaceObject
                                        }),
                                        " Close"
                                    ]
                                }),
                                !canPay ? /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Button, {
                                    onClick: handleApprove,
                                    disabled: !hasSufficientAUD,
                                    className: (0,tw_merge/* twMerge */.m)('w-[45%] gap-2 fill-white inline-flex items-center justify-center px-4 py-2 bg-[#7918F5] text-base font-medium text-white hover:bg-#7918F5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7918F5]', isPreview && 'w-full', !hasSufficientAUD && 'cursor-not-allowed opacity-50'),
                                    children: !hasSufficientAUD ? /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                                        children: "No sufficient weAUD in your wallet"
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PayIcon, {}),
                                            " Approve"
                                        ]
                                    })
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Button, {
                                    onClick: handlePay,
                                    disabled: !hasSufficientAUD || isWaiting,
                                    className: (0,tw_merge/* twMerge */.m)('w-[45%] gap-2 fill-white inline-flex items-center justify-center px-4 py-2 bg-[#7918F5] text-base font-medium text-white hover:bg-#7918F5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7918F5]', isPreview && 'w-full'),
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(PayIcon, {}),
                                        " Confirm"
                                    ]
                                })
                            ]
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Button, {
                            onClick: canPay ? handlePay : handleApprove,
                            disabled: !hasSufficientAUD || isWaiting,
                            className: (0,tw_merge/* twMerge */.m)('w-full gap-2 fill-white inline-flex items-center justify-center px-4 py-2 bg-[#7918F5] text-base font-medium text-white hover:bg-#7918F5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7918F5]'),
                            children: !hasSufficientAUD ? /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                                children: "No sufficient weAUD in your wallet"
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PayIcon, {}),
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
                                        isCopied ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckIcon, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
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
    const { svg  } = useFetchingSvg(invoiceSvgAddress, invoiceDelegateAddress, selectedInvoice == null ? void 0 : selectedInvoice.id);
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
        if (invoice.state === '0') {
            setOpenConfirmModal(true);
        } else if (invoice.state === '1') {
            setOpenPayModal(true);
        }
        setSelectedInvoice(invoice);
        setIsPreview(true);
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
                        className: "flex flex-wrap gap-[1.785712rem]",
                        children: activeInvoices == null ? void 0 : activeInvoices.sort((a, b)=>{
                            return a.status - b.status || Number(a.dueDate) - Number(b.dueDate);
                        }).map((invoice, idx)=>{
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(components_PreviewBox, {
                                title: "tax invoice",
                                data: invoice,
                                handlePreview: handlePreview,
                                btnAction: invoice.state === '1' ? handlePay : handleConfirm,
                                btnText: invoice.state === '1' ? 'Pay' : 'Confirm',
                                state: stateConverter(invoice.state || '0', invoice.dueDate),
                                btnIcon: invoice.state === '1' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PayIcon, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ConfirmIcon, {}),
                                contractAddr: invoiceDelegateAddress,
                                showInvoiceImage: ()=>void 0
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
                        className: "flex flex-wrap gap-[1.785712rem]",
                        children: finalisedInvoices == null ? void 0 : finalisedInvoices.map((invoice)=>{
                            const status = invoice.state === '0' ? 1 : invoice.state === '1' ? getDayDiffs(invoice.dueDate) < 0 ? 0 : 2 : 3;
                            return (0,_extends/* default */.Z)({}, invoice, {
                                status
                            });
                        }).sort((a, b)=>Number(a.dueDate) - Number(b.dueDate)).map((invoice, idx)=>{
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(components_PreviewBox, {
                                title: "tax invoice",
                                data: invoice,
                                handlePreview: handlePreview,
                                btnAction: ()=>void 0,
                                btnText: "",
                                state: "finalised",
                                contractAddr: invoiceDelegateAddress,
                                showInvoiceImage: ()=>void 0
                            }, idx);
                        })
                    })
                ]
            }),
            isPreview && (selectedInvoice == null ? void 0 : selectedInvoice.state) === '2' && /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Modal, {
                isOpen: isPreview,
                onClose: handlePreviewClose,
                showCloseIcon: true,
                title: '',
                closeOnOverlayClick: true,
                className: "min-w-[595px] w-full",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(components_SvgBox, {
                        svg: svg
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex items-center justify-center py-[24px] w-full",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Pay_ViewBox, {})
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

;// CONCATENATED MODULE: ./src/web/assets/svg/received.svg
const received_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuNDcwNzcgMEgxNC43ODkyQzE1LjExMDMgMCAxNS40MTgzIDAuMTMxNzAzIDE1LjY0NTQgMC4zNjYxMzdDMTUuODcyNCAwLjYwMDU3IDE2IDAuOTE4NTMgMTYgMS4yNTAwN1Y3LjUwMDQxSDE0Ljc4OTJWNS4wMDAyOEg4LjczNTM4VjcuNTAwNDFINy41MjQ2MlY1LjAwMDI4SDEuNDcwNzdWOS4zNzU1Mkg3LjUyNDYyVjEwLjYyNTZIMS40NzA3N1YxNS4wMDA4SDcuNTI0NjJWMTYuMjUwOUgxLjQ3MDc3QzEuMTQ5NjUgMTYuMjUwOSAwLjg0MTY5IDE2LjExOTIgMC42MTQ2MjcgMTUuODg0OEMwLjM4NzU2NCAxNS42NTAzIDAuMjYgMTUuMzMyNCAwLjI2IDE1LjAwMDhWMS4yNTAwN0MwLjI2IDAuOTE4NTMgMC4zODc1NjQgMC42MDA1NyAwLjYxNDYyNyAwLjM2NjEzN0MwLjg0MTY5IDAuMTMxNzAzIDEuMTQ5NjUgMCAxLjQ3MDc3IDBaTTEuNDcwNzcgMy43NTAyMUgxNC43ODkyVjEuMjUwMDdIMS40NzA3N1YzLjc1MDIxWiIgZmlsbD0iIzBEMTgyMSIvPgo8cGF0aCBkPSJNOS4zMzk4NCAxMC42MjZMMTAuNTUwNiAxMC42MjZMMTAuNTUwNiAxNC4xMTc1TDE1LjE0MzEgOS4zNzU5OEwxNS45OTkxIDEwLjI1OThMMTEuNDA2NiAxNS4wMDEzTDE0Ljc4ODMgMTUuMDAxM0wxNC43ODgzIDE2LjI1MTRMOS4zMzk4NCAxNi4yNTE0TDkuMzM5ODQgMTAuNjI2WiIgZmlsbD0iIzBEMTgyMSIvPgo8L3N2Zz4K";
;// CONCATENATED MODULE: ./src/web/assets/svg/tbr.svg
const tbr_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuNDcwNzcgMkgxNi43ODkyQzE3LjExMDMgMiAxNy40MTgzIDIuMTMxNyAxNy42NDU0IDIuMzY2MTRDMTcuODcyNCAyLjYwMDU3IDE4IDIuOTE4NTMgMTggMy4yNTAwN1YxMUgxNi43ODkyVjcuMDAwMjhIMTAuNzM1NEg5LjUyNDYySDMuNDcwNzdWMTEuMzc1NUg5LjUyNDYyVjEyLjYyNTZIMy40NzA3N1YxNy4wMDA4SDExLjVWMTguMjUwOUgzLjQ3MDc3QzMuMTQ5NjUgMTguMjUwOSAyLjg0MTY5IDE4LjExOTIgMi42MTQ2MyAxNy44ODQ4QzIuMzg3NTYgMTcuNjUwMyAyLjI2IDE3LjMzMjQgMi4yNiAxNy4wMDA4VjMuMjUwMDdDMi4yNiAyLjkxODUzIDIuMzg3NTYgMi42MDA1NyAyLjYxNDYzIDIuMzY2MTRDMi44NDE2OSAyLjEzMTcgMy4xNDk2NSAyIDMuNDcwNzcgMlpNMy40NzA3NyA1Ljc1MDIxSDE2Ljc4OTJWMy4yNTAwN0gzLjQ3MDc3VjUuNzUwMjFaIiBmaWxsPSIjMEQxODIxIi8+CjxwYXRoIGQ9Ik0xOC40MTY3IDE0SDEzVjE1LjA3MTRIMTguNDE2N1YxNFoiIGZpbGw9IiMwRDE4MjEiLz4KPC9zdmc+Cg==";
;// CONCATENATED MODULE: ./src/web/assets/svg/recv-counts.svg
const recv_counts_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNyAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjQ2MDEgMC44NzVIMi4xNDIzNEMxLjgyMTI0IDAuODc1IDEuNTEzMyAxLjAwNjcgMS4yODYyNSAxLjI0MTEyQzEuMDU5MiAxLjQ3NTU0IDAuOTMxNjQxIDEuNzkzNDggMC45MzE2NDEgMi4xMjVWOC4zNzVIMi4xNDIzNFY1Ljg3NUg4LjE5NTg2VjguMzc1SDkuNDA2NTZWNS44NzVIMTUuNDYwMVYxMC4yNUg5LjQwNjU2VjExLjVIMTUuNDYwMVYxNS44NzVIOS40MDY1NlYxNy4xMjVIMTUuNDYwMUMxNS43ODEyIDE3LjEyNSAxNi4wODkxIDE2Ljk5MzMgMTYuMzE2MiAxNi43NTg5QzE2LjU0MzIgMTYuNTI0NSAxNi42NzA4IDE2LjIwNjUgMTYuNjcwOCAxNS44NzVWMi4xMjVDMTYuNjcwOCAxLjc5MzQ4IDE2LjU0MzIgMS40NzU1NCAxNi4zMTYyIDEuMjQxMTJDMTYuMDg5MSAxLjAwNjcgMTUuNzgxMiAwLjg3NSAxNS40NjAxIDAuODc1Wk0xNS40NjAxIDQuNjI1SDIuMTQyMzRWMi4xMjVIMTUuNDYwMVY0LjYyNVoiIGZpbGw9IiMxNjE2MTYiLz4KPHBhdGggZD0iTTcuNTg5ODQgMTEuNUw2LjM3OTE0IDExLjVMNi4zNzkxNCAxNC45OTEyTDEuNzg2OTUgMTAuMjVMMC45MzA5OCAxMS4xMzM3TDUuNTIzMTcgMTUuODc1TDIuMTQxNjggMTUuODc1TDIuMTQxNjggMTcuMTI1TDcuNTg5ODQgMTcuMTI1TDcuNTg5ODQgMTEuNVoiIGZpbGw9IiMxNjE2MTYiLz4KPC9zdmc+Cg==";
;// CONCATENATED MODULE: ./src/web/assets/svg/total-paid.svg
const total_paid_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjc2OTIgMTcuMDc3MUMxMy4xMzAyIDE3LjA3NzEgMTIuNTA1NiAxNi44ODc2IDExLjk3NDMgMTYuNTMyNkMxMS40NDMgMTYuMTc3NiAxMS4wMjg5IDE1LjY3MyAxMC43ODQ0IDE1LjA4MjdDMTAuNTM5OSAxNC40OTI0IDEwLjQ3NTkgMTMuODQyOCAxMC42MDA1IDEzLjIxNkMxMC43MjUyIDEyLjU4OTMgMTEuMDMyOSAxMi4wMTM3IDExLjQ4NDcgMTEuNTYxOEMxMS45MzY2IDExLjExIDEyLjUxMjIgMTAuODAyMyAxMy4xMzg5IDEwLjY3NzZDMTMuNzY1NiAxMC41NTMgMTQuNDE1MiAxMC42MTcgMTUuMDA1NiAxMC44NjE1QzE1LjU5NTkgMTEuMTA2IDE2LjEwMDUgMTEuNTIwMSAxNi40NTU1IDEyLjA1MTRDMTYuODEwNSAxMi41ODI3IDE3IDEzLjIwNzQgMTcgMTMuODQ2M0MxNi45OTkgMTQuNzAyOSAxNi42NTg0IDE1LjUyNDEgMTYuMDUyNyAxNi4xMjk4QzE1LjQ0NyAxNi43MzU1IDE0LjYyNTggMTcuMDc2MiAxMy43NjkyIDE3LjA3NzFaTTEzLjc2OTIgMTEuNjkyNUMxMy4zNDMyIDExLjY5MjUgMTIuOTI2OCAxMS44MTg4IDEyLjU3MjYgMTIuMDU1NUMxMi4yMTg0IDEyLjI5MjEgMTEuOTQyNCAxMi42Mjg1IDExLjc3OTMgMTMuMDIyMUMxMS42MTYzIDEzLjQxNTcgMTEuNTczNyAxMy44NDg3IDExLjY1NjggMTQuMjY2NUMxMS43Mzk5IDE0LjY4NDMgMTEuOTQ1IDE1LjA2ODEgMTIuMjQ2MiAxNS4zNjkzQzEyLjU0NzUgMTUuNjcwNiAxMi45MzEyIDE1Ljg3NTcgMTMuMzQ5IDE1Ljk1ODhDMTMuNzY2OCAxNi4wNDE5IDE0LjE5OTkgMTUuOTk5MyAxNC41OTM1IDE1LjgzNjJDMTQuOTg3IDE1LjY3MzIgMTUuMzIzNCAxNS4zOTcxIDE1LjU2MDEgMTUuMDQzQzE1Ljc5NjggMTQuNjg4OCAxNS45MjMxIDE0LjI3MjMgMTUuOTIzMSAxMy44NDYzQzE1LjkyMjQgMTMuMjc1MyAxNS42OTUzIDEyLjcyNzggMTUuMjkxNSAxMi4zMjRDMTQuODg3NyAxMS45MjAzIDE0LjM0MDMgMTEuNjkzMSAxMy43NjkyIDExLjY5MjVaIiBmaWxsPSIjMEQxODIxIi8+CjxwYXRoIGQ9Ik05LjQ2MTU0IDE2LjAwMDJINC4wNzY5MlYzLjA3NzExSDguMzg0NjJWNi4zMDc4OEM4LjM4NTQ0IDYuNTkzMjQgOC40OTkxNyA2Ljg2NjY4IDguNzAwOTUgNy4wNjg0N0M4LjkwMjczIDcuMjcwMjUgOS4xNzYxNyA3LjM4Mzk4IDkuNDYxNTQgNy4zODQ4SDEyLjY5MjNWOS4wMDAxOUgxMy43NjkyVjYuMzA3ODhDMTMuNzcxMiA2LjIzNzExIDEzLjc1NzcgNi4xNjY3NiAxMy43Mjk4IDYuMTAxNjlDMTMuNzAxOSA2LjAzNjYxIDEzLjY2MDMgNS45NzgzNyAxMy42MDc3IDUuOTMwOTVMOS44Mzg0NiAyLjE2MTcyQzkuNzkxMDYgMi4xMDkxMyA5LjczMjgxIDIuMDY3NDUgOS42Njc3NCAyLjAzOTU2QzkuNjAyNjYgMi4wMTE2NyA5LjUzMjMxIDEuOTk4MjQgOS40NjE1NCAyLjAwMDE5SDQuMDc2OTJDMy43OTE1NiAyLjAwMTAxIDMuNTE4MTIgMi4xMTQ3MyAzLjMxNjMzIDIuMzE2NTJDMy4xMTQ1NSAyLjUxODMgMy4wMDA4MiAyLjc5MTc0IDMgMy4wNzcxMVYxNi4wMDAyQzMuMDAwODIgMTYuMjg1NiAzLjExNDU1IDE2LjU1OSAzLjMxNjMzIDE2Ljc2MDhDMy41MTgxMiAxNi45NjI2IDMuNzkxNTYgMTcuMDc2MyA0LjA3NjkyIDE3LjA3NzFIOS40NjE1NFYxNi4wMDAyWk05LjQ2MTU0IDMuMjkyNDlMMTIuNDc2OSA2LjMwNzg4SDkuNDYxNTRWMy4yOTI0OVoiIGZpbGw9IiMwRDE4MjEiLz4KPHBhdGggZD0iTTQuMDc3MTUgMTcuMDc3TDcuOTM3OTIgMTcuMDc3TDYuNTQ4NjkgMTguNDcxNkw3LjMwNzkyIDE5LjIzMDhMMTAuMDAwMiAxNi41Mzg1TDcuMzA3OTIgMTMuODQ2Mkw2LjU0ODY5IDE0LjYwNTRMNy45Mzc5MiAxNkw0LjA3NzE1IDE2VjE3LjA3N1oiIGZpbGw9IiMwRDE4MjEiLz4KPC9zdmc+Cg==";
;// CONCATENATED MODULE: ./src/web/assets/svg/tbp.svg
const tbp_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDEzLjc4NThIMTAuNTgzM1YxNC44NTcySDE2VjEzLjc4NThaIiBmaWxsPSIjMEQxODIxIi8+CjxwYXRoIGQ9Ik04LjQxNjY3IDE1LjkyODZINC4wODMzM1YzLjA3MTZIOC40MTY2N1Y2LjI4NTg1QzguNDE3NSA2LjU2OTc1IDguNTMxOSA2Ljg0MTc5IDguNzM0ODggNy4wNDI1NUM4LjkzNzg3IDcuMjQzMyA5LjIxMjk0IDcuMzU2NDQgOS41IDcuMzU3MjZIMTIuNzVWMTEuNjQyOUgxMy44MzMzVjYuMjg1ODVDMTMuODM1MyA2LjIxNTQ0IDEzLjgyMTggNi4xNDU0NSAxMy43OTM3IDYuMDgwNzFDMTMuNzY1NiA2LjAxNTk3IDEzLjcyMzcgNS45NTgwMiAxMy42NzA4IDUuOTEwODVMOS44NzkxNyAyLjE2MDlDOS44MzE0OSAyLjEwODU3IDkuNzcyODkgMi4wNjcxMSA5LjcwNzQzIDIuMDM5MzZDOS42NDE5NyAyLjAxMTYxIDkuNTcxMTkgMS45OTgyNSA5LjUgMi4wMDAxOEg0LjA4MzMzQzMuNzk2MjcgMi4wMDEgMy41MjEyIDIuMTE0MTUgMy4zMTgyMiAyLjMxNDlDMy4xMTUyMyAyLjUxNTY1IDMuMDAwODMgMi43ODc2OSAzIDMuMDcxNlYxNS45Mjg2QzMuMDAwODMgMTYuMjEyNSAzLjExNTIzIDE2LjQ4NDUgMy4zMTgyMiAxNi42ODUzQzMuNTIxMiAxNi44ODYgMy43OTYyNyAxNi45OTkyIDQuMDgzMzMgMTdIOC40MTY2N1YxNS45Mjg2Wk05LjUgMy4yODU4OEwxMi41MzMzIDYuMjg1ODVIOS41VjMuMjg1ODhaIiBmaWxsPSIjMEQxODIxIi8+Cjwvc3ZnPgo=";
;// CONCATENATED MODULE: ./src/web/assets/svg/to-pay.svg
const to_pay_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuNzY4MDYgNC4xMjkwM0w3LjcxODQ5IDIuMDg3NTlDNy42OTI3MyAyLjA1OTEgNy42NjEwNiAyLjAzNjUxIDcuNjI1NjcgMi4wMjE0MUM3LjU5MDI4IDIuMDA2MyA3LjU1MjAyIDEuOTk5MDMgNy41MTM1NCAyLjAwMDFINC41ODU1OUM0LjQzMDQyIDIuMDAwNTYgNC4yODE3NCAyLjA2MjE1IDQuMTcyMDIgMi4xNzE0NEM0LjA2MjMgMi4yODA3MyA0LjAwMDQ2IDIuNDI4ODIgNCAyLjU4MzM3VjkuNTgyNkM0LjAwMDQ2IDkuNzM3MTUgNC4wNjIzIDkuODg1MjQgNC4xNzIwMiA5Ljk5NDUzQzQuMjgxNzQgMTAuMTAzOCA0LjQzMDQyIDEwLjE2NTQgNC41ODU1OSAxMC4xNjU5SDkuMjcwMzFDOS40MjU0NyAxMC4xNjU0IDkuNTc0MTYgMTAuMTAzOCA5LjY4Mzg4IDkuOTk0NTNDOS43OTM2IDkuODg1MjQgOS44NTU0NCA5LjczNzE1IDkuODU1OSA5LjU4MjZWNC4zMzMxOEM5Ljg1Njk3IDQuMjk0ODQgOS44NDk2NyA0LjI1Njc0IDkuODM0NTEgNC4yMjE0OUM5LjgxOTM0IDQuMTg2MjQgOS43OTY2NyA0LjE1NDY5IDkuNzY4MDYgNC4xMjkwM1pNNy41MTM1NCAyLjcwMDAzTDkuMTUzMTkgNC4zMzMxOEg3LjUxMzU0VjIuNzAwMDNaTTkuMjcwMzEgOS41ODI2SDQuNTg1NTlWMi41ODMzN0g2LjkyNzk1VjQuMzMzMThDNi45Mjg0IDQuNDg3NzMgNi45OTAyNSA0LjYzNTgyIDcuMDk5OTcgNC43NDUxMUM3LjIwOTY5IDQuODU0NCA3LjM1ODM3IDQuOTE1OTkgNy41MTM1NCA0LjkxNjQ1SDkuMjcwMzFWOS41ODI2WiIgZmlsbD0iIzE2MTYxNiIvPgo8cGF0aCBkPSJNNy40OTI3NiAyLjU4NTQ1SDYuOTE0NzVMNi42MDM1MiA1LjI1MzE4TDkuMTM3ODYgNS4xNjQyNkw5LjI3MTI1IDQuODk3NDhMOS4xMzc4NiA0LjMxOTQ4TDcuNjcwNjEgNC4wMDgyNEw3LjQ5Mjc2IDIuNTg1NDVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTYuODU1OSA0LjEyOTAzTDE0LjgwNjQgMi4wODc1OUMxNC43ODA2IDIuMDU5MSAxNC43NDkgMi4wMzY1MSAxNC43MTM2IDIuMDIxNDFDMTQuNjc4MiAyLjAwNjMgMTQuNjM5OSAxLjk5OTAzIDE0LjYwMTQgMi4wMDAxSDExLjY3MzVDMTEuNTE4MyAyLjAwMDU2IDExLjM2OTYgMi4wNjIxNSAxMS4yNTk5IDIuMTcxNDRDMTEuMTUwMiAyLjI4MDczIDExLjA4ODMgMi40Mjg4MiAxMS4wODc5IDIuNTgzMzdWOS41ODI2QzExLjA4ODMgOS43MzcxNSAxMS4xNTAyIDkuODg1MjQgMTEuMjU5OSA5Ljk5NDUzQzExLjM2OTYgMTAuMTAzOCAxMS41MTgzIDEwLjE2NTQgMTEuNjczNSAxMC4xNjU5SDE2LjM1ODJDMTYuNTEzNCAxMC4xNjU0IDE2LjY2MiAxMC4xMDM4IDE2Ljc3MTggOS45OTQ1M0MxNi44ODE1IDkuODg1MjQgMTYuOTQzMyA5LjczNzE1IDE2Ljk0MzggOS41ODI2VjQuMzMzMThDMTYuOTQ0OSA0LjI5NDg0IDE2LjkzNzYgNC4yNTY3NCAxNi45MjI0IDQuMjIxNDlDMTYuOTA3MiA0LjE4NjI0IDE2Ljg4NDYgNC4xNTQ2OSAxNi44NTU5IDQuMTI5MDNaTTE0LjYwMTQgMi43MDAwM0wxNi4yNDExIDQuMzMzMThIMTQuNjAxNFYyLjcwMDAzWk0xNi4zNTgyIDkuNTgyNkgxMS42NzM1VjIuNTgzMzdIMTQuMDE1OFY0LjMzMzE4QzE0LjAxNjMgNC40ODc3MyAxNC4wNzgxIDQuNjM1ODIgMTQuMTg3OSA0Ljc0NTExQzE0LjI5NzYgNC44NTQ0IDE0LjQ0NjMgNC45MTU5OSAxNC42MDE0IDQuOTE2NDVIMTYuMzU4MlY5LjU4MjZaIiBmaWxsPSIjMTYxNjE2Ii8+CjxwYXRoIGQ9Ik0xNC41ODA3IDIuNTg1NDVIMTQuMDAyNkwxMy42OTE0IDUuMjUzMThMMTYuMjI1OCA1LjE2NDI2TDE2LjM1OTEgNC44OTc0OEwxNi4yMjU4IDQuMzE5NDhMMTQuNzU4NSA0LjAwODI0TDE0LjU4MDcgMi41ODU0NVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik05Ljc2ODA2IDEyLjkxMTNMNy43MTg0OSAxMC44Njk4QzcuNjkyNzMgMTAuODQxMyA3LjY2MTA2IDEwLjgxODcgNy42MjU2NyAxMC44MDM2QzcuNTkwMjggMTAuNzg4NSA3LjU1MjAyIDEwLjc4MTMgNy41MTM1NCAxMC43ODIzSDQuNTg1NTlDNC40MzA0MiAxMC43ODI4IDQuMjgxNzQgMTAuODQ0NCA0LjE3MjAyIDEwLjk1MzdDNC4wNjIzIDExLjA2MyA0LjAwMDQ2IDExLjIxMSA0IDExLjM2NTZWMTguMzY0OEM0LjAwMDQ2IDE4LjUxOTQgNC4wNjIzIDE4LjY2NzUgNC4xNzIwMiAxOC43NzY4QzQuMjgxNzQgMTguODg2IDQuNDMwNDIgMTguOTQ3NiA0LjU4NTU5IDE4Ljk0ODFIOS4yNzAzMUM5LjQyNTQ3IDE4Ljk0NzYgOS41NzQxNiAxOC44ODYgOS42ODM4OCAxOC43NzY4QzkuNzkzNiAxOC42Njc1IDkuODU1NDQgMTguNTE5NCA5Ljg1NTkgMTguMzY0OFYxMy4xMTU0QzkuODU2OTcgMTMuMDc3MSA5Ljg0OTY3IDEzLjAzOSA5LjgzNDUxIDEzLjAwMzdDOS44MTkzNCAxMi45Njg1IDkuNzk2NjcgMTIuOTM2OSA5Ljc2ODA2IDEyLjkxMTNaTTcuNTEzNTQgMTEuNDgyM0w5LjE1MzE5IDEzLjExNTRINy41MTM1NFYxMS40ODIzWk05LjI3MDMxIDE4LjM2NDhINC41ODU1OVYxMS4zNjU2SDYuOTI3OTVWMTMuMTE1NEM2LjkyODQgMTMuMjcgNi45OTAyNSAxMy40MTgxIDcuMDk5OTcgMTMuNTI3M0M3LjIwOTY5IDEzLjYzNjYgNy4zNTgzNyAxMy42OTgyIDcuNTEzNTQgMTMuNjk4N0g5LjI3MDMxVjE4LjM2NDhaIiBmaWxsPSIjMTYxNjE2Ii8+CjxwYXRoIGQ9Ik03LjQ5Mjc2IDExLjM2ODJINi45MTQ3NUw2LjYwMzUyIDE0LjAzNTlMOS4xMzc4NiAxMy45NDdMOS4yNzEyNSAxMy42ODAyTDkuMTM3ODYgMTMuMTAyMkw3LjY3MDYxIDEyLjc5MUw3LjQ5Mjc2IDExLjM2ODJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTYuODU1OSAxMi45MTA4TDE0LjgwNjQgMTAuODY5M0MxNC43ODA2IDEwLjg0MDggMTQuNzQ5IDEwLjgxODMgMTQuNzEzNiAxMC44MDMxQzE0LjY3ODIgMTAuNzg4IDE0LjYzOTkgMTAuNzgwOCAxNC42MDE0IDEwLjc4MThIMTEuNjczNUMxMS41MTgzIDEwLjc4MjMgMTEuMzY5NiAxMC44NDM5IDExLjI1OTkgMTAuOTUzMkMxMS4xNTAyIDExLjA2MjUgMTEuMDg4MyAxMS4yMTA2IDExLjA4NzkgMTEuMzY1MVYxOC4zNjQzQzExLjA4ODMgMTguNTE4OSAxMS4xNTAyIDE4LjY2NyAxMS4yNTk5IDE4Ljc3NjNDMTEuMzY5NiAxOC44ODU2IDExLjUxODMgMTguOTQ3MSAxMS42NzM1IDE4Ljk0NzZIMTYuMzU4MkMxNi41MTM0IDE4Ljk0NzEgMTYuNjYyIDE4Ljg4NTYgMTYuNzcxOCAxOC43NzYzQzE2Ljg4MTUgMTguNjY3IDE2Ljk0MzMgMTguNTE4OSAxNi45NDM4IDE4LjM2NDNWMTMuMTE0OUMxNi45NDQ5IDEzLjA3NjYgMTYuOTM3NiAxMy4wMzg1IDE2LjkyMjQgMTMuMDAzMkMxNi45MDcyIDEyLjk2OCAxNi44ODQ2IDEyLjkzNjQgMTYuODU1OSAxMi45MTA4Wk0xNC42MDE0IDExLjQ4MThMMTYuMjQxMSAxMy4xMTQ5SDE0LjYwMTRWMTEuNDgxOFpNMTYuMzU4MiAxOC4zNjQzSDExLjY3MzVWMTEuMzY1MUgxNC4wMTU4VjEzLjExNDlDMTQuMDE2MyAxMy4yNjk1IDE0LjA3ODEgMTMuNDE3NiAxNC4xODc5IDEzLjUyNjhDMTQuMjk3NiAxMy42MzYxIDE0LjQ0NjMgMTMuNjk3NyAxNC42MDE0IDEzLjY5ODJIMTYuMzU4MlYxOC4zNjQzWiIgZmlsbD0iIzE2MTYxNiIvPgo8cGF0aCBkPSJNMTQuNTgwNyAxMS4zNjcySDE0LjAwMjZMMTMuNjkxNCAxNC4wMzQ5TDE2LjIyNTggMTMuOTQ2TDE2LjM1OTEgMTMuNjc5MkwxNi4yMjU4IDEzLjEwMTJMMTQuNzU4NSAxMi43OUwxNC41ODA3IDExLjM2NzJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K";
;// CONCATENATED MODULE: ./src/web/pages/Dashboard.tsx

















function Dashboard() {
    const { account , chainId , switchChain  } = (0,dist/* useWeb3Provider */.xo)();
    const { openModal: openWalletModel , setConnections , open  } = (0,dist/* useConnectModal */.We)();
    const navigate = (0,react_router_dist/* useNavigate */.s0)();
    const isIdle = (0,useIdle/* default */.Z)();
    const [queryResult, reexecuteQuery] = (0,urql_es/* useQuery */.aM)({
        query: StatsQuery,
        variables: {
            account
        },
        requestPolicy: 'cache-and-network',
        pause: !account || isIdle
    });
    const { data: stats , fetching: isFetching  } = queryResult;
    const invoiceStats = (stats == null ? void 0 : stats.invoices) || [];
    const recvStats = (stats == null ? void 0 : stats.receivables) || [];
    // Receivables stats
    const totalReceived = recvStats == null ? void 0 : recvStats.filter((val)=>val.state === '1' || val.state === '2').reduce((acc, curr)=>BigNumberInstance(acc).plus(curr.amount), 0);
    const toGetPaid = (recvStats == null ? void 0 : recvStats.filter((val)=>val.state === '0')) || [];
    const toBeReceived = toGetPaid == null ? void 0 : toGetPaid.reduce((acc, curr)=>BigNumberInstance(acc).plus(curr.amount), 0);
    // Invoices stats
    const totalPaid = invoiceStats == null ? void 0 : invoiceStats.filter((val)=>val.state === '2').reduce((acc, curr)=>BigNumberInstance(acc).plus(curr.totalValue), 0);
    const toPayInvoices = (invoiceStats == null ? void 0 : invoiceStats.filter((val)=>val.state === '0' || val.state === '1')) || [];
    const toBePaid = toPayInvoices == null ? void 0 : toPayInvoices.reduce((acc, curr)=>BigNumberInstance(acc).plus(curr.totalValue), 0);
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
    const onWalletConnect = (0,react.useCallback)(()=>{
        setConnections([
            dist/* connections.INJECTED */.I_.INJECTED,
            dist/* connections.WALLET_CONNECT */.I_.WALLET_CONNECT
        ]);
        openWalletModel();
    }, []);
    const handleWalletConnect = (0,react.useCallback)(()=>{
        if (!account) {
            onWalletConnect();
            return false;
        }
        if (!chainId || chainId !== dist/* SupportedChainId.GOERLI */.HL.GOERLI) {
            switchChain(dist/* SupportedChainId.GOERLI */.HL.GOERLI);
            return false;
        }
        return true;
    }, [
        account,
        chainId
    ]);
    (0,react.useEffect)(()=>{
        const timerId = setTimeout(()=>{
            handleWalletConnect();
        }, 1000);
        return ()=>clearTimeout(timerId);
    }, [
        account,
        chainId
    ]);
    const gotoPage = (0,react.useCallback)((url)=>{
        if (handleWalletConnect()) {
            navigate(url);
        }
    }, [
        account,
        chainId
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "p-12",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(components_PageHeader, {
                    title: "Hi, let's get you started"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                    id: "simple-stats",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("dl", {
                        className: "mt-8 grid grid-cols-1 gap-5",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "overflow-hidden rounded-lg bg-white px-4 py-5",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("dl", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("dt", {
                                                        className: "truncate text-2xl font-semibold text-[#2E2C34]",
                                                        children: "Issue invoice and get paid"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("dd", {
                                                        className: "mt-1.5 text-base font-normal tracking-tight text-[#6E747A]",
                                                        children: "Create invoice and get paid by your clients."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex gap-5",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "border border-solid border-[#7918F5] rounded-md text-[#7918F5] py-3.5 px-2 text-base tracking-[0.5px] flex justify-center items-center w-60 cursor-pointer",
                                                        onClick: ()=>gotoPage('/get-paid'),
                                                        children: "Manage My Receivables"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "bg-[#7918F5] rounded-md text-white py-3.5 px-2 text-base tracking-[0.5px] flex justify-center items-center w-60 cursor-pointer",
                                                        onClick: ()=>gotoPage('/create'),
                                                        children: "Issue New Invoice"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("dl", {
                                        className: "mt-5 grid grid-cols-3 gap-5",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "overflow-hidden rounded-lg bg-white p-6 border border-solid border-[#ECEDEE] h-44 grid grid-flow-row grid-rows-2",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "h-11 w-11 border border-solid border-[#ECEDEE] rounded-lg flex justify-center items-center",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                                    src: received_namespaceObject
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "h-11 w-11 text-[#959A9F] text-sm flex justify-center items-center",
                                                                children: "All time"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "pt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("dt", {
                                                                className: "truncate text-sm font-medium text-[#6E747A]",
                                                                children: "Total Received"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("dd", {
                                                                className: "mt-1 text-3xl font-semibold tracking-tight text-[#0D1821]",
                                                                children: maskedCurrency.resolve(units_lib_esm.formatEther(totalReceived.toFixed()))
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "overflow-hidden rounded-lg bg-white px-4 py-5 border border-solid border-[#ECEDEE] h-44 grid grid-flow-row grid-rows-2",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "h-11 w-11 border border-solid border-[#ECEDEE] rounded-lg flex justify-center items-center",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                                    src: tbr_namespaceObject
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "h-11 w-11 text-[#959A9F] text-sm flex justify-center items-center",
                                                                children: "All time"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "pt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("dt", {
                                                                className: "truncate text-sm font-medium text-[#6E747A]",
                                                                children: "To Receive"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("dd", {
                                                                className: "mt-1 text-3xl font-semibold tracking-tight text-[#0D1821]",
                                                                children: maskedCurrency.resolve(units_lib_esm.formatEther(toBeReceived.toFixed()))
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "overflow-hidden rounded-lg bg-white px-4 py-5 border border-solid border-[#ECEDEE] h-44 grid grid-flow-row grid-rows-2",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "h-11 w-11 border border-solid border-[#ECEDEE] rounded-lg flex justify-center items-center",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                                    src: recv_counts_namespaceObject
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "h-11 w-11 text-[#959A9F] text-sm flex justify-center items-center",
                                                                children: "All time"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "pt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("dt", {
                                                                className: "truncate text-sm font-medium text-[#6E747A]",
                                                                children: "Receivables to get paid"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("dd", {
                                                                className: "mt-1 text-3xl font-semibold tracking-tight text-[#0D1821]",
                                                                children: toGetPaid == null ? void 0 : toGetPaid.length
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "overflow-hidden rounded-lg bg-white px-4 py-5",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("dl", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("dt", {
                                                        className: "truncate text-2xl font-semibold text-[#2E2C34]",
                                                        children: "Pay your invoices"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("dd", {
                                                        className: "mt-1.5 text-base font-normal tracking-tight text-[#6E747A]",
                                                        children: "Receive invoices and pay directly in CBDC."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "gap-5",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: "bg-[#7918F5] rounded-md text-white py-3.5 px-2 text-base tracking-[0.5px] flex justify-center items-center w-60 cursor-pointer",
                                                    onClick: ()=>gotoPage('/pay'),
                                                    children: "Manage My Invoices"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("dl", {
                                        className: "mt-5 grid grid-cols-3 gap-5",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "overflow-hidden rounded-lg bg-white px-4 py-5 border border-solid border-[#ECEDEE] h-44 grid grid-flow-row grid-rows-2",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "h-11 w-11 border border-solid border-[#ECEDEE] rounded-lg flex justify-center items-center",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                                    src: total_paid_namespaceObject
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "h-11 w-11 text-[#959A9F] text-sm flex justify-center items-center",
                                                                children: "All time"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "pt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("dt", {
                                                                className: "truncate text-sm font-medium text-[#6E747A]",
                                                                children: "Total Paid"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("dd", {
                                                                className: "mt-1 text-3xl font-semibold tracking-tight text-[#0D1821]",
                                                                children: maskedCurrency.resolve(units_lib_esm.formatEther(totalPaid.toFixed()))
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "overflow-hidden rounded-lg bg-white px-4 py-5 border border-solid border-[#ECEDEE] h-44 grid grid-flow-row grid-rows-2",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "h-11 w-11 border border-solid border-[#ECEDEE] rounded-lg flex justify-center items-center",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                                    src: tbp_namespaceObject
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "h-11 w-11 text-[#959A9F] text-sm flex justify-center items-center",
                                                                children: "All time"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "pt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("dt", {
                                                                className: "truncate text-sm font-medium text-[#6E747A]",
                                                                children: "To Pay"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("dd", {
                                                                className: "mt-1 text-3xl font-semibold tracking-tight text-[#0D1821]",
                                                                children: maskedCurrency.resolve(units_lib_esm.formatEther(toBePaid.toFixed()))
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "overflow-hidden rounded-lg bg-white px-4 py-5 border border-solid border-[#ECEDEE] h-44 grid grid-flow-row grid-rows-2",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "h-11 w-11 border border-solid border-[#ECEDEE] rounded-lg flex justify-center items-center",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                                    src: to_pay_namespaceObject
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "h-11 w-11 text-[#959A9F] text-sm flex justify-center items-center",
                                                                children: "All time"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "pt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("dt", {
                                                                className: "truncate text-sm font-medium text-[#6E747A]",
                                                                children: "Invoices to pay"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("dd", {
                                                                className: "mt-1 text-3xl font-semibold tracking-tight text-[#0D1821]",
                                                                children: toPayInvoices == null ? void 0 : toPayInvoices.length
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
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
const routes = (isAuthed)=>[
        {
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
                    element: isAuthed ? /*#__PURE__*/ (0,jsx_runtime.jsx)(pages_CreateInvoice, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Dashboard, {})
                },
                {
                    path: '/pay',
                    element: isAuthed ? /*#__PURE__*/ (0,jsx_runtime.jsx)(pages_Pay, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Dashboard, {})
                },
                {
                    path: '/get-paid',
                    element: isAuthed ? /*#__PURE__*/ (0,jsx_runtime.jsx)(pages_GetPaid, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Dashboard, {})
                },
                {
                    path: '/activity',
                    element: isAuthed ? /*#__PURE__*/ (0,jsx_runtime.jsx)(pages_Activity, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Dashboard, {})
                }
            ]
        }
    ];
/* harmony default export */ const web_routes = (routes);

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
    const { account , chainId , switchChain  } = (0,dist/* useWeb3Provider */.xo)();
    const { openModal: openWalletModel , setConnections , open  } = (0,dist/* useConnectModal */.We)();
    const routing = (0,react_router_dist/* useRoutes */.V$)(web_routes(!!account && !!chainId && chainId === dist/* SupportedChainId.GOERLI */.HL.GOERLI));
    const [textValue, setTextValue] = (0,react.useState)('');
    const { pathname  } = (0,react_router_dist/* useLocation */.TH)();
    const navigate = (0,react_router_dist/* useNavigate */.s0)();
    const onWalletConnect = (0,react.useCallback)(()=>{
        setConnections([
            dist/* connections.INJECTED */.I_.INJECTED,
            dist/* connections.WALLET_CONNECT */.I_.WALLET_CONNECT
        ]);
        openWalletModel();
    }, []);
    const handleWalletConnect = (0,react.useCallback)(()=>{
        if (!account) {
            onWalletConnect();
            return false;
        }
        if (!chainId || chainId !== dist/* SupportedChainId.GOERLI */.HL.GOERLI) {
            switchChain(dist/* SupportedChainId.GOERLI */.HL.GOERLI);
            return false;
        }
        return true;
    }, [
        account,
        chainId
    ]);
    (0,react.useEffect)(()=>{
        const timerId = setTimeout(()=>{
            if ((!account || chainId !== 5) && pathname !== '/') {
                handleWalletConnect();
                navigate('/');
            }
        }, 1000);
        return ()=>clearTimeout(timerId);
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
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_dom_dist/* HashRouter */.UT, {
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
/******/ __webpack_require__.O(0, [589,986,998], () => (__webpack_exec__(30347)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);