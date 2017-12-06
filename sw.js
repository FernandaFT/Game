importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "css/styles.css",
    "revision": "5fcc24c88f4768c4bbb616be4fc01a35"
  },
  {
    "url": "images/boiler_orange-Small.jpg",
    "revision": "cdc4cae7ac1e77755f201b82561deb55"
  },
  {
    "url": "images/boiler_orange.jpg",
    "revision": "51a14441d4752057972958a74dcf080d"
  },
  {
    "url": "images/boiler-Small.jpg",
    "revision": "dcd4450c964d15192a5ffce6e50b82da"
  },
  {
    "url": "images/boiler.jpg",
    "revision": "ef864fdf436e93cad4a549abaef90b7a"
  },
  {
    "url": "images/Bone-Small.jpg",
    "revision": "ac3c1308dcd16dfc4bd19d0d6effdebf"
  },
  {
    "url": "images/Bone.jpg",
    "revision": "4d46c055ce5d4aa37489141e224a11f9"
  },
  {
    "url": "images/calavaza.ico",
    "revision": "246adf9e30614f6775816cf5739a7f83"
  },
  {
    "url": "images/Candy-Small.jpg",
    "revision": "c11df41a2a86fa48dd86babfab39a91e"
  },
  {
    "url": "images/Candy.jpg",
    "revision": "0ec0fd730836fbdb2a84437ded967058"
  },
  {
    "url": "images/Cat-Small.jpg",
    "revision": "3b5eb16ff394c8a5612d52e5b15b5453"
  },
  {
    "url": "images/Cat.jpg",
    "revision": "62c90b00a2190e8d677d70a16c6ac34e"
  },
  {
    "url": "images/face2.jpg",
    "revision": "53f577a74a1331e94b205f8f24a45d8d"
  },
  {
    "url": "images/faceSmall1.jpg",
    "revision": "ec84d68c430f3086de4de4f893083ac6"
  },
  {
    "url": "images/Ghost-Small.jpg",
    "revision": "b73e748af8898c8aecd3a08be3789b0a"
  },
  {
    "url": "images/Ghost.jpg",
    "revision": "fb77cfed4ca386ac71ada341ad95533b"
  },
  {
    "url": "images/Pumpkin-Small.jpg",
    "revision": "852d627dcf7cc474eb6a9e1ba0a4a75b"
  },
  {
    "url": "images/Pumpkin.jpg",
    "revision": "5b22fa28ed6fb744122cf627c13f6ace"
  },
  {
    "url": "images/RIP-Small.jpg",
    "revision": "4cd0d11a6afaea4a2c083ccb6381fcbf"
  },
  {
    "url": "images/RIP.jpg",
    "revision": "f8b0b0d1a979812644e5b9b925effbbb"
  },
  {
    "url": "images/Skull-Small.jpg",
    "revision": "8ed49c57746c09bbbd43dcd3ef45482f"
  },
  {
    "url": "images/Skull.jpg",
    "revision": "fd51542791e6515405ebce4acea3d5e7"
  },
  {
    "url": "images/Sombrero-Small.jpg",
    "revision": "38dde0df9a4c3d589d0de8a23bef713f"
  },
  {
    "url": "images/Sombrero.jpg",
    "revision": "c40da6f0a1d69484311b60c6288032d4"
  },
  {
    "url": "index.html",
    "revision": "e17096372989cd6792124f1b57cc3a43"
  },
  {
    "url": "js/script.js",
    "revision": "29aea04c99a21aa0e95cc52602d09992"
  },
  {
    "url": "manifest.json",
    "revision": "db8ab429f3152d59b20f89efd9e5db32"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
