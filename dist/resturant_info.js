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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/restaurant.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/DBHelper.js":
/*!****************************!*\
  !*** ./src/js/DBHelper.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\r\n * Common database helper functions.\r\n */\nvar DBHelper = function () {\n  function DBHelper() {\n    _classCallCheck(this, DBHelper);\n  }\n\n  _createClass(DBHelper, null, [{\n    key: 'fetchRestaurants',\n\n\n    /**\r\n     * Fetch all restaurants.\r\n     */\n    value: function fetchRestaurants(callback) {\n      var xhr = new XMLHttpRequest();\n      xhr.open('GET', DBHelper.DATABASE_URL);\n      xhr.onload = function () {\n        if (xhr.status === 200) {\n          // Got a success response from server!\n          var json = JSON.parse(xhr.responseText);\n          var restaurants = json.restaurants;\n          callback(null, restaurants);\n        } else {\n          // Oops!. Got an error from server.\n          var error = 'Request failed. Returned status of ' + xhr.status;\n          callback(error, null);\n        }\n      };\n      xhr.send();\n    }\n\n    /**\r\n     * Fetch a restaurant by its ID.\r\n     */\n\n  }, {\n    key: 'fetchRestaurantById',\n    value: function fetchRestaurantById(id, callback) {\n      // fetch all restaurants with proper error handling.\n      DBHelper.fetchRestaurants(function (error, restaurants) {\n        if (error) {\n          callback(error, null);\n        } else {\n          var restaurant = restaurants.find(function (r) {\n            return r.id == id;\n          });\n          if (restaurant) {\n            // Got the restaurant\n            callback(null, restaurant);\n          } else {\n            // Restaurant does not exist in the database\n            callback('Restaurant does not exist', null);\n          }\n        }\n      });\n    }\n\n    /**\r\n     * Fetch restaurants by a cuisine type with proper error handling.\r\n     */\n\n  }, {\n    key: 'fetchRestaurantByCuisine',\n    value: function fetchRestaurantByCuisine(cuisine, callback) {\n      // Fetch all restaurants  with proper error handling\n      DBHelper.fetchRestaurants(function (error, restaurants) {\n        if (error) {\n          callback(error, null);\n        } else {\n          // Filter restaurants to have only given cuisine type\n          var results = restaurants.filter(function (r) {\n            return r.cuisine_type == cuisine;\n          });\n          callback(null, results);\n        }\n      });\n    }\n\n    /**\r\n     * Fetch restaurants by a neighborhood with proper error handling.\r\n     */\n\n  }, {\n    key: 'fetchRestaurantByNeighborhood',\n    value: function fetchRestaurantByNeighborhood(neighborhood, callback) {\n      // Fetch all restaurants\n      DBHelper.fetchRestaurants(function (error, restaurants) {\n        if (error) {\n          callback(error, null);\n        } else {\n          // Filter restaurants to have only given neighborhood\n          var results = restaurants.filter(function (r) {\n            return r.neighborhood == neighborhood;\n          });\n          callback(null, results);\n        }\n      });\n    }\n\n    /**\r\n     * Fetch restaurants by a cuisine and a neighborhood with proper error handling.\r\n     */\n\n  }, {\n    key: 'fetchRestaurantByCuisineAndNeighborhood',\n    value: function fetchRestaurantByCuisineAndNeighborhood(cuisine, neighborhood, callback) {\n      // Fetch all restaurants\n      DBHelper.fetchRestaurants(function (error, restaurants) {\n        if (error) {\n          callback(error, null);\n        } else {\n          var results = restaurants;\n          if (cuisine != 'all') {\n            // filter by cuisine\n            results = results.filter(function (r) {\n              return r.cuisine_type == cuisine;\n            });\n          }\n          if (neighborhood != 'all') {\n            // filter by neighborhood\n            results = results.filter(function (r) {\n              return r.neighborhood == neighborhood;\n            });\n          }\n          callback(null, results);\n        }\n      });\n    }\n\n    /**\r\n     * Fetch all neighborhoods with proper error handling.\r\n     */\n\n  }, {\n    key: 'fetchNeighborhoods',\n    value: function fetchNeighborhoods(callback) {\n      // Fetch all restaurants\n      DBHelper.fetchRestaurants(function (error, restaurants) {\n        if (error) {\n          callback(error, null);\n        } else {\n          // Get all neighborhoods from all restaurants\n          var neighborhoods = restaurants.map(function (v, i) {\n            return restaurants[i].neighborhood;\n          });\n          // Remove duplicates from neighborhoods\n          var uniqueNeighborhoods = neighborhoods.filter(function (v, i) {\n            return neighborhoods.indexOf(v) == i;\n          });\n          callback(null, uniqueNeighborhoods);\n        }\n      });\n    }\n\n    /**\r\n     * Fetch all cuisines with proper error handling.\r\n     */\n\n  }, {\n    key: 'fetchCuisines',\n    value: function fetchCuisines(callback) {\n      // Fetch all restaurants\n      DBHelper.fetchRestaurants(function (error, restaurants) {\n        if (error) {\n          callback(error, null);\n        } else {\n          // Get all cuisines from all restaurants\n          var cuisines = restaurants.map(function (v, i) {\n            return restaurants[i].cuisine_type;\n          });\n          // Remove duplicates from cuisines\n          var uniqueCuisines = cuisines.filter(function (v, i) {\n            return cuisines.indexOf(v) == i;\n          });\n          callback(null, uniqueCuisines);\n        }\n      });\n    }\n\n    /**\r\n     * Restaurant page URL.\r\n     */\n\n  }, {\n    key: 'urlForRestaurant',\n    value: function urlForRestaurant(restaurant) {\n      return './restaurant.html?id=' + restaurant.id;\n    }\n\n    /**\r\n     * Restaurant image URL.\r\n     */\n\n  }, {\n    key: 'imageUrlForRestaurant',\n    value: function imageUrlForRestaurant(restaurant) {\n      return '/images/sm-img/' + restaurant.photograph;\n    }\n  }, {\n    key: 'bigImageUrlForRestaurant',\n    value: function bigImageUrlForRestaurant(restaurant) {\n      return '/images/lg-img/' + restaurant.photograph;\n    }\n\n    /**\r\n     * Map marker for a restaurant.\r\n     */\n\n  }, {\n    key: 'mapMarkerForRestaurant',\n    value: function mapMarkerForRestaurant(restaurant, map) {\n      var marker = new google.maps.Marker({\n        position: restaurant.latlng,\n        title: restaurant.name,\n        url: DBHelper.urlForRestaurant(restaurant),\n        map: map,\n        animation: google.maps.Animation.DROP });\n      return marker;\n    }\n  }, {\n    key: 'removeTabbing',\n    value: function removeTabbing() {\n      document.querySelectorAll('#map iframe').forEach(function (item) {\n        item.setAttribute('tabindex', '-1');\n        // adds title attirbute\n        item.setAttribute('title', 'Google Maps iframe');\n      });\n    }\n  }, {\n    key: 'addAriaTable',\n    value: function addAriaTable() {\n      document.querySelectorAll('#map [tabindex=\"0\"]').forEach(function (item) {\n        item.setAttribute('aria-label', 'Marked restaurants');\n      });\n    }\n  }, {\n    key: 'DATABASE_URL',\n\n\n    /**\r\n     * Database URL.\r\n     * Change this to restaurants.json file location on your server.\r\n     */\n    get: function get() {\n      return 'data/restaurants.json';\n    }\n  }]);\n\n  return DBHelper;\n}();\n\nexports.default = DBHelper;\n\n//# sourceURL=webpack:///./src/js/DBHelper.js?");

/***/ }),

/***/ "./src/js/restaurant_info.js":
/*!***********************************!*\
  !*** ./src/js/restaurant_info.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.fillBreadcrumb = exports.fetchRestaurantFromURL = exports.addMapMakers = undefined;\n\nvar _DBHelper = __webpack_require__(/*! ./DBHelper */ \"./src/js/DBHelper.js\");\n\nvar _DBHelper2 = _interopRequireDefault(_DBHelper);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar restaurant = void 0;\nvar map;\n\nvar addMapMakers = exports.addMapMakers = function addMapMakers() {\n  _DBHelper2.default.mapMarkerForRestaurant(self.restaurant, self.map);\n};\n\n/**\r\n * Get current restaurant from page URL.\r\n */\nvar fetchRestaurantFromURL = exports.fetchRestaurantFromURL = function fetchRestaurantFromURL(callback) {\n  if (self.restaurant) {\n    // restaurant already fetched!\n    callback(null, self.restaurant);\n    return;\n  }\n  var id = getParameterByName('id');\n  if (!id) {\n    // no id found in URL\n    error = 'No restaurant id in URL';\n    callback(error, null);\n  } else {\n    _DBHelper2.default.fetchRestaurantById(id, function (error, restaurant) {\n      self.restaurant = restaurant;\n      if (!restaurant) {\n        console.error(error);\n        return;\n      }\n      fillRestaurantHTML();\n      callback(null, restaurant);\n    });\n  }\n};\n\n/**\r\n * Create restaurant HTML and add it to the webpage\r\n */\nvar fillRestaurantHTML = function fillRestaurantHTML() {\n  var restaurant = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : self.restaurant;\n\n\n  var name = document.getElementById('restaurant-name');\n  name.innerHTML = restaurant.name;\n\n  var address = document.getElementById('restaurant-address');\n  address.innerHTML = restaurant.address;\n\n  var image = document.getElementById('restaurant-img');\n\n  var pictureMarkup = '\\n  <source  media=\"(max-width: 465px)\" srcset=\"' + _DBHelper2.default.imageUrlForRestaurant(restaurant) + '\" alt=\"' + (restaurant.name + ' Restaurant, ' + restaurant.atmosphere) + '\"  >\\n  <img  src=\"' + _DBHelper2.default.bigImageUrlForRestaurant(restaurant) + '\" alt=\"' + (restaurant.name + ' Restaurant, ' + restaurant.atmosphere) + '\" >\\n';\n\n  image.insertAdjacentHTML('beforeend', pictureMarkup);\n\n  var cuisine = document.getElementById('restaurant-cuisine');\n  cuisine.innerHTML = restaurant.cuisine_type;\n\n  // fill operating hours\n  if (restaurant.operating_hours) {\n    fillRestaurantHoursHTML();\n  }\n  // fill reviews\n  fillReviewsHTML();\n};\n\n/**\r\n * Create restaurant operating hours HTML table and add it to the webpage.\r\n */\nvar fillRestaurantHoursHTML = function fillRestaurantHoursHTML() {\n  var operatingHours = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : self.restaurant.operating_hours;\n\n  var hours = document.getElementById('restaurant-hours');\n  for (var key in operatingHours) {\n    var row = document.createElement('tr');\n\n    var day = document.createElement('td');\n    day.innerHTML = key;\n    row.appendChild(day);\n\n    var time = document.createElement('td');\n    time.innerHTML = operatingHours[key];\n    row.appendChild(time);\n\n    hours.appendChild(row);\n  }\n};\n\n/**\r\n * Create all reviews HTML and add them to the webpage.\r\n */\nvar fillReviewsHTML = function fillReviewsHTML() {\n  var reviews = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : self.restaurant.reviews;\n\n  var container = document.getElementById('reviews-container');\n  var title = document.createElement('h3');\n  title.innerHTML = 'Reviews';\n  container.appendChild(title);\n\n  if (!reviews) {\n    var noReviews = document.createElement('p');\n    noReviews.innerHTML = 'No reviews yet!';\n    container.appendChild(noReviews);\n    return;\n  }\n  var ul = document.getElementById('reviews-list');\n  reviews.forEach(function (review) {\n    ul.appendChild(createReviewHTML(review));\n  });\n  container.appendChild(ul);\n};\n\n/**\r\n * Create review HTML and add it to the webpage.\r\n */\nvar createReviewHTML = function createReviewHTML(review) {\n  var li = document.createElement('li');\n  li.classList.add(\"col\");\n  var name = document.createElement('p');\n  name.innerHTML = review.name;\n  li.appendChild(name);\n\n  var date = document.createElement('p');\n  date.innerHTML = review.date;\n  li.appendChild(date);\n\n  var rating = document.createElement('p');\n  rating.innerHTML = 'Rating: ' + review.rating;\n  li.appendChild(rating);\n\n  var comments = document.createElement('p');\n  comments.innerHTML = review.comments;\n  li.appendChild(comments);\n\n  return li;\n};\n\n/**\r\n * Add restaurant name to the breadcrumb navigation menu\r\n */\nvar fillBreadcrumb = exports.fillBreadcrumb = function fillBreadcrumb() {\n  var restaurant = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : self.restaurant;\n\n  var breadcrumb = document.getElementById('breadcrumb');\n  var li = document.createElement('li');\n  li.innerHTML = restaurant.name;\n  li.setAttribute('aria-current', 'page');\n  breadcrumb.appendChild(li);\n};\n\n/**\r\n * Get a parameter by name from page URL.\r\n */\nvar getParameterByName = function getParameterByName(name, url) {\n  if (!url) url = window.location.href;\n  name = name.replace(/[\\[\\]]/g, '\\\\$&');\n  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),\n      results = regex.exec(url);\n  if (!results) return null;\n  if (!results[2]) return '';\n  return decodeURIComponent(results[2].replace(/\\+/g, ' '));\n};\n\n//# sourceURL=webpack:///./src/js/restaurant_info.js?");

/***/ }),

/***/ "./src/js/sw.js":
/*!**********************!*\
  !*** ./src/js/sw.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.initSW = initSW;\n// service worker\nfunction initSW() {\n  if ('serviceWorker' in navigator) {\n\n    window.addEventListener('load', function () {\n      navigator.serviceWorker.register('/sw.js', {\n        scope: '/'\n      }).then(function (registration) {\n        // If registration is successful\n        console.log('ServiceWorker registration successful with scope: ', registration.scope);\n      }).catch(function (err) {\n        //If registration is failed :(\n        console.log('ServiceWorker registration failed:', err);\n      });\n    });\n  }\n}\n\n//# sourceURL=webpack:///./src/js/sw.js?");

/***/ }),

/***/ "./src/restaurant.js":
/*!***************************!*\
  !*** ./src/restaurant.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _restaurant_info = __webpack_require__(/*! ./js/restaurant_info */ \"./src/js/restaurant_info.js\");\n\nvar _sw = __webpack_require__(/*! ./js/sw */ \"./src/js/sw.js\");\n\n/**\r\n * Initialize Google map, called from HTML.\r\n */\n\ndocument.addEventListener('DOMContentLoaded', function (event) {\n  window.initMap = function () {\n    (0, _restaurant_info.fetchRestaurantFromURL)(function (error, restaurant) {\n      if (error) {\n        // Got an error!\n        console.error(error);\n      } else {\n        self.map = new google.maps.Map(document.getElementById('map'), {\n          zoom: 16,\n          center: restaurant.latlng,\n          scrollwheel: false\n        });\n        (0, _restaurant_info.fillBreadcrumb)();\n        (0, _restaurant_info.addMapMakers)();\n      }\n    });\n  };\n\n  (0, _sw.initSW)();\n});\n\n//# sourceURL=webpack:///./src/restaurant.js?");

/***/ })

/******/ });