const app = Vue.createApp(
    {
        data() {
            return {
                number : 0,
            }
        },
        methods: {
            increment() {
                this.number++;
            }
        }
    }
).mount('.app');