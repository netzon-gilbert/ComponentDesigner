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
            console.log(this.$store.state.boxShadow.inset.val)
            console.log(this.$store.state.boxShadow.color.val)
        }
    },
    mounted() {
    }
}