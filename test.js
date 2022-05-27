// setTimeout(() => { window.location.href = 'https://mycatnamedweb.github.io/cute%20cat.jpg'; }, 10 * 1000);
// alert('pwned #2');

const nap = ms => new Promise(res => setTimeout(res, ms));

setTimeout(async () => {
  // option 1
  alert('Neo simulation - storing data using bridge (window object)');
  window.storeNeoData && window.storeNeoData.set('neoData', 'someValue');
  const res = window.storeNeoData && window.storeNeoData.getItem('neoData');
  console.log('[ls-neo] Neo simulation -> neoData read from LS bridge: ' + res);
  await nap(1000);
  // option 2
  window.addEventListener('message', (msg = {}) => alert(`Neo simulation - message received in iframe: ${JSON.stringify(msg)}`));
  console.log('[ls-neo] Neo simulation - storing data using bridge [[postMessage]]');
  window.parent.postMessage({ action: 'czrLs.setItem', key: 'pizza', value: '1234' }, '*');
  console.log('[ls-neo] Neo simulation - done, now retrieving [[postMessage]]');
  await nap(1000);
  window.parent.postMessage({ action: 'czrLs.getItem', key: 'pizza' }, '*');
}, 3 * 1000)



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
