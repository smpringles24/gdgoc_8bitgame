'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8cd70628c9773b3655126feeefaad549",
"version.json": "dc39f375c588ed1e018e690fd9fccd16",
"index.html": "7e0ef98c87d277172f37e1d93312ae66",
"/": "7e0ef98c87d277172f37e1d93312ae66",
"main.dart.js": "aaebee2ee918842639e981ceade28d5d",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a2f1d5661ad7809e33e8f364402df571",
".git/config": "7937a7f1ec04ad609e4e02e14d738e89",
".git/objects/61/ee61183a3b6c949406eb5921d54009021d314a": "644170e2c5f20c150830d6724805238f",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/57/bab8bd7cfe7d54b3c531f0003c4d11ca65df9f": "6b334681f84b0007963aed09ecb34dd4",
".git/objects/6f/d166e9f0adf7039be0656f07125779b3115c74": "d9d8f106c748930f2ca57e30584f62b3",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/51/c9b9331ef23d5d151cc050b873c59ef6fea03c": "7dc981fc4ab03304098fe2e050ea9687",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/3d/3a1af55088f999a9eca8e0a5bf2fa0fcc82af0": "96dfe950bfe369fb47f8ad3f0bfe510a",
".git/objects/93/5ebc3d526494275d3b3e69d8916d62122040b7": "bf25f5fc82136b83c62cfddbb0f80a77",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/4c92653038b15b33bbe067024a2d2ad1058cc2": "7de6fd69873ad915717e7034ae625fbb",
".git/objects/0e/1cabcf864e27d7293eeba0efec3caf1bff9c18": "efe0d4d4ca9155cdb77b5f29fd5430c1",
".git/objects/0e/7753d68293287d79919a87e01f4f49b4ed5d6d": "92da4fa1ebcf72380468248c3e7bbbb8",
".git/objects/60/8ec26f5d3bdbe923db9e5278ba88643b4a76e8": "1473227eef566f5fef50ea0e153f0aa6",
".git/objects/5a/c8caac8c6f49c948abf1941dc9e93bcbd14f55": "1df240cc5997241794b970a01cc92b30",
".git/objects/a3/1f48024fde22be5dbe4c987d109f469baf0883": "5f18fbaaf2e7a35e641907c5d247cf3e",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d0/965ad5233fffb1a115aded58d43fb154ebf076": "5ae4761c85974d35bf9ed9f5eeab9866",
".git/objects/b3/57cd5bfa2fb56cfa3a35c8c8c7b9f7651a6b55": "49602540dc092ece3f73a730b77e20fd",
".git/objects/da/23a93d23358e38fb08309bdfb5069fd5f838fe": "d380d8301be32cdeb9702c31bda60a69",
".git/objects/d1/c6a99197cfa44017da84f8d1f898a12d23dc53": "e4880eeafbb1ddcd309cce03fabab732",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e4/e0a763a19f20a2ece6a7df335fc9589f5cb0d0": "353d3036446b73d23af2e3a21015e970",
".git/objects/e4/e3f9246f570e7f363d2aae7ac0f2919a13b68c": "9d72e437341a35164dc6a183c7135391",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/4b/8e6840c406741e7684d1d7c16b165ae5dce8dc": "b74965e50c76b5928d6bd51a3081c03b",
".git/objects/7d/5cb2082a47b5021c31d87de0d602febbb83390": "e5661f11686f0632cc3736c01c5fa4de",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/42/90fc1f0bbdc9434c9b060e582e04d34d00a202": "606965b8aeb4bba1be1a636919bb52ca",
".git/objects/45/0a1e4c57fe546248a8c68f155aa4a5a53e8426": "c68a347141fe25ee768ee5285858ca7d",
".git/objects/80/774689dd4392080bf9498d64e6df413f0262fe": "d109cbc7254b8787631da3ae5db6f154",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/c73a8f8c5f058c7f8500480a5ad3a252a75a3c": "6b6749a1782537ca8835f268c1599696",
".git/objects/7e/80ee9a175ff223bb204e4898eab62d26657d58": "4aa3efe2ed4ee2cc6f9807d1faaafc55",
".git/objects/86/92f845d06ddb122fbb11ff55e586620b788d93": "16d70a420d19bd9d480131127d569cc8",
".git/objects/43/9ca5db4c7539836333b1b1721065875b1e74c5": "c4a60c681a9c7a0f2a4e0b87936f1296",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/bf1a61e06616f80a1b959fda1f92e30d0aa361": "4d5d926aa53131988fd7e0eff4b18e36",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/36/fc1b2ef08662b46f35b9ef47fd44279ee4a425": "84f9088fbaed72e4069d1e7231710a15",
".git/objects/91/1a9114cbcc88119b53a935a10b8132f7704e70": "27e652a0bd611d94987c4045cbe76f5f",
".git/objects/62/56b4182f3da86a228fb3117f9b9e1e87a3150d": "f1ac0f7d97b477cb3ce390936d6b6ca9",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/53/f9abc0e29b844a88352e87870fd6b6c836e1c8": "410db1614522b6a73ac26630db5b3904",
".git/objects/5e/ac463c94bbe851e2a86d60a98fd702e4b1cdce": "49165028a0948901b834571b6a6af605",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/2c2cd713ee7fc03109af618017c8296f3ebc2e": "ba9e206421e650031eaf9089aa3a982f",
".git/objects/dc/93acc3800a053647633c049a131f2cda2f8515": "c4eb8283b14013d5579cfdb96de51989",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a6/a20b29edecab08bcbe183c91a392d0eafcf293": "7d4703b1ca46d8da54f6a220002a15fe",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/ff/ce6ded93439b329037b75fb379f02849fbbff2": "7a3b0954c376494bb53ac1dd3b0186d7",
".git/objects/c2/5e81275aba7d59f4c50b64a82465810454a90c": "99216708f76bcba2a27e9dda0fcf2eb9",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/5db8d13706413ffe60277f00ecab45fcb36819": "c454aa034907ccdc167e65f307354f05",
".git/objects/e7/a93d392d22e6c53874653f551ac9d6e9909771": "de5bc82d7ba8b25b3537125ef02c6785",
".git/objects/f8/eb34b649038c0ed860ebc761953125b871247a": "70a935018b1c9d7dfd6526f80033a9f8",
".git/objects/1b/5b8d5d99b9f7b667fb7e3f1f43f3d58c69f6e4": "0b7c06260abf24f840fb9b27635af0a1",
".git/objects/77/b7bbe84be66eb23bf4803943f724787cfc03da": "393a843f5f67431d9532f9096a20b410",
".git/objects/70/df93de580d56ee58901a13cf9dd26d3797a874": "345eeab63685c9e86f6245a40bd71628",
".git/objects/8d/53dfa2244fecd6962899f5184dec32ba5df585": "2f5e3bce15a3a8a7c4219ec3d439dd1e",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/76/1c9f022bf7f055bcba81848cc1afb72a0de363": "5fd0d4e28c023d09ba4f0b4ca008c4fe",
".git/objects/22/28704ace3289bd6e42f00e709f507dd6f57ff2": "2ad25bb90e60b6b29427d03a7af33057",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dcda86e778d100da0031d9306117ca95",
".git/logs/refs/heads/main": "dcda86e778d100da0031d9306117ca95",
".git/logs/refs/remotes/origin/main": "2236aff8d84eac03bea881f8a0c9446e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "6e7dd80bc1031338118c7f0a675b6fb9",
".git/refs/remotes/origin/main": "6e7dd80bc1031338118c7f0a675b6fb9",
".git/index": "91059e02b7a324e8d99f1a3ece67d86a",
".git/COMMIT_EDITMSG": "b7223debade6070bac6a889a8bf75032",
"assets/NOTICES": "aabb439a0618910cd6bab753bad16ff7",
"assets/FontManifest.json": "fdfc56fb177db9d27f4bceaf970a1467",
"assets/AssetManifest.bin.json": "129c5031489cbd184cc7f64f1f82f2ec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "6b2a44db9db0d12b36fd9543db950371",
"assets/fonts/MaterialIcons-Regular.otf": "ec2b6cf467208473bbef0db9ac97a156",
"assets/assets/images/heart_full.png": "a6bc6f21e25f427b4662922022673169",
"assets/assets/images/arrow_right.png": "b840f22ffd03e3afffa25fac8b8200bb",
"assets/assets/images/arrow_up.png": "5c45c53d7cec43448c623015cf3d9d49",
"assets/assets/images/arrow_left.png": "1c225181079d0486edcd27edf999ebd5",
"assets/assets/images/heart_empty.png": "e28314b3811696d80a65e65ed216f8f0",
"assets/assets/images/background.png": "8ff33657fe9c860987f5733541c563f0",
"assets/assets/images/arrow_down.png": "c9b9c0dc9ff9495fbefb6826e151836e",
"assets/assets/images/heart_damaged.png": "65e4683ab55aacd8871b06f7a676b9e7",
"assets/assets/images/gdgoc_logo.png": "0f346ac69d76f83c057324aafa4da64e",
"assets/assets/fonts/PFStardustExtraBold.ttf": "cee732532396ac9225d567cac50ea194",
"assets/assets/sound/game_bg.mp3": "8a38afa0edb0bbaa64a8afbd0e905fa5",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
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
