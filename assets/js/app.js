import Vue from 'vue';

var app = new Vue({
    el: '#app',
    delimiters: ['${', '}$'],
    data: {
        input_value_1: "",
        input_value_2: "",
        firstInputSelected: true,
        rates: document.getElementById("currentRate").value,
    },
    methods: {
        calculate_input_1: function (e) {
            this.firstInputSelected = true;
            this.calculate(e);
        },
        calculate_input_2: function (e) {
            this.firstInputSelected = false;
            this.calculate(e);
        },
        calculate: function (e) {
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
