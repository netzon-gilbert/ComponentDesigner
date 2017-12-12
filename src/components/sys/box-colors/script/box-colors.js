export default {
    data() {
        return {
        }
    },
    components: {
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