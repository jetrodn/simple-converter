(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");



var app = new vue__WEBPACK_IMPORTED_MODULE_2__["default"]({
  el: '#app',
  delimiters: ['${', '}$'],
  data: {
    input_value_1: "",
    input_value_2: "",
    firstInputSelected: true,
    rates: document.getElementById("currentRate").value
  },
  methods: {
    calculate_input_1: function calculate_input_1(e) {
      this.firstInputSelected = true;
      this.calculate(e);
    },
    calculate_input_2: function calculate_input_2(e) {
      this.firstInputSelected = false;
      this.calculate(e);
    },
    calculate: function calculate(e) {
      var value = parseFloat(e.target.value);

      if (isNaN(value)) {
        this.input_value_2 = null;
        this.input_value_1 = null;
        return;
      }

      if (this.firstInputSelected) {
        this.input_value_2 = value;
        this.input_value_1 = (value * this.rates).toFixed(2);
      } else {
        this.input_value_1 = value;
        this.input_value_2 = (value / this.rates).toFixed(2);
      }
    }
  }
});

/***/ })

},[["./assets/js/app.js","runtime","vendors~js/app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIl0sIm5hbWVzIjpbImFwcCIsIlZ1ZSIsImVsIiwiZGVsaW1pdGVycyIsImRhdGEiLCJpbnB1dF92YWx1ZV8xIiwiaW5wdXRfdmFsdWVfMiIsImZpcnN0SW5wdXRTZWxlY3RlZCIsInJhdGVzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwibWV0aG9kcyIsImNhbGN1bGF0ZV9pbnB1dF8xIiwiZSIsImNhbGN1bGF0ZSIsImNhbGN1bGF0ZV9pbnB1dF8yIiwicGFyc2VGbG9hdCIsInRhcmdldCIsImlzTmFOIiwidG9GaXhlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFJQSxHQUFHLEdBQUcsSUFBSUMsMkNBQUosQ0FBUTtBQUNkQyxJQUFFLEVBQUUsTUFEVTtBQUVkQyxZQUFVLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUZFO0FBR2RDLE1BQUksRUFBRTtBQUNGQyxpQkFBYSxFQUFFLEVBRGI7QUFFRkMsaUJBQWEsRUFBRSxFQUZiO0FBR0ZDLHNCQUFrQixFQUFFLElBSGxCO0FBSUZDLFNBQUssRUFBRUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLEVBQXVDQztBQUo1QyxHQUhRO0FBU2RDLFNBQU8sRUFBRTtBQUNMQyxxQkFBaUIsRUFBRSwyQkFBVUMsQ0FBVixFQUFhO0FBQzVCLFdBQUtQLGtCQUFMLEdBQTBCLElBQTFCO0FBQ0EsV0FBS1EsU0FBTCxDQUFlRCxDQUFmO0FBQ0gsS0FKSTtBQUtMRSxxQkFBaUIsRUFBRSwyQkFBVUYsQ0FBVixFQUFhO0FBQzVCLFdBQUtQLGtCQUFMLEdBQTBCLEtBQTFCO0FBQ0EsV0FBS1EsU0FBTCxDQUFlRCxDQUFmO0FBQ0gsS0FSSTtBQVNMQyxhQUFTLEVBQUUsbUJBQVVELENBQVYsRUFBYTtBQUNwQixVQUFJSCxLQUFLLEdBQUdNLFVBQVUsQ0FBQ0gsQ0FBQyxDQUFDSSxNQUFGLENBQVNQLEtBQVYsQ0FBdEI7O0FBQ0EsVUFBSVEsS0FBSyxDQUFDUixLQUFELENBQVQsRUFBa0I7QUFDZCxhQUFLTCxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsYUFBS0QsYUFBTCxHQUFxQixJQUFyQjtBQUNBO0FBQ0g7O0FBQ0QsVUFBSSxLQUFLRSxrQkFBVCxFQUE2QjtBQUN6QixhQUFLRCxhQUFMLEdBQXFCSyxLQUFyQjtBQUNBLGFBQUtOLGFBQUwsR0FBcUIsQ0FBQ00sS0FBSyxHQUFHLEtBQUtILEtBQWQsRUFBcUJZLE9BQXJCLENBQTZCLENBQTdCLENBQXJCO0FBQ0gsT0FIRCxNQUdPO0FBQ0gsYUFBS2YsYUFBTCxHQUFxQk0sS0FBckI7QUFDQSxhQUFLTCxhQUFMLEdBQXFCLENBQUNLLEtBQUssR0FBRyxLQUFLSCxLQUFkLEVBQXFCWSxPQUFyQixDQUE2QixDQUE3QixDQUFyQjtBQUNIO0FBQ0o7QUF2Qkk7QUFUSyxDQUFSLENBQVYsQyIsImZpbGUiOiJqcy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5cbnZhciBhcHAgPSBuZXcgVnVlKHtcbiAgICBlbDogJyNhcHAnLFxuICAgIGRlbGltaXRlcnM6IFsnJHsnLCAnfSQnXSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGlucHV0X3ZhbHVlXzE6IFwiXCIsXG4gICAgICAgIGlucHV0X3ZhbHVlXzI6IFwiXCIsXG4gICAgICAgIGZpcnN0SW5wdXRTZWxlY3RlZDogdHJ1ZSxcbiAgICAgICAgcmF0ZXM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudFJhdGVcIikudmFsdWUsXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGNhbGN1bGF0ZV9pbnB1dF8xOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdGhpcy5maXJzdElucHV0U2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGUoZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNhbGN1bGF0ZV9pbnB1dF8yOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdGhpcy5maXJzdElucHV0U2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlKGUpO1xuICAgICAgICB9LFxuICAgICAgICBjYWxjdWxhdGU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIGlmIChpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0X3ZhbHVlXzIgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRfdmFsdWVfMSA9IG51bGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZmlyc3RJbnB1dFNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dF92YWx1ZV8yID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dF92YWx1ZV8xID0gKHZhbHVlICogdGhpcy5yYXRlcykudG9GaXhlZCgyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dF92YWx1ZV8xID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dF92YWx1ZV8yID0gKHZhbHVlIC8gdGhpcy5yYXRlcykudG9GaXhlZCgyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==