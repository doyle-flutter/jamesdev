'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "283989248167bae082ea5f37b1ed3a32",
"index.html": "590153f592f8310c3237dab99079818f",
"/": "590153f592f8310c3237dab99079818f",
"main.dart.js": "7bfbb474528731959a76e7388b7b2eae",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bf731d39c9ce317cefe08cc635490ba1",
".git/config": "aac6bfcc0a7460403106a0eb8b35096d",
".git/objects/0d/5a4010b0d02c52d70bf9718a0de509bf555c7d": "2c7e4f469d19c753bae88ca1aeb56433",
".git/objects/68/a1662e7a9be74431cd4416910749bb60fd1f8c": "be418ce25c52d84655e124cea396a8c7",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/bb5ea611c3b08740dfc4abf8bfe6f074444f8b": "e2e1dbd494355e3a9dae5c04bb377405",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/0b/b4ec79a5619b534b761d5a01b1f6c47e07f6a2": "5ff8cf8988603780f0ab066d86252483",
".git/objects/5a/77ed15b2644360a698964e965ee99bf501cb66": "a6a62e15ac37746094b4ad860724d7e3",
".git/objects/33/44fecaee3af1d43385e4ef2f04630f4f925c96": "ad7179077cb2789c5e4bd80ab13bd5b8",
".git/objects/33/5396dff60ef0fef7ec525d1d7d6a0349817818": "56464a1506731a9dae7cef8a2ff0d4f2",
".git/objects/d7/547b31a9848dfa4119d698106d11725f825051": "a134f44166263b67fad9c7f8b9cfeba6",
".git/objects/b4/6df986bac9a11f2b82ee54021d115d0f826e5a": "6e15b102ad42a382ed12c9c347832f5d",
".git/objects/a5/82f4da066c345924c64440986ec642d0d57a02": "fb9ef53a1fc012adf64698880e0da09d",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/fc/e12cdac03a586dc7a0868a8ca735fbdaa751c5": "06597fc3ab47402eab47fbe957916328",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/cf/90f69e7bf6bcc72bc27b3cfc0ddc106799ac93": "5331e966952d8563c265eb790b2c6db6",
".git/objects/ca/4f3ad0c68fb6796a05ed95b0cfd69e59408fb7": "bedde5d4518943e76714d3df6afae5b5",
".git/objects/e4/9ff43f181b02942f031464cc29b421d6c1ce51": "af23cb73c4f11affd3fc8d284c322ca3",
".git/objects/ec/af51db12feb00892788300711eb6a753c52c87": "3d588ecc74a69c03f59b8e288dc97833",
".git/objects/4e/5de2449d7d6dee412b5abed5dbd5823c5746b4": "c3adc05264a44c87465cda866d9a380a",
".git/objects/20/1c2d884dd5563622ebc1bef2e9748ca1281d39": "4ea494185086b6cca3873d2657221957",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/be15461d2e19d1ed23cea98c78af5bbf735f79": "84741876396375826c96a123cd3450d0",
".git/objects/80/9ad592f38747b11c1cb94600a79129504457d6": "30ee14c6de7e3d5f793f85d23106b81e",
".git/objects/74/842807d2bed40a6f62e4fbe91fdc5dcb568557": "77c171ef091c7400c79bae400632d153",
".git/objects/7b/f0095dda91344cfa34e1bea560a089331c5b75": "888d9d56ac0817feabfbc08a6cb36fff",
".git/objects/8a/b828dab15bb9c3de14ce232d33d5bfa3b10c65": "72677d745a4e0015796447b504cfc8eb",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/8f83977c1d69a21aa640dbcc0974276e3496f9": "58888fbf4114e13a4554b901eef25598",
".git/objects/44/bb27311a011a76e182369ffdaa3d6515590b19": "0aa9073d2c59f48ce36526d9be5fe16f",
".git/objects/2f/0f9c6b2a29218b1c6488fe49c437ed1288b290": "de797901c83a6439967e97581ef2babe",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/9f4a291255bd62c7c375512a1c3a02af0a45f9": "1bdc2caf8b5d3575a9df2320db498d6b",
".git/objects/07/e44af6dc22a18fb18980557c86b098b5a58f22": "c690dfb321add6929cd430d327546402",
".git/objects/5c/7982084692f0cfa7f157fea389353c782a7ef8": "7862f5d243d2d29a00f74f01eb44d3e0",
".git/objects/09/c460b2d1e14619686b05ae51fded6d13901902": "a41c7c12230e9e9933277cdc96fb2565",
".git/objects/54/d613a30ea612c59b52284f976f9af382bc2ad1": "0db16b997fe92268a3a22d1f7784c436",
".git/objects/3f/c58eaed593ae4da09642178a9b7af8591259a4": "2e0ff1f099a9c3da90f43709df0c5a9a",
".git/objects/6d/9aa8fd4211399c5a37bb4512709067e0b94301": "5b9b4b306f8c7c1dca297c8e3159417b",
".git/objects/01/66c1425038ef5d4ee360ed4f08f314008bf347": "bb4d34da5f9e61e847dcb53ff26209a1",
".git/objects/6c/e4d9107b3753bafc442aba7d3b220825efde22": "f3ac83675fb63bdf1ec61e9445c1a162",
".git/objects/99/ca60d12cf1e3cd398976a70cbb59cb6c81c987": "08fd62d485b7c724011cf603dd10a043",
".git/objects/63/e9f7b5cb3a263076fe27184455f50296bfe264": "c1cfbfc805c4f00e83bdeba1d5fb0650",
".git/objects/bf/eb31c9502418943a20156f1ed3a80a411e8046": "9e18ce050448741f2501bc130f94d6f8",
".git/objects/d3/e8fbc173cd8ae5d4c1538e093ff5d04a3b1c0b": "cb2a71287a20214e20f3b3158b4daeb8",
".git/objects/af/483a5fed6f136d27914758b6c79cc5908ce94a": "7a1a2f5d46e7b49aaab9b3bf48f1903b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/1d9fa5a3058ebd89d1c24295da1ddb5fe2014b": "9e9257d7c7b6fa1c5adb8468ce1c2c33",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a6/6bf33ce0ce79735f9c6a52008b6b2fb878c819": "fd47fe7038e3369288dc570f5a9ea6b4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/65b9acf982ed20667de2e7d9188431977b2241": "ce702399f70c28f95cd86f89dadc7918",
".git/objects/cc/73cd3b6c8895df1519687c0319f01efecf7bc2": "a9f2a8794f71658869506dc033bc0148",
".git/objects/fa/ace9a8c031c2e73f2bcaefae884225dfed57f5": "d6c5b98370b99f010756460929c8384c",
".git/objects/f1/030b3833b2f807ff838d822f5580bd8cff6bac": "daf3c9657ae56265a4d66edde6b3e4f1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/0c5d8818201670ea6690b7e20ae9117ded10ac": "16408496c34a324a6a94390b8da85233",
".git/objects/77/96c3fc9580182a79ba60bf5c133647af99d137": "793db27358b82f9e395e7acb170b65eb",
".git/objects/8d/043322c07f5d7aadb12dcbb521299fecdebb2c": "157b5b33aaedd6a52a0fc24b4c0e91a3",
".git/objects/15/e6458d5d3445289366a2e9d550e852235666ed": "740e1be5636ffbe3f1d051cdddd1fedb",
".git/objects/76/f13a08d043fcc016675c3a51471e2454c01b06": "9c515f51db0bafbfd8f4f1dd91c7c9e6",
".git/objects/2e/04822aaa68a44b7c90800833b36b9045adcec5": "68a4bc441b08978b2705e9600f802c3d",
".git/objects/2b/1566bf52efb53cc04779123bd9caf68a489cc4": "06769fb4c5e3c26a58d19c5a825a7c1f",
".git/objects/78/271659ce7af14e103cd12383c89fbee01e701b": "e3390cd6d549046ef44add604921bd9a",
".git/objects/14/10b7c44cbcf90cdba20ad50498b766035a6384": "1ddf20dca4e3f926c72fcb3689d455b4",
".git/objects/22/9d43c53c338731f47e2a3d9e4dbf62fb59dd75": "f46abe45b5331143bf2d489d31d2a546",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "5cf07351f5d4b0ab1af7b3dc3181d07c",
".git/logs/refs/heads/main": "39380f176af17b88eef2a643343a57b5",
".git/logs/refs/remotes/origin/main": "e9e8769c4eee1c22015614ab88a95b0d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "51b0b29bbd66d3998ec07fb0d0bcb6de",
".git/refs/remotes/origin/main": "51b0b29bbd66d3998ec07fb0d0bcb6de",
".git/index": "202ebd6e4bfa10f29a2c7a7e9c973bed",
".git/COMMIT_EDITMSG": "ed384f58875d01e242293142eed75a7a",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "d73ab4c2b5b8452c513d3a37ea7af2c2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
