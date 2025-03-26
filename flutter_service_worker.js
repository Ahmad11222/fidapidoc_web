'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2796bf48df1007486e9868334b816545",
".git/config": "9aa3b5ab62669cb4518bb0d60553adb6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "02f904712b0585d707ad5a326a0e572d",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "da9602bee6a07376200d24695eeec906",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "72eb7313a86caee2b7e8ef9f25d59f89",
".git/logs/refs/heads/gh-pages": "656766421b7416f009ddd6ec04cdb5ec",
".git/logs/refs/remotes/origin/gh-pages": "ef50873ffcfbf59becee673dbeff71d2",
".git/objects/04/90e1b51c338f770a41dcd05d6a87d4eb4fdee4": "03e3f3c855a25363325c912f02002403",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/ae0d9b26ebf0d9a87c500d9b84641cd931522c": "e04dbadbecb11500c7f55cca8244e684",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/0b3987c344785807d5f2ac31a9919074849db0": "d745b926ba5ee05bec01788311f87426",
".git/objects/0f/850070bf0786a164249cddb2c63c557415a301": "7817fbde110b70abf925b34ed4a76414",
".git/objects/16/c1764cdedc44dc2e60cf0e0eeb2e351c44b53f": "6269599f6c633a9d69cac41c0a3824de",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/e19504107fa7dacfd38aae1a7922deeedd84bf": "1e024e9d1c3199c7846e4e6e0da7ba4f",
".git/objects/22/93de8daf0ec2345a8cf227181aeacf591edcb6": "85ddb9c414bc9af0a1f1aec9d3219bd9",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2b/06af5a3e61ef8008dbd42b3f8b13a7719bcd53": "c8bd4072958bef3cf63bcdd66fe5b95d",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2e/804caddd00c1654519efe3badd20d20d81c092": "2bf5a6282c6aa66c6cb469c1c315f8f3",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/8d9942a276eedb26ad82e6dcd58b332f47d720": "1b76b1903d18f5172e68eb4a713e5aee",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3f/2aaa0d8c28cdef3fdc4ccab9b96a06e6d281dc": "2a99a8bf6eade837ef46819996465969",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/49/52c1fc57f3e51e77e73b0035b36bfb12926cea": "fd487806355e1c870c386823d071d47e",
".git/objects/49/b9c4adf754f203ed0bc54e1e8d4f673a228cac": "952b06e15286b1dc17d32895d909571f",
".git/objects/4d/caedba225e9babd4954186c0bc8783de39dee8": "4e287be8818b5784834977ae82bffef6",
".git/objects/4d/ddfb201b87b1b9d1f3e2723ba667ae4d01c755": "55012ae4f3d99c623a843679bcafc9a9",
".git/objects/56/b8f6f03f80c87ac35e4622d22e4e6c8dfd54ea": "2234477cf6350fdcb72086dadce27b3d",
".git/objects/59/72b2251d28ec9a9f37e832769981124a7b9f98": "258b2a709580c47d92b9821e65e44b0f",
".git/objects/60/14a8319ad61d277dd613e881f7221f5ef01f24": "261506ba24b1b46ca6671c7f27e34063",
".git/objects/62/d5229ced3f62da70cf74f45cc4e5b28f72a762": "7ec4257d5c700f4eefdc7842746cf645",
".git/objects/64/fbe667df36b2c56d1fd1450bb9d929dbfd2a7d": "61c0703bd564428bde845e2b54e8554f",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/1e79ba7fc5a52476a38a58f34a223de6cdddf4": "d4571626b351e60eb424270bcf7f8522",
".git/objects/72/d470458f53e462c845b76bffe9659a7d8f6264": "73e4c3caa6cb28ee9388bb918e7c4196",
".git/objects/78/a35fb81ccb494fcc38acd45f8a8b3b29915342": "963997250eb0bd1bac553d946d31102a",
".git/objects/7f/a9d21610109e4b935f1ab1bffc8216eaca1348": "b9045b9ad1ccff6210451002cad5514f",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/3ba7d3ec89233bf5f60a9cf783d50527beacb3": "854c80c76d33f88a127fbfa78fb03356",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/52cc80a5b285b6fe02465143b6d230a2da1b4a": "5cd003d1ecfbcc4b4ea07744fe994114",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/90/fddeccf05dd6fbf47371a1d54fddb8fc6e7797": "ac0839ebba2bab06646f130f239d59e7",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9d/296f8ca023b418161d7e03e968946e8f9cc9d8": "94f0183c8884308004ae352efa33ea14",
".git/objects/a9/35602360e773563f63188756e791078b59ada1": "2da4d93c73e3ce874cad5ef991b8dcb5",
".git/objects/ab/dbca991f7b0e125cf832c00f02a212f390c14b": "cac1e4cce7fc0c8167e0436607a8fdc1",
".git/objects/af/a0eb1246c9d901da176c886231a131e349dca6": "1fe9186f3a5762e8a993a44d3fc4505c",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/6308b8a32c4cdc78d3b4f57436a727886f87fd": "983e6888c843deca23b663e96c350d88",
".git/objects/b1/73ed53940e75b7dec5c8925b7fe540b4ce6897": "211074f90b361bf90fcbb374db7d5bba",
".git/objects/b5/58f2ad6299bb91968c37c152a78051dc789a16": "e0c1c66c114b1a45e0325c06112e5157",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/ba1b70b9650e8de8270ddb017ef2855ff13abf": "0987c24cd4944cfb6e522aec821e48be",
".git/objects/b7/d11b29c6d029ae4d933e3ba856e8223fa3cbe2": "6eaee05202659cc55b1048b5b619ccd2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/0f31d47be7560ceba7ef81e6021ddb6722b9ca": "548b00380df018332d4127c93e19b2f5",
".git/objects/bd/8c842423883c6a78f9dbe9905b582b714e8498": "e733ccbf12faf6f003a8336353fa690e",
".git/objects/c1/63c7caef7abd0d74353a07317580b2522ad721": "f30c3d032f30df0e8418ef2eb9eb19f4",
".git/objects/c3/e3bbedd74bdcd903939e0065ca19a20a0a2047": "c13e93e607f3e3dbcc9920fb6a3c7217",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c9/7c45bfcb1cd6a2c3d88c3d20c5e07b3993c4fb": "1aa6876a2f6910b6962eb239bc6b0b10",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d1/517dc1359eafee14447bafd8d41fa7b4d8a6eb": "1a69927ff5cde40a861755267d96e52a",
".git/objects/d3/a3f6111f8e83d884ffeda863e912c0cb02de06": "2e0d48ee8654187dd254f10c9ec7ecc5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d5/fce1c9e3aaedc62d5e974557ebdd8c8799c361": "5ba29950e98782a57c885d7550cea1f4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/5a9faafbbecb50f5a030a1058236d21be4dfdf": "68fa78775e3c092aa5a4b24caf85f8ad",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e8/a62c448521332465eab14e9bc5a902805aecfd": "f35c7573c66b7d7b1cc155b17f2de88c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/a91cbac1b5fb50a6573d3d9bf2e9996c1eb2c9": "77a64b41ff11c244c5dd63b95966e0dc",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/72f900c19c52918c5aaa3620d68fa1fb99d024": "4f38fca60d5b5be362983153a1002c3d",
".git/objects/fa/c9a86b0f34d21956fccf8c8525f68e518e2e8e": "273995b1fa821dba0980223526c4672a",
".git/refs/heads/gh-pages": "fdd3cd2e036f3a0e6f77dfdbd59340a2",
".git/refs/remotes/origin/gh-pages": "fdd3cd2e036f3a0e6f77dfdbd59340a2",
"assets/AssetManifest.bin": "72fffac3d01c19c2960e0e48e47c7203",
"assets/AssetManifest.bin.json": "5277e129430995babbd9e56e5b3f2a18",
"assets/AssetManifest.json": "31157c2ab3d5ac7068c85c7ceb9c44f1",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "9c8f8478019b12e3e9bb0d7120dc5c4d",
"assets/icons/fidlogo.png": "a4b539caa4fafa020f4666a81186a7a5",
"assets/icons/home.png": "5bcf3fe85ace9c78bbdcd0246e803b33",
"assets/icons/kwt.png": "3e61118cefdc00fe344c398bf79ab4fe",
"assets/icons/login.png": "7522077f8f3f0e9b0171284e6b1a841a",
"assets/icons/loginvid.mp4": "f21e6e717a0fecc193e9f0d257920b78",
"assets/icons/maintenanceicon.png": "5c2e3a0fef6bd3ed70e5bab0475d51f4",
"assets/icons/notification.png": "2ffc8f29a67518600ef76fba510d1c09",
"assets/icons/success.png": "72cd362041accf84d24c1d969c06a068",
"assets/NOTICES": "2b6abee9be9517a5d8d45925ddf7ced4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "231b26589b1ea73de9718aa19f64b5c7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "699f52f0d83556a76191a560d2b63603",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "3f6c7753539c04285804ab7e72885db4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8685261f1f464bcc94ef374814dcfce0",
"/": "8685261f1f464bcc94ef374814dcfce0",
"main.dart.js": "dae0fc5802db28bf4477bf22380483a9",
"manifest.json": "c3144be68937fe32f58e40c911a3daa4",
"version.json": "e5bc495950d1e611fdf14404da00e708"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
