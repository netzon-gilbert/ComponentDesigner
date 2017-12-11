export default {
    data() {
        return {
            name: 'Button',
            route: 'button',
            styleSheet: ''
        }
    },
    methods: {
        boxModelStyles() {
            let box = this.$store.state.boxModel,
                padding = box[0],
                margin = box[1],
                width = box[2],
                radius = box[3],
                boxStyles = ''

            function procPadd() {
                let style = ''
                for (let i = 0; i < padding.sides.length; i++) {
                    style += 'padding-'
                    style += padding.sides[i].sname
                    style += ':'
                    style += padding.sides[i].side
                    style += 'px;'
                }
                return style
            }

            boxStyles += procPadd()
            return boxStyles
        },
        renderComp() {
            this.styleSheet = this.boxModelStyles()
        }
    },
    mounted() {
        this.renderComp()
    }
}