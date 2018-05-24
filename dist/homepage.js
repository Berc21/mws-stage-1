/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/home.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _main = __webpack_require__(/*! ./js/main */ \"./src/js/main.js\");\n\nvar _sw = __webpack_require__(/*! ./js/sw */ \"./src/js/sw.js\");\n\n/**\r\n * Fetch neighborhoods and cuisines as soon as the page is loaded.\r\n */\ndocument.addEventListener('DOMContentLoaded', function (event) {\n  (0, _main.fetchNeighborhoods)();\n  (0, _main.fetchCuisines)();\n  (0, _sw.initSW)();\n});\n\ndocument.getElementById('cuisines-select').addEventListener('change', function () {\n  (0, _main.updateRestaurants)();\n});\n\ndocument.getElementById('neighborhoods-select').addEventListener('change', function () {\n  (0, _main.updateRestaurants)();\n});\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/js/DBHelper.js":
/*!****************************!*\
  !*** ./src/js/DBHelper.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\r\n * Common database helper functions.\r\n */\nvar DBHelper = function () {\n  function DBHelper() {\n    _classCallCheck(this, DBHelper);\n  }\n\n  _createClass(DBHelper, null, [{\n    key: 'fetchRestaurants',\n\n\n    /**\r\n     * Fetch all restaurants.\r\n     */\n    value: function fetchRestaurants(callback) {\n      var xhr = new XMLHttpRequest();\n      xhr.open('GET', DBHelper.DATABASE_URL);\n      xhr.onload = function () {\n        if (xhr.status === 200) {\n          // Got a success response from server!\n          var json = JSON.parse(xhr.responseText);\n          var restaurants = json.restaurants;\n          callback(null, restaurants);\n        } else {\n          // Oops!. Got an error from server.\n          var error = 'Request failed. Returned status of ' + xhr.status;\n          callback(error, null);\n        }\n      };\n      xhr.send();\n    }\n\n    /**\r\n     * Fetch a restaurant by its ID.\r\n     */\n\n  }, {\n    key: 'fetchRestaurantById',\n    value: function fetchRestaurantById(id, callback) {\n      // fetch all restaurants with proper error handling.\n      DBHelper.fetchRestaurants(function (error, restaurants) {\n        if (error) {\n          callback(error, null);\n        } else {\n          var restaurant = restaurants.find(function (r) {\n            return r.id == id;\n          });\n          if (restaurant) {\n            // Got the restaurant\n            callback(null, restaurant);\n          } else {\n            // Restaurant does not exist in the database\n            callback('Restaurant does not exist', null);\n          }\n        }\n      });\n    }\n\n    /**\r\n     * Fetch restaurants by a cuisine type with proper error handling.\r\n     */\n\n  }, {\n    key: 'fetchRestaurantByCuisine',\n    value: function fetchRestaurantByCuisine(cuisine, callback) {\n      // Fetch all restaurants  with proper error handling\n      DBHelper.fetchRestaurants(function (error, restaurants) {\n        if (error) {\n          callback(error, null);\n        } else {\n          // Filter restaurants to have only given cuisine type\n          var results = restaurants.filter(function (r) {\n            return r.cuisine_type == cuisine;\n          });\n          callback(null, results);\n        }\n      });\n    }\n\n    /**\r\n     * Fetch restaurants by a neighborhood with proper error handling.\r\n     */\n\n  }, {\n    key: 'fetchRestaurantByNeighborhood',\n    value: function fetchRestaurantByNeighborhood(neighborhood, callback) {\n      // Fetch all restaurants\n      DBHelper.fetchRestaurants(function (error, restaurants) {\n        if (error) {\n          callback(error, null);\n        } else {\n          // Filter restaurants to have only given neighborhood\n          var results = restaurants.filter(function (r) {\n            return r.neighborhood == neighborhood;\n          });\n          callback(null, results);\n        }\n      });\n    }\n\n    /**\r\n     * Fetch restaurants by a cuisine and a neighborhood with proper error handling.\r\n     */\n\n  }, {\n    key: 'fetchRestaurantByCuisineAndNeighborhood',\n    value: function fetchRestaurantByCuisineAndNeighborhood(cuisine, neighborhood, callback) {\n      // Fetch all restaurants\n      DBHelper.fetchRestaurants(function (error, restaurants) {\n        if (error) {\n          callback(error, null);\n        } else {\n          var results = restaurants;\n          if (cuisine != 'all') {\n            // filter by cuisine\n            results = results.filter(function (r) {\n              return r.cuisine_type == cuisine;\n            });\n          }\n          if (neighborhood != 'all') {\n            // filter by neighborhood\n            results = results.filter(function (r) {\n              return r.neighborhood == neighborhood;\n            });\n          }\n          callback(null, results);\n        }\n      });\n    }\n\n    /**\r\n     * Fetch all neighborhoods with proper error handling.\r\n     */\n\n  }, {\n    key: 'fetchNeighborhoods',\n    value: function fetchNeighborhoods(callback) {\n      // Fetch all restaurants\n      DBHelper.fetchRestaurants(function (error, restaurants) {\n        if (error) {\n          callback(error, null);\n        } else {\n          // Get all neighborhoods from all restaurants\n          var neighborhoods = restaurants.map(function (v, i) {\n            return restaurants[i].neighborhood;\n          });\n          // Remove duplicates from neighborhoods\n          var uniqueNeighborhoods = neighborhoods.filter(function (v, i) {\n            return neighborhoods.indexOf(v) == i;\n          });\n          callback(null, uniqueNeighborhoods);\n        }\n      });\n    }\n\n    /**\r\n     * Fetch all cuisines with proper error handling.\r\n     */\n\n  }, {\n    key: 'fetchCuisines',\n    value: function fetchCuisines(callback) {\n      // Fetch all restaurants\n      DBHelper.fetchRestaurants(function (error, restaurants) {\n        if (error) {\n          callback(error, null);\n        } else {\n          // Get all cuisines from all restaurants\n          var cuisines = restaurants.map(function (v, i) {\n            return restaurants[i].cuisine_type;\n          });\n          // Remove duplicates from cuisines\n          var uniqueCuisines = cuisines.filter(function (v, i) {\n            return cuisines.indexOf(v) == i;\n          });\n          callback(null, uniqueCuisines);\n        }\n      });\n    }\n\n    /**\r\n     * Restaurant page URL.\r\n     */\n\n  }, {\n    key: 'urlForRestaurant',\n    value: function urlForRestaurant(restaurant) {\n      return './restaurant.html?id=' + restaurant.id;\n    }\n\n    /**\r\n     * Restaurant image URL.\r\n     */\n\n  }, {\n    key: 'imageUrlForRestaurant',\n    value: function imageUrlForRestaurant(restaurant) {\n      return '/images/sm-img/' + restaurant.photograph;\n    }\n  }, {\n    key: 'bigImageUrlForRestaurant',\n    value: function bigImageUrlForRestaurant(restaurant) {\n      return '/images/lg-img/' + restaurant.photograph;\n    }\n\n    /**\r\n     * Map marker for a restaurant.\r\n     */\n\n  }, {\n    key: 'mapMarkerForRestaurant',\n    value: function mapMarkerForRestaurant(restaurant, map) {\n      var marker = new google.maps.Marker({\n        position: restaurant.latlng,\n        title: restaurant.name,\n        url: DBHelper.urlForRestaurant(restaurant),\n        map: map,\n        animation: google.maps.Animation.DROP });\n      return marker;\n    }\n  }, {\n    key: 'removeTabbing',\n    value: function removeTabbing() {\n      document.querySelectorAll('#map iframe').forEach(function (item) {\n        item.setAttribute('tabindex', '-1');\n        // adds title attirbute\n        item.setAttribute('title', 'Google Maps iframe');\n      });\n    }\n  }, {\n    key: 'addAriaTable',\n    value: function addAriaTable() {\n      document.querySelectorAll('#map [tabindex=\"0\"]').forEach(function (item) {\n        item.setAttribute('aria-label', 'Marked restaurants');\n      });\n    }\n  }, {\n    key: 'DATABASE_URL',\n\n\n    /**\r\n     * Database URL.\r\n     * Change this to restaurants.json file location on your server.\r\n     */\n    get: function get() {\n      return 'data/restaurants.json';\n    }\n  }]);\n\n  return DBHelper;\n}();\n\nexports.default = DBHelper;\n\n//# sourceURL=webpack:///./src/js/DBHelper.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.updateRestaurants = exports.fetchCuisines = exports.fetchNeighborhoods = undefined;\n\nvar _DBHelper = __webpack_require__(/*! ./DBHelper */ \"./src/js/DBHelper.js\");\n\nvar _DBHelper2 = _interopRequireDefault(_DBHelper);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar restaurants = void 0,\n    neighborhoods = void 0,\n    cuisines = void 0,\n    map = void 0;\nvar markers = [];\n\n/**\r\n * Init function that fixs maps\r\n */\n\nwindow.onload = function () {\n  _DBHelper2.default.removeTabbing();\n  _DBHelper2.default.addAriaTable();\n};\n\n/**\r\n * Fetch all neighborhoods and set their HTML.\r\n */\nvar fetchNeighborhoods = exports.fetchNeighborhoods = function fetchNeighborhoods() {\n  _DBHelper2.default.fetchNeighborhoods(function (error, neighborhoods) {\n    if (error) {\n      // Got an error\n      console.error(error);\n    } else {\n      self.neighborhoods = neighborhoods;\n      fillNeighborhoodsHTML();\n    }\n  });\n};\n\n/**\r\n * Set neighborhoods HTML.\r\n */\nvar fillNeighborhoodsHTML = function fillNeighborhoodsHTML() {\n  var neighborhoods = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : self.neighborhoods;\n\n  var select = document.getElementById('neighborhoods-select');\n  neighborhoods.forEach(function (neighborhood) {\n    var option = document.createElement('option');\n    option.innerHTML = neighborhood;\n    option.value = neighborhood;\n    select.append(option);\n  });\n};\n\n/**\r\n * Fetch all cuisines and set their HTML.\r\n */\nvar fetchCuisines = exports.fetchCuisines = function fetchCuisines() {\n  _DBHelper2.default.fetchCuisines(function (error, cuisines) {\n    if (error) {\n      // Got an error!\n      console.error(error);\n    } else {\n      self.cuisines = cuisines;\n      fillCuisinesHTML();\n    }\n  });\n};\n\n/**\r\n * Set cuisines HTML.\r\n */\nvar fillCuisinesHTML = function fillCuisinesHTML() {\n  var cuisines = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : self.cuisines;\n\n  var select = document.getElementById('cuisines-select');\n\n  cuisines.forEach(function (cuisine) {\n    var option = document.createElement('option');\n    option.innerHTML = cuisine;\n    option.value = cuisine;\n    select.append(option);\n  });\n};\n\n/**\r\n * Initialize Google map, called from HTML.\r\n */\nwindow.initMap = function () {\n  var loc = {\n    lat: 40.722216,\n    lng: -73.987501\n  };\n  self.map = new google.maps.Map(document.getElementById('map'), {\n    zoom: 12,\n    center: loc,\n    scrollwheel: false\n  });\n  updateRestaurants();\n};\n\n/**\r\n * Update page and map for current restaurants.\r\n */\nvar updateRestaurants = exports.updateRestaurants = function updateRestaurants() {\n  var cSelect = document.getElementById('cuisines-select');\n  var nSelect = document.getElementById('neighborhoods-select');\n\n  var cIndex = cSelect.selectedIndex;\n  var nIndex = nSelect.selectedIndex;\n\n  var cuisine = cSelect[cIndex].value;\n  var neighborhood = nSelect[nIndex].value;\n\n  _DBHelper2.default.fetchRestaurantByCuisineAndNeighborhood(cuisine, neighborhood, function (error, restaurants) {\n    if (error) {\n      // Got an error!\n      console.error(error);\n    } else {\n      resetRestaurants(restaurants);\n      fillRestaurantsHTML();\n    }\n  });\n};\n\n/**\r\n * Clear current restaurants, their HTML and remove their map markers.\r\n */\nvar resetRestaurants = function resetRestaurants(restaurants) {\n  // Remove all restaurants\n  self.restaurants = [];\n  var ul = document.getElementById('restaurants-list');\n  ul.innerHTML = '';\n\n  // Remove all map markers\n  if (self.makers) self.markers.forEach(function (m) {\n    return m.setMap(null);\n  });\n  self.markers = [];\n  self.restaurants = restaurants;\n};\n\n/**\r\n * Create all restaurants HTML and add them to the webpage.\r\n */\nvar fillRestaurantsHTML = function fillRestaurantsHTML() {\n  var restaurants = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : self.restaurants;\n\n  var ul = document.getElementById('restaurants-list');\n  restaurants.forEach(function (restaurant) {\n    ul.append(createRestaurantHTML(restaurant));\n  });\n  addMarkersToMap();\n};\n\n/**\r\n * Create restaurant HTML.\r\n */\nvar createRestaurantHTML = function createRestaurantHTML(restaurant) {\n  var li = document.createElement('li');\n  /**\r\n    const image = document.createElement('img');\r\n    image.className = 'restaurant-img';\r\n    image.src = DBHelper.imageUrlForRestaurant(restaurant);\r\n    image.alt =  restaurant.name + ' card image';\r\n    li.append(image);\r\n  */\n\n  var pictureMarkup = '\\n\\n  <img class=\"restaurant-img\" src=\"' + _DBHelper2.default.imageUrlForRestaurant(restaurant) + '\" alt=\"' + (restaurant.name + ' Restaurant, ' + restaurant.atmosphere) + '\">\\n';\n  li.insertAdjacentHTML('beforeend', pictureMarkup);\n\n  var name = document.createElement('h2');\n  name.innerHTML = restaurant.name;\n  li.append(name);\n\n  var neighborhood = document.createElement('p');\n  neighborhood.innerHTML = restaurant.neighborhood;\n  li.append(neighborhood);\n\n  var address = document.createElement('p');\n  address.innerHTML = restaurant.address;\n  li.append(address);\n\n  var more = document.createElement('a');\n  more.innerHTML = 'View Details';\n  more.href = _DBHelper2.default.urlForRestaurant(restaurant);\n  li.append(more);\n\n  return li;\n};\n\n/**\r\n * Add markers for current restaurants to the map.\r\n */\nvar addMarkersToMap = function addMarkersToMap() {\n  var restaurants = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : self.restaurants;\n\n  restaurants.forEach(function (restaurant) {\n    // Add marker to the map\n    var marker = _DBHelper2.default.mapMarkerForRestaurant(restaurant, self.map);\n    google.maps.event.addListener(marker, 'click', function () {\n      window.location.href = marker.url;\n    });\n    self.markers.push(marker);\n  });\n};\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/sw.js":
/*!**********************!*\
  !*** ./src/js/sw.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.initSW = initSW;\n// service worker\nfunction initSW() {\n  if ('serviceWorker' in navigator) {\n\n    window.addEventListener('load', function () {\n      navigator.serviceWorker.register('/sw.js', {\n        scope: '/'\n      }).then(function (registration) {\n        // If registration is successful\n        console.log('ServiceWorker registration successful with scope: ', registration.scope);\n      }).catch(function (err) {\n        //If registration is failed :(\n        console.log('ServiceWorker registration failed:', err);\n      });\n    });\n  }\n}\n\n//# sourceURL=webpack:///./src/js/sw.js?");

/***/ })

/******/ });