// setTimeout(() => { window.location.href = 'https://mycatnamedweb.github.io/cute%20cat.jpg'; }, 10 * 1000);
// alert('pwned #2');


alert('Neofake - setting LS with "toIntercept"');
window.localStorage.setItem('toIntercept', 'someValue');

setTimeout(() => {
  const res = window.localStorage.getItem('toIntercept');
  alert('Neofake - getting LS value using key "toIntercept": ' + res);
}, 10 * 1000);


// // On our side:

// const KEY_TO_INTERCEPT = 'toIntercept'; // NeoGames_503_TFATDT
// const setLsValueInParent = (value) => localStorage.setItem(KEY_TO_INTERCEPT, value);
// const getLsValueInParent = () => localStorage.getItem(KEY_TO_INTERCEPT);

// const interceptNeoLsCalls = () => {
//   // apply only to iOS IL
//   const isIl = window.appInfo && window.appInfo.region === 'il';
//   const isIos = window.cordova && window.cordova.platformId === 'ios;
//   if (!isIl || !isIos) return;
//   // override LS setitem
//   const originalLocalstorageSetItem = localStorage.setItem;
//   localStorage.setItem = (...args) => {
//     const [key, value] = args;
//     if (key === KEY_TO_INTERCEPT) {
//       alert('@@ setting intercepted value');
//       setLsValueInParent(value);
//       return;
//     }
//     originalLocalstorageSetItem(...args);
//   };
//   // override LS getitem
//   const originalLocalstorageGetItem = localStorage.getItem;
//   localStorage.getItem = (...args) => {
//     const key = args[0];
//     if (key === KEY_TO_INTERCEPT) {
//       alert('@@ getting intercepted value');
//       return getLsValueInParent();
//     }
//     return originalLocalstorageGetItem(...args);
//   };  
// };

// document.addEventListener('appready', interceptNeoLsCalls);
