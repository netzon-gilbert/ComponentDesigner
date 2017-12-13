export default {
    data() {
        return {
            name: 'Button',
            route: 'button'
        }
    },
    methods: {
        compRender(nput) {
            this.$store.commit('boxModelStyles')
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