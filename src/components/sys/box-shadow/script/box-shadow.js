export default {
    data() {
        return {
        }
    },
    methods: {
        compRender(nput) {
            if (nput) {
                this.$store.state.comp.render = true
            }
            else {
                this.$store.state.comp.render = false
            }
        }
    },
    mounted() {
    }
}