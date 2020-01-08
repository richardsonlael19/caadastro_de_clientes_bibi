var vm = new Vue({
    el: "#application",
    data: {
        contador: 0

    },

    methods: {
        filial() {
            document.querySelector("#adcfilial").style.display = "none";
            document.querySelector("#adicionarfilial").style.display = "block";
        },

        vendedor() {
            document.querySelector("#maisvendedor").style.display = "none";
            document.querySelector("#maisvend").style.display = "block";
        },

        removefilial() {
            document.querySelector("#adicionarfilial").style.display = "none";
            document.querySelector("#adcfilial").style.display = "block";
        },

        removevendedor() {
            document.querySelector("#maisvend").style.display = "none";
            document.querySelector("#maisvendedor").style.display = "block";
        },

        adicionafilial() {

        }
    }
});