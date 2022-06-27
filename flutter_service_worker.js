'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0a61a816cacf0e8f5d76c2289265a6d1",
".git/config": "4a764c906a64e2f6f1b510fb8cac618e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8a5b2af176586cca1eae8fcebed7d31c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d2514728dc832df757a5a414827602ba",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fb3940bdc83ddd089ee2f5cc810ca53b",
".git/logs/refs/heads/main": "276980eb867a4f527867bbb39e108a16",
".git/logs/refs/remotes/origin/main": "b764ec15a594e6b383300a5e322fbc51",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/03/1351d20f933094e59ec59ff496eba5de54f905": "985ff391382c28d543ef3bb568aee201",
".git/objects/03/fbf76830fa9a5befa4f9f0c46cda183f2080bc": "02a034484e45ce17954ac5026207a56b",
".git/objects/05/caf748c1493c76a60ed10626138b72daa87918": "2e858fc2524343e338ddf38491d964de",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/8bbc1a43cd8437aa469d6dfa4ceb83cb515ce4": "c428c2cf505bc42c8440493bdd3648e8",
".git/objects/0f/7ac2bcf4e4f43d7f928a28efed0001768bee00": "d828f254d3c2f2d5f339edf6391a516b",
".git/objects/13/4c4747625fa30a913a62cf1c255ed5d1daae96": "1b2bc21a14925df3145d9e0ef49ac012",
".git/objects/13/fc1de111f85905531c3653bbce734cd5a0772a": "8eb9e4359b694f68a00bf2feeff107cf",
".git/objects/14/245abbb8decb4c98c4eaefd3c530f096677ec6": "67590899877ff546088352f6f617cfbf",
".git/objects/16/03c597fe7522c443841249eea24e93c7e59641": "ae3c6d859616c34f6291d7f20a92047d",
".git/objects/16/327b468b50458e84e6ba0f82d6e2c2e9eeb3a4": "8c46b0862776d83da1d4058d6e29a188",
".git/objects/17/ec182ff9260e9f61ed17043f34176a6f2bcc49": "6406fee490ae53044ea44cdfa544bdc0",
".git/objects/1c/b165217127e63e032efe27fea523f6684ed8f4": "986fd0b0197c1f746b2f113136a6311d",
".git/objects/1e/9f1f5aa2e975aa098514e670a7036ea79e81f6": "c9f51fa57437fbcdbc720d8510a6f991",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/fa4512f21b61564761df5585a11be1cc985476": "decc5e942c917e8ed7ad81ac82d3f283",
".git/objects/2b/9f79e8473902e55139e1ff1d0d60fc07482c8a": "dd6c057ead69c75fddb757a5527d9eaa",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/5a6add7d469b174bacc9283200c1a0facacf82": "9d3af5924197dcc89c469257e226c6c8",
".git/objects/2f/b90b51c28c6dacbbf4cdf6dd720e855c146958": "5461f349e63d531e38e2d39229313972",
".git/objects/33/bb7619dc0b3ef39cd6716f768b5f65f84555d1": "37d9224276a1e24aefb796df7e8fe738",
".git/objects/35/914838cfc34a5396b2e7d9f1ba67ce19d742f1": "91853d3909e172ddeea1b716a7a7e202",
".git/objects/38/1b402f67c333e0a6f872ff0d506a1ee1c74851": "f0f2ac992f49a7d6e40fce75fbc7c3d0",
".git/objects/39/0949a61231210bb0257ca2cf148f249f1eef44": "eb00c1603f48e7d7148b8d3b99339b24",
".git/objects/39/d310aaac451a4810b00d1a5f309b186588839c": "654b541da96f333a01622a968ef9dfa1",
".git/objects/39/eb8e66e277843c006971518fe7065e02ce71ff": "6e868821939c6aa2fe3c5097a48f91e2",
".git/objects/3c/e9879743981b318a7b4b34a02d474a7f93a2a1": "bfd2dbc0c14ad12faaa7cd24a2563873",
".git/objects/3d/5e2ac0bff5e54d23dfa5c506a7f2371a780b67": "0c650190edc4661ced0192687fc2cf6c",
".git/objects/3e/6428374c2a457c1b53934e9d8d4305c134e7df": "068aac59e043cb04f081bc302a1aa961",
".git/objects/3f/237db7b437b403a285066d377f2617ab973f32": "81042378441fe9cb518502ada491f057",
".git/objects/4a/b1a043bbb3174bc1f2c90120df7d64c6ae3eaa": "f5d5f450fdb620ae5ee2b47e3ace55be",
".git/objects/4c/e524fc11360d8a32652ec9b34e9e370eb439da": "6b50365b2a15a4ea0dbd6fb43de811a0",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/51/9425e94a4c99d348c23e1d1dc0ed78b68a13a7": "d106fe3091516f5a9dd1fede25d603dc",
".git/objects/51/fb99edb57851878fc046e1b0c4d12abfea2609": "525409564fb2628e615301796a4bb359",
".git/objects/56/dc72d5ef9c7b6f35bdcd00326de17a9c9c4b94": "a99cf52149c77afed5d080c009a61d62",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/59/d187a5d561ad918f039e847a1d5257937375fc": "9b1783eb9b61ad5d58a2f987d7635eec",
".git/objects/60/e30ebdf1fead35f53e79c9c728fb08b6de452f": "f1793b00b31fcd938531d0aa0e8b2df1",
".git/objects/63/988eed91f597491b25a134a84bad905f6e30bf": "6745c274a925501066a515f37f3b3a22",
".git/objects/66/1245ab80a4ab1a8b48e8f3d9365add9e3b1c6d": "54466c0351c64f526c1bbdeca66e768b",
".git/objects/6a/5b9eb2a0e46a23c7f9896cba7722442b21f618": "ce21f285a497a79c10d06f9b702b29e1",
".git/objects/6d/0b75fc5f1403351183db6ce3174866f70d2687": "4479377fafe273e632b5f389254f5dc6",
".git/objects/6d/6008e456ab052faa387af5fe6cfa7239372766": "b82da39aa6d149754fbb2b03a2d11d4e",
".git/objects/70/cddb939e4b219e40250b9ba0b97723bcbcb300": "dd2da0cf3ff0f7df95da2f9b940e1ac9",
".git/objects/71/395e12a9be022560d241da86d3dbae811c7689": "c0e7da8c6062537071d8d6dc92ab2934",
".git/objects/72/b0c325d27268f91c4e1d1616505868508e0318": "9b6da953f6e49ab3d9b2e09a73c26805",
".git/objects/76/7f34887360b3016d4a9308dc2d903cebe80401": "d13b4877e6e664d2fa30d47f73851c76",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/df5be29f71181c185372054c35c182320e3466": "cc2524347b38fad45e8995cc78b923a7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/7c56f9bda8c052ee53fc4338700ade2caab05a": "b97a29c443c09a3f1a4f062993226029",
".git/objects/81/7ff24b47e70315b1cd17904d567290a162900c": "6b0852796b3f3fb3acb05e97250a0c47",
".git/objects/85/c0cfcb626c3de0c980d21e39af39446014251a": "b18a7f2d2939c69e9c39f7987a5e2a8b",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/8c454fb6fe50c7f05cdc2db89df05001d7789a": "f59660eb83869db55bb29a29b3834420",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8b/a4ebff7eadca36f693736daf3f8f80b86f4933": "cce8b3eaf9d25bb12b0363d43cbd80ae",
".git/objects/8c/4d1953d0319c26f849b882eddecc119ed2dcd8": "802bd26caa1fc95716a5f0808f5f2ca4",
".git/objects/8e/f824ea64de7be0aee7bc7ee255ba060ffb351e": "ee3657c11c5a28822074d14c64681aa1",
".git/objects/90/d30e048078be3c7b945c424bbb3e81ce7a0c39": "3a7d5efcce55b985463912d1e03eb2e5",
".git/objects/91/9e6e255149d06c5598ff6fa7acc5288a917e89": "197e0b64bd5669cb43a7529fed882be6",
".git/objects/91/bbe0821a7d0255fd83979ad2a2dd18424d813b": "13a66f90396a7b84f808c8dc9be10f2d",
".git/objects/91/f4c702706cc99c506cff44d0e24a9201c60457": "08fce38b86f26b4600135d329510194a",
".git/objects/94/2ca791d154ecbcd0269c0364d85c1925c79437": "07ca6cb8cb3443067abe8ca0fc328afa",
".git/objects/97/08fcb160e80cf6e20fec0cff361099cb6f413f": "87a3662b8557920f5402308803fe8af9",
".git/objects/9d/609b1ded437d2cd86918725276c838a8d08a52": "d8bfb41fb7125abc7a38b3f050a26a0b",
".git/objects/9f/38b13098b6de57b2c1a5d5cdb1a70ee02251aa": "f05609b433e3a63100df158c03e68cfa",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/0a5d939d95bf0a9f517d44483e9583fb725afb": "1f14b77e17af7f15752ba6a060689c7d",
".git/objects/a8/23124ef3368700d7a8c79dd6f9b653d9489298": "005639e772fad1c92de16591e83aed28",
".git/objects/a8/e26ba7296a9ebca4eda289eb8d008e5b74a34d": "26c08761014e7d56eca5304fc1d5078c",
".git/objects/aa/d10413e9cee2c8bd04baf1c2c1c381300df0cc": "7363a8798459814686e797a833510a80",
".git/objects/b2/6d1cb8488fe1ab742b81e5b5d62065b5ec4865": "229845f42cb7fb2569ede32f290e29b6",
".git/objects/b5/288d5766e0dc695a8c7c6a256d7445595ace9e": "5734580162b9dc616898ba4b226813e3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/9b9a051cfd3a94cf37a06f3aece91aa8cc14a5": "0a1cd55b04bf98592092c12ba1d01f32",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/a930d4a914272630aced1b6a4ca5aceee5dc3a": "a7a193f08b39f71ec9a8903afcf9cc6a",
".git/objects/bf/235706f33acdaa1d32e052745457f458a32249": "178761d4b3216f493b58c28971c5d2ed",
".git/objects/bf/448f296b5710a11dd8a35e43e7492728055c7c": "cc20896713374104254516dd301f033b",
".git/objects/bf/bcc67ab4011b82e7191ead67ed47afb671138e": "a6938c147eb5c12b592b76a0a682843c",
".git/objects/c0/0792fb5cf131fb3a2242979b40a4240b013356": "02405880539f7843b2d0addf81c920b3",
".git/objects/c1/fde3bee8c909424da1b535b0c9671ba8cad463": "41ead5d8907b716cdd6b5c106767636e",
".git/objects/c5/83ee8a98d88c9514ba7eec58a8cfdc62de2bbd": "63c5e733d03d297529ded892dd777d45",
".git/objects/c6/5931d4e08efcc5fe6c9867fcf0bccef7e5bc0f": "dac4bb9f827bfb57c643342923e08311",
".git/objects/c6/6ba70c82676eb8347574d9a0d827708ed26418": "44293a149c79c0a2d48a8bf0c275d463",
".git/objects/c8/53464d44f909ce5a9770d18d410e93ad16787c": "d00a7a61d215a6a6a2a20a4a8598710c",
".git/objects/c8/b65bb314f2cd022cb63bc63c90cb28921a4a81": "3270a0bfb6c355533a4721517e45836b",
".git/objects/cd/00fb5e013e19b40a5c13f21538d0b9da9b6cc6": "565fbe4881e18ce46f40f485429a2a11",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/d030a15d876e3045599a838fe50619f47a5a5c": "71e480358a95e89d1b75d13b4cb5ecc4",
".git/objects/de/051ec1bbe31ad4b866f347bfec94ed9bca7992": "f5a1e5c25cd03a221dff09522687f71f",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e1/02f17bf9bdf26fe4d19299a2eeda4053ccc6ee": "fde863bc6a90dd77a8f0a6fa68ea8a97",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/84e7a79850273bbd292826209f900c1a563796": "0fc13d7712a2a3f2b77ef3de73ce90e9",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/49f8c99a537add86b9d75c94d2b426816a4151": "ac60bc99c3d1a17975cd7a2c880d64ab",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/55d10e2caeff3da89cd5cd1983147f1cf8c94c": "93c2efb2a8264a5509f22ac6bb1a9dc7",
".git/objects/f4/4223c563d7272d0d0230cb4fb35ec052853dc6": "2e6594c9131276f3c86479cfcd71e619",
".git/objects/f4/81c12ba2aa769bc7b496d037eeee668f2f2fd4": "697deaea61913b46c9fa2ec9277fe17d",
".git/objects/f8/6f697be7bd78b441624c63719207ccfde066e5": "c42041413238f7519b35cbad8fe1ffe3",
".git/objects/f8/a60fd1fe7445b54d9af7c25ac3f289a189b995": "f0cfc84c8b72efaed5464e3291ed44d4",
".git/objects/fc/2b14df9627e935bd4c974cda3f456badcb4052": "370f57a9097da7b2981beb5a47051ddd",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/ff/54bb3175eb0050b7fd9df2824a97843f551d60": "d10e396e6db002f6ae8c4aa3f7de0acf",
".git/objects/ff/8ae94a609647ee5a76a74afd029bd960ded4e3": "9608a6bac7c1c1127efeef526ca71a9c",
".git/objects/ff/c333f3593873ea0c62e85abfc09c42cb07096a": "32e199474fde1141903c1a434deacc73",
".git/objects/ff/ece336b0099586e157d873c58a6d9123a0c676": "d42471bfdb66713880601cfc9db13dc3",
".git/ORIG_HEAD": "2855f736d992feecb887c4a23a566a81",
".git/refs/heads/main": "b132439b64b1bd45e7eecac6d580e018",
".git/refs/remotes/origin/main": "b132439b64b1bd45e7eecac6d580e018",
"assets/AssetManifest.json": "5ecfd568de5d3bbce5365c70ca0a73f6",
"assets/assets/icons/android.png": "380fa975c389ac781d3dd5e835f11b74",
"assets/assets/icons/dart.png": "99087c14c9181d7e03b8ec53f8e41b99",
"assets/assets/icons/fastapi.png": "ffcc3d2a0a08f216821dd9f4dde14927",
"assets/assets/icons/firebase.png": "f867c7d3c191009da2fcc5fa40f0eff0",
"assets/assets/icons/flutter.png": "9f9b1c3b06215672256885f72658e2f7",
"assets/assets/icons/git.png": "fdde68e6978b419833b43270b07d76fd",
"assets/assets/icons/python.png": "ef2dd347e551b775cd0bdfc28fab02ec",
"assets/assets/icons/web.png": "49d05a438260a703d488faffb0196561",
"assets/assets/images/bg-square.png": "78348f88d10542e5f675d0033d361c1e",
"assets/assets/images/bg.JPG": "77062130c8489d2eadefe34bc462d533",
"assets/assets/images/gb-square.jpg": "dd36f306d1b030bd6e761898acfeafc3",
"assets/assets/images/markcabalona_bnw.jpg": "e95764696609c6b8ec4a63d3c26bd618",
"assets/assets/images/markcabalona_bnw_no_bg.png": "5b3d5fb1a2d342d81991da28660b1e34",
"assets/assets/images/me-bg.png": "2614f203dd0dac5088d547407b893001",
"assets/assets/images/me.jpg": "0bf70111412444ee9ae9996e715308c6",
"assets/assets/images/me_at_wed.jpg": "c09f0d41abf17d938db441cfe4ae7517",
"assets/assets/project-images/axie-monitoring.png": "b17bea905a39cac6e9bf7f891b71902a",
"assets/assets/project-images/freedomwall.png": "c16de0f21841d6d833743d8fced8f97b",
"assets/assets/project-images/project-manager.png": "3ede9b51ae48cac88efd16162387248f",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "0d7e6a1a58f71c44c8d9142eef380030",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "faa9f3436e81af9cd29e50eb5a0d76bb",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/apple-touch-icon.png": "c53b33dec0e8ad365433deb232815227",
"icons/favicon-16x16.png": "faa9f3436e81af9cd29e50eb5a0d76bb",
"icons/favicon-32x32.png": "c7af13a7548f3d2d33408fc5741d0f46",
"icons/favicon.ico": "15efad594bdb71e4f3321917b8d39d8a",
"icons/Icon-192.png": "c0a4f3dc4ffd9034c0a8ba6e16b6f1f3",
"icons/Icon-512.png": "26642fe8ac3b084737c8b906b8526ff4",
"icons/Icon-maskable-192.png": "c0a4f3dc4ffd9034c0a8ba6e16b6f1f3",
"icons/Icon-maskable-512.png": "26642fe8ac3b084737c8b906b8526ff4",
"index.html": "449b39fe94c3b971f5b0091f1ad610e0",
"/": "449b39fe94c3b971f5b0091f1ad610e0",
"main.dart.js": "9b522144ebf6335a745fda917650a2f7",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"README.md": "a4458313a8b33a8bfd93c1a2a9497b9f",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "e05a0772f69b8f041884c598046b5622",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
