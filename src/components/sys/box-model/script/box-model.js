export default {
    data() {
        return {
            name: 'Button',
            route: 'button'
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
            console.log(this.$store.state.comp.render)
        }
    },
    mounted() {
    }
}